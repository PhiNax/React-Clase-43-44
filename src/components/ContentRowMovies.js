import PropTypes from 'prop-types';

function ContentRowMovies(props) {
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
                {props.items.map((item, i) =>
                    <div key={i} className="col-md-4 mb-4">
                        <div className={`${item.color} card shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.titulo}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{item.cifra}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={`fas ${item.icono} fa-2x text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

ContentRowMovies.propTypes = {
    titulo: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['border-left-primary', 'border-left-success', 'border-left-warning']).isRequired,
    cifra: PropTypes.number.isRequired,
    icono: PropTypes.string.isRequired
}

ContentRowMovies.defaultProps = {
    titulo: "Defaulttitulo",
    color: "border-left-alert",
    cifra: 0,
    icono: "fa-exclamation-triangle"
}

export default ContentRowMovies