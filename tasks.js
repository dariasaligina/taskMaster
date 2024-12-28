"use strict";

document.getElementById("content").innerHTML = localStorage.getItem("info");

let allTasks = document.querySelectorAll(".tasks");

for (let i = 0; i < allTasks.length; i += 1) {
  allTasks[i].firstChild.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      document
        .getElementById("completed")
        .appendChild(event.currentTarget.parentElement);
    } else {
      document
        .getElementById("to_do")
        .appendChild(event.currentTarget.parentElement);
    }
  });
  allTasks[i].lastChild.addEventListener("click", function (event) {
    event.currentTarget.parentElement.remove();
  });
}

document.getElementById("new_task").addEventListener("click", function (event) {
  let input = document.getElementById("in").value;
  if (input == "") return;

  let task = document.createElement("div");
  task.className = "tasks";
  let cb = document.createElement("input");
  cb.type = "checkbox";

  task.appendChild(cb);
  let lb = document.createElement("label");
  lb.textContent = input;
  task.appendChild(lb);
  document.getElementById("to_do").appendChild(task);

  let bt = document.createElement("button");
  bt.className = "deliteButton";

  bt.innerHTML = '<i class="bi bi-trash3-fill"></i>';

  task.appendChild(bt);

  localStorage.setItem("info", document.getElementById("content").innerHTML);

  document.getElementById("in").value = "";
});
