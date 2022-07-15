import FetchService from './FetchService';

class RequestService {
    allCharacters(page) {
        let url = new URL(`https://rickandmortyapi.com/api/character`)
        const params = {
            page: page || ''
        }
        url.search = new URLSearchParams(params)
        return FetchService.getData(url);
    }
}

export default new RequestService();
