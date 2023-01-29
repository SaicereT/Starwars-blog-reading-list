import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard} from "../component/GeneralCard.jsx";

export const Planets = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
			actions.getStarWarsInfo("planets")
	}, [])

	return(
	<div className="container">
		<h1>Planets</h1>
		<div className="container mt-3">
			<div className="row d-flex justify-content-md-around">
			{store.planets.map((planet)=>
				<div key={planet.uid} className="col-md-4">
					<GeneralCard 
					id={planet.uid}
					title={planet.name}
					type="planets"
					img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
					/>
					</div>
					)}
			</div>
		</div>
	</div>
	);
	};
