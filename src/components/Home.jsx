import React from "react"
import Card from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
return(
    <div>
    
    <nav className="ml-10 navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img width="119" height="30" src="https://demo-51.woovinapro.com/wp-content/uploads/2020/10/logo.png" alt="Demo 51 – WooVina Pro"></img>
</a>
<button className="navbar-toggler mr-10" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

<ul>

<li>
    <label>
  <span>
<input
      type="text"
      className="px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0 w-60 ml-20"
    
      placeholder="Search Products. . ."
    />
  </span>
<span><button type="button" className="ml-5 bg-red-500 rounded-md text-white px-8 py-1.5">SEARCH</button>
</span>
  </label>
  </li>
</ul>    
<button className="ml-20 border border-2 p-3 mr-10 rounded-full border-gray-200">
      <span className="border border-1 rounded-full bg-red-300 p-2">0</span> <FontAwesomeIcon icon={faShoppingBag} /></button>

</nav>    
<div className="bg-gray-500 p-7 text-white text-2xl text-center">Shop Products</div>
        <Card />
    </>
     )
}
export default Home;
