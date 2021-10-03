// string or number => number
// function formatNumber(s: string | number): string {
//     return s as string
// }

function formatNumber(s: string | number) {
    return typeof s === 'number' ? `${s}` : s
}

function add(a: number): number
function add(a: string): string
function add(a: any) {
    return a 
}
