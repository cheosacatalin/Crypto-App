import React from 'react';
import './card.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

class Card extends React.Component{
	render(){
		return(
		  <div className="card">

			<div className="symbol gold">{this.props.symbol}</div>

			<div className="info">
			  <div className="name">{this.props.name}</div>
			  <div className="supply">Supply: {this.props.supply}</div>
			  <div className="price"><FontAwesomeIcon icon={faDollarSign} color="rgb(18, 122, 35)"/>{this.props.price}</div>
			</div>

			<div className="button" onClick={this.props.event}>Details</div>


		  </div>
		)
	}
}

export default Card;