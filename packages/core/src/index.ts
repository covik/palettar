import * as CSS from 'csstype'

type Color = CSS.DataType.NamedColor
    | `#${string}`
    | `rgb(${number},${number},${number})`
    | `rgba(${number},${number},${number},${number})`
    | `hsl(${number},${number}%,${number}%)`
    | `hsla(${number},${number}%,${number}%,${number})`;

export interface PaletteItem {
    backgroundColor: Color;
    borderColor: Color;
    textColor: Color;
    textLargeColor: Color;
}

export interface Palette extends Record<string, PaletteItem> {}

/**
 * Function primarily targets JS users.
 * With modern IDE they can benefit from Intellisense autosuggestions
 */
export function createColorPalette(colors: Palette): Palette {
    return colors;
}
