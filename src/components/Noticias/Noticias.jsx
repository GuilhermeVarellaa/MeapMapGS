import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Noticias.css';

// ... restante do seu código

const Noticias = () => {
    // Criação do estado inicial para as notícias
    const [noticias, setNoticias] = useState(null);

    useEffect(() => {
        // Função para buscar as notícias
        const buscarNoticias = async () => {
            try {
                // Fazendo a requisição à API com o axios
                const response = await axios.get('https://gnews.io/api/v4/search?q=Brazil&lang=pt&token=70534c2e16beba16a5fef61f4d1aa50e');
                // Pegando os artigos da resposta
                const articles = response.data.articles;

                // Atualizando o estado com as notícias
                setNoticias(articles);
            } catch (error) {
                console.log(error);
            }
        };

        // Chamada da função para buscar as notícias
        buscarNoticias();
    }, []);  // O array vazio significa que esse efeito será executado apenas uma vez, quando o componente for montado

    // Retornando null enquanto as notícias não são carregadas
    if (!noticias) {
        return null;
    }
    
    // Renderizando as notícias
    return (
        <div className="container">
            <h1>Notícias no Brasil</h1>
            {noticias.map((article, index) => (
    <div key={index} className="card">
        <div className="title">{article.title}</div>
        <div className="content">{article.description}</div>
        <img src={article.image} alt={article.title} className="news-image" />
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Leia mais</a>
    </div>
))}




        </div>
    );
};

export default Noticias;
