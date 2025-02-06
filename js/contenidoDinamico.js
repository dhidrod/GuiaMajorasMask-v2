document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-target]");
  const infoSection = document.getElementById("info-section");
  const infoDynamic = document.getElementById("info-dynamic"); // Contenedor único

  // Contenido dinámico para cada máscara/objeto
  const content = {
    mask1: {
      steps: [
        {
          type: "text",
          content:
            "Cuando pasen de las 6:00 pm durante el Tercer Día, tendrás que llevar el 'Envío Especial'. Para ello ve a la Posada del Puchero durante el Segundo día entre las 5:00 pm y las 9:00 pm y hablar con Anju, la chica tras el mostrador, para darle el Colgante de los novios.",
        },
        {
          type: "text",
          content:
            "Ahora ve a la Posada del Puchero entre las 4:30 pm y las 8:00 pm durante el Primer Día y habla con Anju, pero llevando puesta la Careta Kafei. Tras la conversación vuelve a reunirte con ella pero a las 11:30 pm en la cocina de la Posada para que te de la Carta para Kafei.",
        },
        {
          type: "text",
          content:
            "Con la carta en tu poder, tienes que meterla en uno de los buzones de la Ciudad Reloj. Tras esto ve al Lavadero entre las 4:15 pm y las 10:00 pm durante el Segundo Día para poder pasar por la puerta por la que antes no podías. Allí dentro habrá un individuo llamado Kafei, el cual te dará el Colgante de los Novios.",
        },
        {
          type: "text",
          content:
            "Dirígete al Lavadero entre la 1:00 pm y las 10:00 pm durante el Tercer Día y pasar por la puerta que verás allí. Habla con el Hombre de la T. de Curiosidades para que te entregue el Envío especial para Mamá y la Careta Keaton.",
        },
        {
          type: "text",
          content:
            "Ahora que ya tienes el envío, dáselo al Cartero que está dentro de la Oficina Postal de la Ciudad Reloj, por la parte Oeste. El propio cartero se lo llevará a Mamá Aroma en el Bar Lácteo. Tras esto sigue al cartero fuera del bar y espera a que se pare, momento en el que deberás hablar con él para que te entregue la Gorra de Cartero.",
        },
        { type: "image", content: "img/c1.jpg" },
        { type: "text", content: "Sigue los pasos indicados." },
        { type: "image", content: "img/c3.jpg" },
      ],
    },
    mask2: {
      steps: [
        {
          type: "text",
          content:
            "Ve a la Tienda de Curiosidades en la parte Oeste de la Ciudad Reloj durante el Tercer día y entra a las 10:00 pm cuando abra. Entonces podrás comprar la Careta para Trasnochar por 500 rupias, pero solo después de haber ayudado a la anciana de la Tienda de Bombas.",
        },
        { type: "image", content: "img/c2.jpg" },
        { type: "text", content: "Sigue los pasos para completarla." },
        { type: "image", content: "img/c3.jpg" },
      ],
    },
    mask3: {
      steps: [
        {
          type: "text",
          content: "Esta es la guía para conseguir la Máscara 2.",
        },
        { type: "image", content: "img/c3.jpg" },
        { type: "text", content: "Sigue los pasos para completarla." },
        { type: "image", content: "img/c1.jpg" },
      ],
    },
    mask4: {
      steps: [
        {
          type: "text",
          content: "Esta es la guía para conseguir la Máscara 2.",
        },
        { type: "image", content: "img/c1.jpg" },
        { type: "text", content: "Sigue los pasos para completarla." },
        { type: "image", content: "img/c3.jpg" },
      ],
    },
    mask5: {
      steps: [
        {
          type: "text",
          content: "Esta es la guía para conseguir la Máscara 2.",
        },
        { type: "image", content: "img/c2.jpg" },
        { type: "text", content: "Sigue los pasos para completarla." },
        { type: "image", content: "img/c1.jpg" },
      ],
    },
    mask6: {
      steps: [
        {
          type: "text",
          content:
            "Tras haberte transformado de nuevo en Link durante la historia principal, conseguirás la Máscara Deku de manera automática.",
        },
        { type: "image", content: "img/c2.jpg" },
        { type: "text", content: "Sigue los pasos para completarla." },
        { type: "image", content: "img/c1.jpg" },
      ],
    },
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      if (content[target]) {
        // Limpiar contenido dinámico
        infoDynamic.innerHTML = "";

        // Modifica la creación de elementos así:
        content[target].steps.forEach((step, index) => {
          const container = document.createElement("div");
          container.className = "step-container";

          if (step.type === "text") {
            const paragraph = document.createElement("p");
            paragraph.textContent = step.content;
            container.appendChild(paragraph);
          } else if (step.type === "image") {
            const img = document.createElement("img");
            img.src = step.content;
            img.alt = "Paso de la guía";
            img.className = "img-fluid";
            container.appendChild(img);
          }

          infoDynamic.appendChild(container);
        });

        // Desplazar pantalla a la sección dinámica
        infoSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
