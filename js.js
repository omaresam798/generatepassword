let generate = document.getElementById("generate")
let password = document.getElementById("password")

const tall = 12
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbol = "@#$%^&*|~()_}{[]></-+"
const all = upperCase + lowerCase + numbers + symbol

function Random() {
    pass = ""
    while (tall > pass.length) {
        pass += all[Math.floor(Math.random() * all.length)]
    }
    password.value = pass
}


function copypass() {
    password.select();
    document.execCommand("copy")
}