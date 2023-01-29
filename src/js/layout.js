import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { People } from "./views/people.jsx";
import { Films } from "./views/films.jsx";
import { Starships } from "./views/starships.jsx";
import { Vehicles } from "./views/vehicles.jsx";
import { Species } from "./views/species.jsx";
import { Planets } from "./views/planets.jsx";
import { PlanetDetails } from "./views/planetDetails.jsx";
import { PeopleDetails } from "./views/PeopleDetails.jsx";
import { StarshipDetails } from "./views/StarshipDetails.jsx";
import { VehicleDetails } from "./views/VehiclesDetails.jsx";
import { SpeciesDetails } from "./views/SpeciesDetails.jsx";
import { FilmDetails } from "./views/FilmDetails.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [comps, setComps]=useState ([
		{path:"/", element:"<Home />"},
		{path:"/home", element:"<Home />"},
		{path:"/people", element:"<People />"},
		{path:"/films", element:"<Films />"},
		{path:"/starships", element:"<Starships />"},
		{path:"/vehicles", element:"<Vehicles />"},
		{path:"/species", element:"<Species />"},
		{path:"/planets", element:"<Planets />"},
		{path:"*", element:"<h1>Page not found!</h1>"}
	])

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/people" element={<People />} />
						<Route path="/people/:peopleid" element={<PeopleDetails />} />
						<Route path="/films" element={<Films />} />
						<Route path="/films/:filmid" element={<FilmDetails />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/starships/:starshipid" element={<StarshipDetails />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/vehicles/:vehicleid" element={<VehicleDetails />} />
						<Route path="/species" element={<Species />} />
						<Route path="/species/:specieid" element={<SpeciesDetails />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:planetid" element={<PlanetDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
