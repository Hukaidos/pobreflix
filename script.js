const apiKey = '77c4e2b070a2e1396500d0b42ebf7cec';
const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=pt-BR';
const catalogoDiv = document.getElementById('catalogo');
const buscaInput = document.getElementById('busca');

let filmes = [];

async function carregarFilmes() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    filmes = data.results;
    mostrarCatalogo(filmes);
}

function mostrarCatalogo(filmesParaMostrar) {
    catalogoDiv.innerHTML = '';
    filmesParaMostrar.forEach(filme => {
        const filmeDiv = document.createElement('div');
        filmeDiv.classList.add('filme');
        filmeDiv.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}">
            <h3>${filme.title}</h3>
            <p>Avaliação: ${filme.vote_average}</p>
        `;
        filmeDiv.addEventListener('click', () => {
            window.location.href = `detalhes.html?id=${filme.id}`;
        });
        catalogoDiv.appendChild(filmeDiv);
    });
}

buscaInput.addEventListener('input', () => {
    const buscaTexto = buscaInput.value.toLowerCase();
    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(buscaTexto));
    mostrarCatalogo(filmesFiltrados);
   
});


carregarFilmes();
