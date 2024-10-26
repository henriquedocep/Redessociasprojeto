const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function visualizarInformacoesGlobais() {
    try {
        // Fazendo a requisição dos dados
        const res = await fetch(url);
        const dados = await res.json();
        
        // Ajustando valores
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toFixed(2);
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(2);
        const horas = parseInt(dados.tempo_medio);
        const minutos = Math.round((dados.tempo_medio - horas) * 60); // Correção para minutos

        // Calculando a porcentagem de pessoas conectadas
        const porcentagemConectada = ((dados.total_pessoas_conectadas / dados.total_pessoas_mundo) * 100).toFixed(2);

        // Criando o parágrafo e adicionando a classe CSS
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        
        // Formatando o texto usando template literals
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas?<br>
        Isso significa que aproximadamente <span>${porcentagemConectada}%</span> da população mundial está online.`;

        // Selecionando o contêiner e adicionando o parágrafo nele
        const container = document.getElementById('graficos-container');
        if (container) {
            container.appendChild(paragrafo);
        } else {
            console.warn("Elemento com id 'graficos-container' não encontrado.");
            // Como fallback, anexa o parágrafo ao corpo do documento
            document.body.appendChild(paragrafo);
        }
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}

// Chamando a função para executar
visualizarInformacoesGlobais();