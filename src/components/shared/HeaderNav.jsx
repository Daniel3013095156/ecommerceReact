import { Link } from "react-router-dom"

const HeaderNav = () => {
    return (
        <header>
            <h1><Link to='/'>e-commerce</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/'>Purchases</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderNav