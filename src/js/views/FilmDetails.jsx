import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsCard } from "../component/DetailsCard.jsx";

import "../../styles/demo.css";

export const FilmDetails = () => {
	const { store, actions } = useContext(Context);
	const { filmid } = useParams();

	const [data, setData] = useState({})

	useEffect(() =>{
		actions
			.getStarWarsDetails("films", filmid)
			.then((resp) => setData(resp))
	}, []);

	return (
		<div className="container">
			<h1>{data.title} Details</h1>
			<DetailsCard 
			img={`https://starwars-visualguide.com/assets/img/films/${filmid}.jpg`}
			body={<div className="card-text">
				<ul>
					<li> Director: {data.director}</li>
					<li> Release_date: {data.release_date}</li>
					<li> Description: {data.description}</li>
				</ul>
				<div className="d-flex justify-content-between">
					<Link to={-1} className="btn btn-outline-info ms-2">Back to orbit!</Link>
					<button onClick={()=> actions.handleFavorite({name:data.title, link:`/film/${filmid}`})} className="btn btn-outline-warning"><i className="bi bi-suit-heart-fill"></i></button>
      			</div>
			</div>
			}
			title={data.name}
			/>
		</div>
	);
};
