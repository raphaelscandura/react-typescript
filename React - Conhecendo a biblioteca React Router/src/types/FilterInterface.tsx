import React from "react";

export default interface FilterInterface{
    filter:number|null,
    setFilter: React.Dispatch<React.SetStateAction<number|null>>
}