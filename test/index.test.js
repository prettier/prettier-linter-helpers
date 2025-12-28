const {describe, test} = require('node:test');
const assert = require('node:assert/strict');
const {showInvisibles, generateDifferences} = require('..');

describe('showInvisibles', () => {
  test('shows invisibles', () => {
    assert.strictEqual(showInvisibles('1 2\n3\t4\r5'), '1·2⏎3↹4␍5');
  });
});

describe('generateDifferences', () => {
  test('operation: insert', () => {
    const differences = generateDifferences('abc', 'abcdef');
    assert.deepStrictEqual(differences, [
      {operation: 'insert', offset: 3, insertText: 'def'},
    ]);
  });

  test('operation: delete', () => {
    const differences = generateDifferences('abcdef', 'abc');
    assert.deepStrictEqual(differences, [
      {operation: 'delete', offset: 3, deleteText: 'def'},
    ]);
  });

  test('operation: replace', () => {
    const differences = generateDifferences('abc', 'def');
    assert.deepStrictEqual(differences, [
      {operation: 'replace', offset: 0, deleteText: 'abc', insertText: 'def'},
    ]);
  });
});
