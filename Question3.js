 // Write a function that converts HEX to RGB. Then Make that function autodect 
 // the formats so that if you enter HEX color format it returns RGB and if you 
 // enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.


const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))


const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

console.log(rgbToHex(0, 51, 255))
console.log(hexToRgb("#0033ff"))







