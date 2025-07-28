import Navbar from "./components/navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="min-h-screen flex bg-gray-800 text-lg text-gray-800  font-medium">

      <div className="w-64 bg-gray-800 shadow-lg"> <Navbar/></div>
     
      
      <div className="flex-1 p-6 overflow-y-auto"><Mainroutes/></div>
      </div>
  )
}

export default App