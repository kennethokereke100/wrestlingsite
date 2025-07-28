const fs = require('fs');
const path = require('path');

// Create .nojekyll file in the out directory
const outDir = path.join(process.cwd(), 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Create .nojekyll file
fs.writeFileSync(nojekyllPath, '');

console.log('✅ Created .nojekyll file in out directory'); 