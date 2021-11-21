// useState i useEffect se koriste za fetchovanje i prikaz 
// Json fajlova sa API end pointa

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Dinamicko routovanje

function Item({ match }) {

    useEffect(() => {
        fetchItem();
        console.log('ovo je match', match.params.id)
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await data.json();
        setItem(item)
        console.log('ovo je ITEM', match.params.id)
    }

    return (
        <div className="Item">
            <div className="shop-list__image">
                <img src={item.image} alt={item.title} />
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p> <Link to="/components/shop">Back</Link> </p>
        </div>
    );
}

export default Item;