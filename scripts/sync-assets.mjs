import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const publicDir = resolve(root, 'public');

mkdirSync(publicDir, { recursive: true });

const copyIfExists = (source, target, options = {}) => {
  if (!existsSync(source)) {
    return;
  }
  cpSync(source, target, { recursive: true, force: true, ...options });
};

copyIfExists(resolve(root, 'styles.css'), resolve(publicDir, 'styles.css'));
copyIfExists(resolve(root, 'CNAME'), resolve(publicDir, 'CNAME'));
