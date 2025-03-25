'use client';
import { useEffect, useState } from "react";

const consultar = () => {
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const ambiente = process.env.NEXT_PUBLIC_AMBIENTE;
    const [primerRenderizacion, setPrimerRenderizacion] = useState(true);
    const [token, setToken] = useState(null);

    const [quejas, setQuejas] = useState([]);

    useEffect(() => {
        async function fetchToken() {
            const res = await fetch("/api/token");
            const data = await res.json();
            setToken(data.token || null);
        }
        fetchToken();
    }, []);

    useEffect(() => {
        const consultaQuejas = async () => {
            const res = await fetch(`${API_URL}/VerQuejas?ambiente=${ambiente}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
            const data = await res.json();
            setQuejas(data);
        };
        if (!primerRenderizacion) {
            consultaQuejas();
        } else {
            setPrimerRenderizacion(false);
        }
        // consultaQuejas();

    }, [token]);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Periodo</th>
                        <th scope="col">Folio</th>
                        <th scope="col">Fecha Subida</th>
                        {/* <th scope="col">Eliminar</th> */}
                    </tr>
                </thead>
                <tbody>
                    {quejas.map((queja) => (
                        <tr key={queja.id}>
                            <th scope="row">{queja.periodoMes},{queja.periodoAnio}</th>
                            <td>{queja.quejasFolio}</td>
                            <td>{queja.fechaSubida}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default consultar;