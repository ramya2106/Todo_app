const userdata = document.getElementById("item");
const addtaskbtn = document.getElementById("addbtn");
const clrtaskbtn = document.getElementById("clear");
const itemList = document.getElementById("items");
addtask();
addtaskbtn.onclick = ()=>{
let input = userdata.value;
let userInput = localStorage.getItem("showitem");
if(userInput == null){
    inputlist = [];
} else {
    inputlist = JSON.parse(userInput);
}
inputlist.push(input);
localStorage.setItem("showitem", JSON.stringify(inputlist));
addtask();
}
clrtaskbtn.onclick = ()=>{
    deleteAllTask();
}
function addtask() {

let userInput = localStorage.getItem("showitem");
if(userInput === null){
    inputlist = [];
} else {
    inputlist = JSON.parse(userInput);
}
const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = inputlist.length;
let newLiTag = "";
    inputlist.forEach((element, index) => {
        console.log(index);
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  itemList.innerHTML = newLiTag; 
  userdata.value = ""; 
}

function deleteAllTask(){
 inputlist = [];
 localStorage.setItem("showitem",JSON.stringify(inputlist));
 addtask();
}

function deleteTask(index){
    let userInput = localStorage.getItem("showitem");
    inputlist = JSON.parse(userInput);
    inputlist.splice(index,1);
    localStorage.setItem("showitem",JSON.stringify(inputlist));
 addtask();
}