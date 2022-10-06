import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ cards }) => {
    const { picture, title, text, ratings,supplier,quantity } = cards;
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path  = `/Inventory`; 
      navigate(path);
    }
    return (
        <div>
            <div className=''>
                <div className="card h-100 product ">
                    <img src={picture} className="card-img-top photo" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-text">Supplier name: {supplier}</h6>
                        <p className="card-text">Details: {text}</p>
                        <p className="card-text">Quantity:{quantity}</p>
                        <p className=''>Price:{ratings}</p>
                        <button onClick={routeChange} className='btn btn-primary'>update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;