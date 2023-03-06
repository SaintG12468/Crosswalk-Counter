// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  // set countEl's innerText to the count
  countEl.textContent = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  let saveEntries = document.querySelector("#saveCount");
  let countStr = count + " -  ";
  saveEntries.textContent += countStr;

  // Improve line 14-15
  // saveEntries.append(count + " - ");

  //Reset count
  // Set the count to zero
  count = 0;
  // Set the textContent to zero
  countEl.textContent = 0;

  return console.log("Save", count);
}
