const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const uls = document.querySelector(".uls");

let list = [];
if (localStorage.getItem("lists")) {
  list = JSON.parse(localStorage.getItem("lists"));
  showList();
}

btn.addEventListener("click", function () {
  if (input.value === "") return;
  list.push(input.value);
  createAndDelete(input.value);
  localStorage.setItem("lists", JSON.stringify(list));
  input.value = "";
});

function showList() {
  list.forEach(function (item) {
    const li = document.createElement("li");
    const bntDel = document.createElement("button");
    const img = document.createElement("img");
    const checkBox = document.createElement("input");

    li.className = "li";
    uls.appendChild(li);
    li.textContent = item;

    checkBox.className = "check";
    checkBox.type = "checkbox";
    li.appendChild(checkBox);

    img.src = "img/urn.png";
    bntDel.className = "bntDel";
    li.appendChild(bntDel);

    bntDel.appendChild(img);

    bntDel.addEventListener("click", function () {
      list.forEach(function (item, i) {
        if (item == li.textContent) {
          list.splice(i, 1);
        }
      });
      uls.removeChild(li);
      localStorage.setItem("lists", JSON.stringify(list));
    });
  });
}

function createAndDelete(value) {
  const li = document.createElement("li");
  const bntDel = document.createElement("button");
  const checkBox = document.createElement("input");
  const img = document.createElement("img");

  uls.appendChild(li);
  li.className = "li";
  li.textContent = value;

  checkBox.className = "check";
  checkBox.type = "checkbox";
  li.appendChild(checkBox);

  bntDel.className = "bntDel";
  li.appendChild(bntDel);

  img.src = "img/urn.png";
  bntDel.appendChild(img);

  bntDel.addEventListener("click", function () {
    list.forEach(function (item, i) {
      if (item == value) {
        list.splice(i, 1);
      }
    });
    uls.removeChild(li);
    localStorage.setItem("lists", JSON.stringify(list));
  });
}
