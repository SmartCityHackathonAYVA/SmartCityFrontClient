import React, {useEffect, useState} from 'react';
import NewsList from "../News/NewsList";
import axios from "axios";

const FeedScreen = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        test()
    },)


    const getNews = () => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => {
                setData([...data, ...res.data.results]);
            })
    }

    const test = async () => {
        const request = await axios.get("https://a8775-8f1b.s.d-f.pw/api/news", {
            method: "GET",
            headers: {"Accept": "application/json"}
        })
        const res = await request.data
        setData(res)

    }

    const loadMoreNews = () => {
        setPage(page + 1)
    }


    return (
        <NewsList data={data}/>
    );


};

export default FeedScreen;

