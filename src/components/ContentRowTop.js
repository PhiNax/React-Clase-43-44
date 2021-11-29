import ContentRowMovies from './ContentRowMovies'
import ContentGenresInDb from './ContentGenresInDb'
import ContentLastMovieInDb from './ContentLastMovieInDb'


function ContentRowTop() {
    return (
        <div className="container-fluid">
            <ContentRowMovies items={[
                { "titulo": "movies in data base", "color": "border-left-primary", "cifra": 21, "icono": "fa-film" },
                { "titulo": "total awards", "color": "border-left-success", "cifra": 79, "icono": "fa-award" },
                { "titulo": "actors quantity", "color": "border-left-warning", "cifra": 49, "icono": "fa-user" }
            ]} />

            <div className="row">
                <ContentLastMovieInDb />

                <ContentGenresInDb />
            </div>
        </div>
    )
}

export default ContentRowTop