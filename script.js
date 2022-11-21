
const form = document.getElementById("form")
const qr = document.getElementById("qr-code")
const warningMsg = document.getElementById("warning")

const generateQRCode = (url, size) => {
    const qrCode = new QRCode("qr-code", {
        text: url,
        width: size,
        height: size
    })
}

const clear = () => {
    qr.innerHTML = ""
    const savelink = document.getElementById("save-link")
    if (savelink) {
        savelink.remove()
    }
}

const saveBtn = (url) => {
    const link = document.createElement("a")
    link.id = "save-link"
    link.href = url
    link.download = "qr-code"
    link.innerHTML = "Save Image"
    document.getElementById("qr-code-container").appendChild(link)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    clear()
    const url = document.getElementById("url").value
    const size = document.getElementById("size").value

    if (url === "") {
        warningMsg.innerText = "Please add a valid Url"
    }

    else {
        generateQRCode(url, size)

        setTimeout(() => {
            const saveURL = qr.querySelector("img").src
            saveBtn(saveURL)

        }, 100);
    }
})