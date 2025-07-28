import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import {recipecontext} from "../Context/RecipeContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const Create = () => {
  const navigate = useNavigate();
  const {RecipeData, setRecipeData}  = useContext(recipecontext)

   const {register, handleSubmit , reset} = useForm()

   const SubmitHandler = (recipe) =>{
    recipe.id = nanoid()
   const copydata = [...RecipeData];
   copydata.push(recipe);
    setRecipeData(copydata)
    localStorage.setItem("recipes",JSON.stringify(copydata))
    toast.success("New Recipe Create !!")
    reset();
    navigate("/recipes")
   }

  return (
    <div className="flex flex-col min-h-screen bg-gray-800  px-4 text-white">
      
    <form className="mx-auto max-w-4xl bg-gray-800 p-8 rounded-xl space-y-6" onSubmit={handleSubmit(SubmitHandler)}>
         <input
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
        {...register("image")} 
        type= "url"
        placeholder="Enter your image url"
        />
      <small className="text-sm text-red-500 mt-1">Please Enter A Valid Url !!</small>

        <input
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:zing-2 focus:ring-blue-500"
        {...register("title")} 
        type="text"
        placeholder="Title Of The Recipe"/>

        <select 
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:zing-2 focus:ring-blue-500"
        {...register("Categories")}
        
        >
          <option value="BreakFast">BreakeFast</option>
          <option value="Lunch">Lunch</option>
          <option value="Super">Super</option>
          <option value="Dinner">Dinner</option>
        </select>
         
         <textarea
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:zing-2 focus:ring-blue-500"
        {...register("description")} 
        placeholder="//Enter Your Descrpition"
        ></textarea>
        <small className="text-red-500">Write Description Here !!</small>

         <textarea
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:zing-2 focus:ring-blue-500"
        {...register("ingredients")} 
        placeholder="//Write Ingredients"
        ></textarea>
        <small className="text-red-500">Write Ingredients Here !!</small>

         <textarea
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:zing-2 focus:ring-blue-500"
        {...register("instruction")} 
        placeholder="//Write instructions"
        ></textarea>
        <small className="text-red-500">Write Instructions Here !!</small>

            <input
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:zing-2 focus:ring-blue-500"
        {...register("cheif")} 
        type="text"
        placeholder="Name Of The Cheif"/>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition">Create Recipe</button>
         
    </form>
    </div>
  )
}

export default Create