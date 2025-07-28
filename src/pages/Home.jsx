import axios from "axios"
import { useEffect, useState,  } from "react"



const Home = () => {

 const [recipe, setrecipe]  = useState(null)
 const [loading, setloading] = useState(true)

 const fetchRandomRecipe = async() =>{
  try {
    setloading(true)
    const res = await
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php?c=vegitarian")
    setrecipe(res.data.meals[0])
  } catch (error) {
    console.error("Error fetching recipe",error)
  }finally{
    setloading(false)
  }
 }

 useEffect(()=>{
  fetchRandomRecipe()
 },[]);
  return (
   <div >
      <h1 className="text-2xl font-bold ">Random Recipe</h1>

      {loading ? (
        <p>Loading...</p>
      ) : recipe ? (
        <div>
          <h2 className="text-xl font-semibold">{recipe.strMeal}</h2>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-64 h-64 object-cover rounded-md shadow"
          />
          <p className="mt-2 text-sm text-gray-600">Category: {recipe.strCategory}</p>
          <button
            onClick={fetchRandomRecipe}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Load Another Recipe
          </button>
        </div>
      ) : (
        <p>No recipe found.</p>
      )}
</div>
  )
}

export default Home