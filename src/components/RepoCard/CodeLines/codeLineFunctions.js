export function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export function getCodeLinesColor (rowsCount){
    const MAX_CODE_LINES = 100000
    rowsCount = Math.max(Math.min(MAX_CODE_LINES, rowsCount), 1)

    let value = scale(rowsCount, 0, MAX_CODE_LINES, 0, 510)
    let red = 0, green = 0, blue = 0

    if (value < 255) {
        red = 255
        green = Math.sqrt(value)
        green = Math.round(green * 16)
        blue = 0
    } else {
        green = 255
        value = value - 255
        red = 256 - (value * value / 255)
        red = Math.round(red)
        blue = 0
    }

    green = green.toString(16)
    red = red.toString(16)
    blue = blue.toString(16)

    green = green.length > 1 ? green : '0' + green
    red = red.length > 1 ? red : '0' + red
    blue = blue.length > 1 ? blue : '0' + blue

    let color = '#' + red + green + blue
    // console.table({rowsCount,value,red,green,blue, color})
    return color
}