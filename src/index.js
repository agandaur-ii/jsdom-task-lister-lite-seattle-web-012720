document.addEventListener("DOMContentLoaded", () => {

});

function addItem(item) {
  let newItem = document.createElement("li");
  newItem.textContent = item;
  console.dir(newItem);
  document.querySelector("#tasks").appendChild(newItem);
}

const form = document.getElementById("create-task-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.dir(event.target)
  const taskToAdd = event.target["new-task-description"].value;
  addItem(taskToAdd);
});

