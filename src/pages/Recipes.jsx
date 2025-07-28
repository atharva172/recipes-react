import { useContext } from "react"
import { recipecontext } from "../Context/RecipeContext"
import RecipeCard from "../components/RecipeCard"



const Recipes = () => {
  const {RecipeData} = useContext(recipecontext)

  const renderrecipes = RecipeData.map((recipe) => <RecipeCard key={recipe?.id} recipe={recipe}/>)
  return <div className="flex flex-wrap gap-20">{RecipeData.length > 0 ? renderrecipes : "Not Recipe Found !!"}</div>
  
}

export default Recipes