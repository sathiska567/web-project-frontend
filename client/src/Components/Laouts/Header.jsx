import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const auth = localStorage.getItem("users");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('login');
  }

  return (
    <div>

      {
        auth ?
          <nav className="navbar navbar-expand-lg text-light bg-primary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                  <Link to="/blogs" className="nav-link active" aria-current="page">Blogs</Link>
                  <Link to="/login" onClick={logout} className="nav-link active" aria-current="page">Logout </Link>



                </div>
              </div>
            </div>
          </nav>

          :

          <nav className="navbar navbar-expand-lg text-light bg-primary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                  <Link to="/login" className="nav-link active" aria-current="page">Sign In</Link>
                  <Link to="/register" className="nav-link active" aria-current="page">Sign Up</Link>
                </div>
              </div>
            </div>
          </nav>





      }

    </div>
  )
}

export default Header