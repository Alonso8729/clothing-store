import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const SearchBar = ({ closeSearch }) => {
    const [searchField, setSearchField] = useState('')

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchDiv}>
                <input type="search" className={styles.searchInput} value={searchField} onChange={(e) => handleChange(e)} autoComplete='off' placeholder='Search...' />
                <button className={styles.btn}>
                    <Link to={`products/${searchField}`} className='link'>
                        <SearchIcon className={styles.searchIcon} />
                    </Link>
                </button>
                <CloseIcon className={styles.icon} onClick={closeSearch} />
            </div>

        </div>
    )
}

export default SearchBar