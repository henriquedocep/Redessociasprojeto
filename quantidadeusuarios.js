async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json();
    
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: '#045ca' // Cor azul para todas as barras
            }
        }
    ];

    const layout = {
        paper_bgcolor: 'rgba(0, 0, 0, 0.9)', // Cor de fundo do gráfico
        plot_bgcolor: 'rgba(0, 0, 0, 0.9)',  // Cor de fundo do plot
        font: {
            color: 'white' // Cor do texto
        },
        title: {
            text: 'Quantidade de Usuários por Rede',
            x: 0, // Posiciona o título à esquerda
            font: {
                color: 'white', // Cor do título
                family: 'Arial, sans-serif', // Família da fonte
                size: 30 // Tamanho da fonte
            }
        },
        xaxis: {
            title: {
                text: 'Redes Sociais',
                font: {
                    color: 'white' // Cor do texto do eixo X
                }
            },
            tickfont: {
                color: 'white', // Cor do texto dos rótulos do eixo X
                size: 16, // Tamanho da fonte
                family: 'Arial, sans-serif' // Família da fonte
            }
        },
        yaxis: {
            title: {
                text: 'Quantidade de Usuários',
                font: {
                    color: 'white' // Cor do texto do eixo Y
                }
            },
            tickfont: {
                color: 'white', // Cor do texto dos rótulos do eixo Y
                size: 16, // Tamanho da fonte
                family: 'Arial, sans-serif' // Família da fonte
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    
    Plotly.newPlot(grafico, data, layout);
}

quantidadeUsuariosPorRede();