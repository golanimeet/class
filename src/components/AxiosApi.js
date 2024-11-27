import React, { useEffect, useState } from "react";
import axios from 'axios';

const AxiosApi = () => {
    const [user, setUser] = useState([]);
    const getData = async () => {
        const res = await axios.get('https://picsum.photos/v2/list');
        // console.log(res) 
        setUser(res.data); // data is a array display 
    }
    return (
        <div className=" p-5 m-3">
            <button onClick={getData} className="btn btn-success p-2">Get Data</button>
            {user.map(function (e) {
                return (
                    <div className="d-flex m-3 p-2 bg-secondary">
                        <img src={e.download_url} className="rounded-circle w-25" alt="" />
                        <div className="fw-bold p-3 m-2">
                            <p>ID: {e.id}</p>
                            <p>Author Name : {e.author}</p>
                            <p>Height : {e.height}</p>
                            <p>Width : {e.width}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AxiosApi;