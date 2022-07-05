import filters from './filters.json';
import styles from './filter.module.scss';

type OptionInterface = typeof filters[0];

export default function Filters(){
    function selectFilter(option:OptionInterface){

    }

    return (
        <div className={styles.filters}>
            {
                filters.map((option) => (
                    <button 
                        key={option.id}
                        onClick={() => selectFilter(option)}
                        className={styles.filters_filter}
                    >
                        {option.label}
                    </button>  
                ))
            }
        </div>
    )
}