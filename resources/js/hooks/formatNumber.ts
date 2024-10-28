export function numberWithCommas(x: string): string {
    let pattern: RegExp = /(-?\d+)(\d{3})/g;
    while (pattern.test(x)) {
        x = x.replace(pattern, "$1,$2");
    }
    return x;
}
