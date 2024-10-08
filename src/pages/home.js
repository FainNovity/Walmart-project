import { Products } from "./homecontent";
import { ProductLink } from "./homecontent";

export default function Home(props){
    const {search} = props;
    return(
       <>
       <div id="carouselExample" style={{background: 'linear-gradient(0deg,transparent -10%, rgb(138,147,129))'}} className="carousel slide">
       <div className="carousel-inner">
         <div className="carousel-item active">
           <img style={{objectFit:'contain'}} src={"https://corporate.walmart.com/content/corporate/en_us/news/2024/01/09/walmart-offers-a-glimpse-into-the-future-of-retail-at-consumer-electronics-show/jcr:content/newsimage.img.jpg/1705937879889.jpg"} height="500" className="d-block w-100" alt="..." />
         </div>
         <div className="carousel-item">
           <img style={{objectFit:'contain'}} src={"https://gritdaily.com/wp-content/uploads/2020/01/walmart-store-grit-daily-1280x768.jpg"} height="500" className="d-block w-100" alt="..." />
         </div>
         <div className="carousel-item">
           <img style={{objectFit:'contain'}} src={"https://th.bing.com/th/id/OIP.fzXK7GSbvKM13WLo_xHQgwHaD4?w=1200&h=630&rs=1&pid=ImgDetMain"} height="500" className="d-block w-100" alt="..." />
         </div>
       </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
       </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
     </div> 

     <ProductLink search={search} />
     <Products />
     </>
    )
}

