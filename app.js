const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');


const app  = express();
const port = 3000;


app.get('/', async (req, res) => {
  try {
    // Variaveis de controle
    // Exemplo: http://localhost:3000/?query=Nome do Filme
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: 'Query de busca não informado!' }); // Retorna erro caso não informa query nenhuma

    const url = `https://www.rottentomatoes.com/search?search=${encodeURIComponent(query)}`; // URL de busca padrão
    const { data } = await axios.get(url) // Carregados dados da pagina pelo axios
    const $ = cheerio.load(data)          // Injetando dentro da estruturo do cheerio

    let movies = [] // Array de controle para armazenar os filmes

    $('search-page-media-row').each((index, element) => {
      if (index >= 10) return false; // Limita a 10 resultados

      const title = $(element).find('[slot="title"]').text().trim() || 'N/A';
      const year = $(element).attr('releaseyear') || 'N/A';
      const score = $(element).attr('tomatometerscore') || 'N/A';

      // Capturando o link associado a imagem do filme
      const link = $(element).find('a[slot="thumbnail"]').attr('href');
      const fullLink = link ? `https://www.rottentomatoes.com${link}` : 'N/A';

      // Popula o array de filmes
      movies.push({ title, year, score, link: fullLink });
    });

    // Retorno do JSON
    res.json({ movies });

  } catch (error) {
    console.error("Erro >>", error); // Log de erro
    return res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
