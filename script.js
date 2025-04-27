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
document.querySelector('.btn5').addEventListener('click', function t5() {
  let out = document.querySelector('.out-5')

  for (let i = 1; i <= 3; i++) {
    out.innerHTML += '<br>';
    for (let k = 0; k <= 5; k++) {
      out.innerHTML += k % 2 === 0 ? '1' : '0';
    }
  }
})


document.querySelector('.btn6').addEventListener('click', function t6() {
  let out = document.querySelector('.out-6')

  for (let i = 0; i < 3; i++) {
    out.innerHTML += '<br>';
        for (let j = 0; j < 6; j++) {
          if (j === 2 || j === 5) {
            out.innerHTML += 'x';  // x на 3-й и 6-й позициях (индексы 2 и 5)
          } else if (j % 2 === 0) {
            out.innerHTML += '1';  // 1 на четных позициях (кроме уже учтенных x)
          } else {
            out.innerHTML += '0';  // 0 на нечетных позициях
          }
        }
     }
  })

document.querySelector('.btn7').addEventListener('click', function t7() {
  let out = document.querySelector('.out-7')

  for (let i = 0; i < 5; i++) {
    out.innerHTML += '<br>';
       for (let j = 0; j < i; j++) {
         out.innerHTML += '*';
    }
  }
}) 

const bt = document.querySelector('.btn8').addEventListener('click', function t8() {
 
  let out = document.querySelector('.out-8')
  for (let i = 5; i >= 1; i--) {
    out.innerHTML += '<br>';
    // Внутренний цикл для звёздочек в строке
    for (let j = 0; j < i; j++) {
      out.innerHTML+= '*';
    }
  }
}) 

document.querySelector('.btn9').addEventListener('click', function t9() {
  let out = document.querySelector('.out-9')

  for (let i = 1; i <= 5; i++) {
    out.innerHTML += '<br>';
    // Внутренний цикл для чисел в строке
    for (let j = 1; j <= i; j++) {
      out.innerHTML += j + ' ';
    
    }
  }
}) 

document.querySelector('.btn10').addEventListener('click', function t10() {
  let out = document.querySelector('.out-10')

  for (let i = 0; i < 50; i += 10) {
     out.innerHTML += '<br>';
    for (let j = 1; j <= 10; j++) {
      const num = i + j;
      out.innerHTML += `${num < 10 ? '0' : ''}${num}`;
     out.innerHTML += ' ';
    }
   
  }
})