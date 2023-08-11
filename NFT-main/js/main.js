let buttonwallet = document.querySelector(".button-rgb-origin")
let openwallet = document.querySelector(".wallet-page")
let body = document.querySelector(".body")
let add = document.querySelector(".add")

function tap() {
    body.style.overflow = "hidden"
    openwallet.style.display = "block"
}

function remove() {
    body.style.overflow = ""
    openwallet.style.display = "none"
}