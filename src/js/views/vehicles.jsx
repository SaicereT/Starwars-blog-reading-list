import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard} from "../component/GeneralCard.jsx";

export const Vehicles = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
			actions.getStarWarsInfo("vehicles")
	}, [])

	return(
	<div className="container">
		<h1>Vehicles</h1>
		<div className="container mt-3">
			<div className="row d-flex justify-content-around">
			{store.vehicles.map((vehicle)=>
				<div key={vehicle.uid} className="col-md-4">
					<GeneralCard 
					id={vehicle.uid}
					title={vehicle.name}
					type="vehicles"
					img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
					/>
					</div>
					)}
			</div>
		</div>
	</div>
	);
	};
