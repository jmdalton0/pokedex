import React from "react";

function Nav() {
    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item me-auto">
                                <a className="nav-link" href="/pokemon">Pokemon</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add-pokemon">Add a Pokemon</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;