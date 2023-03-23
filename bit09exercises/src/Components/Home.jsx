import React from 'react'
import Figure from 'react-bootstrap/Figure';
import '../App.css';

export const Home = () => {
  return (
    <div style={{backgroundColor:"black", fontSize:"3rem", paddingTop:"220px", border:"5px solid Aqua"}}>
     
     <h1 className="text-center text-light">En esta página encontrarás ejercicios con ReactJS</h1>
        <Figure className="text-center text-light" style={{paddingLeft:"600px"}}>
          <Figure.Image
            roundedCircle
            width={171}
            height={180} 
            alt="171x180"
            src="https://uhanekaumaha.github.io/Bit07me/docs/img/me.jpeg" 
          />
         <Figure.Caption>Melany Alvarez</Figure.Caption>
        </Figure>
    
    </div>
    
  );
}