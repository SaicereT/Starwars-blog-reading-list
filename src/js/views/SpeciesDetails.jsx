import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsCard } from "../component/DetailsCard.jsx";

import "../../styles/demo.css";

export const SpeciesDetails = () => {
	const { store, actions } = useContext(Context);
	const { specieid } = useParams();

	const [data, setData] = useState({})

	useEffect(() =>{
		actions
			.getStarWarsDetails("species", specieid)
			.then((resp) => setData(resp))
	}, []);

	return (
		<div className="container">
			<h1>{data.name} Species Details</h1>
			<DetailsCard 
			img={`https://starwars-visualguide.com/assets/img/species/${specieid}.jpg`}
			body={<div className="card-text">
				<ul>
					<li> Classification: {data.classification}</li>
					<li> Designation: {data.designation}</li>
					<li> Average Height: {data.average_height}</li>
					<li> Average Lifespan: {data.average_lifespan}</li>
					<li> Hair Colors: {data.hair_colors}</li>
					<li> Skin Colors: {data.skin_colors}</li>
					<li> Eye Colors: {data.eye_colors}</li>
					<li> Language: {data.language}</li>
				</ul>
				<div className="d-flex justify-content-between">
					<Link to={-1} className="btn btn-outline-info ms-2">Back to orbit!</Link>
					<button onClick={()=> actions.handleFavorite({name:data.name, link:`/species/${specieid}`})} className="btn btn-outline-warning"><i className="bi bi-suit-heart-fill"></i></button>
      			</div>
			</div>
			}
			title={data.name}
			/>
		</div>
	);
};
