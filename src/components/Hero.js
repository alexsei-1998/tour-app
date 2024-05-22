import "./Hero.css"
import data from "../data";
import {useState} from "react";
import Tour from "./Tour.js"
export default function Hero({TourList, setTourList})
{
    function removeTour(id){
        let newList = TourList.filter((TourObj)=>{
            return TourObj.id != id
        });
        setTourList(newList);
    }
    return(
        <div className="wrapper">
            <div className="heading">
                <div className="title">TOUR WITH US</div>
            </div>
            <div className="list">
                {
                    TourList.map((TourData)=>{
                        return <Tour key={TourData.id} TourData={TourData} removeTour={removeTour}/>
                    })
                }
            </div>
        </div>
    )
}