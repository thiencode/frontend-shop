import { Link } from "react-router-dom";
import Products from "../../components/Products";

export default function Home() {
    return (
        <div className="">
            <Products />
            <ul>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/following">Following page</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}