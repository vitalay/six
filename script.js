document.querySelector('.btn').addEventListener('click', function t1() {
  let  out = document.querySelector('.out')
 
   for (let i = 0; i < 3; i++) {
    out.innerHTML += '-';
      for (let k = 0; k < 3; k++) {
        out.innerHTML += '*';
      }
   }
})


document.querySelector('.btn2').addEventListener('click', function t2() {
  let out = document.querySelector('.out-2')

  for (let i = 1; i <= 3; i++) {
    out.innerHTML += i + "<br>";
    for (let k = 0; k < 3; k++) {
      out.innerHTML += '*_';
    }
    out.innerHTML += '<br>';
  }
})

document.querySelector('.btn3').addEventListener('click', function t3() {
  let out = document.querySelector('.out-3')

  for (let i = 0; i <= 3; i++) {
    out.innerHTML += '<br>';
    for (let k = 0; k < 3; k++) {
     out.innerHTML += "*_";
    }
  }
})

document.querySelector('.btn4').addEventListener('click', function t4() {
  let out = document.querySelector('.out-4')

  for (let i = 1; i <= 3; i++) {
    out.innerHTML += i + '_';
    for (let k = 1; k <= 5; k++) {
      out.innerHTML += k + ' '; 
    }
  }
})

