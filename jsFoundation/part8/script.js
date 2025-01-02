// Example 1 : Accessing DOM Elements

/*

const myParagraph = document.getElementById("myParagraph");
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", () => {
    myParagraph.textContent = "paragraph is changed"
})

*/

// another way of doing same upper thing -->

document.getElementById('changeTextButton').addEventListener('click', () => {
    let myParagraph = document.getElementById('myParagraph');
    myParagraph.textContent = "paragraph is changed"
});

// Example 2 : Traversing the DOM

document.getElementById('highlightFirstCity').addEventListener('click', function () {  // here we use normal function because arrow function don't give the context whose calling it(check using 'this' keyword)
    const cityList = document.getElementById('citiesList');
    cityList.firstElementChild.classList.add('highlight');
});


// Example 3 : Manipulating DOM Elements

document.getElementById('changeOrder').addEventListener('click', function(){
    let type = document.getElementById('coffeeType');
    type.textContent = "Espresso";
});


// Example 4: Creating and Inserting Elements

document.getElementById('addNewItem').addEventListener('click', function(){
    let newItem = document.createElement('li');
    newItem.textContent = "Peanut Butter";
    document.getElementById('shoppingList').appendChild(newItem);
});


// Example 5: Removing DOM Elements

document.getElementById('removeLastTask').addEventListener('click', function(){
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
});

// Example 6: Event Handling in the DOM

document.getElementById('clickMeButton').addEventListener('click', function(){
    alert("Hello noobie!!")
});


// Example 7: Event Delegation

document.getElementById('teaList').addEventListener('click', function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert(`You selected ${event.target.textContent}`);
    }
});

// Example 8: Form Handling

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;
    document.getElementById('feedbackDisplay').textContent = `Feedback is: ${feedback}.`;
});


// Example 9: DOM Content Loaded

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded now. "
});


// Example 10: CSS Classes Manipulation


document.getElementById('toggleHighlight').addEventListener('click', function(){
    let text = document.getElementById('descriptionText');
     text.classList.toggle('highlight'); 
});

