import { useEffect, useState } from "react";

const useMenu = () => {
    const [items, setItems] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setSearchProducts(data)
            })
    }, [])
    let breakfast = items.filter(item => item.category === 'breakfast')
    let lunch = items.filter(item => item.category === 'lunch')
    let dinner = items.filter(item => item.category === 'dinner')

    return {
        items, breakfast, lunch, dinner, searchProducts, setSearchProducts
    };
}

export default useMenu;