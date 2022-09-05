const toDoItems = document.getElementsByClassName("tasks")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItem();
});
const addItem = () => {
  console.log("hello");
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var divInput = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trashIcon = document.createElement("i");
  var editIcon = document.createElement("i");
  var updateIcon = document.createElement("i");
  updateIcon.className = "fa-solid fa-check-double";
  // <i class="fa-solid fa-pen"></i>
  editIcon.className = "fa-solid fa-pen";
  divParent.className = "item d-flex justify-content-between mb-1 parent mx-2";
  // divChild.className ="";
  divInput.innerHTML = input.value;
  divInput.className = "inp justify-content-center";
  // divParent.className = "justify-content-between parent";
  divChild.className = "child";
  trashIcon.classList = "fa-solid fa-trash";
  trashIcon.addEventListener("click", () => {
    divParent.remove();
  });
  editIcon.addEventListener("click", () => {
    divInput.contentEditable = true;
    // divInput.style.backgroundColor = "red";
    divInput.style.backgroundColor = "#94bbe9";
  });
  updateIcon.addEventListener("click", () => {
    divInput.contentEditable = false;
    divInput.style.backgroundColor = "aliceblue";
    console.log("done");
  });

  divParent.appendChild(divInput);
  divChild.appendChild(trashIcon);
  divChild.appendChild(editIcon);
  divChild.appendChild(updateIcon);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);
  input.value = "";
};
