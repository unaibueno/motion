     // Obtener todos los elementos <li> con la clase "servicios"
     const servicioss = document.querySelectorAll(".servicios");

     // Obtener todas las respuestas <li> con la clase "answer-text"
     const answers = document.querySelectorAll(".answer-text");

     // Ocultar todas las respuestas excepto la primera
     for (let i = 1; i < answers.length; i++) {
       answers[i].style.display = "none";}

     // Recorrer todos los elementos <li> y agregar el manejador de eventos "click" a cada uno
     servicioss.forEach((servicios, index) => {
       servicios.addEventListener("click", () => {
         // Ocultar todas las respuestas
         answers.forEach((answer) => {
           answer.style.display = "none";
         });
         // Mostrar la respuesta correspondiente
         answers[index].style.display = "block";
         // Eliminar la clase "active" de todos los elementos <li>
         servicioss.forEach((otherservicios) => {
           if (otherservicios !== servicios) {
             otherservicios.classList.remove("active");
           }
         });
         // Agregar la clase "active" al elemento <li> seleccionado
         servicios.classList.add("active");
       });
     });
     // Agregar la clase "active" al primer elemento <li>
servicioss[0].classList.add("active");
