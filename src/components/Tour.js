import { useState } from "react"
import "./Tour.css"
export default function Tour({TourData, removeTour})
{
    const [readmode, setReadMode] = useState(false);
    return(
        <div className="TourCard">
            <img src={TourData.image}></img>
            <div className="tourName">{TourData.name}</div>
            <div className="tourPrice">₹{TourData.price}</div>
            <div>
            {
                readmode ? TourData.info : TourData.info.substr(0, 200)
            }
            <div className="readmore" onClick={()=>{
                setReadMode(!readmode);
            }}>....
            {
                readmode ? "read less" : "read more"
            }</div>
            </div>
            <button className="red-btn" onClick={()=>{removeTour(TourData.id)}}>NOT INTERESTED</button>
        </div>
    )
}