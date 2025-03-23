import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = join(__dirname, '..', 'backups', `restore_point_${timestamp}`);
  
  try {
    // Create backup directory
    await mkdir(backupDir, { recursive: true });

    // Create manifest file
    const manifest = {
      timestamp,
      version: process.env.npm_package_version,
      files: []
    };

    // Function to recursively read directory
    async function processDirectory(dir, baseDir = '') {
      const entries = await readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        const relativePath = join(baseDir, entry.name);

        // Skip node_modules, .git, and backups directories
        if (['node_modules', '.git', 'backups', 'dist'].includes(entry.name)) {
          continue;
        }

        if (entry.isDirectory()) {
          await processDirectory(fullPath, relativePath);
        } else {
          // Read and store file content
          const content = await readFile(fullPath, 'utf-8');
          manifest.files.push({
            path: relativePath,
            content
          });
        }
      }
    }

    // Start processing from project root
    await processDirectory(join(__dirname, '..'));

    // Save manifest
    await writeFile(
      join(backupDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );

    console.log(`Backup created successfully at: ${backupDir}`);
    return backupDir;
  } catch (error) {
    console.error('Error creating backup:', error);
    throw error;
  }
}

// Execute backup
createBackup().catch(console.error);