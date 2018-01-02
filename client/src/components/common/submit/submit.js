import React from 'react';
import "./submit.css";

const Submit = function(props) {
	return (
		<div className="row">
			<div className="col s12">
				<button
					action="submit"
					className="btn-block waves-effect waves-brown btn ruby"
				>
					{ props.btnText }
				</button>
			</div>
		</div>
	);
}

export default Submit;