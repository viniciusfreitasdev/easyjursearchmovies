# EasyJur Search Movies
**Uma API REST para buscar informações de filmes no Rotten Tomatoes**  

---

## **Objetivo**  
Desenvolver uma API REST que recebe o nome de um filme como parâmetro, realiza uma busca no [Rotten Tomatoes](https://www.rottentomatoes.com/) e retorna os 10 primeiros resultados em formato JSON.  

---

## **Funcionalidades**  
- Recebe o nome do filme via parâmetro de consulta (`query`).  
- Extrai automaticamente:  
  - Título do filme  
  - Ano de lançamento  
  - Pontuação no Rotten Tomatoes  
  - Link completo para a página do filme  
- Limita os resultados aos 10 primeiros itens.  
- Retorna dados estruturados em JSON para integração com aplicações.  

---

## **Instalação**  
1. Clone o repositório:  
```bash  
git clone https://github.com/seu-usuario/nome-do-repositorio.git  
cd nome-do-repositorio  
```  

2. Instale as dependências:  
```bash  
npm install  
```  

3. Inicie o servidor:  
```bash  
node index.js  
```  

---

## **Como Usar**  
Envie uma requisição GET com o parâmetro `query`:  
```  
http://localhost:3000/?query=NOME_DO_FILME  
```  

### Exemplo de resposta:  
```json  
{  
  "movies": [  
    {  
      "title": "Inception",  
      "year": "2010",  
      "score": "87%",  
      "link": "https://www.rottentomatoes.com/m/inception"  
    },  
    ...  
  ]  
}  
```  

---

## **Tecnologias Utilizadas**  
- **Express.js**: Framework para construção da API REST.  
- **Axios**: Realiza requisições HTTP para buscar dados do Rotten Tomatoes.  
- **Cheerio**: Extrai e analisa dados HTML das páginas web.  
- **Node.js**: Ambiente de execução do servidor.  

---

## **Disclaimer**  
⚠️ **Aviso Importante**:  
- Este projeto é destinado **exclusivamente para fins demonstrativos**.  
- O web scraping pode violar os termos de serviço do Rotten Tomatoes.  
- Verifique as políticas do site antes de utilizar este código em produção.  
- O desenvolvedor não se responsabiliza por qualquer uso indevido ou consequências decorrentes desta aplicação.
