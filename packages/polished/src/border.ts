import type { Color, PaletteItem } from '@palettar/core';
import { darken, lighten } from 'polished';

export function darkBorder(from: Color): PaletteItem['borderColor'] {
  return darken(0.2, from) as PaletteItem['borderColor'];
}

export function lightBorder(from: Color): PaletteItem['borderColor'] {
  return lighten(0.2, from) as PaletteItem['borderColor'];
}
