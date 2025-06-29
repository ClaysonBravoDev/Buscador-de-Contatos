let p = document.querySelector("p");
let input = document.querySelector("input");
let button = document.querySelector("button");

const contatos = [
    { nome: "Lavínia Giovanna Antônia Porto", numero: "(21) 97034-7485" },
    { nome: "Fernanda Vitória Giovanna Campos", numero: "(21) 98853-3472" },
    { nome: "Vera Beatriz da Mota", numero: "(21) 98501-6716" },
    { nome: "Sabrina Julia Rayssa", numero: "(21) 99386-0464" }
];

button.addEventListener("click", () => {
    const textoDigitado = input.value.trim().toLowerCase();

    if (textoDigitado === "") {
        p.innerText = "Por favor, digite um nome.";
        return;
    }

    const contato = contatos.find(contato =>
        contato.nome.toLowerCase().includes(textoDigitado)
    );

    if (contato) {
        p.innerText = `Número de ${contato.nome}: ${contato.numero}`;
    } else {
        p.innerText = "Contato não encontrado.";
    }
});
