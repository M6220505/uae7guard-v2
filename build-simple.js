const { execSync } = require('child_process');
const fs = require('fs');

console.log('Building client with Vite...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('✅ Client built successfully');
} catch (e) {
  console.error('❌ Client build failed');
  process.exit(1);
}

console.log('Building server with esbuild...');
try {
  execSync('npx esbuild server/index.ts --bundle --platform=node --outfile=dist/index.cjs --external:better-sqlite3 --external:@capacitor/* --format=cjs', { stdio: 'inherit' });
  console.log('✅ Server built successfully');
} catch (e) {
  console.error('❌ Server build failed');
  process.exit(1);
}

console.log('✅ Build complete!');
