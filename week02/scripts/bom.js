const list = document.querySelector("#list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const status = document.querySelector("#status");
const maxChapters = 10;

button.addEventListener("click", function () {
  const chapter = input.value.trim();

  if (chapter === "") {
    input.focus();
    return;
  }

  if (list.children.length >= maxChapters) {
    status.textContent =
      "You have reached the 10-chapter limit. Delete a chapter to add another.";
    input.focus();
    return;
  }

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = chapter;
  deleteButton.textContent = "❌";
  deleteButton.type = "button";

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    status.textContent = "";
    input.focus();
  });

  input.value = "";
  input.focus();

  if (list.children.length === maxChapters) {
    status.textContent =
      "You have reached the 10-chapter limit. Delete a chapter to add another.";
  }
});
