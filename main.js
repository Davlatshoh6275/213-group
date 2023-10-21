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


// let plusHour = document.querySelector("#plusHour")
// let minusHour = document.querySelector("#minusHour")
// let plusMinut = document.querySelector("#plusMinut")
// let minusMinut = document.querySelector("#minusMinut")
// let plusSecond = document.querySelector("#plusSecond")
// let minusSecond = document.querySelector("#minusSecond")
// let hour = document.querySelector("#hour")
// let minut = document.querySelector("#minut")
// let second = document.querySelector("#second")
// let span = document.querySelectorAll("span")
// let start = document.querySelector("#start")
// let stop = document.querySelector("#stop")
// let clear = document.querySelector("#clear")


// function anim() {
//     span.forEach(item => {
//         item.classList.add("active")
//     })
// }


// let h = 0
// let m = 0
// let s = 0
// let inter;


// plusHour.onclick = () => {
//     if (h < 9) {
//         h++
//         hour.innerHTML = `0${h}`
//     } else if (h >= 24) {
//         h = 0
//         hour.innerHTML = "00"
//     } else {
//         h++
//         hour.innerHTML = h
//     }
// }
// plusMinut.onclick = () => {
//     if (m < 9) {
//         m++
//         minut.innerHTML = `0${m}`
//     } else if (m >= 59) {
//         m = 0
//         minut.innerHTML = `00`
//     } else {
//         m++
//         minut.innerHTML = m
//     }
// }
// plusSecond.onclick = () => {
//     if (s < 9) {
//         s++
//         second.innerHTML = `0${s}`
//     } else if (s >= 59) {
//         s = 0
//         second.innerHTML = `00`
//     } else {
//         s++
//         second.innerHTML = s
//     }
// }





// // minus.addEventListener('click', () => {
// //     if (count > 0) {
// //         count--
// //         counter.innerHTML = count
// //     } else {
// //         counter.innerHTML = 0
// //     }
// // })


// minusHour.onclick = () => {



//     if (h > 0) {
//         h--
//         hour.innerHTML = h
//     } else {
//         h = 0
//         hour.innerHTML = "00"
//     }

//     // if (h < 9) {
//     //     h--
//     //     hour.innerHTML = `0${h}`
//     // }


// }
// minusMinut.onclick = () => {
//     if (m > 0) {
//         m--
//         minut.innerHTML = m
//     } else {
//         m = 0
//         minut.innerHTML = "00"
//     }
// }
// minusSecond.onclick = () => {
//     if (s > 0) {
//         s--
//         second.innerHTML = s
//     } else {
//         s = 0
//         second.innerHTML = "00"
//     }
// }

// start.onclick = () => {
//     anim()

//     inter = setInterval(() => {

//         if(s > 0) {
//             s-- 
//             second.innerHTML = s
//         } else if(m > 0) {
//             s = 59
//             second.innerHTML = s
//             m-- 
//             minut.innerHTML = m
//         } else if (h > 0) {
//             s = 59
//             second.innerHTML = s
//             m = 59
//             minut.innerHTML = m
//             h--
//             hour.innerHTML = h
//         } else if(h == 0 && m == 0 && s ==0) {
//             alert("Tamom...")
//         }

//     }, 1)
// }



// const box = document.querySelector(".box")
// const boxTwo = document.querySelector(".boxTwo")
// const boxThree = document.querySelector(".boxThree")
// const boxFour = document.querySelector(".boxFour")

// let a = false
// box.addEventListener('click', function () {
//     if (a === false) {
//         box.classList.add('active')
//         a = true
//     } else {
//         box.classList.remove('active')
//         a = false
//     }
// })

// boxTwo.addEventListener('click', function () {
//     boxTwo.classList.toggle('active')

//     console.log(boxTwo.classList.contains('active'));

//     // console.log(boxTwo.classList.values(boxTwo));

// })
// boxThree.addEventListener('click', function () {
//     boxThree.classList.add('active')
// })
// boxFour.addEventListener('click', function () {
//     boxFour.classList.add('active')
// })


// const inp = document.querySelector('input')
// let btn = document.querySelector("button")
// let w;

// function inpText() {
//     inp.addEventListener('keyup', function (event) {
//         w = event.target.value
//     })
// }


// inpText()

// btn.addEventListener('click', (event) => {
//     event.preventDefault()
// })



// const inp = document.querySelector('input')

// function checkInpAtt() {

//     let check = inp.hasAttribute("placeholder")

//     if (check) {
//         let a = "write something important !!!"
//         inp.setAttribute("placeholder", a)
//     } else {
//         inp.setAttribute('placeholder', 'yaratildi')
//     }

//     // let a = inp.getAttribute("placeholder")
//     // console.log(a);
// }

// checkInpAtt()


// let img_1 = 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?cs=srgb&dl=pexels-pixabay-206959.jpg&fm=jpg'
// let img_2 = 'https://www.wallpaperflare.com/static/870/310/341/apple-leaf-white-background-two-wallpaper.jpg'


// let img = document.querySelector('img')

// let active = true

// box.addEventListener('click', () => {
//     if (active) {
//         active = false
//         img.setAttribute('src', img_1)
//         img.classList.add('active')
//     } else {
//         active = true
//         img.setAttribute('src', img_2)
//         img.classList.add('active')
//     }

//     console.log(active);
// })


// let box = document.querySelector('.box')


// box.addEventListener('click' , () => {
//     console.log("click");
// })

// box.onclick = () => {
//         console.log("click");
// }

// function clicked() {
//     console.log("click");
// }

// let inp = document.querySelector('input').value


// inp.addEventListener('keyup', (event) => {
//     console.log(
//         event.target.value
//     );
// })

// inp.onchange = (event) => {
//     console.log(event.target.value);
// }

// function changed(a) {
//     console.log(a);
//     // console.log("click");
// }



// let box = document.querySelector('.box')


// box.addEventListener('dblclick', () => {
//     console.log("click");
// })
// box.addEventListener('mouseenter', () => {
//     console.log("enter");
// console.log(inp);

// })
// box.addEventListener('mouseleave', () => {
//     console.log("leave");
// })



// let boxes = document.querySelectorAll('.item')

// boxes.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         item.classList.add('active')
//     })
// })

// let box = document.querySelector('.box')

// console.log(
//     box.classList.contains('list')
// );

let content = document.querySelector('.content')
let url = 'https://img.freepik.com/premium-photo/closeup-nature-view-colorful-leaves_860528-2622.jpg'


let btnDiv = document.querySelector('.divBtn')
let btnImg = document.querySelector('.imgBtn')

let count = 0

function addBox() {
    let div = document.createElement('div')
    count++
    div.classList.add('box')
    div.innerHTML = `<h1>${count}</h1>`
    content.append(div)
}


function addImg() {
    let img = document.createElement('img')
    img.setAttribute('src', url)
    content.append(img)
}

btnDiv.addEventListener('click', () => {
    addBox()
})

btnImg.addEventListener('click', () => {
    addImg()
})
