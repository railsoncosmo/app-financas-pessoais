import axios from 'axios'; //importa o axios para realizar requisições HTTP

const api = axios.create({ //Cria a variável para receber a instância do serivor local
    baseURL: 'http://192.168.100.28:3333',
})

export default api; //exporta a instância para ser utilizada em outros arquivos