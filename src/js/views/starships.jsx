import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard} from "../component/GeneralCard.jsx";

export const Starships = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
			actions.getStarWarsInfo("starships")
	}, [])

	return(
	<div className="container">
		<h1>Starships</h1>
		<div className="container mt-3">
			<div className="row d-flex justify-content-around">
			{store.starships.map((starship)=>
				<div key={starship.uid} className="col-md-4">
					<GeneralCard 
					id={starship.uid}
					title={starship.name}
					type="starships"
					img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
					/>
					</div>
					)}
			</div>
		</div>
	</div>
	);
	};
