import React from "react";
import { ReactComponent as SearchIcon } from '../../images/Search icon.svg'
import './Searchinput.scss'

const SearchInput = (props) => {
    return (
        <div className="searchinput">
            <input {...props} type="text" placeholder="Search in table..." />
           <SearchIcon  className='searchinput__icon'/>
        </div>
    )
}

export default SearchInput