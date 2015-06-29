import React from 'react';

export default class Parallax extends React.Component {

	constructor(props) {
		super(props);

		this.node = null;
		this.childStyle = this.getChildStyle();
		this.state = {
			top: 0
		};
		this.autobind();
	}

	autobind() {
		this.onScroll = this.onScroll.bind(this);
	}

	render() {
		return (
			<div className="react-parallax" style={this.getParallaxStyle()}>
				<div style={this.childStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}

	componentWillMount() {
		document.addEventListener('scroll', this.onScroll, false);
	}

	componentDidMount() {
		this.node = React.findDOMNode(this);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll(event) {
		let rect = this.node.getBoundingClientRect();
		if (rect) {
			this.setState({
				top: this.node.getBoundingClientRect()
			});
		}
	}

	getParallaxStyle() {
		let style = {
			position: 'relative',
			background: this.props.bgImage ? ('url(' + this.props.bgImage + ')') : this.props.bgColor,
			backgroundSize: 'cover',
			height: this.props.height
		};
		return style;
	}

	getChildStyle() {
		return {
			position: 'absolute',
			top: '50%',
			left: '50%',
			WebkitTransform: 'translate(-50%, -50%)',
			msTransform: 'translate(-50%, -50%)',
			transform: 'translate(-50%, -50%)'
		};
	}
}
Parallax.propTypes = {
	backgroundImage: React.PropTypes.string,
	bgColor: React.PropTypes.string,
	height: React.PropTypes.number
};
Parallax.defaultProps = {
	bgColor: '#fff',
	height: 300
};
