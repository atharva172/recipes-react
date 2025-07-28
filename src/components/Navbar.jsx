import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white flex flex-col p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">My Recipe</h2>
       <NavLink className={(e) => e.isActive ? "bg-cyan-600 px-4 py-2 rounded mb-2 " : "hover:bg-gray-800 px-4 py-2 rounded mb-2"} to="/">Home</NavLink> 
       <NavLink className={(e) => e.isActive ? "bg-cyan-600 px-4 py-2 rounded mb-2 " : "hover:bg-gray-800 px-4 py-2 rounded mb-2"} to="/recipes">Recipes</NavLink>
       <NavLink className={(e) => e.isActive ? "bg-cyan-600 px-4 py-2 rounded mb-2 " : "hover:bg-gray-800 px-4 py-2 rounded mb-2"} to="/About">About</NavLink>
       <NavLink className={(e) => e.isActive ? "bg-cyan-600 px-4 py-2 rounded mb-2 " : "hover:bg-gray-800 px-4 py-2 rounded mb-2"} to="/Create">CreateRecipe</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-cyan-600 px-4 py-2 rounded mb-2 " : "hover:bg-gray-800 px-4 py-2 rounded mb-2"} to="/Fav">Favourite</NavLink>
        </div>
        
  )
}

export default Navbar