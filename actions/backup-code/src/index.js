const core = require('@actions/core');
const exec = require('@actions/exec');
const path = require('path');
const fs = require('fs');

async function run() {
  try {
    const outputPath = core.getInput('output-path');
    const filename = core.getInput('filename');
    
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    const date = new Date().toISOString().split('T')[0];
    const zipPath = path.join(outputPath, `${filename}-${date}.zip`);

    const excludePatterns = [
      '*.git*',
      'node_modules/*',
      'build/*',
      'dist/*',
      'coverage/*',
      '.env*',
      '*.log',
      '.DS_Store',
      '.cache/*',
      'tmp/*',
      '*.zip'
    ];

    const zipArgs = [
      '-r',
      zipPath,
      '.',
      ...excludePatterns.flatMap(pattern => ['-x', pattern])
    ];

    await exec.exec('zip', zipArgs);
    core.setOutput('backup-path', zipPath);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
