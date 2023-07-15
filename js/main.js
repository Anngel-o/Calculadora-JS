const pantalla = document.querySelector(".pantalla");
const buttons = document.querySelectorAll(".button");
const messageError = "Error!";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonApretado = button.textContent;

        if (buttonApretado === "C") {
            pantalla.textContent = "0";
            return;
        }
        if (button.id === "borrar") {
            if (pantalla.textContent === "" || pantalla.textContent === messageError) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                // borra el último elemento (-1) empezando a tomar en cuenta desde el primer elemento (0)
            }
            return;
        }

        if (button.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                // evalua el contenido en string que contienen operaciones matemáticas
            } catch {
                pantalla.textContent = messageError;
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === messageError) {
            pantalla.textContent = buttonApretado;
        } else {
            if (pantalla.textContent.length < 12) {
                pantalla.textContent += buttonApretado;
                
            } else {
                return;
            }
        }
    })
});