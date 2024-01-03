import axios from "axios";
import { pages } from "next/dist/build/templates/app-page";

const date = new Date();
let currentDate = new Date().toJSON().slice(0, 10);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

function getMonthAgo() {
    if (month === 1) {
        return month = 12

    } else {
        return month - 1
    }
}

function getYear() {
    if (month === 1) {
        return year - 1
    }

    return year
}

function getDay() {
    return (day < 10 ? '0' : '') + day;
}


let aMonthAgo = `${getYear()}-${getMonthAgo()}-${getDay()}`;

const BaseUrl = "https://api.rawg.io/api/games";

const GenresUrl = "https://api.rawg.io/api/genres";

const Platforms = "https://api.rawg.io/api/platforms";

const NewRelase = `${aMonthAgo},${currentDate}`;

class serviceApi {

    //Categorie | Azione | Shoter | ECC..
    callCategories() {
        return axios.get(`${GenresUrl}?key=${process.env.NEXT_PUBLIC_KEY}`)
    }

    //Nome specifico del gioco
    callSearchQuery(query: string) {
        return axios.get(`${BaseUrl}?key=${process.env.NEXT_PUBLIC_KEY}`, {
            params: {
                search: query
            }
        })
    }

    callScreenshots(query: string) {
        return axios.get(`${BaseUrl}?key=${process.env.NEXT_PUBLIC_KEY}`, {
            params: {
                search: query
            }
        })
    }

    // callSpecificCategory(genere:number) {
    //     console.log(genere);
    //     return axios.get(`${BaseUrl}?key=${process.env.NEXT_PUBLIC_KEY}&genres=${genere}`)

    // }

    //Giochi di una Categoria Specifica
    callSpecificCategory(genres: number, page: number) {
        return axios.get(`${BaseUrl}?key=${process.env.NEXT_PUBLIC_KEY}`, {
            params: {
                genres: genres,
                page: page
            }
        })
    }

    //Giochi di una Piattaforma Specifica
    callSpecificlPlatform(id: number, page: number) {
        return axios.get(`${BaseUrl}?key=${process.env.NEXT_PUBLIC_KEY}`, {
            params: {
                platforms: id,
                page: page
            }
        })
    }

    //Piataforme | PS3 | PC | ECC..
    callPlatform() {
        return axios.get(`${Platforms}?key=${process.env.NEXT_PUBLIC_KEY}`, {
        })
    }

    //Info dei Giochi
    callGameinfo(id: number) {
        return axios.get(`${BaseUrl}/${id}?key=${process.env.NEXT_PUBLIC_KEY}`)
    }

    //Ultimi giochi rilasciati
    callNewGamesRelase() {
        return axios.get(`${BaseUrl}?key=${process.env.NEXT_PUBLIC_KEY}`, {
            params: {
                dates: NewRelase,
                ordering: '-added'
            }
        })
    }

    //Giochi con votazioni più alte
    topMetacriticGame() {
        return axios.get(`${BaseUrl}?key=${process.env.NEXT_PUBLIC_KEY}`, {
            params: {
                metacritic: '80,100'
            }
        })
    }
}

const Service = new serviceApi();

export default Service;

