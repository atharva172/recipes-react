import { Link } from "react-router-dom";


const RecipeCard = (props) => {
  if(!props.recipe){
    return <div></div>
  }

  const {id,image,title,description,cheif} = props.recipe;
  return (
  <Link to={`/recipes/details/${id}`} className="block px-10">
    <div className="bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transtion-all duration-300 ">
  <img className="w-full h-48 object-cover" src={image} />
  <div className="p-4 space-y-2">
  <h1 className="text-xl font-semibold text-white"> {title}</h1>
  <small className="text-blue-500 ">Cheif Name = {cheif}</small>
  <p className="text-sm text-white">Description : {description?description.slice(0,70): "no description availabe"}... <small className="text-red-600">more</small></p>
  </div>
  </div>
  </Link>
  
)

}

export default RecipeCard