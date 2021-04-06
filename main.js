console.log(users)

const main = document.querySelector("main")

let tagCounts = {
 //  quis: 2,
 //  yolo: 3, 
}

users.forEach((user) => {
    user.tags.forEach((tagName) => {
        // check if the counts object already 
        // has a count for this tag
        // IF NOT, create a property named "insert tag name here", where the value is 0
        // Increment by one

        if (tagCounts[tagName] === undefined) {
            tagCounts[tagName] = 0
        }

        tagCounts[tagName] += 1
    })
})

// let tagCountsArray = Object.entries(tagCounts)
// console.log(tagCountsArray)

let tagCountsArray = []
for (let tagName in tagCounts) {
    let count = tagCounts[tagName]
    tagCountsArray.push({ tagName, count })
}

tagCountsArray.sort((item1, item2) => item2.count - item1.count)

let topTen = tagCountsArray.slice(0, 10)
console.log(topTen)

