const main = document.querySelector("main")

// KATA 10 code below! 👇👇👇
let tagCounts = {} // This will look like: { quis: 2, yolo: 3 }

users.forEach((user) => {
    user.tags.forEach((tagName) => {
        // Check if the counts object is already tracking the count for this particular tag.
        // IF NOT, create a property named [[insert tag name here]], and set its value to 0.
        // Now that we are confident we're tracking this count, increment it by one.
        if (tagCounts[tagName] === undefined) {
            tagCounts[tagName] = 0
        }
        tagCounts[tagName] += 1
    })
})

let tagCountsArray = [] // This will look like: [{ tagName: "quis", count: 2 }, { tagName: "yolo", count: 3 }]
for (let tagName in tagCounts) {
    let count = tagCounts[tagName]
    tagCountsArray.push({ tagName: tagName, count: count })
                    // 👆 Here is where we are creating those objects from my previous comment.
                    // There is a short-hand way to write that out:
                    //     { tagName, count }
}

tagCountsArray.sort((item1, item2) => item2.count - item1.count) // Sort counts by greatest to least.
let topTenTags = tagCountsArray.slice(0, 10) // Now, let's copy out only the first 10.
console.log(topTenTags) // ❗❗❗ Ah, THIS is what we were looking for!!

// Time to start building our HTML elements for the page!
//
// You already know how to piece together elements to append to the page,
// so I'm going to approach this a little differently.
//
// I will still use .append(), but I will use .map() and the spread operator
// from this week's submodules together with .append() 
// to stretch myself and build what I want to show the user in a new way.

// We're going to use .map() to create an array of list item elements out of our tags! 🤔
let listItemElements = topTenTags.map((tag) => {
    let li = document.createElement("li")
    li.append(`The tag "${tag.tagName}" occurs ${tag.count} times.`)
    return li // Here, I've decided to take my array of topTenTags 
              // and create out of it an array of list item elements describing those tags.
              // Instead of this approach, I might have used .forEach() and then 
              // appended each <li> to the <ol> element individually – which is
              // pretty much what you are used to doing.
})

let h3 = document.createElement("h3")
h3.append("Kata 10: Top Ten Tags")
let ol = document.createElement("ol")
main.append(h3, ol) // Did you know you can append() multiple elements to the same element
                    // at the same time, sequentially? https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append#syntax
                    // Here, <h3> will be appended to <main> first, then <ol>.
                    // The alternative?: 
                    //     main.append(h3);
                    //     main.append(ol);
                    // Same effect. And now that we know this...
ol.append(...listItemElements) // See the spread operator can be used in argument lists, as well!
                               // Here, we are unpacking all the <li> elements in our array
                               // as individual arguments, which we are passing to .append().
                               // They will all be appended, in order, to our <ol>...
                               // just like main.append(h3, ol) above!
                               // That's exactly what we want!
                               //
                               // Plus, this will probably run faster.
                               // We know changing the DOM is very slow (in computer terms).
                               // So we want to find ways to do that less frequently, if we can.
                               // Now, we're changing the DOM ONCE to add ALL the list items.
