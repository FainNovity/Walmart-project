import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ProductLink(){

  return(
    <ul className="nav">
  <li className="nav-item m-3 mx-auto">
    <Link className="nav-link active fs-5" aria-current="page" to="#"><i className="fa-solid fa-shirt"></i>Fashion</Link>
  </li>
  <li className="nav-item m-3 mx-auto" >
    <Link className="nav-link fs-5" to="#"><i class="fa-solid fa-bolt"></i> Electronic</Link>
  </li>
  <li className="nav-item m-3 mx-auto">
    <Link className="nav-link fs-5" to="#"><i className="fa-solid fa-blender-phone"></i>Home Appliances</Link>
  </li>
  <li className="nav-item m-3 mx-auto">
    <Link className="nav-link fs-5" to="#"><i className="fa-solid fa-basket-shopping"></i>Grocery</Link>
  </li>
</ul>
    )
}

export function Products(){
  let [data,setData] = useState([{
    name:"name",
    brand:"Brand",
    tags:"Category",
    img: "",
    price:""
  }]);
  useEffect(()=>{
      fetch("http://localhost:9999/product")
      .then(res => res.json())
      .then(res => setData(res)).catch(err=>console.log(err))
  },[]);
    let formattedData = data.map(prod=>
      <div className="card col-3 m-3" style={{width: "18rem",height: '60vh'}}>
        <img src={prod.img} style={{height:'50%', objectFit:'contain', background:'rgb(0,0,0)'}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{prod.name}</h4>
                <h5 className="card-title">$ {prod.price}</h5>
                <div class='d-flex justify-content-evenly'>
                <p className="card-text">{prod.brand}<hr /></p>
                <p className="card-text">{prod.tags} <hr /></p>
                </div>
                <Link to="#" className="btn btn-outline-primary" onClick={()=>{
                    let user = window.localStorage.getItem('user');
                    window.localStorage.getItem(user);
                    console.log(user);
                }} >Add to Cart</Link>

            </div>
      </div>);
    return(
        <div className="container">
        <div className="row">
          {formattedData}
        </div>
        </div>
    )
}