const myBtn = document.querySelector('.btn');
const arr = [1, 2, 3, 4, 5, 6];

const par = document.querySelector('#par')
const btn2 = document.querySelector('#btn2')


myBtn.addEventListener('click', () => {
    alert(arr.length)
  })

const arrColor = ['red', 'blue', 'orange', 'pink'];
let i = 0;
btn2.addEventListener('click', () => {
  if (i == 4){
    i = 0;
  } 
    par.style.color = arrColor[i]
    i++
  });



  