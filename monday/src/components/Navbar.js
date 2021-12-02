import React from 'react'
import img1 from '../images/monday_logo_new.jpg';


function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-light bg-light" >
  <div className="container-fluid">
  
    <a className="navbar-brand"></a>
    <img src={img1}/>
    <form className="d-flex input-group w-auto">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </form>
  </div>
</nav>


        </div>
    )
}

export default Navbar
