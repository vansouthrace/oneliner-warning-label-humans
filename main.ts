import fs from 'node:fs';
import path from 'node:path';

const entry = `WARNING: this human contains strong opinions, 47 unfinished side projects, and a sleep schedule held together by alarms. Approach with snacks.`;
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry);
