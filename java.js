const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "" ;
}
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);




