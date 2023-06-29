
const ulLi = document.getElementById('list')
const myList = document.getElementsByTagName("li");

for(let i = 0; i < myList.length; i++){
    myList[i].style.color = "purple";
}

// const notCar = document.getElementsByClassName("notCar");

// for(let i = 0; i < myList.length; i++){
//     notCar[i].style.color = "pink";
// } 

// live element
const listItems = document.getElementsByTagName('li')
const listsItems = document.querySelectorAll('li')
const addBtn = document.getElementById('add-btn')
function addButton() {
    const li = document.createElement('li')
    li.textContent = 'piano'
    ulLi.appendChild(li)
   
    // console.log("live:",listItems.length);
    console.log("static:",listsItems.length);
}
addBtn.addEventListener('click', addButton)

// static element
const node = document.getElementById('list')
if (node.parentNode) {
    node.parentNode.style.color = "blue";
  }
  if (node.parentNode) {
    // remove a node from the tree, unless
    // it's not in the tree already
    // node.parentNode.removeChild(node);
  }
  
