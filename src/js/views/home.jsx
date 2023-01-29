import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard } from "../component/GeneralCard.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
			actions.getStarWarsInfo("films")
			actions.getStarWarsInfo("people")
			actions.getStarWarsInfo("planets")
			actions.getStarWarsInfo("species")
			actions.getStarWarsInfo("starships")
			actions.getStarWarsInfo("vehicles")
	}, [])
	return (<div className="container">
	<div className="">
		<h1 className="display-4 fw-bolder"><Link className="text-white" to={"/people"}>Characters</Link></h1>
		<ul className="list-group-horizontal overflow-scroll d-flex">
		{store.people.map((person)=>
				<div key={person.uid} className="col-md-4 mx-2">
					<GeneralCard 
					id={person.uid}
					title={person.name}
					type="people"
					img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
					/>
					</div>
					)}
		</ul>
	</div>
	<div className="">
	<h1 className="display-4 fw-bolder"><Link className="text-white" to={"/people"}>Starships</Link></h1>
		<ul className="list-group-horizontal overflow-scroll d-flex">
		{store.starships.map((starship)=>
				<div key={starship.uid} className="col-md-4 mx-2">
					<GeneralCard 
					id={starship.uid}
					title={starship.name}
					type="starships"
					img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
					/>
					</div>
					)}
		</ul>
	</div>	<div className="">
	<h1 className="display-4 fw-bolder"><Link className="text-white" to={"/people"}>Vehicles</Link></h1>
		<ul className="list-group-horizontal overflow-scroll d-flex">
		{store.vehicles.map((vehicle)=>
				<div key={vehicle.uid} className="col-md-4 mx-2">
					<GeneralCard 
					id={vehicle.uid}
					title={vehicle.name}
					type="vehicles"
					img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
					/>
					</div>
					)}
		</ul>
	</div>	<div className="">
	<h1 className="display-4 fw-bolder"><Link className="text-white" to={"/people"}>Species</Link></h1>
		<ul className="list-group-horizontal overflow-scroll d-flex">
		{store.species.map((specie)=>
				<div key={specie.uid} className="col-md-4 mx-2">
					<GeneralCard 
					id={specie.uid}
					title={specie.name}
					type="species"
					img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
					/>
					</div>
					)}
		</ul>
	</div>	<div className="">
	<h1 className="display-4 fw-bolder"><Link className="text-white" to={"/people"}>Planets</Link></h1>
		<ul className="list-group-horizontal overflow-scroll d-flex">
		{store.planets.map((planet)=>
				<div key={planet.uid} className="col-md-4 mx-2">
					<GeneralCard 
					id={planet.uid}
					title={planet.name}
					type="planets"
					img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
					/>
					</div>
					)}
		</ul>
	</div>
	<div className="">
	<h1 className="display-4 fw-bolder"><Link className="text-white" to={"/people"}>Films</Link></h1>
		<ul className="list-group-horizontal overflow-scroll d-flex">
		{store.films.map((film)=>
					<div key={film.uid} className="col-md-4 mx-2">
						<GeneralCard 
						id={film.uid}
						title={film.name}
						type="films"
						img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
						/>
						</div>
					)}
		</ul>
	</div>
</div>


)};
