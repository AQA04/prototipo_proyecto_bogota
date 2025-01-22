import React, { useState } from "react";
import Papa from "papaparse";

const fileReader = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        setError("");
        const file = e.target.files[0];

        if (file && file.type === "text/csv") {
            const reader = new FileReader();
            reader.onload = (event) => {
                const csvData = Papa.parse(event.target.result, { header: true });
                setData(csvData.data);
            };
            reader.readAsText(file);
        } else {
            setError("Por favor, sube un archivo CSV válido.");
        }
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            {error && <p>{error}</p>}
            <div>
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
};

export default fileReader;