import React, {useState} from 'react'
import "./Card.css"



export const Card = () => {
    const [cat, setCat] = useState(() =>{

        
            fetch("https://catfact.ninja/fact").then(res => res.json()).then(res => setCat(res.fact))
        

    })
    
    let handleCat = () =>{
        fetch("https://catfact.ninja/fact").then(res => res.json()).then(res =>{ 
        console.log(res);
        setCat(res.fact)})
    }


  return (
    <div className="container">
    <h1 className="title">Advice #</h1>
    <p className="text"></p>

    <picture>
      <source
        media="(min-width: 768px)"
        srcSet="./images/pattern-divider-desktop.svg"
      />
      <p className="info-cat">"{cat}"</p>
      <img src="./images/pattern-divider-mobile.svg" alt="divider" />
    </picture>
        
    <div>
      <button onClick={handleCat}>
        <img src="./images/icon-dice.svg" alt="" />
      </button>
    </div>
  </div>
  )
}
