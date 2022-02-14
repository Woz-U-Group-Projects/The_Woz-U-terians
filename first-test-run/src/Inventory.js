import React from 'react'

function Inventory(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
            <h1>Welcome to the Inventory Page! :D</h1>
            <h2>Info this page should display</h2>
            <ul>
                <li>Product Make(r)</li>
                <li>Product Model(Phone Name)</li>
                <li>Storage Capacity</li>
                <li>Color Options</li>
                <li>(Optional)Units sold in last 90/60/30 days</li>

                <h4>From example found Online</h4>
                
                <li>Supply Plan</li>
                <li>Demand Plan</li>
                <li>Planned Inventory</li>
                <li>On Order</li>
                <li>In Transit</li>
                <li>Sales Orders</li>
                <li>On Hand Inventory</li>
                
            </ul>
        </div>
    );
}

export default Inventory;