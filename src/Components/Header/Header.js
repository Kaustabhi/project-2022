import React from "react"
import {Link} from "gatsby"

const  Header = () => {
return (
<nav class="navbar navbar-Banasthali-Vidyapith navbar-dark bg-dark" aria-label="Seventh navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Banasthali Vidyapith Web Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleXxl">
        <ul class="navbar-nav me-auto mb-2 mb-xl-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Spicybite">Spicy Bite</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Agarwalgstore">Agarwal General Store</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/bhaduriyamedicalstore">Bhaduriya Medical Store</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link menu">Menu</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownXxl" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu" aria-labelledby="dropdownXxl">
              <li><a class="dropdown-item" href="#">Food Items</a></li>
              <li><a class="dropdown-item" href="#">Staitonery</a></li>
              <li><a class="dropdown-item" href="#">Grocery</a></li>
            </ul>
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
        </form>
      </div>
    </div>
  </nav>
)
}
 
export default  Header