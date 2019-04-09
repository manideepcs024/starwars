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
				

					<img className="loaderImage" src="https://media1.tenor.com/images/a6a6686cbddb3e99a5f0b60a829effb3/tenor.gif" />
				</div>
			</div>
		);
	}


}
export default LoaderComponent;