document.querySelector('.btn').addEventListener('click', function t1() {
  let  out = document.querySelector('.out')
 
   for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        out.innerHTML += '*';
      }
     out.innerHTML += '-';
   }
})


document.querySelector('.btn2').addEventListener('click', function t2() {
  let out = document.querySelector('.out-2')

  for (let i = 1; i <= 3; i++) {
    out.innerHTML += i + "<br>";
    for (let k = 0; k < 10; k++) {
      out.innerHTML += '*_';
    }
    out.innerHTML += '<br>';
  }
})

