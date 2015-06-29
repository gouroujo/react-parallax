'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Parallax = (function (_React$Component) {
	function Parallax(props) {
		_classCallCheck(this, Parallax);

		_get(Object.getPrototypeOf(Parallax.prototype), 'constructor', this).call(this, props);

		this.node = null;
		this.childStyle = this.getChildStyle();
		this.state = {
			top: 0
		};
		this.autobind();
	}

	_inherits(Parallax, _React$Component);

	_createClass(Parallax, [{
		key: 'autobind',
		value: function autobind() {
			this.onScroll = this.onScroll.bind(this);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'react-parallax', style: this.getParallaxStyle() },
				_react2['default'].createElement(
					'div',
					{ style: this.childStyle },
					this.props.children
				)
			);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			document.addEventListener('scroll', this.onScroll, false);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.node = _react2['default'].findDOMNode(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener('scroll', this.onScroll, false);
		}
	}, {
		key: 'onScroll',
		value: function onScroll(event) {
			var rect = this.node.getBoundingClientRect();
			if (rect) {
				this.setState({
					top: this.node.getBoundingClientRect()
				});
			}
		}
	}, {
		key: 'getParallaxStyle',
		value: function getParallaxStyle() {
			var style = {
				position: 'relative',
				background: this.props.bgImage ? 'url(' + this.props.bgImage + ')' : this.props.bgColor,
				backgroundSize: 'cover',
				height: this.props.height
			};
			return style;
		}
	}, {
		key: 'getChildStyle',
		value: function getChildStyle() {
			return {
				position: 'absolute',
				top: '50%',
				left: '50%',
				WebkitTransform: 'translate(-50%, -50%)',
				msTransform: 'translate(-50%, -50%)',
				transform: 'translate(-50%, -50%)'
			};
		}
	}]);

	return Parallax;
})(_react2['default'].Component);

exports['default'] = Parallax;

Parallax.propTypes = {
	backgroundImage: _react2['default'].PropTypes.string,
	bgColor: _react2['default'].PropTypes.string,
	height: _react2['default'].PropTypes.number
};
Parallax.defaultProps = {
	bgColor: '#fff',
	height: 300
};
module.exports = exports['default'];
