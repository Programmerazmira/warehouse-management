import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from './Card/Card';
import './Home.css';



const Home = () => {
    const[card,setCard]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=>setCard(data));
    },[])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://demo.proteusthemes.com/cargopress/wp-content/uploads/sites/24/2015/04/slider_1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>UNBEATABLE TRUCKING AND TRANSPORT SERVICES
                        </h1>
                        <p>Starting from loading to unloading and maintaining the highest standards in terms of safety while in transit, we take nothing to chance.
                        </p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://us.aminasound.com/wp-content/uploads/sites/59/2017/02/Sales-Banner.jpg"
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.pernow.com/srv/dr/g/_ts_1532357867681_dd424ca/rn_551/args.pic_max/_/_Pernow_002H1650px_1920y600_f.jpg"
                        alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>


            <h3 className='mt-5 pt-5 pb-3 text-center'>OUR SERVICES</h3>


            <div className='card-group container w-75 gap-4'>
           
           
                {
                    card.map(cards => <Card
                    key={cards.id}
                    cards = {cards}
                    ></Card>)
                }
            </div>
            <h3 className='mt-5 pt-5 pb-4 text-center'>HELLO THERE AND WELCOME</h3>
            <div className='container'>
                <div><img className='top-photo' src="https://previews.123rf.com/images/kadmy/kadmy1510/kadmy151000254/46807552-.jpg" alt="" /></div>
                <div>
                    <h5 className='mt-4'>Our warehousing and distribution services quality</h5>
                    <p>Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic requirements efficiently. Our logistics team have years of experience in this business and can handle long term and large scale assignments with utter professionalism, and our customer service helps the clients to stay in the loop throughout the process, whenever they require any assistance. Consult with our experts today for your logistics, warehousing and distribution services requirements, and allow us to make a positive difference in your business.</p>
                </div>
            </div>
            <footer className='footer mt-5 p-5 text-center'>
                <h5>Studio 1610 Wyoming Avenue, Scranton, PA, 18509, USA 570.498.3686 inquiry@lettieriphoto.com</h5>
                <p>Copyright 2022 AzmiraPhotography</p>
            </footer>
        </div>
    );
};

export default Home;