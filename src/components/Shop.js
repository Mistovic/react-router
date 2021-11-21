// useState i useEffect se koriste za fetchovanje i prikaz 
// Json fajlova sa API end pointa
import React, { useState, useEffect } from 'react';

// Dinamicko routovanje
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=20');
        const items = await data.json();

        // Setujemo iteme iz data koji su prethodno 
        // prtvoreni u JSON
        setItems(items);// Objasni
        console.log(items);
    }

    return (
        <div className="Shop">
            <h1>Shop</h1>
            {items.map(item => (
                <Link key={item.id} to={`/components/shop/${item.id}`}>
                    <div className="shop-list">
                        <div className="shop-list_item">

                            <div className="shop-list__image">
                                <img src={item.image} alt={item.title}></img>
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Product price: {item.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Shop;