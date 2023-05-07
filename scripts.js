const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.toggle("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`); // *******

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});

//Não estou conseguindo adicionar as outras imagens e troca, quem puder depois olhar o código e corrigi-lô
//Obrigado, irei marcar um asterísticom onde não estou conseguindo mudar o código
