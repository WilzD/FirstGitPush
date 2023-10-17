console.log(document.body)
console.log(document.getElementById('main-header'))

let header=document.getElementById('main-header')
header.style.borderBottom='solid 5px black'

let additems=document.getElementsByClassName('list-group-item')
for(let i=0;i<additems.length;i++){
    additems[i].style.fontWeight='bold'
    additems[i].style.color='green'
}

additems[2].style.backgroundColor='black'

let li=document.getElementsByTagName('li')
li[4].style.fontWeigth='bold'
li[4].style.backgroundColor='yellow'