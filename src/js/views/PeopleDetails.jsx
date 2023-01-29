import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsCard } from "../component/DetailsCard.jsx";

import "../../styles/demo.css";

export const PeopleDetails = () => {
	const { store, actions } = useContext(Context);
	const { peopleid } = useParams();

	const [data, setData] = useState({})

	useEffect(() =>{
		actions
			.getStarWarsDetails("people", peopleid)
			.then((resp) => setData(resp))
	}, []);

	return (
		<div className="container">
			<h1>{data.name} Details</h1>
			<DetailsCard 
			img={`https://starwars-visualguide.com/assets/img/characters/${peopleid}.jpg`}
			body={<div className="card-text">
				<ul>
					<li> Height: {data.height}</li>
					<li> Mass: {data.mass}</li>
					<li> Hair Color: {data.hair_color}</li>
					<li> Height: {data.height}</li>
					<li> Eye Color: {data.eye_color}</li>
					<li> Birth Year: {data.birth_year}</li>
					<li> Gender: {data.gender}</li>
				</ul>
				<div className="d-flex justify-content-between me-2 mt-5">
					<Link to={-1} className="btn btn-outline-info">Back to orbit!</Link>
					<button onClick={()=> actions.handleFavorite({name:data.name, link:`/people/${peopleid}`})} className="btn btn-outline-warning"><i className="bi bi-suit-heart-fill"></i></button>
      			</div>
			</div>
			}
			title={data.name}
			/>
		</div>
	);
};
