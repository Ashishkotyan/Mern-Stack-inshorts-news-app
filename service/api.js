import axios from "axios";

const URL = "http://localhost:8000"

export const getNews = () => {
    try{

        return axios.get(`${URL}/news`);

    }catch(error){
        console.log("error while callling api ", error);
    }
}