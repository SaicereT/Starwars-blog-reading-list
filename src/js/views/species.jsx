import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard} from "../component/GeneralCard.jsx";

export const Species = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
			actions.getStarWarsInfo("species")
	}, [])

	return(
	<div className="container">
		<h1>Species</h1>
		<div className="container mt-3">
			<div className="row d-flex justify-content-around">
			{store.species.map((specie)=>
				<div key={specie.uid} className="col-md-4">
					<GeneralCard 
					id={specie.uid}
					title={specie.name}
					type="species"
					img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
					/>
					</div>
					)}
			</div>
		</div>
	</div>
	);
	};
