
import { Link } from "react-router-dom";


const Navigation = () => {

    return <nav>
            <Link to={`/`}>
            <span className="home-nav">Home</span>
            </Link>
    </nav>
}

export default Navigation