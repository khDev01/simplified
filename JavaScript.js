// copy to clipboard
navigator.clipboard.writeText(String)

// console log style
var style = "color: red; background: #eee; font-size: 50 "
console.log("%c Text in Blue", style)

// prevent user from console.log
console.log = function () {
  console.error(" Logging by user is disabled ")
}

// log after delay
console.delayLog = function (delay, message) {
  var style =
    "color: rgb(249, 162, 34);" +
    "font-size: 60px;" +
    "font-weight: bold;" +
    "text-shadow: 1px 1px 5px rgb(249, 162, 34);" +
    "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);"
  setTimeout(function () {
    console.log(message, style)
  }, delay)
}
console.delayLog(1000, "%cDelayed Log")
