// MovieDescription

import { Link, useParams } from "react-router-dom";

const MovieDescription = ({ movies }) => {
    // Récupération de l'ID du film depuis l'URL
    const { id } = useParams();

    // Recherche du film correspondant dans le tableau movies
    const movie = movies.find(movie => movie.id === Number(id));

    // Vérification si le film existe, sinon affichage d'un message d'erreur
    if (!movie) return <h2>Film non trouvé</h2>;

    return (
        <div className="MovieCard">
            {/* Titre du film */}
            <h1>{movie.title}</h1>

            {/* Affichage de l'affiche du film */}
            <img src={movie.posterURL} alt="" />

            {/* Description du film */}
            <p>{movie.description}</p>

            {/* Intégration de la bande-annonce du film via un iframe */}
            <iframe
                src={movie.trailerLink}
                frameBorder="0"
                title={movie.title}
            ></iframe>

            <br />

            {/* Lien pour revenir à la page d'accueil */}
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
}

export default MovieDescription;
