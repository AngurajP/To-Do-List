// select input and add button , listitem

const input = document.getElementById("searchbar");
const addBtn = document.getElementById("addtask");
let listContainer = document.getElementById("list-container");

addBtn.addEventListener('click',()=>{
    if (input.value === '') {
        alert("Please enter your tasks")
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = "";
    saveData();
})

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('tasks');
        saveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();