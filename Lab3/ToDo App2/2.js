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
  let temp = {
    value: input.value,
    check: false,
  };
  list.push(temp);
  createAndDelete(temp);
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
    li.textContent = item.value;

    checkBox.className = "check";
    checkBox.type = "checkbox";
    li.appendChild(checkBox);


    if(item.check){
        li.style.textDecoration = "line-through";
        checkBox.checked =item.check
    }
    else{
        checkBox.checked = !item.check
        li.style.textDecoration = "none";
    }

    img.src = "img/urn.png";
    bntDel.className = "bntDel";
    li.appendChild(bntDel);

    bntDel.appendChild(img);

    bntDel.addEventListener("click", function () {
      list.forEach(function (item, i) {
        if (item.value == li.textContent) {
          list.splice(i, 1);
        }
      });
      uls.removeChild(li);
      localStorage.setItem("lists", JSON.stringify(list));
    });
  });
}

function createAndDelete(temp) {
  const li = document.createElement("li");
  const bntDel = document.createElement("button");
  const checkBox = document.createElement("input");
  const img = document.createElement("img");

  uls.appendChild(li);
  li.className = "li";
  li.textContent = temp.value;

  checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
    list.forEach(function(item){
        if(item.value = temp.value){
            item.check = checkBox.checked
        }
    });
    console.log(list)
    localStorage.setItem("lists", JSON.stringify(list));
  });
  
  checkBox.className = "check";
  checkBox.type = "checkbox";
  li.appendChild(checkBox);

  bntDel.className = "bntDel";
  li.appendChild(bntDel);

  img.src = "img/urn.png";
  bntDel.appendChild(img);

  bntDel.addEventListener("click", function () {
    list.forEach(function (item, i) {
      if (item == temp.value) {
        list.splice(i, 1);
      }

    });
    uls.removeChild(li);
    localStorage.setItem("lists", JSON.stringify(list));
  });
}