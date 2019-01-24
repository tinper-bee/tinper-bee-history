/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _beeLayout = __webpack_require__(1);
	
	var _beePanel = __webpack_require__(8);
	
	var _beeButton = __webpack_require__(77);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });
	
	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });
	
	var Demo1 = __webpack_require__(79);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " Icon", "code": "/**\n * @title Icon\n * @description 在iuap字符库，`type`参数值均以-分隔。\n */\n\nimport React, { Component } from 'react';\nimport { Icon } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div className=\"tinper-icon-demo\">\n\t\t\t\t<ul className=\"icon_lists\">\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-wechat\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">微信</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-wechat</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-add-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">加</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-add-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-search\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">搜索</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-search</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-histogram-arrow-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">图表 折线图</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-histogram-arrow-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-close-bold\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">关闭</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-close-bold</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-umbrella\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">雨伞</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-umbrella</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-qq\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">QQ</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-qq</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-4square-3\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">分类</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-4square-3</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-send\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">发送</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-send</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-map\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">地图</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-map</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-9square-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">标定</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-9square-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-navmenu\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">汉堡包</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-navmenu</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pc-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">显示器</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pc-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-search-light-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">zoom</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-search-light-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-check-s-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">任务</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-check-s-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pencil\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">编辑</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pencil</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-repeat\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">撤销</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-repeat</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-security-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">安全</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-security-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-lexi\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">女</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-lexi</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pencil-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">编辑</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pencil-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-del\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">删除</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-del</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bi-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">比价</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bi-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pencil-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">编辑</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pencil-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-qrcode\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">二维码</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-qrcode</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rmb-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">免费报价</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rmb-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-search-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">搜索</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-search-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bell\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">铃铛</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bell</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pass-3\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">机检通过</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pass-3</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-treearrow-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">树形线</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-treearrow-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-training\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">培训</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-training</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-group-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">组织架构</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-group-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-zoom-in\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">zoom-in</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-zoom-in</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-security-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">安全</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-security-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-baojia-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">报价</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-baojia-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rulerpen\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">定制</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rulerpen</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-erpsearch\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">erp</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-erpsearch</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-group-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">组织机构</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-group-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cloud-o-updown\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">同步中2-同步</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cloud-o-updown</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-close-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">关闭</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-close-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-add-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">加</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-add-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pc\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">工作台</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pc</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rain\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">空气_雨天</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rain</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-nodata\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">无数据</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-nodata</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-close-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">关闭</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-close-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bohui-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">审批-驳回</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bohui-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cloud\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cloud</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bag-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">商品</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bag-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-table-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">made</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-table-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-anglearrowpointingtoright\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-anglearrowpointingtoright</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-exc-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">叹号</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-exc-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-group\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">组织机构</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-group</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-personin-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">认证激活</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-personin-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-calendar\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">gm_日历</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-calendar</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-add-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">加</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-add-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sync-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">同步</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sync-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-grid\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">grid</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-grid</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-anglepointingtoleft\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-anglepointingtoleft</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-activate-3\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">激活</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-activate-3</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-caven\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">男</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-caven</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-back\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">返回</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-back</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pass-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">授权</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pass-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-reduce-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">显示树</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-reduce-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-area\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">图表图标-面积图</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-area</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-flag\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">旗帜</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-flag</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-box-o-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">购买盒子</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-box-o-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-s-o-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">下架</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-s-o-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-s-o-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">上架</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-s-o-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-building\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">企业信息</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-building</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-tapp\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-tapp</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-treefolder\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">搜索</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-treefolder</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-advice\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">咨询</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-advice</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-2collayout\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">序列布局</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-2collayout</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-check-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">审批</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-check-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sign\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">采购合同</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sign</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-listsearch\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">查看详情</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-listsearch</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-gridcaretarrowup\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">必填</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-gridcaretarrowup</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-eye-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">查看</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-eye-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-check-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">许可</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-check-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-seal\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">审批</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-seal</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-erpbox\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">erp</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-erpbox</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rulerpen-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">定制</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rulerpen-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-role\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">角色</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-role</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-exc-c-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">提示叹号</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-exc-c-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pad\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">pad</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pad</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-treefolder-closed\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">tree-new-sbling-node</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-treefolder-closed</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-reduce-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">减号</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-reduce-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pass-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">通过</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pass-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-setting\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">维护</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-setting</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-close-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">ZSX号</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-close-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-map-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">地图</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-map-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-move\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">移动</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-move</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-2arrow-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-2arrow-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-2arrow-right\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-2arrow-right</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-c-o-left\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-c-o-left</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-plus\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">plus</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-plus</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-c-o-right\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-c-o-right</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-c-o-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-c-o-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-list-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">暂无数据</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-list-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cloud-o-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">云下载</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cloud-o-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-nodata-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">无效数据</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-nodata-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-file-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">文档文件-01</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-file-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-2arrow-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-2arrow-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-notification\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">消息喇叭</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-notification</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-piechart\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">图表_饼</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-piechart</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cloud-o-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">云_上传</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cloud-o-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-close\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">取消</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-close</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-correct\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">对号</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-correct</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-histogram-s-o-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">图表切换</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-histogram-s-o-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-4square-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">应用中心</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-4square-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sunny\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气 </div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sunny</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-link\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">复制链接</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-link</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-eye\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">查看</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-eye</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-eye-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">查看</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-eye-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-qian\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">签</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-qian</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-widgetab\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">小部件授权</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-widgetab</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rmb-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">报价</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rmb-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-link-off\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">断开链接</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-link-off</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-shang-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">上架</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-shang-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-xia-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">下架</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-xia-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-box-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">盒子full</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-box-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pass-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">授权</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pass-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">angle-arrow-down</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-right\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">angle-arrow-pointing-to-right</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-right</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-left\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">angle-pointing-to-left</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-left</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-box\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">archive-black-box</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-box</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-triangle-right\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">arrowhead-pointing-to-the-right</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-triangle-right</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-histogram-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">bar-graph-on-a-rectangle</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-histogram-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-book\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">book</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-book</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bookmark-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">bookmark-white</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bookmark-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-leaf\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">branch-with-leaves-black-shape</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-leaf</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bullseye\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">bullseye</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bullseye</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-gridcaretdown\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">camera-retro</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-gridcaretdown</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-triangle-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">caret-arrow-up</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-triangle-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-triangle-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">caret-down</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-triangle-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cloud-down\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">cloud-storage-download</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cloud-down</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cloud-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">cloud-storage-uploading-option</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cloud-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bubble\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">comment-black-oval-bubble-shape</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bubble</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bubble-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">comment-white-oval-bubble</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bubble-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-copy\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">copy-document</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-copy</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-correct-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">correct-symbol</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-correct-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-2arrow-left\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">double-left-chevron</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-2arrow-left</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-down-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">down-arrow</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-down-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-download\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">download-to-storage-drive</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-download</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-earth\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">earth-globe</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-earth</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-mail-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">envelope-of-white-paper</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-mail-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-mail\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">envelope</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-mail</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-exc\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">exclamation</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-exc</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-externallink\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">external-link-symbol</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-externallink</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-video\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">facetime-button</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-video</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-films\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">film-strip-with-two-photograms</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-films</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-folder\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">folder-closed-black-shape</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-folder</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-folder-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">folder-white-shape</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-folder-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-4square\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">four-black-squares</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-4square</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-gift\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">gift-box</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-gift</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-github-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">github-logo</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-github-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-github-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">github-sign</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-github-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-heart-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">heart-shape-outline</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-heart-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-heart\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">heart-shape-silhouette</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-heart</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-home\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">home</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-home</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-i-c-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">information-button</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-i-c-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-i\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">information-symbol</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-i</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-triangle-left\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">left-arrow</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-triangle-left</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-symlist\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">listing-option</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-symlist</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-left-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">long-arrow-pointing-to-left</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-left-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-right-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">long-arrow-pointing-to-the-right</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-right-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-up-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">long-arrow-pointing-up</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-up-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-reduce-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">minus-sign-inside-a-black-circle</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-reduce-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-reduce-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">minus-sign-inside-a-black-rounded-square-shape</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-reduce-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-minus\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">minus-symbol</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-minus</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-mobile\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">mobile-phone</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-mobile</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bell-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">musical-bell-outline</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bell-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-9square\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">nine-black-tiles</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-9square</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-numlist\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">numbered-list</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-numlist</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-folderopen-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">open-folder-outline</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-folderopen-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-treefolderopen\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">open-folder</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-treefolderopen</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-mac\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">open-laptop-computer</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-mac</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-camera\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">photo-camera</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-camera</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-picture\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">picture</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-picture</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-play\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">play-sign</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-play</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-play-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">play-video-button</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-play-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-qm-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">question-mark-on-a-circular-black-background</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-qm-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-qm\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">question-sign</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-qm</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-navmenu-light\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">reorder-option</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-navmenu-light</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-settings\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">settings</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-settings</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cart\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">shopping-cart-black-shape</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cart</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-histogram\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">signal-bars</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-histogram</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-finetune\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">sort-arrows-couple-pointing-up-and-down</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-finetune</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sortup\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">sort-by-attributes-interface-button-option</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sortup</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sortdown\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">sort-by-attributes</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sortdown</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sort19\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">sort-by-numeric-order</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sort19</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sort91\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">sort-by-order</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sort91</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-za\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">sort-reverse-alphabetical-order</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-za</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-star-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">star-1</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-star-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-star-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">star-half-empty</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-star-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-star\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">star</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-star</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-luggage\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">suitcase-with-white-details</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-luggage</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-table\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">table-grid</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-table</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-tel\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">telephone-handle-silhouette</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-tel</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-tel-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">telephone-symbol-button</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-tel-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-terminal\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">terminal</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-terminal</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-file\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">text-file-1</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-file</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-file-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">text-file</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-file-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-3dot-h\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">three-small-square-shapes</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-3dot-h</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-time-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">time</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-time-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-upload\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">upload</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-upload</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-3dot-v\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">vertical-ellipsis</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-3dot-v</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rmb\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">yen-symbol</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rmb</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-c-o-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-c-o-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-reject-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">驳回</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-reject-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-barcode\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">barcode-1</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-barcode</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-zoom-out\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">zoom-out</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-zoom-out</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-exc-t-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">三角叹号</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-exc-t-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-pass\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">通过</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-pass</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-flow\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">关系网络</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-flow</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-add-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">加</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-add-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-c-o-right-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-c-o-right-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-shelf-on\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">上架</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-shelf-on</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-shelf-off\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">下架</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-shelf-off</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-file-o-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">文件</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-file-o-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-truck-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">到货确认</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-truck-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-super\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">功能强大</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-super</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-equipment\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">设备</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-equipment</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-c-o-left-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-c-o-left-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-files-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">资源文件</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-files-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cloud-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">云</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cloud-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rmb-s-o-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">对账</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rmb-s-o-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-3dot-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">管理中心</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-3dot-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-dafeng\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气_大风</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-dafeng</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-baoxue\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气_暴雪</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-baoxue</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bingbao\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气_冰雹</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bingbao</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-fengbao\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气_风暴</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-fengbao</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-xiaoyu\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气_小雨</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-xiaoyu</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-zhenxue\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气_阵雪</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-zhenxue</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-zhongyu\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">天气_中雨</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-zhongyu</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-es\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">ES</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-es</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-flow-o-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">流程</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-flow-o-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-activate-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">激活-01</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-activate-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-flow-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">流程</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-flow-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bulb-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">技术支持</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bulb-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-mi-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">必填</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-mi-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-top-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">返回顶部</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-top-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-creditcard\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">credit-card</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-creditcard</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-align-center\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">align-center</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-align-center</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-align-justify\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">align-justify</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-align-justify</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-align-left\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">align-left</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-align-left</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-align-right\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">align-right</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-align-right</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-ju-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">拒</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-ju-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-truck\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">货到付款</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-truck</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-setting-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">流程</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-setting-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-users-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">楼宇图标_用户组</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-users-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bag-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">商品</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bag-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cai-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">采购</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cai-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-listcheck\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">��标</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-listcheck</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-users\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">群</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-users</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-i-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">查看详情</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-i-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-building-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">企业信息</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-building-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rmb-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">报价管理</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rmb-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-reject\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">已驳回</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-reject</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-9dot\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">菜单</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-9dot</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-loadingstate\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">loading</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-loadingstate</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-gateway\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">网关</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-gateway</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-ticket-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">发票</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-ticket-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-userset\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">管理中心</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-userset</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-puzzle-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">组件</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-puzzle-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-box-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">物料管理</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-box-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bulb\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">激活</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bulb</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-exc-t\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">感叹号_icon</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-exc-t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-rmb-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">报价</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-rmb-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-table-s-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">发票</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-table-s-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-umbrella-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">伞</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-umbrella-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-dropbox\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">dropbox</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-dropbox</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-search-light\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">搜索-搜索</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-search-light</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-cart-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">shopping-cart-black-shape</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-cart-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-kero-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">kero</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-kero-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-uba-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">uba</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-uba-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-tinperzc-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">tinperzc</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-tinperzc-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-tinperzch-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">tinperzch</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-tinperzch-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-iuap-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">iuap</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-iuap-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-iuapdesign-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">iuapdesignz</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-iuapdesign-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-bee-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">bee</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-bee-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-neoui-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">neoui</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-neoui-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-sparrow-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">sparrow</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-sparrow-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-tinpercn-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">tinpercn</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-tinpercn-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-tinperen-col\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">tinperen</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-tinperen-col</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-arrow-up\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">angle-arrow-down</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-arrow-up</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-mailsym\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">webmail</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-mailsym</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-print\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">办公用品</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-print</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-ticket-3\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">报销</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-ticket-3</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-loan\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">借款</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-loan</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-ticket-2\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">凭证中心</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-ticket-2</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-offwork\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">请假</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-offwork</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-todolist\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">待办</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-todolist</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-personin\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">员工入职</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-personin</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-ticket\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">票务</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-ticket</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-linechart\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">小icon-图表</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-linechart</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-4leaf\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">应用中心</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-4leaf</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-listset\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">信息维护</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-listset</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-qi-c-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">企业认证</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-qi-c-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-exc-c\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">叹号</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-exc-c</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-code\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">集成开发</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-code</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-plug-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">热拔插</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-plug-o</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-search-s\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">搜索</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-search-s</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-treeadd\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">tree-new-sbling-node</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-treeadd</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-mi\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">必填</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-mi</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-treeline-copy\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">树形线</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-treeline-copy</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-listwithdots\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">列表项</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-listwithdots</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-gridlogo\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">Grid</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-gridlogo</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-magnifyingglass\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">搜索</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-magnifyingglass</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-anglearrowdown\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">向下箭头</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-anglearrowdown</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-yongyouyunchnen\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">用友云（小）</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-yongyouyunchnen</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-yycloud\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">用友云</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-yycloud</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-funnel-o\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">筛选</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-funnel-o</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-filter\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">过滤</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-filter</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<Icon type=\"uf-filterno\"></Icon>\n\t\t\t\t\t\t<div className=\"name\">取消过滤</div>\n\t\t\t\t\t\t<div className=\"fontclass\">.uf-filterno</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n", "desc": " 在iuap字符库，`type`参数值均以-分隔。", "scss_code": ".tinper-icon-demo .uf{\n  font-size: 42px;\n  line-height: 100px;\n  margin: 10px 0;\n  color: #333;\n  -webkit-transition: font-size 0.25s ease-out 0s;\n  -moz-transition: font-size 0.25s ease-out 0s;\n  transition: font-size 0.25s ease-out 0s;\n}\n.tinper-icon-demo .uf:hover{\n  font-size: 80px;\n}\n.icon_lists:after {\n  clear:both;\n  display:block;\n  visibility: hidden;\n  content:'.';\n}\n.icon_lists li {\n  float: left;\n  width: 100px;\n  height: 180px;\n  text-align: center;\n  list-style: none !important;\n}" }];
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }
	
	    Demo.prototype.handleClick = function handleClick() {
	        this.setState({ open: !this.state.open });
	    };
	
	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc,
	            scss_code = _props.scss_code;
	
	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";
	
	        var header = _react2['default'].createElement(
	            'div',
	            null,
	            example,
	            _react2['default'].createElement(
	                _beeButton2['default'],
	                { style: { "marginTop": "10px" }, shape: 'block', onClick: this.handleClick },
	                caret,
	                text
	            )
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12 },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { collapsible: true, headerContent: true, expanded: this.state.open, colors: 'bordered', header: header, footerStyle: { padding: 0 } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                ),
	                !!scss_code ? _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs css' },
	                        scss_code
	                    )
	                ) : null
	            )
	        );
	    };
	
	    return Demo;
	}(_react.Component);
	
	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);
	
	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);
	
	        return _possibleConstructorReturn(this, _Component2.call(this, props));
	    }
	
	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, scss_code: child.scss_code, desc: child.desc, key: index });
	            })
	        );
	    };
	
	    return DemoGroup;
	}(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;
	
	var _Col2 = __webpack_require__(2);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	var _Row2 = __webpack_require__(6);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	var _Layout = __webpack_require__(7);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
	
	  /**
	   * xs显示列数
	   */
	  xs: _propTypes2["default"].number,
	  /**
	   * sm显示列数
	   */
	  sm: _propTypes2["default"].number,
	  /**
	   * md显示列数
	   */
	  md: _propTypes2["default"].number,
	  /**
	   * lg显示列数
	   */
	  lg: _propTypes2["default"].number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _propTypes2["default"].number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _propTypes2["default"].number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _propTypes2["default"].number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _propTypes2["default"].number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _propTypes2["default"].number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _propTypes2["default"].number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _propTypes2["default"].number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _propTypes2["default"].number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _propTypes2["default"].number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _propTypes2["default"].number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _propTypes2["default"].number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _propTypes2["default"].number
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};
	
	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
	
	var Col = function (_Component) {
	  _inherits(Col, _Component);
	
	  function Col() {
	    _classCallCheck(this, Col);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);
	
	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];
	
	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }
	
	        delete others[propName];
	      }
	
	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };
	
	  return Col;
	}(_react.Component);
	
	Col.defaultProps = defaultProps;
	Col.propTypes = propTypes;
	
	exports["default"] = Col;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};
	
	var Row = function (_Component) {
	  _inherits(Row, _Component);
	
	  function Row() {
	    _classCallCheck(this, Row);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);
	
	    var bsclass = '' + clsPrefix;
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Row;
	}(_react.Component);
	
	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;
	
	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _propTypes2["default"].bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  fluid: false,
	  clsPrefix: 'u-container'
	};
	
	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);
	
	  function Con() {
	    _classCallCheck(this, Con);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Con.prototype.render = function render() {
	    var _tbclass;
	
	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);
	
	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Con;
	}(_react2["default"].Component);
	
	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;
	
	exports["default"] = Con;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;
	
	var _Panel2 = __webpack_require__(9);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	var _PanelGroup2 = __webpack_require__(76);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeTransition = __webpack_require__(10);
	
	var _beeMessage = __webpack_require__(64);
	
	var _beeMessage2 = _interopRequireDefault(_beeMessage);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _copyToClipboard = __webpack_require__(74);
	
	var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否添加折叠
	  collapsible: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  //头部组件
	  header: _propTypes2["default"].node,
	  headerStyle: _propTypes2["default"].object,
	  id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	  headerContent: _propTypes2["default"].bool,
	  //footer组件
	  footer: _propTypes2["default"].node,
	  footerStyle: _propTypes2["default"].object,
	  //默认是否打开
	  defaultExpanded: _propTypes2["default"].bool,
	  //是否打开
	  expanded: _propTypes2["default"].bool,
	  //每个panel的标记
	  eventKey: _propTypes2["default"].any,
	  headerRole: _propTypes2["default"].string,
	  panelRole: _propTypes2["default"].string,
	  //颜色
	  colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),
	
	  // From Collapse.的扩展动画
	  onEnter: _propTypes2["default"].func,
	  onEntering: _propTypes2["default"].func,
	  onEntered: _propTypes2["default"].func,
	  onExit: _propTypes2["default"].func,
	  onExiting: _propTypes2["default"].func,
	  onExited: _propTypes2["default"].func,
	  //是否可复制内容
	  copyable: _propTypes2["default"].bool
	};
	
	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};
	
	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);
	
	  function Panel(props, context) {
	    _classCallCheck(this, Panel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);
	
	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }
	
	  //头部点击事件
	
	
	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };
	
	  //渲染panelheader
	
	
	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';
	
	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }
	
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };
	
	  //如果使用链接，渲染为a标签
	
	
	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };
	
	  //复制代码，弹出提示信息
	
	
	  Panel.prototype.copyDemo = function copyDemo(e) {
	    var panelTarget = e.target.parentNode;
	    var clipBoardContent = panelTarget.firstChild.innerText;
	    (0, _copyToClipboard2["default"])(clipBoardContent);
	    _beeMessage2["default"].create({ content: '复制成功！', color: 'success', duration: 2 });
	  };
	
	  //如果有折叠动画，渲染折叠动画
	
	
	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, copyable, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix, copyable)
	      )
	    );
	  };
	
	  //渲染panelbody
	
	
	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix, copyable) {
	    var self = this;
	    var children = [];
	    var bodyChildren = [];
	
	    var bodyClassName = clsPrefix + '-body';
	    //添加到body的children中
	    function maybeAddBody(self) {
	      if (!bodyChildren.length) {
	        return;
	      }
	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren,
	        copyable && _react2["default"].createElement('i', { className: 'uf uf-files-o', onClick: self.copyDemo })
	      ));
	      bodyChildren = [];
	    }
	
	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody(self);
	
	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));
	
	        return;
	      }
	      bodyChildren.push(child);
	    });
	
	    maybeAddBody(self);
	
	    return children;
	  };
	
	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        headerContent = _props.headerContent,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        copyable = _props.copyable,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect', 'copyable']);
	
	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;
	
	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);
	
	    copyable === false ? false : true;
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, copyable, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix, copyable),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };
	
	  return Panel;
	}(_react2["default"].Component);
	
	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;
	
	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;
	
	var _Transition2 = __webpack_require__(11);
	
	var _Transition3 = _interopRequireDefault(_Transition2);
	
	var _Collapse2 = __webpack_require__(16);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	var _Fade2 = __webpack_require__(63);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(13);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(15);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionEndEvent = _properties2["default"].end;
	
	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,
	
	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	};
	
	function noop() {}
	
	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	/**
	 * 动画组件
	 */
	
	var Transition = function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;
	
	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	
	      return;
	    }
	
	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;
	
	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    // 这里接收新props
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	}(_react.Component);
	
	Transition.propTypes = propTypes;
	
	Transition.defaultProps = defaultProps;
	
	exports["default"] = Transition;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;
	
	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	
	
	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
	
	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}
	
	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	
	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };
	
	  var vendors = Object.keys(vendorMap);
	
	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	
	  style = null;
	
	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {
	
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}
	
	exports.default = on;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(17);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(25);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];
	
	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}
	
	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2["default"].func,
	
	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }
	
	  /* -- Expanding -- */
	
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  /* -- Collapsing -- */
	
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  // for testing
	
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };
	
	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);
	
	    delete props.dimension;
	    delete props.getDimensionValue;
	
	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);
	
	    var classes = {
	      width: this._dimension() === 'width'
	    };
	
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };
	
	  return Collapse;
	}(_react2["default"].Component);
	
	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;
	
	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;
	
	var _camelizeStyle = __webpack_require__(18);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	var _hyphenateStyle = __webpack_require__(20);
	
	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);
	
	var _getComputedStyle2 = __webpack_require__(22);
	
	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);
	
	var _removeStyle = __webpack_require__(23);
	
	var _removeStyle2 = _interopRequireDefault(_removeStyle);
	
	var _properties = __webpack_require__(13);
	
	var _isTransform = __webpack_require__(24);
	
	var _isTransform2 = _interopRequireDefault(_isTransform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }
	
	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;
	
	var _camelize = __webpack_require__(19);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;
	
	var _hyphenate = __webpack_require__(21);
	
	var _hyphenate2 = _interopRequireDefault(_hyphenate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;
	
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;
	
	var _camelizeStyle = __webpack_require__(18);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	
	      prop = (0, _camelizeStyle2.default)(prop);
	
	      if (prop == 'float') prop = 'styleFloat';
	
	      var current = node.currentStyle[prop] || null;
	
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;
	
	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';
	
	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;
	
	var _all2 = __webpack_require__(27);
	
	var _all3 = _interopRequireDefault(_all2);
	
	var _componentOrElement2 = __webpack_require__(29);
	
	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);
	
	var _deprecated2 = __webpack_require__(30);
	
	var _deprecated3 = _interopRequireDefault(_deprecated2);
	
	var _elementType2 = __webpack_require__(33);
	
	var _elementType3 = _interopRequireDefault(_elementType2);
	
	var _isRequiredForA11y2 = __webpack_require__(34);
	
	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);
	
	var _splitComponent2 = __webpack_require__(35);
	
	var _splitComponent3 = _interopRequireDefault(_splitComponent2);
	
	var _createChainedFunction2 = __webpack_require__(36);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	var _keyCode = __webpack_require__(37);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _contains2 = __webpack_require__(38);
	
	var _contains3 = _interopRequireDefault(_contains2);
	
	var _addEventListener2 = __webpack_require__(39);
	
	var _addEventListener3 = _interopRequireDefault(_addEventListener2);
	
	var _cssAnimation2 = __webpack_require__(44);
	
	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);
	
	var _toArray2 = __webpack_require__(48);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _Align2 = __webpack_require__(49);
	
	var _Align3 = _interopRequireDefault(_Align2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';
	
	exports.Align = _Align3.default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	// Mostly taken from ReactPropTypes.
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }
	
	      return null;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }
	
	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = deprecated;
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {};
	
	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;
	
	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
	
	      warned[messageKey] = true;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}
	
	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}
	
	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = splitComponentProps;
	function _objectEntries(obj) {
	  var entries = [];
	  var keys = Object.keys(obj);
	
	  for (var k = 0; k < keys.length; ++k) {
	    entries.push([keys[k], obj[keys[k]]]);
	  }return entries;
	}
	
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;
	
	  var parentProps = {};
	  var childProps = {};
	
	  _objectEntries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });
	
	  return [parentProps, childProps];
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(40);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListener;
	
	var _EventObject = __webpack_require__(41);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2["default"](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventBaseObject = __webpack_require__(42);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(43);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = void 0;
	    var deltaY = void 0;
	    var delta = void 0;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = void 0;
	    var doc = void 0;
	    var body = void 0;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2["default"].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = void 0;
	  var l = void 0;
	  var prop = void 0;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2["default"].prototype;
	
	(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports["default"] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(45);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(46);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports.default = cssAnimation;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports.default = TransitionEvents;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(47);
	} catch (err) {
	  var index = __webpack_require__(47);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = toArray;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(50);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(39);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import isWindow from './isWindow';
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	function buffer(fn, ms) {
	  var timer = void 0;
	
	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }
	
	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }
	
	  bufferFn.clear = clear;
	
	  return bufferFn;
	}
	
	var propTypes = {
	  childrenProps: _propTypes2.default.object,
	  align: _propTypes2.default.object.isRequired,
	  target: _propTypes2.default.func,
	  onAlign: _propTypes2.default.func,
	  monitorBufferTime: _propTypes2.default.number,
	  monitorWindowResize: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  children: _propTypes2.default.any
	};
	
	var defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	var Align = function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    return _this;
	  }
	
	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      this.forceAlign();
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };
	
	  Align.prototype.render = function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;
	
	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  };
	
	  return Align;
	}(_react2.default.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.startMonitorWindowResize = function () {
	    if (!_this2.resizeHandler) {
	      _this2.bufferMonitor = buffer(_this2.forceAlign, _this2.props.monitorBufferTime);
	      _this2.resizeHandler = (0, _addEventListener2.default)(window, 'resize', _this2.bufferMonitor);
	    }
	  };
	
	  this.stopMonitorWindowResize = function () {
	    if (_this2.resizeHandler) {
	      _this2.bufferMonitor.clear();
	      _this2.resizeHandler.remove();
	      _this2.resizeHandler = null;
	    }
	  };
	
	  this.forceAlign = function () {
	    var props = _this2.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(_this2);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  };
	};
	
	;
	
	Align.defaultProps = defaultProps;
	Align.propTypes = propTypes;
	
	exports.default = Align;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alignPoint = exports.alignElement = undefined;
	
	var _alignElement = __webpack_require__(51);
	
	var _alignElement2 = _interopRequireDefault(_alignElement);
	
	var _alignPoint = __webpack_require__(62);
	
	var _alignPoint2 = _interopRequireDefault(_alignPoint);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.alignElement = _alignElement2['default'];
	exports.alignPoint = _alignPoint2['default'];
	exports['default'] = _alignElement2['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _align = __webpack_require__(52);
	
	var _align2 = _interopRequireDefault(_align);
	
	var _getOffsetParent = __webpack_require__(56);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(55);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _getRegion = __webpack_require__(59);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);
	
	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}
	
	function alignElement(el, refNode, align) {
	  var target = align.target || refNode;
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	
	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
	
	  return (0, _align2['default'])(el, refNodeRegion, align, isTargetNotOutOfVisible);
	}
	
	alignElement.__getOffsetParent = _getOffsetParent2['default'];
	
	alignElement.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = alignElement;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getVisibleRectForElement = __webpack_require__(55);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(58);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(59);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(60);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// http://yiminghe.iteye.com/blog/1124720
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	} /**
	   * align dom node flexibly
	   * @author yiminghe@gmail.com
	   */
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	/**
	 * @param el
	 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
	 * @param align
	 */
	function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, tgtRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
	
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
	
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
	    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
	    // 检查反下后的位置是否可以放下了，如果仍然放不下：
	    // 1. 复原修改过的定位参数
	    if (isStillFailX || isStillFailY) {
	      points = align.points;
	      offset = align.offset || [0, 0];
	      targetOffset = align.targetOffset || [0, 0];
	    }
	    // 2. 只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
	    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform,
	    ignoreShake: align.ignoreShake
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	exports['default'] = doAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _propertyUtils = __webpack_require__(54);
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = void 0;
	
	// https://stackoverflow.com/a/3485654/3040605
	function forceRelayout(elem) {
	  var originalStyle = elem.style.display;
	  elem.style.display = 'none';
	  elem.offsetHeight; // eslint-disable-line
	  elem.style.display = originalStyle;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}
	
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  // force relayout
	  forceRelayout(elem);
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  forceRelayout(elem);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}
	
	function setOffset(elem, offset, option) {
	  if (option.ignoreShake) {
	    var oriOffset = getOffset(elem);
	
	    var oLeft = oriOffset.left.toFixed(0);
	    var oTop = oriOffset.top.toFixed(0);
	    var tLeft = offset.left.toFixed(0);
	    var tTop = offset.top.toFixed(0);
	
	    if (oLeft === tLeft && oTop === tTop) {
	      return;
	    }
	  }
	
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	
	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;
	
	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};
	
	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}
	
	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}
	
	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}
	
	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}
	
	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}
	
	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}
	
	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}
	
	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;
	
	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(56);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _isAncestorFixed = __webpack_require__(57);
	
	var _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;
	
	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }
	
	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
	
	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }
	
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }
	
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getAlignOffset = __webpack_require__(61);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	
	  var x = region.left;
	  var y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _align = __webpack_require__(52);
	
	var _align2 = _interopRequireDefault(_align);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
	 * If client position provided, will internal convert to page position.
	 */
	
	function alignPoint(el, tgtPoint, align) {
	  var pageX = void 0;
	  var pageY = void 0;
	
	  var doc = _utils2['default'].getDocument(el);
	  var win = doc.defaultView || doc.parentWindow;
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	
	  if ('pageX' in tgtPoint) {
	    pageX = tgtPoint.pageX;
	  } else {
	    pageX = scrollX + tgtPoint.clientX;
	  }
	
	  if ('pageY' in tgtPoint) {
	    pageY = tgtPoint.pageY;
	  } else {
	    pageY = scrollY + tgtPoint.clientY;
	  }
	
	  var tgtRegion = {
	    left: pageX,
	    top: pageY,
	    width: 0,
	    height: 0
	  };
	
	  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
	
	  // Provide default target point
	  var points = [align.points[0], 'cc'];
	
	  return (0, _align2['default'])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
	}
	
	exports['default'] = alignPoint;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };
	
	  return Fade;
	}(_react2["default"].Component);
	
	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;
	
	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(65);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Message2["default"];
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeNotification = __webpack_require__(66);
	
	var _beeNotification2 = _interopRequireDefault(_beeNotification);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultDuration = 1.5;
	var defaultTop = 0;
	var defaultBottom = 48;
	var bottom = 90;
	var padding = 30;
	var width = 200;
	var messageInstance = void 0;
	var key = 1;
	var clsPrefix = 'u-message';
	var noop = function noop() {};
	
	var positionObj = {
	    "top": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            top: defaultTop,
	            width: "100%"
	        },
	        transitionName: 'top'
	    },
	    "bottom": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            bottom: defaultBottom,
	            width: "100%"
	        },
	        transitionName: 'bottom'
	    },
	    "topRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "bottomRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "topLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    },
	    "bottomLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    }
	};
	
	function getMessageInstance() {
	    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';
	    var callback = arguments[1];
	
	    if (messageInstance) {
	        callback(messageInstance);
	        return;
	    }
	    var style = positionObj[position].notificationStyle;
	    _beeNotification2["default"].newInstance({
	        clsPrefix: clsPrefix,
	        transitionName: clsPrefix + '-' + positionObj[position].transitionName,
	        style: style, // 覆盖原来的样式
	        position: ''
	    }, function (instance) {
	        messageInstance = instance;
	        callback(instance);
	    });
	}
	
	function notice(content, duration, type, onClose, position, style) {
	    var iconType = {
	        info: 'uf uf-i-c-2',
	        success: 'uf uf-correct',
	        danger: 'uf uf-close-c',
	        warning: 'uf uf-exc-t',
	        light: 'uf uf-notification',
	        dark: 'uf uf-bubble',
	        news: 'uf uf-bell',
	        infolight: 'uf uf-i-c-2',
	        successlight: 'uf uf-correct',
	        dangerlight: 'uf uf-close-c',
	        warninglight: 'uf uf-exc-t'
	    }[type];
	
	    var positionStyle = positionObj[position].messageStyle;
	
	    getMessageInstance(position, function (instance) {
	        instance.notice({
	            key: key,
	            duration: duration,
	            color: type,
	            style: _extends({}, positionStyle, style),
	            content: _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-icon' },
	                    _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) })
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-content' },
	                    content
	                )
	            ),
	            onClose: onClose
	        });
	    });
	    return function () {
	        var target = key++;
	        return function () {
	            if (messageInstance) {
	                messageInstance.removeNotice(target);
	            }
	        };
	    }();
	}
	
	exports["default"] = {
	    create: function create(obj) {
	        var content = obj.content || '';
	        var duration = _typeof(obj.duration) == undefined ? defaultDuration : obj.duration;
	        var color = obj.color || 'dark';
	        var onClose = obj.onClose || noop;
	        var position = obj.position || "top";
	        var style = obj.style || {};
	        return notice(content, duration, color, onClose, position, style);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	        }
	        if (options.clsPrefix !== undefined) {
	            clsPrefix = options.clsPrefix;
	        }
	        if (options.defaultBottom !== undefined) {
	            defaultBottom = options.defaultBottom;
	        }
	        if (options.bottom !== undefined) {
	            bottom = options.bottom;
	        }
	        if (options.width !== undefined) {
	            bottom = options.width;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Notification = __webpack_require__(67);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Notification2["default"];
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeAnimate = __webpack_require__(68);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _createChainedFunction = __webpack_require__(36);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Notice = __webpack_require__(73);
	
	var _Notice2 = _interopRequireDefault(_Notice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var seed = 0;
	var now = Date.now();
	
	function getUuid() {
	  return 'uNotification_' + now + '_' + seed++;
	}
	
	var propTypes = {
	  show: _propTypes2["default"].bool,
	  clsPrefix: _propTypes2["default"].string,
	  style: _propTypes2["default"].object,
	  position: _propTypes2["default"].oneOf(['topRight', 'bottomRight', '']),
	  transitionName: _propTypes2["default"].string,
	  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
	};
	
	var defaultProps = {
	  clsPrefix: 'u-notification',
	  animation: 'fade',
	  position: 'topRight'
	};
	
	var Notification = function (_Component) {
	  _inherits(Notification, _Component);
	
	  function Notification(props) {
	    _classCallCheck(this, Notification);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      notices: []
	    };
	    _this.add = _this.add.bind(_this);
	    _this.remove = _this.remove.bind(_this);
	
	    return _this;
	  }
	
	  Notification.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.clsPrefix + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Notification.prototype.add = function add(notice) {
	    var key = notice.key = notice.key || getUuid();
	    this.setState(function (previousState) {
	      var notices = previousState.notices;
	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        return {
	          notices: notices.concat(notice)
	        };
	      }
	    });
	  };
	
	  Notification.prototype.remove = function remove(key) {
	    this.setState(function (previousState) {
	      return {
	        notices: previousState.notices.filter(function (notice) {
	          return notice.key !== key;
	        })
	      };
	    });
	  };
	
	  Notification.prototype.render = function render() {
	    var _this2 = this,
	        _classes;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        position = _props.position,
	        style = _props.style;
	
	    var noticeNodes = this.state.notices.map(function (notice) {
	      var onClose = (0, _createChainedFunction2["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
	      return _react2["default"].createElement(
	        _Notice2["default"],
	        _extends({
	          clsPrefix: clsPrefix
	        }, notice, {
	          onClose: onClose
	        }),
	        notice.content
	      );
	    });
	    var classes = (_classes = {}, _defineProperty(_classes, clsPrefix, 1), _defineProperty(_classes, className, !!className), _classes);
	    if (position) {
	      classes[clsPrefix + '-' + position] = !!position;
	    }
	
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className, classes), style: style },
	      _react2["default"].createElement(
	        _beeAnimate2["default"],
	        { transitionName: this.getTransitionName() },
	        noticeNodes
	      )
	    );
	  };
	
	  return Notification;
	}(_react.Component);
	
	;
	
	Notification.propTypes = propTypes;
	Notification.defaultProps = defaultProps;
	
	Notification.newInstance = function newNotificationInstance(properties, callback) {
	  var props = properties || {};
	  var div = document.createElement('div');
	  document.body.appendChild(div);
	
	  var called = false;
	  function ref(notification) {
	    if (called) {
	      return;
	    }
	    called = true;
	    callback({
	      notice: function notice(noticeProps) {
	        notification.add(noticeProps);
	      },
	      removeNotice: function removeNotice(key) {
	        notification.remove(key);
	      },
	
	      component: notification,
	      destroy: function destroy() {
	        _reactDom2["default"].unmountComponentAtNode(div);
	        document.body.removeChild(div);
	      }
	    });
	  }
	  _reactDom2["default"].render(_react2["default"].createElement(Notification, _extends({}, props, { ref: ref })), div);
	};
	
	exports["default"] = Notification;
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Animate = __webpack_require__(69);
	
	var _Animate2 = _interopRequireDefault(_Animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(70);
	
	var _AnimateChild = __webpack_require__(71);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(72);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var defaultKey = 'u_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var propTypes = {
	  component: _propTypes2["default"].any,
	  animation: _propTypes2["default"].object,
	  transitionName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  transitionEnter: _propTypes2["default"].bool,
	  transitionAppear: _propTypes2["default"].bool,
	  exclusive: _propTypes2["default"].bool,
	  transitionLeave: _propTypes2["default"].bool,
	  onEnd: _propTypes2["default"].func,
	  onEnter: _propTypes2["default"].func,
	  onLeave: _propTypes2["default"].func,
	  onAppear: _propTypes2["default"].func,
	  showProp: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  animation: {},
	  component: 'span',
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var Animate = function (_Component) {
	  _inherits(Animate, _Component);
	
	  function Animate(props) {
	    _classCallCheck(this, Animate);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performAppear = _this.performAppear.bind(_this);
	    _this.handleDoneAdding = _this.handleDoneAdding.bind(_this);
	    _this.performLeave = _this.performLeave.bind(_this);
	
	    _this.performLeave = _this.performLeave.bind(_this);
	    _this.handleDoneLeaving = _this.handleDoneLeaving.bind(_this);
	    _this.isValidChildByKey = _this.isValidChildByKey.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  Animate.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.mounted = true;
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this2.performAppear(child.key);
	      }
	    });
	  };
	
	  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };
	
	  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this3 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this3.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this3.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this3.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this3.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this3.keysToLeave.push(key);
	      }
	    });
	  };
	
	  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  Animate.prototype.performEnter = function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  };
	
	  Animate.prototype.performAppear = function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  };
	
	  Animate.prototype.handleDoneAdding = function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  Animate.prototype.performLeave = function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  };
	
	  Animate.prototype.handleDoneLeaving = function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.mounted && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	
	  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  };
	
	  Animate.prototype.stop = function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  };
	
	  Animate.prototype.render = function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  };
	
	  return Animate;
	}(_react.Component);
	
	;
	Animate.defaultProps = defaultProps;
	Animate.propTypes = Animate.propTypes;
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _util = __webpack_require__(72);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var propTypes = {
	  children: _propTypes2["default"].any
	};
	
	var AnimateChild = function (_Component) {
	  _inherits(AnimateChild, _Component);
	
	  function AnimateChild(props) {
	    _classCallCheck(this, AnimateChild);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.transition = _this.transition.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stop();
	  };
	
	  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  };
	
	  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
	    var _this2 = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this2.stopper = null;
	      finishCallback();
	    };
	    if ((_tinperBeeCore.cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _tinperBeeCore.cssAnimation)(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  };
	
	  AnimateChild.prototype.stop = function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  };
	
	  AnimateChild.prototype.render = function render() {
	    return this.props.children;
	  };
	
	  return AnimateChild;
	}(_react.Component);
	
	;
	
	AnimateChild.propTypes = propTypes;
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  duration: _propTypes2["default"].number,
	  onClose: _propTypes2["default"].func,
	  children: _propTypes2["default"].any,
	  color: _propTypes2["default"].oneOf(['light']),
	  title: _propTypes2["default"].any
	};
	
	function noop() {}
	
	var defaultProps = {
	  onEnd: noop,
	  onClose: noop,
	  duration: 4.5,
	  closable: true
	};
	
	var Notice = function (_React$Component) {
	  _inherits(Notice, _React$Component);
	
	  function Notice(props) {
	    _classCallCheck(this, Notice);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.clearCloseTimer = _this.clearCloseTimer.bind(_this);
	    _this.close = _this.close.bind(_this);
	    return _this;
	  }
	
	  Notice.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    if (this.props.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this2.close();
	      }, this.props.duration * 1000);
	    }
	  };
	
	  Notice.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearCloseTimer();
	  };
	
	  Notice.prototype.clearCloseTimer = function clearCloseTimer() {
	    if (this.closeTimer) {
	      clearTimeout(this.closeTimer);
	      this.closeTimer = null;
	    }
	  };
	
	  Notice.prototype.close = function close() {
	    this.clearCloseTimer();
	    this.props.onClose();
	  };
	
	  Notice.prototype.render = function render() {
	    var _classes;
	
	    var _props = this.props,
	        closable = _props.closable,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        style = _props.style,
	        children = _props.children,
	        color = _props.color,
	        title = _props.title;
	
	    var componentClass = clsPrefix + '-notice';
	    var classes = (_classes = {}, _defineProperty(_classes, '' + componentClass, 1), _defineProperty(_classes, componentClass + '-closable', closable), _defineProperty(_classes, className, !!className), _classes);
	    if (color) {
	      classes[componentClass + '-' + color] = true;
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(classes), style: style, onClick: this.close },
	      _react2["default"].createElement(
	        'div',
	        { className: componentClass + '-content' },
	        title && _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-title' },
	          title
	        ),
	        _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-description' },
	          children
	        )
	      ),
	      closable ? _react2["default"].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
	        _react2["default"].createElement('span', { className: componentClass + '-close-x' })
	      ) : null
	    );
	  };
	
	  return Notice;
	}(_react2["default"].Component);
	
	;
	
	Notice.PropTypes = _propTypes2["default"];
	Notice.defaultProps = defaultProps;
	
	exports["default"] = Notice;
	module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var deselectCurrent = __webpack_require__(75);
	
	var defaultMessage = 'Copy to clipboard: #{key}, Enter';
	
	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}
	
	function copy(text, options) {
	  var debug, message, reselectPrevious, range, selection, mark, success = false;
	  if (!options) { options = {}; }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();
	
	    range = document.createRange();
	    selection = document.getSelection();
	
	    mark = document.createElement('span');
	    mark.textContent = text;
	    // reset user styles for span element
	    mark.style.all = 'unset';
	    // prevents scrolling to the end of the page
	    mark.style.position = 'fixed';
	    mark.style.top = 0;
	    mark.style.clip = 'rect(0, 0, 0, 0)';
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = 'pre';
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = 'text';
	    mark.style.MozUserSelect = 'text';
	    mark.style.msUserSelect = 'text';
	    mark.style.userSelect = 'text';
	
	    document.body.appendChild(mark);
	
	    range.selectNode(mark);
	    selection.addRange(range);
	
	    var successful = document.execCommand('copy');
	    if (!successful) {
	      throw new Error('copy command was unsuccessful');
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error('unable to copy using execCommand: ', err);
	    debug && console.warn('trying IE specific stuff');
	    try {
	      window.clipboardData.setData('text', text);
	      success = true;
	    } catch (err) {
	      debug && console.error('unable to copy using clipboardData: ', err);
	      debug && console.error('falling back to prompt');
	      message = format('message' in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == 'function') {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }
	
	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }
	
	  return success;
	}
	
	module.exports = copy;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	
	module.exports = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;
	
	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }
	
	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;
	
	    default:
	      active = null;
	      break;
	  }
	
	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();
	
	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }
	
	    active &&
	    active.focus();
	  };
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否是手风琴效果
	  accordion: _propTypes2["default"].bool,
	  //激活的项
	  activeKey: _propTypes2["default"].any,
	  //默认的激活的项
	  defaultActiveKey: _propTypes2["default"].any,
	  //选中函数
	  onSelect: _propTypes2["default"].func,
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};
	
	// TODO: Use uncontrollable.
	
	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);
	
	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleSelect = _this.handleSelect.bind(_this);
	
	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }
	
	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({ activeKey: key });
	  };
	
	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);
	
	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };
	
	        if (accordion) {
	          _extends(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }
	
	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };
	
	  return PanelGroup;
	}(_react2["default"].Component);
	
	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;
	
	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(78);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _propTypes2["default"].oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _propTypes2["default"].object,
	    /**
	     * @title 形状
	     */
	    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),
	
	    bordered: _propTypes2["default"].bool,
	    /**
	    * @title 类型
	    */
	    colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _propTypes2["default"].bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _propTypes2["default"].string,
	
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset']),
	    isSubmit: _propTypes2["default"].bool //是否作为form的提交按钮
	};
	
	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button',
	    bordered: false,
	    isSubmit: false
	};
	
	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }
	
	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            bordered = _props.bordered,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            isSubmit = _props.isSubmit,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix', 'isSubmit']);
	
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        //clsObj[`${clsPrefix}-border`] = bordered;
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };
	
	    return Button;
	}(_react.Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports["default"] = Button;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(80);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Icon
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 在iuap字符库，`type`参数值均以-分隔。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Demo1 = function (_Component) {
		_inherits(Demo1, _Component);
	
		function Demo1() {
			_classCallCheck(this, Demo1);
	
			return _possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
	
		Demo1.prototype.render = function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'tinper-icon-demo' },
				_react2['default'].createElement(
					'ul',
					{ className: 'icon_lists' },
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-wechat' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5FAE\u4FE1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-wechat'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-add-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u52A0'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-add-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-search' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u641C\u7D22'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-search'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-histogram-arrow-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u56FE\u8868 \u6298\u7EBF\u56FE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-histogram-arrow-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-close-bold' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5173\u95ED'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-close-bold'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-umbrella' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u96E8\u4F1E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-umbrella'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-qq' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'QQ'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-qq'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-4square-3' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5206\u7C7B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-4square-3'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-send' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u53D1\u9001'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-send'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-map' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5730\u56FE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-map'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-9square-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6807\u5B9A'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-9square-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-navmenu' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6C49\u5821\u5305'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-navmenu'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pc-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u663E\u793A\u5668'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pc-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-search-light-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'zoom'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-search-light-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-check-s-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4EFB\u52A1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-check-s-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pencil' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7F16\u8F91'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pencil'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-repeat' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u64A4\u9500'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-repeat'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-security-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5B89\u5168'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-security-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-lexi' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5973'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-lexi'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pencil-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7F16\u8F91'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pencil-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-del' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5220\u9664'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-del'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bi-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6BD4\u4EF7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bi-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pencil-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7F16\u8F91'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pencil-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-qrcode' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E8C\u7EF4\u7801'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-qrcode'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u514D\u8D39\u62A5\u4EF7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rmb-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-search-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u641C\u7D22'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-search-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bell' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u94C3\u94DB'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bell'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pass-3' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u673A\u68C0\u901A\u8FC7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pass-3'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-treearrow-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6811\u5F62\u7EBF'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-treearrow-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-training' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u57F9\u8BAD'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-training'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-group-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7EC4\u7EC7\u67B6\u6784'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-group-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-zoom-in' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'zoom-in'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-zoom-in'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-security-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5B89\u5168'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-security-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-baojia-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u62A5\u4EF7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-baojia-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rulerpen' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5B9A\u5236'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rulerpen'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-erpsearch' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'erp'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-erpsearch'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-group-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7EC4\u7EC7\u673A\u6784'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-group-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o-updown' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u540C\u6B65\u4E2D2-\u540C\u6B65'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cloud-o-updown'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-close-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5173\u95ED'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-close-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-add-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u52A0'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-add-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pc' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5DE5\u4F5C\u53F0'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pc'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rain' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7A7A\u6C14_\u96E8\u5929'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rain'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-nodata' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u65E0\u6570\u636E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-nodata'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-close-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5173\u95ED'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-close-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bohui-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5BA1\u6279-\u9A73\u56DE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bohui-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cloud' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cloud'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bag-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5546\u54C1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bag-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-table-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'made'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-table-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-anglearrowpointingtoright' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-anglearrowpointingtoright'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-exc-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u53F9\u53F7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-exc-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-group' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7EC4\u7EC7\u673A\u6784'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-group'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-personin-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8BA4\u8BC1\u6FC0\u6D3B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-personin-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-calendar' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'gm_\u65E5\u5386'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-calendar'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-add-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u52A0'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-add-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sync-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u540C\u6B65'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sync-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-grid' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'grid'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-grid'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-anglepointingtoleft' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-anglepointingtoleft'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-activate-3' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6FC0\u6D3B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-activate-3'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-caven' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7537'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-caven'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-back' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8FD4\u56DE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-back'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pass-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6388\u6743'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pass-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u663E\u793A\u6811'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-reduce-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-area' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u56FE\u8868\u56FE\u6807-\u9762\u79EF\u56FE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-area'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-flag' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u65D7\u5E1C'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-flag'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-box-o-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8D2D\u4E70\u76D2\u5B50'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-box-o-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-s-o-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E0B\u67B6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-s-o-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-s-o-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E0A\u67B6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-s-o-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-building' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4F01\u4E1A\u4FE1\u606F'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-building'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-tapp' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-tapp'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-treefolder' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u641C\u7D22'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-treefolder'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-advice' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u54A8\u8BE2'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-advice'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-2collayout' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5E8F\u5217\u5E03\u5C40'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-2collayout'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-check-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5BA1\u6279'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-check-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sign' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u91C7\u8D2D\u5408\u540C'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sign'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-listsearch' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u67E5\u770B\u8BE6\u60C5'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-listsearch'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-gridcaretarrowup' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5FC5\u586B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-gridcaretarrowup'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-eye-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u67E5\u770B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-eye-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-check-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8BB8\u53EF'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-check-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-seal' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5BA1\u6279'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-seal'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-erpbox' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'erp'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-erpbox'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rulerpen-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5B9A\u5236'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rulerpen-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-role' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u89D2\u8272'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-role'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-exc-c-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u63D0\u793A\u53F9\u53F7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-exc-c-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pad' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'pad'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pad'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-treefolder-closed' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'tree-new-sbling-node'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-treefolder-closed'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u51CF\u53F7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-reduce-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pass-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u901A\u8FC7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pass-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-setting' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7EF4\u62A4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-setting'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-close-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'ZSX\u53F7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-close-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-map-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5730\u56FE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-map-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-move' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u79FB\u52A8'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-move'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-2arrow-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-right' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-2arrow-right'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-left' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-c-o-left'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-plus' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'plus'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-plus'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-right' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-c-o-right'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-c-o-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-list-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6682\u65E0\u6570\u636E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-list-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E91\u4E0B\u8F7D'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cloud-o-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-nodata-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u65E0\u6548\u6570\u636E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-nodata-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-file-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6587\u6863\u6587\u4EF6-01'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-file-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-2arrow-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-notification' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6D88\u606F\u5587\u53ED'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-notification'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-piechart' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u56FE\u8868_\u997C'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-piechart'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E91_\u4E0A\u4F20'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cloud-o-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-close' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u53D6\u6D88'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-close'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-correct' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5BF9\u53F7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-correct'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-histogram-s-o-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u56FE\u8868\u5207\u6362'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-histogram-s-o-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-4square-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5E94\u7528\u4E2D\u5FC3'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-4square-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sunny' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14 '
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sunny'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-link' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u590D\u5236\u94FE\u63A5'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-link'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-eye' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u67E5\u770B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-eye'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-eye-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u67E5\u770B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-eye-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-qian' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7B7E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-qian'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-widgetab' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5C0F\u90E8\u4EF6\u6388\u6743'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-widgetab'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u62A5\u4EF7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rmb-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-link-off' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u65AD\u5F00\u94FE\u63A5'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-link-off'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-shang-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E0A\u67B6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-shang-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-xia-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E0B\u67B6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-xia-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-box-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u76D2\u5B50full'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-box-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pass-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6388\u6743'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pass-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'angle-arrow-down'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-right' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'angle-arrow-pointing-to-right'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-right'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-left' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'angle-pointing-to-left'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-left'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-box' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'archive-black-box'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-box'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-right' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'arrowhead-pointing-to-the-right'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-triangle-right'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-histogram-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'bar-graph-on-a-rectangle'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-histogram-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-book' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'book'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-book'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bookmark-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'bookmark-white'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bookmark-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-leaf' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'branch-with-leaves-black-shape'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-leaf'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bullseye' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'bullseye'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bullseye'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-gridcaretdown' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'camera-retro'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-gridcaretdown'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'caret-arrow-up'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-triangle-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'caret-down'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-triangle-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-down' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'cloud-storage-download'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cloud-down'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'cloud-storage-uploading-option'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cloud-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bubble' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'comment-black-oval-bubble-shape'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bubble'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bubble-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'comment-white-oval-bubble'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bubble-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-copy' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'copy-document'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-copy'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-correct-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'correct-symbol'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-correct-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-2arrow-left' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'double-left-chevron'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-2arrow-left'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-down-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'down-arrow'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-down-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-download' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'download-to-storage-drive'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-download'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-earth' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'earth-globe'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-earth'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-mail-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'envelope-of-white-paper'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-mail-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-mail' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'envelope'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-mail'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-exc' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'exclamation'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-exc'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-externallink' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'external-link-symbol'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-externallink'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-video' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'facetime-button'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-video'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-films' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'film-strip-with-two-photograms'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-films'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-folder' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'folder-closed-black-shape'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-folder'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-folder-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'folder-white-shape'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-folder-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-4square' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'four-black-squares'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-4square'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-gift' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'gift-box'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-gift'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-github-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'github-logo'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-github-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-github-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'github-sign'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-github-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-heart-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'heart-shape-outline'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-heart-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-heart' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'heart-shape-silhouette'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-heart'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-home' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'home'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-home'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-i-c-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'information-button'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-i-c-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-i' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'information-symbol'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-i'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-triangle-left' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'left-arrow'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-triangle-left'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-symlist' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'listing-option'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-symlist'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-left-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'long-arrow-pointing-to-left'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-left-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-right-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'long-arrow-pointing-to-the-right'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-right-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-up-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'long-arrow-pointing-up'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-up-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'minus-sign-inside-a-black-circle'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-reduce-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-reduce-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'minus-sign-inside-a-black-rounded-square-shape'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-reduce-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-minus' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'minus-symbol'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-minus'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-mobile' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'mobile-phone'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-mobile'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bell-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'musical-bell-outline'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bell-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-9square' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'nine-black-tiles'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-9square'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-numlist' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'numbered-list'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-numlist'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-folderopen-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'open-folder-outline'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-folderopen-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-treefolderopen' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'open-folder'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-treefolderopen'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-mac' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'open-laptop-computer'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-mac'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-camera' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'photo-camera'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-camera'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-picture' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'picture'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-picture'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-play' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'play-sign'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-play'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-play-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'play-video-button'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-play-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-qm-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'question-mark-on-a-circular-black-background'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-qm-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-qm' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'question-sign'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-qm'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-navmenu-light' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'reorder-option'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-navmenu-light'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-settings' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'settings'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-settings'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cart' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'shopping-cart-black-shape'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cart'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-histogram' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'signal-bars'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-histogram'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-finetune' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'sort-arrows-couple-pointing-up-and-down'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-finetune'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sortup' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'sort-by-attributes-interface-button-option'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sortup'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sortdown' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'sort-by-attributes'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sortdown'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sort19' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'sort-by-numeric-order'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sort19'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sort91' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'sort-by-order'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sort91'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-za' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'sort-reverse-alphabetical-order'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-za'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-star-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'star-1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-star-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-star-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'star-half-empty'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-star-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-star' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'star'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-star'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-luggage' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'suitcase-with-white-details'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-luggage'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-table' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'table-grid'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-table'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-tel' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'telephone-handle-silhouette'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-tel'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-tel-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'telephone-symbol-button'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-tel-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-terminal' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'terminal'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-terminal'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-file' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'text-file-1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-file'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-file-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'text-file'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-file-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-3dot-h' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'three-small-square-shapes'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-3dot-h'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-time-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'time'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-time-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-upload' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'upload'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-upload'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-3dot-v' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'vertical-ellipsis'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-3dot-v'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rmb' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'yen-symbol'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rmb'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-c-o-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-reject-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u9A73\u56DE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-reject-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-barcode' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'barcode-1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-barcode'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-zoom-out' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'zoom-out'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-zoom-out'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-exc-t-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E09\u89D2\u53F9\u53F7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-exc-t-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-pass' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u901A\u8FC7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-pass'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-flow' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5173\u7CFB\u7F51\u7EDC'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-flow'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-add-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u52A0'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-add-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-right-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-c-o-right-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-shelf-on' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E0A\u67B6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-shelf-on'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-shelf-off' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E0B\u67B6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-shelf-off'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-file-o-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6587\u4EF6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-file-o-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-truck-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5230\u8D27\u786E\u8BA4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-truck-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-super' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u529F\u80FD\u5F3A\u5927'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-super'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-equipment' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8BBE\u5907'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-equipment'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-c-o-left-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-c-o-left-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-files-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8D44\u6E90\u6587\u4EF6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-files-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cloud-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4E91'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cloud-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-s-o-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5BF9\u8D26'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rmb-s-o-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-3dot-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BA1\u7406\u4E2D\u5FC3'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-3dot-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-dafeng' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14_\u5927\u98CE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-dafeng'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-baoxue' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14_\u66B4\u96EA'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-baoxue'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bingbao' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14_\u51B0\u96F9'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bingbao'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-fengbao' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14_\u98CE\u66B4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-fengbao'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-xiaoyu' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14_\u5C0F\u96E8'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-xiaoyu'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-zhenxue' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14_\u9635\u96EA'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-zhenxue'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-zhongyu' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5929\u6C14_\u4E2D\u96E8'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-zhongyu'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-es' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'ES'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-es'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-flow-o-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6D41\u7A0B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-flow-o-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-activate-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6FC0\u6D3B-01'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-activate-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-flow-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6D41\u7A0B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-flow-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bulb-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6280\u672F\u652F\u6301'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bulb-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-mi-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5FC5\u586B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-mi-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-top-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8FD4\u56DE\u9876\u90E8'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-top-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-creditcard' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'credit-card'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-creditcard'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-align-center' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'align-center'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-align-center'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-align-justify' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'align-justify'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-align-justify'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-align-left' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'align-left'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-align-left'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-align-right' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'align-right'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-align-right'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-ju-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u62D2'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-ju-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-truck' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8D27\u5230\u4ED8\u6B3E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-truck'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-setting-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6D41\u7A0B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-setting-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-users-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u697C\u5B87\u56FE\u6807_\u7528\u6237\u7EC4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-users-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bag-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5546\u54C1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bag-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cai-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u91C7\u8D2D'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cai-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-listcheck' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5B9A\u6807'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-listcheck'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-users' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7FA4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-users'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-i-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u67E5\u770B\u8BE6\u60C5'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-i-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-building-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4F01\u4E1A\u4FE1\u606F'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-building-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u62A5\u4EF7\u7BA1\u7406'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rmb-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-reject' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5DF2\u9A73\u56DE'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-reject'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-9dot' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u83DC\u5355'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-9dot'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-loadingstate' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'loading'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-loadingstate'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-gateway' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7F51\u5173'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-gateway'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-ticket-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u53D1\u7968'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-ticket-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-userset' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7BA1\u7406\u4E2D\u5FC3'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-userset'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-puzzle-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7EC4\u4EF6'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-puzzle-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-box-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7269\u6599\u7BA1\u7406'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-box-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bulb' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6FC0\u6D3B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bulb'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-exc-t' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u611F\u53F9\u53F7_icon'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-exc-t'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-rmb-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u62A5\u4EF7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-rmb-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-table-s-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u53D1\u7968'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-table-s-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-umbrella-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4F1E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-umbrella-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-dropbox' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'dropbox'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-dropbox'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-search-light' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u641C\u7D22-\u641C\u7D22'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-search-light'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-cart-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'shopping-cart-black-shape'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-cart-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-kero-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'kero'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-kero-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-uba-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'uba'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-uba-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-tinperzc-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'tinperzc'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-tinperzc-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-tinperzch-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'tinperzch'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-tinperzch-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-iuap-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'iuap'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-iuap-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-iuapdesign-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'iuapdesignz'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-iuapdesign-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-bee-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'bee'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-bee-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-neoui-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'neoui'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-neoui-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-sparrow-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'sparrow'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-sparrow-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-tinpercn-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'tinpercn'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-tinpercn-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-tinperen-col' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'tinperen'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-tinperen-col'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-arrow-up' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'angle-arrow-down'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-arrow-up'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-mailsym' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'webmail'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-mailsym'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-print' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u529E\u516C\u7528\u54C1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-print'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-ticket-3' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u62A5\u9500'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-ticket-3'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-loan' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u501F\u6B3E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-loan'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-ticket-2' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u51ED\u8BC1\u4E2D\u5FC3'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-ticket-2'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-offwork' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8BF7\u5047'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-offwork'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-todolist' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5F85\u529E'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-todolist'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-personin' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5458\u5DE5\u5165\u804C'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-personin'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-ticket' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7968\u52A1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-ticket'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-linechart' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5C0Ficon-\u56FE\u8868'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-linechart'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-4leaf' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5E94\u7528\u4E2D\u5FC3'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-4leaf'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-listset' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4FE1\u606F\u7EF4\u62A4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-listset'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-qi-c-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u4F01\u4E1A\u8BA4\u8BC1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-qi-c-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-exc-c' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u53F9\u53F7'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-exc-c'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-code' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u96C6\u6210\u5F00\u53D1'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-code'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-plug-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u70ED\u62D4\u63D2'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-plug-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-search-s' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u641C\u7D22'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-search-s'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-treeadd' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'tree-new-sbling-node'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-treeadd'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-mi' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5FC5\u586B'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-mi'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-treeline-copy' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u6811\u5F62\u7EBF'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-treeline-copy'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-listwithdots' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5217\u8868\u9879'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-listwithdots'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-gridlogo' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'Grid'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-gridlogo'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-magnifyingglass' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u641C\u7D22'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-magnifyingglass'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-anglearrowdown' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u5411\u4E0B\u7BAD\u5934'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-anglearrowdown'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-yongyouyunchnen' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7528\u53CB\u4E91\uFF08\u5C0F\uFF09'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-yongyouyunchnen'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-yycloud' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7528\u53CB\u4E91'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-yycloud'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-funnel-o' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u7B5B\u9009'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-funnel-o'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-filter' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u8FC7\u6EE4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-filter'
						)
					),
					_react2['default'].createElement(
						'li',
						null,
						_react2['default'].createElement(_src2['default'], { type: 'uf-filterno' }),
						_react2['default'].createElement(
							'div',
							{ className: 'name' },
							'\u53D6\u6D88\u8FC7\u6EE4'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'fontclass' },
							'.uf-filterno'
						)
					)
				)
			);
		};
	
		return Demo1;
	}(_react.Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(81);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _Icon2['default'];
	module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
		type: _propTypes2['default'].string
	
	};
	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		clsPrefix: 'uf'
	};
	
	var Icon = function (_Component) {
		_inherits(Icon, _Component);
	
		function Icon(props) {
			_classCallCheck(this, Icon);
	
			return _possibleConstructorReturn(this, _Component.call(this, props));
		}
	
		Icon.prototype.render = function render() {
			var _props = this.props,
			    type = _props.type,
			    className = _props.className,
			    clsPrefix = _props.clsPrefix,
			    others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);
	
			var clsObj = {};
	
			var classNames = (0, _classnames2['default'])(clsPrefix, type);
	
			return _react2['default'].createElement('i', _extends({}, others, { className: (0, _classnames2['default'])(classNames, className) }));
		};
	
		return Icon;
	}(_react.Component);
	
	Icon.defaultProps = defaultProps;
	Icon.propTypes = propTypes;
	
	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map