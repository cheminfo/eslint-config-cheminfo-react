import { defineConfig } from 'eslint/config';
import ts from 'eslint-config-cheminfo-typescript';

import react from './configs/index.js';

export default defineConfig(ts, react);
