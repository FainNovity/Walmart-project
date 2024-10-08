import { Link } from "react-router-dom"

export function Navbar(props){
    let {setSearch} = props;
    return(
        <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/234/original/walmart-transparent-logo-free-png.png" width="50" className="me-2" /> Walmart
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" onChange={ (e)=>{
                let searchData = e.target.value;
                setSearch(searchData);
              }} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark mx-3 " to="/home/cart"><i class="fa-solid fa-cart-shopping" style={{fontSize: "20px"}}></i>Cart</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admin/products">Products</Link></li>
                  <li><Link className="dropdown-item" to="/home/profile">Profile</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/logout">Log Out</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    )
}


export function Footer(){
    return(
        <div className="text-center p-4 border-top">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/234/original/walmart-transparent-logo-free-png.png" width="75" className="me-2" />
            Walmart
        </div>
    )
}
