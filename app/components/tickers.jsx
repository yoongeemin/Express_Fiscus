import React from "react";
import ReactDOM from "react-dom";

export default class Ticker extends React.Component {
	static propTypes = {
		quotes: React.PropTypes.object.isRequired
	};

	componentDidMount() {
		const options = {
			height: 32,
			padding: 6
		};
		//$(ReactDOM.findDOMNode(this)).vTicker(options);
	}

	render() {
		var quoteList = this.props.quotes.map(function(quote, index) {
			var glyphicon = classnames("glyphicon", {"glyphicon-triangle-bottom": quote.dropped&&quote.change!=0.0}, {"glyphicon-triangle-top": !quote.dropped&&quote.change!=0.0 });
			return (
				<div key={index} className="display-table-cell">
					{quote.name} <span className="ticker-price">{quote.price}</span> <span className={glyphicon}></span>{quote.change}%
				</div>
			);
		});

		var indiceList 	 = quoteList.slice(0, 6);
		var currencyList = quoteList.slice(6, 14);
		var rateList 	 = quoteList.slice(14, 21);

		return (
			<div id="tickers" className="bg-color-black fill-width">
				<ul className="fill-width">
					<li className="display-table fill-width text-align-center">{indiceList}</li>
					<li className="display-table fill-width text-align-center">{currencyList}</li>
					<li className="display-table fill-width text-align-center">{rateList}</li>
				</ul>
			</div>
		);
	}
};
