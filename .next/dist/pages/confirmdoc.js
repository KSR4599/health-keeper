'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _store = require('../ethereum/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Doc-Keeper-master\\pages\\confirmdoc.js?entry';


var Test = function (_Component) {
  (0, _inherits3.default)(Test, _Component);

  (0, _createClass3.default)(Test, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var imagehash = _ref.query.imagehash;
        var accounts, account;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                account = accounts[0];

                console.log("Your Account is :", account);
                return _context.abrupt('return', { imagehash: imagehash, account: account });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Test(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Test);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

    _this.onClick = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var dlink, accounts, id;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({ message: 'We are adding your document. Please wait.' });
                console.log("On Click Called!");

                console.log("imagehash", _this.state.imagehash);

                dlink = 'https://ipfs.io/ipfs/' + _this.state.imagehash;
                _context2.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context2.sent;

                console.log("THE ACCOUNT IS", accounts[0]);

                id = _store2.default.methods.addDocumentToStore(_this.state.imageLink).send({
                  from: accounts[0]
                });

                console.log("OUT FROM CONTRACT");
                _this.setState({ message: 'Done!' });

                _routes.Router.pushRoute('/index1');

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    console.log("In Constructor");

    _this.state = {

      imagehash: _this.props.imagehash,
      imageLink: 'https://ipfs.io/ipfs/' + _this.props.imagehash,
      message: 'If Everything is Correct, Click the Confirm Button!'
    };

    _this.onClick = _this.onClick.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { style: { background: 'blue', padding: '30px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Document Name :'), '  ', _react2.default.createElement(_semanticUiReact.Step.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Step, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_semanticUiReact.Step.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Step.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.props.name), _react2.default.createElement(_semanticUiReact.Step.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Will be Approved by the Respective Authority Soon')))), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Your Document :', _react2.default.createElement('a', { href: this.state.imageLink, target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: 'http://clipart-library.com/data_images/596903.png', size: 'small', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), _react2.default.createElement('form', { onSubmit: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: true, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Confirm'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'check square outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })))), _react2.default.createElement(_semanticUiReact.Segment, { color: 'yellow', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, '  ', _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, this.state.message)))));
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb25maXJtZG9jLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJJbWFnZSIsIlNlZ21lbnQiLCJTdGVwIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJlc3RvcmUiLCJUZXN0IiwiaW1hZ2VoYXNoIiwicXVlcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJtZXNzYWdlIiwic3RhdGUiLCJkbGluayIsImlkIiwibWV0aG9kcyIsImFkZERvY3VtZW50VG9TdG9yZSIsImltYWdlTGluayIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwiYmluZCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFPLEFBQVM7O0FBQzdDLEFBQU8sQUFBVTs7OztBQUVqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7O1lBRXNDLEEsaUJBQVIsQSxNLEFBQVE7Ozs7Ozs7dUJBR2IsY0FBQSxBQUFLLElBQUksQSxBQUFUOzttQkFBakI7QSxvQ0FDQTtBLDBCQUFVLFNBQ2hCLEEsQUFEZ0IsQUFBUzs7d0JBQ3pCLEFBQVEsSUFBUixBQUFZLHFCQUFaLEFBQWlDO2lEQUMxQixFQUFDLFdBQUQsV0FBWSxTLEFBQVo7Ozs7Ozs7Ozs7Ozs7OztBQUdmOzs7Z0JBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7a0lBQUEsQUFDVDs7VUFEUyxBQWlCakIsc0JBakJpQjsyRkFpQlAsa0JBQUEsQUFBTyxPQUFQOzZCQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUNSO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBVyxBQUN2Qjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUVaOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxhQUFhLE1BQUEsQUFBSyxNQUE5QixBQUFvQyxBQUUvQjs7QUFQQyx3QkFPTywwQkFBd0IsTUFBQSxBQUFLLE1BUHBDLEFBTzBDO2lDQVAxQzt1QkFRZSxjQUFBLEFBQUssSUFScEIsQUFRZSxBQUFTOzttQkFBMUI7QUFSRSxxQ0FTWjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksa0JBQWlCLFNBQTdCLEFBQTZCLEFBQVMsQUFHOUI7O0FBWkkscUNBWUEsQUFBTyxRQUFQLEFBQWUsbUJBRXJCLE1BQUEsQUFBSyxNQUZDLEFBRUssV0FGTCxBQUlQO3dCQUNPLFNBakJBLEFBWUEsQUFJRixBQUNFLEFBQVMsQUFLbkI7QUFOUSxBQUNMLGlCQUxPOzt3QkFVVixBQUFRLElBQVIsQUFBWSxBQUNWO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUFXLEFBRXpCOzsrQkFBQSxBQUFPLFVBekJDLEFBeUJSLEFBQWlCOzttQkF6QlQ7bUJBQUE7aUNBQUE7O0FBQUE7cUJBQUE7QUFqQk87OzRCQUFBO2lDQUFBO0FBQUE7QUFFakI7O1lBQUEsQUFBUSxJQUFSLEFBQVksQUFFVjs7VUFBQSxBQUFLOztpQkFFVSxNQUFBLEFBQUssTUFGUCxBQUVhLEFBQ3RCO2lCQUFZLDBCQUF3QixNQUFBLEFBQUssTUFIaEMsQUFHc0MsQUFDL0M7ZUFKSixBQUFhLEFBSUEsQUFJYjtBQVJhLEFBRVQ7O1VBTUosQUFBSyxVQUFVLE1BQUEsQUFBSyxRQUFMLEFBQWEsS0FaYixBQVlmOztXQUVEOzs7Ozs2QkFpQ0csQUFDRTs2QkFDSixBQUFDOztvQkFBRDtzQkFBQSxBQUVBO0FBRkE7QUFBQSxPQUFBLGtCQUVBLGNBQUEsU0FBSyxPQUFMLEFBQVc7b0JBQVg7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUEsU0FBSyxPQUFPLEVBQUUsWUFBRixBQUFjLFFBQVMsU0FBbkMsQUFBWSxBQUFnQztvQkFBNUM7c0JBQUEsQUFFQTtBQUZBO3lCQUVBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZBLEFBRUEsb0JBQTBCLHNCQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDMUI7QUFEMEI7QUFBQSx5QkFDMUIsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQWE7QUFBYjtBQUFBLGNBQWEsQUFBSyxNQURwQixBQUNFLEFBQXdCLEFBQ3hCLHVCQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBUEosQUFFMEIsQUFDMUIsQUFFRSxBQUVFLEFBSUoseUVBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQW1CLG1DQUFBLGNBQUEsT0FBRyxNQUFPLEtBQUEsQUFBSyxNQUFmLEFBQXFCLFdBQVcsUUFBaEMsQUFBdUM7b0JBQXZDO3NCQUFBLEFBQWdEO0FBQWhEO3lCQUFnRCxBQUFDLHdDQUFNLEtBQVAsQUFBVyxxREFBcUQsTUFBaEUsQUFBcUU7b0JBQXJFO3NCQVhuRSxBQVdBLEFBQW1CLEFBQWdELEFBSW5FO0FBSm1FOzRCQUluRSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixNQUFqQixBQUFzQjtvQkFBdEI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsNEJBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQW5CSixBQWVBLEFBQ0EsQUFFRSxBQUNFLEFBS0o7QUFMSTs2QkFLSixBQUFDLDBDQUFRLE9BQVQsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBQTBCLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQTVCaEMsQUFDSixBQUVBLEFBQ0EsQUF3QkEsQUFBMEIsQUFBZ0IsQUFPdkM7Ozs7O0FBOUZZLEEsQUFrR2Y7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY29uZmlybWRvYy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9rc3JlZC9Eb3dubG9hZHMvWnpaL0RvYy1LZWVwZXItbWFzdGVyIn0=