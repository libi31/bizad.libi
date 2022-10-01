import { useState } from "react";

function ServiceNavBar(props) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    function handleBtnClick(e) {
        
        e.preventDefault();

        props.addUser({
            name: name,
            status: status
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex">
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                        <p className="navbar-brand">Service Name:</p>   
                        <select value={name} onChange={(e) => setName(e.target.value)} className="form-select me-2">
                                <option>Playground</option>
                                <option>Pet Store</option>
                                <option>Sport Land</option>
                            </select>
                            
                            <p className="navbar-brand">Status:</p>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select me-2">
                                <option>available</option>
                                <option>unavailable</option>
                            </select>

                            <button onClick={(e) => handleBtnClick(e)} className="btn btn-outline-success" type="submit">AddService</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default ServiceNavBar;