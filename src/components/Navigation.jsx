import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const Navigation = () => {
    const { user } = useContext(UserContext);

    return <nav>
            <Link to={`/`}>
            <span className="home-nav">Home</span>
            </Link>
            <span><img className="user-img" src={user.avatar_url} alt="user-icon" /></span>

    </nav>
}

export default Navigation