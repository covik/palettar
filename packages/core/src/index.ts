import * as CSS from 'csstype'

export interface PaletteItem {
    backgroundColor: CSS.Properties['backgroundColor'];
    borderColor: CSS.Properties['borderColor'];
    textColor: CSS.Properties['color'];
    textLargeColor: CSS.Properties['color'];
}

export interface Palette extends Record<string, PaletteItem> {}
