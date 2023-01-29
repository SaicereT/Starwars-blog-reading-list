import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsCard } from "../component/DetailsCard.jsx";

import "../../styles/demo.css";

export const StarshipDetails = () => {
	const { store, actions } = useContext(Context);
	const { starshipid } = useParams();

	const [data, setData] = useState({})

	useEffect(() =>{
		actions
			.getStarWarsDetails("starships", starshipid)
			.then((resp) => setData(resp))
	}, []);

	return (
		<div className="container">
			<h1>{data.name} Starship Details</h1>
			<DetailsCard 
			img={`https://starwars-visualguide.com/assets/img/starships/${starshipid}.jpg`}
			body={<div className="card-text">
				<ul>
					<li> Model: {data.model}</li>
					<li> Starship Class: {data.starship_class}</li>
					<li> Manufacturer: {data.manufacturer}</li>
					<li> Cost in Credits: {data.cost_in_credits}</li>
					<li> Length: {data.length}</li>
					<li> Crew: {data.crew}</li>
					<li> Passengers: {data.passengers}</li>
					<li> Max Atmospheric Speed: {data.max_atmosphering_speed}</li>
					<li> Hyperdrive Rating: {data.hyperdrive_rating}</li>
					<li> MGLT: {data.MGLT}</li>
					<li> Cargo Capacity: {data.cargo_capacity}</li>
					<li> Consumables: {data.consumables}</li>
				</ul>
				<div className="d-flex justify-content-between">
					<Link to={-1} className="btn btn-outline-info ms-2">Back to orbit!</Link>
					<button onClick={()=> actions.handleFavorite({name:data.name, link:`/starship/${starshipid}`})} className="btn btn-outline-warning"><i className="bi bi-suit-heart-fill"></i></button>
      			</div>
			</div>
			}
			title={data.name}
			/>
		</div>
	);
};
