import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";

function App(){
  return(
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Movie/:id" element={<MovieDetail/>}/>
      <Route path="/Search" element={<Search/>}/>
    </Routes>
    </>
  );
}
export default App;
