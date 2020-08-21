import React, {useState, useEffect} from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category);

    return ( 
        <>
        <h3>{category}</h3>
        { loading && <p>Loading</p>}
        { /* loading ? <p>Loading</p> : null */}
        <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            { ...img }
                        />  
                    ))    
                }
        </div>
        </>
        
     );
}
 
export default GifGrid;