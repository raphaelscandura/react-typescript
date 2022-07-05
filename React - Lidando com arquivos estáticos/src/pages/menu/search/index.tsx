import SearchInterface from "types/SearchInterface";
import styles from './search.module.scss';
import {CgSearch} from 'react-icons/cg';

export default function Search({search,setSearch}:SearchInterface){
    return (
        <div className={styles.search}>
            <input 
                value={search} 
                onChange={(event) => setSearch(event.target.value)}
            />
            <CgSearch
                size={20}
                color={'#4c4d5e'}
            />
        </div>
    )
}