import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const navigate = useNavigate();
    function handleSubmt(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`order/${query}`)
    }
    const [query, setQuery] = useState("");
    return (
        <form onSubmit={handleSubmt}>
            <input placeholder="Search Order #" value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchOrder
