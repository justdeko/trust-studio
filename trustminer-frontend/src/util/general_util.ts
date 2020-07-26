export function saveFile(fileName: string, innerHTML: string, blob: Blob) {
    let link = document.createElement('a')
    link.download = fileName
    link.innerHTML = innerHTML
    link.href = window.URL.createObjectURL(blob)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
}