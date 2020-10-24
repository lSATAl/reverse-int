module.exports = function reverse (n) {
    let a = String(n)
    return parseInt(a.split("").reverse().join(""))
}
