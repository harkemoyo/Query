

const myList = document.getElementsByTagName("li");

for(let i = 0; i < myList.length; i++){
    myList[i].style.color = "purple";
}

// const notCar = document.getElementsByClassName("notCar");

// for(let i = 0; i < myList.length; i++){
//     notCar[i].style.color = "pink";
// } 

// live element
const ulLi = document.getElementById('list')
const addBtn = document.getElementById('add-btn')
function addButton() {
    const li = document.createElement('li')
    li.textContent = 'piano'
    ulLi.appendChild(li)
    console.log(ulLi);
}
addBtn.addEventListener('click', addButton)