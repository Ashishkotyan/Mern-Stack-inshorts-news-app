import axios from "axios";

const URL = "http://localhost:8000"

export const getNews = async(page, size=5) => {
    try{

        return await axios.get(`${URL}/news?=${page}&size=${size}`);

    }catch(error){
        console.log("error while callling api ", error);
    }
}