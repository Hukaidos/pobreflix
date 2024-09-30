const apiKey = '77c4e2b070a2e1396500d0b42ebf7cec';
const detalhesDiv = document.getElementById('detalhes');
const voltarButton = document.getElementById('voltar');


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function carregarDetalhesFilme() {
    const filmeId = getQueryParam('id');
    const response = await fetch(`https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=pt-BR`);
    const filme = await response.json();
    
    detalhesDiv.innerHTML = `
        <h2>${filme.title}</h2>
        <p>${filme.overview}</p>
        <p>Data de lançamento: ${filme.release_date}</p>
        <p>Avaliação: ${filme.vote_average}</p>
        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}" width="300">
    `;
}


voltarButton.addEventListener('click', () => {
    window.history.back();
});


carregarDetalhesFilme();
