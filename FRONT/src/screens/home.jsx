import React from 'react'; // Asegúrate de que esta línea esté presente
import './home.css'

function Home() {
    return (
        <>
        <div className='title'>
            <div>
                Lector de archivos
            </div>
        </div>

        <div className='submitButton'>
            <button type="submit">Submit</button>
        </div>
        </>
    );
}

export default Home;