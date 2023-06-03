
let secretNumber;
let attempts = 3;

function startGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  let output = document.getElementById('output');
  
  output.innerHTML = '¡Adivina el número secreto entre 1 y 10!' + '<br>';
  
  for (let i = 1; i <= attempts; i++) {
    let guess = parseInt(prompt('Intento ' + i + ': Ingresa un numero entre (1-10):'));
    
    if (isNaN(guess) || guess < 1 || guess > 10) {
      output.innerHTML += 'Intento ' + i + ': Respuesta inválida. Ingresa un número válido entre 1 y 10.' + '<br>';
      continue;
    }
    
    if (guess === secretNumber) {
      output.innerHTML += 'Bieen!! Adivinaste el número secreto.🙌😎😉' + '<br>';
      return;
    } else {
      output.innerHTML += 'Intento ' + i + ': Respuesta incorrecta.' + '<br>';
    }
  }
  
  output.innerHTML += 'Perdiste!😒 No tenes mas intentos 🤣. El número secreto era ' + secretNumber + '.' + '<br>';
}