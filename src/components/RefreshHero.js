import "./RefreshHero.css"
function RefreshHero({data, setTourList}){
    return(
        <div className="alternateWrapper">
            <div>NO TOURS LEFT....</div>
            <button className="refresh-btn" onClick={()=>{
                setTourList(data);
            }}>REFRESH</button>
        </div>
    )
}
export default RefreshHero;