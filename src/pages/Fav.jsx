import RecipeCard from "../components/RecipeCard"


const Fav = () => {
   const favourite = JSON.parse(localStorage.getItem("Fav") || [])

  const renderrecipes = favourite.map((recipe,i) => (<RecipeCard key={recipe?.id || i} recipe={recipe}/>))
  return <div className="flex flex-wrap gap-20">{favourite.length > 0 ? renderrecipes : "Not Recipe Found !!"}</div>
  
}


export default Fav