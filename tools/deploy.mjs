// ---------------------------------------------------------------------------
// Publish the built site to retrohof.co.uk using Web Deploy (msdeploy).
//
//   node tools/deploy.mjs --whatif    show what would change, change nothing
//   node tools/deploy.mjs             upload (adds and updates only)
//   node tools/deploy.mjs --clean     also delete remote files not in the build
//
// Connection details come from the hosting publish profile (MSDeploy entry):
//   https://win6046.site4now.net:8172/msdeploy.axd?site=boner28-003-site5
//   site boner28-003-site5, user boner28-003
//
// The password is read from RETROHOF_WEBDEPLOY_PASSWORD. Set it for the
// terminal session only — never commit it, never paste it into a file:
//   PowerShell   $env:RETROHOF_WEBDEPLOY_PASSWORD = 'the-password'
//   Git Bash     export RETROHOF_WEBDEPLOY_PASSWORD='the-password'
//
// Note: msdeploy has no way to take a password on stdin, so it is passed as a
// provider setting. That means it is briefly visible in this machine's own
// process list while the command runs — the same as any Visual Studio publish.
// It is not written to disk, not logged, and redacted from error output here.
// ---------------------------------------------------------------------------
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { stage } from './stage.mjs';

const SITE = 'boner28-003-site5';
const ENDPOINT = `https://win6046.site4now.net:8172/msdeploy.axd?site=${SITE}`;
const USER = 'boner28-003';

const ROOT = process.cwd();
const STAGE = join(ROOT, '.deploy');

const WHATIF = process.argv.includes('--whatif');
const CLEAN = process.argv.includes('--clean');

const MSDEPLOY = [
  String.raw`C:\Program Files\IIS\Microsoft Web Deploy V3\msdeploy.exe`,
  String.raw`C:\Program Files (x86)\IIS\Microsoft Web Deploy V3\msdeploy.exe`,
  String.raw`C:\Program Files\IIS\Microsoft Web Deploy V2\msdeploy.exe`,
].find((p) => existsSync(p));

function run(exe, args, redact) {
  return new Promise((resolve) => {
    // spawn directly, not via a shell, so nothing reaches shell history
    const cp = spawn(exe, args, { windowsVerbatimArguments: false });
    let out = '';
    const take = (d) => { out += d.toString(); };
    cp.stdout.on('data', take);
    cp.stderr.on('data', take);
    cp.on('error', (e) => resolve({ code: -1, out: String(e.message) }));
    cp.on('close', (code) => {
      const safe = redact ? out.split(redact).join('********') : out;
      resolve({ code, out: safe });
    });
  });
}

/* ------------------------------------------------------------------ main -- */

if (!MSDEPLOY) {
  console.error('msdeploy.exe not found.\n');
  console.error('Install "Web Deploy 3.6" from Microsoft, or run the publish from');
  console.error('Visual Studio using the .PublishSettings file.');
  process.exit(1);
}

// IIS payload: includes web.config, excludes _headers and .nojekyll.
const { count, bytes } = await stage({ host: 'iis', out: '.deploy' });
console.log(`Staged ${count} files (${(bytes / 1024 / 1024).toFixed(1)} MB) in .deploy/`);
console.log(`Target  ${ENDPOINT}`);
console.log(`Site    ${SITE}   user ${USER}`);
console.log(CLEAN
  ? 'Mode    CLEAN — remote files not present in the build will be DELETED'
  : 'Mode    add/update only (remote files not in the build are left alone)');
console.log(WHATIF ? 'Run     --whatif: nothing will actually change\n' : '');

const password = process.env.RETROHOF_WEBDEPLOY_PASSWORD;
if (!password) {
  console.error('\nRETROHOF_WEBDEPLOY_PASSWORD is not set.\n');
  console.error('Set it for this terminal session, then re-run:');
  console.error("  PowerShell   $env:RETROHOF_WEBDEPLOY_PASSWORD = 'the-password'");
  console.error("  Git Bash     export RETROHOF_WEBDEPLOY_PASSWORD='the-password'\n");
  console.error('The files are staged in .deploy/ either way, so you can inspect');
  console.error('exactly what would be published before supplying it.');
  process.exit(1);
}

const dest = [
  `contentPath=${SITE}`,
  `computerName=${ENDPOINT}`,
  `userName=${USER}`,
  `password=${password}`,
  'authType=Basic',
  'includeAcls=False',
].join(',');

const args = [
  '-verb:sync',
  `-source:contentPath=${STAGE}`,
  `-dest:${dest}`,
  '-allowUntrusted',           // shared-hosting certs rarely match the hostname
  '-retryAttempts:3',
  '-retryInterval:2000',
];
if (!CLEAN) args.push('-enableRule:DoNotDeleteRule');
if (WHATIF) args.push('-whatif');

const { code, out } = await run(MSDEPLOY, args, password);
console.log(out.trim());

if (code === 0) {
  console.log(WHATIF
    ? '\nWhat-if complete — nothing was changed.'
    : '\nPublished. Check https://www.retrohof.co.uk/ and hard-refresh (Ctrl+F5).');
} else {
  console.error(`\nmsdeploy exited ${code}.`);
  console.error('Common causes: wrong password, Web Management Service blocked,');
  console.error('or the hosting control panel needing Web Deploy switched on.');
  process.exitCode = 1;
}
