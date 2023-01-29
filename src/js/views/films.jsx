import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard} from "../component/GeneralCard.jsx";

export const Films = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
			actions.getStarWarsInfo("films")
			console.log(store.films)
	}, [])

	return(
	<div className="container">
		<h1>Films</h1>
		<div className="container mt-3">
			<div className="row d-flex justify-content-around">
				{store.films.map((film)=>
					<div key={film.uid} className="col-md-4">
						<GeneralCard 
						id={film.uid}
						title={film.properties.title}
						type="films"
						img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
						/>
						</div>
					)}
			</div>
		</div>
	</div>
	);
	};