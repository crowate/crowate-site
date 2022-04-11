import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './searchbar.css'
const Searchbar = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.author.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]); //erases the results if input left empty
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return (
        <div className='search'>
            <div className='searchInputs'>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className='searchIcon'>
                    {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput} />}
                </div>
            </div>

            {filteredData.length !== 0 && (
                <div className='dataResult'>
                    {filteredData.slice(0, 5).map((value, key) => {
                        return (
                            <a className='dataItem' href={value.link}>
                                {value.author}
                            </a>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default Searchbar