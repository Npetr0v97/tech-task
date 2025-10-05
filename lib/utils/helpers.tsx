export function formatNumber(num: number): string {
  if (num < 1000) return num.toString();

  const units = ['', 'K', 'M', 'B', 'T'];
  const unitIndex = Math.floor(Math.log10(num) / 3);
  const scaled = num / Math.pow(1000, unitIndex);

  const formatted = parseFloat(scaled.toFixed(2)).toString();

  return `${formatted}${units[unitIndex]}`;
}

export function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
