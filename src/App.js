import "./App.css";
import data from "./data";
import Hero from "./components/Hero";
import RefreshHero from "./components/RefreshHero";
import {useState} from "react";
function App() {
	const [TourList, setTourList] = useState(data);
	
		return(
			TourList.length !== 0 ? <Hero TourList={TourList} setTourList={setTourList}/> : <RefreshHero data={data}setTourList={setTourList}/>	
		)
}
export default App;
