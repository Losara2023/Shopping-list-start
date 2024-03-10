const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");


function addItem(e){
  e.preventDefault()
  let newItem = itemInput.value
  // Validate Input
  if(newItem ==="" ){
    alert("Please add an item!")
    return
  }

  // Create List item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem))

  const button = createButton("remove-item btn-link text-red");
li.appendChild(button)
itemList.appendChild(li)
itemInput.value="";
}

function createButton(classes){
const button = document.createElement("button")
button.className = classes;
const icon = createIcon("fa-solid fa-xmark")
button.append(icon);
return button
}
function createIcon(classes){
const icon=document.createElement("i")
icon.className=classes
return icon
}

// Event LIstner 
itemForm.addEventListener("submit",addItem)