import { basename, resolve } from 'node:path';
import process from 'process';
import { loadEnv } from 'vite';

const PROJECT_ENV = loadEnv('', process.cwd());
const PROJECT_NAME = PROJECT_ENV.VITE_APP_NAME ?? basename(__dirname);
const PROJECT_TITLE = PROJECT_ENV.VITE_APP_TITLE ?? PROJECT_NAME;

const SOURCE_DIR = resolve(__dirname, 'src');
const OUTPUT_DIR = resolve(__dirname, 'dist');
const VIEWS_DIR = resolve(SOURCE_DIR, 'views');

const BASE_PORT = 5137;

export { PROJECT_ENV, PROJECT_NAME, PROJECT_TITLE, SOURCE_DIR, OUTPUT_DIR, VIEWS_DIR, BASE_PORT };
