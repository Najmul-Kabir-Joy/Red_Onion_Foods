import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMenu from '../../Hooks/useMenu';
import Items from '../Items/Items';
import './Menu.css';

const Menu = () => {
    const { items, setSearchProducts, searchProducts } = useMenu();
    const handleSearch = event => {
        const searchInput = event.target.value;
        const matchProducts = items.filter(item => item.food.toLowerCase().includes(searchInput.toLowerCase()))
        setSearchProducts(matchProducts);
    }
    return (
        <div>
            <div className='menu-input mb-5'>
                <h1>Best foods waiting for your belly</h1>
                <div>
                    <input onChange={handleSearch} type="text" placeholder="search food items" />
                    <button className='btn btn-danger'>Search</button>
                </div>
            </div>
            <Container className='mt-1'>
                <Row xs={1} md={3} className="g-5 mb-5">
                    {
                        searchProducts.map(item => <Items key={item.id} item={item}></Items>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Menu;