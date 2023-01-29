import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsCard } from "../component/DetailsCard.jsx";

import "../../styles/demo.css";

export const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
	const { planetid } = useParams();

	const [data, setData] = useState({})

	useEffect(() =>{
		actions
			.getStarWarsDetails("planets", planetid)
			.then((resp) => setData(resp))
	}, []);

	return (
		<div className="container">
			<h1>Planet {data.name} Details</h1>
			<DetailsCard 
			img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
			body={<div className="card-text">
				<ul>
					<li> diameter: {data.diameter}</li>
					<li> rotation_period: {data.rotation_period}</li>
					<li> orbital_period: {data.orbital_period}</li>
					<li> gravity: {data.gravity}</li>
					<li> population: {data.population}</li>
					<li> climate: {data.climate}</li>
					<li> terrain: {data.terrain}</li>
					<li> surface_water: {data.surface_water}</li>
				</ul>
				<div className="d-flex justify-content-between">
					<Link to={-1} className="btn btn-outline-info ms-2">Back to orbit!</Link>
					<button onClick={()=> actions.handleFavorite({name:data.name, link:`/planet/${planetid}`})} className="btn btn-outline-warning"><i className="bi bi-suit-heart-fill"></i></button>
      			</div>
			</div>
			}
			title={data.name}
			/>
		</div>
	);
};
