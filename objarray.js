// ✅ Updating the property of a single Object {first obj to match}
const arr2 = [
  { id: 1, name: "Alice" },
  { id: 1, name: "Bob" },
  { id: 3, name: "Charlie" },
]

for (const obj of arr2) {
  if (obj.id === 1) {
    obj.name = "Alfred"

    break
  }
}

// 👇️ [{id: 1, name: 'Alfred'}, {id: 1, name: 'Bob'}, {id: 3, name: 'Charlie}]
console.log(arr2)

///
//7

// ✅ Updating properties in multiple objects
const arr1 = [
  { id: 1, name: "Alice" },
  { id: 1, name: "Bob" },
  { id: 3, name: "Charlie" },
]
const newArr = arr1.map((obj) => {
  if (obj.id === 1) {
    return { ...obj, name: "Alfred" }
  }

  return obj
})

// 👇️ [
//  {id: 1, name: 'Alfred'}, {id: 1, name: 'Alfred'}, {id: 3, name: 'Charlie}
// ]
console.log(newArr)

//
//
//

objarray.sort((a, b) => a.name - b.name) // sort obj array (reverse sort is b - a)

//
//

Math.random() < 0.5 // 50% chance
