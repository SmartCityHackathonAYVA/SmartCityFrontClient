import React, {useEffect, useState} from 'react';
import {Animated, FlatList, ScrollView, Text, View} from "react-native";
import EventCard from "./EventCard";
import axios from "axios";
import NewsCardTest from "../News/NewsCardTest";

const EventsList = () => {

    const [data, setData] = useState()

    const test = async () => {
        const request = await axios.get("https://a8775-8f1b.s.d-f.pw/api/Events", {
            method: "GET",
            headers: {"Accept": "application/json"}
        })
        const res = await request.data
        setData(res)

    }

    useEffect(() => {
        test()
    })

    return (
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                scrollEventThrottle={16}
                renderItem={({item}) => (
                    <EventCard title={item.title} image={item.image} eventDate={item.eventDate} text={item.text}/>
                )}
            />
    );
};

export default EventsList;
