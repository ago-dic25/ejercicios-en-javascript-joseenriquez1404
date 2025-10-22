const textElement = document.querySelector(".rotating-text");

// El navegador solo muestra las coordenadas cuando se hace un click en la página.
document.addEventListener("mousemove", (event) => {
    // console.log(event.clientX, event.clientY);
    const rect = textElement.getBoundingClientRect();
    const textX = rect.left + rect.width / 2;
    const textY = rect.top + rect.height / 2;

    // Obtener posición del cursor
    const coorX = event.clientX;
    const coorY = event.clientY;
    
    // Calcular ángulo entre texto y cursor
    const angle = Math.atan2(coorY - textY, coorX, textX) * 180 / Math.PI;

    textElement.style.transform = `rotate(${angle}deg)`
});