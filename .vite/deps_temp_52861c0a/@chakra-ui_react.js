import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  GenericAvatarIcon,
  useAvatarStyles
} from "./chunk-BGNI62M7.js";
import {
  Image,
  Img,
  useImage
} from "./chunk-GZQHLS3B.js";
import {
  AnimatePresence,
  Menu,
  MenuButton,
  MenuCommand,
  MenuDescendantsProvider,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  MenuProvider,
  createDescendantContext,
  cssVars,
  getAllFocusable as getAllFocusable2,
  getScrollParent,
  lazyDisclosure,
  mergeRefs,
  motion,
  useAnimationState,
  useCallbackRef,
  useClickable,
  useControllableState,
  useDisclosure,
  useEventListener,
  useFocusOnHide,
  useFocusOnShow,
  useIsPresent,
  useMenu,
  useMenuButton,
  useMenuContext,
  useMenuDescendant,
  useMenuDescendants,
  useMenuDescendantsContext,
  useMenuItem,
  useMenuList,
  useMenuOption,
  useMenuOptionGroup,
  useMenuPositioner,
  useMenuState,
  useMenuStyles,
  useMergeRefs,
  usePopper,
  usePresence,
  useUpdateEffect
} from "./chunk-3OYLGDO6.js";
import {
  AbsoluteCenter,
  AspectRatio,
  Badge,
  Box,
  Center,
  Circle,
  Code,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Highlight,
  Icon,
  Indicator,
  Kbd,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  Mark,
  OrderedList,
  SimpleGrid,
  Spacer,
  Square,
  Stack,
  StackDivider,
  StackItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
  arrayToObjectNotation,
  breakpoints,
  createIcon,
  useHighlight,
  useListStyles
} from "./chunk-H62JXO3L.js";
import {
  getValidChildren
} from "./chunk-EK3S4YIL.js";
import {
  CSSVars,
  ColorModeContext,
  ColorModeProvider,
  ColorModeScript,
  DarkMode,
  Global,
  GlobalStyle,
  LightMode,
  PanSession,
  StylesProvider,
  ThemeProvider,
  _extends,
  baseTheme,
  callAllHandlers as callAllHandlers2,
  cancelSync,
  chakra,
  compact,
  contains,
  cookieStorageManager,
  cookieStorageManagerSSR,
  createCookieStorageManager,
  createLocalStorageManager,
  createStylesContext,
  detectBrowser,
  es_default,
  extendBaseTheme,
  extendTheme,
  focus,
  forwardRef,
  getActiveElement,
  getAllFocusable,
  getBox,
  getFrameData,
  getOwnerDocument,
  getOwnerWindow,
  getPointerEventName,
  getScriptSrc,
  getToken,
  hasFocusWithin,
  isActiveElement,
  isBrowser,
  isChakraTheme,
  isRefObject,
  isTabbable,
  keyframes,
  localStorageManager,
  mergeThemeOverride,
  noop,
  require_react_is,
  requiredChakraThemeKeys,
  runIfFn as runIfFn2,
  shouldForwardProp,
  styled,
  theme,
  toCSSObject,
  useChakra,
  useColorMode,
  useColorModeValue,
  useComponentStyles__unstable,
  useMultiStyleConfig,
  useStyleConfig,
  useStyles,
  useTheme,
  useToken,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
  wrapPointerEventHandler
} from "./chunk-3Q5YLUQ7.js";
import {
  Portal,
  PortalManager,
  usePortalManager
} from "./chunk-TEEIS6KB.js";
import "./chunk-WXSKVWTA.js";
import {
  createContext
} from "./chunk-PPUG7X4A.js";
import {
  require_jsx_runtime,
  useSafeLayoutEffect
} from "./chunk-VSHG74IK.js";
import {
  addPrefix,
  ariaAttr,
  background,
  border,
  calc,
  callAll,
  callAllHandlers,
  color,
  createMultiStyleConfigHelpers,
  css,
  cssVar,
  cx,
  dataAttr,
  defineCssVars,
  defineStyle,
  defineStyleConfig,
  effect,
  filter,
  flattenTokens,
  flexbox,
  getCSSVar,
  getCss,
  grid,
  interactivity,
  isObject,
  isStyleProp,
  layout,
  layoutPropNames,
  list,
  omitThemingProps,
  others,
  position,
  propNames,
  pseudoPropNames,
  pseudoSelectors,
  resolveStyleConfig,
  ring,
  runIfFn,
  scroll,
  space,
  systemProps,
  textDecoration,
  toCSSVar,
  toVarDefinition,
  toVarReference,
  tokenToCSSVar,
  transform,
  transition,
  typography,
  warn
} from "./chunk-BHDLHQY3.js";
import {
  require_react
} from "./chunk-4JI2AD7N.js";
import {
  __commonJS,
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
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
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement4, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate2) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate2(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate2(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement4(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createNodeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!isNode2(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function isNode2(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode2);
            }
            if (propValue === null || isValidElement4(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode2(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode2(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range2) {
            selection.addRange(range2);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options) {
      var debug, message, reselectPrevious, range2, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range2 = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range2.selectNodeContents(mark);
        selection.addRange(range2);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range2);
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
    module.exports = copy2;
  }
});

// node_modules/@chakra-ui/css-reset/dist/chunk-B4LBJQ3X.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var css2 = String.raw;
var vhPolyfill = css2`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`;
var CSSPolyfill = () => (0, import_jsx_runtime.jsx)(Global, { styles: vhPolyfill });
var CSSReset = ({ scope = "" }) => (0, import_jsx_runtime.jsx)(
  Global,
  {
    styles: css2`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `
  }
);

// node_modules/@chakra-ui/react-env/dist/chunk-VMD3UMGK.mjs
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var EnvironmentContext = (0, import_react2.createContext)({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function useEnvironment({ defer } = {}) {
  const [, forceUpdate] = (0, import_react2.useReducer)((c) => c + 1, 0);
  useSafeLayoutEffect(() => {
    if (!defer)
      return;
    forceUpdate();
  }, [defer]);
  return (0, import_react2.useContext)(EnvironmentContext);
}
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = (0, import_react2.useRef)(null);
  const context = (0, import_react2.useMemo)(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => {
        var _a2, _b;
        return (_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) != null ? _b : document;
      },
      getWindow: () => {
        var _a2, _b;
        return (_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument.defaultView) != null ? _b : window;
      }
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return (0, import_jsx_runtime2.jsxs)(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && (0, import_jsx_runtime2.jsx)("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
EnvironmentProvider.displayName = "EnvironmentProvider";

// node_modules/@chakra-ui/provider/dist/chunk-3DDHO3UN.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var ChakraProvider = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetScope,
    resetCSS = true,
    theme: theme2 = {},
    environment,
    cssVarsRoot,
    disableEnvironment,
    disableGlobalStyle
  } = props;
  const _children = (0, import_jsx_runtime3.jsx)(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return (0, import_jsx_runtime3.jsx)(ThemeProvider, { theme: theme2, cssVarsRoot, children: (0, import_jsx_runtime3.jsxs)(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme2.config,
      children: [
        resetCSS ? (0, import_jsx_runtime3.jsx)(CSSReset, { scope: resetScope }) : (0, import_jsx_runtime3.jsx)(CSSPolyfill, {}),
        !disableGlobalStyle && (0, import_jsx_runtime3.jsx)(GlobalStyle, {}),
        portalZIndex ? (0, import_jsx_runtime3.jsx)(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};

// node_modules/@chakra-ui/toast/dist/chunk-LDADOVIM.mjs
var findById = (arr, id) => arr.find((toast) => toast.id === id);
function findToast(toasts, id) {
  const position2 = getToastPosition(toasts, id);
  const index = position2 ? toasts[position2].findIndex((toast) => toast.id === id) : -1;
  return {
    position: position2,
    index
  };
}
function getToastPosition(toasts, id) {
  for (const [position2, values] of Object.entries(toasts)) {
    if (findById(values, id)) {
      return position2;
    }
  }
}
function getToastStyle(position2) {
  const isRighty = position2.includes("right");
  const isLefty = position2.includes("left");
  let alignItems = "center";
  if (isRighty)
    alignItems = "flex-end";
  if (isLefty)
    alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems
  };
}
function getToastListStyle(position2) {
  const isTopOrBottom = position2 === "top" || position2 === "bottom";
  const margin = isTopOrBottom ? "0 auto" : void 0;
  const top = position2.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0;
  const bottom = position2.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0;
  const right = !position2.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0;
  const left = !position2.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0;
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin,
    top,
    bottom,
    right,
    left
  };
}

// node_modules/@chakra-ui/react-use-timeout/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
function useTimeout(callback, delay) {
  const fn = useCallbackRef(callback);
  (0, import_react3.useEffect)(() => {
    if (delay == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn]);
}

// node_modules/@chakra-ui/toast/dist/chunk-VXESY33O.mjs
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var toastMotionVariants = {
  initial: (props) => {
    const { position: position2 } = props;
    const dir = ["top", "bottom"].includes(position2) ? "y" : "x";
    let factor = ["top-right", "bottom-right"].includes(position2) ? 1 : -1;
    if (position2 === "bottom")
      factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};
var ToastComponent = (0, import_react4.memo)((props) => {
  const {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position: position2 = "bottom",
    duration = 5e3,
    containerStyle,
    motionVariants = toastMotionVariants,
    toastSpacing = "0.5rem"
  } = props;
  const [delay, setDelay] = (0, import_react4.useState)(duration);
  const isPresent = useIsPresent();
  useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent]);
  useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);
  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);
  const close = () => {
    if (isPresent)
      onRequestRemove();
  };
  (0, import_react4.useEffect)(() => {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);
  useTimeout(close, delay);
  const containerStyles = (0, import_react4.useMemo)(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: toastSpacing,
      ...containerStyle
    }),
    [containerStyle, toastSpacing]
  );
  const toastStyle = (0, import_react4.useMemo)(() => getToastStyle(position2), [position2]);
  return (0, import_jsx_runtime4.jsx)(
    motion.div,
    {
      layout: true,
      className: "chakra-toast",
      variants: motionVariants,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: onMouseEnter,
      onHoverEnd: onMouseLeave,
      custom: { position: position2 },
      style: toastStyle,
      children: (0, import_jsx_runtime4.jsx)(
        chakra.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: containerStyles,
          children: runIfFn(message, { id, onClose: close })
        }
      )
    }
  );
});
ToastComponent.displayName = "ToastComponent";

// node_modules/@chakra-ui/toast/dist/chunk-LHPMGMGT.mjs
function getToastPlacement(position2, dir) {
  var _a2;
  const computedPosition = position2 != null ? position2 : "bottom";
  const logicals = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  };
  const logical = logicals[computedPosition];
  return (_a2 = logical == null ? void 0 : logical[dir]) != null ? _a2 : computedPosition;
}

// node_modules/@chakra-ui/alert/dist/chunk-NEDBTDT2.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function CheckIcon(props) {
  return (0, import_jsx_runtime5.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime5.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function InfoIcon(props) {
  return (0, import_jsx_runtime5.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime5.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function WarningIcon(props) {
  return (0, import_jsx_runtime5.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime5.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}

// node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var Spinner = forwardRef((props, ref) => {
  const styles = useStyleConfig("Spinner", props);
  const {
    label = "Loading...",
    thickness = "2px",
    speed = "0.45s",
    emptyColor = "transparent",
    className,
    ...rest
  } = omitThemingProps(props);
  const _className = cx("chakra-spinner", className);
  const spinnerStyles = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: `${spin} ${speed} linear infinite`,
    ...styles
  };
  return (0, import_jsx_runtime6.jsx)(
    chakra.div,
    {
      ref,
      __css: spinnerStyles,
      className: _className,
      ...rest,
      children: label && (0, import_jsx_runtime6.jsx)(chakra.span, { srOnly: true, children: label })
    }
  );
});
Spinner.displayName = "Spinner";

// node_modules/@chakra-ui/alert/dist/chunk-XCES3W5V.mjs
var [AlertProvider, useAlertContext] = createContext({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
});
var [AlertStylesProvider, useAlertStyles] = createContext({
  name: `AlertStylesContext`,
  hookName: `useAlertStyles`,
  providerName: "<Alert />"
});
var STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
  loading: { icon: Spinner, colorScheme: "blue" }
};
function getStatusColorScheme(status) {
  return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
  return STATUSES[status].icon;
}

// node_modules/@chakra-ui/alert/dist/chunk-CUKBNH6U.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var AlertDescription = forwardRef(
  function AlertDescription2(props, ref) {
    const styles = useAlertStyles();
    const { status } = useAlertContext();
    const descriptionStyles = {
      display: "inline",
      ...styles.description
    };
    return (0, import_jsx_runtime7.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
AlertDescription.displayName = "AlertDescription";

// node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function AlertIcon(props) {
  const { status } = useAlertContext();
  const BaseIcon = getStatusIcon(status);
  const styles = useAlertStyles();
  const css3 = status === "loading" ? styles.spinner : styles.icon;
  return (0, import_jsx_runtime8.jsx)(
    chakra.span,
    {
      display: "inherit",
      "data-status": status,
      ...props,
      className: cx("chakra-alert__icon", props.className),
      __css: css3,
      children: props.children || (0, import_jsx_runtime8.jsx)(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
AlertIcon.displayName = "AlertIcon";

// node_modules/@chakra-ui/alert/dist/chunk-QURMB2UJ.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var AlertTitle = forwardRef(
  function AlertTitle2(props, ref) {
    const styles = useAlertStyles();
    const { status } = useAlertContext();
    return (0, import_jsx_runtime9.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__title", props.className),
        __css: styles.title
      }
    );
  }
);
AlertTitle.displayName = "AlertTitle";

// node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var Alert = forwardRef(function Alert2(props, ref) {
  var _a2;
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
  const colorScheme = (_a2 = props.colorScheme) != null ? _a2 : getStatusColorScheme(status);
  const styles = useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles.container
  };
  return (0, import_jsx_runtime10.jsx)(AlertProvider, { value: { status }, children: (0, import_jsx_runtime10.jsx)(AlertStylesProvider, { value: styles, children: (0, import_jsx_runtime10.jsx)(
    chakra.div,
    {
      "data-status": status,
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
});
Alert.displayName = "Alert";

// node_modules/@chakra-ui/close-button/dist/chunk-37N6GCLA.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function CloseIcon(props) {
  return (0, import_jsx_runtime11.jsx)(Icon, { focusable: "false", "aria-hidden": true, ...props, children: (0, import_jsx_runtime11.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var CloseButton = forwardRef(
  function CloseButton2(props, ref) {
    const styles = useStyleConfig("CloseButton", props);
    const { children, isDisabled, __css, ...rest } = omitThemingProps(props);
    const baseStyle = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return (0, import_jsx_runtime11.jsx)(
      chakra.button,
      {
        type: "button",
        "aria-label": "Close",
        ref,
        disabled: isDisabled,
        __css: {
          ...baseStyle,
          ...styles,
          ...__css
        },
        ...rest,
        children: children || (0, import_jsx_runtime11.jsx)(CloseIcon, { width: "1em", height: "1em" })
      }
    );
  }
);
CloseButton.displayName = "CloseButton";

// node_modules/@chakra-ui/toast/dist/chunk-HYCJNCPE.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var initialState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
var toastStore = createStore(initialState);
function createStore(initialState2) {
  let state = initialState2;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (setStateFn) => {
    state = setStateFn(state);
    listeners.forEach((l) => l());
  };
  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => initialState2);
        listeners.delete(listener);
      };
    },
    /**
     * Delete a toast record at its position
     */
    removeToast: (id, position2) => {
      setState((prevState) => ({
        ...prevState,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [position2]: prevState[position2].filter((toast) => toast.id != id)
      }));
    },
    notify: (message, options) => {
      const toast = createToast(message, options);
      const { position: position2, id } = toast;
      setState((prevToasts) => {
        var _a2, _b;
        const isTop = position2.includes("top");
        const toasts = isTop ? [toast, ...(_a2 = prevToasts[position2]) != null ? _a2 : []] : [...(_b = prevToasts[position2]) != null ? _b : [], toast];
        return {
          ...prevToasts,
          [position2]: toasts
        };
      });
      return id;
    },
    update: (id, options) => {
      if (!id)
        return;
      setState((prevState) => {
        const nextState = { ...prevState };
        const { position: position2, index } = findToast(nextState, id);
        if (position2 && index !== -1) {
          nextState[position2][index] = {
            ...nextState[position2][index],
            ...options,
            message: createRenderToast(options)
          };
        }
        return nextState;
      });
    },
    closeAll: ({ positions } = {}) => {
      setState((prev) => {
        const allPositions = [
          "bottom",
          "bottom-right",
          "bottom-left",
          "top",
          "top-left",
          "top-right"
        ];
        const positionsToClose = positions != null ? positions : allPositions;
        return positionsToClose.reduce(
          (acc, position2) => {
            acc[position2] = prev[position2].map((toast) => ({
              ...toast,
              requestClose: true
            }));
            return acc;
          },
          { ...prev }
        );
      });
    },
    close: (id) => {
      setState((prevState) => {
        const position2 = getToastPosition(prevState, id);
        if (!position2)
          return prevState;
        return {
          ...prevState,
          [position2]: prevState[position2].map((toast) => {
            if (toast.id == id) {
              return {
                ...toast,
                requestClose: true
              };
            }
            return toast;
          })
        };
      });
    },
    isActive: (id) => Boolean(findToast(toastStore.getState(), id).position)
  };
}
var counter = 0;
function createToast(message, options = {}) {
  var _a2, _b;
  counter += 1;
  const id = (_a2 = options.id) != null ? _a2 : counter;
  const position2 = (_b = options.position) != null ? _b : "bottom";
  return {
    id,
    message,
    position: position2,
    duration: options.duration,
    onCloseComplete: options.onCloseComplete,
    onRequestRemove: () => toastStore.removeToast(String(id), position2),
    status: options.status,
    requestClose: false,
    containerStyle: options.containerStyle
  };
}
var Toast = (props) => {
  const {
    status,
    variant = "solid",
    id,
    title,
    isClosable,
    onClose,
    description,
    colorScheme,
    icon
  } = props;
  const ids = id ? {
    root: `toast-${id}`,
    title: `toast-${id}-title`,
    description: `toast-${id}-description`
  } : void 0;
  return (0, import_jsx_runtime12.jsxs)(
    Alert,
    {
      addRole: false,
      status,
      variant,
      id: ids == null ? void 0 : ids.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme,
      children: [
        (0, import_jsx_runtime12.jsx)(AlertIcon, { children: icon }),
        (0, import_jsx_runtime12.jsxs)(chakra.div, { flex: "1", maxWidth: "100%", children: [
          title && (0, import_jsx_runtime12.jsx)(AlertTitle, { id: ids == null ? void 0 : ids.title, children: title }),
          description && (0, import_jsx_runtime12.jsx)(AlertDescription, { id: ids == null ? void 0 : ids.description, display: "block", children: description })
        ] }),
        isClosable && (0, import_jsx_runtime12.jsx)(
          CloseButton,
          {
            size: "sm",
            onClick: onClose,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function createRenderToast(options = {}) {
  const { render, toastComponent: ToastComponent2 = Toast } = options;
  const renderToast = (props) => {
    if (typeof render === "function") {
      return render({ ...props, ...options });
    }
    return (0, import_jsx_runtime12.jsx)(ToastComponent2, { ...props, ...options });
  };
  return renderToast;
}
function createToastFn(dir, defaultOptions3) {
  const normalizeToastOptions = (options) => {
    var _a2;
    return {
      ...defaultOptions3,
      ...options,
      position: getToastPlacement(
        (_a2 = options == null ? void 0 : options.position) != null ? _a2 : defaultOptions3 == null ? void 0 : defaultOptions3.position,
        dir
      )
    };
  };
  const toast = (options) => {
    const normalizedToastOptions = normalizeToastOptions(options);
    const Message = createRenderToast(normalizedToastOptions);
    return toastStore.notify(Message, normalizedToastOptions);
  };
  toast.update = (id, options) => {
    toastStore.update(id, normalizeToastOptions(options));
  };
  toast.promise = (promise, options) => {
    const id = toast({
      ...options.loading,
      status: "loading",
      duration: null
    });
    promise.then(
      (data) => toast.update(id, {
        status: "success",
        duration: 5e3,
        ...runIfFn(options.success, data)
      })
    ).catch(
      (error) => toast.update(id, {
        status: "error",
        duration: 5e3,
        ...runIfFn(options.error, error)
      })
    );
  };
  toast.closeAll = toastStore.closeAll;
  toast.close = toastStore.close;
  toast.isActive = toastStore.isActive;
  return toast;
}

// node_modules/@chakra-ui/toast/dist/chunk-3Y4YXCR2.mjs
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var [ToastOptionProvider, useToastOptionContext] = createContext({
  name: `ToastOptionsContext`,
  strict: false
});
var ToastProvider = (props) => {
  const state = (0, import_react5.useSyncExternalStore)(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );
  const {
    motionVariants,
    component: Component = ToastComponent,
    portalProps
  } = props;
  const stateKeys = Object.keys(state);
  const toastList = stateKeys.map((position2) => {
    const toasts = state[position2];
    return (0, import_jsx_runtime13.jsx)(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${position2}`,
        id: `chakra-toast-manager-${position2}`,
        style: getToastListStyle(position2),
        children: (0, import_jsx_runtime13.jsx)(AnimatePresence, { initial: false, children: toasts.map((toast) => (0, import_jsx_runtime13.jsx)(
          Component,
          {
            motionVariants,
            ...toast
          },
          toast.id
        )) })
      },
      position2
    );
  });
  return (0, import_jsx_runtime13.jsx)(Portal, { ...portalProps, children: toastList });
};

// node_modules/@chakra-ui/toast/dist/chunk-6RSEZNRH.mjs
var import_react6 = __toESM(require_react(), 1);
function useToast(options) {
  const { theme: theme2 } = useChakra();
  const defaultOptions3 = useToastOptionContext();
  return (0, import_react6.useMemo)(
    () => createToastFn(theme2.direction, {
      ...defaultOptions3,
      ...options
    }),
    [options, theme2.direction, defaultOptions3]
  );
}

// node_modules/@chakra-ui/toast/dist/chunk-FOFDA6UD.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var defaults = {
  duration: 5e3,
  variant: "solid"
};
var defaultStandaloneParam = {
  theme,
  colorMode: "light",
  toggleColorMode: () => {
  },
  setColorMode: () => {
  },
  defaultOptions: defaults,
  forced: false
};
function createStandaloneToast({
  theme: theme2 = defaultStandaloneParam.theme,
  colorMode = defaultStandaloneParam.colorMode,
  toggleColorMode = defaultStandaloneParam.toggleColorMode,
  setColorMode = defaultStandaloneParam.setColorMode,
  defaultOptions: defaultOptions3 = defaultStandaloneParam.defaultOptions,
  motionVariants,
  toastSpacing,
  component,
  forced
} = defaultStandaloneParam) {
  const colorModeContextValue = {
    colorMode,
    setColorMode,
    toggleColorMode,
    forced
  };
  const ToastContainer = () => (0, import_jsx_runtime14.jsx)(ThemeProvider, { theme: theme2, children: (0, import_jsx_runtime14.jsx)(ColorModeContext.Provider, { value: colorModeContextValue, children: (0, import_jsx_runtime14.jsx)(
    ToastProvider,
    {
      defaultOptions: defaultOptions3,
      motionVariants,
      toastSpacing,
      component
    }
  ) }) });
  return {
    ToastContainer,
    toast: createToastFn(theme2.direction, defaultOptions3)
  };
}

// node_modules/@chakra-ui/react/dist/chunk-QAITB7GG.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var createChakraProvider = (providerTheme) => {
  return function ChakraProvider22({
    children,
    theme: theme2 = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return (0, import_jsx_runtime15.jsxs)(ChakraProvider, { theme: theme2, ...restProps, children: [
      (0, import_jsx_runtime15.jsx)(ToastOptionProvider, { value: toastOptions == null ? void 0 : toastOptions.defaultOptions, children }),
      (0, import_jsx_runtime15.jsx)(ToastProvider, { ...toastOptions })
    ] });
  };
};
var ChakraProvider2 = createChakraProvider(theme);
var ChakraBaseProvider = createChakraProvider(baseTheme);

// node_modules/@chakra-ui/accordion/dist/chunk-RUEU7BLR.mjs
var [AccordionStylesProvider, useAccordionStyles] = createContext({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
});
var [AccordionItemProvider, useAccordionItemContext] = createContext({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
});
var [
  AccordionDescendantsProvider,
  useAccordionDescendantsContext,
  useAccordionDescendants,
  useAccordionDescendant
] = createDescendantContext();

// node_modules/@chakra-ui/accordion/dist/chunk-QCAXGLVH.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var AccordionButton = forwardRef(
  function AccordionButton2(props, ref) {
    const { getButtonProps } = useAccordionItemContext();
    const buttonProps = getButtonProps(props, ref);
    const styles = useAccordionStyles();
    const buttonStyles = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...styles.button
    };
    return (0, import_jsx_runtime16.jsx)(
      chakra.button,
      {
        ...buttonProps,
        className: cx("chakra-accordion__button", props.className),
        __css: buttonStyles
      }
    );
  }
);
AccordionButton.displayName = "AccordionButton";

// node_modules/@chakra-ui/accordion/dist/chunk-74QY6M57.mjs
var import_react7 = __toESM(require_react(), 1);
function useAccordion(props) {
  const {
    onChange,
    defaultIndex,
    index: indexProp,
    allowMultiple,
    allowToggle,
    ...htmlProps
  } = props;
  allowMultipleWarning(props);
  allowMultipleAndAllowToggleWarning(props);
  const descendants = useAccordionDescendants();
  const [focusedIndex, setFocusedIndex] = (0, import_react7.useState)(-1);
  (0, import_react7.useEffect)(() => {
    return () => {
      setFocusedIndex(-1);
    };
  }, []);
  const [index, setIndex] = useControllableState({
    value: indexProp,
    defaultValue() {
      if (allowMultiple)
        return defaultIndex != null ? defaultIndex : [];
      return defaultIndex != null ? defaultIndex : -1;
    },
    onChange
  });
  const getAccordionItemProps = (idx) => {
    let isOpen = false;
    if (idx !== null) {
      isOpen = Array.isArray(index) ? index.includes(idx) : index === idx;
    }
    const onChange2 = (isOpen2) => {
      if (idx === null)
        return;
      if (allowMultiple && Array.isArray(index)) {
        const nextState = isOpen2 ? index.concat(idx) : index.filter((i) => i !== idx);
        setIndex(nextState);
      } else if (isOpen2) {
        setIndex(idx);
      } else if (allowToggle) {
        setIndex(-1);
      }
    };
    return { isOpen, onChange: onChange2 };
  };
  return {
    index,
    setIndex,
    htmlProps,
    getAccordionItemProps,
    focusedIndex,
    setFocusedIndex,
    descendants
  };
}
var [AccordionProvider, useAccordionContext] = createContext({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function useAccordionItem(props) {
  const { isDisabled, isFocusable, id, ...htmlProps } = props;
  const { getAccordionItemProps, setFocusedIndex } = useAccordionContext();
  const buttonRef = (0, import_react7.useRef)(null);
  const reactId = (0, import_react7.useId)();
  const uid = id != null ? id : reactId;
  const buttonId = `accordion-button-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  focusableNotDisabledWarning(props);
  const { register, index, descendants } = useAccordionDescendant({
    disabled: isDisabled && !isFocusable
  });
  const { isOpen, onChange } = getAccordionItemProps(
    index === -1 ? null : index
  );
  warnIfOpenAndDisabled({ isOpen, isDisabled });
  const onOpen = () => {
    onChange == null ? void 0 : onChange(true);
  };
  const onClose = () => {
    onChange == null ? void 0 : onChange(false);
  };
  const onClick = (0, import_react7.useCallback)(() => {
    onChange == null ? void 0 : onChange(!isOpen);
    setFocusedIndex(index);
  }, [index, setFocusedIndex, isOpen, onChange]);
  const onKeyDown = (0, import_react7.useCallback)(
    (event) => {
      const keyMap = {
        ArrowDown: () => {
          const next = descendants.nextEnabled(index);
          next == null ? void 0 : next.node.focus();
        },
        ArrowUp: () => {
          const prev = descendants.prevEnabled(index);
          prev == null ? void 0 : prev.node.focus();
        },
        Home: () => {
          const first = descendants.firstEnabled();
          first == null ? void 0 : first.node.focus();
        },
        End: () => {
          const last = descendants.lastEnabled();
          last == null ? void 0 : last.node.focus();
        }
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, index]
  );
  const onFocus3 = (0, import_react7.useCallback)(() => {
    setFocusedIndex(index);
  }, [setFocusedIndex, index]);
  const getButtonProps = (0, import_react7.useCallback)(
    function getButtonProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        type: "button",
        ref: mergeRefs(register, buttonRef, ref),
        id: buttonId,
        disabled: !!isDisabled,
        "aria-expanded": !!isOpen,
        "aria-controls": panelId,
        onClick: callAllHandlers(props2.onClick, onClick),
        onFocus: callAllHandlers(props2.onFocus, onFocus3),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown)
      };
    },
    [
      buttonId,
      isDisabled,
      isOpen,
      onClick,
      onFocus3,
      onKeyDown,
      panelId,
      register
    ]
  );
  const getPanelProps = (0, import_react7.useCallback)(
    function getPanelProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        ref,
        role: "region",
        id: panelId,
        "aria-labelledby": buttonId,
        hidden: !isOpen
      };
    },
    [buttonId, isOpen, panelId]
  );
  return {
    isOpen,
    isDisabled,
    isFocusable,
    onOpen,
    onClose,
    getButtonProps,
    getPanelProps,
    htmlProps
  };
}
function allowMultipleWarning(props) {
  const index = props.index || props.defaultIndex;
  const condition = index != null && !Array.isArray(index) && props.allowMultiple;
  warn({
    condition: !!condition,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof index},`
  });
}
function allowMultipleAndAllowToggleWarning(props) {
  warn({
    condition: !!(props.allowMultiple && props.allowToggle),
    message: `If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not`
  });
}
function focusableNotDisabledWarning(props) {
  warn({
    condition: !!(props.isFocusable && !props.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function warnIfOpenAndDisabled(props) {
  warn({
    condition: props.isOpen && !!props.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}

// node_modules/@chakra-ui/accordion/dist/chunk-YI3ICT2T.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
function AccordionIcon(props) {
  const { isOpen, isDisabled } = useAccordionItemContext();
  const { reduceMotion } = useAccordionContext();
  const _className = cx("chakra-accordion__icon", props.className);
  const styles = useAccordionStyles();
  const iconStyles = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : void 0,
    transition: reduceMotion ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...styles.icon
  };
  return (0, import_jsx_runtime17.jsx)(
    Icon,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      className: _className,
      __css: iconStyles,
      ...props,
      children: (0, import_jsx_runtime17.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
AccordionIcon.displayName = "AccordionIcon";

// node_modules/@chakra-ui/accordion/dist/chunk-JQ2DNXQ3.mjs
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var AccordionItem = forwardRef(
  function AccordionItem2(props, ref) {
    const { children, className } = props;
    const { htmlProps, ...context } = useAccordionItem(props);
    const styles = useAccordionStyles();
    const containerStyles = {
      ...styles.container,
      overflowAnchor: "none"
    };
    const ctx = (0, import_react8.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime18.jsx)(AccordionItemProvider, { value: ctx, children: (0, import_jsx_runtime18.jsx)(
      chakra.div,
      {
        ref,
        ...htmlProps,
        className: cx("chakra-accordion__item", className),
        __css: containerStyles,
        children: typeof children === "function" ? children({
          isExpanded: !!context.isOpen,
          isDisabled: !!context.isDisabled
        }) : children
      }
    ) });
  }
);
AccordionItem.displayName = "AccordionItem";

// node_modules/@chakra-ui/transition/dist/chunk-6NHXDBFO.mjs
var TRANSITION_EASINGS = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
};
var TRANSITION_VARIANTS = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function getSlideTransition(options) {
  var _a2;
  const side = (_a2 = options == null ? void 0 : options.direction) != null ? _a2 : "right";
  switch (side) {
    case "right":
      return TRANSITION_VARIANTS.slideRight;
    case "left":
      return TRANSITION_VARIANTS.slideLeft;
    case "bottom":
      return TRANSITION_VARIANTS.slideDown;
    case "top":
      return TRANSITION_VARIANTS.slideUp;
    default:
      return TRANSITION_VARIANTS.slideRight;
  }
}
var TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
};
var withDelay = {
  enter: (transition2, delay) => ({
    ...transition2,
    delay: typeof delay === "number" ? delay : delay == null ? void 0 : delay["enter"]
  }),
  exit: (transition2, delay) => ({
    ...transition2,
    delay: typeof delay === "number" ? delay : delay == null ? void 0 : delay["exit"]
  })
};

// node_modules/@chakra-ui/transition/dist/chunk-RKXMPHPI.mjs
var import_react9 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var isNumeric = (value) => value != null && parseInt(value.toString(), 10) > 0;
var defaultTransitions = {
  exit: {
    height: { duration: 0.2, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.3, ease: TRANSITION_EASINGS.ease }
  },
  enter: {
    height: { duration: 0.3, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.4, ease: TRANSITION_EASINGS.ease }
  }
};
var variants = {
  exit: ({
    animateOpacity,
    startingHeight,
    transition: transition2,
    transitionEnd,
    delay
  }) => {
    var _a2;
    return {
      ...animateOpacity && { opacity: isNumeric(startingHeight) ? 1 : 0 },
      height: startingHeight,
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(defaultTransitions.exit, delay)
    };
  },
  enter: ({
    animateOpacity,
    endingHeight,
    transition: transition2,
    transitionEnd,
    delay
  }) => {
    var _a2;
    return {
      ...animateOpacity && { opacity: 1 },
      height: endingHeight,
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(defaultTransitions.enter, delay)
    };
  }
};
var Collapse = (0, import_react9.forwardRef)(
  (props, ref) => {
    const {
      in: isOpen,
      unmountOnExit,
      animateOpacity = true,
      startingHeight = 0,
      endingHeight = "auto",
      style,
      className,
      transition: transition2,
      transitionEnd,
      ...rest
    } = props;
    const [mounted, setMounted] = (0, import_react9.useState)(false);
    (0, import_react9.useEffect)(() => {
      const timeout = setTimeout(() => {
        setMounted(true);
      });
      return () => clearTimeout(timeout);
    }, []);
    warn({
      condition: Number(startingHeight) > 0 && !!unmountOnExit,
      message: `startingHeight and unmountOnExit are mutually exclusive. You can't use them together`
    });
    const hasStartingHeight = parseFloat(startingHeight.toString()) > 0;
    const custom = {
      startingHeight,
      endingHeight,
      animateOpacity,
      transition: !mounted ? { enter: { duration: 0 } } : transition2,
      transitionEnd: {
        enter: transitionEnd == null ? void 0 : transitionEnd.enter,
        exit: unmountOnExit ? transitionEnd == null ? void 0 : transitionEnd.exit : {
          ...transitionEnd == null ? void 0 : transitionEnd.exit,
          display: hasStartingHeight ? "block" : "none"
        }
      }
    };
    const show = unmountOnExit ? isOpen : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    return (0, import_jsx_runtime19.jsx)(AnimatePresence, { initial: false, custom, children: show && (0, import_jsx_runtime19.jsx)(
      motion.div,
      {
        ref,
        ...rest,
        className: cx("chakra-collapse", className),
        style: {
          overflow: "hidden",
          display: "block",
          ...style
        },
        custom,
        variants,
        initial: unmountOnExit ? "exit" : false,
        animate,
        exit: "exit"
      }
    ) });
  }
);
Collapse.displayName = "Collapse";

// node_modules/@chakra-ui/transition/dist/chunk-TR226DUX.mjs
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var variants2 = {
  enter: ({ transition: transition2, transitionEnd, delay } = {}) => {
    var _a2;
    return {
      opacity: 1,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: ({ transition: transition2, transitionEnd, delay } = {}) => {
    var _a2;
    return {
      opacity: 0,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  }
};
var fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants2
};
var Fade = (0, import_react10.forwardRef)(function Fade2(props, ref) {
  const {
    unmountOnExit,
    in: isOpen,
    className,
    transition: transition2,
    transitionEnd,
    delay,
    ...rest
  } = props;
  const animate = isOpen || unmountOnExit ? "enter" : "exit";
  const show = unmountOnExit ? isOpen && unmountOnExit : true;
  const custom = { transition: transition2, transitionEnd, delay };
  return (0, import_jsx_runtime20.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime20.jsx)(
    motion.div,
    {
      ref,
      className: cx("chakra-fade", className),
      custom,
      ...fadeConfig,
      animate,
      ...rest
    }
  ) });
});
Fade.displayName = "Fade";

// node_modules/@chakra-ui/transition/dist/chunk-SR4VX3RF.mjs
var import_react11 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var variants3 = {
  exit: ({ reverse, initialScale, transition: transition2, transitionEnd, delay }) => {
    var _a2;
    return {
      opacity: 0,
      ...reverse ? { scale: initialScale, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { scale: initialScale, ...transitionEnd == null ? void 0 : transitionEnd.exit } },
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay)
    };
  },
  enter: ({ transitionEnd, transition: transition2, delay }) => {
    var _a2;
    return {
      opacity: 1,
      scale: 1,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants3
};
var ScaleFade = (0, import_react11.forwardRef)(
  function ScaleFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      initialScale = 0.95,
      className,
      transition: transition2,
      transitionEnd,
      delay,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { initialScale, reverse, transition: transition2, transitionEnd, delay };
    return (0, import_jsx_runtime21.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime21.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        ...scaleFadeConfig,
        animate,
        custom,
        ...rest
      }
    ) });
  }
);
ScaleFade.displayName = "ScaleFade";

// node_modules/@chakra-ui/transition/dist/chunk-7254PCTD.mjs
var import_react12 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var variants4 = {
  initial: ({ offsetX, offsetY, transition: transition2, transitionEnd, delay }) => {
    var _a2;
    return {
      opacity: 0,
      x: offsetX,
      y: offsetY,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ transition: transition2, transitionEnd, delay }) => {
    var _a2;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: ({ offsetY, offsetX, transition: transition2, transitionEnd, reverse, delay }) => {
    var _a2;
    const offset = { x: offsetX, y: offsetY };
    return {
      opacity: 0,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      ...reverse ? { ...offset, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { ...offset, ...transitionEnd == null ? void 0 : transitionEnd.exit } }
    };
  }
};
var slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: variants4
};
var SlideFade = (0, import_react12.forwardRef)(
  function SlideFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      className,
      offsetX = 0,
      offsetY = 8,
      transition: transition2,
      transitionEnd,
      delay,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = {
      offsetX,
      offsetY,
      reverse,
      transition: transition2,
      transitionEnd,
      delay
    };
    return (0, import_jsx_runtime22.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime22.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        custom,
        ...slideFadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
SlideFade.displayName = "SlideFade";

// node_modules/@chakra-ui/transition/dist/chunk-CYUETFQE.mjs
var import_react13 = __toESM(require_react(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var defaultTransition = {
  exit: {
    duration: 0.15,
    ease: TRANSITION_EASINGS.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
var variants5 = {
  exit: ({ direction, transition: transition2, transitionEnd, delay }) => {
    var _a2;
    const { exit: exitStyles } = getSlideTransition({ direction });
    return {
      ...exitStyles,
      transition: (_a2 = transition2 == null ? void 0 : transition2.exit) != null ? _a2 : withDelay.exit(defaultTransition.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ direction, transitionEnd, transition: transition2, delay }) => {
    var _a2;
    const { enter: enterStyles } = getSlideTransition({ direction });
    return {
      ...enterStyles,
      transition: (_a2 = transition2 == null ? void 0 : transition2.enter) != null ? _a2 : withDelay.enter(defaultTransition.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var Slide = (0, import_react13.forwardRef)(function Slide2(props, ref) {
  const {
    direction = "right",
    style,
    unmountOnExit,
    in: isOpen,
    className,
    transition: transition2,
    transitionEnd,
    delay,
    motionProps,
    ...rest
  } = props;
  const transitionStyles = getSlideTransition({ direction });
  const computedStyle = Object.assign(
    { position: "fixed" },
    transitionStyles.position,
    style
  );
  const show = unmountOnExit ? isOpen && unmountOnExit : true;
  const animate = isOpen || unmountOnExit ? "enter" : "exit";
  const custom = { transitionEnd, transition: transition2, direction, delay };
  return (0, import_jsx_runtime23.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime23.jsx)(
    motion.div,
    {
      ...rest,
      ref,
      initial: "exit",
      className: cx("chakra-slide", className),
      animate,
      exit: "exit",
      custom,
      variants: variants5,
      style: computedStyle,
      ...motionProps
    }
  ) });
});
Slide.displayName = "Slide";

// node_modules/@chakra-ui/accordion/dist/chunk-5VAIMVHT.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var AccordionPanel = forwardRef(
  function AccordionPanel2(props, ref) {
    const { className, motionProps, ...rest } = props;
    const { reduceMotion } = useAccordionContext();
    const { getPanelProps, isOpen } = useAccordionItemContext();
    const panelProps = getPanelProps(rest, ref);
    const _className = cx("chakra-accordion__panel", className);
    const styles = useAccordionStyles();
    if (!reduceMotion) {
      delete panelProps.hidden;
    }
    const child = (0, import_jsx_runtime24.jsx)(chakra.div, { ...panelProps, __css: styles.panel, className: _className });
    if (!reduceMotion) {
      return (0, import_jsx_runtime24.jsx)(Collapse, { in: isOpen, ...motionProps, children: child });
    }
    return child;
  }
);
AccordionPanel.displayName = "AccordionPanel";

// node_modules/@chakra-ui/accordion/dist/chunk-CRBMUVJA.mjs
var import_react14 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var Accordion = forwardRef(function Accordion2({ children, reduceMotion, ...props }, ref) {
  const styles = useMultiStyleConfig("Accordion", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, descendants, ...context } = useAccordion(ownProps);
  const ctx = (0, import_react14.useMemo)(
    () => ({ ...context, reduceMotion: !!reduceMotion }),
    [context, reduceMotion]
  );
  return (0, import_jsx_runtime25.jsx)(AccordionDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime25.jsx)(AccordionProvider, { value: ctx, children: (0, import_jsx_runtime25.jsx)(AccordionStylesProvider, { value: styles, children: (0, import_jsx_runtime25.jsx)(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: cx("chakra-accordion", props.className),
      __css: styles.root,
      children
    }
  ) }) }) });
});
Accordion.displayName = "Accordion";

// node_modules/@chakra-ui/accordion/dist/chunk-3OO6EZWZ.mjs
function useAccordionItemState() {
  const { isOpen, isDisabled, onClose, onOpen } = useAccordionItemContext();
  return { isOpen, onClose, isDisabled, onOpen };
}

// node_modules/@chakra-ui/breadcrumb/dist/chunk-24NX3CUR.mjs
var [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
});

// node_modules/@chakra-ui/breadcrumb/dist/chunk-UIZJRKRT.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbLink = forwardRef(
  function BreadcrumbLink2(props, ref) {
    const { isCurrentPage, as, className, href, ...rest } = props;
    const styles = useBreadcrumbStyles();
    const sharedProps = {
      ref,
      as,
      className: cx("chakra-breadcrumb__link", className),
      ...rest
    };
    if (isCurrentPage) {
      return (0, import_jsx_runtime26.jsx)(chakra.span, { "aria-current": "page", __css: styles.link, ...sharedProps });
    }
    return (0, import_jsx_runtime26.jsx)(chakra.a, { __css: styles.link, href, ...sharedProps });
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-I4SEDIQD.mjs
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbSeparator = forwardRef(
  function BreadcrumbSeparator2(props, ref) {
    const { spacing, ...rest } = props;
    const styles = useBreadcrumbStyles();
    const separatorStyles = {
      mx: spacing,
      ...styles.separator
    };
    return (0, import_jsx_runtime27.jsx)(
      chakra.span,
      {
        ref,
        role: "presentation",
        ...rest,
        __css: separatorStyles
      }
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-U7EUQI2I.mjs
var import_react15 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbItem = forwardRef(
  function BreadcrumbItem2(props, ref) {
    const {
      isCurrentPage,
      separator,
      isLastChild,
      spacing,
      children,
      className,
      ...rest
    } = props;
    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return (0, import_react15.cloneElement)(child, {
          isCurrentPage
        });
      }
      if (child.type === BreadcrumbSeparator) {
        return (0, import_react15.cloneElement)(child, {
          spacing,
          children: child.props.children || separator
        });
      }
      return child;
    });
    const styles = useBreadcrumbStyles();
    const itemStyles = {
      display: "inline-flex",
      alignItems: "center",
      ...styles.item
    };
    const _className = cx("chakra-breadcrumb__list-item", className);
    return (0, import_jsx_runtime28.jsxs)(chakra.li, { ref, className: _className, ...rest, __css: itemStyles, children: [
      clones,
      !isLastChild && (0, import_jsx_runtime28.jsx)(BreadcrumbSeparator, { spacing, children: separator })
    ] });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-QOOL75FN.mjs
var import_react16 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var Breadcrumb = forwardRef(
  function Breadcrumb2(props, ref) {
    const styles = useMultiStyleConfig("Breadcrumb", props);
    const ownProps = omitThemingProps(props);
    const {
      children,
      spacing = "0.5rem",
      separator = "/",
      className,
      listProps,
      ...rest
    } = ownProps;
    const validChildren = getValidChildren(children);
    const count = validChildren.length;
    const clones = validChildren.map(
      (child, index) => (0, import_react16.cloneElement)(child, {
        separator,
        spacing,
        isLastChild: count === index + 1
      })
    );
    const _className = cx("chakra-breadcrumb", className);
    return (0, import_jsx_runtime29.jsx)(
      chakra.nav,
      {
        ref,
        "aria-label": "breadcrumb",
        className: _className,
        __css: styles.container,
        ...rest,
        children: (0, import_jsx_runtime29.jsx)(BreadcrumbStylesProvider, { value: styles, children: (0, import_jsx_runtime29.jsx)(
          chakra.ol,
          {
            className: "chakra-breadcrumb__list",
            ...listProps,
            __css: {
              display: "flex",
              alignItems: "center",
              ...styles.list
            },
            children: clones
          }
        ) })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

// node_modules/@chakra-ui/button/dist/chunk-T6ZDZOLO.mjs
var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});

// node_modules/@chakra-ui/button/dist/chunk-DA7QIPTJ.mjs
var import_react17 = __toESM(require_react(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var attachedStyles = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
};
var gapStyles = {
  horizontal: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing }
  }),
  vertical: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing }
  })
};
var ButtonGroup = forwardRef(
  function ButtonGroup2(props, ref) {
    const {
      size,
      colorScheme,
      variant,
      className,
      spacing = "0.5rem",
      isAttached,
      isDisabled,
      orientation = "horizontal",
      ...rest
    } = props;
    const _className = cx("chakra-button__group", className);
    const context = (0, import_react17.useMemo)(
      () => ({ size, colorScheme, variant, isDisabled }),
      [size, colorScheme, variant, isDisabled]
    );
    let groupStyles = {
      display: "inline-flex",
      ...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing)
    };
    const isVertical = orientation === "vertical";
    return (0, import_jsx_runtime30.jsx)(ButtonGroupProvider, { value: context, children: (0, import_jsx_runtime30.jsx)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        className: _className,
        "data-attached": isAttached ? "" : void 0,
        "data-orientation": orientation,
        flexDir: isVertical ? "column" : void 0,
        ...rest
      }
    ) });
  }
);
ButtonGroup.displayName = "ButtonGroup";

// node_modules/@chakra-ui/button/dist/chunk-J37R6SZE.mjs
var import_react18 = __toESM(require_react(), 1);
function useButtonType(value) {
  const [isButton, setIsButton] = (0, import_react18.useState)(!value);
  const refCallback = (0, import_react18.useCallback)((node2) => {
    if (!node2)
      return;
    setIsButton(node2.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}

// node_modules/@chakra-ui/button/dist/chunk-3RENZ2UO.mjs
var import_react19 = __toESM(require_react(), 1);
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = (0, import_react19.isValidElement)(children) ? (0, import_react19.cloneElement)(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = cx("chakra-button__icon", className);
  return (0, import_jsx_runtime31.jsx)(
    chakra.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";

// node_modules/@chakra-ui/button/dist/chunk-QB2Y5VKH.mjs
var import_react20 = __toESM(require_react(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = (0, import_jsx_runtime32.jsx)(Spinner, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = (0, import_react20.useMemo)(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing]
  );
  return (0, import_jsx_runtime32.jsx)(chakra.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";

// node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs
var import_react21 = __toESM(require_react(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var Button = forwardRef((props, ref) => {
  const group = useButtonGroup();
  const styles = useStyleConfig("Button", { ...group, ...props });
  const {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    ...rest
  } = omitThemingProps(props);
  const buttonStyles = (0, import_react21.useMemo)(() => {
    const _focus = { ...styles == null ? void 0 : styles["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles,
      ...!!group && { _focus }
    };
  }, [styles, group]);
  const { ref: _ref2, type: defaultType } = useButtonType(as);
  const contentProps = { rightIcon, leftIcon, iconSpacing, children };
  return (0, import_jsx_runtime33.jsxs)(
    chakra.button,
    {
      ref: useMergeRefs(ref, _ref2),
      as,
      type: type != null ? type : defaultType,
      "data-active": dataAttr(isActive),
      "data-loading": dataAttr(isLoading),
      __css: buttonStyles,
      className: cx("chakra-button", className),
      ...rest,
      disabled: isDisabled || isLoading,
      children: [
        isLoading && spinnerPlacement === "start" && (0, import_jsx_runtime33.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing,
            children: spinner
          }
        ),
        isLoading ? loadingText || (0, import_jsx_runtime33.jsx)(chakra.span, { opacity: 0, children: (0, import_jsx_runtime33.jsx)(ButtonContent, { ...contentProps }) }) : (0, import_jsx_runtime33.jsx)(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && (0, import_jsx_runtime33.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    leftIcon && (0, import_jsx_runtime33.jsx)(ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
    children,
    rightIcon && (0, import_jsx_runtime33.jsx)(ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
  ] });
}

// node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs
var import_react22 = __toESM(require_react(), 1);
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var IconButton = forwardRef(
  (props, ref) => {
    const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
    const element = icon || children;
    const _children = (0, import_react22.isValidElement)(element) ? (0, import_react22.cloneElement)(element, {
      "aria-hidden": true,
      focusable: false
    }) : null;
    return (0, import_jsx_runtime34.jsx)(
      Button,
      {
        padding: "0",
        borderRadius: isRound ? "full" : void 0,
        ref,
        "aria-label": ariaLabel,
        ...rest,
        children: _children
      }
    );
  }
);
IconButton.displayName = "IconButton";

// node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs
var [CardStylesProvider, useCardStyles] = createStylesContext("Card");

// node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var CardBody = forwardRef(function CardBody2(props, ref) {
  const { className, ...rest } = props;
  const styles = useCardStyles();
  return (0, import_jsx_runtime35.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-card__body", className),
      __css: styles.body,
      ...rest
    }
  );
});

// node_modules/@chakra-ui/card/dist/chunk-BDSTZZXD.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var CardFooter = forwardRef(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles = useCardStyles();
    return (0, import_jsx_runtime36.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__footer", className),
        __css: {
          display: "flex",
          justifyContent: justify,
          ...styles.footer
        },
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var CardHeader = forwardRef(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles = useCardStyles();
    return (0, import_jsx_runtime37.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__header", className),
        __css: styles.header,
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var Card = forwardRef(function Card2(props, ref) {
  const {
    className,
    children,
    direction = "column",
    justify,
    align,
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Card", props);
  return (0, import_jsx_runtime38.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-card", className),
      __css: {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...styles.container
      },
      ...rest,
      children: (0, import_jsx_runtime38.jsx)(CardStylesProvider, { value: styles, children })
    }
  );
});

// node_modules/@chakra-ui/checkbox/dist/chunk-LYGBQ47X.mjs
var [CheckboxGroupProvider, useCheckboxGroupContext] = createContext({
  name: "CheckboxGroupContext",
  strict: false
});

// node_modules/@chakra-ui/checkbox/dist/chunk-TOQK4WO2.mjs
var import_react23 = __toESM(require_react(), 1);
function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
}
function useCheckboxGroup(props = {}) {
  const {
    defaultValue,
    value: valueProp,
    onChange,
    isDisabled,
    isNative
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  });
  const handleChange = (0, import_react23.useCallback)(
    (eventOrValue) => {
      if (!value)
        return;
      const isChecked = isInputEvent(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
      const selectedValue = isInputEvent(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      const nextValue = isChecked ? [...value, selectedValue] : value.filter((v) => String(v) !== String(selectedValue));
      setValue(nextValue);
    },
    [setValue, value]
  );
  const getCheckboxProps = (0, import_react23.useCallback)(
    (props2 = {}) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        [checkedKey]: value.some((val) => String(props2.value) === String(val)),
        onChange: handleChange
      };
    },
    [handleChange, isNative, value]
  );
  return {
    value,
    isDisabled,
    onChange: handleChange,
    setValue,
    getCheckboxProps
  };
}

// node_modules/@chakra-ui/checkbox/dist/chunk-CKJ5T3MX.mjs
var import_react24 = __toESM(require_react(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
function CheckboxGroup(props) {
  const { colorScheme, size, variant, children, isDisabled } = props;
  const { value, onChange } = useCheckboxGroup(props);
  const group = (0, import_react24.useMemo)(
    () => ({
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled
    }),
    [size, onChange, colorScheme, value, variant, isDisabled]
  );
  return (0, import_jsx_runtime39.jsx)(CheckboxGroupProvider, { value: group, children });
}
CheckboxGroup.displayName = "CheckboxGroup";

// node_modules/@chakra-ui/checkbox/dist/chunk-2TOCDA5N.mjs
var import_react25 = __toESM(require_react(), 1);
function useInitialAnimationState(isChecked) {
  const [previousIsChecked, setPreviousIsChecked] = (0, import_react25.useState)(isChecked);
  const [shouldAnimate, setShouldAnimate] = (0, import_react25.useState)(false);
  if (isChecked !== previousIsChecked) {
    setShouldAnimate(true);
    setPreviousIsChecked(isChecked);
  }
  return shouldAnimate;
}

// node_modules/@chakra-ui/checkbox/dist/chunk-ULEC7HZU.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
function CheckIcon2(props) {
  return (0, import_jsx_runtime40.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 12 10",
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16
      },
      ...props,
      children: (0, import_jsx_runtime40.jsx)("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function IndeterminateIcon(props) {
  return (0, import_jsx_runtime40.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...props,
      children: (0, import_jsx_runtime40.jsx)("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function CheckboxIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon2;
  return isChecked || isIndeterminate ? (0, import_jsx_runtime40.jsx)(
    chakra.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: (0, import_jsx_runtime40.jsx)(BaseIcon, { ...rest })
    }
  ) : null;
}

// node_modules/@chakra-ui/form-control/dist/chunk-DFWC5MHP.mjs
var import_react26 = __toESM(require_react(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var [FormControlStylesProvider, useFormControlStyles] = createContext({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
var [FormControlProvider, useFormControlContext] = createContext({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = (0, import_react26.useId)();
  const id = idProp || `field-${uuid}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = (0, import_react26.useState)(false);
  const [hasHelpText, setHasHelpText] = (0, import_react26.useState)(false);
  const [isFocused, setFocus] = (0, import_react26.useState)(false);
  const getHelpTextProps = (0, import_react26.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = (0, import_react26.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly),
      id: props2.id !== void 0 ? props2.id : labelId,
      htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id
    }),
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = (0, import_react26.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = (0, import_react26.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group",
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly)
    }),
    [htmlProps, isDisabled, isFocused, isInvalid, isReadOnly]
  );
  const getRequiredIndicatorProps = (0, import_react26.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = forwardRef(
  function FormControl2(props, ref) {
    const styles = useMultiStyleConfig("Form", props);
    const ownProps = omitThemingProps(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = cx("chakra-form-control", props.className);
    return (0, import_jsx_runtime41.jsx)(FormControlProvider, { value: context, children: (0, import_jsx_runtime41.jsx)(FormControlStylesProvider, { value: styles, children: (0, import_jsx_runtime41.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles["container"]
      }
    ) }) });
  }
);
FormControl.displayName = "FormControl";
var FormHelperText = forwardRef(
  function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    const className = cx("chakra-form__helper-text", props.className);
    return (0, import_jsx_runtime41.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getHelpTextProps(props, ref),
        __css: styles.helperText,
        className
      }
    );
  }
);
FormHelperText.displayName = "FormHelperText";

// node_modules/@chakra-ui/form-control/dist/chunk-VGESXGVT.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var [FormErrorStylesProvider, useFormErrorStyles] = createContext({
  name: `FormErrorStylesContext`,
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
});
var FormErrorMessage = forwardRef(
  (props, ref) => {
    const styles = useMultiStyleConfig("FormError", props);
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();
    if (!(field == null ? void 0 : field.isInvalid))
      return null;
    return (0, import_jsx_runtime42.jsx)(FormErrorStylesProvider, { value: styles, children: (0, import_jsx_runtime42.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getErrorMessageProps(ownProps, ref),
        className: cx("chakra-form__error-message", props.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...styles.text
        }
      }
    ) });
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
var FormErrorIcon = forwardRef((props, ref) => {
  const styles = useFormErrorStyles();
  const field = useFormControlContext();
  if (!(field == null ? void 0 : field.isInvalid))
    return null;
  const _className = cx("chakra-form__error-icon", props.className);
  return (0, import_jsx_runtime42.jsx)(
    Icon,
    {
      ref,
      "aria-hidden": true,
      ...props,
      __css: styles.icon,
      className: _className,
      children: (0, import_jsx_runtime42.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
FormErrorIcon.displayName = "FormErrorIcon";

// node_modules/@chakra-ui/form-control/dist/chunk-H46NUPBZ.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var FormLabel = forwardRef(function FormLabel2(passedProps, ref) {
  var _a2;
  const styles = useStyleConfig("FormLabel", passedProps);
  const props = omitThemingProps(passedProps);
  const {
    className,
    children,
    requiredIndicator = (0, import_jsx_runtime43.jsx)(RequiredIndicator, {}),
    optionalIndicator = null,
    ...rest
  } = props;
  const field = useFormControlContext();
  const ownProps = (_a2 = field == null ? void 0 : field.getLabelProps(rest, ref)) != null ? _a2 : { ref, ...rest };
  return (0, import_jsx_runtime43.jsxs)(
    chakra.label,
    {
      ...ownProps,
      className: cx("chakra-form__label", props.className),
      __css: {
        display: "block",
        textAlign: "start",
        ...styles
      },
      children: [
        children,
        (field == null ? void 0 : field.isRequired) ? requiredIndicator : optionalIndicator
      ]
    }
  );
});
FormLabel.displayName = "FormLabel";
var RequiredIndicator = forwardRef(
  function RequiredIndicator2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    if (!(field == null ? void 0 : field.isRequired))
      return null;
    const className = cx("chakra-form__required-indicator", props.className);
    return (0, import_jsx_runtime43.jsx)(
      chakra.span,
      {
        ...field == null ? void 0 : field.getRequiredIndicatorProps(props, ref),
        __css: styles.requiredIndicator,
        className
      }
    );
  }
);
RequiredIndicator.displayName = "RequiredIndicator";

// node_modules/@chakra-ui/form-control/dist/chunk-56K2BSAJ.mjs
function useFormControl(props) {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  };
}
function useFormControlProps(props) {
  var _a2, _b, _c;
  const field = useFormControlContext();
  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus: onFocus3,
    onBlur: onBlur3,
    ...rest
  } = props;
  const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if ((field == null ? void 0 : field.hasFeedbackText) && (field == null ? void 0 : field.isInvalid)) {
    labelIds.push(field.feedbackId);
  }
  if (field == null ? void 0 : field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id != null ? id : field == null ? void 0 : field.id,
    isDisabled: (_a2 = disabled != null ? disabled : isDisabled) != null ? _a2 : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_b = readOnly != null ? readOnly : isReadOnly) != null ? _b : field == null ? void 0 : field.isReadOnly,
    isRequired: (_c = required != null ? required : isRequired) != null ? _c : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus3),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur3)
  };
}

// node_modules/@chakra-ui/visually-hidden/dist/chunk-3JHDQ75O.mjs
var visuallyHiddenStyle = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};

// node_modules/@chakra-ui/visually-hidden/dist/chunk-KO6Q73AP.mjs
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHiddenInput.displayName = "VisuallyHiddenInput";

// node_modules/@zag-js/dom-query/dist/index.mjs
function itemById(v, id) {
  return v.find((node2) => node2.id === id);
}
function indexOfId(v, id) {
  const item = itemById(v, id);
  return item ? v.indexOf(item) : -1;
}
var getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? "";
var match = (valueText, query2) => valueText.toLowerCase().startsWith(query2.toLowerCase());
var wrap = (v, idx) => {
  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);
};
function getByText(v, text, currentId) {
  const index = currentId ? indexOfId(v, currentId) : -1;
  let items = currentId ? wrap(v, index) : v;
  const isSingleKey = text.length === 1;
  if (isSingleKey) {
    items = items.filter((item) => item.id !== currentId);
  }
  return items.find((item) => match(getValueText(item), text));
}
function getByTypeaheadImpl(_items, options) {
  const { state, activeId, key, timeout = 350 } = options;
  const search = state.keysSoFar + key;
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const query2 = isRepeated ? search[0] : search;
  let items = _items.slice();
  const next = getByText(items, query2, activeId);
  function cleanup() {
    clearTimeout(state.timer);
    state.timer = -1;
  }
  function update(value) {
    state.keysSoFar = value;
    cleanup();
    if (value !== "") {
      state.timer = +setTimeout(() => {
        update("");
        cleanup();
      }, timeout);
    }
  }
  update(search);
  return next;
}
var getByTypeahead = Object.assign(getByTypeaheadImpl, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
var isDom = () => typeof document !== "undefined";

// node_modules/@zag-js/focus-visible/dist/index.mjs
var hasSetup = false;
var modality = null;
var hasEventBeforeFocus = false;
var hasBlurredWindowRecently = false;
var handlers = /* @__PURE__ */ new Set();
function trigger(modality2, event) {
  handlers.forEach((handler) => handler(modality2, event));
}
var isMac = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;
function isValidKey(e) {
  return !(e.metaKey || !isMac && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function onKeyboardEvent(event) {
  hasEventBeforeFocus = true;
  if (isValidKey(event)) {
    modality = "keyboard";
    trigger("keyboard", event);
  }
}
function onPointerEvent(event) {
  modality = "pointer";
  if (event.type === "mousedown" || event.type === "pointerdown") {
    hasEventBeforeFocus = true;
    const target = event.composedPath ? event.composedPath()[0] : event.target;
    let matches = false;
    try {
      matches = target.matches(":focus-visible");
    } catch {
    }
    if (matches)
      return;
    trigger("pointer", event);
  }
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
function onClickEvent(e) {
  if (isVirtualClick(e)) {
    hasEventBeforeFocus = true;
    modality = "virtual";
  }
}
function onWindowFocus(event) {
  if (event.target === window || event.target === document) {
    return;
  }
  if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
    modality = "virtual";
    trigger("virtual", event);
  }
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = false;
}
function onWindowBlur() {
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = true;
}
function isFocusVisible() {
  return modality !== "pointer";
}
function setupGlobalFocusEvents() {
  if (!isDom() || hasSetup) {
    return;
  }
  const { focus: focus2 } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function focusElement(...args) {
    hasEventBeforeFocus = true;
    focus2.apply(this, args);
  };
  document.addEventListener("keydown", onKeyboardEvent, true);
  document.addEventListener("keyup", onKeyboardEvent, true);
  document.addEventListener("click", onClickEvent, true);
  window.addEventListener("focus", onWindowFocus, true);
  window.addEventListener("blur", onWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", onPointerEvent, true);
    document.addEventListener("pointermove", onPointerEvent, true);
    document.addEventListener("pointerup", onPointerEvent, true);
  } else {
    document.addEventListener("mousedown", onPointerEvent, true);
    document.addEventListener("mousemove", onPointerEvent, true);
    document.addEventListener("mouseup", onPointerEvent, true);
  }
  hasSetup = true;
}
function trackFocusVisible(fn) {
  setupGlobalFocusEvents();
  fn(isFocusVisible());
  const handler = () => fn(isFocusVisible());
  handlers.add(handler);
  return () => {
    handlers.delete(handler);
  };
}

// node_modules/@chakra-ui/checkbox/dist/chunk-7D6N5TE5.mjs
var import_react27 = __toESM(require_react(), 1);
function omit(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
function useCheckbox(props = {}) {
  const formControlProps = useFormControlProps(props);
  const {
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    id,
    onBlur: onBlur3,
    onFocus: onFocus3,
    "aria-describedby": ariaDescribedBy
  } = formControlProps;
  const {
    defaultChecked,
    isChecked: checkedProp,
    isFocusable,
    onChange,
    isIndeterminate,
    name,
    value,
    tabIndex = void 0,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-invalid": ariaInvalid,
    ...rest
  } = props;
  const htmlProps = omit(rest, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]);
  const onChangeProp = useCallbackRef(onChange);
  const onBlurProp = useCallbackRef(onBlur3);
  const onFocusProp = useCallbackRef(onFocus3);
  const [isFocusVisible2, setIsFocusVisible] = (0, import_react27.useState)(false);
  const [isFocused, setFocused] = (0, import_react27.useState)(false);
  const [isHovered, setHovered] = (0, import_react27.useState)(false);
  const [isActive, setActive] = (0, import_react27.useState)(false);
  (0, import_react27.useEffect)(() => {
    return trackFocusVisible(setIsFocusVisible);
  }, []);
  const inputRef = (0, import_react27.useRef)(null);
  const [rootIsLabelElement, setRootIsLabelElement] = (0, import_react27.useState)(true);
  const [checkedState, setCheckedState] = (0, import_react27.useState)(!!defaultChecked);
  const isControlled = checkedProp !== void 0;
  const isChecked = isControlled ? checkedProp : checkedState;
  const handleChange = (0, import_react27.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        if (isChecked) {
          setCheckedState(event.target.checked);
        } else {
          setCheckedState(isIndeterminate ? true : event.target.checked);
        }
      }
      onChangeProp == null ? void 0 : onChangeProp(event);
    },
    [
      isReadOnly,
      isDisabled,
      isChecked,
      isControlled,
      isIndeterminate,
      onChangeProp
    ]
  );
  useSafeLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);
  useUpdateEffect(() => {
    if (isDisabled) {
      setFocused(false);
    }
  }, [isDisabled, setFocused]);
  useSafeLayoutEffect(() => {
    const el = inputRef.current;
    if (!(el == null ? void 0 : el.form))
      return;
    const formResetListener = () => {
      setCheckedState(!!defaultChecked);
    };
    el.form.addEventListener("reset", formResetListener);
    return () => {
      var _a2;
      return (_a2 = el.form) == null ? void 0 : _a2.removeEventListener("reset", formResetListener);
    };
  }, []);
  const trulyDisabled = isDisabled && !isFocusable;
  const onKeyDown = (0, import_react27.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react27.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.checked !== isChecked;
    if (notInSync) {
      setCheckedState(inputRef.current.checked);
    }
  }, [inputRef.current]);
  const getCheckboxProps = (0, import_react27.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      const onPressDown = (event) => {
        if (isFocused) {
          event.preventDefault();
        }
        setActive(true);
      };
      return {
        ...props2,
        ref: forwardedRef,
        "data-active": dataAttr(isActive),
        "data-hover": dataAttr(isHovered),
        "data-checked": dataAttr(isChecked),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
        "data-indeterminate": dataAttr(isIndeterminate),
        "data-disabled": dataAttr(isDisabled),
        "data-invalid": dataAttr(isInvalid),
        "data-readonly": dataAttr(isReadOnly),
        "aria-hidden": true,
        onMouseDown: callAllHandlers(props2.onMouseDown, onPressDown),
        onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
        onMouseEnter: callAllHandlers(
          props2.onMouseEnter,
          () => setHovered(true)
        ),
        onMouseLeave: callAllHandlers(
          props2.onMouseLeave,
          () => setHovered(false)
        )
      };
    },
    [
      isActive,
      isChecked,
      isDisabled,
      isFocused,
      isFocusVisible2,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getIndicatorProps = (0, import_react27.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
      "data-indeterminate": dataAttr(isIndeterminate),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly)
    }),
    [
      isActive,
      isChecked,
      isDisabled,
      isFocused,
      isFocusVisible2,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getRootProps = (0, import_react27.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...htmlProps,
      ...props2,
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setRootIsLabelElement(node2.tagName === "LABEL");
      }),
      onClick: callAllHandlers(props2.onClick, () => {
        var _a2;
        if (!rootIsLabelElement) {
          (_a2 = inputRef.current) == null ? void 0 : _a2.click();
          requestAnimationFrame(() => {
            var _a22;
            (_a22 = inputRef.current) == null ? void 0 : _a22.focus({ preventScroll: true });
          });
        }
      }),
      "data-disabled": dataAttr(isDisabled),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [htmlProps, isDisabled, isChecked, isInvalid, rootIsLabelElement]
  );
  const getInputProps = (0, import_react27.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      return {
        ...props2,
        ref: mergeRefs(inputRef, forwardedRef),
        type: "checkbox",
        name,
        value,
        id,
        tabIndex,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          props2.onBlur,
          onBlurProp,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          props2.onFocus,
          onFocusProp,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        required: isRequired,
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-invalid": ariaInvalid ? Boolean(ariaInvalid) : isInvalid,
        "aria-describedby": ariaDescribedBy,
        "aria-disabled": isDisabled,
        style: visuallyHiddenStyle
      };
    },
    [
      name,
      value,
      id,
      handleChange,
      onBlurProp,
      onFocusProp,
      onKeyDown,
      onKeyUp,
      isRequired,
      isChecked,
      trulyDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      ariaInvalid,
      isInvalid,
      ariaDescribedBy,
      isDisabled,
      tabIndex
    ]
  );
  const getLabelProps = (0, import_react27.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent),
      "data-disabled": dataAttr(isDisabled),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [isChecked, isDisabled, isInvalid]
  );
  const state = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isIndeterminate,
    isDisabled,
    isReadOnly,
    isRequired
  };
  return {
    state,
    getRootProps,
    getCheckboxProps,
    getIndicatorProps,
    getInputProps,
    getLabelProps,
    htmlProps
  };
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/checkbox/dist/chunk-CWVAJCXJ.mjs
var import_react28 = __toESM(require_react(), 1);
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var controlStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
};
var rootStyles = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
};
var checkAnim = keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
});
var indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var indeterminateScaleAnim = keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});
var Checkbox = forwardRef(function Checkbox2(props, ref) {
  const group = useCheckboxGroupContext();
  const mergedProps = { ...group, ...props };
  const styles = useMultiStyleConfig("Checkbox", mergedProps);
  const ownProps = omitThemingProps(props);
  const {
    spacing = "0.5rem",
    className,
    children,
    iconColor,
    iconSize,
    icon = (0, import_jsx_runtime44.jsx)(CheckboxIcon, {}),
    isChecked: isCheckedProp,
    isDisabled = group == null ? void 0 : group.isDisabled,
    onChange: onChangeProp,
    inputProps,
    ...rest
  } = ownProps;
  let isChecked = isCheckedProp;
  if ((group == null ? void 0 : group.value) && ownProps.value) {
    isChecked = group.value.includes(ownProps.value);
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && ownProps.value) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const {
    state,
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps
  } = useCheckbox({
    ...rest,
    isDisabled,
    isChecked,
    onChange
  });
  const shouldAnimate = useInitialAnimationState(state.isChecked);
  const iconStyles = (0, import_react28.useMemo)(
    () => ({
      animation: !shouldAnimate ? void 0 : state.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
      fontSize: iconSize,
      color: iconColor,
      ...styles.icon
    }),
    [iconColor, iconSize, shouldAnimate, state.isIndeterminate, styles.icon]
  );
  const clonedIcon = (0, import_react28.cloneElement)(icon, {
    __css: iconStyles,
    isIndeterminate: state.isIndeterminate,
    isChecked: state.isChecked
  });
  return (0, import_jsx_runtime44.jsxs)(
    chakra.label,
    {
      __css: { ...rootStyles, ...styles.container },
      className: cx("chakra-checkbox", className),
      ...getRootProps(),
      children: [
        (0, import_jsx_runtime44.jsx)(
          "input",
          {
            className: "chakra-checkbox__input",
            ...getInputProps(inputProps, ref)
          }
        ),
        (0, import_jsx_runtime44.jsx)(
          chakra.span,
          {
            __css: { ...controlStyles, ...styles.control },
            className: "chakra-checkbox__control",
            ...getCheckboxProps(),
            children: clonedIcon
          }
        ),
        children && (0, import_jsx_runtime44.jsx)(
          chakra.span,
          {
            className: "chakra-checkbox__label",
            ...getLabelProps(),
            __css: {
              marginStart: spacing,
              ...styles.label
            },
            children
          }
        )
      ]
    }
  );
});
Checkbox.displayName = "Checkbox";

// node_modules/@chakra-ui/control-box/dist/chunk-P2CZ2AGB.mjs
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var ControlBox = (props) => {
  const {
    type = "checkbox",
    _hover,
    _invalid,
    _disabled,
    _focus,
    _checked,
    _child = { opacity: 0 },
    _checkedAndChild = { opacity: 1 },
    _checkedAndDisabled,
    _checkedAndFocus,
    _checkedAndHover,
    children,
    ...rest
  } = props;
  const checkedAndDisabled = `input[type=${type}]:checked:disabled + &`;
  const checkedAndHover = `input[type=${type}]:checked:hover:not(:disabled) + &`;
  const checkedAndFocus = `input[type=${type}]:checked:focus + &`;
  const disabled = `input[type=${type}]:disabled + &`;
  const focus2 = `input[type=${type}]:focus + &`;
  const hover = `input[type=${type}]:hover:not(:disabled):not(:checked) + &`;
  const checked = `input[type=${type}]:checked + &, input[type=${type}][aria-checked=mixed] + &`;
  const invalid = `input[type=${type}][aria-invalid=true] + &`;
  const child = `& > *`;
  return (0, import_jsx_runtime45.jsx)(
    chakra.div,
    {
      ...rest,
      "aria-hidden": true,
      __css: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transitionProperty: "common",
        transitionDuration: "fast",
        flexShrink: 0,
        [focus2]: _focus,
        [hover]: _hover,
        [disabled]: _disabled,
        [invalid]: _invalid,
        [checkedAndDisabled]: _checkedAndDisabled,
        [checkedAndFocus]: _checkedAndFocus,
        [checkedAndHover]: _checkedAndHover,
        [child]: _child,
        [checked]: {
          ..._checked,
          [child]: _checkedAndChild
        }
      },
      children
    }
  );
};
ControlBox.displayName = "ControlBox";

// node_modules/@chakra-ui/number-utils/dist/index.mjs
function toNumber(value) {
  const num = parseFloat(value);
  return typeof num !== "number" || Number.isNaN(num) ? 0 : num;
}
function toPrecision(value, precision) {
  let nextValue = toNumber(value);
  const scaleFactor = 10 ** (precision != null ? precision : 10);
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
  return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
function countDecimalPlaces(value) {
  if (!Number.isFinite(value))
    return 0;
  let e = 1;
  let p = 0;
  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }
  return p;
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function roundValueToStep(value, from, step) {
  const nextValue = Math.round((value - from) / step) * step + from;
  const precision = countDecimalPlaces(step);
  return toPrecision(nextValue, precision);
}
function clampValue(value, min, max) {
  if (value == null)
    return value;
  if (max < min) {
    console.warn("clamp: max cannot be less than min");
  }
  return Math.min(Math.max(value, min), max);
}

// node_modules/@chakra-ui/counter/dist/chunk-AB3TPYVS.mjs
var import_react29 = __toESM(require_react(), 1);
function useCounter(props = {}) {
  const {
    onChange,
    precision: precisionProp,
    defaultValue,
    value: valueProp,
    step: stepProp = 1,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    keepWithinRange = true
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [valueState, setValue] = (0, import_react29.useState)(() => {
    var _a2;
    if (defaultValue == null)
      return "";
    return (_a2 = cast(defaultValue, stepProp, precisionProp)) != null ? _a2 : "";
  });
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const decimalPlaces = getDecimalPlaces(parse(value), stepProp);
  const precision = precisionProp != null ? precisionProp : decimalPlaces;
  const update = (0, import_react29.useCallback)(
    (next) => {
      if (next === value)
        return;
      if (!isControlled) {
        setValue(next.toString());
      }
      onChangeProp == null ? void 0 : onChangeProp(next.toString(), parse(next));
    },
    [onChangeProp, isControlled, value]
  );
  const clamp = (0, import_react29.useCallback)(
    (value2) => {
      let nextValue = value2;
      if (keepWithinRange) {
        nextValue = clampValue(nextValue, min, max);
      }
      return toPrecision(nextValue, precision);
    },
    [precision, keepWithinRange, max, min]
  );
  const increment = (0, import_react29.useCallback)(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse(step);
      } else {
        next = parse(value) + step;
      }
      next = clamp(next);
      update(next);
    },
    [clamp, stepProp, update, value]
  );
  const decrement = (0, import_react29.useCallback)(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse(-step);
      } else {
        next = parse(value) - step;
      }
      next = clamp(next);
      update(next);
    },
    [clamp, stepProp, update, value]
  );
  const reset = (0, import_react29.useCallback)(() => {
    var _a2;
    let next;
    if (defaultValue == null) {
      next = "";
    } else {
      next = (_a2 = cast(defaultValue, stepProp, precisionProp)) != null ? _a2 : min;
    }
    update(next);
  }, [defaultValue, precisionProp, stepProp, update, min]);
  const castValue = (0, import_react29.useCallback)(
    (value2) => {
      var _a2;
      const nextValue = (_a2 = cast(value2, stepProp, precision)) != null ? _a2 : min;
      update(nextValue);
    },
    [precision, stepProp, update, min]
  );
  const valueAsNumber = parse(value);
  const isOutOfRange = valueAsNumber > max || valueAsNumber < min;
  const isAtMax = valueAsNumber === max;
  const isAtMin = valueAsNumber === min;
  return {
    isOutOfRange,
    isAtMax,
    isAtMin,
    precision,
    value,
    valueAsNumber,
    update,
    reset,
    increment,
    decrement,
    clamp,
    cast: castValue,
    setValue
  };
}
function parse(value) {
  return parseFloat(value.toString().replace(/[^\w.-]+/g, ""));
}
function getDecimalPlaces(value, step) {
  return Math.max(countDecimalPlaces(step), countDecimalPlaces(value));
}
function cast(value, step, precision) {
  const parsedValue = parse(value);
  if (Number.isNaN(parsedValue))
    return void 0;
  const decimalPlaces = getDecimalPlaces(parsedValue, step);
  return toPrecision(parsedValue, precision != null ? precision : decimalPlaces);
}

// node_modules/@chakra-ui/editable/dist/chunk-WYY72ITE.mjs
var [EditableStylesProvider, useEditableStyles] = createContext({
  name: `EditableStylesContext`,
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
});
var [EditableProvider, useEditableContext] = createContext({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});

// node_modules/@chakra-ui/editable/dist/chunk-47M7OZ3U.mjs
function useEditableState() {
  const { isEditing, onSubmit, onCancel, onEdit, isDisabled } = useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled
  };
}

// node_modules/@chakra-ui/editable/dist/chunk-6XCKNNTK.mjs
var commonStyles = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent"
};

// node_modules/@chakra-ui/editable/dist/chunk-7XO4TBDN.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var EditableInput = forwardRef(
  function EditableInput2(props, ref) {
    const { getInputProps } = useEditableContext();
    const styles = useEditableStyles();
    const inputProps = getInputProps(props, ref);
    const _className = cx("chakra-editable__input", props.className);
    return (0, import_jsx_runtime46.jsx)(
      chakra.input,
      {
        ...inputProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles.input
        },
        className: _className
      }
    );
  }
);
EditableInput.displayName = "EditableInput";

// node_modules/@chakra-ui/editable/dist/chunk-USE7AZZJ.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var EditablePreview = forwardRef(
  function EditablePreview2(props, ref) {
    const { getPreviewProps } = useEditableContext();
    const styles = useEditableStyles();
    const previewProps = getPreviewProps(props, ref);
    const _className = cx("chakra-editable__preview", props.className);
    return (0, import_jsx_runtime47.jsx)(
      chakra.span,
      {
        ...previewProps,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...commonStyles,
          ...styles.preview
        },
        className: _className
      }
    );
  }
);
EditablePreview.displayName = "EditablePreview";

// node_modules/@chakra-ui/editable/dist/chunk-KE6CZM3P.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var EditableTextarea = forwardRef(
  function EditableTextarea2(props, ref) {
    const { getTextareaProps } = useEditableContext();
    const styles = useEditableStyles();
    const textareaProps = getTextareaProps(props, ref);
    const _className = cx("chakra-editable__textarea", props.className);
    return (0, import_jsx_runtime48.jsx)(
      chakra.textarea,
      {
        ...textareaProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles.textarea
        },
        className: _className
      }
    );
  }
);
EditableTextarea.displayName = "EditableTextarea";

// node_modules/@chakra-ui/react-use-focus-on-pointer-down/dist/index.mjs
function isRefObject2(val) {
  return "current" in val;
}
var isDom2 = () => typeof window !== "undefined";
function getPlatform() {
  var _a2;
  const agent = navigator.userAgentData;
  return (_a2 = agent == null ? void 0 : agent.platform) != null ? _a2 : navigator.platform;
}
var vn = (v) => isDom2() && v.test(navigator.vendor);
var pt = (v) => isDom2() && v.test(getPlatform());
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isSafari = () => isApple() && vn(/apple/i);
function useFocusOnPointerDown(props) {
  const { ref, elements, enabled } = props;
  const doc = () => {
    var _a2, _b;
    return (_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) != null ? _b : document;
  };
  useEventListener(doc, "pointerdown", (event) => {
    if (!isSafari() || !enabled)
      return;
    const target = event.target;
    const els = elements != null ? elements : [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject2(elementOrRef) ? elementOrRef.current : elementOrRef;
      return (el == null ? void 0 : el.contains(target)) || el === target;
    });
    if (doc().activeElement !== target && isValidTarget) {
      event.preventDefault();
      target.focus();
    }
  });
}

// node_modules/@chakra-ui/editable/dist/chunk-TXN5ELBN.mjs
var import_react30 = __toESM(require_react(), 1);
function contains2(parent, child) {
  if (!parent)
    return false;
  return parent === child || parent.contains(child);
}
function useEditable(props = {}) {
  const {
    onChange: onChangeProp,
    onCancel: onCancelProp,
    onSubmit: onSubmitProp,
    onBlur: onBlurProp,
    value: valueProp,
    isDisabled,
    defaultValue,
    startWithEditView,
    isPreviewFocusable = true,
    submitOnBlur = true,
    selectAllOnFocus = true,
    placeholder,
    onEdit: onEditCallback,
    finalFocusRef,
    ...htmlProps
  } = props;
  const onEditProp = useCallbackRef(onEditCallback);
  const defaultIsEditing = Boolean(startWithEditView && !isDisabled);
  const [isEditing, setIsEditing] = (0, import_react30.useState)(defaultIsEditing);
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp
  });
  const [prevValue, setPrevValue] = (0, import_react30.useState)(value);
  const inputRef = (0, import_react30.useRef)(null);
  const previewRef = (0, import_react30.useRef)(null);
  const editButtonRef = (0, import_react30.useRef)(null);
  const cancelButtonRef = (0, import_react30.useRef)(null);
  const submitButtonRef = (0, import_react30.useRef)(null);
  useFocusOnPointerDown({
    ref: inputRef,
    enabled: isEditing,
    elements: [cancelButtonRef, submitButtonRef]
  });
  const isInteractive = !isEditing && !isDisabled;
  useSafeLayoutEffect(() => {
    var _a2, _b;
    if (isEditing) {
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      if (selectAllOnFocus)
        (_b = inputRef.current) == null ? void 0 : _b.select();
    }
  }, []);
  useUpdateEffect(() => {
    var _a2, _b, _c, _d;
    if (!isEditing) {
      if (finalFocusRef) {
        (_a2 = finalFocusRef.current) == null ? void 0 : _a2.focus();
      } else {
        (_b = editButtonRef.current) == null ? void 0 : _b.focus();
      }
      return;
    }
    (_c = inputRef.current) == null ? void 0 : _c.focus();
    if (selectAllOnFocus) {
      (_d = inputRef.current) == null ? void 0 : _d.select();
    }
    onEditProp == null ? void 0 : onEditProp();
  }, [isEditing, onEditProp, selectAllOnFocus]);
  const onEdit = (0, import_react30.useCallback)(() => {
    if (isInteractive) {
      setIsEditing(true);
    }
  }, [isInteractive]);
  const onUpdatePrevValue = (0, import_react30.useCallback)(() => {
    setPrevValue(value);
  }, [value]);
  const onCancel = (0, import_react30.useCallback)(() => {
    setIsEditing(false);
    setValue(prevValue);
    onCancelProp == null ? void 0 : onCancelProp(prevValue);
    onBlurProp == null ? void 0 : onBlurProp(prevValue);
  }, [onCancelProp, onBlurProp, setValue, prevValue]);
  const onSubmit = (0, import_react30.useCallback)(() => {
    setIsEditing(false);
    setPrevValue(value);
    onSubmitProp == null ? void 0 : onSubmitProp(value);
    onBlurProp == null ? void 0 : onBlurProp(prevValue);
  }, [value, onSubmitProp, onBlurProp, prevValue]);
  (0, import_react30.useEffect)(() => {
    if (isEditing)
      return;
    const inputEl = inputRef.current;
    if ((inputEl == null ? void 0 : inputEl.ownerDocument.activeElement) === inputEl) {
      inputEl == null ? void 0 : inputEl.blur();
    }
  }, [isEditing]);
  const onChange = (0, import_react30.useCallback)(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [setValue]
  );
  const onKeyDown = (0, import_react30.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel,
        Enter: (event2) => {
          if (!event2.shiftKey && !event2.metaKey) {
            onSubmit();
          }
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel, onSubmit]
  );
  const onKeyDownWithoutSubmit = (0, import_react30.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel]
  );
  const isValueEmpty = value.length === 0;
  const onBlur3 = (0, import_react30.useCallback)(
    (event) => {
      var _a2;
      if (!isEditing)
        return;
      const doc = event.currentTarget.ownerDocument;
      const relatedTarget = (_a2 = event.relatedTarget) != null ? _a2 : doc.activeElement;
      const targetIsCancel = contains2(cancelButtonRef.current, relatedTarget);
      const targetIsSubmit = contains2(submitButtonRef.current, relatedTarget);
      const isValidBlur = !targetIsCancel && !targetIsSubmit;
      if (isValidBlur) {
        if (submitOnBlur) {
          onSubmit();
        } else {
          onCancel();
        }
      }
    },
    [submitOnBlur, onSubmit, onCancel, isEditing]
  );
  const getPreviewProps = (0, import_react30.useCallback)(
    (props2 = {}, ref = null) => {
      const tabIndex = isInteractive && isPreviewFocusable ? 0 : void 0;
      return {
        ...props2,
        ref: mergeRefs(ref, previewRef),
        children: isValueEmpty ? placeholder : value,
        hidden: isEditing,
        "aria-disabled": ariaAttr(isDisabled),
        tabIndex,
        onFocus: callAllHandlers(props2.onFocus, onEdit, onUpdatePrevValue)
      };
    },
    [
      isDisabled,
      isEditing,
      isInteractive,
      isPreviewFocusable,
      isValueEmpty,
      onEdit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getInputProps = (0, import_react30.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs(ref, inputRef),
      disabled: isDisabled,
      "aria-disabled": ariaAttr(isDisabled),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled,
      isEditing,
      onBlur3,
      onChange,
      onKeyDown,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getTextareaProps = (0, import_react30.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs(ref, inputRef),
      disabled: isDisabled,
      "aria-disabled": ariaAttr(isDisabled),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDownWithoutSubmit),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled,
      isEditing,
      onBlur3,
      onChange,
      onKeyDownWithoutSubmit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getEditButtonProps = (0, import_react30.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Edit",
      ...props2,
      type: "button",
      onClick: callAllHandlers(props2.onClick, onEdit),
      ref: mergeRefs(ref, editButtonRef),
      disabled: isDisabled
    }),
    [onEdit, isDisabled]
  );
  const getSubmitButtonProps = (0, import_react30.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      "aria-label": "Submit",
      ref: mergeRefs(submitButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onSubmit),
      disabled: isDisabled
    }),
    [onSubmit, isDisabled]
  );
  const getCancelButtonProps = (0, import_react30.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Cancel",
      id: "cancel",
      ...props2,
      ref: mergeRefs(cancelButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onCancel),
      disabled: isDisabled
    }),
    [onCancel, isDisabled]
  );
  return {
    isEditing,
    isDisabled,
    isValueEmpty,
    value,
    onEdit,
    onCancel,
    onSubmit,
    getPreviewProps,
    getInputProps,
    getTextareaProps,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/editable/dist/chunk-ROCN3PRT.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var Editable = forwardRef(function Editable2(props, ref) {
  const styles = useMultiStyleConfig("Editable", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, ...context } = useEditable(ownProps);
  const { isEditing, onSubmit, onCancel, onEdit } = context;
  const _className = cx("chakra-editable", props.className);
  const children = runIfFn(props.children, {
    isEditing,
    onSubmit,
    onCancel,
    onEdit
  });
  return (0, import_jsx_runtime49.jsx)(EditableProvider, { value: context, children: (0, import_jsx_runtime49.jsx)(EditableStylesProvider, { value: styles, children: (0, import_jsx_runtime49.jsx)(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: _className,
      children
    }
  ) }) });
});
Editable.displayName = "Editable";

// node_modules/@chakra-ui/editable/dist/chunk-OKWGAP7R.mjs
function useEditableControls() {
  const {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  } = useEditableContext();
  return {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  };
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r)
    return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0)
        continue;
      t[n] = r[n];
    }
  return t;
}

// node_modules/react-focus-lock/dist/es2015/Combination.js
var React9 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/Lock.js
var React6 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/focus-lock/dist/es2015/constants.js
var FOCUS_GROUP = "data-focus-lock";
var FOCUS_DISABLED = "data-focus-lock-disabled";
var FOCUS_ALLOW = "data-no-focus-lock";
var FOCUS_AUTO = "data-autofocus-inside";
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react31 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react31.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs2(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/react-focus-lock/dist/es2015/FocusGuard.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var hiddenGuard = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
var InFocusGuard = function InFocusGuard2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? null : _ref$children;
  return React2.createElement(React2.Fragment, null, React2.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && React2.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};
InFocusGuard.propTypes = true ? {
  children: import_prop_types.default.node
} : {};

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React3 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react32 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults2, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults2;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter3) {
          pendingQueue = pendingQueue.filter(filter3);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults2, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults2, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React4 = __toESM(require_react());
var import_react33 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React5 = __toESM(require_react());
var SideCar = function(_a2) {
  var sideCar2 = _a2.sideCar, rest = __rest(_a2, ["sideCar"]);
  if (!sideCar2) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar2.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React5.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref2) {
  var target = _ref2.target, currentTarget = _ref2.currentTarget;
  return {
    target,
    currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true,
  ssr: typeof document !== "undefined"
});

// node_modules/react-focus-lock/dist/es2015/scope.js
var import_react34 = __toESM(require_react());
var focusScope = (0, import_react34.createContext)(void 0);

// node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock = React6.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;
  var _React$useState = React6.useState(), realObserved = _React$useState[0], setObserved = _React$useState[1];
  var observed = React6.useRef();
  var isActive = React6.useRef(false);
  var originalFocusedElement = React6.useRef(null);
  var _React$useState2 = React6.useState({}), update = _React$useState2[1];
  var children = props.children, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$noFocusGuards = props.noFocusGuards, noFocusGuards = _props$noFocusGuards === void 0 ? false : _props$noFocusGuards, _props$persistentFocu = props.persistentFocus, persistentFocus = _props$persistentFocu === void 0 ? false : _props$persistentFocu, _props$crossFrame = props.crossFrame, crossFrame = _props$crossFrame === void 0 ? true : _props$crossFrame, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, allowTextSelection = props.allowTextSelection, group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container2 = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar2 = props.sideCar, _props$returnFocus = props.returnFocus, shouldReturnFocus = _props$returnFocus === void 0 ? false : _props$returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
  var _React$useState3 = React6.useState({}), id = _React$useState3[0];
  var onActivation = React6.useCallback(function(_ref2) {
    var captureFocusRestore2 = _ref2.captureFocusRestore;
    if (!originalFocusedElement.current) {
      var _document;
      var activeElement = (_document = document) == null ? void 0 : _document.activeElement;
      originalFocusedElement.current = activeElement;
      if (activeElement !== document.body) {
        originalFocusedElement.current = captureFocusRestore2(activeElement);
      }
    }
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
    update();
  }, [onActivationCallback]);
  var onDeactivation = React6.useCallback(function() {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
    update();
  }, [onDeactivationCallback]);
  var returnFocus = React6.useCallback(function(allowDefer) {
    var focusRestore = originalFocusedElement.current;
    if (focusRestore) {
      var returnFocusTo = (typeof focusRestore === "function" ? focusRestore() : focusRestore) || document.body;
      var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function() {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus3 = React6.useCallback(function(event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur3 = mediumBlur.useMedium;
  var setObserveNode = React6.useCallback(function(newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  if (true) {
    if (typeof allowTextSelection !== "undefined") {
      console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default");
    }
    React6.useEffect(function() {
      if (!observed.current && typeof Container2 !== "string") {
        console.error("FocusLock: could not obtain ref to internal node");
      }
    }, []);
  }
  var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && "disabled", _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
  var mergedRef = useMergeRefs2([parentRef, setObserveNode]);
  var focusScopeValue = React6.useMemo(function() {
    return {
      observed,
      shards,
      enabled: !disabled,
      active: isActive.current
    };
  }, [disabled, isActive.current, shards, realObserved]);
  return React6.createElement(React6.Fragment, null, hasLeadingGuards && [
    React6.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }),
    hasPositiveIndices ? React6.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    }) : null
  ], !disabled && React6.createElement(SideCar2, {
    id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled,
    persistentFocus,
    crossFrame,
    autoFocus,
    whiteList,
    shards,
    onActivation,
    onDeactivation,
    returnFocus,
    focusOptions
  }), React6.createElement(Container2, _extends({
    ref: mergedRef
  }, lockProps, {
    className,
    onBlur: onBlur3,
    onFocus: onFocus3
  }), React6.createElement(focusScope.Provider, {
    value: focusScopeValue
  }, children)), hasTailingGuards && React6.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = true ? {
  children: import_prop_types2.node,
  disabled: import_prop_types2.bool,
  returnFocus: (0, import_prop_types2.oneOfType)([import_prop_types2.bool, import_prop_types2.object, import_prop_types2.func]),
  focusOptions: import_prop_types2.object,
  noFocusGuards: import_prop_types2.bool,
  hasPositiveIndices: import_prop_types2.bool,
  allowTextSelection: import_prop_types2.bool,
  autoFocus: import_prop_types2.bool,
  persistentFocus: import_prop_types2.bool,
  crossFrame: import_prop_types2.bool,
  group: import_prop_types2.string,
  className: import_prop_types2.string,
  whiteList: import_prop_types2.func,
  shards: (0, import_prop_types2.arrayOf)(import_prop_types2.any),
  as: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.func, import_prop_types2.object]),
  lockProps: import_prop_types2.object,
  onActivation: import_prop_types2.func,
  onDeactivation: import_prop_types2.func,
  sideCar: import_prop_types2.any.isRequired
} : {};
var Lock_default = FocusLock;

// node_modules/react-focus-lock/dist/es2015/Trap.js
var React8 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/react-clientside-effect/lib/index.es.js
var import_react35 = __toESM(require_react());
function withSideEffect(reducePropsToState2, handleStateChangeOnClient2) {
  if (true) {
    if (typeof reducePropsToState2 !== "function") {
      throw new Error("Expected reducePropsToState to be a function.");
    }
    if (typeof handleStateChangeOnClient2 !== "function") {
      throw new Error("Expected handleStateChangeOnClient to be a function.");
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function wrap3(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== "function") {
        throw new Error("Expected WrappedComponent to be a React component.");
      }
    }
    var mountedInstances = [];
    var state;
    function emitChange() {
      state = reducePropsToState2(mountedInstances.map(function(instance) {
        return instance.props;
      }));
      handleStateChangeOnClient2(state);
    }
    var SideEffect = function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function peek() {
        return state;
      };
      var _proto = SideEffect2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };
      _proto.render = function render() {
        return import_react35.default.createElement(WrappedComponent, this.props);
      };
      return SideEffect2;
    }(import_react35.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}
var index_es_default = withSideEffect;

// node_modules/focus-lock/dist/es2015/utils/array.js
var toArray = function(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};
var asArray = function(a) {
  return Array.isArray(a) ? a : [a];
};
var getFirst = function(a) {
  return Array.isArray(a) ? a[0] : a;
};

// node_modules/focus-lock/dist/es2015/utils/is.js
var isElementHidden = function(node2) {
  if (node2.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node2, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node2) {
  return node2.parentNode && node2.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    node2.parentNode.host
  ) : node2.parentNode;
};
var isTopNode = function(node2) {
  return node2 === document || node2 && node2.nodeType === Node.DOCUMENT_NODE;
};
var isInert = function(node2) {
  return node2.hasAttribute("inert");
};
var isVisibleUncached = function(node2, checkParent) {
  return !node2 || isTopNode(node2) || !isElementHidden(node2) && !isInert(node2) && checkParent(getParentNode(node2));
};
var isVisibleCached = function(visibilityCache, node2) {
  var cached = visibilityCache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isVisibleUncached(node2, isVisibleCached.bind(void 0, visibilityCache));
  visibilityCache.set(node2, result);
  return result;
};
var isAutoFocusAllowedUncached = function(node2, checkParent) {
  return node2 && !isTopNode(node2) ? isAutoFocusAllowed(node2) ? checkParent(getParentNode(node2)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node2) {
  var cached = cache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isAutoFocusAllowedUncached(node2, isAutoFocusAllowedCached.bind(void 0, cache));
  cache.set(node2, result);
  return result;
};
var getDataset = function(node2) {
  return node2.dataset;
};
var isHTMLButtonElement = function(node2) {
  return node2.tagName === "BUTTON";
};
var isHTMLInputElement = function(node2) {
  return node2.tagName === "INPUT";
};
var isRadioElement = function(node2) {
  return isHTMLInputElement(node2) && node2.type === "radio";
};
var notHiddenInput = function(node2) {
  return !((isHTMLInputElement(node2) || isHTMLButtonElement(node2)) && (node2.type === "hidden" || node2.disabled));
};
var isAutoFocusAllowed = function(node2) {
  var attribute = node2.getAttribute(FOCUS_NO_AUTOFOCUS);
  return ![true, "true", ""].includes(attribute);
};
var isGuard = function(node2) {
  var _a2;
  return Boolean(node2 && ((_a2 = getDataset(node2)) === null || _a2 === void 0 ? void 0 : _a2.focusGuard));
};
var isNotAGuard = function(node2) {
  return !isGuard(node2);
};
var isDefined = function(x) {
  return Boolean(x);
};

// node_modules/focus-lock/dist/es2015/utils/tabOrder.js
var tabSort = function(a, b) {
  var aTab = Math.max(0, a.tabIndex);
  var bTab = Math.max(0, b.tabIndex);
  var tabDiff = aTab - bTab;
  var indexDiff = a.index - b.index;
  if (tabDiff) {
    if (!aTab) {
      return 1;
    }
    if (!bTab) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var getTabIndex = function(node2) {
  if (node2.tabIndex < 0) {
    if (!node2.hasAttribute("tabindex")) {
      return 0;
    }
  }
  return node2.tabIndex;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function(node2, index) {
    var tabIndex = getTabIndex(node2);
    return {
      node: node2,
      index,
      tabIndex: keepGuards && tabIndex === -1 ? (node2.dataset || {}).focusGuard ? 0 : -1 : tabIndex
    };
  }).filter(function(data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

// node_modules/focus-lock/dist/es2015/utils/tabbables.js
var tabbables = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
];

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
  return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
    return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
  }, []);
};
var getFocusablesWithIFrame = function(parent, withGuards) {
  var _a2;
  if (parent instanceof HTMLIFrameElement && ((_a2 = parent.contentDocument) === null || _a2 === void 0 ? void 0 : _a2.body)) {
    return getFocusables([parent.contentDocument.body], withGuards);
  }
  return [parent];
};
var getFocusables = function(parents, withGuards) {
  return parents.reduce(function(acc, parent) {
    var _a2;
    var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
    var focusableWithIframes = (_a2 = []).concat.apply(_a2, focusableWithShadowDom.map(function(node2) {
      return getFocusablesWithIFrame(node2, withGuards);
    }));
    return acc.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      focusableWithIframes,
      // add if node is tabbable itself
      parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node2) {
        return node2 === parent;
      }) : []
    );
  }, []);
};
var getParentAutofocusables = function(parent) {
  var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
  return toArray(parentFocus).map(function(node2) {
    return getFocusables([node2]);
  }).reduce(function(acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
var filterFocusable = function(nodes, visibilityCache) {
  return toArray(nodes).filter(function(node2) {
    return isVisibleCached(visibilityCache, node2);
  }).filter(function(node2) {
    return notHiddenInput(node2);
  });
};
var filterAutoFocusable = function(nodes, cache) {
  if (cache === void 0) {
    cache = /* @__PURE__ */ new Map();
  }
  return toArray(nodes).filter(function(node2) {
    return isAutoFocusAllowedCached(cache, node2);
  });
};
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getFocusableNodes = function(topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function(topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains3 = function(scope, element) {
  if (scope.shadowRoot) {
    return contains3(scope.shadowRoot, element);
  } else {
    if (Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element)) {
      return true;
    }
    return toArray(scope.children).some(function(child) {
      var _a2;
      if (child instanceof HTMLIFrameElement) {
        var iframeBody = (_a2 = child.contentDocument) === null || _a2 === void 0 ? void 0 : _a2.body;
        if (iframeBody) {
          return contains3(iframeBody, element);
        }
        return false;
      }
      return contains3(child, element);
    });
  }
};

// node_modules/focus-lock/dist/es2015/utils/all-affected.js
var filterNested = function(nodes) {
  var contained = /* @__PURE__ */ new Set();
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    for (var j = i + 1; j < l; j += 1) {
      var position2 = nodes[i].compareDocumentPosition(nodes[j]);
      if ((position2 & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j);
      }
      if ((position2 & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i);
      }
    }
  }
  return nodes.filter(function(_, index) {
    return !contained.has(index);
  });
};
var getTopParent = function(node2) {
  return node2.parentNode ? getTopParent(node2.parentNode) : node2;
};
var getAllAffectedNodes = function(node2) {
  var nodes = asArray(node2);
  return nodes.filter(Boolean).reduce(function(acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]);
    return acc;
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/safe.js
var safeProbe = function(cb) {
  try {
    return cb();
  } catch (e) {
    return void 0;
  }
};

// node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
var getActiveElement2 = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  if (!inDocument || !inDocument.activeElement) {
    return void 0;
  }
  var activeElement = inDocument.activeElement;
  return activeElement.shadowRoot ? getActiveElement2(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
    return activeElement.contentWindow.document;
  }) ? getActiveElement2(activeElement.contentWindow.document) : activeElement;
};

// node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame, activeElement) {
  return frame === activeElement;
};
var focusInsideIframe = function(topNode, activeElement) {
  return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node2) {
    return focusInFrame(node2, activeElement);
  }));
};
var focusInside = function(topNode, activeElement) {
  if (activeElement === void 0) {
    activeElement = getActiveElement2(getFirst(topNode).ownerDocument);
  }
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).some(function(node2) {
    return contains3(node2, activeElement) || focusInsideIframe(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/focusIsHidden.js
var focusIsHidden = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  var activeElement = getActiveElement2(inDocument);
  if (!activeElement) {
    return false;
  }
  return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node2) {
    return contains3(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/utils/correctFocus.js
var findSelectedRadio = function(node2, nodes) {
  return nodes.filter(isRadioElement).filter(function(el) {
    return el.name === node2.name;
  }).filter(function(el) {
    return el.checked;
  })[0] || node2;
};
var correctNode = function(node2, nodes) {
  if (isRadioElement(node2) && node2.name) {
    return findSelectedRadio(node2, nodes);
  }
  return node2;
};
var correctNodes = function(nodes) {
  var resultSet = /* @__PURE__ */ new Set();
  nodes.forEach(function(node2) {
    return resultSet.add(correctNode(node2, nodes));
  });
  return nodes.filter(function(node2) {
    return resultSet.has(node2);
  });
};

// node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var pickFirstFocus = function(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function(nodes, node2) {
  return nodes.indexOf(correctNode(node2, nodes));
};

// node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
var newFocus = function(innerNodes, innerTabbables, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
    return void 0;
  }
  var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  if (activeIndex === -1) {
    if (lastNodeInside !== -1) {
      return lastNodeInside;
    }
    return NEW_FOCUS;
  }
  if (lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var correctedIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
  var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (innerTabbables.length === 0) {
    return lastNodeInside;
  }
  var returnFirstNode = pickFocusable(innerNodes, innerTabbables[0]);
  var returnLastNode = pickFocusable(innerNodes, innerTabbables[innerTabbables.length - 1]);
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return void 0;
};

// node_modules/focus-lock/dist/es2015/utils/auto-focus.js
var findAutoFocused = function(autoFocusables) {
  return function(node2) {
    var _a2;
    var autofocus = (_a2 = getDataset(node2)) === null || _a2 === void 0 ? void 0 : _a2.autofocus;
    return (
      // @ts-expect-error
      node2.autofocus || //
      autofocus !== void 0 && autofocus !== "false" || //
      autoFocusables.indexOf(node2) >= 0
    );
  };
};
var pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
  var nodes = nodesIndexes.map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
  if (autoFocusable && autoFocusable.length) {
    return pickFirstFocus(autoFocusable);
  }
  return pickFirstFocus(filterAutoFocusable(orderedNodes));
};

// node_modules/focus-lock/dist/es2015/utils/parenting.js
var getParents = function(node2, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node2);
  if (node2.parentNode) {
    getParents(node2.parentNode.host || node2.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function(nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function(entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function(subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || contains3(common, topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function(entries, visibilityCache) {
  return entries.reduce(function(acc, node2) {
    return acc.concat(parentAutofocusables(node2, visibilityCache));
  }, []);
};

// node_modules/focus-lock/dist/es2015/focusSolver.js
var reorderNodes = function(srcNodes, dstNodes) {
  var remap = /* @__PURE__ */ new Map();
  dstNodes.forEach(function(entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function(node2) {
    return remap.get(node2);
  }).filter(isDefined);
};
var focusSolver = function(topNode, lastNode) {
  var activeElement = getActiveElement2(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var anyFocusable = getFocusableNodes(entries, visibilityCache);
  var innerElements = anyFocusable.filter(function(_a2) {
    var node2 = _a2.node;
    return isNotAGuard(node2);
  });
  if (!innerElements[0]) {
    return void 0;
  }
  var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerFocusables = orderedInnerElements.map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var innerTabbable = orderedInnerElements.filter(function(_a2) {
    var tabIndex = _a2.tabIndex;
    return tabIndex >= 0;
  }).map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var focusNode = (
      // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
      pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) || pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache))
    );
    if (focusNode) {
      return { node: focusNode };
    } else {
      console.warn("focus-lock: cannot find any node to move focus into");
      return void 0;
    }
  }
  if (newId === void 0) {
    return newId;
  }
  return orderedInnerElements[newId];
};

// node_modules/focus-lock/dist/es2015/focusables.js
var expandFocusableNodes = function(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = orderByTabIndex(getFocusables([commonParent], true), true, true);
  var innerElements = getFocusables(entries, false);
  return outerNodes.map(function(_a2) {
    var node2 = _a2.node, index = _a2.index;
    return {
      node: node2,
      index,
      lockItem: innerElements.indexOf(node2) >= 0,
      guard: isGuard(node2)
    };
  });
};

// node_modules/focus-lock/dist/es2015/commands.js
var focusOn = function(target, focusOptions) {
  if (!target) {
    return;
  }
  if ("focus" in target) {
    target.focus(focusOptions);
  }
  if ("contentWindow" in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};

// node_modules/focus-lock/dist/es2015/moveFocusInside.js
var guardCount = 0;
var lockDisabled = false;
var moveFocusInside = function(topNode, lastNode, options) {
  if (options === void 0) {
    options = {};
  }
  var focusable = focusSolver(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
      lockDisabled = true;
      setTimeout(function() {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node, options.focusOptions);
    guardCount--;
  }
};

// node_modules/focus-lock/dist/es2015/return-focus.js
function weakRef(value) {
  if (!value)
    return null;
  if (typeof WeakRef === "undefined") {
    return function() {
      return value || null;
    };
  }
  var w = value ? new WeakRef(value) : null;
  return function() {
    return (w === null || w === void 0 ? void 0 : w.deref()) || null;
  };
}
var recordElementLocation = function(element) {
  if (!element) {
    return null;
  }
  var stack = [];
  var currentElement = element;
  while (currentElement && currentElement !== document.body) {
    stack.push({
      current: weakRef(currentElement),
      parent: weakRef(currentElement.parentElement),
      left: weakRef(currentElement.previousElementSibling),
      right: weakRef(currentElement.nextElementSibling)
    });
    currentElement = currentElement.parentElement;
  }
  return {
    element: weakRef(element),
    stack,
    ownerDocument: element.ownerDocument
  };
};
var restoreFocusTo = function(location) {
  var _a2, _b, _c, _d, _e;
  if (!location) {
    return void 0;
  }
  var stack = location.stack, ownerDocument = location.ownerDocument;
  var visibilityCache = /* @__PURE__ */ new Map();
  for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
    var line = stack_1[_i];
    var parent_1 = (_a2 = line.parent) === null || _a2 === void 0 ? void 0 : _a2.call(line);
    if (parent_1 && ownerDocument.contains(parent_1)) {
      var left = (_b = line.left) === null || _b === void 0 ? void 0 : _b.call(line);
      var savedCurrent = line.current();
      var current = parent_1.contains(savedCurrent) ? savedCurrent : void 0;
      var right = (_c = line.right) === null || _c === void 0 ? void 0 : _c.call(line);
      var focusables = getTabbableNodes([parent_1], visibilityCache);
      var aim = (
        // that is element itself
        (_e = (_d = current !== null && current !== void 0 ? current : (
          // or something in it's place
          left === null || left === void 0 ? void 0 : left.nextElementSibling
        )) !== null && _d !== void 0 ? _d : (
          // or somebody to the right, still close enough
          right
        )) !== null && _e !== void 0 ? _e : (
          // or somebody to the left, something?
          left
        )
      );
      while (aim) {
        for (var _f = 0, focusables_1 = focusables; _f < focusables_1.length; _f++) {
          var focusable = focusables_1[_f];
          if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) {
            return focusable.node;
          }
        }
        aim = aim.nextElementSibling;
      }
      if (focusables.length) {
        return focusables[0].node;
      }
    }
  }
  return void 0;
};
var captureFocusRestore = function(targetElement) {
  var location = recordElementLocation(targetElement);
  return function() {
    return restoreFocusTo(location);
  };
};

// node_modules/focus-lock/dist/es2015/sibling.js
var getRelativeFocusable = function(element, scope, useTabbables) {
  if (!element || !scope) {
    console.error("no element or scope given");
    return {};
  }
  var shards = asArray(scope);
  if (shards.every(function(shard) {
    return !contains3(shard, element);
  })) {
    console.error("Active element is not contained in the scope");
    return {};
  }
  var focusables = useTabbables ? getTabbableNodes(shards, /* @__PURE__ */ new Map()) : getFocusableNodes(shards, /* @__PURE__ */ new Map());
  var current = focusables.findIndex(function(_a2) {
    var node2 = _a2.node;
    return node2 === element;
  });
  if (current === -1) {
    return void 0;
  }
  return {
    prev: focusables[current - 1],
    next: focusables[current + 1],
    first: focusables[0],
    last: focusables[focusables.length - 1]
  };
};
var getBoundary = function(shards, useTabbables) {
  var set = useTabbables ? getTabbableNodes(asArray(shards), /* @__PURE__ */ new Map()) : getFocusableNodes(asArray(shards), /* @__PURE__ */ new Map());
  return {
    first: set[0],
    last: set[set.length - 1]
  };
};
var defaultOptions = function(options) {
  return Object.assign({
    scope: document.body,
    cycle: true,
    onlyTabbable: true
  }, options);
};
var moveFocus = function(fromElement, options, cb) {
  if (options === void 0) {
    options = {};
  }
  var newOptions = defaultOptions(options);
  var solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
  if (!solution) {
    return;
  }
  var target = cb(solution, newOptions.cycle);
  if (target) {
    focusOn(target.node, newOptions.focusOptions);
  }
};
var focusNextElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a2, cycle) {
    var next = _a2.next, first = _a2.first;
    return next || cycle && first;
  });
};
var focusPrevElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a2, cycle) {
    var prev = _a2.prev, last = _a2.last;
    return prev || cycle && last;
  });
};
var pickBoundary = function(scope, options, what) {
  var _a2;
  var boundary = getBoundary(scope, (_a2 = options.onlyTabbable) !== null && _a2 !== void 0 ? _a2 : true);
  var node2 = boundary[what];
  if (node2) {
    focusOn(node2.node, options.focusOptions);
  }
};
var focusFirstElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "first");
};
var focusLastElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "last");
};

// node_modules/react-focus-lock/dist/es2015/util.js
function deferAction(action) {
  setTimeout(action, 1);
}
var inlineProp = function inlineProp2(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};
var extractRef = function extractRef2(ref) {
  return ref && "current" in ref ? ref.current : ref;
};

// node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody2() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus2() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var defaultWhitelist = function defaultWhitelist2() {
  return true;
};
var focusWhitelisted = function focusWhitelisted2(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal2(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode,
    portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair2(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var focusWasOutside = function focusWasOutside2(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost2(check, el, boundary) {
  return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
};
var withinHost = function withinHost2(activeElement, workingArea) {
  return workingArea.some(function(area) {
    return checkInHost(activeElement, area, area);
  });
};
var activateTrap = function activateTrap2() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = moveFocusInside(workingArea, lastActiveFocus, {
                focusOptions
              });
              lastPortaledElement = {};
            }
          }
          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }
      if (document && activeElement !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var newActiveElement = document && document.activeElement;
        var allNodes = expandFocusableNodes(workingArea);
        var focusedIndex = allNodes.map(function(_ref2) {
          var node2 = _ref2.node;
          return node2;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function(_ref2) {
            var guard = _ref2.guard, node2 = _ref2.node;
            return guard && node2.dataset.focusAutoGuard;
          }).forEach(function(_ref3) {
            var node2 = _ref3.node;
            return node2.removeAttribute("tabIndex");
          });
          autoGuard(focusedIndex, allNodes.length, 1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap2(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur2() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus2(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher2() {
  return null;
};
var FocusTrap = function FocusTrap2(_ref4) {
  var children = _ref4.children;
  return React8.createElement("div", {
    onBlur,
    onFocus
  }, children);
};
FocusTrap.propTypes = true ? {
  children: import_prop_types3.default.node.isRequired
} : {};
var onWindowBlur2 = function onWindowBlur3() {
  focusWasOutsideWindow = "just";
  deferAction(function() {
    focusWasOutsideWindow = "meanwhile";
  });
};
var attachHandler = function attachHandler2() {
  document.addEventListener("focusin", onTrap);
  document.addEventListener("focusout", onBlur);
  window.addEventListener("blur", onWindowBlur2);
};
var detachHandler = function detachHandler2() {
  document.removeEventListener("focusin", onTrap);
  document.removeEventListener("focusout", onBlur);
  window.removeEventListener("blur", onWindowBlur2);
};
function reducePropsToState(propsList) {
  return propsList.filter(function(_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}
var focusLockAPI = {
  moveFocusInside,
  focusInside,
  focusNextElement,
  focusPrevElement,
  focusFirstElement,
  focusLastElement,
  captureFocusRestore
};
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function(_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation(focusLockAPI);
    }
    activateTrap(true);
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
  return cb(focusLockAPI);
});
var Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

// node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = React9.forwardRef(function FocusLockUICombination(props, ref) {
  return React9.createElement(Lock_default, _extends({
    sideCar: Trap_default,
    ref
  }, props));
});
var _ref = Lock_default.propTypes || {};
var sideCar = _ref.sideCar;
var propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = true ? propTypes : {};
var Combination_default = FocusLockCombination;

// node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js
var React10 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var AutoFocusInside = function AutoFocusInside2(_ref2) {
  var _ref$disabled = _ref2.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, children = _ref2.children, _ref$className = _ref2.className, className = _ref$className === void 0 ? void 0 : _ref$className;
  return React10.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !disabled), {
    className
  }), children);
};
AutoFocusInside.propTypes = true ? {
  children: import_prop_types4.default.node.isRequired,
  disabled: import_prop_types4.default.bool,
  className: import_prop_types4.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js
var React11 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var useFocusInside = function useFocusInside2(observedRef) {
  React11.useEffect(function() {
    var enabled = true;
    mediumEffect.useMedium(function(car) {
      var observed = observedRef && observedRef.current;
      if (enabled && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
    return function() {
      enabled = false;
    };
  }, [observedRef]);
};
function MoveFocusInside(_ref2) {
  var _ref$disabled = _ref2.disabled, isDisabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref2.className, children = _ref2.children;
  var ref = React11.useRef(null);
  useFocusInside(isDisabled ? void 0 : ref);
  return React11.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !isDisabled), {
    ref,
    className
  }), children);
}
MoveFocusInside.propTypes = true ? {
  children: import_prop_types5.default.node.isRequired,
  disabled: import_prop_types5.default.bool,
  className: import_prop_types5.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js
var React12 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var FreeFocusInside = function FreeFocusInside2(_ref2) {
  var children = _ref2.children, className = _ref2.className;
  return React12.createElement("div", _extends({}, inlineProp(FOCUS_ALLOW, true), {
    className
  }), children);
};
FreeFocusInside.propTypes = true ? {
  children: import_prop_types6.default.node.isRequired,
  className: import_prop_types6.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/use-focus-scope.js
var import_react36 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/use-focus-state.js
var import_react37 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/nano-events.js
var createNanoEvents = function createNanoEvents2() {
  return {
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var i = 0, callbacks = this.events[event] || [], length = callbacks.length; i < length; i++) {
        callbacks[i].apply(callbacks, args);
      }
    },
    events: {},
    on: function on(event, cb) {
      var _this$events, _this = this;
      ((_this$events = this.events)[event] || (_this$events[event] = [])).push(cb);
      return function() {
        var _this$events$event;
        _this.events[event] = (_this$events$event = _this.events[event]) == null ? void 0 : _this$events$event.filter(function(i) {
          return cb !== i;
        });
      };
    }
  };
};

// node_modules/react-focus-lock/dist/es2015/use-focus-state.js
var mainbus = createNanoEvents();

// node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default = Combination_default;

// node_modules/@chakra-ui/focus-lock/dist/chunk-UU5OHSNF.mjs
var import_react38 = __toESM(require_react(), 1);
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var _a;
var FocusTrap3 = (_a = es2015_default.default) != null ? _a : es2015_default;
var FocusLock2 = (props) => {
  const {
    initialFocusRef,
    finalFocusRef,
    contentRef,
    restoreFocus,
    children,
    isDisabled,
    autoFocus,
    persistentFocus,
    lockFocusAcrossFrames
  } = props;
  const onActivation = (0, import_react38.useCallback)(() => {
    if (initialFocusRef == null ? void 0 : initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (contentRef == null ? void 0 : contentRef.current) {
      const focusables = getAllFocusable2(contentRef.current);
      if (focusables.length === 0) {
        requestAnimationFrame(() => {
          var _a2;
          (_a2 = contentRef.current) == null ? void 0 : _a2.focus();
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  const onDeactivation = (0, import_react38.useCallback)(() => {
    var _a2;
    (_a2 = finalFocusRef == null ? void 0 : finalFocusRef.current) == null ? void 0 : _a2.focus();
  }, [finalFocusRef]);
  const returnFocus = restoreFocus && !finalFocusRef;
  return (0, import_jsx_runtime50.jsx)(
    FocusTrap3,
    {
      crossFrame: lockFocusAcrossFrames,
      persistentFocus,
      autoFocus,
      disabled: isDisabled,
      onActivation,
      onDeactivation,
      returnFocus,
      children
    }
  );
};
FocusLock2.displayName = "FocusLock";

// node_modules/@chakra-ui/hooks/dist/chunk-6SQFIFNP.mjs
var import_react39 = __toESM(require_react(), 1);
function usePrevious(value) {
  const ref = (0, import_react39.useRef)();
  (0, import_react39.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@chakra-ui/hooks/dist/chunk-YSKACL7R.mjs
var import_react40 = __toESM(require_react(), 1);
function isPrintableCharacter(event) {
  const { key } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props = {}) {
  const { timeout = 300, preventDefault = () => true } = props;
  const [keys, setKeys] = (0, import_react40.useState)([]);
  const timeoutRef = (0, import_react40.useRef)();
  const flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  (0, import_react40.useEffect)(() => flush, []);
  function onKeyDown(fn) {
    return (event) => {
      if (event.key === "Backspace") {
        const keysCopy = [...keys];
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter(event)) {
        const keysCopy = keys.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(keysCopy);
        fn(keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}

// node_modules/@chakra-ui/hooks/dist/chunk-724WJZW4.mjs
var import_react41 = __toESM(require_react(), 1);
var useSafeLayoutEffect2 = isBrowser ? import_react41.useLayoutEffect : import_react41.useEffect;

// node_modules/@chakra-ui/hooks/dist/chunk-KA2477BY.mjs
var import_react42 = __toESM(require_react(), 1);
function useCallbackRef3(fn, deps = []) {
  const ref = (0, import_react42.useRef)(fn);
  useSafeLayoutEffect2(() => {
    ref.current = fn;
  });
  return (0, import_react42.useCallback)((...args) => {
    var _a2;
    return (_a2 = ref.current) == null ? void 0 : _a2.call(ref, ...args);
  }, deps);
}

// node_modules/@chakra-ui/hooks/dist/chunk-HMTAETMO.mjs
var import_react43 = __toESM(require_react(), 1);
function useTimeout2(callback, delay) {
  const fn = useCallbackRef3(callback);
  (0, import_react43.useEffect)(() => {
    if (delay == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-W4SX2OS5.mjs
var import_react44 = __toESM(require_react(), 1);
function useWhyDidYouUpdate(name, props) {
  const previousProps = (0, import_react44.useRef)();
  (0, import_react44.useEffect)(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj = {};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });
      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update]", name, changesObj);
      }
    }
    previousProps.current = props;
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-GVIR6Q3W.mjs
var import_react45 = __toESM(require_react(), 1);
function useInterval(callback, delay) {
  const fn = useCallbackRef3(callback);
  (0, import_react45.useEffect)(() => {
    let intervalId = null;
    const tick = () => fn();
    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-3VAWNCU2.mjs
var import_react46 = __toESM(require_react(), 1);
function useLatestRef(value) {
  const ref = (0, import_react46.useRef)(null);
  ref.current = value;
  return ref;
}

// node_modules/@chakra-ui/hooks/dist/chunk-AZVKQZKI.mjs
var import_react47 = __toESM(require_react(), 1);
function assignRef2(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function useMergeRefs3(...refs) {
  return (0, import_react47.useMemo)(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node2) => {
      refs.forEach((ref) => {
        if (ref)
          assignRef2(ref, node2);
      });
    };
  }, refs);
}

// node_modules/@chakra-ui/hooks/dist/chunk-7JEV5YKL.mjs
var import_react48 = __toESM(require_react(), 1);
function useEventListener2(event, handler, env2, options) {
  const listener = useCallbackRef3(handler);
  (0, import_react48.useEffect)(() => {
    var _a2;
    const node2 = (_a2 = runIfFn2(env2)) != null ? _a2 : document;
    if (!handler) {
      return;
    }
    node2.addEventListener(event, listener, options);
    return () => {
      node2.removeEventListener(event, listener, options);
    };
  }, [event, env2, options, listener, handler]);
  return () => {
    var _a2;
    const node2 = (_a2 = runIfFn2(env2)) != null ? _a2 : document;
    node2.removeEventListener(event, listener, options);
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-LMHOK4JG.mjs
var import_react49 = __toESM(require_react(), 1);
function useMouseDownRef(shouldListen = true) {
  const mouseDownRef = (0, import_react49.useRef)();
  useEventListener2("mousedown", (event) => {
    if (shouldListen) {
      mouseDownRef.current = event.target;
    }
  });
  return mouseDownRef;
}

// node_modules/@chakra-ui/hooks/dist/chunk-R5W6LHQW.mjs
var import_react50 = __toESM(require_react(), 1);
function useOutsideClick(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef3(handler);
  const stateRef = (0, import_react50.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state = stateRef.current;
  (0, import_react50.useEffect)(() => {
    if (!enabled)
      return;
    const onPointerDown = (e) => {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}
function isValidEvent(event, ref) {
  var _a2;
  const target = event.target;
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target))
      return false;
  }
  return !((_a2 = ref.current) == null ? void 0 : _a2.contains(target));
}

// node_modules/@chakra-ui/hooks/dist/chunk-ZCYNKCF5.mjs
function usePointerEvent(env2, eventName, handler, options) {
  return useEventListener2(
    getPointerEventName(eventName),
    wrapPointerEventHandler(handler, eventName === "pointerdown"),
    env2,
    options
  );
}

// node_modules/@chakra-ui/hooks/dist/chunk-NGVRPZ6W.mjs
var import_react51 = __toESM(require_react(), 1);
function useUnmountEffect(fn, deps = []) {
  return (0, import_react51.useEffect)(
    () => () => fn(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
}

// node_modules/@chakra-ui/hooks/dist/chunk-77SN3XBT.mjs
var import_react52 = __toESM(require_react(), 1);
function usePanGesture(ref, props) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = props;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = (0, import_react52.useRef)(null);
  const handlers2 = {
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  };
  (0, import_react52.useEffect)(() => {
    var _a2;
    (_a2 = panSession.current) == null ? void 0 : _a2.updateHandlers(handlers2);
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers2, threshold);
  }
  usePointerEvent(
    () => ref.current,
    "pointerdown",
    hasPanEvents ? onPointerDown : noop
  );
  useUnmountEffect(() => {
    var _a2;
    (_a2 = panSession.current) == null ? void 0 : _a2.end();
    panSession.current = null;
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-6B2YUEGK.mjs
var import_react53 = __toESM(require_react(), 1);
function useId3(idProp, prefix) {
  const id = (0, import_react53.useId)();
  return (0, import_react53.useMemo)(
    () => idProp || [prefix, id].filter(Boolean).join("-"),
    [idProp, prefix, id]
  );
}
function useIds(idProp, ...prefixes) {
  const id = useId3(idProp);
  return (0, import_react53.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}
function useOptionalPart(partId) {
  const [id, setId] = (0, import_react53.useState)(null);
  const ref = (0, import_react53.useCallback)(
    (node2) => {
      setId(node2 ? partId : null);
    },
    [partId]
  );
  return { ref, id, isRendered: Boolean(id) };
}

// node_modules/@chakra-ui/hooks/dist/chunk-7JSBRQFI.mjs
var import_react54 = __toESM(require_react(), 1);
function useControllableProp(prop, state) {
  const isControlled = prop !== void 0;
  const value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}
function useControllableState2(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next
  } = props;
  const onChangeProp = useCallbackRef3(onChange);
  const shouldUpdateProp = useCallbackRef3(shouldUpdate);
  const [valueState, setValue] = (0, import_react54.useState)(defaultValue);
  const isControlled = valueProp !== void 0;
  const value = isControlled ? valueProp : valueState;
  const updateValue = (0, import_react54.useCallback)(
    (next) => {
      const nextValue = runIfFn2(next, value);
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp(nextValue);
    },
    [isControlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, updateValue];
}

// node_modules/@chakra-ui/hooks/dist/chunk-7JBTTEVG.mjs
var import_react55 = __toESM(require_react(), 1);
function useDisclosure2(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const onOpenPropCallbackRef = useCallbackRef3(onOpenProp);
  const onClosePropCallbackRef = useCallbackRef3(onCloseProp);
  const [isOpenState, setIsOpen] = (0, import_react55.useState)(props.defaultIsOpen || false);
  const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);
  const id = useId3(idProp, "disclosure");
  const onClose = (0, import_react55.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClosePropCallbackRef == null ? void 0 : onClosePropCallbackRef();
  }, [isControlled, onClosePropCallbackRef]);
  const onOpen = (0, import_react55.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenPropCallbackRef == null ? void 0 : onOpenPropCallbackRef();
  }, [isControlled, onOpenPropCallbackRef]);
  const onToggle = (0, import_react55.useCallback)(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);
  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps: (props2 = {}) => ({
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id,
      onClick: callAllHandlers2(props2.onClick, onToggle)
    }),
    getDisclosureProps: (props2 = {}) => ({
      ...props2,
      hidden: !isOpen,
      id
    })
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-QNRG6N65.mjs
var import_react56 = __toESM(require_react(), 1);
function useEventListenerMap() {
  const listeners = (0, import_react56.useRef)(/* @__PURE__ */ new Map());
  const currentListeners = listeners.current;
  const add = (0, import_react56.useCallback)((el, type, listener, options) => {
    const pointerEventListener = wrapPointerEventHandler(
      listener,
      type === "pointerdown"
    );
    listeners.current.set(listener, {
      __listener: pointerEventListener,
      type: getPointerEventName(type),
      el,
      options
    });
    el.addEventListener(type, pointerEventListener, options);
  }, []);
  const remove = (0, import_react56.useCallback)(
    (el, type, listener, options) => {
      const { __listener: pointerEventListener } = listeners.current.get(listener);
      el.removeEventListener(type, pointerEventListener, options);
      listeners.current.delete(pointerEventListener);
    },
    []
  );
  (0, import_react56.useEffect)(
    () => () => {
      currentListeners.forEach((value, key) => {
        remove(value.el, value.type, key, value.options);
      });
    },
    [remove, currentListeners]
  );
  return { add, remove };
}

// node_modules/@chakra-ui/hooks/dist/chunk-6WEF4DIO.mjs
var import_react57 = __toESM(require_react(), 1);
var useUpdateEffect2 = (effect2, deps) => {
  const renderCycleRef = (0, import_react57.useRef)(false);
  const effectCycleRef = (0, import_react57.useRef)(false);
  (0, import_react57.useEffect)(() => {
    const isMounted = renderCycleRef.current;
    const shouldRun = isMounted && effectCycleRef.current;
    if (shouldRun) {
      return effect2();
    }
    effectCycleRef.current = true;
  }, deps);
  (0, import_react57.useEffect)(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
};

// node_modules/@chakra-ui/hooks/dist/chunk-LAJNVC3F.mjs
function useFocusEffect(ref, options) {
  const { shouldFocus, preventScroll } = options;
  useUpdateEffect2(() => {
    const node2 = ref.current;
    if (!node2 || !shouldFocus)
      return;
    if (!hasFocusWithin(node2)) {
      focus(node2, { preventScroll, nextTick: true });
    }
  }, [shouldFocus, ref, preventScroll]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-4INTB4VC.mjs
function preventReturnFocus(containerRef) {
  const el = containerRef.current;
  if (!el)
    return false;
  const activeElement = getActiveElement(el);
  if (!activeElement)
    return false;
  if (contains(el, activeElement))
    return false;
  if (isTabbable(activeElement))
    return true;
  return false;
}
function useFocusOnHide2(containerRef, options) {
  const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
  const shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect2(() => {
    if (!shouldFocus)
      return;
    if (preventReturnFocus(containerRef)) {
      return;
    }
    const el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;
    if (el) {
      focus(el, { nextTick: true });
    }
  }, [shouldFocus, containerRef, focusRef]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-CUYKOI3H.mjs
function useFocusOnPointerDown2(props) {
  const { ref, elements, enabled } = props;
  const isSafari2 = detectBrowser("Safari");
  const doc = () => getOwnerDocument(ref.current);
  usePointerEvent(doc, "pointerdown", (event) => {
    if (!isSafari2 || !enabled)
      return;
    const target = event.target;
    const els = elements != null ? elements : [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
      return contains(el, target);
    });
    if (!isActiveElement(target) && isValidTarget) {
      event.preventDefault();
      focus(target);
    }
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-IQENJQQ5.mjs
var import_react58 = __toESM(require_react(), 1);
var defaultOptions2 = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow2(target, options = defaultOptions2) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = isRefObject(target) ? target.current : target;
  const autoFocusValue = shouldFocus && visible;
  const autoFocusRef = (0, import_react58.useRef)(autoFocusValue);
  const lastVisibleRef = (0, import_react58.useRef)(visible);
  useSafeLayoutEffect2(() => {
    if (!lastVisibleRef.current && visible) {
      autoFocusRef.current = autoFocusValue;
    }
    lastVisibleRef.current = visible;
  }, [visible, autoFocusValue]);
  const onFocus3 = (0, import_react58.useCallback)(() => {
    if (!visible || !element || !autoFocusRef.current)
      return;
    autoFocusRef.current = false;
    if (contains(element, document.activeElement))
      return;
    if (focusRef == null ? void 0 : focusRef.current) {
      focus(focusRef.current, { preventScroll, nextTick: true });
    } else {
      const tabbableEls = getAllFocusable(element);
      if (tabbableEls.length > 0) {
        focus(tabbableEls[0], { preventScroll, nextTick: true });
      }
    }
  }, [visible, preventScroll, element, focusRef]);
  useUpdateEffect2(() => {
    onFocus3();
  }, [onFocus3]);
  useEventListener2("transitionend", onFocus3, element);
}

// node_modules/@chakra-ui/hooks/dist/chunk-TJQCN7SC.mjs
var import_react59 = __toESM(require_react(), 1);
function useForceUpdate() {
  const unloadingRef = (0, import_react59.useRef)(false);
  const [count, setCount] = (0, import_react59.useState)(0);
  useUnmountEffect(() => {
    unloadingRef.current = true;
  });
  return (0, import_react59.useCallback)(() => {
    if (!unloadingRef.current) {
      setCount(count + 1);
    }
  }, [count]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-ATO3JZNW.mjs
var import_react60 = __toESM(require_react(), 1);
function useAnimationState2(props) {
  const { isOpen, ref } = props;
  const [mounted, setMounted] = (0, import_react60.useState)(isOpen);
  const [once, setOnce] = (0, import_react60.useState)(false);
  (0, import_react60.useEffect)(() => {
    if (!once) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once, mounted]);
  useEventListener2(
    "animationend",
    () => {
      setMounted(isOpen);
    },
    () => ref.current
  );
  const hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete() {
      var _a2;
      const win = getOwnerWindow(ref.current);
      const evt = new win.CustomEvent("animationend", { bubbles: true });
      (_a2 = ref.current) == null ? void 0 : _a2.dispatchEvent(evt);
    }
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-BBVTFCMB.mjs
var import_react61 = __toESM(require_react(), 1);
function useBoolean(initialState2 = false) {
  const [value, setValue] = (0, import_react61.useState)(initialState2);
  const callbacks = (0, import_react61.useMemo)(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev)
    }),
    []
  );
  return [value, callbacks];
}

// node_modules/@chakra-ui/hooks/dist/chunk-KYYEOW6S.mjs
var import_react62 = __toESM(require_react(), 1);
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard(), 1);
function useClipboard(value, optionsOrTimeout = {}) {
  const [hasCopied, setHasCopied] = (0, import_react62.useState)(false);
  const [valueState, setValueState] = (0, import_react62.useState)(value);
  (0, import_react62.useEffect)(() => setValueState(value), [value]);
  const { timeout = 1500, ...copyOptions } = typeof optionsOrTimeout === "number" ? { timeout: optionsOrTimeout } : optionsOrTimeout;
  const onCopy = (0, import_react62.useCallback)(() => {
    const didCopy = (0, import_copy_to_clipboard.default)(valueState, copyOptions);
    setHasCopied(didCopy);
  }, [valueState, copyOptions]);
  (0, import_react62.useEffect)(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: valueState,
    setValue: setValueState,
    onCopy,
    hasCopied
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-QP32JBMJ.mjs
var import_react63 = __toESM(require_react(), 1);
function useConst(init) {
  const ref = (0, import_react63.useRef)(null);
  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }
  return ref.current;
}

// node_modules/@chakra-ui/hooks/dist/chunk-S7MFKWQB.mjs
var import_react64 = __toESM(require_react(), 1);
function useDimensions(ref, observe) {
  const [dimensions, setDimensions] = (0, import_react64.useState)(null);
  const rafId = (0, import_react64.useRef)();
  useSafeLayoutEffect2(() => {
    function measure() {
      const node2 = ref.current;
      if (!node2)
        return;
      rafId.current = requestAnimationFrame(() => {
        const boxModel = getBox(node2);
        setDimensions(boxModel);
      });
    }
    measure();
    if (observe) {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);
    }
    return () => {
      if (observe) {
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [observe]);
  return dimensions;
}

// node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs
var import_react65 = __toESM(require_react(), 1);
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var [InputGroupStylesProvider, useInputGroupStyles] = createContext({
  name: `InputGroupStylesContext`,
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
});
var InputGroup = forwardRef(
  function InputGroup2(props, ref) {
    const styles = useMultiStyleConfig("Input", props);
    const { children, className, ...rest } = omitThemingProps(props);
    const _className = cx("chakra-input__group", className);
    const groupStyles = {};
    const validChildren = getValidChildren(children);
    const input = styles.field;
    validChildren.forEach((child) => {
      var _a2, _b;
      if (!styles)
        return;
      if (input && child.type.id === "InputLeftElement") {
        groupStyles.paddingStart = (_a2 = input.height) != null ? _a2 : input.h;
      }
      if (input && child.type.id === "InputRightElement") {
        groupStyles.paddingEnd = (_b = input.height) != null ? _b : input.h;
      }
      if (child.type.id === "InputRightAddon") {
        groupStyles.borderEndRadius = 0;
      }
      if (child.type.id === "InputLeftAddon") {
        groupStyles.borderStartRadius = 0;
      }
    });
    const clones = validChildren.map((child) => {
      var _a2, _b;
      const theming = compact({
        size: ((_a2 = child.props) == null ? void 0 : _a2.size) || props.size,
        variant: ((_b = child.props) == null ? void 0 : _b.variant) || props.variant
      });
      return child.type.id !== "Input" ? (0, import_react65.cloneElement)(child, theming) : (0, import_react65.cloneElement)(child, Object.assign(theming, groupStyles, child.props));
    });
    return (0, import_jsx_runtime51.jsx)(
      chakra.div,
      {
        className: _className,
        ref,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          // Parts of inputs override z-index to ensure that they stack correctly on each other
          // Create a new stacking context so that these overrides don't leak out and conflict with other z-indexes
          isolation: "isolate",
          ...styles.group
        },
        "data-group": true,
        ...rest,
        children: (0, import_jsx_runtime51.jsx)(InputGroupStylesProvider, { value: styles, children: clones })
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

// node_modules/@chakra-ui/input/dist/chunk-ADBZ7YHX.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
var StyledAddon = chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});
var InputAddon = forwardRef(
  function InputAddon2(props, ref) {
    var _a2;
    const { placement = "left", ...rest } = props;
    const placementStyles = (_a2 = placements[placement]) != null ? _a2 : {};
    const styles = useInputGroupStyles();
    return (0, import_jsx_runtime52.jsx)(
      StyledAddon,
      {
        ref,
        ...rest,
        __css: {
          ...styles.addon,
          ...placementStyles
        }
      }
    );
  }
);
InputAddon.displayName = "InputAddon";
var InputLeftAddon = forwardRef(
  function InputLeftAddon2(props, ref) {
    return (0, import_jsx_runtime52.jsx)(
      InputAddon,
      {
        ref,
        placement: "left",
        ...props,
        className: cx("chakra-input__left-addon", props.className)
      }
    );
  }
);
InputLeftAddon.displayName = "InputLeftAddon";
InputLeftAddon.id = "InputLeftAddon";
var InputRightAddon = forwardRef(
  function InputRightAddon2(props, ref) {
    return (0, import_jsx_runtime52.jsx)(
      InputAddon,
      {
        ref,
        placement: "right",
        ...props,
        className: cx("chakra-input__right-addon", props.className)
      }
    );
  }
);
InputRightAddon.displayName = "InputRightAddon";
InputRightAddon.id = "InputRightAddon";

// node_modules/@chakra-ui/input/dist/chunk-2ZHRCML3.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var StyledInputElement = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
var InputElement = forwardRef(function InputElement2(props, ref) {
  var _a2, _b;
  const { placement = "left", ...rest } = props;
  const styles = useInputGroupStyles();
  const input = styles.field;
  const attr = placement === "left" ? "insetStart" : "insetEnd";
  const elementStyles = {
    [attr]: "0",
    width: (_a2 = input == null ? void 0 : input.height) != null ? _a2 : input == null ? void 0 : input.h,
    height: (_b = input == null ? void 0 : input.height) != null ? _b : input == null ? void 0 : input.h,
    fontSize: input == null ? void 0 : input.fontSize,
    ...styles.element
  };
  return (0, import_jsx_runtime53.jsx)(StyledInputElement, { ref, __css: elementStyles, ...rest });
});
InputElement.id = "InputElement";
InputElement.displayName = "InputElement";
var InputLeftElement = forwardRef(
  function InputLeftElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__left-element", className);
    return (0, import_jsx_runtime53.jsx)(
      InputElement,
      {
        ref,
        placement: "left",
        className: _className,
        ...rest
      }
    );
  }
);
InputLeftElement.id = "InputLeftElement";
InputLeftElement.displayName = "InputLeftElement";
var InputRightElement = forwardRef(
  function InputRightElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__right-element", className);
    return (0, import_jsx_runtime53.jsx)(
      InputElement,
      {
        ref,
        placement: "right",
        className: _className,
        ...rest
      }
    );
  }
);
InputRightElement.id = "InputRightElement";
InputRightElement.displayName = "InputRightElement";

// node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var Input = forwardRef(function Input2(props, ref) {
  const { htmlSize, ...rest } = props;
  const styles = useMultiStyleConfig("Input", rest);
  const ownProps = omitThemingProps(rest);
  const input = useFormControl(ownProps);
  const _className = cx("chakra-input", props.className);
  return (0, import_jsx_runtime54.jsx)(
    chakra.input,
    {
      size: htmlSize,
      ...input,
      __css: styles.field,
      ref,
      className: _className
    }
  );
});
Input.displayName = "Input";
Input.id = "Input";

// node_modules/@chakra-ui/media-query/dist/chunk-57I6FYPZ.mjs
var import_react66 = __toESM(require_react(), 1);
function useMediaQuery(query, options = {}) {
  const { ssr = true, fallback } = options;
  const { getWindow } = useEnvironment();
  const queries = Array.isArray(query) ? query : [query];
  let fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
  fallbackValues = fallbackValues.filter((v) => v != null);
  const [value, setValue] = (0, import_react66.useState)(() => {
    return queries.map((query2, index) => ({
      media: query2,
      matches: ssr ? !!fallbackValues[index] : getWindow().matchMedia(query2).matches
    }));
  });
  (0, import_react66.useEffect)(() => {
    const win = getWindow();
    setValue(
      queries.map((query2) => ({
        media: query2,
        matches: win.matchMedia(query2).matches
      }))
    );
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    mql.forEach((mql2) => {
      if (typeof mql2.addListener === "function") {
        mql2.addListener(handler);
      } else {
        mql2.addEventListener("change", handler);
      }
    });
    return () => {
      mql.forEach((mql2) => {
        if (typeof mql2.removeListener === "function") {
          mql2.removeListener(handler);
        } else {
          mql2.removeEventListener("change", handler);
        }
      });
    };
  }, [getWindow]);
  return value.map((item) => item.matches);
}

// node_modules/@chakra-ui/media-query/dist/chunk-Q2OSBGYW.mjs
function Visibility(props) {
  const { breakpoint, hide, children, ssr } = props;
  const [show] = useMediaQuery(breakpoint, { ssr });
  const isVisible = hide ? !show : show;
  const rendered = isVisible ? children : null;
  return rendered;
}

// node_modules/@chakra-ui/media-query/dist/chunk-OYHRTWD2.mjs
var getBreakpoint = (theme2, value) => {
  var _a2, _b;
  return (_b = (_a2 = theme2 == null ? void 0 : theme2.breakpoints) == null ? void 0 : _a2[value]) != null ? _b : value;
};
function useQuery(props) {
  const { breakpoint = "", below, above } = props;
  const theme2 = useTheme();
  const bpBelow = getBreakpoint(theme2, below);
  const bpAbove = getBreakpoint(theme2, above);
  let query = breakpoint;
  if (bpBelow) {
    query = `(max-width: ${bpBelow})`;
  } else if (bpAbove) {
    query = `(min-width: ${bpAbove})`;
  }
  return query;
}

// node_modules/@chakra-ui/media-query/dist/chunk-E2LBHKJ2.mjs
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
function Hide(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime55.jsx)(Visibility, { breakpoint: query, hide: true, ssr, children });
}
Hide.displayName = "Hide";

// node_modules/@chakra-ui/media-query/dist/chunk-6RI7LWPK.mjs
function usePrefersReducedMotion(options) {
  const [prefersReducedMotion] = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    options
  );
  return prefersReducedMotion;
}
function useColorModePreference(options) {
  const [isLight, isDark] = useMediaQuery(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    options
  );
  if (isLight)
    return "light";
  if (isDark)
    return "dark";
  return void 0;
}

// node_modules/@chakra-ui/media-query/dist/chunk-VXCSBZ7K.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
function Show(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime56.jsx)(Visibility, { breakpoint: query, ssr, children });
}
Show.displayName = "Show";

// node_modules/@chakra-ui/media-query/dist/chunk-C53CKZDP.mjs
function getClosestValue(values, breakpoint, breakpoints2 = breakpoints) {
  let index = Object.keys(values).indexOf(breakpoint);
  if (index !== -1) {
    return values[breakpoint];
  }
  let stopIndex = breakpoints2.indexOf(breakpoint);
  while (stopIndex >= 0) {
    const key = breakpoints2[stopIndex];
    if (values.hasOwnProperty(key)) {
      index = stopIndex;
      break;
    }
    stopIndex -= 1;
  }
  if (index !== -1) {
    const key = breakpoints2[index];
    return values[key];
  }
  return void 0;
}

// node_modules/@chakra-ui/media-query/dist/chunk-6KW5I77S.mjs
function useBreakpoint(arg) {
  var _a2, _b;
  const opts = isObject(arg) ? arg : { fallback: arg != null ? arg : "base" };
  const theme2 = useTheme();
  const breakpoints2 = theme2.__breakpoints.details.map(
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", "")
    })
  );
  const fallback = breakpoints2.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery(
    breakpoints2.map((bp) => bp.query),
    { fallback, ssr: opts.ssr }
  );
  const index = values.findIndex((value) => value == true);
  return (_b = (_a2 = breakpoints2[index]) == null ? void 0 : _a2.breakpoint) != null ? _b : opts.fallback;
}

// node_modules/@chakra-ui/media-query/dist/chunk-KC77MHL3.mjs
function useBreakpointValue(values, arg) {
  var _a2;
  const opts = isObject(arg) ? arg : { fallback: arg != null ? arg : "base" };
  const breakpoint = useBreakpoint(opts);
  const theme2 = useTheme();
  if (!breakpoint)
    return;
  const breakpoints2 = Array.from(((_a2 = theme2.__breakpoints) == null ? void 0 : _a2.keys) || []);
  const obj = Array.isArray(values) ? Object.fromEntries(
    Object.entries(arrayToObjectNotation(values, breakpoints2)).map(
      ([key, value]) => [key, value]
    )
  ) : values;
  return getClosestValue(obj, breakpoint, breakpoints2);
}

// node_modules/@chakra-ui/modal/dist/chunk-7NUJBCEL.mjs
var import_react67 = __toESM(require_react(), 1);
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true }
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true }
  },
  slideInTop: {
    ...slideFadeConfig,
    custom: { offsetY: -16, reverse: true }
  },
  slideInLeft: {
    ...slideFadeConfig,
    custom: { offsetX: -16, reverse: true }
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true }
  },
  none: {}
};
var MotionSection = chakra(motion.section);
var getMotionProps = (preset) => {
  return transitions[preset || "none"];
};
var ModalTransition = (0, import_react67.forwardRef)(
  (props, ref) => {
    const { preset, motionProps = getMotionProps(preset), ...rest } = props;
    return (0, import_jsx_runtime57.jsx)(MotionSection, { ref, ...motionProps, ...rest });
  }
);
ModalTransition.displayName = "ModalTransition";

// node_modules/@chakra-ui/modal/dist/chunk-5WQ4PXEV.mjs
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/@chakra-ui/modal/dist/chunk-CYRBRIA2.mjs
var import_react68 = __toESM(require_react(), 1);
var ModalManager = class {
  constructor() {
    __publicField(this, "modals");
    this.modals = /* @__PURE__ */ new Map();
  }
  add(modal) {
    this.modals.set(modal, this.modals.size + 1);
    return this.modals.size;
  }
  remove(modal) {
    this.modals.delete(modal);
  }
  isTopModal(modal) {
    if (!modal)
      return false;
    return this.modals.get(modal) === this.modals.size;
  }
};
var modalManager = new ModalManager();
function useModalManager(ref, isOpen) {
  const [index, setIndex] = (0, import_react68.useState)(0);
  (0, import_react68.useEffect)(() => {
    const node2 = ref.current;
    if (!node2)
      return;
    if (isOpen) {
      const index2 = modalManager.add(node2);
      setIndex(index2);
    }
    return () => {
      modalManager.remove(node2);
      setIndex(0);
    };
  }, [isOpen, ref]);
  return index;
}

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node2) {
  return node2 && (node2.host || unwrapHost(node2.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node2) {
      if (elementsToKeep.has(node2)) {
        deep(node2);
      } else {
        try {
          var attr = node2.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node2) || 0) + 1;
          var markerValue = (markerCounter.get(node2) || 0) + 1;
          counterMap.set(node2, counterValue);
          markerCounter.set(node2, markerValue);
          hiddenNodes.push(node2);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node2, true);
          }
          if (markerValue === 1) {
            node2.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node2.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node2, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node2) {
      var counterValue = counterMap.get(node2) - 1;
      var markerValue = markerCounter.get(node2) - 1;
      counterMap.set(node2, counterValue);
      markerCounter.set(node2, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node2)) {
          node2.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node2);
      }
      if (!markerValue) {
        node2.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@chakra-ui/modal/dist/chunk-TJ2Q5ITW.mjs
var import_react69 = __toESM(require_react(), 1);
function useModal(props) {
  const {
    isOpen,
    onClose,
    id,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    useInert = true,
    onOverlayClick: onOverlayClickProp,
    onEsc
  } = props;
  const dialogRef = (0, import_react69.useRef)(null);
  const overlayRef = (0, import_react69.useRef)(null);
  const [dialogId, headerId, bodyId] = useIds2(
    id,
    `chakra-modal`,
    `chakra-modal--header`,
    `chakra-modal--body`
  );
  useAriaHidden(dialogRef, isOpen && useInert);
  const index = useModalManager(dialogRef, isOpen);
  const mouseDownTarget = (0, import_react69.useRef)(null);
  const onMouseDown = (0, import_react69.useCallback)((event) => {
    mouseDownTarget.current = event.target;
  }, []);
  const onKeyDown = (0, import_react69.useCallback)(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (closeOnEsc) {
          onClose == null ? void 0 : onClose();
        }
        onEsc == null ? void 0 : onEsc();
      }
    },
    [closeOnEsc, onClose, onEsc]
  );
  const [headerMounted, setHeaderMounted] = (0, import_react69.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react69.useState)(false);
  const getDialogProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => ({
      role: "dialog",
      ...props2,
      ref: mergeRefs(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : void 0,
      "aria-describedby": bodyMounted ? bodyId : void 0,
      onClick: callAllHandlers(
        props2.onClick,
        (event) => event.stopPropagation()
      )
    }),
    [bodyId, bodyMounted, dialogId, headerId, headerMounted]
  );
  const onOverlayClick = (0, import_react69.useCallback)(
    (event) => {
      event.stopPropagation();
      if (mouseDownTarget.current !== event.target)
        return;
      if (!modalManager.isTopModal(dialogRef.current))
        return;
      if (closeOnOverlayClick) {
        onClose == null ? void 0 : onClose();
      }
      onOverlayClickProp == null ? void 0 : onOverlayClickProp();
    },
    [onClose, closeOnOverlayClick, onOverlayClickProp]
  );
  const getDialogContainerProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(ref, overlayRef),
      onClick: callAllHandlers(props2.onClick, onOverlayClick),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onMouseDown: callAllHandlers(props2.onMouseDown, onMouseDown)
    }),
    [onKeyDown, onMouseDown, onOverlayClick]
  );
  return {
    isOpen,
    onClose,
    headerId,
    bodyId,
    setBodyMounted,
    setHeaderMounted,
    dialogRef,
    overlayRef,
    getDialogProps,
    getDialogContainerProps,
    index
  };
}
function useAriaHidden(ref, shouldHide) {
  const currentElement = ref.current;
  (0, import_react69.useEffect)(() => {
    if (!ref.current || !shouldHide)
      return void 0;
    return hideOthers(ref.current);
  }, [shouldHide, ref, currentElement]);
}
function useIds2(idProp, ...prefixes) {
  const reactId = (0, import_react69.useId)();
  const id = idProp || reactId;
  return (0, import_react69.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}

// node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var [ModalStylesProvider, useModalStyles] = createContext({
  name: `ModalStylesContext`,
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
var [ModalContextProvider, useModalContext] = createContext({
  strict: true,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
});
var Modal = (props) => {
  const modalProps = {
    scrollBehavior: "outside",
    autoFocus: true,
    trapFocus: true,
    returnFocusOnClose: true,
    blockScrollOnMount: true,
    allowPinchZoom: false,
    motionPreset: "scale",
    lockFocusAcrossFrames: true,
    ...props
  };
  const {
    portalProps,
    children,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames,
    onCloseComplete
  } = modalProps;
  const styles = useMultiStyleConfig("Modal", modalProps);
  const modal = useModal(modalProps);
  const context = {
    ...modal,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames
  };
  return (0, import_jsx_runtime58.jsx)(ModalContextProvider, { value: context, children: (0, import_jsx_runtime58.jsx)(ModalStylesProvider, { value: styles, children: (0, import_jsx_runtime58.jsx)(AnimatePresence, { onExitComplete: onCloseComplete, children: context.isOpen && (0, import_jsx_runtime58.jsx)(Portal, { ...portalProps, children }) }) }) });
};
Modal.displayName = "Modal";

// node_modules/@chakra-ui/modal/dist/chunk-NABYTFTG.mjs
var import_react70 = __toESM(require_react(), 1);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React17 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React13 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React13.forwardRef(function(props, parentRef) {
  var ref = React13.useRef(null);
  var _a2 = React13.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a2[0], setCallbacks = _a2[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar2 = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container2 = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar2;
  var containerRef = useMergeRefs2([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React13.createElement(
    React13.Fragment,
    null,
    enabled && React13.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React13.cloneElement(React13.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React13.createElement(Container2, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React16 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React15 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React14 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css3) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css3;
  } else {
    tag.appendChild(document.createTextNode(css3));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter2 = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter2 == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter2++;
    },
    remove: function() {
      counter2--;
      if (!counter2 && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React14.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a2) {
    var styles = _a2.styles, dynamic = _a2.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse2 = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse2(left), parse2(top), parse2(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a2, allowRelative, gapMode, important) {
  var left = _a2.left, top = _a2.top, right = _a2.right, gap = _a2.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter2 = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter2) ? counter2 : 0;
};
var useLockAttribute = function() {
  React15.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a2) {
  var noRelative = _a2.noRelative, noImportant = _a2.noImportant, _b = _a2.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React15.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React15.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node2) {
  return node2.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node2, overflow) {
  if (!(node2 instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node2);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node2) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowY");
};
var elementCouldBeHScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowX");
};
var locationCouldBeScrolled = function(axis, node2) {
  var ownerDocument = node2.ownerDocument;
  var current = node2;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a2 = getScrollVariables(axis, current), scrollHeight = _a2[1], clientHeight = _a2[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a2) {
  var scrollTop = _a2.scrollTop, scrollHeight = _a2.scrollHeight, clientHeight = _a2.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a2) {
  var scrollLeft = _a2.scrollLeft, scrollWidth = _a2.scrollWidth, clientWidth = _a2.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node2) {
  return axis === "v" ? elementCouldBeVScrolled(node2) : elementCouldBeHScrolled(node2);
};
var getScrollVariables = function(axis, node2) {
  return axis === "v" ? getVScrollVariables(node2) : getHScrollVariables(node2);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a2 = getScrollVariables(axis, target), position2 = _a2[0], scroll_1 = _a2[1], capacity = _a2[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position2;
    if (position2 || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position2;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef3 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React16.useRef([]);
  var touchStartRef = React16.useRef([0, 0]);
  var activeAxis = React16.useRef();
  var id = React16.useState(idCounter++)[0];
  var Style2 = React16.useState(styleSingleton)[0];
  var lastProps = React16.useRef(props);
  React16.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React16.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef3), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React16.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React16.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef3).filter(Boolean).filter(function(node2) {
        return node2.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React16.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React16.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React16.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React16.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React16.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React16.createElement(
    React16.Fragment,
    null,
    inert ? React16.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React16.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node2) {
  var shadowParent = null;
  while (node2 !== null) {
    if (node2 instanceof ShadowRoot) {
      shadowParent = node2.host;
      node2 = node2.host;
    }
    node2 = node2.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React17.forwardRef(function(props, ref) {
  return React17.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/@chakra-ui/modal/dist/chunk-NABYTFTG.mjs
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
function ModalFocusScope(props) {
  const {
    autoFocus,
    trapFocus,
    dialogRef,
    initialFocusRef,
    blockScrollOnMount,
    allowPinchZoom,
    finalFocusRef,
    returnFocusOnClose,
    preserveScrollBarGap,
    lockFocusAcrossFrames,
    isOpen
  } = useModalContext();
  const [isPresent, safeToRemove] = usePresence();
  (0, import_react70.useEffect)(() => {
    if (!isPresent && safeToRemove) {
      setTimeout(safeToRemove);
    }
  }, [isPresent, safeToRemove]);
  const index = useModalManager(dialogRef, isOpen);
  return (0, import_jsx_runtime59.jsx)(
    FocusLock2,
    {
      autoFocus,
      isDisabled: !trapFocus,
      initialFocusRef,
      finalFocusRef,
      restoreFocus: returnFocusOnClose,
      contentRef: dialogRef,
      lockFocusAcrossFrames,
      children: (0, import_jsx_runtime59.jsx)(
        Combination_default2,
        {
          removeScrollBar: !preserveScrollBarGap,
          allowPinchZoom,
          enabled: index === 1 && blockScrollOnMount,
          forwardProps: true,
          children: props.children
        }
      )
    }
  );
}

// node_modules/@chakra-ui/modal/dist/chunk-EL2VKIZQ.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var ModalContent = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      containerProps: rootProps,
      motionProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    };
    const { motionPreset } = useModalContext();
    return (0, import_jsx_runtime60.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime60.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime60.jsx)(
          ModalTransition,
          {
            preset: motionPreset,
            motionProps,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
ModalContent.displayName = "ModalContent";

// node_modules/@chakra-ui/modal/dist/chunk-FQDHE43W.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
function AlertDialog(props) {
  const { leastDestructiveRef, ...rest } = props;
  return (0, import_jsx_runtime61.jsx)(Modal, { ...rest, initialFocusRef: leastDestructiveRef });
}
var AlertDialogContent = forwardRef(
  (props, ref) => (0, import_jsx_runtime61.jsx)(ModalContent, { ref, role: "alertdialog", ...props })
);

// node_modules/@chakra-ui/modal/dist/chunk-MCHDHFCQ.mjs
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var [DrawerContextProvider, useDrawerContext] = createContext();
var placementMap = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function getDrawerPlacement(placement, dir) {
  var _a2, _b;
  if (!placement)
    return;
  return (_b = (_a2 = placementMap[placement]) == null ? void 0 : _a2[dir]) != null ? _b : placement;
}
function Drawer(props) {
  var _a2;
  const {
    isOpen,
    onClose,
    placement: placementProp = "right",
    children,
    ...rest
  } = props;
  const theme2 = useTheme();
  const drawerStyleConfig = (_a2 = theme2.components) == null ? void 0 : _a2.Drawer;
  const placement = getDrawerPlacement(placementProp, theme2.direction);
  return (0, import_jsx_runtime62.jsx)(DrawerContextProvider, { value: { placement }, children: (0, import_jsx_runtime62.jsx)(
    Modal,
    {
      isOpen,
      onClose,
      styleConfig: drawerStyleConfig,
      ...rest,
      children
    }
  ) });
}

// node_modules/@chakra-ui/modal/dist/chunk-65IR7CTH.mjs
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var MotionDiv = chakra(Slide);
var DrawerContent = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      motionProps,
      containerProps: rootProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps, isOpen } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    };
    const { placement } = useDrawerContext();
    return (0, import_jsx_runtime63.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime63.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime63.jsx)(
          MotionDiv,
          {
            motionProps,
            direction: placement,
            in: isOpen,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
DrawerContent.displayName = "DrawerContent";

// node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var ModalFooter = forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const _className = cx("chakra-modal__footer", className);
    const styles = useModalStyles();
    const footerStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles.footer
    };
    return (0, import_jsx_runtime64.jsx)(
      chakra.footer,
      {
        ref,
        ...rest,
        __css: footerStyles,
        className: _className
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";

// node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs
var import_react71 = __toESM(require_react(), 1);
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var ModalHeader = forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const { headerId, setHeaderMounted } = useModalContext();
    (0, import_react71.useEffect)(() => {
      setHeaderMounted(true);
      return () => setHeaderMounted(false);
    }, [setHeaderMounted]);
    const _className = cx("chakra-modal__header", className);
    const styles = useModalStyles();
    const headerStyles = {
      flex: 0,
      ...styles.header
    };
    return (0, import_jsx_runtime65.jsx)(
      chakra.header,
      {
        ref,
        className: _className,
        id: headerId,
        ...rest,
        __css: headerStyles
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";

// node_modules/@chakra-ui/modal/dist/chunk-JQMJHPZH.mjs
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var MotionDiv2 = chakra(motion.div);
var ModalOverlay = forwardRef(
  (props, ref) => {
    const { className, transition: transition2, motionProps: _motionProps, ...rest } = props;
    const _className = cx("chakra-modal__overlay", className);
    const styles = useModalStyles();
    const overlayStyle = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles.overlay
    };
    const { motionPreset } = useModalContext();
    const defaultMotionProps = motionPreset === "none" ? {} : fadeConfig;
    const motionProps = _motionProps || defaultMotionProps;
    return (0, import_jsx_runtime66.jsx)(
      MotionDiv2,
      {
        ...motionProps,
        __css: overlayStyle,
        ref,
        className: _className,
        ...rest
      }
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";

// node_modules/@chakra-ui/modal/dist/chunk-OFOVX77R.mjs
var import_react72 = __toESM(require_react(), 1);
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var ModalBody = forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const { bodyId, setBodyMounted } = useModalContext();
  (0, import_react72.useEffect)(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);
  const _className = cx("chakra-modal__body", className);
  const styles = useModalStyles();
  return (0, import_jsx_runtime67.jsx)(
    chakra.div,
    {
      ref,
      className: _className,
      id: bodyId,
      ...rest,
      __css: styles.body
    }
  );
});
ModalBody.displayName = "ModalBody";

// node_modules/@chakra-ui/modal/dist/chunk-4FCEGNGT.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var ModalCloseButton = forwardRef(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose } = useModalContext();
    const _className = cx("chakra-modal__close-btn", className);
    const styles = useModalStyles();
    return (0, import_jsx_runtime68.jsx)(
      CloseButton,
      {
        ref,
        __css: styles.closeButton,
        className: _className,
        onClick: callAllHandlers(onClick, (event) => {
          event.stopPropagation();
          onClose();
        }),
        ...rest
      }
    );
  }
);
ModalCloseButton.displayName = "ModalCloseButton";

// node_modules/@chakra-ui/number-input/dist/chunk-KWODBCCW.mjs
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var TriangleDownIcon = (props) => (0, import_jsx_runtime69.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime69.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
var TriangleUpIcon = (props) => (0, import_jsx_runtime69.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime69.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
  }
) });

// node_modules/@chakra-ui/number-input/dist/chunk-2PMVP26D.mjs
var import_react73 = __toESM(require_react(), 1);
function useAttributeObserver(ref, attributes, fn, enabled) {
  (0, import_react73.useEffect)(() => {
    var _a2;
    if (!ref.current || !enabled)
      return;
    const win = (_a2 = ref.current.ownerDocument.defaultView) != null ? _a2 : window;
    const attrs = Array.isArray(attributes) ? attributes : [attributes];
    const obs = new win.MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName && attrs.includes(change.attributeName)) {
          fn(change);
        }
      }
    });
    obs.observe(ref.current, { attributes: true, attributeFilter: attrs });
    return () => obs.disconnect();
  });
}

// node_modules/@chakra-ui/react-use-interval/dist/index.mjs
var import_react74 = __toESM(require_react(), 1);
function useInterval2(callback, delay) {
  const fn = useCallbackRef(callback);
  (0, import_react74.useEffect)(() => {
    let intervalId = null;
    const tick = () => fn();
    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn]);
}

// node_modules/@chakra-ui/number-input/dist/chunk-366L2ZDN.mjs
var import_react75 = __toESM(require_react(), 1);
var CONTINUOUS_CHANGE_INTERVAL = 50;
var CONTINUOUS_CHANGE_DELAY = 300;
function useSpinner(increment, decrement) {
  const [isSpinning, setIsSpinning] = (0, import_react75.useState)(false);
  const [action, setAction] = (0, import_react75.useState)(null);
  const [runOnce, setRunOnce] = (0, import_react75.useState)(true);
  const timeoutRef = (0, import_react75.useRef)(null);
  const removeTimeout = () => clearTimeout(timeoutRef.current);
  useInterval2(
    () => {
      if (action === "increment") {
        increment();
      }
      if (action === "decrement") {
        decrement();
      }
    },
    isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null
  );
  const up = (0, import_react75.useCallback)(() => {
    if (runOnce) {
      increment();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("increment");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [increment, runOnce]);
  const down = (0, import_react75.useCallback)(() => {
    if (runOnce) {
      decrement();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("decrement");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [decrement, runOnce]);
  const stop = (0, import_react75.useCallback)(() => {
    setRunOnce(true);
    setIsSpinning(false);
    removeTimeout();
  }, []);
  (0, import_react75.useEffect)(() => {
    return () => removeTimeout();
  }, []);
  return { up, down, stop, isSpinning };
}

// node_modules/@chakra-ui/number-input/dist/chunk-4ZJMWFQT.mjs
var import_react76 = __toESM(require_react(), 1);
var FLOATING_POINT_REGEX = /^[Ee0-9+\-.]$/;
function isFloatingPointNumericCharacter(character) {
  return FLOATING_POINT_REGEX.test(character);
}
function isValidNumericKeyboardEvent(event, isValid) {
  if (event.key == null)
    return true;
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
  const isSingleCharacterKey = event.key.length === 1;
  if (!isSingleCharacterKey || isModifierKey)
    return true;
  return isValid(event.key);
}
function useNumberInput(props = {}) {
  const {
    focusInputOnChange = true,
    clampValueOnBlur = true,
    keepWithinRange = true,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step: stepProp = 1,
    isReadOnly,
    isDisabled,
    isRequired,
    isInvalid,
    pattern = "[0-9]*(.[0-9]+)?",
    inputMode = "decimal",
    allowMouseWheel,
    id,
    onChange: _,
    precision,
    name,
    "aria-describedby": ariaDescBy,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onInvalid: onInvalidProp,
    getAriaValueText: getAriaValueTextProp,
    isValidCharacter: isValidCharacterProp,
    format: formatValue,
    parse: parseValue,
    ...htmlProps
  } = props;
  const onFocus3 = useCallbackRef(onFocusProp);
  const onBlur3 = useCallbackRef(onBlurProp);
  const onInvalid = useCallbackRef(onInvalidProp);
  const isValidCharacter = useCallbackRef(
    isValidCharacterProp != null ? isValidCharacterProp : isFloatingPointNumericCharacter
  );
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const counter2 = useCounter(props);
  const {
    update: updateFn,
    increment: incrementFn,
    decrement: decrementFn
  } = counter2;
  const [isFocused, setFocused] = (0, import_react76.useState)(false);
  const isInteractive = !(isReadOnly || isDisabled);
  const inputRef = (0, import_react76.useRef)(null);
  const inputSelectionRef = (0, import_react76.useRef)(null);
  const incrementButtonRef = (0, import_react76.useRef)(null);
  const decrementButtonRef = (0, import_react76.useRef)(null);
  const sanitize = (0, import_react76.useCallback)(
    (value) => value.split("").filter(isValidCharacter).join(""),
    [isValidCharacter]
  );
  const parse3 = (0, import_react76.useCallback)(
    (value) => {
      var _a2;
      return (_a2 = parseValue == null ? void 0 : parseValue(value)) != null ? _a2 : value;
    },
    [parseValue]
  );
  const format = (0, import_react76.useCallback)(
    (value) => {
      var _a2;
      return ((_a2 = formatValue == null ? void 0 : formatValue(value)) != null ? _a2 : value).toString();
    },
    [formatValue]
  );
  useUpdateEffect(() => {
    if (counter2.valueAsNumber > max) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format(counter2.value), counter2.valueAsNumber);
    } else if (counter2.valueAsNumber < min) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format(counter2.value), counter2.valueAsNumber);
    }
  }, [counter2.valueAsNumber, counter2.value, format, onInvalid]);
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.value != counter2.value;
    if (notInSync) {
      const parsedInput = parse3(inputRef.current.value);
      counter2.setValue(sanitize(parsedInput));
    }
  }, [parse3, sanitize]);
  const increment = (0, import_react76.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        incrementFn(step);
      }
    },
    [incrementFn, isInteractive, stepProp]
  );
  const decrement = (0, import_react76.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        decrementFn(step);
      }
    },
    [decrementFn, isInteractive, stepProp]
  );
  const spinner = useSpinner(increment, decrement);
  useAttributeObserver(
    incrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  useAttributeObserver(
    decrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  const onChange = (0, import_react76.useCallback)(
    (event) => {
      const evt = event.nativeEvent;
      if (evt.isComposing)
        return;
      const parsedInput = parse3(event.currentTarget.value);
      updateFn(sanitize(parsedInput));
      inputSelectionRef.current = {
        start: event.currentTarget.selectionStart,
        end: event.currentTarget.selectionEnd
      };
    },
    [updateFn, sanitize, parse3]
  );
  const _onFocus = (0, import_react76.useCallback)(
    (event) => {
      var _a2, _b, _c;
      onFocus3 == null ? void 0 : onFocus3(event);
      if (!inputSelectionRef.current)
        return;
      event.target.selectionStart = (_b = inputSelectionRef.current.start) != null ? _b : (_a2 = event.currentTarget.value) == null ? void 0 : _a2.length;
      event.currentTarget.selectionEnd = (_c = inputSelectionRef.current.end) != null ? _c : event.currentTarget.selectionStart;
    },
    [onFocus3]
  );
  const onKeyDown = (0, import_react76.useCallback)(
    (event) => {
      if (event.nativeEvent.isComposing)
        return;
      if (!isValidNumericKeyboardEvent(event, isValidCharacter)) {
        event.preventDefault();
      }
      const stepFactor = getStepFactor(event) * stepProp;
      const eventKey = event.key;
      const keyMap = {
        ArrowUp: () => increment(stepFactor),
        ArrowDown: () => decrement(stepFactor),
        Home: () => updateFn(min),
        End: () => updateFn(max)
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [isValidCharacter, stepProp, increment, decrement, updateFn, min, max]
  );
  const getStepFactor = (event) => {
    let ratio = 1;
    if (event.metaKey || event.ctrlKey) {
      ratio = 0.1;
    }
    if (event.shiftKey) {
      ratio = 10;
    }
    return ratio;
  };
  const ariaValueText = (0, import_react76.useMemo)(() => {
    const text = getAriaValueText == null ? void 0 : getAriaValueText(counter2.value);
    if (text != null)
      return text;
    const defaultText = counter2.value.toString();
    return !defaultText ? void 0 : defaultText;
  }, [counter2.value, getAriaValueText]);
  const validateAndClamp = (0, import_react76.useCallback)(() => {
    let next = counter2.value;
    if (counter2.value === "")
      return;
    const valueStartsWithE = /^[eE]/.test(counter2.value.toString());
    if (valueStartsWithE) {
      counter2.setValue("");
    } else {
      if (counter2.valueAsNumber < min) {
        next = min;
      }
      if (counter2.valueAsNumber > max) {
        next = max;
      }
      counter2.cast(next);
    }
  }, [counter2, max, min]);
  const onInputBlur = (0, import_react76.useCallback)(() => {
    setFocused(false);
    if (clampValueOnBlur) {
      validateAndClamp();
    }
  }, [clampValueOnBlur, setFocused, validateAndClamp]);
  const focusInput = (0, import_react76.useCallback)(() => {
    if (focusInputOnChange) {
      requestAnimationFrame(() => {
        var _a2;
        (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      });
    }
  }, [focusInputOnChange]);
  const spinUp = (0, import_react76.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.up();
      focusInput();
    },
    [focusInput, spinner]
  );
  const spinDown = (0, import_react76.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.down();
      focusInput();
    },
    [focusInput, spinner]
  );
  useEventListener(
    () => inputRef.current,
    "wheel",
    (event) => {
      var _a2, _b;
      const doc = (_b = (_a2 = inputRef.current) == null ? void 0 : _a2.ownerDocument) != null ? _b : document;
      const isInputFocused = doc.activeElement === inputRef.current;
      if (!allowMouseWheel || !isInputFocused)
        return;
      event.preventDefault();
      const stepFactor = getStepFactor(event) * stepProp;
      const direction = Math.sign(event.deltaY);
      if (direction === -1) {
        increment(stepFactor);
      } else if (direction === 1) {
        decrement(stepFactor);
      }
    },
    { passive: false }
  );
  const getIncrementButtonProps = (0, import_react76.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled || keepWithinRange && counter2.isAtMax;
      return {
        ...props2,
        ref: mergeRefs(ref, incrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinUp(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMax, keepWithinRange, spinUp, spinner.stop, isDisabled]
  );
  const getDecrementButtonProps = (0, import_react76.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled || keepWithinRange && counter2.isAtMin;
      return {
        ...props2,
        ref: mergeRefs(ref, decrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinDown(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMin, keepWithinRange, spinDown, spinner.stop, isDisabled]
  );
  const getInputProps = (0, import_react76.useCallback)(
    (props2 = {}, ref = null) => {
      var _a2, _b, _c, _d;
      return {
        name,
        inputMode,
        type: "text",
        pattern,
        "aria-labelledby": ariaLabelledBy,
        "aria-label": ariaLabel,
        "aria-describedby": ariaDescBy,
        id,
        disabled: isDisabled,
        ...props2,
        readOnly: (_a2 = props2.readOnly) != null ? _a2 : isReadOnly,
        "aria-readonly": (_b = props2.readOnly) != null ? _b : isReadOnly,
        "aria-required": (_c = props2.required) != null ? _c : isRequired,
        required: (_d = props2.required) != null ? _d : isRequired,
        ref: mergeRefs(inputRef, ref),
        value: format(counter2.value),
        role: "spinbutton",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": Number.isNaN(counter2.valueAsNumber) ? void 0 : counter2.valueAsNumber,
        "aria-invalid": ariaAttr(isInvalid != null ? isInvalid : counter2.isOutOfRange),
        "aria-valuetext": ariaValueText,
        autoComplete: "off",
        autoCorrect: "off",
        onChange: callAllHandlers(props2.onChange, onChange),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(
          props2.onFocus,
          _onFocus,
          () => setFocused(true)
        ),
        onBlur: callAllHandlers(props2.onBlur, onBlur3, onInputBlur)
      };
    },
    [
      name,
      inputMode,
      pattern,
      ariaLabelledBy,
      ariaLabel,
      format,
      ariaDescBy,
      id,
      isDisabled,
      isRequired,
      isReadOnly,
      isInvalid,
      counter2.value,
      counter2.valueAsNumber,
      counter2.isOutOfRange,
      min,
      max,
      ariaValueText,
      onChange,
      onKeyDown,
      _onFocus,
      onBlur3,
      onInputBlur
    ]
  );
  return {
    value: format(counter2.value),
    valueAsNumber: counter2.valueAsNumber,
    isFocused,
    isDisabled,
    isReadOnly,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getInputProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/number-input/dist/chunk-2JJX6TVY.mjs
var import_react77 = __toESM(require_react(), 1);
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var [NumberInputStylesProvider, useNumberInputStyles] = createContext({
  name: `NumberInputStylesContext`,
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
});
var [NumberInputProvider, useNumberInputContext] = createContext({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
});
var NumberInput = forwardRef(
  function NumberInput2(props, ref) {
    const styles = useMultiStyleConfig("NumberInput", props);
    const ownProps = omitThemingProps(props);
    const controlProps = useFormControlProps(ownProps);
    const { htmlProps, ...context } = useNumberInput(controlProps);
    const ctx = (0, import_react77.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime70.jsx)(NumberInputProvider, { value: ctx, children: (0, import_jsx_runtime70.jsx)(NumberInputStylesProvider, { value: styles, children: (0, import_jsx_runtime70.jsx)(
      chakra.div,
      {
        ...htmlProps,
        ref,
        className: cx("chakra-numberinput", props.className),
        __css: {
          position: "relative",
          zIndex: 0,
          ...styles.root
        }
      }
    ) }) });
  }
);
NumberInput.displayName = "NumberInput";
var NumberInputStepper = forwardRef(
  function NumberInputStepper2(props, ref) {
    const styles = useNumberInputStyles();
    return (0, import_jsx_runtime70.jsx)(
      chakra.div,
      {
        "aria-hidden": true,
        ref,
        ...props,
        __css: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "0",
          insetEnd: "0px",
          margin: "1px",
          height: "calc(100% - 2px)",
          zIndex: 1,
          ...styles.stepperGroup
        }
      }
    );
  }
);
NumberInputStepper.displayName = "NumberInputStepper";
var NumberInputField = forwardRef(
  function NumberInputField2(props, ref) {
    const { getInputProps } = useNumberInputContext();
    const input = getInputProps(props, ref);
    const styles = useNumberInputStyles();
    return (0, import_jsx_runtime70.jsx)(
      chakra.input,
      {
        ...input,
        className: cx("chakra-numberinput__field", props.className),
        __css: {
          width: "100%",
          ...styles.field
        }
      }
    );
  }
);
NumberInputField.displayName = "NumberInputField";
var StyledStepper = chakra("div", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    transitionProperty: "common",
    transitionDuration: "normal",
    userSelect: "none",
    cursor: "pointer",
    lineHeight: "normal"
  }
});
var NumberDecrementStepper = forwardRef(function NumberDecrementStepper2(props, ref) {
  var _a2;
  const styles = useNumberInputStyles();
  const { getDecrementButtonProps } = useNumberInputContext();
  const decrement = getDecrementButtonProps(props, ref);
  return (0, import_jsx_runtime70.jsx)(StyledStepper, { ...decrement, __css: styles.stepper, children: (_a2 = props.children) != null ? _a2 : (0, import_jsx_runtime70.jsx)(TriangleDownIcon, {}) });
});
NumberDecrementStepper.displayName = "NumberDecrementStepper";
var NumberIncrementStepper = forwardRef(function NumberIncrementStepper2(props, ref) {
  var _a2;
  const { getIncrementButtonProps } = useNumberInputContext();
  const increment = getIncrementButtonProps(props, ref);
  const styles = useNumberInputStyles();
  return (0, import_jsx_runtime70.jsx)(StyledStepper, { ...increment, __css: styles.stepper, children: (_a2 = props.children) != null ? _a2 : (0, import_jsx_runtime70.jsx)(TriangleUpIcon, {}) });
});
NumberIncrementStepper.displayName = "NumberIncrementStepper";

// node_modules/@chakra-ui/pin-input/dist/chunk-7FMJRAMH.mjs
var import_react78 = __toESM(require_react(), 1);
var [
  PinInputDescendantsProvider,
  usePinInputDescendantsContext,
  usePinInputDescendants,
  usePinInputDescendant
] = createDescendantContext();
var [PinInputProvider, usePinInputContext] = createContext({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"
});
var toArray2 = (value) => value == null ? void 0 : value.split("");
function validate(value, type) {
  const NUMERIC_REGEX = /^[0-9]+$/;
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
}
function usePinInput(props = {}) {
  const {
    autoFocus,
    value,
    defaultValue,
    onChange,
    onComplete,
    placeholder = "○",
    manageFocus = true,
    otp = false,
    id: idProp,
    isDisabled,
    isInvalid,
    type = "number",
    mask
  } = props;
  const uuid = (0, import_react78.useId)();
  const id = idProp != null ? idProp : `pin-input-${uuid}`;
  const descendants = usePinInputDescendants();
  const [moveFocus2, setMoveFocus] = (0, import_react78.useState)(true);
  const [focusedIndex, setFocusedIndex] = (0, import_react78.useState)(-1);
  const [values, setValues] = useControllableState({
    defaultValue: toArray2(defaultValue) || [],
    value: toArray2(value),
    onChange: (values2) => onChange == null ? void 0 : onChange(values2.join(""))
  });
  (0, import_react78.useEffect)(() => {
    if (autoFocus) {
      const first = descendants.first();
      if (first) {
        requestAnimationFrame(() => {
          first.node.focus();
        });
      }
    }
  }, [descendants]);
  const focusNext = (0, import_react78.useCallback)(
    (index) => {
      if (!moveFocus2 || !manageFocus)
        return;
      const next = descendants.next(index, false);
      if (next) {
        requestAnimationFrame(() => {
          next.node.focus();
        });
      }
    },
    [descendants, moveFocus2, manageFocus]
  );
  const setValue = (0, import_react78.useCallback)(
    (value2, index, handleFocus = true) => {
      const nextValues = [...values];
      nextValues[index] = value2;
      setValues(nextValues);
      const isComplete = value2 !== "" && nextValues.length === descendants.count() && nextValues.every(
        (inputValue) => inputValue != null && inputValue !== ""
      );
      if (isComplete) {
        onComplete == null ? void 0 : onComplete(nextValues.join(""));
      } else {
        if (handleFocus)
          focusNext(index);
      }
    },
    [values, setValues, focusNext, onComplete, descendants]
  );
  const clear = (0, import_react78.useCallback)(() => {
    var _a2;
    const values2 = Array(descendants.count()).fill("");
    setValues(values2);
    const first = descendants.first();
    (_a2 = first == null ? void 0 : first.node) == null ? void 0 : _a2.focus();
  }, [descendants, setValues]);
  const getNextValue = (0, import_react78.useCallback)((value2, eventValue) => {
    let nextValue = eventValue;
    if ((value2 == null ? void 0 : value2.length) > 0) {
      if (value2[0] === eventValue.charAt(0)) {
        nextValue = eventValue.charAt(1);
      } else if (value2[0] === eventValue.charAt(1)) {
        nextValue = eventValue.charAt(0);
      }
    }
    return nextValue;
  }, []);
  const getInputProps = (0, import_react78.useCallback)(
    (props2) => {
      const { index, ...rest } = props2;
      const onChange2 = (event) => {
        const eventValue = event.target.value;
        const currentValue = values[index];
        const nextValue = getNextValue(currentValue, eventValue);
        if (nextValue === "") {
          setValue("", index);
          return;
        }
        if (eventValue.length > 2) {
          if (validate(eventValue, type)) {
            const nextValue2 = eventValue.split("").filter((_, index2) => index2 < descendants.count());
            setValues(nextValue2);
            if (nextValue2.length === descendants.count()) {
              onComplete == null ? void 0 : onComplete(nextValue2.join(""));
            }
          }
        } else {
          if (validate(nextValue, type)) {
            setValue(nextValue, index);
          }
          setMoveFocus(true);
        }
      };
      const onKeyDown = (event) => {
        var _a2;
        if (event.key === "Backspace" && manageFocus) {
          if (event.target.value === "") {
            const prevInput = descendants.prev(index, false);
            if (prevInput) {
              setValue("", index - 1, false);
              (_a2 = prevInput.node) == null ? void 0 : _a2.focus();
              setMoveFocus(true);
            }
          } else {
            setMoveFocus(false);
          }
        }
      };
      const onFocus3 = () => {
        setFocusedIndex(index);
      };
      const onBlur3 = () => {
        setFocusedIndex(-1);
      };
      const hasFocus = focusedIndex === index;
      const inputType = type === "number" ? "tel" : "text";
      return {
        "aria-label": "Please enter your pin code",
        inputMode: type === "number" ? "numeric" : "text",
        type: mask ? "password" : inputType,
        ...rest,
        id: `${id}-${index}`,
        disabled: isDisabled,
        "aria-invalid": ariaAttr(isInvalid),
        onChange: callAllHandlers(rest.onChange, onChange2),
        onKeyDown: callAllHandlers(rest.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(rest.onFocus, onFocus3),
        onBlur: callAllHandlers(rest.onBlur, onBlur3),
        value: values[index] || "",
        autoComplete: otp ? "one-time-code" : "off",
        placeholder: hasFocus ? "" : placeholder
      };
    },
    [
      descendants,
      focusedIndex,
      getNextValue,
      id,
      isDisabled,
      mask,
      isInvalid,
      manageFocus,
      onComplete,
      otp,
      placeholder,
      setValue,
      setValues,
      type,
      values
    ]
  );
  return {
    // prop getter
    getInputProps,
    // state
    id,
    descendants,
    values,
    // actions
    setValue,
    setValues,
    clear
  };
}
function usePinInputField(props = {}, ref = null) {
  const { getInputProps } = usePinInputContext();
  const { index, register } = usePinInputDescendant();
  return getInputProps({
    ...props,
    ref: mergeRefs(register, ref),
    index
  });
}

// node_modules/@chakra-ui/pin-input/dist/chunk-I5V4ORUK.mjs
var import_react79 = __toESM(require_react(), 1);
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
function PinInput(props) {
  const styles = useStyleConfig("PinInput", props);
  const { children, ...rest } = omitThemingProps(props);
  const { descendants, ...context } = usePinInput(rest);
  const clones = getValidChildren(children).map(
    (child) => (0, import_react79.cloneElement)(child, { __css: styles })
  );
  return (0, import_jsx_runtime71.jsx)(PinInputDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime71.jsx)(PinInputProvider, { value: context, children: clones }) });
}
PinInput.displayName = "PinInput";
var PinInputField = forwardRef(
  function PinInputField2(props, ref) {
    const inputProps = usePinInputField(props, ref);
    return (0, import_jsx_runtime71.jsx)(
      chakra.input,
      {
        ...inputProps,
        className: cx("chakra-pin-input", props.className)
      }
    );
  }
);
PinInputField.displayName = "PinInputField";

// node_modules/@chakra-ui/popover/dist/chunk-Z3POGKNI.mjs
var [PopoverProvider, usePopoverContext] = createContext({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
var [PopoverStylesProvider, usePopoverStyles] = createContext({
  name: `PopoverStylesContext`,
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});

// node_modules/@chakra-ui/popover/dist/chunk-DHS7LAGW.mjs
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var PopoverHeader = forwardRef(
  function PopoverHeader2(props, ref) {
    const { getHeaderProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return (0, import_jsx_runtime72.jsx)(
      chakra.header,
      {
        ...getHeaderProps(props, ref),
        className: cx("chakra-popover__header", props.className),
        __css: styles.header
      }
    );
  }
);
PopoverHeader.displayName = "PopoverHeader";

// node_modules/@chakra-ui/popover/dist/chunk-OFUG2FGD.mjs
var import_react80 = __toESM(require_react(), 1);
function PopoverTrigger(props) {
  const child = import_react80.Children.only(props.children);
  const { getTriggerProps } = usePopoverContext();
  return (0, import_react80.cloneElement)(child, getTriggerProps(child.props, child.ref));
}
PopoverTrigger.displayName = "PopoverTrigger";

// node_modules/@chakra-ui/popover/dist/chunk-A566ERKI.mjs
var import_react81 = __toESM(require_react(), 1);
var TRIGGER = {
  click: "click",
  hover: "hover"
};
function usePopover(props = {}) {
  const {
    closeOnBlur = true,
    closeOnEsc = true,
    initialFocusRef,
    id,
    returnFocusOnClose = true,
    autoFocus = true,
    arrowSize,
    arrowShadowColor,
    trigger: trigger2 = TRIGGER.click,
    openDelay = 200,
    closeDelay = 200,
    isLazy,
    lazyBehavior = "unmount",
    computePositionOnMount,
    ...popperProps
  } = props;
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure(props);
  const anchorRef = (0, import_react81.useRef)(null);
  const triggerRef = (0, import_react81.useRef)(null);
  const popoverRef = (0, import_react81.useRef)(null);
  const isHoveringRef = (0, import_react81.useRef)(false);
  const hasBeenOpened = (0, import_react81.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const [hasHeader, setHasHeader] = (0, import_react81.useState)(false);
  const [hasBody, setHasBody] = (0, import_react81.useState)(false);
  const uuid = (0, import_react81.useId)();
  const uid = id != null ? id : uuid;
  const [triggerId, popoverId, headerId, bodyId] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((id2) => `${id2}-${uid}`);
  const {
    referenceRef,
    getArrowProps,
    getPopperProps,
    getArrowInnerProps,
    forceUpdate
  } = usePopper({
    ...popperProps,
    enabled: isOpen || !!computePositionOnMount
  });
  const animated = useAnimationState({ isOpen, ref: popoverRef });
  useFocusOnPointerDown({
    enabled: isOpen,
    ref: triggerRef
  });
  useFocusOnHide(popoverRef, {
    focusRef: triggerRef,
    visible: isOpen,
    shouldFocus: returnFocusOnClose && trigger2 === TRIGGER.click
  });
  useFocusOnShow(popoverRef, {
    focusRef: initialFocusRef,
    visible: isOpen,
    shouldFocus: autoFocus && trigger2 === TRIGGER.click
  });
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  const getPopoverProps = (0, import_react81.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const popoverProps = {
        ...props2,
        style: {
          ...props2.style,
          transformOrigin: cssVars.transformOrigin.varRef,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        },
        ref: mergeRefs(popoverRef, _ref2),
        children: shouldRenderChildren ? props2.children : null,
        id: popoverId,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: callAllHandlers(props2.onKeyDown, (event) => {
          if (closeOnEsc && event.key === "Escape") {
            onClose();
          }
        }),
        onBlur: callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const targetIsPopover = contains4(popoverRef.current, relatedTarget);
          const targetIsTrigger = contains4(triggerRef.current, relatedTarget);
          const isValidBlur = !targetIsPopover && !targetIsTrigger;
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        }),
        "aria-labelledby": hasHeader ? headerId : void 0,
        "aria-describedby": hasBody ? bodyId : void 0
      };
      if (trigger2 === TRIGGER.hover) {
        popoverProps.role = "tooltip";
        popoverProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
        });
        popoverProps.onMouseLeave = callAllHandlers(
          props2.onMouseLeave,
          (event) => {
            if (event.nativeEvent.relatedTarget === null) {
              return;
            }
            isHoveringRef.current = false;
            setTimeout(() => onClose(), closeDelay);
          }
        );
      }
      return popoverProps;
    },
    [
      shouldRenderChildren,
      popoverId,
      hasHeader,
      headerId,
      hasBody,
      bodyId,
      trigger2,
      closeOnEsc,
      onClose,
      isOpen,
      closeOnBlur,
      closeDelay,
      arrowShadowColor,
      arrowSize
    ]
  );
  const getPopoverPositionerProps = (0, import_react81.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          visibility: isOpen ? "visible" : "hidden",
          ...props2.style
        }
      },
      forwardedRef
    ),
    [isOpen, getPopperProps]
  );
  const getAnchorProps = (0, import_react81.useCallback)(
    (props2, _ref2 = null) => {
      return {
        ...props2,
        // If anchor is rendered, it is used as reference.
        ref: mergeRefs(_ref2, anchorRef, referenceRef)
      };
    },
    [anchorRef, referenceRef]
  );
  const openTimeout = (0, import_react81.useRef)();
  const closeTimeout = (0, import_react81.useRef)();
  const maybeReferenceRef = (0, import_react81.useCallback)(
    (node2) => {
      if (anchorRef.current == null) {
        referenceRef(node2);
      }
    },
    [referenceRef]
  );
  const getTriggerProps = (0, import_react81.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs(triggerRef, _ref2, maybeReferenceRef),
        id: triggerId,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": popoverId
      };
      if (trigger2 === TRIGGER.click) {
        triggerProps.onClick = callAllHandlers(props2.onClick, onToggle);
      }
      if (trigger2 === TRIGGER.hover) {
        triggerProps.onFocus = callAllHandlers(props2.onFocus, () => {
          if (openTimeout.current === void 0) {
            onOpen();
          }
        });
        triggerProps.onBlur = callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const isValidBlur = !contains4(popoverRef.current, relatedTarget);
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        });
        triggerProps.onKeyDown = callAllHandlers(props2.onKeyDown, (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        });
        triggerProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
          openTimeout.current = window.setTimeout(() => onOpen(), openDelay);
        });
        triggerProps.onMouseLeave = callAllHandlers(props2.onMouseLeave, () => {
          isHoveringRef.current = false;
          if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = void 0;
          }
          closeTimeout.current = window.setTimeout(() => {
            if (isHoveringRef.current === false) {
              onClose();
            }
          }, closeDelay);
        });
      }
      return triggerProps;
    },
    [
      triggerId,
      isOpen,
      popoverId,
      trigger2,
      maybeReferenceRef,
      onToggle,
      onOpen,
      closeOnBlur,
      onClose,
      openDelay,
      closeDelay
    ]
  );
  (0, import_react81.useEffect)(() => {
    return () => {
      if (openTimeout.current) {
        clearTimeout(openTimeout.current);
      }
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);
  const getHeaderProps = (0, import_react81.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: headerId,
      ref: mergeRefs(ref, (node2) => {
        setHasHeader(!!node2);
      })
    }),
    [headerId]
  );
  const getBodyProps = (0, import_react81.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: bodyId,
      ref: mergeRefs(ref, (node2) => {
        setHasBody(!!node2);
      })
    }),
    [bodyId]
  );
  return {
    forceUpdate,
    isOpen,
    onAnimationComplete: animated.onComplete,
    onClose,
    getAnchorProps,
    getArrowProps,
    getArrowInnerProps,
    getPopoverPositionerProps,
    getPopoverProps,
    getTriggerProps,
    getHeaderProps,
    getBodyProps
  };
}
function contains4(parent, child) {
  return parent === child || (parent == null ? void 0 : parent.contains(child));
}
function getRelatedTarget(event) {
  var _a2;
  const activeEl = event.currentTarget.ownerDocument.activeElement;
  return (_a2 = event.relatedTarget) != null ? _a2 : activeEl;
}

// node_modules/@chakra-ui/popover/dist/chunk-3WRTUQ76.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
function Popover(props) {
  const styles = useMultiStyleConfig("Popover", props);
  const { children, ...rest } = omitThemingProps(props);
  const theme2 = useTheme();
  const context = usePopover({ ...rest, direction: theme2.direction });
  return (0, import_jsx_runtime73.jsx)(PopoverProvider, { value: context, children: (0, import_jsx_runtime73.jsx)(PopoverStylesProvider, { value: styles, children: runIfFn(children, {
    isOpen: context.isOpen,
    onClose: context.onClose,
    forceUpdate: context.forceUpdate
  }) }) });
}
Popover.displayName = "Popover";

// node_modules/@chakra-ui/popover/dist/chunk-DY5QRMBO.mjs
var import_react82 = __toESM(require_react(), 1);
function PopoverAnchor(props) {
  const child = import_react82.Children.only(props.children);
  const { getAnchorProps } = usePopoverContext();
  return (0, import_react82.cloneElement)(child, getAnchorProps(child.props, child.ref));
}
PopoverAnchor.displayName = "PopoverAnchor";

// node_modules/@chakra-ui/popover/dist/chunk-TL4BBA7T.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var resolveVar = (scale2, value) => value ? `${scale2}.${value}, ${value}` : void 0;
function PopoverArrow(props) {
  var _a2;
  const { bg, bgColor, backgroundColor, shadow, boxShadow, shadowColor } = props;
  const { getArrowProps, getArrowInnerProps } = usePopoverContext();
  const styles = usePopoverStyles();
  const arrowBg = (_a2 = bg != null ? bg : bgColor) != null ? _a2 : backgroundColor;
  const arrowShadow = shadow != null ? shadow : boxShadow;
  return (0, import_jsx_runtime74.jsx)(
    chakra.div,
    {
      ...getArrowProps(),
      className: "chakra-popover__arrow-positioner",
      children: (0, import_jsx_runtime74.jsx)(
        chakra.div,
        {
          className: cx("chakra-popover__arrow", props.className),
          ...getArrowInnerProps(props),
          __css: {
            "--popper-arrow-shadow-color": resolveVar("colors", shadowColor),
            "--popper-arrow-bg": resolveVar("colors", arrowBg),
            "--popper-arrow-shadow": resolveVar("shadows", arrowShadow),
            ...styles.arrow
          }
        }
      )
    }
  );
}
PopoverArrow.displayName = "PopoverArrow";

// node_modules/@chakra-ui/popover/dist/chunk-RLMGYZLY.mjs
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var PopoverBody = forwardRef(
  function PopoverBody2(props, ref) {
    const { getBodyProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return (0, import_jsx_runtime75.jsx)(
      chakra.div,
      {
        ...getBodyProps(props, ref),
        className: cx("chakra-popover__body", props.className),
        __css: styles.body
      }
    );
  }
);
PopoverBody.displayName = "PopoverBody";

// node_modules/@chakra-ui/popover/dist/chunk-JKY3EM6P.mjs
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var PopoverCloseButton = forwardRef(
  function PopoverCloseButton2(props, ref) {
    const { onClose } = usePopoverContext();
    const styles = usePopoverStyles();
    return (0, import_jsx_runtime76.jsx)(
      CloseButton,
      {
        size: "sm",
        onClick: onClose,
        className: cx("chakra-popover__close-btn", props.className),
        __css: styles.closeButton,
        ref,
        ...props
      }
    );
  }
);
PopoverCloseButton.displayName = "PopoverCloseButton";

// node_modules/@chakra-ui/popover/dist/chunk-F4GPNG57.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
function mergeVariants(variants6) {
  if (!variants6)
    return;
  return {
    enter: {
      ...variants6.enter,
      visibility: "visible"
    },
    exit: {
      ...variants6.exit,
      transitionEnd: {
        visibility: "hidden"
      }
    }
  };
}
var scaleFade = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
};
var MotionSection2 = chakra(motion.section);
var PopoverTransition = forwardRef(function PopoverTransition2(props, ref) {
  const { variants: variants6 = scaleFade, ...rest } = props;
  const { isOpen } = usePopoverContext();
  return (0, import_jsx_runtime77.jsx)(
    MotionSection2,
    {
      ref,
      variants: mergeVariants(variants6),
      initial: false,
      animate: isOpen ? "enter" : "exit",
      ...rest
    }
  );
});
PopoverTransition.displayName = "PopoverTransition";

// node_modules/@chakra-ui/popover/dist/chunk-24I2HV4N.mjs
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var PopoverContent = forwardRef(
  function PopoverContent2(props, ref) {
    const { rootProps, motionProps, ...contentProps } = props;
    const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } = usePopoverContext();
    const styles = usePopoverStyles();
    const contentStyles = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...styles.content
    };
    return (0, import_jsx_runtime78.jsx)(
      chakra.div,
      {
        ...getPopoverPositionerProps(rootProps),
        __css: styles.popper,
        className: "chakra-popover__popper",
        children: (0, import_jsx_runtime78.jsx)(
          PopoverTransition,
          {
            ...motionProps,
            ...getPopoverProps(contentProps, ref),
            onAnimationComplete: callAll(
              onAnimationComplete,
              contentProps.onAnimationComplete
            ),
            className: cx("chakra-popover__content", props.className),
            __css: contentStyles
          }
        )
      }
    );
  }
);
PopoverContent.displayName = "PopoverContent";

// node_modules/@chakra-ui/popover/dist/chunk-R6BA5JLS.mjs
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
function PopoverFooter(props) {
  const styles = usePopoverStyles();
  return (0, import_jsx_runtime79.jsx)(
    chakra.footer,
    {
      ...props,
      className: cx("chakra-popover__footer", props.className),
      __css: styles.footer
    }
  );
}
PopoverFooter.displayName = "PopoverFooter";

// node_modules/@chakra-ui/progress/dist/chunk-QQ2FLD7A.mjs
var CircularProgressLabel = chakra("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }
});
CircularProgressLabel.displayName = "CircularProgressLabel";

// node_modules/@chakra-ui/progress/dist/chunk-7CG3L4JY.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var Circle2 = (props) => (0, import_jsx_runtime80.jsx)(chakra.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...props });
Circle2.displayName = "Circle";

// node_modules/@chakra-ui/progress/dist/chunk-TXZFUZNG.mjs
function valueToPercent2(value, min, max) {
  return (value - min) * 100 / (max - min);
}
var spin2 = keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
var rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var progress = keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
var stripe = keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function getProgressProps(options) {
  const {
    value = 0,
    min,
    max,
    valueText,
    getValueText: getValueText2,
    isIndeterminate,
    role = "progressbar"
  } = options;
  const percent = valueToPercent2(value, min, max);
  const getAriaValueText = () => {
    if (value == null)
      return void 0;
    return typeof getValueText2 === "function" ? getValueText2(value, percent) : valueText;
  };
  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : void 0,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuetext": getAriaValueText(),
      role
    },
    percent,
    value
  };
}

// node_modules/@chakra-ui/progress/dist/chunk-EMKK5VRD.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var Shape = (props) => {
  const { size, isIndeterminate, ...rest } = props;
  return (0, import_jsx_runtime81.jsx)(
    chakra.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: size,
        height: size,
        animation: isIndeterminate ? `${rotate} 2s linear infinite` : void 0
      },
      ...rest
    }
  );
};
Shape.displayName = "Shape";

// node_modules/@chakra-ui/progress/dist/chunk-Q6Q7I7E5.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var CircularProgress = forwardRef(
  (props, ref) => {
    var _a2;
    const {
      size = "48px",
      max = 100,
      min = 0,
      valueText,
      getValueText: getValueText2,
      value,
      capIsRound,
      children,
      thickness = "10px",
      color: color2 = "#0078d4",
      trackColor = "#edebe9",
      isIndeterminate,
      ...rest
    } = props;
    const progress2 = getProgressProps({
      min,
      max,
      value,
      valueText,
      getValueText: getValueText2,
      isIndeterminate
    });
    const determinant = isIndeterminate ? void 0 : ((_a2 = progress2.percent) != null ? _a2 : 0) * 2.64;
    const strokeDasharray = determinant == null ? void 0 : `${determinant} ${264 - determinant}`;
    const indicatorProps = isIndeterminate ? {
      css: { animation: `${spin2} 1.5s linear infinite` }
    } : {
      strokeDashoffset: 66,
      strokeDasharray,
      transitionProperty: "stroke-dasharray, stroke",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    };
    const rootStyles2 = {
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: size
    };
    return (0, import_jsx_runtime82.jsxs)(
      chakra.div,
      {
        ref,
        className: "chakra-progress",
        ...progress2.bind,
        ...rest,
        __css: rootStyles2,
        children: [
          (0, import_jsx_runtime82.jsxs)(Shape, { size, isIndeterminate, children: [
            (0, import_jsx_runtime82.jsx)(
              Circle2,
              {
                stroke: trackColor,
                strokeWidth: thickness,
                className: "chakra-progress__track"
              }
            ),
            (0, import_jsx_runtime82.jsx)(
              Circle2,
              {
                stroke: color2,
                strokeWidth: thickness,
                className: "chakra-progress__indicator",
                strokeLinecap: capIsRound ? "round" : void 0,
                opacity: progress2.value === 0 && !isIndeterminate ? 0 : void 0,
                ...indicatorProps
              }
            )
          ] }),
          children
        ]
      }
    );
  }
);
CircularProgress.displayName = "CircularProgress";

// node_modules/@chakra-ui/progress/dist/chunk-BZDCPGYF.mjs
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var [ProgressStylesProvider, useProgressStyles] = createContext({
  name: `ProgressStylesContext`,
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
});
var ProgressFilledTrack = forwardRef(
  (props, ref) => {
    const { min, max, value, isIndeterminate, role, ...rest } = props;
    const progress2 = getProgressProps({
      value,
      min,
      max,
      isIndeterminate,
      role
    });
    const styles = useProgressStyles();
    const trackStyles = {
      height: "100%",
      ...styles.filledTrack
    };
    return (0, import_jsx_runtime83.jsx)(
      chakra.div,
      {
        ref,
        style: { width: `${progress2.percent}%`, ...rest.style },
        ...progress2.bind,
        ...rest,
        __css: trackStyles
      }
    );
  }
);
var Progress = forwardRef((props, ref) => {
  var _a2;
  const {
    value,
    min = 0,
    max = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    title,
    role,
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius != null ? propBorderRadius : (_a2 = styles.track) == null ? void 0 : _a2.borderRadius;
  const stripeAnimation = { animation: `${stripe} 1s linear infinite` };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css3 = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress} 1s ease infinite normal none running`
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles.track
  };
  return (0, import_jsx_runtime83.jsx)(
    chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: (0, import_jsx_runtime83.jsxs)(ProgressStylesProvider, { value: styles, children: [
        (0, import_jsx_runtime83.jsx)(
          ProgressFilledTrack,
          {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-valuetext": ariaValueText,
            min,
            max,
            value,
            isIndeterminate,
            css: css3,
            borderRadius,
            title,
            role
          }
        ),
        children
      ] })
    }
  );
});
Progress.displayName = "Progress";

// node_modules/@chakra-ui/progress/dist/chunk-TDPOTVYR.mjs
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var ProgressLabel = (props) => {
  const styles = useProgressStyles();
  const labelStyles = {
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles.label
  };
  return (0, import_jsx_runtime84.jsx)(chakra.div, { ...props, __css: labelStyles });
};
ProgressLabel.displayName = "ProgressLabel";

// node_modules/@chakra-ui/radio/dist/chunk-Q56JAA3U.mjs
var import_react83 = __toESM(require_react(), 1);
function isInputEvent2(value) {
  return value && isObject(value) && isObject(value.target);
}
function useRadioGroup(props = {}) {
  const {
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
    name: nameProp,
    isDisabled,
    isFocusable,
    isNative,
    ...htmlProps
  } = props;
  const [valueState, setValue] = (0, import_react83.useState)(defaultValue || "");
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const ref = (0, import_react83.useRef)(null);
  const focus2 = (0, import_react83.useCallback)(() => {
    const rootNode = ref.current;
    if (!rootNode)
      return;
    let query = `input:not(:disabled):checked`;
    const firstEnabledAndCheckedInput = rootNode.querySelector(
      query
    );
    if (firstEnabledAndCheckedInput) {
      firstEnabledAndCheckedInput.focus();
      return;
    }
    query = `input:not(:disabled)`;
    const firstEnabledInput = rootNode.querySelector(query);
    firstEnabledInput == null ? void 0 : firstEnabledInput.focus();
  }, []);
  const uuid = (0, import_react83.useId)();
  const fallbackName = `radio-${uuid}`;
  const name = nameProp || fallbackName;
  const onChange = (0, import_react83.useCallback)(
    (eventOrValue) => {
      const nextValue = isInputEvent2(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp == null ? void 0 : onChangeProp(String(nextValue));
    },
    [onChangeProp, isControlled]
  );
  const getRootProps = (0, import_react83.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: mergeRefs(forwardedRef, ref),
      role: "radiogroup"
    }),
    []
  );
  const getRadioProps = (0, import_react83.useCallback)(
    (props2 = {}, ref2 = null) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        ref: ref2,
        name,
        [checkedKey]: value != null ? props2.value === value : void 0,
        onChange(event) {
          onChange(event);
        },
        "data-radiogroup": true
      };
    },
    [isNative, name, onChange, value]
  );
  return {
    getRootProps,
    getRadioProps,
    name,
    ref,
    focus: focus2,
    setValue,
    value,
    onChange,
    isDisabled,
    isFocusable,
    htmlProps
  };
}

// node_modules/@chakra-ui/radio/dist/chunk-FESYGSQT.mjs
var import_react84 = __toESM(require_react(), 1);
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var [RadioGroupProvider, useRadioGroupContext] = createContext({
  name: "RadioGroupContext",
  strict: false
});
var RadioGroup = forwardRef((props, ref) => {
  const {
    colorScheme,
    size,
    variant,
    children,
    className,
    isDisabled,
    isFocusable,
    ...rest
  } = props;
  const { value, onChange, getRootProps, name, htmlProps } = useRadioGroup(rest);
  const group = (0, import_react84.useMemo)(
    () => ({
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable
    }),
    [
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable
    ]
  );
  return (0, import_jsx_runtime85.jsx)(RadioGroupProvider, { value: group, children: (0, import_jsx_runtime85.jsx)(
    chakra.div,
    {
      ...getRootProps(htmlProps, ref),
      className: cx("chakra-radio-group", className),
      children
    }
  ) });
});
RadioGroup.displayName = "RadioGroup";

// node_modules/@chakra-ui/radio/dist/chunk-2WQJ2JCV.mjs
var import_react85 = __toESM(require_react(), 1);
var visuallyHiddenStyle2 = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
function useRadio(props = {}) {
  const {
    defaultChecked,
    isChecked: isCheckedProp,
    isFocusable,
    isDisabled: isDisabledProp,
    isReadOnly: isReadOnlyProp,
    isRequired: isRequiredProp,
    onChange,
    isInvalid: isInvalidProp,
    name,
    value,
    id: idProp,
    "data-radiogroup": dataRadioGroup,
    "aria-describedby": ariaDescribedBy,
    ...htmlProps
  } = props;
  const uuid = `radio-${(0, import_react85.useId)()}`;
  const formControl = useFormControlContext();
  const group = useRadioGroupContext();
  const isWithinRadioGroup = !!group || !!dataRadioGroup;
  const isWithinFormControl = !!formControl;
  let id = isWithinFormControl && !isWithinRadioGroup ? formControl.id : uuid;
  id = idProp != null ? idProp : id;
  const isDisabled = isDisabledProp != null ? isDisabledProp : formControl == null ? void 0 : formControl.isDisabled;
  const isReadOnly = isReadOnlyProp != null ? isReadOnlyProp : formControl == null ? void 0 : formControl.isReadOnly;
  const isRequired = isRequiredProp != null ? isRequiredProp : formControl == null ? void 0 : formControl.isRequired;
  const isInvalid = isInvalidProp != null ? isInvalidProp : formControl == null ? void 0 : formControl.isInvalid;
  const [isFocusVisible2, setIsFocusVisible] = (0, import_react85.useState)(false);
  const [isFocused, setFocused] = (0, import_react85.useState)(false);
  const [isHovered, setHovering] = (0, import_react85.useState)(false);
  const [isActive, setActive] = (0, import_react85.useState)(false);
  const [isCheckedState, setChecked] = (0, import_react85.useState)(Boolean(defaultChecked));
  const isControlled = typeof isCheckedProp !== "undefined";
  const isChecked = isControlled ? isCheckedProp : isCheckedState;
  (0, import_react85.useEffect)(() => {
    return trackFocusVisible(setIsFocusVisible);
  }, []);
  const handleChange = (0, import_react85.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        setChecked(event.target.checked);
      }
      onChange == null ? void 0 : onChange(event);
    },
    [isControlled, isDisabled, isReadOnly, onChange]
  );
  const onKeyDown = (0, import_react85.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react85.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  const getRadioProps = (0, import_react85.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
      "data-readonly": dataAttr(isReadOnly),
      "aria-hidden": true,
      onMouseDown: callAllHandlers(props2.onMouseDown, () => setActive(true)),
      onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
      onMouseEnter: callAllHandlers(
        props2.onMouseEnter,
        () => setHovering(true)
      ),
      onMouseLeave: callAllHandlers(
        props2.onMouseLeave,
        () => setHovering(false)
      )
    }),
    [
      isActive,
      isHovered,
      isDisabled,
      isInvalid,
      isChecked,
      isFocused,
      isReadOnly,
      isFocusVisible2
    ]
  );
  const { onFocus: onFocus3, onBlur: onBlur3 } = formControl != null ? formControl : {};
  const getInputProps = (0, import_react85.useCallback)(
    (props2 = {}, ref = null) => {
      const trulyDisabled = isDisabled && !isFocusable;
      return {
        ...props2,
        id,
        ref,
        type: "radio",
        name,
        value,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          onBlur3,
          props2.onBlur,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          onFocus3,
          props2.onFocus,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        required: isRequired,
        "aria-invalid": ariaAttr(isInvalid),
        "aria-disabled": ariaAttr(trulyDisabled),
        "aria-required": ariaAttr(isRequired),
        "data-readonly": dataAttr(isReadOnly),
        "aria-describedby": ariaDescribedBy,
        style: visuallyHiddenStyle2
      };
    },
    [
      isDisabled,
      isFocusable,
      id,
      name,
      value,
      handleChange,
      onBlur3,
      onFocus3,
      onKeyDown,
      onKeyUp,
      isChecked,
      isReadOnly,
      isRequired,
      isInvalid,
      ariaDescribedBy
    ]
  );
  const getLabelProps = (props2 = {}, ref = null) => ({
    ...props2,
    ref,
    onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent2),
    "data-disabled": dataAttr(isDisabled),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const getRootProps = (props2, ref = null) => ({
    ...props2,
    ref,
    "data-disabled": dataAttr(isDisabled),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const state = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isDisabled,
    isReadOnly,
    isRequired
  };
  return {
    state,
    /**
     * @deprecated - use `getRadioProps` instead
     */
    getCheckboxProps: getRadioProps,
    getRadioProps,
    getInputProps,
    getLabelProps,
    getRootProps,
    htmlProps
  };
}
function stopEvent2(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/radio/dist/chunk-RDF2AYID.mjs
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
function split(object2, keys) {
  const picked = {};
  const omitted2 = {};
  for (const [key, value] of Object.entries(object2)) {
    if (keys.includes(key))
      picked[key] = value;
    else
      omitted2[key] = value;
  }
  return [picked, omitted2];
}
var Radio = forwardRef((props, ref) => {
  var _a2;
  const group = useRadioGroupContext();
  const { onChange: onChangeProp, value: valueProp } = props;
  const styles = useMultiStyleConfig("Radio", { ...group, ...props });
  const ownProps = omitThemingProps(props);
  const {
    spacing = "0.5rem",
    children,
    isDisabled = group == null ? void 0 : group.isDisabled,
    isFocusable = group == null ? void 0 : group.isFocusable,
    inputProps: htmlInputProps,
    ...rest
  } = ownProps;
  let isChecked = props.isChecked;
  if ((group == null ? void 0 : group.value) != null && valueProp != null) {
    isChecked = group.value === valueProp;
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && valueProp != null) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const name = (_a2 = props == null ? void 0 : props.name) != null ? _a2 : group == null ? void 0 : group.name;
  const {
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps,
    htmlProps
  } = useRadio({
    ...rest,
    isChecked,
    isFocusable,
    isDisabled,
    onChange,
    name
  });
  const [layoutProps, otherProps] = split(htmlProps, layoutPropNames);
  const checkboxProps = getCheckboxProps(otherProps);
  const inputProps = getInputProps(htmlInputProps, ref);
  const labelProps = getLabelProps();
  const rootProps = Object.assign({}, layoutProps, getRootProps());
  const rootStyles2 = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...styles.container
  };
  const checkboxStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...styles.control
  };
  const labelStyles = {
    userSelect: "none",
    marginStart: spacing,
    ...styles.label
  };
  return (0, import_jsx_runtime86.jsxs)(chakra.label, { className: "chakra-radio", ...rootProps, __css: rootStyles2, children: [
    (0, import_jsx_runtime86.jsx)("input", { className: "chakra-radio__input", ...inputProps }),
    (0, import_jsx_runtime86.jsx)(
      chakra.span,
      {
        className: "chakra-radio__control",
        ...checkboxProps,
        __css: checkboxStyles
      }
    ),
    children && (0, import_jsx_runtime86.jsx)(
      chakra.span,
      {
        className: "chakra-radio__label",
        ...labelProps,
        __css: labelStyles,
        children
      }
    )
  ] });
});
Radio.displayName = "Radio";

// node_modules/@chakra-ui/select/dist/chunk-C6OUXMED.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var SelectField = forwardRef(
  function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return (0, import_jsx_runtime87.jsxs)(
      chakra.select,
      {
        ...rest,
        ref,
        className: cx("chakra-select", className),
        children: [
          placeholder && (0, import_jsx_runtime87.jsx)("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";

// node_modules/@chakra-ui/select/dist/chunk-3RSXBRAN.mjs
var import_react86 = __toESM(require_react(), 1);
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
function split2(object2, keys) {
  const picked = {};
  const omitted2 = {};
  for (const [key, value] of Object.entries(object2)) {
    if (keys.includes(key))
      picked[key] = value;
    else
      omitted2[key] = value;
  }
  return [picked, omitted2];
}
var Select = forwardRef((props, ref) => {
  var _a2;
  const styles = useMultiStyleConfig("Select", props);
  const {
    rootProps,
    placeholder,
    icon,
    color: color2,
    height,
    h,
    minH,
    minHeight,
    iconColor,
    iconSize,
    ...rest
  } = omitThemingProps(props);
  const [layoutProps, otherProps] = split2(rest, layoutPropNames);
  const ownProps = useFormControl(otherProps);
  const rootStyles2 = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: color2
  };
  const fieldStyles = {
    paddingEnd: "2rem",
    ...styles.field,
    _focus: {
      zIndex: "unset",
      ...(_a2 = styles.field) == null ? void 0 : _a2["_focus"]
    }
  };
  return (0, import_jsx_runtime88.jsxs)(
    chakra.div,
    {
      className: "chakra-select__wrapper",
      __css: rootStyles2,
      ...layoutProps,
      ...rootProps,
      children: [
        (0, import_jsx_runtime88.jsx)(
          SelectField,
          {
            ref,
            height: h != null ? h : height,
            minH: minH != null ? minH : minHeight,
            placeholder,
            ...ownProps,
            __css: fieldStyles,
            children: props.children
          }
        ),
        (0, import_jsx_runtime88.jsx)(
          SelectIcon,
          {
            "data-disabled": dataAttr(ownProps.disabled),
            ...(iconColor || color2) && { color: iconColor || color2 },
            __css: styles.icon,
            ...iconSize && { fontSize: iconSize },
            children: icon
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
var DefaultIcon = (props) => (0, import_jsx_runtime88.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime88.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) });
var IconWrapper = chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
var SelectIcon = (props) => {
  const { children = (0, import_jsx_runtime88.jsx)(DefaultIcon, {}), ...rest } = props;
  const clone = (0, import_react86.cloneElement)(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    // force icon to adhere to `IconWrapper` styles
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return (0, import_jsx_runtime88.jsx)(IconWrapper, { ...rest, className: "chakra-select__icon-wrapper", children: (0, import_react86.isValidElement)(children) ? clone : null });
};
SelectIcon.displayName = "SelectIcon";

// node_modules/@chakra-ui/skeleton/dist/chunk-AASO4CLC.mjs
var import_react87 = __toESM(require_react(), 1);
function useIsFirstRender() {
  const isFirstRender = (0, import_react87.useRef)(true);
  (0, import_react87.useEffect)(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

// node_modules/@chakra-ui/react-use-previous/dist/index.mjs
var import_react88 = __toESM(require_react(), 1);
function usePrevious2(value) {
  const ref = (0, import_react88.useRef)();
  (0, import_react88.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@chakra-ui/skeleton/dist/chunk-GOJLRND4.mjs
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var StyledSkeleton = chakra("div", {
  baseStyle: {
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden"
    }
  }
});
var $startColor = cssVar("skeleton-start-color");
var $endColor = cssVar("skeleton-end-color");
var fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
var bgFade = keyframes({
  from: {
    borderColor: $startColor.reference,
    background: $startColor.reference
  },
  to: {
    borderColor: $endColor.reference,
    background: $endColor.reference
  }
});
var Skeleton = forwardRef((props, ref) => {
  const skeletonProps = {
    ...props,
    fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
    speed: typeof props.speed === "number" ? props.speed : 0.8
  };
  const styles = useStyleConfig("Skeleton", skeletonProps);
  const isFirstRender = useIsFirstRender();
  const {
    startColor = "",
    endColor = "",
    isLoaded,
    fadeDuration,
    speed,
    className,
    fitContent,
    ...rest
  } = omitThemingProps(skeletonProps);
  const [startColorVar, endColorVar] = useToken("colors", [
    startColor,
    endColor
  ]);
  const wasPreviouslyLoaded = usePrevious2(isLoaded);
  const _className = cx("chakra-skeleton", className);
  const cssVarStyles = {
    ...startColorVar && { [$startColor.variable]: startColorVar },
    ...endColorVar && { [$endColor.variable]: endColorVar }
  };
  if (isLoaded) {
    const animation = isFirstRender || wasPreviouslyLoaded ? "none" : `${fade} ${fadeDuration}s`;
    return (0, import_jsx_runtime89.jsx)(
      chakra.div,
      {
        ref,
        className: _className,
        __css: { animation },
        ...rest
      }
    );
  }
  return (0, import_jsx_runtime89.jsx)(
    StyledSkeleton,
    {
      ref,
      className: _className,
      ...rest,
      __css: {
        width: fitContent ? "fit-content" : void 0,
        ...styles,
        ...cssVarStyles,
        _dark: { ...styles["_dark"], ...cssVarStyles },
        animation: `${speed}s linear infinite alternate ${bgFade}`
      }
    }
  );
});
Skeleton.displayName = "Skeleton";

// node_modules/@chakra-ui/skeleton/dist/chunk-W7A7QDAK.mjs
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var SkeletonCircle = ({
  size = "2rem",
  ...rest
}) => (0, import_jsx_runtime90.jsx)(Skeleton, { borderRadius: "full", boxSize: size, ...rest });
SkeletonCircle.displayName = "SkeletonCircle";

// node_modules/@chakra-ui/skeleton/dist/chunk-IYS4KVU2.mjs
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
function range(count) {
  return Array(count).fill(1).map((_, index) => index + 1);
}
var defaultNoOfLines = 3;
var SkeletonText = (props) => {
  const {
    noOfLines = defaultNoOfLines,
    spacing = "0.5rem",
    skeletonHeight = "0.5rem",
    className,
    startColor,
    endColor,
    isLoaded,
    fadeDuration,
    speed,
    variant,
    size,
    colorScheme,
    children,
    ...rest
  } = props;
  const noOfLinesValue = useBreakpointValue(
    typeof noOfLines === "number" ? [noOfLines] : noOfLines
  ) || defaultNoOfLines;
  const numbers = range(noOfLinesValue);
  const getWidth = (index) => {
    if (noOfLinesValue > 1) {
      return index === numbers.length ? "80%" : "100%";
    }
    return "100%";
  };
  const _className = cx("chakra-skeleton__group", className);
  return (0, import_jsx_runtime91.jsx)(chakra.div, { className: _className, ...rest, children: numbers.map((number, index) => {
    if (isLoaded && index > 0) {
      return null;
    }
    const sizeProps = isLoaded ? null : {
      mb: number === numbers.length ? "0" : spacing,
      width: getWidth(number),
      height: skeletonHeight
    };
    return (0, import_jsx_runtime91.jsx)(
      Skeleton,
      {
        startColor,
        endColor,
        isLoaded,
        fadeDuration,
        speed,
        variant,
        size,
        colorScheme,
        ...sizeProps,
        // allows animating the children
        children: index === 0 ? children : void 0
      },
      numbers.length.toString() + number
    );
  }) });
};
SkeletonText.displayName = "SkeletonText";

// node_modules/@chakra-ui/skip-nav/dist/chunk-IZODFAGU.mjs
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var fallbackId = "chakra-skip-nav";
function getStyles2(styles) {
  return {
    userSelect: "none",
    border: "0",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    outline: "0",
    overflow: "hidden",
    position: "absolute",
    clip: "rect(0 0 0 0)",
    ...styles,
    _focus: {
      clip: "auto",
      width: "auto",
      height: "auto",
      ...styles["_focus"]
    }
  };
}
var SkipNavLink = forwardRef(
  function SkipNavLink2(props, ref) {
    const styles = useStyleConfig("SkipLink", props);
    const { id = fallbackId, ...rest } = omitThemingProps(props);
    return (0, import_jsx_runtime92.jsx)(chakra.a, { ...rest, ref, href: `#${id}`, __css: getStyles2(styles) });
  }
);
SkipNavLink.displayName = "SkipNavLink";
var SkipNavContent = forwardRef(
  function SkipNavContent2(props, ref) {
    const { id = fallbackId, ...rest } = props;
    return (0, import_jsx_runtime92.jsx)(
      chakra.div,
      {
        ref,
        id,
        tabIndex: -1,
        style: { outline: 0 },
        ...rest
      }
    );
  }
);
SkipNavContent.displayName = "SkipNavContent";

// node_modules/@chakra-ui/slider/dist/chunk-DX64QB22.mjs
var dataAttr2 = (condition) => condition ? "" : void 0;
var ariaAttr2 = (condition) => condition ? true : void 0;
var cx2 = (...classNames) => classNames.filter(Boolean).join(" ");
function callAllHandlers3(...fns) {
  return function func2(event) {
    fns.some((fn) => {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}

// node_modules/@chakra-ui/slider/dist/chunk-E23N4XEN.mjs
function getIds(id) {
  return {
    root: `slider-root-${id}`,
    getThumb: (i) => `slider-thumb-${id}-${i}`,
    getInput: (i) => `slider-input-${id}-${i}`,
    track: `slider-track-${id}`,
    innerTrack: `slider-filled-track-${id}`,
    getMarker: (i) => `slider-marker-${id}-${i}`,
    output: `slider-output-${id}`
  };
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
var zeroSize = { width: 0, height: 0 };
var normalize = (a) => a || zeroSize;
function getStyles3(options) {
  const { orientation, thumbPercents, thumbRects, isReversed } = options;
  const getThumbStyle = (i) => {
    var _a2;
    const rect = (_a2 = thumbRects[i]) != null ? _a2 : zeroSize;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...orient({
        orientation,
        vertical: {
          bottom: `calc(${thumbPercents[i]}% - ${rect.height / 2}px)`
        },
        horizontal: {
          left: `calc(${thumbPercents[i]}% - ${rect.width / 2}px)`
        }
      })
    };
  };
  const size = orientation === "vertical" ? thumbRects.reduce(
    (a, b) => normalize(a).height > normalize(b).height ? a : b,
    zeroSize
  ) : thumbRects.reduce(
    (a, b) => normalize(a).width > normalize(b).width ? a : b,
    zeroSize
  );
  const rootStyle = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...orient({
      orientation,
      vertical: size ? {
        paddingLeft: size.width / 2,
        paddingRight: size.width / 2
      } : {},
      horizontal: size ? {
        paddingTop: size.height / 2,
        paddingBottom: size.height / 2
      } : {}
    })
  };
  const trackStyle = {
    position: "absolute",
    ...orient({
      orientation,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        height: "100%"
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%"
      }
    })
  };
  const isSingleThumb = thumbPercents.length === 1;
  const fallback = [0, isReversed ? 100 - thumbPercents[0] : thumbPercents[0]];
  const range2 = isSingleThumb ? fallback : thumbPercents;
  let start = range2[0];
  if (!isSingleThumb && isReversed) {
    start = 100 - start;
  }
  const percent = Math.abs(range2[range2.length - 1] - range2[0]);
  const innerTrackStyle = {
    ...trackStyle,
    ...orient({
      orientation,
      vertical: isReversed ? { height: `${percent}%`, top: `${start}%` } : { height: `${percent}%`, bottom: `${start}%` },
      horizontal: isReversed ? { width: `${percent}%`, right: `${start}%` } : { width: `${percent}%`, left: `${start}%` }
    })
  };
  return { trackStyle, innerTrackStyle, rootStyle, getThumbStyle };
}
function getIsReversed(options) {
  const { isReversed, direction, orientation } = options;
  if (direction === "ltr" || orientation === "vertical") {
    return isReversed;
  }
  return !isReversed;
}

// node_modules/@chakra-ui/event-utils/dist/chunk-6K7SS4J6.mjs
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return () => {
    target.removeEventListener(eventName, handler, options);
  };
}

// node_modules/@chakra-ui/event-utils/dist/chunk-B7KYFEHM.mjs
function isMouseEvent(event) {
  const win = getEventWindow(event);
  if (typeof win.PointerEvent !== "undefined" && event instanceof win.PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof win.MouseEvent;
}
function isTouchEvent(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}
function isMultiTouchEvent(event) {
  return isTouchEvent(event) && event.touches.length > 1;
}
function getEventWindow(event) {
  var _a2;
  return (_a2 = event.view) != null ? _a2 : window;
}

// node_modules/@chakra-ui/event-utils/dist/chunk-6FBKF3LK.mjs
function pointFromTouch(e, type = "page") {
  const point = e.touches[0] || e.changedTouches[0];
  return { x: point[`${type}X`], y: point[`${type}Y`] };
}
function pointFromMouse(point, type = "page") {
  return {
    x: point[`${type}X`],
    y: point[`${type}Y`]
  };
}
function getEventPoint(event, type = "page") {
  return isTouchEvent(event) ? pointFromTouch(event, type) : pointFromMouse(event, type);
}

// node_modules/@chakra-ui/event-utils/dist/chunk-KDLSVIYE.mjs
function filter2(cb) {
  return (event) => {
    const isMouse = isMouseEvent(event);
    if (!isMouse || isMouse && event.button === 0) {
      cb(event);
    }
  };
}
function wrap2(cb, filterPrimary = false) {
  function listener(event) {
    cb(event, { point: getEventPoint(event) });
  }
  const fn = filterPrimary ? filter2(listener) : listener;
  return fn;
}
function addPointerEvent(target, type, cb, options) {
  return addDomEvent(target, type, wrap2(cb, type === "pointerdown"), options);
}

// node_modules/@chakra-ui/react-use-pan-event/dist/chunk-Z2LY7B4S.mjs
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var PanEvent = class {
  constructor(event, handlers2, threshold) {
    __publicField2(this, "history", []);
    __publicField2(this, "startEvent", null);
    __publicField2(this, "lastEvent", null);
    __publicField2(this, "lastEventInfo", null);
    __publicField2(this, "handlers", {});
    __publicField2(this, "removeListeners", () => {
    });
    __publicField2(this, "threshold", 3);
    __publicField2(this, "win");
    __publicField2(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const info2 = getPanInfo(this.lastEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { timestamp: timestamp2 } = getFrameData();
      this.history.push({ ...info2.point, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart == null ? void 0 : onStart(this.lastEvent, info2);
        this.startEvent = this.lastEvent;
      }
      onMove == null ? void 0 : onMove(this.lastEvent, info2);
    });
    __publicField2(this, "onPointerMove", (event2, info2) => {
      this.lastEvent = event2;
      this.lastEventInfo = info2;
      es_default.update(this.updatePoint, true);
    });
    __publicField2(this, "onPointerUp", (event2, info2) => {
      const panInfo = getPanInfo(info2, this.history);
      const { onEnd, onSessionEnd } = this.handlers;
      onSessionEnd == null ? void 0 : onSessionEnd(event2, panInfo);
      this.end();
      if (!onEnd || !this.startEvent)
        return;
      onEnd == null ? void 0 : onEnd(event2, panInfo);
    });
    var _a2;
    this.win = (_a2 = event.view) != null ? _a2 : window;
    if (isMultiTouchEvent(event))
      return;
    this.handlers = handlers2;
    if (threshold) {
      this.threshold = threshold;
    }
    event.stopPropagation();
    event.preventDefault();
    const info = { point: getEventPoint(event) };
    const { timestamp } = getFrameData();
    this.history = [{ ...info.point, timestamp }];
    const { onSessionStart } = handlers2;
    onSessionStart == null ? void 0 : onSessionStart(event, getPanInfo(info, this.history));
    this.removeListeners = pipe(
      addPointerEvent(this.win, "pointermove", this.onPointerMove),
      addPointerEvent(this.win, "pointerup", this.onPointerUp),
      addPointerEvent(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(handlers2) {
    this.handlers = handlers2;
  }
  end() {
    var _a2;
    (_a2 = this.removeListeners) == null ? void 0 : _a2.call(this);
    cancelSync.update(this.updatePoint);
  }
};
function subtract(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(info, history) {
  return {
    point: info.point,
    delta: subtract(info.point, history[history.length - 1]),
    offset: subtract(info.point, history[0]),
    velocity: getVelocity(history, 0.1)
  };
}
var toMilliseconds = (v) => v * 1e3;
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = history[history.length - 1];
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > toMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function distance1D(a, b) {
  return Math.abs(a - b);
}
function isPoint(point) {
  return "x" in point && "y" in point;
}
function distance(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return distance1D(a, b);
  }
  if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }
  return 0;
}

// node_modules/@chakra-ui/react-use-latest-ref/dist/index.mjs
var import_react89 = __toESM(require_react(), 1);
function useLatestRef2(value) {
  const ref = (0, import_react89.useRef)(null);
  ref.current = value;
  return ref;
}

// node_modules/@chakra-ui/react-use-pan-event/dist/chunk-AQIKOOGA.mjs
var import_react90 = __toESM(require_react(), 1);
function usePanEvent(ref, options) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = options;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = (0, import_react90.useRef)(null);
  const handlersRef = useLatestRef2({
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  });
  (0, import_react90.useEffect)(() => {
    var _a2;
    (_a2 = panSession.current) == null ? void 0 : _a2.updateHandlers(handlersRef.current);
  });
  (0, import_react90.useEffect)(() => {
    const node2 = ref.current;
    if (!node2 || !hasPanEvents)
      return;
    function onPointerDown(event) {
      panSession.current = new PanEvent(event, handlersRef.current, threshold);
    }
    return addPointerEvent(node2, "pointerdown", onPointerDown);
  }, [ref, hasPanEvents, handlersRef, threshold]);
  (0, import_react90.useEffect)(() => {
    return () => {
      var _a2;
      (_a2 = panSession.current) == null ? void 0 : _a2.end();
      panSession.current = null;
    };
  }, []);
}

// node_modules/@chakra-ui/slider/dist/chunk-K3MZ7A5P.mjs
var import_react92 = __toESM(require_react(), 1);

// node_modules/@zag-js/element-size/dist/track-size.mjs
function trackElementSize(element, callback) {
  if (!element) {
    callback(void 0);
    return;
  }
  callback({ width: element.offsetWidth, height: element.offsetHeight });
  const win = element.ownerDocument.defaultView ?? window;
  const observer = new win.ResizeObserver((entries) => {
    if (!Array.isArray(entries) || !entries.length)
      return;
    const [entry] = entries;
    let width;
    let height;
    if ("borderBoxSize" in entry) {
      const borderSizeEntry = entry["borderBoxSize"];
      const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
      width = borderSize["inlineSize"];
      height = borderSize["blockSize"];
    } else {
      width = element.offsetWidth;
      height = element.offsetHeight;
    }
    callback({ width, height });
  });
  observer.observe(element, { box: "border-box" });
  return () => observer.unobserve(element);
}

// node_modules/@chakra-ui/react-use-size/dist/index.mjs
var import_react91 = __toESM(require_react(), 1);
var useSafeLayoutEffect3 = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react91.useLayoutEffect : import_react91.useEffect;
function trackMutation(el, cb) {
  var _a2, _b;
  if (!el || !el.parentElement)
    return;
  const win = (_b = (_a2 = el.ownerDocument) == null ? void 0 : _a2.defaultView) != null ? _b : window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
function useSizes({
  getNodes,
  observeMutation = true
}) {
  const [sizes, setSizes] = (0, import_react91.useState)([]);
  const [count, setCount] = (0, import_react91.useState)(0);
  useSafeLayoutEffect3(() => {
    const elements = getNodes();
    const cleanups = elements.map(
      (element, index) => trackElementSize(element, (size) => {
        setSizes((sizes2) => {
          return [
            ...sizes2.slice(0, index),
            size,
            ...sizes2.slice(index + 1)
          ];
        });
      })
    );
    if (observeMutation) {
      const firstNode = elements[0];
      cleanups.push(
        trackMutation(firstNode, () => {
          setCount((count2) => count2 + 1);
        })
      );
    }
    return () => {
      cleanups.forEach((cleanup) => {
        cleanup == null ? void 0 : cleanup();
      });
    };
  }, [count]);
  return sizes;
}
function isRef(ref) {
  return typeof ref === "object" && ref !== null && "current" in ref;
}
function useSize(subject) {
  const [size] = useSizes({
    observeMutation: false,
    getNodes() {
      const node2 = isRef(subject) ? subject.current : subject;
      return [node2];
    }
  });
  return size;
}

// node_modules/@chakra-ui/slider/dist/chunk-K3MZ7A5P.mjs
function useRangeSlider(props) {
  const {
    min = 0,
    max = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    minStepsBetweenThumbs = 0,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction,
    orientation
  });
  const [valueState, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : [25, 75],
    onChange
  });
  if (!Array.isArray(valueState)) {
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof valueState}\``
    );
  }
  const [isDragging, setDragging] = (0, import_react92.useState)(false);
  const [isFocused, setFocused] = (0, import_react92.useState)(false);
  const [activeIndex, setActiveIndex] = (0, import_react92.useState)(-1);
  const isInteractive = !(isDisabled || isReadOnly);
  const initialValue = (0, import_react92.useRef)(valueState);
  const value = valueState.map((val) => clampValue(val, min, max));
  const spacing = minStepsBetweenThumbs * step;
  const valueBounds = getValueBounds(value, min, max, spacing);
  const stateRef = (0, import_react92.useRef)({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  stateRef.current.value = value;
  stateRef.current.valueBounds = valueBounds;
  const reversedValue = value.map((val) => max - val + min);
  const thumbValues = isReversed ? reversedValue : value;
  const thumbPercents = thumbValues.map((val) => valueToPercent(val, min, max));
  const isVertical = orientation === "vertical";
  const trackRef = (0, import_react92.useRef)(null);
  const rootRef = (0, import_react92.useRef)(null);
  const thumbRects = useSizes({
    getNodes() {
      const rootNode = rootRef.current;
      const thumbNodes = rootNode == null ? void 0 : rootNode.querySelectorAll("[role=slider]");
      return thumbNodes ? Array.from(thumbNodes) : [];
    }
  });
  const reactId = (0, import_react92.useId)();
  const uuid = idProp != null ? idProp : reactId;
  const ids = getIds(uuid);
  const getValueFromPointer = (0, import_react92.useCallback)(
    (event) => {
      var _a2, _b;
      if (!trackRef.current)
        return;
      stateRef.current.eventSource = "pointer";
      const rect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = (_b = (_a2 = event.touches) == null ? void 0 : _a2[0]) != null ? _b : event;
      const diff = isVertical ? rect.bottom - clientY : clientX - rect.left;
      const length = isVertical ? rect.height : rect.width;
      let percent = diff / length;
      if (isReversed)
        percent = 1 - percent;
      return percentToValue(percent, min, max);
    },
    [isVertical, isReversed, max, min]
  );
  const tenSteps = (max - min) / 10;
  const oneStep = step || (max - min) / 100;
  const actions = (0, import_react92.useMemo)(
    () => ({
      setValueAtIndex(index, val) {
        if (!isInteractive)
          return;
        const bounds = stateRef.current.valueBounds[index];
        val = parseFloat(roundValueToStep(val, bounds.min, oneStep));
        val = clampValue(val, bounds.min, bounds.max);
        const next = [...stateRef.current.value];
        next[index] = val;
        setValue(next);
      },
      setActiveIndex,
      stepUp(index, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index];
        const next = isReversed ? valueAtIndex - step2 : valueAtIndex + step2;
        actions.setValueAtIndex(index, next);
      },
      stepDown(index, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index];
        const next = isReversed ? valueAtIndex + step2 : valueAtIndex - step2;
        actions.setValueAtIndex(index, next);
      },
      reset() {
        setValue(initialValue.current);
      }
    }),
    [oneStep, isReversed, setValue, isInteractive]
  );
  const onKeyDown = (0, import_react92.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        ArrowRight: () => actions.stepUp(activeIndex),
        ArrowUp: () => actions.stepUp(activeIndex),
        ArrowLeft: () => actions.stepDown(activeIndex),
        ArrowDown: () => actions.stepDown(activeIndex),
        PageUp: () => actions.stepUp(activeIndex, tenSteps),
        PageDown: () => actions.stepDown(activeIndex, tenSteps),
        Home: () => {
          const { min: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        },
        End: () => {
          const { max: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        stateRef.current.eventSource = "keyboard";
      }
    },
    [actions, activeIndex, tenSteps, valueBounds]
  );
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react92.useMemo)(
    () => getStyles3({
      isReversed,
      orientation,
      thumbRects,
      thumbPercents
    }),
    [isReversed, orientation, thumbPercents, thumbRects]
  );
  const focusThumb = (0, import_react92.useCallback)(
    (index) => {
      var _a2;
      const idx = index != null ? index : activeIndex;
      if (idx !== -1 && focusThumbOnChange) {
        const id = ids.getThumb(idx);
        const thumb = (_a2 = rootRef.current) == null ? void 0 : _a2.ownerDocument.getElementById(id);
        if (thumb) {
          setTimeout(() => thumb.focus());
        }
      }
    },
    [focusThumbOnChange, activeIndex, ids]
  );
  useUpdateEffect(() => {
    if (stateRef.current.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    }
  }, [value, onChangeEnd]);
  const onPanSessionStart = (event) => {
    const pointValue = getValueFromPointer(event) || 0;
    const distances = stateRef.current.value.map(
      (val) => Math.abs(val - pointValue)
    );
    const closest = Math.min(...distances);
    let index = distances.indexOf(closest);
    const thumbsAtPosition = distances.filter(
      (distance2) => distance2 === closest
    );
    const isThumbStacked = thumbsAtPosition.length > 1;
    if (isThumbStacked && pointValue > stateRef.current.value[index]) {
      index = index + thumbsAtPosition.length - 1;
    }
    setActiveIndex(index);
    actions.setValueAtIndex(index, pointValue);
    focusThumb(index);
  };
  const onPan = (event) => {
    if (activeIndex == -1)
      return;
    const pointValue = getValueFromPointer(event) || 0;
    setActiveIndex(activeIndex);
    actions.setValueAtIndex(activeIndex, pointValue);
    focusThumb(activeIndex);
  };
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      if (!isInteractive)
        return;
      setDragging(true);
      onPanSessionStart(event);
      onChangeStart == null ? void 0 : onChangeStart(stateRef.current.value);
    },
    onPanSessionEnd() {
      if (!isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    },
    onPan(event) {
      if (!isInteractive)
        return;
      onPan(event);
    }
  });
  const getRootProps = (0, import_react92.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        id: ids.root,
        ref: mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr2(isDisabled),
        "data-focused": dataAttr2(isFocused),
        style: { ...props2.style, ...rootStyle }
      };
    },
    [htmlProps, isDisabled, isFocused, rootStyle, ids]
  );
  const getTrackProps = (0, import_react92.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, trackRef),
        id: ids.track,
        "data-disabled": dataAttr2(isDisabled),
        style: { ...props2.style, ...trackStyle }
      };
    },
    [isDisabled, trackStyle, ids]
  );
  const getInnerTrackProps = (0, import_react92.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.innerTrack,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle, ids]
  );
  const getThumbProps = (0, import_react92.useCallback)(
    (props2, ref = null) => {
      var _a2;
      const { index, ...rest } = props2;
      const valueAtIndex = value[index];
      if (valueAtIndex == null) {
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${index}\`. The \`value\` or \`defaultValue\` length is : ${value.length}`
        );
      }
      const bounds = valueBounds[index];
      return {
        ...rest,
        ref,
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: ids.getThumb(index),
        "data-active": dataAttr2(isDragging && activeIndex === index),
        "aria-valuetext": (_a2 = getAriaValueText == null ? void 0 : getAriaValueText(valueAtIndex)) != null ? _a2 : ariaValueText == null ? void 0 : ariaValueText[index],
        "aria-valuemin": bounds.min,
        "aria-valuemax": bounds.max,
        "aria-valuenow": valueAtIndex,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr2(isDisabled),
        "aria-readonly": ariaAttr2(isReadOnly),
        "aria-label": ariaLabel == null ? void 0 : ariaLabel[index],
        "aria-labelledby": (ariaLabel == null ? void 0 : ariaLabel[index]) ? void 0 : ariaLabelledBy == null ? void 0 : ariaLabelledBy[index],
        style: { ...props2.style, ...getThumbStyle(index) },
        onKeyDown: callAllHandlers3(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers3(props2.onFocus, () => {
          setFocused(true);
          setActiveIndex(index);
        }),
        onBlur: callAllHandlers3(props2.onBlur, () => {
          setFocused(false);
          setActiveIndex(-1);
        })
      };
    },
    [
      ids,
      value,
      valueBounds,
      isInteractive,
      isDragging,
      activeIndex,
      getAriaValueText,
      ariaValueText,
      orientation,
      isDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown,
      setFocused
    ]
  );
  const getOutputProps = (0, import_react92.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.output,
        htmlFor: value.map((v, i) => ids.getThumb(i)).join(" "),
        "aria-live": "off"
      };
    },
    [ids, value]
  );
  const getMarkerProps = (0, import_react92.useCallback)(
    (props2, ref = null) => {
      const { value: v, ...rest } = props2;
      const isInRange = !(v < min || v > max);
      const isHighlighted = v >= value[0] && v <= value[value.length - 1];
      let percent = valueToPercent(v, min, max);
      percent = isReversed ? 100 - percent : percent;
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient({
          orientation,
          vertical: { bottom: `${percent}%` },
          horizontal: { left: `${percent}%` }
        })
      };
      return {
        ...rest,
        ref,
        id: ids.getMarker(props2.value),
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr2(isDisabled),
        "data-invalid": dataAttr2(!isInRange),
        "data-highlighted": dataAttr2(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled, isReversed, max, min, orientation, value, ids]
  );
  const getInputProps = (0, import_react92.useCallback)(
    (props2, ref = null) => {
      const { index, ...rest } = props2;
      return {
        ...rest,
        ref,
        id: ids.getInput(index),
        type: "hidden",
        value: value[index],
        name: Array.isArray(name) ? name[index] : `${name}-${index}`
      };
    },
    [name, value, ids]
  );
  const state = {
    value,
    isFocused,
    isDragging,
    getThumbPercent: (index) => thumbPercents[index],
    getThumbMinValue: (index) => valueBounds[index].min,
    getThumbMaxValue: (index) => valueBounds[index].max
  };
  return {
    state,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps,
    getOutputProps
  };
}
function getValueBounds(arr, min, max, spacing) {
  return arr.map((v, i) => {
    const _min = i === 0 ? min : arr[i - 1] + spacing;
    const _max = i === arr.length - 1 ? max : arr[i + 1] - spacing;
    return { min: _min, max: _max };
  });
}

// node_modules/@chakra-ui/slider/dist/chunk-RD3HQFPG.mjs
var import_react93 = __toESM(require_react(), 1);
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var [RangeSliderProvider, useRangeSliderContext] = createContext({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
});
var [RangeSliderStylesProvider, useRangeSliderStyles] = createContext({
  name: `RangeSliderStylesContext`,
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
});
var RangeSlider = forwardRef(
  function RangeSlider2(props, ref) {
    const sliderProps = {
      orientation: "horizontal",
      ...props
    };
    const styles = useMultiStyleConfig("Slider", sliderProps);
    const ownProps = omitThemingProps(sliderProps);
    const { direction } = useTheme();
    ownProps.direction = direction;
    const { getRootProps, ...context } = useRangeSlider(ownProps);
    const ctx = (0, import_react93.useMemo)(
      () => ({ ...context, name: sliderProps.name }),
      [context, sliderProps.name]
    );
    return (0, import_jsx_runtime93.jsx)(RangeSliderProvider, { value: ctx, children: (0, import_jsx_runtime93.jsx)(RangeSliderStylesProvider, { value: styles, children: (0, import_jsx_runtime93.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className: "chakra-slider",
        __css: styles.container,
        children: sliderProps.children
      }
    ) }) });
  }
);
RangeSlider.displayName = "RangeSlider";
var RangeSliderThumb = forwardRef(
  function RangeSliderThumb2(props, ref) {
    const { getThumbProps, getInputProps, name } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const thumbProps = getThumbProps(props, ref);
    return (0, import_jsx_runtime93.jsxs)(
      chakra.div,
      {
        ...thumbProps,
        className: cx2("chakra-slider__thumb", props.className),
        __css: styles.thumb,
        children: [
          thumbProps.children,
          name && (0, import_jsx_runtime93.jsx)("input", { ...getInputProps({ index: props.index }) })
        ]
      }
    );
  }
);
RangeSliderThumb.displayName = "RangeSliderThumb";
var RangeSliderTrack = forwardRef(
  function RangeSliderTrack2(props, ref) {
    const { getTrackProps } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const trackProps = getTrackProps(props, ref);
    return (0, import_jsx_runtime93.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx2("chakra-slider__track", props.className),
        __css: styles.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
RangeSliderTrack.displayName = "RangeSliderTrack";
var RangeSliderFilledTrack = forwardRef(function RangeSliderFilledTrack2(props, ref) {
  const { getInnerTrackProps } = useRangeSliderContext();
  const styles = useRangeSliderStyles();
  const trackProps = getInnerTrackProps(props, ref);
  return (0, import_jsx_runtime93.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: "chakra-slider__filled-track",
      __css: styles.filledTrack
    }
  );
});
RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack";
var RangeSliderMark = forwardRef(
  function RangeSliderMark2(props, ref) {
    const { getMarkerProps } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const markProps = getMarkerProps(props, ref);
    return (0, import_jsx_runtime93.jsx)(
      chakra.div,
      {
        ...markProps,
        className: cx2("chakra-slider__marker", props.className),
        __css: styles.mark
      }
    );
  }
);
RangeSliderMark.displayName = "RangeSliderMark";

// node_modules/@chakra-ui/slider/dist/chunk-45OCWRAV.mjs
var import_react94 = __toESM(require_react(), 1);
function useSlider(props) {
  var _a2;
  const {
    min = 0,
    max = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction,
    orientation
  });
  const [computedValue, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : getDefaultValue(min, max),
    onChange
  });
  const [isDragging, setDragging] = (0, import_react94.useState)(false);
  const [isFocused, setFocused] = (0, import_react94.useState)(false);
  const isInteractive = !(isDisabled || isReadOnly);
  const tenSteps = (max - min) / 10;
  const oneStep = step || (max - min) / 100;
  const value = clampValue(computedValue, min, max);
  const reversedValue = max - value + min;
  const trackValue = isReversed ? reversedValue : value;
  const thumbPercent = valueToPercent(trackValue, min, max);
  const isVertical = orientation === "vertical";
  const stateRef = useLatestRef2({
    min,
    max,
    step,
    isDisabled,
    value,
    isInteractive,
    isReversed,
    isVertical,
    eventSource: null,
    focusThumbOnChange,
    orientation
  });
  const trackRef = (0, import_react94.useRef)(null);
  const thumbRef = (0, import_react94.useRef)(null);
  const rootRef = (0, import_react94.useRef)(null);
  const reactId = (0, import_react94.useId)();
  const uuid = idProp != null ? idProp : reactId;
  const [thumbId, trackId] = [`slider-thumb-${uuid}`, `slider-track-${uuid}`];
  const getValueFromPointer = (0, import_react94.useCallback)(
    (event) => {
      var _a22, _b;
      if (!trackRef.current)
        return;
      const state2 = stateRef.current;
      state2.eventSource = "pointer";
      const trackRect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = (_b = (_a22 = event.touches) == null ? void 0 : _a22[0]) != null ? _b : event;
      const diff = isVertical ? trackRect.bottom - clientY : clientX - trackRect.left;
      const length = isVertical ? trackRect.height : trackRect.width;
      let percent = diff / length;
      if (isReversed) {
        percent = 1 - percent;
      }
      let nextValue = percentToValue(percent, state2.min, state2.max);
      if (state2.step) {
        nextValue = parseFloat(
          roundValueToStep(nextValue, state2.min, state2.step)
        );
      }
      nextValue = clampValue(nextValue, state2.min, state2.max);
      return nextValue;
    },
    [isVertical, isReversed, stateRef]
  );
  const constrain = (0, import_react94.useCallback)(
    (value2) => {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      value2 = parseFloat(roundValueToStep(value2, state2.min, oneStep));
      value2 = clampValue(value2, state2.min, state2.max);
      setValue(value2);
    },
    [oneStep, setValue, stateRef]
  );
  const actions = (0, import_react94.useMemo)(
    () => ({
      stepUp(step2 = oneStep) {
        const next = isReversed ? value - step2 : value + step2;
        constrain(next);
      },
      stepDown(step2 = oneStep) {
        const next = isReversed ? value + step2 : value - step2;
        constrain(next);
      },
      reset() {
        constrain(defaultValue || 0);
      },
      stepTo(value2) {
        constrain(value2);
      }
    }),
    [constrain, isReversed, value, oneStep, defaultValue]
  );
  const onKeyDown = (0, import_react94.useCallback)(
    (event) => {
      const state2 = stateRef.current;
      const keyMap = {
        ArrowRight: () => actions.stepUp(),
        ArrowUp: () => actions.stepUp(),
        ArrowLeft: () => actions.stepDown(),
        ArrowDown: () => actions.stepDown(),
        PageUp: () => actions.stepUp(tenSteps),
        PageDown: () => actions.stepDown(tenSteps),
        Home: () => constrain(state2.min),
        End: () => constrain(state2.max)
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        state2.eventSource = "keyboard";
      }
    },
    [actions, constrain, tenSteps, stateRef]
  );
  const valueText = (_a2 = getAriaValueText == null ? void 0 : getAriaValueText(value)) != null ? _a2 : ariaValueText;
  const thumbSize = useSize(thumbRef);
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react94.useMemo)(() => {
    const state2 = stateRef.current;
    const thumbRect = thumbSize != null ? thumbSize : { width: 0, height: 0 };
    return getStyles3({
      isReversed,
      orientation: state2.orientation,
      thumbRects: [thumbRect],
      thumbPercents: [thumbPercent]
    });
  }, [isReversed, thumbSize, thumbPercent, stateRef]);
  const focusThumb = (0, import_react94.useCallback)(() => {
    const state2 = stateRef.current;
    if (state2.focusThumbOnChange) {
      setTimeout(() => {
        var _a22;
        return (_a22 = thumbRef.current) == null ? void 0 : _a22.focus();
      });
    }
  }, [stateRef]);
  useUpdateEffect(() => {
    const state2 = stateRef.current;
    focusThumb();
    if (state2.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(state2.value);
    }
  }, [value, onChangeEnd]);
  function setValueFromPointer(event) {
    const nextValue = getValueFromPointer(event);
    if (nextValue != null && nextValue !== stateRef.current.value) {
      setValue(nextValue);
    }
  }
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setDragging(true);
      focusThumb();
      setValueFromPointer(event);
      onChangeStart == null ? void 0 : onChangeStart(state2.value);
    },
    onPanSessionEnd() {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(state2.value);
    },
    onPan(event) {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setValueFromPointer(event);
    }
  });
  const getRootProps = (0, import_react94.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        ref: mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr2(isDisabled),
        "data-focused": dataAttr2(isFocused),
        style: {
          ...props2.style,
          ...rootStyle
        }
      };
    },
    [htmlProps, isDisabled, isFocused, rootStyle]
  );
  const getTrackProps = (0, import_react94.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, trackRef),
        id: trackId,
        "data-disabled": dataAttr2(isDisabled),
        style: {
          ...props2.style,
          ...trackStyle
        }
      };
    },
    [isDisabled, trackId, trackStyle]
  );
  const getInnerTrackProps = (0, import_react94.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle]
  );
  const getThumbProps = (0, import_react94.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, thumbRef),
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: thumbId,
        "data-active": dataAttr2(isDragging),
        "aria-valuetext": valueText,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr2(isDisabled),
        "aria-readonly": ariaAttr2(isReadOnly),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabel ? void 0 : ariaLabelledBy,
        style: {
          ...props2.style,
          ...getThumbStyle(0)
        },
        onKeyDown: callAllHandlers3(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers3(props2.onFocus, () => setFocused(true)),
        onBlur: callAllHandlers3(props2.onBlur, () => setFocused(false))
      };
    },
    [
      isInteractive,
      thumbId,
      isDragging,
      valueText,
      min,
      max,
      value,
      orientation,
      isDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown
    ]
  );
  const getMarkerProps = (0, import_react94.useCallback)(
    (props2, ref = null) => {
      const isInRange = !(props2.value < min || props2.value > max);
      const isHighlighted = value >= props2.value;
      const markerPercent = valueToPercent(props2.value, min, max);
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient2({
          orientation,
          vertical: {
            bottom: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          },
          horizontal: {
            left: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          }
        })
      };
      return {
        ...props2,
        ref,
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr2(isDisabled),
        "data-invalid": dataAttr2(!isInRange),
        "data-highlighted": dataAttr2(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled, isReversed, max, min, orientation, value]
  );
  const getInputProps = (0, import_react94.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        type: "hidden",
        value,
        name
      };
    },
    [name, value]
  );
  const state = { value, isFocused, isDragging };
  return {
    state,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps
  };
}
function orient2(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
function getDefaultValue(min, max) {
  return max < min ? min : min + (max - min) / 2;
}

// node_modules/@chakra-ui/slider/dist/chunk-6KSEUUNN.mjs
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
var [SliderProvider, useSliderContext] = createContext({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
});
var [SliderStylesProvider, useSliderStyles] = createContext({
  name: `SliderStylesContext`,
  hookName: `useSliderStyles`,
  providerName: "<Slider />"
});
var Slider = forwardRef((props, ref) => {
  var _a2;
  const sliderProps = {
    ...props,
    orientation: (_a2 = props == null ? void 0 : props.orientation) != null ? _a2 : "horizontal"
  };
  const styles = useMultiStyleConfig("Slider", sliderProps);
  const ownProps = omitThemingProps(sliderProps);
  const { direction } = useTheme();
  ownProps.direction = direction;
  const { getInputProps, getRootProps, ...context } = useSlider(ownProps);
  const rootProps = getRootProps();
  const inputProps = getInputProps({}, ref);
  return (0, import_jsx_runtime94.jsx)(SliderProvider, { value: context, children: (0, import_jsx_runtime94.jsx)(SliderStylesProvider, { value: styles, children: (0, import_jsx_runtime94.jsxs)(
    chakra.div,
    {
      ...rootProps,
      className: cx2("chakra-slider", sliderProps.className),
      __css: styles.container,
      children: [
        sliderProps.children,
        (0, import_jsx_runtime94.jsx)("input", { ...inputProps })
      ]
    }
  ) }) });
});
Slider.displayName = "Slider";
var SliderThumb = forwardRef((props, ref) => {
  const { getThumbProps } = useSliderContext();
  const styles = useSliderStyles();
  const thumbProps = getThumbProps(props, ref);
  return (0, import_jsx_runtime94.jsx)(
    chakra.div,
    {
      ...thumbProps,
      className: cx2("chakra-slider__thumb", props.className),
      __css: styles.thumb
    }
  );
});
SliderThumb.displayName = "SliderThumb";
var SliderTrack = forwardRef((props, ref) => {
  const { getTrackProps } = useSliderContext();
  const styles = useSliderStyles();
  const trackProps = getTrackProps(props, ref);
  return (0, import_jsx_runtime94.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: cx2("chakra-slider__track", props.className),
      __css: styles.track
    }
  );
});
SliderTrack.displayName = "SliderTrack";
var SliderFilledTrack = forwardRef(
  (props, ref) => {
    const { getInnerTrackProps } = useSliderContext();
    const styles = useSliderStyles();
    const trackProps = getInnerTrackProps(props, ref);
    return (0, import_jsx_runtime94.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx2("chakra-slider__filled-track", props.className),
        __css: styles.filledTrack
      }
    );
  }
);
SliderFilledTrack.displayName = "SliderFilledTrack";
var SliderMark = forwardRef((props, ref) => {
  const { getMarkerProps } = useSliderContext();
  const styles = useSliderStyles();
  const markProps = getMarkerProps(props, ref);
  return (0, import_jsx_runtime94.jsx)(
    chakra.div,
    {
      ...markProps,
      className: cx2("chakra-slider__marker", props.className),
      __css: styles.mark
    }
  );
});
SliderMark.displayName = "SliderMark";

// node_modules/@chakra-ui/stat/dist/chunk-W64KV3Y7.mjs
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var [StatStylesProvider, useStatStyles] = createContext({
  name: `StatStylesContext`,
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
});
var Stat = forwardRef(function Stat2(props, ref) {
  const styles = useMultiStyleConfig("Stat", props);
  const statStyles = {
    position: "relative",
    flex: "1 1 0%",
    ...styles.container
  };
  const { className, children, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime95.jsx)(StatStylesProvider, { value: styles, children: (0, import_jsx_runtime95.jsx)(
    chakra.div,
    {
      ref,
      ...rest,
      className: cx("chakra-stat", className),
      __css: statStyles,
      children: (0, import_jsx_runtime95.jsx)("dl", { children })
    }
  ) });
});
Stat.displayName = "Stat";

// node_modules/@chakra-ui/stat/dist/chunk-ZKKHYQWO.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var StatDownArrow = (props) => (0, import_jsx_runtime96.jsx)(Icon, { color: "red.400", ...props, children: (0, import_jsx_runtime96.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
StatDownArrow.displayName = "StatDownArrow";
function StatUpArrow(props) {
  return (0, import_jsx_runtime96.jsx)(Icon, { color: "green.400", ...props, children: (0, import_jsx_runtime96.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    }
  ) });
}
StatUpArrow.displayName = "StatUpArrow";
function StatArrow(props) {
  const { type, "aria-label": ariaLabel, ...rest } = props;
  const styles = useStatStyles();
  const BaseIcon = type === "increase" ? StatUpArrow : StatDownArrow;
  const defaultAriaLabel = type === "increase" ? "increased by" : "decreased by";
  const label = ariaLabel || defaultAriaLabel;
  return (0, import_jsx_runtime96.jsxs)(import_jsx_runtime96.Fragment, { children: [
    (0, import_jsx_runtime96.jsx)(chakra.span, { srOnly: true, children: label }),
    (0, import_jsx_runtime96.jsx)(BaseIcon, { "aria-hidden": true, ...rest, __css: styles.icon })
  ] });
}
StatArrow.displayName = "StatArrow";

// node_modules/@chakra-ui/stat/dist/chunk-BSQ2CXML.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var StatGroup = forwardRef(function StatGroup2(props, ref) {
  return (0, import_jsx_runtime97.jsx)(
    chakra.div,
    {
      ...props,
      ref,
      role: "group",
      className: cx("chakra-stat__group", props.className),
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start"
      }
    }
  );
});
StatGroup.displayName = "StatGroup";

// node_modules/@chakra-ui/stat/dist/chunk-RMNGYPBK.mjs
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var StatHelpText = forwardRef(
  function StatHelpText2(props, ref) {
    const styles = useStatStyles();
    return (0, import_jsx_runtime98.jsx)(
      chakra.dd,
      {
        ref,
        ...props,
        className: cx("chakra-stat__help-text", props.className),
        __css: styles.helpText
      }
    );
  }
);
StatHelpText.displayName = "StatHelpText";

// node_modules/@chakra-ui/stat/dist/chunk-Z457NQVE.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var StatLabel = forwardRef(function StatLabel2(props, ref) {
  const styles = useStatStyles();
  return (0, import_jsx_runtime99.jsx)(
    chakra.dt,
    {
      ref,
      ...props,
      className: cx("chakra-stat__label", props.className),
      __css: styles.label
    }
  );
});
StatLabel.displayName = "StatLabel";

// node_modules/@chakra-ui/stat/dist/chunk-GF2QC326.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var StatNumber = forwardRef(function StatNumber2(props, ref) {
  const styles = useStatStyles();
  return (0, import_jsx_runtime100.jsx)(
    chakra.dd,
    {
      ref,
      ...props,
      className: cx("chakra-stat__number", props.className),
      __css: {
        ...styles.number,
        fontFeatureSettings: "pnum",
        fontVariantNumeric: "proportional-nums"
      }
    }
  );
});
StatNumber.displayName = "StatNumber";

// node_modules/@chakra-ui/stepper/dist/chunk-5JULEEQD.mjs
var [StepContextProvider, useStepContext] = createContext(
  { name: "StepContext" }
);
var [StepperStylesProvider, useStepperStyles] = createStylesContext("Stepper");

// node_modules/@chakra-ui/stepper/dist/chunk-D2YOVTOT.mjs
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
var StepTitle = forwardRef(function StepTitle2(props, ref) {
  const { status } = useStepContext();
  const styles = useStepperStyles();
  return (0, import_jsx_runtime101.jsx)(
    chakra.h3,
    {
      ref,
      "data-status": status,
      ...props,
      __css: styles.title,
      className: cx("chakra-step__title", props.className)
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-V5KO42CT.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
var Step = forwardRef(function Step2(props, ref) {
  const { orientation, status, showLastSeparator } = useStepContext();
  const styles = useStepperStyles();
  return (0, import_jsx_runtime102.jsx)(
    chakra.div,
    {
      ref,
      "data-status": status,
      "data-orientation": orientation,
      "data-stretch": dataAttr(showLastSeparator),
      __css: styles.step,
      ...props,
      className: cx("chakra-step", props.className)
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-3CJ44H2L.mjs
var import_react95 = __toESM(require_react(), 1);
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var Stepper = forwardRef(function Stepper2(props, ref) {
  const styles = useMultiStyleConfig("Stepper", props);
  const {
    children,
    index,
    orientation = "horizontal",
    showLastSeparator = false,
    ...restProps
  } = omitThemingProps(props);
  const stepElements = import_react95.Children.toArray(children);
  const stepCount = stepElements.length;
  function getStatus(step) {
    if (step < index)
      return "complete";
    if (step > index)
      return "incomplete";
    return "active";
  }
  return (0, import_jsx_runtime103.jsx)(
    chakra.div,
    {
      ref,
      "aria-label": "Progress",
      "data-orientation": orientation,
      ...restProps,
      __css: styles.stepper,
      className: cx("chakra-stepper", props.className),
      children: (0, import_jsx_runtime103.jsx)(StepperStylesProvider, { value: styles, children: stepElements.map((child, index2) => (0, import_jsx_runtime103.jsx)(
        StepContextProvider,
        {
          value: {
            index: index2,
            status: getStatus(index2),
            orientation,
            showLastSeparator,
            count: stepCount,
            isFirst: index2 === 0,
            isLast: index2 === stepCount - 1
          },
          children: child
        },
        index2
      )) })
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-YK2WH7TU.mjs
var import_react96 = __toESM(require_react(), 1);
function useSteps(props = {}) {
  const { index = 0, count } = props;
  const [activeStep, setActiveStep] = (0, import_react96.useState)(index);
  const maxStep = typeof count === "number" ? count - 1 : 0;
  const activeStepPercent = activeStep / maxStep;
  return {
    activeStep,
    setActiveStep,
    activeStepPercent,
    isActiveStep(step) {
      return step === activeStep;
    },
    isCompleteStep(step) {
      return step < activeStep;
    },
    isIncompleteStep(step) {
      return step > activeStep;
    },
    getStatus(step) {
      if (step < activeStep)
        return "complete";
      if (step > activeStep)
        return "incomplete";
      return "active";
    },
    goToNext() {
      setActiveStep((step) => {
        return typeof count === "number" ? Math.min(count, step + 1) : step + 1;
      });
    },
    goToPrevious() {
      setActiveStep((step) => Math.max(0, step - 1));
    }
  };
}

// node_modules/@chakra-ui/stepper/dist/chunk-TT4IEOBJ.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var StepDescription = forwardRef(function StepDescription2(props, ref) {
  const { status } = useStepContext();
  const styles = useStepperStyles();
  return (0, import_jsx_runtime104.jsx)(
    chakra.p,
    {
      ref,
      "data-status": status,
      ...props,
      className: cx("chakra-step__description", props.className),
      __css: styles.description
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-ZVCNMXD3.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
function StepStatus(props) {
  const { complete, incomplete, active } = props;
  const context = useStepContext();
  let render = null;
  switch (context.status) {
    case "complete":
      render = runIfFn(complete, context);
      break;
    case "incomplete":
      render = runIfFn(incomplete, context);
      break;
    case "active":
      render = runIfFn(active, context);
      break;
  }
  return render ? (0, import_jsx_runtime105.jsx)(import_jsx_runtime105.Fragment, { children: render }) : null;
}

// node_modules/@chakra-ui/stepper/dist/chunk-BHFVWI2H.mjs
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
function CheckIcon3(props) {
  return (0, import_jsx_runtime106.jsx)(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      height: "1em",
      width: "1em",
      ...props,
      children: (0, import_jsx_runtime106.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  );
}

// node_modules/@chakra-ui/stepper/dist/chunk-2EGA5JYM.mjs
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);
function StepIcon(props) {
  const { status } = useStepContext();
  const styles = useStepperStyles();
  const icon = status === "complete" ? CheckIcon3 : void 0;
  return (0, import_jsx_runtime107.jsx)(
    Icon,
    {
      as: icon,
      __css: styles.icon,
      ...props,
      className: cx("chakra-step__icon", props.className)
    }
  );
}

// node_modules/@chakra-ui/stepper/dist/chunk-D3AI6OO6.mjs
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
var StepNumber = forwardRef(function StepNumber2(props, ref) {
  const { children, ...restProps } = props;
  const { status, index } = useStepContext();
  const styles = useStepperStyles();
  return (0, import_jsx_runtime108.jsx)(
    chakra.div,
    {
      ref,
      "data-status": status,
      __css: styles.number,
      ...restProps,
      className: cx("chakra-step__number", props.className),
      children: children || index + 1
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-4LPX3T3V.mjs
var import_jsx_runtime109 = __toESM(require_jsx_runtime(), 1);
function StepIndicator(props) {
  const { status } = useStepContext();
  const styles = useStepperStyles();
  return (0, import_jsx_runtime109.jsx)(
    chakra.div,
    {
      "data-status": status,
      ...props,
      __css: styles.indicator,
      className: cx("chakra-step__indicator", props.className)
    }
  );
}
function StepIndicatorContent() {
  return (0, import_jsx_runtime109.jsx)(
    StepStatus,
    {
      complete: (0, import_jsx_runtime109.jsx)(StepIcon, {}),
      incomplete: (0, import_jsx_runtime109.jsx)(StepNumber, {}),
      active: (0, import_jsx_runtime109.jsx)(StepNumber, {})
    }
  );
}

// node_modules/@chakra-ui/stepper/dist/chunk-ZAW7TYJD.mjs
var import_jsx_runtime110 = __toESM(require_jsx_runtime(), 1);
var StepSeparator = forwardRef(function StepSeparator2(props, ref) {
  const { orientation, status, isLast, showLastSeparator } = useStepContext();
  const styles = useStepperStyles();
  if (isLast && !showLastSeparator)
    return null;
  return (0, import_jsx_runtime110.jsx)(
    chakra.div,
    {
      ref,
      role: "separator",
      "data-orientation": orientation,
      "data-status": status,
      __css: styles.separator,
      ...props,
      className: cx("chakra-step__separator", props.className)
    }
  );
});

// node_modules/@chakra-ui/switch/dist/chunk-VTV6N5LE.mjs
var import_react97 = __toESM(require_react(), 1);
var import_jsx_runtime111 = __toESM(require_jsx_runtime(), 1);
var Switch = forwardRef(function Switch2(props, ref) {
  const styles = useMultiStyleConfig("Switch", props);
  const { spacing = "0.5rem", children, ...ownProps } = omitThemingProps(props);
  const {
    getIndicatorProps,
    getInputProps,
    getCheckboxProps,
    getRootProps,
    getLabelProps
  } = useCheckbox(ownProps);
  const containerStyles = (0, import_react97.useMemo)(
    () => ({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      lineHeight: 0,
      ...styles.container
    }),
    [styles.container]
  );
  const trackStyles = (0, import_react97.useMemo)(
    () => ({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer",
      ...styles.track
    }),
    [styles.track]
  );
  const labelStyles = (0, import_react97.useMemo)(
    () => ({
      userSelect: "none",
      marginStart: spacing,
      ...styles.label
    }),
    [spacing, styles.label]
  );
  return (0, import_jsx_runtime111.jsxs)(
    chakra.label,
    {
      ...getRootProps(),
      className: cx("chakra-switch", props.className),
      __css: containerStyles,
      children: [
        (0, import_jsx_runtime111.jsx)("input", { className: "chakra-switch__input", ...getInputProps({}, ref) }),
        (0, import_jsx_runtime111.jsx)(
          chakra.span,
          {
            ...getCheckboxProps(),
            className: "chakra-switch__track",
            __css: trackStyles,
            children: (0, import_jsx_runtime111.jsx)(
              chakra.span,
              {
                __css: styles.thumb,
                className: "chakra-switch__thumb",
                ...getIndicatorProps()
              }
            )
          }
        ),
        children && (0, import_jsx_runtime111.jsx)(
          chakra.span,
          {
            className: "chakra-switch__label",
            ...getLabelProps(),
            __css: labelStyles,
            children
          }
        )
      ]
    }
  );
});
Switch.displayName = "Switch";

// node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs
var import_jsx_runtime112 = __toESM(require_jsx_runtime(), 1);
var [TableStylesProvider, useTableStyles] = createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
var Table = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Table", props);
  const { className, layout: layout2, ...tableProps } = omitThemingProps(props);
  return (0, import_jsx_runtime112.jsx)(TableStylesProvider, { value: styles, children: (0, import_jsx_runtime112.jsx)(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout2, ...styles.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";

// node_modules/@chakra-ui/table/dist/chunk-DRZNIHMG.mjs
var import_jsx_runtime113 = __toESM(require_jsx_runtime(), 1);
var Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime113.jsx)(chakra.thead, { ...props, ref, __css: styles.thead });
});

// node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs
var import_jsx_runtime114 = __toESM(require_jsx_runtime(), 1);
var Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime114.jsx)(chakra.tr, { ...props, ref, __css: styles.tr });
});

// node_modules/@chakra-ui/table/dist/chunk-V3K6UINC.mjs
var import_jsx_runtime115 = __toESM(require_jsx_runtime(), 1);
var TableCaption = forwardRef(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles = useTableStyles();
    return (0, import_jsx_runtime115.jsx)(
      chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";

// node_modules/@chakra-ui/table/dist/chunk-OA6OURRG.mjs
var import_jsx_runtime116 = __toESM(require_jsx_runtime(), 1);
var TableContainer = forwardRef(
  (props, ref) => {
    var _a2;
    const { overflow, overflowX, className, ...rest } = props;
    return (0, import_jsx_runtime116.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: (_a2 = overflow != null ? overflow : overflowX) != null ? _a2 : "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs
var import_jsx_runtime117 = __toESM(require_jsx_runtime(), 1);
var Tbody = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime117.jsx)(chakra.tbody, { ...props, ref, __css: styles.tbody });
});

// node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs
var import_jsx_runtime118 = __toESM(require_jsx_runtime(), 1);
var Td = forwardRef(
  ({ isNumeric: isNumeric2, ...rest }, ref) => {
    const styles = useTableStyles();
    return (0, import_jsx_runtime118.jsx)(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric2
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-B5H2YLEF.mjs
var import_jsx_runtime119 = __toESM(require_jsx_runtime(), 1);
var Tfoot = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime119.jsx)(chakra.tfoot, { ...props, ref, __css: styles.tfoot });
});

// node_modules/@chakra-ui/table/dist/chunk-MGVPL3OH.mjs
var import_jsx_runtime120 = __toESM(require_jsx_runtime(), 1);
var Th = forwardRef(
  ({ isNumeric: isNumeric2, ...rest }, ref) => {
    const styles = useTableStyles();
    return (0, import_jsx_runtime120.jsx)(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric2
      }
    );
  }
);

// node_modules/@chakra-ui/tabs/dist/chunk-NXSBASJ3.mjs
var import_react98 = __toESM(require_react(), 1);
var [
  TabsDescendantsProvider,
  useTabsDescendantsContext,
  useTabsDescendants,
  useTabsDescendant
] = createDescendantContext();
function useTabs(props) {
  var _a2;
  const {
    defaultIndex,
    onChange,
    index,
    isManual,
    isLazy,
    lazyBehavior = "unmount",
    orientation = "horizontal",
    direction = "ltr",
    ...htmlProps
  } = props;
  const [focusedIndex, setFocusedIndex] = (0, import_react98.useState)(defaultIndex != null ? defaultIndex : 0);
  const [selectedIndex, setSelectedIndex] = useControllableState({
    defaultValue: defaultIndex != null ? defaultIndex : 0,
    value: index,
    onChange
  });
  (0, import_react98.useEffect)(() => {
    if (index != null) {
      setFocusedIndex(index);
    }
  }, [index]);
  const descendants = useTabsDescendants();
  const uuid = (0, import_react98.useId)();
  const uid = (_a2 = props.id) != null ? _a2 : uuid;
  const id = `tabs-${uid}`;
  return {
    id,
    selectedIndex,
    focusedIndex,
    setSelectedIndex,
    setFocusedIndex,
    isManual,
    isLazy,
    lazyBehavior,
    orientation,
    descendants,
    direction,
    htmlProps
  };
}
var [TabsProvider, useTabsContext] = createContext({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function useTabList(props) {
  const { focusedIndex, orientation, direction } = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const onKeyDown = (0, import_react98.useCallback)(
    (event) => {
      const nextTab = () => {
        var _a2;
        const next = descendants.nextEnabled(focusedIndex);
        if (next)
          (_a2 = next.node) == null ? void 0 : _a2.focus();
      };
      const prevTab = () => {
        var _a2;
        const prev = descendants.prevEnabled(focusedIndex);
        if (prev)
          (_a2 = prev.node) == null ? void 0 : _a2.focus();
      };
      const firstTab = () => {
        var _a2;
        const first = descendants.firstEnabled();
        if (first)
          (_a2 = first.node) == null ? void 0 : _a2.focus();
      };
      const lastTab = () => {
        var _a2;
        const last = descendants.lastEnabled();
        if (last)
          (_a2 = last.node) == null ? void 0 : _a2.focus();
      };
      const isHorizontal = orientation === "horizontal";
      const isVertical = orientation === "vertical";
      const eventKey = event.key;
      const ArrowStart = direction === "ltr" ? "ArrowLeft" : "ArrowRight";
      const ArrowEnd = direction === "ltr" ? "ArrowRight" : "ArrowLeft";
      const keyMap = {
        [ArrowStart]: () => isHorizontal && prevTab(),
        [ArrowEnd]: () => isHorizontal && nextTab(),
        ArrowDown: () => isVertical && nextTab(),
        ArrowUp: () => isVertical && prevTab(),
        Home: firstTab,
        End: lastTab
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, focusedIndex, orientation, direction]
  );
  return {
    ...props,
    role: "tablist",
    "aria-orientation": orientation,
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useTab(props) {
  const { isDisabled = false, isFocusable = false, ...htmlProps } = props;
  const { setSelectedIndex, isManual, id, setFocusedIndex, selectedIndex } = useTabsContext();
  const { index, register } = useTabsDescendant({
    disabled: isDisabled && !isFocusable
  });
  const isSelected = index === selectedIndex;
  const onClick = () => {
    setSelectedIndex(index);
  };
  const onFocus3 = () => {
    setFocusedIndex(index);
    const isDisabledButFocusable = isDisabled && isFocusable;
    const shouldSelect = !isManual && !isDisabledButFocusable;
    if (shouldSelect) {
      setSelectedIndex(index);
    }
  };
  const clickableProps = useClickable({
    ...htmlProps,
    ref: mergeRefs(register, props.ref),
    isDisabled,
    isFocusable,
    onClick: callAllHandlers(props.onClick, onClick)
  });
  const type = "button";
  return {
    ...clickableProps,
    id: makeTabId(id, index),
    role: "tab",
    tabIndex: isSelected ? 0 : -1,
    type,
    "aria-selected": isSelected,
    "aria-controls": makeTabPanelId(id, index),
    onFocus: isDisabled ? void 0 : callAllHandlers(props.onFocus, onFocus3)
  };
}
var [TabPanelProvider, useTabPanelContext] = createContext({});
function useTabPanels(props) {
  const context = useTabsContext();
  const { id, selectedIndex } = context;
  const validChildren = getValidChildren(props.children);
  const children = validChildren.map(
    (child, index) => (0, import_react98.createElement)(
      TabPanelProvider,
      {
        key: index,
        value: {
          isSelected: index === selectedIndex,
          id: makeTabPanelId(id, index),
          tabId: makeTabId(id, index),
          selectedIndex
        }
      },
      child
    )
  );
  return { ...props, children };
}
function useTabPanel(props) {
  const { children, ...htmlProps } = props;
  const { isLazy, lazyBehavior } = useTabsContext();
  const { isSelected, id, tabId } = useTabPanelContext();
  const hasBeenSelected = (0, import_react98.useRef)(false);
  if (isSelected) {
    hasBeenSelected.current = true;
  }
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenSelected.current,
    isSelected,
    enabled: isLazy,
    mode: lazyBehavior
  });
  return {
    // Puts the tabpanel in the page `Tab` sequence.
    tabIndex: 0,
    ...htmlProps,
    children: shouldRenderChildren ? children : null,
    role: "tabpanel",
    "aria-labelledby": tabId,
    hidden: !isSelected,
    id
  };
}
function useTabIndicator() {
  const context = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const { selectedIndex, orientation } = context;
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  const [rect, setRect] = (0, import_react98.useState)(() => {
    if (isHorizontal)
      return { left: 0, width: 0 };
    if (isVertical)
      return { top: 0, height: 0 };
    return void 0;
  });
  const [hasMeasured, setHasMeasured] = (0, import_react98.useState)(false);
  useSafeLayoutEffect(() => {
    if (selectedIndex == null)
      return;
    const tab = descendants.item(selectedIndex);
    if (tab == null)
      return;
    if (isHorizontal) {
      setRect({ left: tab.node.offsetLeft, width: tab.node.offsetWidth });
    }
    if (isVertical) {
      setRect({ top: tab.node.offsetTop, height: tab.node.offsetHeight });
    }
    const id = requestAnimationFrame(() => {
      setHasMeasured(true);
    });
    return () => {
      if (id) {
        cancelAnimationFrame(id);
      }
    };
  }, [selectedIndex, isHorizontal, isVertical, descendants]);
  return {
    position: "absolute",
    transitionProperty: "left, right, top, bottom, height, width",
    transitionDuration: hasMeasured ? "200ms" : "0ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    ...rect
  };
}
function makeTabId(id, index) {
  return `${id}--tab-${index}`;
}
function makeTabPanelId(id, index) {
  return `${id}--tabpanel-${index}`;
}

// node_modules/@chakra-ui/tabs/dist/chunk-GTRZJDIL.mjs
var import_react99 = __toESM(require_react(), 1);
var import_jsx_runtime121 = __toESM(require_jsx_runtime(), 1);
var [TabsStylesProvider, useTabsStyles] = createContext({
  name: `TabsStylesContext`,
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
});
var Tabs = forwardRef(function Tabs2(props, ref) {
  const styles = useMultiStyleConfig("Tabs", props);
  const { children, className, ...rest } = omitThemingProps(props);
  const { htmlProps, descendants, ...ctx } = useTabs(rest);
  const context = (0, import_react99.useMemo)(() => ctx, [ctx]);
  const { isFitted: _, ...rootProps } = htmlProps;
  const tabsStyles = {
    position: "relative",
    ...styles.root
  };
  return (0, import_jsx_runtime121.jsx)(TabsDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime121.jsx)(TabsProvider, { value: context, children: (0, import_jsx_runtime121.jsx)(TabsStylesProvider, { value: styles, children: (0, import_jsx_runtime121.jsx)(
    chakra.div,
    {
      className: cx("chakra-tabs", className),
      ref,
      ...rootProps,
      __css: tabsStyles,
      children
    }
  ) }) }) });
});
Tabs.displayName = "Tabs";

// node_modules/@chakra-ui/tabs/dist/chunk-XYXC6MAF.mjs
var import_jsx_runtime122 = __toESM(require_jsx_runtime(), 1);
var TabIndicator = forwardRef(
  function TabIndicator2(props, ref) {
    const indicatorStyle = useTabIndicator();
    const style = {
      ...props.style,
      ...indicatorStyle
    };
    const styles = useTabsStyles();
    return (0, import_jsx_runtime122.jsx)(
      chakra.div,
      {
        ref,
        ...props,
        className: cx("chakra-tabs__tab-indicator", props.className),
        style,
        __css: styles.indicator
      }
    );
  }
);
TabIndicator.displayName = "TabIndicator";

// node_modules/@chakra-ui/tabs/dist/chunk-BXDFYXZJ.mjs
var import_jsx_runtime123 = __toESM(require_jsx_runtime(), 1);
var TabList = forwardRef(function TabList2(props, ref) {
  const tablistProps = useTabList({ ...props, ref });
  const styles = useTabsStyles();
  const tablistStyles = {
    display: "flex",
    ...styles.tablist
  };
  return (0, import_jsx_runtime123.jsx)(
    chakra.div,
    {
      ...tablistProps,
      className: cx("chakra-tabs__tablist", props.className),
      __css: tablistStyles
    }
  );
});
TabList.displayName = "TabList";

// node_modules/@chakra-ui/tabs/dist/chunk-KGTDXOFZ.mjs
var import_jsx_runtime124 = __toESM(require_jsx_runtime(), 1);
var TabPanel = forwardRef(function TabPanel2(props, ref) {
  const panelProps = useTabPanel({ ...props, ref });
  const styles = useTabsStyles();
  return (0, import_jsx_runtime124.jsx)(
    chakra.div,
    {
      outline: "0",
      ...panelProps,
      className: cx("chakra-tabs__tab-panel", props.className),
      __css: styles.tabpanel
    }
  );
});
TabPanel.displayName = "TabPanel";

// node_modules/@chakra-ui/tabs/dist/chunk-4YMKQ5D4.mjs
var import_jsx_runtime125 = __toESM(require_jsx_runtime(), 1);
var TabPanels = forwardRef(function TabPanels2(props, ref) {
  const panelsProps = useTabPanels(props);
  const styles = useTabsStyles();
  return (0, import_jsx_runtime125.jsx)(
    chakra.div,
    {
      ...panelsProps,
      width: "100%",
      ref,
      className: cx("chakra-tabs__tab-panels", props.className),
      __css: styles.tabpanels
    }
  );
});
TabPanels.displayName = "TabPanels";

// node_modules/@chakra-ui/tabs/dist/chunk-IAXSQ4X2.mjs
var import_jsx_runtime126 = __toESM(require_jsx_runtime(), 1);
var Tab = forwardRef(function Tab2(props, ref) {
  const styles = useTabsStyles();
  const tabProps = useTab({ ...props, ref });
  const tabStyles = {
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles.tab
  };
  return (0, import_jsx_runtime126.jsx)(
    chakra.button,
    {
      ...tabProps,
      className: cx("chakra-tabs__tab", props.className),
      __css: tabStyles
    }
  );
});
Tab.displayName = "Tab";

// node_modules/@chakra-ui/tag/dist/chunk-RPO2WXNL.mjs
var import_jsx_runtime127 = __toESM(require_jsx_runtime(), 1);
var [TagStylesProvider, useTagStyles] = createContext({
  name: `TagStylesContext`,
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
});
var Tag = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Tag", props);
  const ownProps = omitThemingProps(props);
  const containerStyles = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...styles.container
  };
  return (0, import_jsx_runtime127.jsx)(TagStylesProvider, { value: styles, children: (0, import_jsx_runtime127.jsx)(chakra.span, { ref, ...ownProps, __css: containerStyles }) });
});
Tag.displayName = "Tag";
var TagLabel = forwardRef((props, ref) => {
  const styles = useTagStyles();
  return (0, import_jsx_runtime127.jsx)(chakra.span, { ref, noOfLines: 1, ...props, __css: styles.label });
});
TagLabel.displayName = "TagLabel";
var TagLeftIcon = forwardRef((props, ref) => (0, import_jsx_runtime127.jsx)(Icon, { ref, verticalAlign: "top", marginEnd: "0.5rem", ...props }));
TagLeftIcon.displayName = "TagLeftIcon";
var TagRightIcon = forwardRef((props, ref) => (0, import_jsx_runtime127.jsx)(Icon, { ref, verticalAlign: "top", marginStart: "0.5rem", ...props }));
TagRightIcon.displayName = "TagRightIcon";
var TagCloseIcon = (props) => (0, import_jsx_runtime127.jsx)(Icon, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...props, children: (0, import_jsx_runtime127.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
TagCloseIcon.displayName = "TagCloseIcon";
var TagCloseButton = forwardRef(
  (props, ref) => {
    const { isDisabled, children, ...rest } = props;
    const styles = useTagStyles();
    const btnStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...styles.closeButton
    };
    return (0, import_jsx_runtime127.jsx)(
      chakra.button,
      {
        ref,
        "aria-label": "close",
        ...rest,
        type: "button",
        disabled: isDisabled,
        __css: btnStyles,
        children: children || (0, import_jsx_runtime127.jsx)(TagCloseIcon, {})
      }
    );
  }
);
TagCloseButton.displayName = "TagCloseButton";

// node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs
var import_jsx_runtime128 = __toESM(require_jsx_runtime(), 1);
function omit2(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var omitted = ["h", "minH", "height", "minHeight"];
var Textarea = forwardRef((props, ref) => {
  const styles = useStyleConfig("Textarea", props);
  const { className, rows, ...rest } = omitThemingProps(props);
  const textareaProps = useFormControl(rest);
  const textareaStyles = rows ? omit2(styles, omitted) : styles;
  return (0, import_jsx_runtime128.jsx)(
    chakra.textarea,
    {
      ref,
      rows,
      ...textareaProps,
      className: cx("chakra-textarea", className),
      __css: textareaStyles
    }
  );
});
Textarea.displayName = "Textarea";

// node_modules/@chakra-ui/tooltip/dist/chunk-XRZH7COS.mjs
var scale = {
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" }
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { easings: "easeOut", duration: 0.2 },
      scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] }
    }
  }
};

// node_modules/@chakra-ui/tooltip/dist/chunk-P7BNLW77.mjs
var import_react100 = __toESM(require_react(), 1);
var getDoc = (ref) => {
  var _a2;
  return ((_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) || document;
};
var getWin = (ref) => {
  var _a2, _b;
  return ((_b = (_a2 = ref.current) == null ? void 0 : _a2.ownerDocument) == null ? void 0 : _b.defaultView) || window;
};
function useTooltip(props = {}) {
  const {
    openDelay = 0,
    closeDelay = 0,
    closeOnClick = true,
    closeOnMouseDown,
    closeOnScroll,
    closeOnPointerDown = closeOnMouseDown,
    closeOnEsc = true,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    placement,
    id,
    isOpen: isOpenProp,
    defaultIsOpen,
    arrowSize = 10,
    arrowShadowColor,
    arrowPadding,
    modifiers,
    isDisabled,
    gutter,
    offset,
    direction,
    ...htmlProps
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp
  });
  const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } = usePopper({
    enabled: isOpen,
    placement,
    arrowPadding,
    modifiers,
    gutter,
    offset,
    direction
  });
  const uuid = (0, import_react100.useId)();
  const uid = id != null ? id : uuid;
  const tooltipId = `tooltip-${uid}`;
  const ref = (0, import_react100.useRef)(null);
  const enterTimeout = (0, import_react100.useRef)();
  const clearEnterTimeout = (0, import_react100.useCallback)(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = void 0;
    }
  }, []);
  const exitTimeout = (0, import_react100.useRef)();
  const clearExitTimeout = (0, import_react100.useCallback)(() => {
    if (exitTimeout.current) {
      clearTimeout(exitTimeout.current);
      exitTimeout.current = void 0;
    }
  }, []);
  const closeNow = (0, import_react100.useCallback)(() => {
    clearExitTimeout();
    onClose();
  }, [onClose, clearExitTimeout]);
  const dispatchCloseEvent = useCloseEvent(ref, closeNow);
  const openWithDelay = (0, import_react100.useCallback)(() => {
    if (!isDisabled && !enterTimeout.current) {
      if (isOpen)
        dispatchCloseEvent();
      const win = getWin(ref);
      enterTimeout.current = win.setTimeout(onOpen, openDelay);
    }
  }, [dispatchCloseEvent, isDisabled, isOpen, onOpen, openDelay]);
  const closeWithDelay = (0, import_react100.useCallback)(() => {
    clearEnterTimeout();
    const win = getWin(ref);
    exitTimeout.current = win.setTimeout(closeNow, closeDelay);
  }, [closeDelay, closeNow, clearEnterTimeout]);
  const onClick = (0, import_react100.useCallback)(() => {
    if (isOpen && closeOnClick) {
      closeWithDelay();
    }
  }, [closeOnClick, closeWithDelay, isOpen]);
  const onPointerDown = (0, import_react100.useCallback)(() => {
    if (isOpen && closeOnPointerDown) {
      closeWithDelay();
    }
  }, [closeOnPointerDown, closeWithDelay, isOpen]);
  const onKeyDown = (0, import_react100.useCallback)(
    (event) => {
      if (isOpen && event.key === "Escape") {
        closeWithDelay();
      }
    },
    [isOpen, closeWithDelay]
  );
  useEventListener(
    () => getDoc(ref),
    "keydown",
    closeOnEsc ? onKeyDown : void 0
  );
  useEventListener(
    () => {
      if (!closeOnScroll)
        return null;
      const node2 = ref.current;
      if (!node2)
        return null;
      const scrollParent = getScrollParent(node2);
      return scrollParent.localName === "body" ? getWin(ref) : scrollParent;
    },
    "scroll",
    () => {
      if (isOpen && closeOnScroll) {
        closeNow();
      }
    },
    { passive: true, capture: true }
  );
  (0, import_react100.useEffect)(() => {
    if (!isDisabled)
      return;
    clearEnterTimeout();
    if (isOpen)
      onClose();
  }, [isDisabled, isOpen, onClose, clearEnterTimeout]);
  (0, import_react100.useEffect)(() => {
    return () => {
      clearEnterTimeout();
      clearExitTimeout();
    };
  }, [clearEnterTimeout, clearExitTimeout]);
  useEventListener(() => ref.current, "pointerleave", closeWithDelay);
  const getTriggerProps = (0, import_react100.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs(ref, _ref2, referenceRef),
        onPointerEnter: callAllHandlers(props2.onPointerEnter, (e) => {
          if (e.pointerType === "touch")
            return;
          openWithDelay();
        }),
        onClick: callAllHandlers(props2.onClick, onClick),
        onPointerDown: callAllHandlers(props2.onPointerDown, onPointerDown),
        onFocus: callAllHandlers(props2.onFocus, openWithDelay),
        onBlur: callAllHandlers(props2.onBlur, closeWithDelay),
        "aria-describedby": isOpen ? tooltipId : void 0
      };
      return triggerProps;
    },
    [
      openWithDelay,
      closeWithDelay,
      onPointerDown,
      isOpen,
      tooltipId,
      onClick,
      referenceRef
    ]
  );
  const getTooltipPositionerProps = (0, import_react100.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          ...props2.style,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        }
      },
      forwardedRef
    ),
    [getPopperProps, arrowSize, arrowShadowColor]
  );
  const getTooltipProps = (0, import_react100.useCallback)(
    (props2 = {}, ref2 = null) => {
      const styles = {
        ...props2.style,
        position: "relative",
        transformOrigin: cssVars.transformOrigin.varRef
      };
      return {
        ref: ref2,
        ...htmlProps,
        ...props2,
        id: tooltipId,
        role: "tooltip",
        style: styles
      };
    },
    [htmlProps, tooltipId]
  );
  return {
    isOpen,
    show: openWithDelay,
    hide: closeWithDelay,
    getTriggerProps,
    getTooltipProps,
    getTooltipPositionerProps,
    getArrowProps,
    getArrowInnerProps
  };
}
var closeEventName = "chakra-ui:close-tooltip";
function useCloseEvent(ref, close) {
  (0, import_react100.useEffect)(() => {
    const doc = getDoc(ref);
    doc.addEventListener(closeEventName, close);
    return () => doc.removeEventListener(closeEventName, close);
  }, [close, ref]);
  return () => {
    const doc = getDoc(ref);
    const win = getWin(ref);
    doc.dispatchEvent(new win.CustomEvent(closeEventName));
  };
}

// node_modules/@chakra-ui/tooltip/dist/chunk-TK6VMDNP.mjs
var import_react101 = __toESM(require_react(), 1);
var import_jsx_runtime129 = __toESM(require_jsx_runtime(), 1);
function omit3(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
function pick(object2, keysToPick) {
  const result = {};
  for (const key of keysToPick) {
    if (key in object2) {
      result[key] = object2[key];
    }
  }
  return result;
}
var MotionDiv3 = chakra(motion.div);
var Tooltip = forwardRef((props, ref) => {
  var _a2, _b;
  const styles = useStyleConfig("Tooltip", props);
  const ownProps = omitThemingProps(props);
  const theme2 = useTheme();
  const {
    children,
    label,
    shouldWrapChildren,
    "aria-label": ariaLabel,
    hasArrow,
    bg,
    portalProps,
    background: background2,
    backgroundColor,
    bgColor,
    motionProps,
    ...rest
  } = ownProps;
  const userDefinedBg = (_b = (_a2 = background2 != null ? background2 : backgroundColor) != null ? _a2 : bg) != null ? _b : bgColor;
  if (userDefinedBg) {
    styles.bg = userDefinedBg;
    const bgVar = getCSSVar(theme2, "colors", userDefinedBg);
    styles[cssVars.arrowBg.var] = bgVar;
  }
  const tooltip = useTooltip({ ...rest, direction: theme2.direction });
  const shouldWrap = typeof children === "string" || shouldWrapChildren;
  let trigger2;
  if (shouldWrap) {
    trigger2 = (0, import_jsx_runtime129.jsx)(
      chakra.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...tooltip.getTriggerProps(),
        children
      }
    );
  } else {
    const child = import_react101.Children.only(children);
    trigger2 = (0, import_react101.cloneElement)(
      child,
      tooltip.getTriggerProps(child.props, child.ref)
    );
  }
  const hasAriaLabel = !!ariaLabel;
  const _tooltipProps = tooltip.getTooltipProps({}, ref);
  const tooltipProps = hasAriaLabel ? omit3(_tooltipProps, ["role", "id"]) : _tooltipProps;
  const srOnlyProps = pick(_tooltipProps, ["role", "id"]);
  if (!label) {
    return (0, import_jsx_runtime129.jsx)(import_jsx_runtime129.Fragment, { children });
  }
  return (0, import_jsx_runtime129.jsxs)(import_jsx_runtime129.Fragment, { children: [
    trigger2,
    (0, import_jsx_runtime129.jsx)(AnimatePresence, { children: tooltip.isOpen && (0, import_jsx_runtime129.jsx)(Portal, { ...portalProps, children: (0, import_jsx_runtime129.jsx)(
      chakra.div,
      {
        ...tooltip.getTooltipPositionerProps(),
        __css: {
          zIndex: styles.zIndex,
          pointerEvents: "none"
        },
        children: (0, import_jsx_runtime129.jsxs)(
          MotionDiv3,
          {
            variants: scale,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...motionProps,
            ...tooltipProps,
            __css: styles,
            children: [
              label,
              hasAriaLabel && (0, import_jsx_runtime129.jsx)(chakra.span, { srOnly: true, ...srOnlyProps, children: ariaLabel }),
              hasArrow && (0, import_jsx_runtime129.jsx)(
                chakra.div,
                {
                  "data-popper-arrow": true,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: (0, import_jsx_runtime129.jsx)(
                    chakra.div,
                    {
                      "data-popper-arrow-inner": true,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: styles.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] });
});
Tooltip.displayName = "Tooltip";
export {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProvider,
  Alert,
  AlertDescription,
  AlertDialog,
  ModalBody as AlertDialogBody,
  ModalCloseButton as AlertDialogCloseButton,
  AlertDialogContent,
  ModalFooter as AlertDialogFooter,
  ModalHeader as AlertDialogHeader,
  ModalOverlay as AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonSpinner,
  CSSPolyfill,
  CSSReset,
  CSSVars,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  ChakraBaseProvider,
  ChakraProvider2 as ChakraProvider,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  CloseButton,
  Code,
  Collapse,
  ColorModeContext,
  ColorModeProvider,
  ColorModeScript,
  Container,
  ControlBox,
  DarkMode,
  Divider,
  Drawer,
  ModalBody as DrawerBody,
  ModalCloseButton as DrawerCloseButton,
  DrawerContent,
  ModalFooter as DrawerFooter,
  ModalHeader as DrawerHeader,
  ModalOverlay as DrawerOverlay,
  TRANSITION_EASINGS as EASINGS,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  EnvironmentProvider,
  Fade,
  Flex,
  FocusLock2 as FocusLock,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GenericAvatarIcon,
  GlobalStyle,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  Highlight,
  Icon,
  IconButton,
  Image,
  Img,
  Indicator,
  Input,
  InputAddon,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Kbd,
  LightMode,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  Mark,
  Menu,
  MenuButton,
  MenuCommand,
  MenuDescendantsProvider,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  MenuProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContextProvider,
  ModalFocusScope,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  OrderedList,
  PinInput,
  PinInputDescendantsProvider,
  PinInputField,
  PinInputProvider,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  PortalManager,
  Progress,
  ProgressLabel,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderProvider,
  RangeSliderThumb,
  RangeSliderTrack,
  RequiredIndicator,
  ScaleFade,
  Select,
  SelectField,
  Show,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  SkipNavContent,
  SkipNavLink,
  Slide,
  SlideFade,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderProvider,
  SliderThumb,
  SliderTrack,
  Spacer,
  Spinner,
  Square,
  Stack,
  StackDivider,
  StackItem,
  Stat,
  StatArrow,
  StatDownArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatUpArrow,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepIndicatorContent,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  StylesProvider,
  Switch,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  TabsDescendantsProvider,
  TabsProvider,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  ThemeProvider,
  Toast,
  ToastOptionProvider,
  ToastProvider,
  Tooltip,
  Tr,
  UnorderedList,
  VStack,
  VisuallyHidden,
  VisuallyHiddenInput,
  Wrap,
  WrapItem,
  addPrefix,
  assignRef2 as assignRef,
  background,
  baseTheme,
  border,
  calc,
  chakra,
  color,
  cookieStorageManager,
  cookieStorageManagerSSR,
  createCookieStorageManager,
  createIcon,
  createLocalStorageManager,
  createMultiStyleConfigHelpers,
  createRenderToast,
  createStandaloneToast,
  createStylesContext,
  createToastFn,
  css,
  cssVar,
  defineCssVars,
  defineStyle,
  defineStyleConfig,
  effect,
  extendBaseTheme,
  extendTheme,
  fadeConfig,
  filter,
  flattenTokens,
  flexbox,
  forwardRef,
  getCSSVar,
  getCss,
  getScriptSrc,
  getSlideTransition,
  getToastPlacement,
  getToken,
  grid,
  interactivity,
  isChakraTheme,
  isStyleProp,
  keyframes,
  layout,
  layoutPropNames,
  list,
  localStorageManager,
  mergeThemeOverride,
  omitThemingProps,
  others,
  cssVars as popperCSSVars,
  position,
  propNames,
  pseudoPropNames,
  pseudoSelectors,
  requiredChakraThemeKeys,
  resolveStyleConfig,
  ring,
  scaleFadeConfig,
  scroll,
  shouldForwardProp,
  slideFadeConfig,
  space,
  styled,
  systemProps,
  textDecoration,
  theme,
  toCSSObject,
  toCSSVar,
  toVarDefinition,
  toVarReference,
  tokenToCSSVar,
  transform,
  transition,
  typography,
  useAccordion,
  useAccordionContext,
  useAccordionItem,
  useAccordionItemState,
  useAccordionStyles,
  useAlertStyles,
  useAnimationState2 as useAnimationState,
  useAvatarStyles,
  useBoolean,
  useBreadcrumbStyles,
  useBreakpoint,
  useBreakpointValue,
  useButtonGroup,
  useCallbackRef3 as useCallbackRef,
  useCardStyles,
  useChakra,
  useCheckbox,
  useCheckboxGroup,
  useClipboard,
  useColorMode,
  useColorModePreference,
  useColorModeValue,
  useComponentStyles__unstable,
  useConst,
  useControllableProp,
  useControllableState2 as useControllableState,
  useCounter,
  useDimensions,
  useDisclosure2 as useDisclosure,
  useDrawerContext,
  useEditable,
  useEditableContext,
  useEditableControls,
  useEditableState,
  useEditableStyles,
  useEnvironment,
  useEventListener2 as useEventListener,
  useEventListenerMap,
  useFocusEffect,
  useFocusOnHide2 as useFocusOnHide,
  useFocusOnPointerDown2 as useFocusOnPointerDown,
  useFocusOnShow2 as useFocusOnShow,
  useForceUpdate,
  useFormControl,
  useFormControlContext,
  useFormControlProps,
  useFormControlStyles,
  useFormErrorStyles,
  useHighlight,
  useId3 as useId,
  useIds,
  useImage,
  useInputGroupStyles,
  useInterval,
  useLatestRef,
  useListStyles,
  useMediaQuery,
  useMenu,
  useMenuButton,
  useMenuContext,
  useMenuDescendant,
  useMenuDescendants,
  useMenuDescendantsContext,
  useMenuItem,
  useMenuList,
  useMenuOption,
  useMenuOptionGroup,
  useMenuPositioner,
  useMenuState,
  useMenuStyles,
  useMergeRefs3 as useMergeRefs,
  useModal,
  useModalContext,
  useModalManager,
  useModalStyles,
  useMouseDownRef,
  useMultiStyleConfig,
  useNumberInput,
  useNumberInputStyles,
  useOptionalPart,
  useOutsideClick,
  usePanGesture,
  usePinInput,
  usePinInputContext,
  usePinInputField,
  usePointerEvent,
  usePopover,
  usePopoverContext,
  usePopoverStyles,
  usePopper,
  usePortalManager,
  usePrefersReducedMotion,
  usePrevious,
  useProgressStyles,
  useQuery,
  useRadio,
  useRadioGroup,
  useRadioGroupContext,
  useRangeSlider,
  useRangeSliderContext,
  useRangeSliderStyles,
  useSafeLayoutEffect2 as useSafeLayoutEffect,
  useShortcut,
  useSlider,
  useSliderContext,
  useSliderStyles,
  useStatStyles,
  useStepContext,
  useStepperStyles,
  useSteps,
  useStyleConfig,
  useStyles,
  useTab,
  useTabIndicator,
  useTabList,
  useTabPanel,
  useTabPanels,
  useTableStyles,
  useTabs,
  useTabsContext,
  useTabsDescendant,
  useTabsDescendants,
  useTabsDescendantsContext,
  useTabsStyles,
  useTagStyles,
  useTheme,
  useTimeout2 as useTimeout,
  useToast,
  useToken,
  useTooltip,
  useUnmountEffect,
  useUpdateEffect2 as useUpdateEffect,
  useWhyDidYouUpdate,
  visuallyHiddenStyle,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
  withDelay
};
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=@chakra-ui_react.js.map
