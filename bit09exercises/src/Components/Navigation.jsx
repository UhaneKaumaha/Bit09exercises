import React from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home} from './Home';
import { ExercisesPage } from './ExercisesPage';
export const Navigation = () => {
    return(
        <BrowserRouter>
        <div style={{backgroundColor:"black", fontSize:"3rem", paddingTop:"140px", border:"5px solid Aqua"}}>
        <nav className="py-4 text-center">
            <Link className="mx-3 text-light h3 text-decoration-none" to='/'>Inicio</Link>
            <Link className="mx-3 text-light h3 text-decoration-none" to='/ejercicios'>Ejercicios</Link>
        </nav>
        </div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ejercicios' element={<ExercisesPage />} />
        </Routes>
        </BrowserRouter>
    );
}