export function formatPrice(num) {
    // Returns Number with the first two decimal digits (ex: 0000.00)
    return Number(Math.round(num * 100) / 100).toFixed(2);
}