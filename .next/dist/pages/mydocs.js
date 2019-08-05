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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Doc-Keeper-master\\pages\\mydocs.js?entry';


var Test = function (_Component) {
  (0, _inherits3.default)(Test, _Component);

  (0, _createClass3.default)(Test, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var _ref$query = _ref.query,
            ipfs = _ref$query.ipfs,
            docstatus = _ref$query.docstatus,
            insstatus = _ref$query.insstatus;
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
                return _context.abrupt('return', { ipfs: ipfs, docstatus: docstatus, account: account, insstatus: insstatus });

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
    (0, _classCallCheck3.default)(this, Test);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

    console.log("In Contructor");

    _this.state = {
      ipfs: _this.props.ipfs,
      docstatus: _this.props.docstatus,
      insstatus: _this.props.insstatus
    };

    return _this;
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('div', { style: { background: 'yellow', padding: '30px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'MY DOCUMENTS'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), '  ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { type: 'ban', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Documents:'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, this.props.ipfs.map(function (name, index) {
        return _react2.default.createElement(_semanticUiReact.List.Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }), _react2.default.createElement('a', { href: 'https://ipfs.io/ipfs/' + name, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: 'http://clipart-library.com/data_images/596925.png', size: 'tiny', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        })), ' ');
      }))), _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Doctor Verification Status :'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.props.docstatus.map(function (name, index) {
        return _react2.default.createElement(_semanticUiReact.List.Item, { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), name, ' ');
      }))), _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Insurance Verification Status :'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.props.insstatus.map(function (name, index) {
        return _react2.default.createElement(_semanticUiReact.List.Item, { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }), name, ' ');
      })))))));
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxteWRvY3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHcmlkIiwiQnV0dG9uIiwiSWNvbiIsIkltYWdlIiwiTGlzdCIsIndlYjMiLCJUZXN0IiwicXVlcnkiLCJpcGZzIiwiZG9jc3RhdHVzIiwiaW5zc3RhdHVzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJzdGF0ZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFwIiwibmFtZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNLEFBQU87O0FBQ3BDLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs4QkFDNEIsQTtZLEFBQVMsa0JBQUEsQTtZLEFBQU0sdUIsQUFBQTtZQUFXLEEsdUJBQUEsQTs7Ozs7Ozt1QkFHakMsY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBMUI7QSxvQ0FDQTtBLDBCQUFVLFNBQUEsQSxBQUFTLEFBQ3pCOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxxQkFBWixBQUFpQztpREFDMUIsRUFBRSxNQUFGLE1BQVMsV0FBVCxXQUFvQixTQUFwQixTQUE0QixXLEFBQTVCOzs7Ozs7Ozs7Ozs7Ozs7QUFJVDs7O2dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWCxBQUNSOztZQUFBLEFBQVEsSUFBUixBQUFZLEFBRVY7O1VBQUEsQUFBSztZQUNNLE1BQUEsQUFBSyxNQURILEFBQ1MsQUFDbEI7aUJBQVcsTUFBQSxBQUFLLE1BRlAsQUFFYSxBQUN0QjtpQkFBVSxNQUFBLEFBQUssTUFQRixBQUlqQixBQUFhLEFBR1k7QUFIWixBQUNUOztXQVFMOzs7Ozs2QkFJRyxBQUNFOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQSxTQUFLLE9BQU8sRUFBRSxZQUFGLEFBQWMsVUFBVyxTQUFyQyxBQUFZLEFBQWtDO29CQUE5QztzQkFBQSxBQUVOO0FBRk07eUJBRU4sY0FBQSxTQUFLLE9BQUwsQUFBVztvQkFBWDtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUVBOztvQkFBQTtzQkFIQSxBQUdBO0FBQUE7QUFBQSxVQUFVOztvQkFBQTtzQkFIVixBQUdVO0FBQUE7QUFBQSxVQUFXOztvQkFBQTtzQkFIckIsQUFHcUIsQUFDZjtBQURlO0FBQUEsMEJBQ2YsQUFBQzs7b0JBQUQ7c0JBQUEsQUFHSjtBQUhJO0FBQUEseUJBR0osQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREEsQUFDQSxBQUNnQjtBQURoQjswQkFDZ0IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRmhCLEFBRWdCLEFBQ0EsK0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLElBQUksVUFBQSxBQUFTLE1BQVQsQUFBZSxPQUFNLEFBQzVDOytCQUFRLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBWTs7c0JBQUE7d0JBQVosQUFBWSxBQUFTO0FBQVQ7QUFBQSw0QkFBUyxjQUFBLE9BQUcsTUFBTywwQkFBVixBQUFrQyxNQUFNLFFBQXhDLEFBQStDO3NCQUEvQzt3QkFBQSxBQUF3RDtBQUF4RDsyQkFBd0QsQUFBQyx3Q0FBTSxLQUFQLEFBQVcscURBQXFELE1BQWhFLEFBQXFFO3NCQUFyRTt3QkFBN0UsQUFBcUIsQUFBd0Q7QUFBQTthQUFwRixBQUFPLEFBQ047QUFSZixBQUdKLEFBR2dCLEFBQUssQUFLSCw0QkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUdGO0FBSEU7QUFBQSx5QkFHRixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRSxBQUdGLEFBQ0EsaURBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFTLE1BQVQsQUFBZSxPQUFNLEFBQ2hEOytCQUFRLGNBQUQsc0JBQUEsQUFBTSxRQUFLLEtBQVgsQUFBaUI7c0JBQWpCO3dCQUFBO0FBQUE7U0FBQSxFQUEwQjs7c0JBQUE7d0JBQTFCLEFBQTBCLEFBQVM7QUFBVDtBQUFBOztzQkFBUzt3QkFBbkMsQUFBbUMsQUFBVTtBQUFWO0FBQUEsWUFBbkMsTUFBUCxBQUFPLEFBQ1A7QUFqQmYsQUFXYyxBQUlGLEFBQUssQUFLdEIsNEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFHRjtBQUhFO0FBQUEseUJBR0YsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEUsQUFHRixBQUNBLG9EQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBUyxNQUFULEFBQWUsT0FBTSxBQUNoRDsrQkFBUSxjQUFELHNCQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWlCO3NCQUFqQjt3QkFBQTtBQUFBO1NBQUEsRUFBMEI7O3NCQUFBO3dCQUExQixBQUEwQixBQUFTO0FBQVQ7QUFBQTs7c0JBQVM7d0JBQW5DLEFBQW1DLEFBQVU7QUFBVjtBQUFBLFlBQW5DLE1BQVAsQUFBTyxBQUNQO0FBbENFLEFBQ0UsQUFDQSxBQUVOLEFBSU0sQUFvQkwsQUFJRixBQUFLLEFBYUQ7Ozs7O0FBMUVZLEEsQUE4RWY7O2tCQUFBLEFBQWUiLCJmaWxlIjoibXlkb2NzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tzcmVkL0Rvd25sb2Fkcy9aelovRG9jLUtlZXBlci1tYXN0ZXIifQ==