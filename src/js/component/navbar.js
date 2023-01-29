import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	const [links, setLinks]=useState([
		{text:"People", link: "/people"},
		{text:"Films", link: "/films"},
		{text:"Starships", link: "/starships"},
		{text:"Vehicles", link: "/vehicles"},
		{text:"Species", link: "/species"},
		{text:"Planets", link: "/planets"}
	])

	return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ms-4">
	<Link className="navbar-brand" to={"/home"}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-around" id="navbarNavDropdown">
      <ul className="navbar-nav d-flex justify-content-md-end me-5">
		{
			links.map((link, index)=>(
				<li className="nav-item">
					<Link key={index} className="nav-link" to={link.link}>{link.text}</Link>
				</li>
			))
		}
        <li className="nav-item dropdown justify-content-md-end">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {
                store.favorites.map((favorite, index)=>(
                  <li className="d-flex">
                    <Link key={index} className="dropdown-item mx-1" to={favorite.link}>{favorite.name}</Link>
                    <button onClick={()=>actions.handleFavorite({name:favorite.name, link:favorite.link})} type="button" className="btn btn-outline-danger mx-1"><i className="bi bi-trash3-fill"></i></button>
                  </li>
                ))
              }
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
