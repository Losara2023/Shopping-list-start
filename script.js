const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");

function addItem(e) {
  e.preventDefault();
  // Validate Input
  // Get Value typed in Input
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add an item!");
    return;
  }
  // Create List Item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  // Create Button get from  out Function
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);
  itemInput.value = "";
}

// Create Button
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems(){
  // first and easy way
  // itemList.innerHTML=""
  // Second way
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }
}

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click",clearItems);
