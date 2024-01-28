import React from 'react'
import styles from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({closeSearch}) => {
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchDiv}>
                <input type="search" className={styles.searchInput} autoComplete='off' placeholder='Search...'/>
                <button className={styles.btn}>
                    <SearchIcon  className={styles.searchIcon} />
                </button>
                <CloseIcon className={styles.icon} onClick={closeSearch}/>
            </div>

        </div>
    )
}

export default SearchBar