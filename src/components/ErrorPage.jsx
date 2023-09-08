import { Link } from "react-router-dom";

const ErrorPage = ({err}) => {
    if (err) {
        const {message} = err 
         return <section className="Error">
        <h3>{message}</h3>
    </section>
    }
   
    return <section className="Error">
    <h3>invalid URL</h3>
</section>
   
}

export default ErrorPage