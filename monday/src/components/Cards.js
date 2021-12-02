import React from 'react'
import img1 from '../images/monday_logo_new.jpg';
import Style from '../assets/css/style.css';



function Cards() {
    return (
        <div>
           
           <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom text-center">Welcome</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url(${img1})`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
            <ul className="d-flex list-unstyled mt-auto">
              
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small><a href="#" className="btn btn-primary">Primary button</a></small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small></small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url(${img1})`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
            <ul className="d-flex list-unstyled mt-auto">
             
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small><a href="#" className="btn btn-primary">Primary button</a></small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url(${img1})`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
            <ul className="d-flex list-unstyled mt-auto">
              
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small><a href="#" className="btn btn-primary">Primary button</a></small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
           
        </div>
    )
}

export default Cards