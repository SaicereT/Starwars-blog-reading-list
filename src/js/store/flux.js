import { Await } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets:[],
			films:[],
			people:[],
			species:[],
			starships:[],
			vehicles:[],
			favorites:[],
		},
		actions: {

			getStarWarsInfo:async(resource, id=0)=>{
				let resp = await fetch("https://www.swapi.tech/api/"+ resource)
				if (!resp.ok){
					console.error(resp.status + ": " + resp.statusText)
					return
				}
				let data= await resp.json()
				let newStore = {...getStore()}
				newStore [resource]=data.result || data.results
				setStore(newStore)
			},

			getStarWarsDetails: async(resource, id)=>{
				let resp = await fetch (`https://www.swapi.tech/api/${resource}/${id}`)
				if (!resp.ok){
					console.error(`Error: ${resp.status}: ${resp.statusText}`)
					return
				}
				let data = await resp.json()
				return {
					...data.result.properties
				}
			},
			addFavorite:(element)=>{
				let currentStore=getStore()
				setStore({
					...currentStore,
					favorites:[...currentStore.favorites, element]
				})
			},
			removeFavorite:(index)=>{
				let currentStore=getStore()
				let newFavorites=[...currentStore.favorites]
				newFavorites.splice(index,1)
				setStore({
					...currentStore,
					favorites:newFavorites
				})
			},
			handleFavorite:(data) => {
				let currentStore=getStore()
				let favoriteIndex=currentStore.favorites.findIndex(fav=>fav.link==data.link)
				if (favoriteIndex==-1){
					setStore({
						...currentStore,
						favorites:[...currentStore.favorites, data]
					})
			  }else{
				let newFavorites=[...currentStore.favorites]
				newFavorites.splice(favoriteIndex,1)
				setStore({
					...currentStore,
					favorites: newFavorites
				})
			  }
			  }
			}
		}
	};

export default getState;
