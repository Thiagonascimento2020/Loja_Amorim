let marcaSelecionada = null;
let ultimoCliqueTempo = 0;

// Mapeamento de IDs de marca para URLs de página
const paginaPorMarca = {
    GUCCI: 'gucci.html',
    Louis_Vuitton: 'louis_vuitton.html',
    Prada: 'prada.html',
    Burberry: 'burberry.html',
    Balenciaga: 'balenciaga.html',
    Versace: 'versace.html',
};

const marcas = document.querySelectorAll('.marca');

marcas.forEach((marca) => {
    marca.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de clicar em links

        const agora = new Date().getTime();
        const intervalo = agora - ultimoCliqueTempo;

        if (intervalo < 300 && marca === marcaSelecionada) {
            // Clique duplo na mesma marca dentro de 300ms (0.3 segundos)
            // Obter a URL correspondente à marca e redirecionar para essa página
            const idMarca = marca.getAttribute('id');
            const paginaURL = paginaPorMarca[idMarca];
            if (paginaURL) {
                window.location.href = paginaURL;
            }
        } else {
            // Clique simples na marca
            ultimoCliqueTempo = agora;
            marcaSelecionada = marca;

            if (window.innerWidth < 450) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            removerSelecaoDoMarca();

            marca.classList.add('selecionado');

            alterarImagemMarcaSelecionado(marca);
            alterarNomeMarcaSelecionado(marca);
            alterarDescricaoMarca(marca);
        }
    });
});

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
    const idmarca = marca.getAttribute('id');
    imagemmarcaGrande.src = `./src/imagens/card-${idmarca}.jpg`;
}

function removerSelecaoDoMarca() {
    const marcaSelecionado = document.querySelector('.selecionado');
    if (marcaSelecionado) {
        marcaSelecionado.classList.remove('selecionado');
    }
}


