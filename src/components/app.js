import { h, Component } from 'preact';
// import { Router } from 'preact-router';
import Head from "preact-head";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';

// import Header from './header';
// import Home from '../routes/home';
// import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
const regularBody = {
	backgroundColor: "transparent"
}
const overlayBody = {
	backgroundColor: "rgba(0, 0, 0, 0.45)"
}
export default class App extends Component {
	
	/** Gets fired when the route changes.
	*	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	*	@param {string} event.url	The newly routed URL
	*/
	state = {
		isMenuOpened: false
	}
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	handleClick = (e) => {
		// toggles the menu opened state
		this.setState({ isMenuOpened: !this.state.isMenuOpened });
	};
	render() {
		const {isMenuOpened} = this.state
		return (
			<div id="app">
				<Head>
					<title>PreactJS WWWIDPWA</title>
					<meta name="description" content="Progressive Web App using PreactJS" />
					<meta
					name="keywords"
					content="pwa, preact, unistore, code-splitting, hot-reload"
					/>
					<meta name="author" content="Azul" />
				</Head>
			
				<OffCanvas width={300} transitionDuration={300} isMenuOpened={isMenuOpened} position={"left"}>
					<OffCanvasBody style={isMenuOpened ? overlayBody : regularBody}>
						<p><a onClick={this.handleClick}>{isMenuOpened ? '✕' : '☰'}</a></p>
						<div id="main" class="col-md-12 minHeight" onClick={this.handleClick}>
							<p>This is the main body container.</p>						
						</div>
					</OffCanvasBody>
					<OffCanvasMenu>
						<div id="sidebar" class="minHeight" onClick={this.handleClick}>
							<p>Menu</p>
							<nav class="side">
								<a href="#" onClick={this.handleClick}>Category 1</a>
								<span>Category 2</span>
								<a href="#" class="sublink-1">Item 2.1</a>
								<span class="sublink-1">Category 2.2</span>
								<a href="#" class="sublink-2">Item 2.2.1</a>
							</nav>
						</div>
					</OffCanvasMenu>
				</OffCanvas>
			
			</div>
		);
	}
}
