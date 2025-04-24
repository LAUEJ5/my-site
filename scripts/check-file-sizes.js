const fs = require('fs');
const path = require('path');

const MAX_SIZE = 100 * 1024 * 1024; // 100MB in bytes
const MEDIA_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mov', '.webm'];

function checkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let hasLargeFiles = false;

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively check subdirectories
      if (checkDirectory(fullPath)) {
        hasLargeFiles = true;
      }
    } else {
      // Check file size
      const ext = path.extname(file).toLowerCase();
      if (MEDIA_EXTENSIONS.includes(ext) && stat.size > MAX_SIZE) {
        console.error(`❌ File too large: ${fullPath} (${(stat.size / (1024 * 1024)).toFixed(2)}MB)`);
        hasLargeFiles = true;
      }
    }
  });

  return hasLargeFiles;
}

console.log('🔍 Checking for files larger than 100MB...\n');

const hasLargeFiles = checkDirectory('public');

if (hasLargeFiles) {
  console.error('\n❌ Found files larger than 100MB. Please reduce their size before deployment.');
  process.exit(1);
} else {
  console.log('✅ All files are under 100MB. Ready for deployment!');
  process.exit(0);
} 