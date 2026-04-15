import React, {useEffect, useState} from 'react'

const useProductList = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        setProducts(json);
    }
    return products;
}

export default useProductList;