import React, {PropTypes } from 'react';

class LoaderComponent extends React.Component {
	
	constructor(props, context){
		super(props, context);
		this.state = {
			loading: true,
			text: 'loading'
		}
	}
	render(){
		return(
			<div>
				<div className="loader">
					<p className="loadingText">{this.state.text}</p>
				</div>
			</div>
		);
	}


}
export default LoaderComponent;