import ContentGenres from './ContentGenres'
import ContentLastMovie from './ContentLastMovie'
import ContentAppDashboard from './ContentAppDashboard'

function ContentRowTop() {
    return (
        <div className="container-fluid">
            < ContentAppDashboard />

            <div className="row">
                < ContentLastMovie />

                < ContentGenres />
            </div>
        </div>
    )
}

export default ContentRowTop