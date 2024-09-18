import React, { useState } from 'react';
import { cardData } from '../pages/CardData';
import { Link } from 'react-router-dom';
import { TfiLayoutGrid2Alt } from "react-icons/tfi";


const Pagination = () => {
  // Number of cards per page
  const cardsPerPage = [12, 4, 3, 1]; // Number of cards per page for pages 1, 2, 3, and 4

  const getCardsForPage = (page) => {
    const startIndex = cardsPerPage.slice(0, page - 1).reduce((acc, val) => acc + val, 0);
    return cardData.slice(startIndex, startIndex + cardsPerPage[page - 1]);
  };

  const totalPages = 4; // Total pages
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentCards = getCardsForPage(currentPage);
  const startCard = cardData.slice(0, cardsPerPage.slice(0, currentPage - 1).reduce((acc, val) => acc + val, 0)).length + 1;
  const endCard = startCard + cardsPerPage[currentPage - 1] - 1;
  const totalCards = cardData.length;

  return (
    <div>
      <div className="text-center bg-body-tertiary mb-5 mt-5" style={{paddingTop:"100px"}}>
        <h1>Product</h1>
        <nav aria-label="breadcrumb" className="d-flex justify-content-center mt-2">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" style={{ textDecoration: 'none' }}><strong>Home</strong></Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <strong>Product</strong>
            </li>
          </ol>
        </nav>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 mt-5'>
            {/* Dropdowns */}
            <div className="form-group mb-3">
              <select id="availabilitySelect" className="form-control">
                <option value="">Availability</option>
                <option value="inStock">In stock (26)</option>
                <option value="outOfStock">Out of stock (41)</option>
              </select>
            </div>
            <div className="form-group">
              <div className="input-group">
                <select id="priceRangeSelect" className="form-control">
                  <option value="">Price Range</option>
                  <option value="0-5000">From ₨0 to ₨5000</option>
                  <option value="5001-10000">From ₨5001 to ₨10000</option>
                  <option value="10001-20000">From ₨10001 to ₨20000</option>
                  <option value="20001-50000">From ₨20001 to ₨50000</option>
                  <option value="50001-100000">From ₨50001 to ₨100000</option>
                  <option value="100001-210000">From ₨100001 to ₨210000</option>
                </select>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='container-fluid mt-5'>
              <div className='row align-items-center'>
                <div className='col-12 col-md-8'>
                  <ul className='d-flex justify-content-start mb-3 mb-md-0' style={{ listStyleType: 'none', marginLeft: "-5%" }}>
                    <li><i className="fa-solid fa-list" style={{ fontSize: '2rem', cursor: "pointer" }}></i></li>
                    <li><TfiLayoutGrid2Alt className='mx-3' style={{ fontSize: '1.8rem', cursor: "pointer" }} /></li>
                  </ul>
                </div>
                <div className="col-12 col-md-4 text-center text-md-end">
                  <p className='mb-0'>Showing {startCard}-{Math.min(endCard, totalCards)} of {totalCards} results</p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                {currentCards.map((card) => (
                  <div className="col-6 col-md-4 mb-4" key={card.id}>
                    <div className="card" style={{ position: "relative", overflow: "hidden", border: "none" }}>
                      <div className="image-container">
                        <img src={card.imageUrl} alt={card.title} className="card-img-top hover-image" />
                        <div className="overlay-content">
                          <ul className="icon-list">
                            <li>
                              <Link to="#" className="icon-link">
                                <i className="fa-solid fa-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="icon-link">
                                <i className="fa-solid fa-cart-shopping"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="icon-link">
                                <i className="fa-regular fa-heart"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="icon-link">
                                <i className="fa-solid fa-circle-info"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">Rs.{card.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination-container">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <button className="page-link" onClick={handlePrevious} disabled={currentPage === 1}>
                        Prev
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                        key={index}
                      >
                        <button className="page-link" onClick={() => handleClick(index + 1)}>
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li className="page-item">
                      <button className="page-link" onClick={handleNext} disabled={currentPage === totalPages}>
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
