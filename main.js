// let a = document
// let body = document.body
// let head = document.head
// let fchild = document.firstChild
// let lchild = document.lastChild
// let childNodes = document.childNodes
// let childrens = document.children

// console.log(a);
// console.log(body);
// console.log(head);
// console.log(fchild);
// console.log(lchild);
// console.log(childNodes);
// console.log(childNodes);


// console.log(textId);

// console.log(text.item(1));





// console.log(h1[2]);
// console.log(text);
// let h1 = document.getElementsByTagName("h1")
// let text = document.getElementsByClassName("text")
// let textId = document.getElementById("text")

// let a = document.querySelector("h1")
// let b = document.querySelector(".text")
// let c = document.querySelector("#text")

// let all = document.querySelectorAll(".text")

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(all);

// let h = []

// console.log(h);

// all.forEach(item => {
//     console.log(item);
// })

// let hi = "Hello"

// let h1 = document.querySelector("h1")

// h1.innerText = "salom"
// h1.innerHTML = `<div>${hi}</div>`
// h1.innerHTML = "Hello"

// let arr = Array.from(document.getElementsByTagName('div'))
// let boxes = document.getElementsByTagName("div")

// console.log(arr);
// console.log(boxes);

// // String()
// // Number()
// // Object()
// // Boolean()
// // Array()


// let a = "10.3"
// let b = Number(a)

// console.log(a, b);

// parseFloat()
// parseInt()

//  let a =  plus.onclick = () => {
//     console.log("salom");
// }


// function plusCount() {
//     console.log("salom");
// }

// let minus = document.querySelector("#minus")
// let counter = document.querySelector("#count")
// let plus = document.querySelector("#plus")

// let count = 0

// counter.innerHTML = count

// plus.addEventListener('click', () => {
//     count++
//     counter.innerHTML = count
//     console.log(count);
// })

// minus.addEventListener('click', () => {
//     if (count > 0) {
//         count--
//         counter.innerHTML = count
//     } else {
//         counter.innerHTML = 0
//     }
// })

// let startBtn = document.querySelector("#start")
// let stopBtn = document.querySelector("#stop")
// let clearBtn = document.querySelector("#clear")
// let hour = document.querySelector("#hour")
// let minut = document.querySelector("#minut")
// let second = document.querySelector("#second")

// let h = 0
// let m = 0
// let s = 0
// let inter;

// let start = startBtn.onclick = () => {
//     inter = setInterval(() => {
//         if (s < 59) {
//             if (s < 9) {
//                 s++
//                 second.innerHTML = `0${s}`
//             } else {
//                 s++
//                 second.innerHTML = s
//             }
//         } else {
//             m++
//             minut.innerHTML = m
//             s = 0
//             second.innerHTML = s
//         }
//     }, 100)
// }

// stopBtn.onclick = () => {
//     clearInterval(inter)
// }
// clearBtn.addEventListener('click', () => {
//     clearInterval(inter)
//     h = 0
//     m = 0
//     s = 0
//     minut.innerHTML = "00"
//     hour.innerHTML = "00"
//     second.innerHTML = "00"
// })

