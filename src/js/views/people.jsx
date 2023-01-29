import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard} from "../component/GeneralCard.jsx";

export const People = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
			actions.getStarWarsInfo("people")
	}, [])

	return(
	<div className="container">
		<h1>Characters</h1>
		<div className="container mt-3">
			<div className="row d-flex justify-content-around">
			{store.people.map((person)=>
				<div key={person.uid} className="col-md-4">
					<GeneralCard 
					id={person.uid}
					title={person.name}
					type="people"
					img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
					/>
					</div>
					)}
			</div>
		</div>
	</div>
	);
	};
