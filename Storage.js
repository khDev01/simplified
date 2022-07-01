// Storing data in the browser
// Recomended to use local and session storage

localStorage.setItem("name", "ahmed")
localStorage.getItem("name") // ahmed
localStorage.removeItem("name")

sessionStorage.setItem("name", "ahmed")
sessionStorage.getItem("name") // ahmed
sessionStorage.removeItem("name")

document.cookie = `name=ahmed; expires=${new Date(9999, 0, 1).toUTCString()}`
document.cookie = `age=40; expires=${new Date(9999, 0, 1).toUTCString()}`
// cannot get individual cookie. Only able toget all cookies in the document.cookie object
document.cookie // name=ahmed; age=40
// required to give no value and set expiration in the past
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
