import React, { Component } from 'react';
import './panel.css';
import coffeeCup from './images/coffee-cup.svg';

class Panel extends Component {
	render() {
		return (
			<div className="panel-wrap">
				<div className="row container">
					<div className="col s6 offset-s3">
						<div className="signin-panel">
							<div className="row panel-header">
								<img src={coffeeCup} className="center-align" alt="Coffee cup" />
							</div>
							<div className="row">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Panel;