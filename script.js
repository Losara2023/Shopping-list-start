const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");



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


  // Add Li to DOM 
  itemList.appendChild(li);
  checkUI();
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
    if(confirm("Are you sure to delete this item?")){
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  
  }
}

function clearItems(){
  // first and easy way
  // itemList.innerHTML=""
  // Second way
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}


function filterItems(e){
  const items = document.querySelectorAll("li");
  const text = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLocaleLowerCase();
    if(itemName.indexOf(text)!=-1){
      item.style.display="flex"
    }else{
      item.style.display="none"
    }
    
  }
  )
  
}



// Step three i make function to check for UI if include any list item on web page .
function checkUI(){
  const items = document.querySelectorAll("li");
if(items.length===0){
  clearBtn.style.display="none"
  itemFilter.style.display="none"
}else{
  clearBtn.style.display="block"
  itemFilter.style.display="block"
}
return
}


itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click",clearItems);
itemFilter.addEventListener("input",filterItems)

checkUI();
