import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const distDir = 'dist';
const assetsDir = path.join(distDir, 'assets');

async function postbuild() {
  try {
    await fs.mkdir(assetsDir, { recursive: true });

    const buildDirs = (await fs.readdir(distDir, { withFileTypes: true }))
      .filter(dirent => dirent.isDirectory() && dirent.name !== 'assets')
      .map(dirent => dirent.name);

    const slideMapping = {
      'main': 'index.html',
      'intro': 'intro.html',
      'oop': 'oop.html',
      'naming': 'naming.html',
      'document': 'document.html',
      'architecture': 'architecture.html'
    };

    for (const dir of buildDirs) {
      const sourceDir = path.join(distDir, dir);
      const sourceHtml = path.join(sourceDir, 'index.html');

      const newHtmlName = slideMapping[dir];
      if (!newHtmlName) continue;

      const destHtml = path.join(distDir, newHtmlName);
      await fs.rename(sourceHtml, destHtml);

      const sourceAssetsDir = path.join(sourceDir, 'assets');
      try {
        await fs.access(sourceAssetsDir); // ディレクトリの存在確認
        execSync(`npx cpx '${path.join(sourceAssetsDir, '**/*')}' '${assetsDir}'`);
      } catch (error) {
        // assetsディレクトリがなくても無視
      }

      await fs.rm(sourceDir, { recursive: true, force: true });
    }
    console.log('Post-build process completed successfully.');
  } catch (error) {
    console.error('Error during post-build process:', error);
    process.exit(1);
  }
}

postbuild();