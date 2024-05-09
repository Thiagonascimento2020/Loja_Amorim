const marcas = document.querySelectorAll('.marca');

marcas.forEach((marca) => {
    marca.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoMarca();

        marca.classList.add('selecionado');

        alterarImagemMarcaSelecionado(marca);

        alterarNomeMarcaSelecionado(marca);

        alterarDescricaoMarca(marca);
    })
})

function alterarDescricaoMarca(marca) {
    const descricaomarca = document.getElementById('descricao-marca');
    descricaomarca.innerText = marca.getAttribute('data-description');
}

function alterarNomeMarcaSelecionado(marca) {
    const nomemarca = document.getElementById('nome-marca');
    nomemarca.innerText = marca.getAttribute('data-name');
}

function alterarImagemMarcaSelecionado(marca) {
    const imagemmarcaGrande = document.querySelector('.marca-grande');

    const idmarca = marca.attributes.id.value;
    imagemmarcaGrande.src = `./src/imagens/card-${idmarca}.jpg`;
}

function removerSelecaoDoMarca() {
    const marcaSelecionado = document.querySelector('.selecionado');
    marcaSelecionado.classList.remove('selecionado');
}
