
let mybutton = document.getElementById("myBtn");

// cuando se scrollea para abajo aparece el boton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando se hace clic va a la parte superior
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // chrome, Firefox,
}



/*----
  switch
  ----*/
  const btnSwitch = document.querySelector('#switch');
  btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
  });   

  



  document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");
    const overlayImg = document.getElementById("overlayImg");
    const overlayPrev = document.getElementById("overlayPrev");
    const overlayNext = document.getElementById("overlayNext");
    const projectImages = document.querySelectorAll(".containerOrquideario article img");
  
    let currentIndex = 0;
  
    projectImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        overlay.style.display = "flex";
        currentIndex = index;
        updateOverlay();
      });
    });
  
    function updateOverlay() {
      overlayImg.src = projectImages[currentIndex].src;
    }
  
    function showNextImage() {
      if (currentIndex < projectImages.length - 1) {
        currentIndex++;
        updateOverlay();
      }
    }
  
    function showPrevImage() {
      if (currentIndex > 0) {
        currentIndex--;
        updateOverlay();
      }
    }
  
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  
    overlayPrev.addEventListener("click", showPrevImage);
    overlayNext.addEventListener("click", showNextImage);
  });


  //configuracion de formulario para enviar mail

  emailjs.init("NMgydeVAgi1o6iWWP");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío tradicional del formulario

      // Toma los datos del formulario
      var templateParams = {
        asunto: document.getElementById("asunto").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value,
      };
      // Usa EmailJS para enviar el mail
      emailjs
        .send("service_ynvt8os", "template_bb4i0ml", templateParams)
        .then(
          function (response) {
            console.log(
              "Correo enviado con éxito",
              response.status,
              response.text
            );
            alert("¡Correo enviado con éxito!");
          },
          function (error) {
            console.log("Error al enviar el correo", error);
            alert("Error al enviar el correo");
          }
        );
    });
