import React from "react";
import '../styles.css';
import dog from '../assets/images/dog.jpg';
import StarSvg from '../assets/images/bookmark-favorite-rating-star-svgrepo-com.svg';

import feedbackimg from '../assets/images/6a2ef29cd5d90d1bfbbd1501ba51995d-209.jpg';

const CRS = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ position: 'relative', display: 'inline-block', width: '100%', marginTop: '30px' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="image-overlay"></div>
                        <img src={dog} className="d-block w-100" alt="..." style={{ height: '650px' }} />
                        <div className="crs-left">
                            <p>
                                Wide range of domestic helpers
                            </p>
                            <h5 style={{ fontSize: '50px' }}>
                                Find your domestic help quickly
                            </h5>
                            <p style={{ marginTop: '50px', fontSize: '18px', lineHeight: '28px', fontWeight: '400' }}>View free profiles of domestic helpers, read reviews, stay informed and make your own call. You pay €10 once to chat with all the helpers.</p>
                            <div className="crs-button-and-link-container">
                                <button className="crs-button">Find domestic help</button>
                                <a href="/" className="crs-link">Get your customers (free)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div style={{ marginTop: '30px' }}>
                    <img src={feedbackimg} className="feedback-img" alt="feedbackimg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={StarSvg} style={{ width: '40px' }} alt="star" />
                    <img src={StarSvg} style={{ width: '40px' }} alt="star" />
                    <img src={StarSvg} style={{ width: '40px' }} alt="star" />
                    <img src={StarSvg} style={{ width: '40px' }} alt="star" />
                    <img src={StarSvg} style={{ width: '40px' }} alt="star" />
                </div>
                <div className="crs-cards">
                    <div className="card crs-card" style={{ marginLeft: '100px' }}>
                        <div className="card-body crs-card-body" style={{ padding: '40px' }}>
                            <h5 className="card-title">Maureen</h5>
                            <p className="card-subtitle mb-2 text-body-secondary" style={{ fontSize: '16px', marginTop: '15px' }}>08-12-2008</p>
                            <div style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card crs-card">
                        <div className="card-body crs-card-body" style={{ padding: '40px' }}>
                            <h5 className="card-title">Erve Veldink</h5>
                            <p className="card-subtitle mb-2 text-body-secondary" style={{ fontSize: '16px', marginTop: '15px' }}>08-12-2008</p>
                            <div style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card crs-card">
                        <div className="card-body crs-card-body" style={{ padding: '40px' }}>
                            <h5 className="card-title">Kevin</h5>
                            <p className="card-subtitle mb-2 text-body-secondary" style={{ fontSize: '16px', marginTop: '15px' }}>08-12-2008</p>
                            <div style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                                <img src={StarSvg} style={{ width: '20px' }} alt="card-star" />
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                {/* <FeedbackSvg /> */}
            </div>
        </div>



    )
}


export default CRS;