let array = [0,1,2,3,4,5,6,7,8,9,10];

//Display array elements on the page
function showArray() {
    tidyUp()
    array.forEach((item, index) => {
        let arrayItem = `Item ${index + 1}: ${item}`;
        let ul = document.querySelector("#arrayDisplay");
        let newLi = document.createElement("li");
        ul.appendChild(newLi);
        newLi.innerHTML = arrayItem
    });
};

//Clear Previous Content
function tidyUp() {
    let clearArray = document.querySelector("#arrayDisplay")
    clearArray.innerHTML = " "
}

//Add element to the end of the array
function addElement() {
    elementInput = document.querySelector("#arrayValue").value.trim();
    if (elementInput != "") {
        array.push(elementInput);
        elementInput.value = ""
        showArray()
    } else {
        alert("Error: Input must not be blank.")
    }

};

//Check that the array has something in it, then remove the final item
function removeLast() {
    if (array.length === 0) {
        alert("There is nothing to remove");
        return;
    };
    array.pop();
    showArray();
};

//Check that the array has something in it, then remove the final item
function removeFirst() {
    if (array.length === 0) {
        alert("There is nothing to remove");
        return;
    };
    array.shift();
    showArray();
}

//add an element to the array
function addFirstElement() {
    elementInput = document.querySelector("#arrayValue").value.trim();
    if (elementInput != "") {
        array.unshift(elementInput);
        elementInput.value = "";
        showArray();
    } else {
        alert("Error: Input must not be blank.")
    };
};

//Checks for an item at a specific point, and removes it.
function spliceArray() {
    if (array.length === 0) {
        alert("There is nothing to remove");
        return;
    };
    indexInput = document.querySelector("#indexValue");
    array.splice(indexInput.value + 1,1);
    indexInput.value = "";
    showArray();
};