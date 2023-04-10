import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const setActiveClass = ({ isActive }) => (
        isActive ?
            "nav-link active text-white"
            : "nav-link text-black"
        );

    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <NavLink to="/home" className={ setActiveClass }>
                            <i className="bi bi-house-door"></i> Home
                        </NavLink>
                        <NavLink to="/pokemones" className={ setActiveClass }>
                            <i className="bi bi-person-rolodex"></i> Pokemones
                        </NavLink>


                    </div>
                </div>
                <span className="text-black"><i class="bi bi-android"></i> Pokémon</span>
            </div>
        </nav>
    )
}

export default Navbar