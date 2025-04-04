// MovieCard
import { Link } from "react-router-dom";

const MovieCard = ({ movies }) => {
    return (
        <div>
            {/* Parcours du tableau de films et affichage des informations pour chaque film */}
            {movies.map((movie, index) => {
                return (
                    <div key={index} className="MovieCard">
                        {/* Affichage de l'affiche du film */}
                        <img src={movie.posterURL} alt={movie.title} />

                        {/* Titre du film */}
                        <h2>{movie.title}</h2>

                        {/* Note du film */}
                        <h3>Note: {movie.rate}</h3>

                        {/* Lien vers la page de détails du film */}
                        <Link to={`movie/${movie.id}`}>voir les détails</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default MovieCard;
