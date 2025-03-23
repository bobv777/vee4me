import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function restoreFromBackup(backupId) {
  try {
    const backupDir = join(__dirname, '..', 'backups', backupId);
    const manifestPath = join(backupDir, 'manifest.json');

    // Read manifest
    const manifestContent = await readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestContent);

    // Restore files
    for (const file of manifest.files) {
      const filePath = join(__dirname, '..', file.path);
      
      // Ensure directory exists
      await mkdir(dirname(filePath), { recursive: true });
      
      // Write file content
      await writeFile(filePath, file.content);
    }

    console.log(`Restore completed successfully from: ${backupId}`);
  } catch (error) {
    console.error('Error restoring from backup:', error);
    throw error;
  }
}

// Get backup ID from command line argument
const backupId = process.argv[2];
if (!backupId) {
  console.error('Please provide a backup ID');
  process.exit(1);
}

// Execute restore
restoreFromBackup(backupId).catch(console.error);