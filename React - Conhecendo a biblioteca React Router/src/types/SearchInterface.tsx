import React from 'react';

export default interface SearchInterface{
    search:string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}