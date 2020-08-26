/**
 * General function to save the a file locally
 * @param fileName the file name
 * @param innerHTML html markup property for the file
 * @param blob the file blob
 */
export function saveFile(fileName: string, innerHTML: string, blob: Blob) {
    let link = document.createElement('a')
    link.style.cssText = "display: none";
    link.download = fileName
    link.innerHTML = innerHTML
    link.href = window.URL.createObjectURL(blob)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
}