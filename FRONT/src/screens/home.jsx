import React, { useState } from "react";
import Papa from "papaparse";
import './home.css'

function Home() {
    const [data, setData] = useState([]);
        const [error, setError] = useState("");
    
        const handleFileChange = (e) => {
            setError("");
        const file = e.target.files[0];

        if (file && file.type === "text/csv") {
            const reader = new FileReader();
            reader.onload = (event) => {
                const csvData = Papa.parse(event.target.result, { header: true });
                
                // Verifica si hay más de 30 elementos
                if (csvData.data.length > 30) {
                    
                    setData(csvData.data.slice(0, 10));
                    return setError("El elemento excede el maximo de 30 elementos");
                    } else {
                        // Si hay 30 o menos, guarda todos los datos
                        setData(csvData.data);
                    }
                };
                reader.readAsText(file);
            } else {
                setError("Por favor, sube un archivo CSV válido.");
            }
        }
    
        return (
            <div>

                <div className="title">
                    <p>Lector de archivos</p>	
                </div>

                <div className="fileUpload">
                    <label className="custom-file-upload">
                        Seleccionar archivo CSV
                        <input type="file" accept=".csv" className="chooseFileButton" onChange={handleFileChange} />
                    </label>
                </div>

                {error && <p>{error}</p>}
                <div className="table">
                    {data.length > 0 && (
                        <table>
                            <thead>
                                <tr>
                                    {Object.keys(data[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        {Object.values(row).map((value, i) => (
                                            <td key={i}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
}

export default Home;