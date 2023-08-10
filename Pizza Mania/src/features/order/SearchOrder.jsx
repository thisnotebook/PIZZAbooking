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
                className="rounded-full px-4 py-3 text-sm placeholder:text-stone-400 w-28 sm:focus:w-72
                sm:w-64 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300"
            />
        </form>
    )
}

export default SearchOrder
