// Create SVG
module.exports = (shape, text) => {
    return  `<svg width="300" height="200">
    <rect width="100%" height="100%" fill="white" />

    ${shape}

    ${text}
</svg>`
}