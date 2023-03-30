
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "./Grid";
import '../App.css'


function ShowDataInGrid() {

    let [data, setData] = useState([]);


    async function getBooksData() {
         await axios.get("https://gorest.co.in/public/v1/todos")
            .then((response) => {
                setData(response.data.data)
                
                })
                .catch((error) => {
                  console.log("error", error.response.data.message)
                })
       
    }

    useEffect(() => {
        
        getBooksData();

    }, [])

    return (
        <div className="video_div" style={{background:"black"}}>
            <h2 style={{color:"white"}}> All data in Grid  </h2>
            <div className="product-wrapper">
                {data.map((item, index) => (
                    <ProductCard
                        key={item._id}
                        id={item.id}
                        userId={item.user_id}
                        title={`${item.title}`}
                        due_on={item.due_on}
                        status={item.status}

                    />
                ))}
            </div>

        </div>
    )
}
export default ShowDataInGrid;