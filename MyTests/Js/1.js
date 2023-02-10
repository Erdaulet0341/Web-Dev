// //if >  қысқа жазу 
// let num1 = 1;
// let num2 = 8;
// num1 > num2 ? console.log("num1 greater than num2") : console.log("num2 is greater than num1");
// console.log(77)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
// arr.pop(5);
// for (const key in arr) {
//     console.log(arr[key]);
// }

// let s = document.head.title;

// console.log(document.title);

// const para = document.createElement("p");
// para.textContent = "This is first my para in html using js";

// para.className = "pr1";
// // para.classList.add("pr2");

// const span = document.createElement("span");
// const span2 = document.createElement("span");

// span.textContent = " ===== spann";
// span2.innerHTML = "orem <em>dlsjf</em> asdkfjllk";
// para.appendChild(span);
// para.appendChild(span2);

// document.body.appendChild(para);

// let uls = ["one", "two", "three"];

// let list = document.createElement("ul");

// for (let i of uls) {
//     list.innerHTML += "<li>" + i + "</li>";
// }

// document.body.appendChild(list)

// console.log(document.getElementsByClassName("pr1"))



//button click
function cl(){
    alert("Button cliked");
}

//document.getElementById("lck").onclick = cl
document.getElementById("lck").addEventListener("click", cl);

document.addEventListener("keyup", function(e){
    console.log(e.key);
})