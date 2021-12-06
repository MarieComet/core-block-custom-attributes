/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes/sidebarSelect.js":
/*!*****************************************!*\
  !*** ./src/attributes/sidebarSelect.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* Add custom attribute to image block, in Sidebar */
const {
  __
} = wp.i18n; // Enable custom attributes on Image block

const enableSidebarSelectOnBlocks = ['core/image'];
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl
} = wp.components;

/**
 * Declare our custom attribute
 */

const setSidebarSelectAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableSidebarSelectOnBlocks.includes(name)) {
    return settings;
  }

  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      imageAttribute: {
        type: 'string'
      }
    })
  });
};

wp.hooks.addFilter('blocks.registerBlockType', 'custom-attributes/set-sidebar-select-attribute', setSidebarSelectAttribute);
/**
 * Add Custom Select to Image Sidebar
 */

const withSidebarSelect = createHigherOrderComponent(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
    }

    const {
      attributes,
      setAttributes
    } = props;
    const {
      imageAttribute
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Image Custom Attributes')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __('Custom Attribute'),
      value: imageAttribute,
      options: [{
        label: __('None'),
        value: ''
      }, {
        label: __('One'),
        value: 'one'
      }],
      onChange: value => {
        setAttributes({
          imageAttribute: value
        });
      }
    }))));
  };
}, 'withSidebarSelect');
wp.hooks.addFilter('editor.BlockEdit', 'custom-attributes/with-sidebar-select', withSidebarSelect);
/**
 * Add custom class to block in Edit
 */

const withSidebarSelectProp = createHigherOrderComponent(BlockListBlock => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }

    const {
      attributes
    } = props;
    const {
      imageAttribute
    } = attributes;

    if (imageAttribute) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: 'has-option-' + imageAttribute
      }));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
  };
}, 'withSidebarSelectProp');
wp.hooks.addFilter('editor.BlockListBlock', 'custom-attributes/with-sidebar-select-prop', withSidebarSelectProp);
/**
 * Save our custom attribute
 */

const saveSidebarSelectAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
    const {
      imageAttribute
    } = attributes;

    if (imageAttribute) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, 'has-option-' + imageAttribute);
    }
  }

  return extraProps;
};

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'custom-attributes/save-sidebar-select-attribute', saveSidebarSelectAttribute);

/***/ }),

/***/ "./src/attributes/toolbarButton.js":
/*!*****************************************!*\
  !*** ./src/attributes/toolbarButton.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* Add custom attribute to paragraph block, in Toolbar */
const {
  __
} = wp.i18n; // Enable custom attributes on Paragraph block

const enableToolbarButtonOnBlocks = ['core/paragraph'];
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  BlockControls
} = wp.blockEditor;
const {
  ToolbarGroup,
  ToolbarButton
} = wp.components;

/**
 * Declare our custom attribute
 */

const setToolbarButtonAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableToolbarButtonOnBlocks.includes(name)) {
    return settings;
  }

  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      paragraphAttribute: {
        type: 'string'
      }
    })
  });
};

wp.hooks.addFilter('blocks.registerBlockType', 'custom-attributes/set-toolbar-button-attribute', setToolbarButtonAttribute);
/**
 * Add Custom Button to Paragraph Toolbar
 */

const withToolbarButton = createHigherOrderComponent(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!enableToolbarButtonOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
    }

    const {
      attributes,
      setAttributes
    } = props;
    const {
      paragraphAttribute
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, {
      group: "block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarButton, {
      icon: "format-status",
      label: __('Custom Button', 'core-block-custom-attributes'),
      isActive: paragraphAttribute === 'custom',
      onClick: () => {
        if (paragraphAttribute === 'custom') {
          setAttributes({
            paragraphAttribute: false
          });
        } else {
          setAttributes({
            paragraphAttribute: 'custom'
          });
        }
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props));
  };
}, 'withToolbarButton');
wp.hooks.addFilter('editor.BlockEdit', 'custom-attributes/with-toolbar-button', withToolbarButton);
/**
 * Add custom class to block in Edit
 */

const withToolbarButtonProp = createHigherOrderComponent(BlockListBlock => {
  return props => {
    // If current block is not allowed
    if (!enableToolbarButtonOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }

    const {
      attributes
    } = props;
    const {
      paragraphAttribute
    } = attributes;

    if (paragraphAttribute && 'custom' === paragraphAttribute) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: 'has-custom-attribute'
      }));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
  };
}, 'withToolbarButtonProp');
wp.hooks.addFilter('editor.BlockListBlock', 'custom-attributes/with-toolbar-button-prop', withToolbarButtonProp);
/**
 * Save our custom attribute
 */

const saveToolbarButtonAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (enableToolbarButtonOnBlocks.includes(blockType.name)) {
    const {
      paragraphAttribute
    } = attributes;

    if (paragraphAttribute && 'custom' === paragraphAttribute) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, 'has-custom-attribute');
    }
  }

  return extraProps;
};

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'custom-attributes/save-toolbar-button-attribute', saveToolbarButtonAttribute);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes_toolbarButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes/toolbarButton */ "./src/attributes/toolbarButton.js");
/* harmony import */ var _attributes_sidebarSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes/sidebarSelect */ "./src/attributes/sidebarSelect.js");


}();
/******/ })()
;
//# sourceMappingURL=index.js.map