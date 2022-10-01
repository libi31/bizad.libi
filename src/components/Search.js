 import { useState } from "react";

function Search(props) {

    const [search, setSearch] = useState('');

    function handleInputChange(e) {
        const value = e.target.value;
        setSearch(value);
        props.search(value);
    }


    return (
        <div className="d-flex mx-3 px-4 w-50 my-5 bg-light form-control col-4">
            <i className="bi bi-search pe-2 mt-2"></i>
            <input value={search}
                onChange={handleInputChange}
                type="text"
                placeholder="Search by business name" className="form-control border-1 me-4" />
        </div>
    );
}

export default Search;