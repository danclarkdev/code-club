export class ColorMaker {
    public static makeRandomHexColour(): string {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255); const b = Math.floor(Math.random() * 255); return ColorMaker.rgbToHex(r, g, b);
    }

    private static rgbToHex(r: Number, g: Number, b: Number) {
        return "#" + ColorMaker.componentToHex(r) + ColorMaker.componentToHex(g) + ColorMaker.componentToHex(b);
    }

    private static componentToHex(c: Number) {
        const hex = c.toString(16); return hex.length === 1 ? "0" + hex : hex;
    }
}