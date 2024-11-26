document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Gracias por contactarme, ${name}. ¡Responderé pronto a tu correo: ${email}!`);
    this.reset();
  });
  