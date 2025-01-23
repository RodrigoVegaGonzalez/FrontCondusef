'use client';
import Link from 'next/link'
const nav = () => {
    const cerrar_sesion = () => {
        localStorage.removeItem('token');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Info 100</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="redeco">Redeco</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Reune
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/reune">Reune</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/reclamaciones">Reclamaciones</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={cerrar_sesion}>cerrar_sesion</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default nav;