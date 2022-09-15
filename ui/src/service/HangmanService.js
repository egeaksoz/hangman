import axios from 'axios';

const BASE_URL= 'http://localhost:8080';
const HANGMAN_API_URL = `${BASE_URL}/api/v1/hangman`;

class HangmanService {

    getTheWord() {
        return axios.get(`${HANGMAN_API_URL}/start`);
    }

}

export default new HangmanService()