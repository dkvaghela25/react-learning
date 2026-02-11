import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [apiData, setApiData] = useState([]);
    const ulrEndpoint = 'https://official-joke-api.appspot.com/random_ten';

    useEffect(() => {
        fetch(ulrEndpoint)
            .then((res) => res.json())
            .then((data) => setApiData(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                {apiData.map((data) => {
                    return <li key={data.id}>Setup : {data.setup} <br /> Punchline : {data.punchline} <br /><br /></li>
                })}
            </ul>
        </div>
    )
}

export default FetchApi
