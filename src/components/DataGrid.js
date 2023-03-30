import axios from "axios"
import { useEffect, useState } from "react";
function ShowDataInGrid() {
    const [Data, setData] = useState([])

    let url = "https://gorest.co.in/public/v1/todos"

    useEffect(() => {
        FetchData()

    }, [])

    let fetch;
    let allData=[];
    async function FetchData() {
        await axios.get(url)
            .then((response) => {
                setData(response.data.data)
                allData = response.data.data
                console.log(response.data.data,Data,allData)

            })
            .catch(() => {
                console.log("error")

            })
            
            // setData(fetch.data.data);
            // allData = fetch.data.data
            //      console.log(allData,Data)

    }

    return (
   

    <div>
     <h1>grid data</h1>
      {allData.length > 0 && (
        <div>
       
          {allData.map(user => (
            <p key={user.id}>{user.name}</p>
            
          ))}
        </div>
      )}
    </div>

    // {/* <div>
    //     <h1>grid data</h1>
    // </div> */}
       
    )
}
export default ShowDataInGrid;