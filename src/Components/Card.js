import React from 'react'
import './card.style.css'
export default function Card({ id, image, name, style1, ibu, abv, ounces }) {
    return (
        <div>
            <div key={id} className="card" style={{ width: '14rem', marginBottom: '20px' }} >
                <img className="card-img-top" src={image} alt="brand" />
                <div className="card-body" style={{ height: '14rem' }}>
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">style : {style1} </p>
                    {ibu === "" ? null : <p className="card-text">ibu : {ibu} </p>}
                    <p className="card-text">abv : {abv} </p>
                    <p className="card-text">ounces : {ounces} </p>
                </div>
            </div>
        </div>
    )
}
