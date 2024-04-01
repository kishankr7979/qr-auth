const qrHtmlTemplate = (qr) => {
    const imageElement = `<img src="${qr}" alt="QR Code" />`
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QR Code Generator</title>
</head>
<body>
  <div id="qrcode"></div>` + imageElement + `</body>
</html>`

    return html
}

export default qrHtmlTemplate