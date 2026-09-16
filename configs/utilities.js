export { nameReplacementsAllowList } from 'eslint-config-cheminfo/utilities';

/**
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/name-replacements.md#react
 */
export const nameReplacements = {
  param: false,
  params: false,
  prev: false,
  prop: false,
  props: false,
  ref: false,
  refs: false,
};
