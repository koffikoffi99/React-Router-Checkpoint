import "./App.css";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDescription from "./MovieDescription";

const App = () => {
  return (
    // Utilisation de BrowserRouter pour activer le routage dans l'application
    <BrowserRouter>
      <Routes>
        {/* Route principale affichant la liste des films */}
        <Route path='/' element={<MovieCard movies={MovieList} />} />

        {/* Route dynamique pour afficher la description d'un film en fonction de son ID */}
        <Route path='/movie/:id' element={<MovieDescription movies={MovieList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
