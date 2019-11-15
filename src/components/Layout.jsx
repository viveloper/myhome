import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import withAuth from '../hoc/withAuth';
import './Layout.css';

const Layout = props => {
    const { history, children, user } = props;
    const handleLogoutClick = () => {
        localStorage.removeItem('myhome-user');
        history.push('/signin');
    }
    return (
        <div className="layout">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">LOGO</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/todo">Todo</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Posts</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/posts/free">Free</Link>
                                    <Link className="dropdown-item" to="/posts/programming">Programming</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/blog/tech">Tech</Link>
                                    <Link className="dropdown-item" to="/blog/travel">Travel</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>
                        <div className="my-2 my-lg-0">
                            <button type="button" className="btn btn-link layout-username">{user.username}</button>
                            <span>|</span>
                            <button type="button" className="btn btn-link" onClick={handleLogoutClick}>Logout</button>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className="bg-light">
                    <p>Footer</p>
                </div>
            </footer>
        </div>
    );
}

export default withAuth(withRouter(Layout));