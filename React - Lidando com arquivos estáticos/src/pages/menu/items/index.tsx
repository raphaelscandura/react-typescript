import items from './items.json';
import Item from './item/index'
import styles from './items.module.scss'
import ItemInterface from 'types/ItemInterface';
import { useEffect, useState } from 'react';


export default function Items(props:ItemInterface){
    const [list,setList] = useState(items);
    const {search,filter} = props;

    function findSearch(title:string){
        const regex=new RegExp(search,'i');
        return regex.test(title);
    }

    function findFilter(id:number){
        if(filter !== null) return filter === id;
        return true;
    }

    useEffect(()=>{
        const newList = items.filter(item => findSearch(item.title) && findFilter(item.category.id))
        setList(newList);
    },[search,filter])
    return (
        <div className={styles.items}>
            {list.map(item => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}