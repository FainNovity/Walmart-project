import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsList(){
    const [products, setProducts] = useState([])

    function getProducts() {
        fetch("https://66eadaac55ad32cda47ab515.mockapi.io/products/1/products")
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw new Error()
        })
        .then(data => {
            setProducts(data)
        })
        .catch(error => {
            alert("unable to get data")
        })
    }

useEffect(getProducts, [])

    return(
       <div className="container my-4">
            <h2 className="text-center mb-4"> Products</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Create Product</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getProducts}>Refersh</button>
                </div>

                <div className="col">

                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       products.map((products, index) => {
                        return(
                            <tr key={index}>
                                <td>{products.id}</td>
                                <td>{products.name}</td>
                                <td>{products.Brand}</td>
                                <td>{products.category}</td>
                                <td>{products.price}</td>
                                <td><img src={products.avatar} width="100" /></td>
                                
                                <td style={{width: "10px", whiteSpace: "nowrap"}}>
                                    <Link className="btn btn-primary btn-sm me-1" to={"/admin/products/edit/" + products.id}>Edit</Link>
                                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        )
                       }) 
                    }
                </tbody>
            </table>
       </div> 
    )
}