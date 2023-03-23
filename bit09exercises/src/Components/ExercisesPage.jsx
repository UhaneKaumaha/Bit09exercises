import React, { useState } from "react";
import { Exercise1 } from "./Exercise1";
import { Exercise2 } from "./Exercise2";
import { Exercise3 } from "./Exercise3";

export const ExercisesPage = () => {
    const [exercise, setExercise] = useState (null);
  return (
    <div style={{backgroundColor:"black", fontSize:"1rem", paddingTop:"220px",paddingBottom:"220px", border:"5px solid Aqua"}}>
       <section>
      <h1 className="text-center p-5 text-light">Ejercicios</h1>
      <ul>
        <li className="border border-light p-3 rounded text-light" onClick={() => setExercise (<Exercise1/>)}>
            Contador </li>
        
        <li className="border border-light p-3 rounded text-light" onClick={() => setExercise (<Exercise2/>)} >
            Patos </li>

        <li className='border border-light p-3 rounded text-light' onClick={() => setExercise (<Exercise3/>)} >
            Directorio </li>
      </ul>
      <div className="text-center border border-light p-3 rounded" >{exercise}</div>
    </section>
    </div>
   
  );
};