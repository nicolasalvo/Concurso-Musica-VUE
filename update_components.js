import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const file = path.join(dir, f);
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<main id="main"/g, '<main id="main" tabIndex="-1" className="focus:outline-none"');
  content = content.replace(/className="focus:outline-none" className="/g, 'className="focus:outline-none ');
  
  fs.writeFileSync(file, content);
});

console.log("Updated components");
