import { useContext, useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import { recipecontext } from "../Context/RecipeContext"
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const SingleRecipe = () => {
  const navigate = useNavigate()
  const {RecipeData, setRecipeData}  = useContext(recipecontext)
  const params = useParams()
   const recipe = RecipeData.find((recipe) => params.id == recipe.id)

   const {register, handleSubmit } = useForm({defaultValues:{
    title : recipe?.title,
    cheif : recipe?.cheif,
    image: recipe?.image,
    description : recipe?.description,
    instruction : recipe?.instruction

   }})

   const SubmitHandler = (recipe) =>{
        const recipeindex = RecipeData.findIndex((recipe) => params.id == recipe.id)
        const copydata = [...RecipeData] 
        copydata[recipeindex] = {...copydata[recipeindex], ...recipe}
        setRecipeData(copydata)
         localStorage.setItem("recipe",JSON.stringify(copydata))
        toast.success("recipe is updated")
   }
   
    const Deletehandler = () => {
      const filterdata = RecipeData.filter((r) => r.id != params.id)
      setRecipeData(filterdata)
       localStorage.setItem("recipe",JSON.stringify(filterdata))

       const updateFav = favourite.filter((f) => f?.id !== params?.id)
       setfavourite(updateFav)
       localStorage.setItem("Fav",JSON.stringify(updateFav))
      toast.success("Recipe deleted")
      navigate("/recipes")
    }

    const [favourite, setfavourite] = useState(
      JSON.parse(localStorage.getItem("Fav")) || []
    )

    const favhandler = () =>{
      let copyfav = [...favourite];
      copyfav.push(recipe);
      setfavourite(copyfav)
       localStorage.setItem("Fav",JSON.stringify(copyfav))
    }
    
    const unfavhandler = () =>{
         const filterfav = favourite.filter((f) => f.id != recipe?.id);
         setfavourite(filterfav)
          localStorage.setItem("Fav",JSON.stringify(filterfav))
    }

    useEffect(() =>{
     console.log("SingleRecipe.jsx mounted")
     return () => {
      console.log("SingleRecipe.jsx unmount")
     }
    },[])

    
  return (
    <div className="flex flex-col min-h-screen bg-gray-800  px-4 text-white">
      <div className="mx-auto max-w-4xl bg-gray-800 p-8 rounded-xl space-y-6 relative">
        {favourite.find((f) => f?.id == recipe?.id) ? (<i onClick={unfavhandler} className="ri-heart-fill text-red-500 text-2xl absolute top-4 right-4 cursor-pointer"></i>) : (<i onClick={favhandler} className="ri-heart-line text-gray-400 text-2xl absolute top-4 right-4 cursor-pointer"></i>)}
        
      
        <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-bold text-white">{recipe?.title}</h1>
      <img className="h-60 w-full max-w-md object-cover rounded-md shadow" src={recipe?.image} alt="" />


    
      
      </div>

       <form className="space-y-5" onSubmit={handleSubmit(SubmitHandler)}>
         <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("image")} 
        type= "url"
    
        placeholder="Enter your image url"
        />
        
      <small className="text-red-500">Please Enter A Valid Url !!</small>

        <input
        className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("title")} 
        type="text"
        placeholder="Title Of The Recipe"/>

        <select 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500"
        {...register("Categories")}
       
        
        >
          <option value="BreakFast">BreakFast</option>
          <option value="Lunch">Lunch</option>
          <option value="Super">Super</option>
          <option value="Dinner">Dinner</option>
        </select>
         
         <textarea
        className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("description")} 
        placeholder="//Enter Your Descrpition"
       
        ></textarea>
        <small className="text-red-500">Write Description Here !!</small>

         <textarea
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("ingredients")} 
        placeholder="//Write Ingredients"
        ></textarea>
        <small className="text-red-500">Write Ingredients Here !!</small>

         <textarea
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("instruction")} 
        placeholder="//Write instructions"
        ></textarea>
        <small className="text-red-500">Write Instructions Here !!</small>

            <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("cheif")} 
        type="text"
    
        placeholder="Name Of The Cheif"/>

        <div className="flex justify-between">

        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Update Recipe</button>
        <button onClick={Deletehandler} className="bg-red-500 text-white  px-6 py-2 rounded-md hover:red-600 transition">Delete Recipe</button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default SingleRecipe