import PropTypes from 'prop-types';

function TableContent(props) {
    return (
        <tbody>
            {props.items.map((item, i) =>
                <tr key={i}>
                    <th>{item.titulo}</th>
                    <th>{item.duracion}</th>
                    <th>{item.rating}</th>
                    <th><ul>{item.generos.map((genero, i) => <li key={i}> {genero} </li>)}</ul></th>
                    <th>{item.premios}</th>
                </tr>
            )}
        </tbody>
    )
}

TableContent.propTypes = {
    titulo: PropTypes.string.isRequired,
    duracion: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    generos: PropTypes.array.isRequired,
    premios: PropTypes.number.isRequired
}

export default TableContent