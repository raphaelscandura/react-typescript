import filters from './filters.json';
import styles from './filter.module.scss';
import FilterInterface from 'types/FilterInterface';
import classNames from 'classnames';

type OptionInterface = typeof filters[0];

export default function Filters({filter,setFilter}:FilterInterface){
    function selectFilter(option:OptionInterface){
        return (filter===option.id?setFilter(null):setFilter(option.id));
    }

    return (
        <div className={styles.filters}>
            {
                filters.map((option) => (
                    <button 
                        key={option.id}
                        onClick={() => selectFilter(option)}
                        className={classNames({
                            [styles.filters_filter]:true,
                            [styles['filters_filter--active']]:filter===option.id
                        })} 
                    >
                        {option.label}
                    </button>  
                ))
            }
        </div>
    )
}