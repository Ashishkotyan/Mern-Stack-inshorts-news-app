import { useEffect, useState } from 'react';
import { getNews } from '../service/api.js';


// components

import Article from './Article';


const Articles = () => {


    const [news, SetNews] = useState([]);

    useEffect(() => {
        dailyNews();

    }, [])


    const dailyNews = async () => {
        let response = await getNews();
        SetNews(response.data)
        console.log("hel")
        console.log(response);
    }

    return (

        news?.length > 0 && news.map(article => (
            <Article article={article} />

        ))


    )

}
export default Articles