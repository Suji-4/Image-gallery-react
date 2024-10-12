import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import one from "./assets/images/c.jpg"
import two from "./assets/images/j.jpg"
import three from "./assets/images/a.jpg"
import four from "./assets/images/m.jpg"
import five from "./assets/images/p.jpg"
import six from "./assets/images/y.jpg"
import seven from "./assets/images/yedam.jpg"
import eight from "./assets/images/yoon.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div>
    <h1 >TRUZ Gallery</h1> 
<div className="container">
  <div>
   <img src={one} alt="one"></img>
</div>
<div>
   <img src={two} alt="two"></img>
</div>
<div>
   <img src={three} alt="three"></img>
</div>
<div>
   <img src={four} alt="four"></img>
</div>
<div>
   <img src={five} alt="five"></img>
</div>
<div>
   <img src={six} alt="six"></img>
</div>
<div>
   <img src={seven} alt="seven"></img>
</div>
<div>
   <img src={eight} alt="eight"></img>
</div>
</div>

</div>
)