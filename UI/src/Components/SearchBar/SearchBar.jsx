import './SearchBar.scss'
import {useState} from "react"

const SearchBar = () => {
    const types = ["buy","rent"]
    const [query,setQuery]= useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })

    const switchType = (val)=>{
        setQuery((prev)=>({...prev,type: val}))
    }

  return (
    <div className="searchBar">
        <div className="type">
            {types.map((type)=>(
                <button key={type} onClick={()=> switchType(type)} className={query.type === type ? "active" :""}>{type}</button>
            ))}
        </div>
        <form>
            <input type="text" name="location" placeholder="City Location" />
            <input type="number" name="minPrice" 
            min={0}
            max={100000000}
            placeholder="MinPrice" />
            <input type="number"
            min={0}
            max={100000000}
            name="maxPrice" placeholder="Max Price" />
            <button>
                <img src="/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar