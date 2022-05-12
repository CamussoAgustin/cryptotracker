import React from 'react'
import numeral from 'numeral'
import './Coin.css' 

const prettyPrintStat = (stat) =>
  stat ? `${numeral(stat).format("0.0a")}` : "+0";

const Coin = ({name, image, symbol, volume, price, priceChange, marketcap}) => {
 

 return (
  <div className="coin-container">
   <div className="coin-row">
    <div className="coin">
     <img src={image} alt="crypto"/>
     <h1>{name}</h1>
     <p className="coin-symbol">{symbol} </p>
    </div>
    <div className="coin-data">
     <p className="coin-price">${price}</p>
     <p className="coin-volume">Vol. ${prettyPrintStat(volume)}</p>
     {priceChange < 0 ? (
      <p className="coin-percent red">{parseFloat(priceChange).toFixed(2)}%</p>
     ) : (
      <p className="coin-percent green">{parseFloat(priceChange).toFixed(2)}%</p>

     )}
     <p className="coin-marketcap">
      Mkt Cap: ${prettyPrintStat(marketcap)}
     </p>
    </div>
   </div>

  </div>
 )
}

export default Coin
