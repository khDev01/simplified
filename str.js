// String replace last instance
const myStr = nounarb
console.log(myStr)
const lastIndex = myStr.lastIndexOf("1")
const replacement = "2"
const replaced =
  myStr.substring(0, lastIndex) + replacement + myStr.substring(lastIndex + 1)
console.log(replaced)
//
// END: String replace last instance
//
//  String replace last instance V2
String.prototype.replaceLast = function (lastIndex, replacement) {
  return this.split(" ")
    .reverse()
    .join(" ")
    .replace(new RegExp(lastIndex), replacement)
    .split(" ")
    .reverse()
    .join(" ")
}

myStr = myStr.replaceLast("1", "2")

//
// END: String replace last instance V2
//
