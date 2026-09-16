import { defineConfig } from 'eslint/config';
import cheminfo from 'eslint-config-cheminfo';

import react from './base.js';

export default defineConfig(cheminfo, react);
