import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
    const { menuId } = useParams();
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setDisplay(data))
    }, [])
    const match = display.find(d => d.id == menuId);
    let [count, setCount] = useState(1);
    const handlePlus = () => {
        if (count >= 10) {
            document.getElementById('plusBtn').setAttribute('disable', true);
        } else {
            setCount(count += 1);
        }
    };
    const handleMinus = () => {
        if (count <= 1) {
            document.getElementById('minusBtn').setAttribute('disable', true);
        } else {
            setCount(count -= 1);
        }
    }


    return (
        <div>
            <Container>
                <div className='text-start mt-5  cursor-pointer'>
                    <Link to='/menu' style={{ textDecoration: 'none' }}><h6 className='text-danger'><i class="fas fa-chevron-left"></i> back</h6></Link>
                </div>
                <div className='p-5' style={{ display: 'flex', justifyContent: "space-between" }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>{match?.food}</h1>
                        <p>{match?.description}</p>
                        <div style={{ display: 'flex' }}>
                            <h3>{match?.price * count}</h3>
                            <div className='ms-3 mb-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button onClick={handleMinus} className='minus-button bg-light p-1' id='minusBtn'><i className="fas fa-minus p-1 text-dark"></i></button>
                                <h3 className='ms-2 me-2' >{count}</h3>
                                <button onClick={handlePlus} className='plus-button bg-light p-1' id='plusBtn'><i className="fas fa-plus p-1 text-danger" ></i></button>
                            </div>
                        </div>
                        <button className='btn btn-danger rounded-pill px-5 py-2'><i className="fas fa-shopping-bag me-2"></i>Add To Bag</button>
                    </div>
                    <div>
                        <img src={match?.img} alt="" height='750' />
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default ItemDetails;