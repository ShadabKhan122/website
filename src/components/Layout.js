import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4" to="/"><img src="https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png" className="img-fluid rounded-top" alt="" width={50} />Nike</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/onsale">SALE</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/store">NEW & FEATURED</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">BlOG</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout
