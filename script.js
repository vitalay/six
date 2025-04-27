document.querySelector('.btn').addEventListener('click', function t1() {
  let  out = document.querySelector('.out')
 
   for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        out.innerHTML += '*';
      }
     out.innerHTML += '-';
   }
})


