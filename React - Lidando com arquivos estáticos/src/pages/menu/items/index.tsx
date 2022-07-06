import items from './items.json';
import Item from './item/index'
import styles from './items.module.scss'
import ItemInterface from 'types/ItemInterface';
import { useEffect, useState } from 'react';


export default function Items(props:ItemInterface){
    const [list,setList] = useState(items);
    const {search,filter,ordering} = props;

    function findSearch(title:string){
        const regex=new RegExp(search,'i');
        return regex.test(title);
    }

    function findFilter(id:number){
        if(filter !== null) return filter === id;
        return true;
    }

    function orderingList(newList: typeof items){
        switch(ordering){
            case 'portion':
                return newList.sort((a,b)=>a.size>b.size?1:-1)
            case 'ppl_amount':
                return newList.sort((a,b)=>a.serving>b.serving?1:-1)
            case 'price':
                return newList.sort((a,b)=>a.price>b.price?1:-1)
            default:
                return newList;
        }
    }

    useEffect(()=>{
        const newList = items.filter(item => findSearch(item.title) && findFilter(item.category.id))
        setList(orderingList(newList));
    },[search,filter,ordering])
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