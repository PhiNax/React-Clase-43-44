import TableContent from './TableContent';

function Table() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <table className="table table-hover table-bordered col-6 shadow">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Duracion</th>
                            <th>Rating</th>
                            <th>Genero</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <TableContent items={[
                        { "titulo": "Billy Eliot", "duracion": 123, "rating": 5, "generos": ["Drama", "Comedia"], "premios": 2 },
                        { "titulo": "Alicia en el pais de las maravillas", "duracion": 142, "rating": 4.8, "generos": ["Drama", "Comedia"], "premios": 3 }
                    ]} />
                </table>
            </div>
        </div>
    )
}

export default Table