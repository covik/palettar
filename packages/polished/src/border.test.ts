import { describe, expect, it } from 'vitest';
import { darkBorder, lightBorder } from './border.js';

describe(`#${darkBorder.name}`, () => {
  it('should return a 20 percent darker color', () => {
    const sourceColor = '#666';
    const darkerColor = '#333';
    expect(darkBorder(sourceColor)).toStrictEqual(darkerColor);
  });
});

describe(`#${lightBorder.name}`, () => {
  it('should return a 20 percent lighter color', () => {
    const sourceColor = '#666';
    const lighterColor = '#999';
    expect(lightBorder(sourceColor)).toStrictEqual(lighterColor);
  });
});
