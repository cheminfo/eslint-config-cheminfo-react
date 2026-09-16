/* eslint-disable jsdoc/require-jsdoc */

export function isError(message) {
  return message.severity === 2;
}

export function isWarning(message) {
  return message.severity === 1;
}

export function isNotJsdoc(message) {
  return !message.ruleId.startsWith('jsdoc/');
}

export function getRuleId(message) {
  return message.ruleId;
}

export function getMessageId(message) {
  return message.messageId;
}

export function getRuleMessageIds(messages, ruleId) {
  return messages
    .filter((w) => getRuleId(w) === ruleId)
    .map(getMessageId)
    .toSorted((a, b) => a.localeCompare(b));
}
