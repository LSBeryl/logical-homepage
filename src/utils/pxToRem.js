/**
 * px to rem function
 * @param {number} px
 * @returns rem
 */
export default function getRem(px) {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return px / rootFontSize;
}
