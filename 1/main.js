
//Task-1

let title = document.querySelector('#title')
console.log(title)



//Task-2

let p = document.querySelectorAll('.text')
console.log(p)



//Task-3

let li = document.querySelectorAll('.list-item')
console.log(li)



//Task-4

let items = document.querySelectorAll('.list-item')
Array.from(items).forEach((item, idx) =>{
    item.textContent = `${item.textContent} zhaan-365 ${idx}`
})



//Task-5

let items = document.querySelectorAll('.list-item')
Array.from(items).forEach((item, idx) =>{
    item.style.color = 'green'
    item.style.fontSize = '20px'
})



//Task-6

let infoes = document.querySelectorAll('.info')
Array.from(infoes).forEach((item, idx) =>{
    if (idx % 2 === 0){
        item.style.color = 'red'
    } else {
        item.style.color = 'green'
    }
})