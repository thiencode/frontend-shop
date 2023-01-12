import React, { useEffect, useState } from 'react';
import request from '../utils/request';

export default function GetList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        request.get(`/list`)
            .then(res => {
                // const peoples = res.data;
                setData(res.data);
            })
    }, []);
    const arr = data.map((data, index) => {
        return (
            <ul key={data.id}>
                <li>{data.id}: {data.lastName} <span> </span> {data.firstName}</li>
            </ul>
        );
    });

    return (
        <div className='text-green-400 hover:cursor-pointer text-center font-bold underline bg-red-400 hover:text-blue-700 w-full'>
            {arr}
        </div>
    )

}
