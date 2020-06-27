export function getChartColors(count: number): string[] {
    let presets = [
        '#003f5c', '#2f4b7c',
        '#665191', '#a05195',
        '#d45087', '#f95d6a',
        '#ff7c43', '#ffa600'
    ]
    if (count < 9) {
        return presets.slice(0, count)
    } else {
        let newColors = []
        for (let index = 0; index < count - 8; index++) {
            let hexNumber = Math.floor(Math.random() * Math.floor(10000))
            let hexString = hexNumber.toString()
            let paddedString = hexString.padStart(4 - hexString.length, '0')
            let randomColor = presets[Math.floor(Math.random() * presets.length)]
            newColors.push(randomColor.slice(0, 3) + paddedString)
        }
        return presets
    }
}