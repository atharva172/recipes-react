import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Recipes from "../pages/Recipes"
import Create from "../pages/Create"
import SingleRecipe from "../pages/SingleRecipe"
import PageNotFound from "../pages/pageNotFound"
import Fav from "../pages/fav"






const Mainroutes = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/recipes" element={<Recipes/>} />
    <Route path="/recipes/details/:id" element={<SingleRecipe/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Create" element={<Create/>} />
    <Route path="/Fav" element={<Fav/>} />
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
}

export default Mainroutes