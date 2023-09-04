import { Link } from "react-router-dom";

const Navigation = () => {
    return <nav>
            <Link to={`/`} style={{color: 'black', textDecoration: 'none', fontFamily: 'Arial'}}>
            <span className="home-nav">Home</span>
            </Link>
            <span><img className="user-img" src='../public/placeholder.png' alt="user-icon" /></span>

    </nav>
}

export default Navigation