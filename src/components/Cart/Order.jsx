import React from 'react'
import book from "../../assets/icons/Group 5.svg";

export default function Order() {
  return (
    <div>
           <header className="header-content header">
          <div className="logo-content">
            <img
              src={book}
              alt="logo-content"
              className="logo-content-img"
              width=""
            />
          </div>
        </header>
        <div>
        <img src="https://www.zipeit.com/images/place-circle.png" alt="" className='Orderimg' srcset="" />
        </div>
    </div>
  )
}
