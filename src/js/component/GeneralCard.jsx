import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const GeneralCard = (props) => {

  const { store, actions } = useContext(Context);

return(
<div className="card mb-3">
    <img src={props.img} className="card-img-top" alt={props.type.toUpperCase()+" "+props.title}/>
    <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.body}</p>
    <div className="d-flex justify-content-between">
      <Link to={`/${props.type}/${props.id}`} className="btn btn-outline-info">More Info</Link>
      <button onClick={()=> actions.handleFavorite({name:props.title, link:`/${props.type}/${props.id}`})} className="btn btn-outline-warning"><i className="bi bi-suit-heart-fill"></i></button>
      </div>
  </div>
</div>
)
}