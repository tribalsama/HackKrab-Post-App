import {
  useImage
} from "./chunk-GZQHLS3B.js";
import {
  getValidChildren
} from "./chunk-EK3S4YIL.js";
import {
  chakra,
  forwardRef,
  useMultiStyleConfig
} from "./chunk-3Q5YLUQ7.js";
import {
  createContext
} from "./chunk-PPUG7X4A.js";
import {
  require_jsx_runtime
} from "./chunk-VSHG74IK.js";
import {
  callAllHandlers,
  cx,
  dataAttr,
  omitThemingProps
} from "./chunk-BHDLHQY3.js";
import {
  require_react
} from "./chunk-4JI2AD7N.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@chakra-ui/avatar/dist/chunk-RD3LQCU3.mjs
var [AvatarStylesProvider, useAvatarStyles] = createContext({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>"
});

// node_modules/@chakra-ui/avatar/dist/chunk-BVSSY3BL.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var placementMap = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)"
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)"
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)"
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)"
  }
};
var AvatarBadge = forwardRef(
  function AvatarBadge2(props, ref) {
    const { placement = "bottom-end", className, ...rest } = props;
    const styles = useAvatarStyles();
    const placementStyles = placementMap[placement];
    const badgeStyles = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...placementStyles,
      ...styles.badge
    };
    return (0, import_jsx_runtime.jsx)(
      chakra.div,
      {
        ref,
        ...rest,
        className: cx("chakra-avatar__badge", className),
        __css: badgeStyles
      }
    );
  }
);
AvatarBadge.displayName = "AvatarBadge";

// node_modules/@chakra-ui/avatar/dist/chunk-O25PJXSD.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function initials(name) {
  var _a;
  const names = name.split(" ");
  const firstName = (_a = names[0]) != null ? _a : "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function AvatarName(props) {
  const { name, getInitials, ...rest } = props;
  const styles = useAvatarStyles();
  return (0, import_jsx_runtime2.jsx)(chakra.div, { role: "img", "aria-label": name, ...rest, __css: styles.label, children: name ? getInitials == null ? void 0 : getInitials(name) : null });
}
AvatarName.displayName = "AvatarName";

// node_modules/@chakra-ui/avatar/dist/chunk-CXYPMOCL.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var GenericAvatarIcon = (props) => (0, import_jsx_runtime3.jsxs)(
  chakra.svg,
  {
    viewBox: "0 0 128 128",
    color: "#fff",
    width: "100%",
    height: "100%",
    className: "chakra-avatar__svg",
    ...props,
    children: [
      (0, import_jsx_runtime3.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
        }
      ),
      (0, import_jsx_runtime3.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
        }
      )
    ]
  }
);

// node_modules/@chakra-ui/avatar/dist/chunk-V2ATFO44.mjs
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function AvatarImage(props) {
  const {
    src,
    srcSet,
    onError,
    onLoad,
    getInitials,
    name,
    borderRadius,
    loading,
    iconLabel,
    icon = (0, import_jsx_runtime4.jsx)(GenericAvatarIcon, {}),
    ignoreFallback,
    referrerPolicy,
    crossOrigin
  } = props;
  const status = useImage({ src, onError, crossOrigin, ignoreFallback });
  const hasLoaded = status === "loaded";
  const showFallback = !src || !hasLoaded;
  if (showFallback) {
    return name ? (0, import_jsx_runtime4.jsx)(
      AvatarName,
      {
        className: "chakra-avatar__initials",
        getInitials,
        name
      }
    ) : (0, import_react.cloneElement)(icon, {
      role: "img",
      "aria-label": iconLabel
    });
  }
  return (0, import_jsx_runtime4.jsx)(
    chakra.img,
    {
      src,
      srcSet,
      alt: name,
      onLoad,
      referrerPolicy,
      crossOrigin: crossOrigin != null ? crossOrigin : void 0,
      className: "chakra-avatar__img",
      loading,
      __css: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius
      }
    }
  );
}
AvatarImage.displayName = "AvatarImage";

// node_modules/@chakra-ui/avatar/dist/chunk-V7PAE35Z.mjs
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var baseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
};
var Avatar = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Avatar", props);
  const [isLoaded, setIsLoaded] = (0, import_react2.useState)(false);
  const {
    src,
    srcSet,
    name,
    showBorder,
    borderRadius = "full",
    onError,
    onLoad: onLoadProp,
    getInitials = initials,
    icon = (0, import_jsx_runtime5.jsx)(GenericAvatarIcon, {}),
    iconLabel = " avatar",
    loading,
    children,
    borderColor,
    ignoreFallback,
    crossOrigin,
    referrerPolicy,
    ...rest
  } = omitThemingProps(props);
  const avatarStyles = {
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0,
    ...baseStyle,
    ...styles.container
  };
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return (0, import_jsx_runtime5.jsx)(
    chakra.span,
    {
      ref,
      ...rest,
      className: cx("chakra-avatar", props.className),
      "data-loaded": dataAttr(isLoaded),
      __css: avatarStyles,
      children: (0, import_jsx_runtime5.jsxs)(AvatarStylesProvider, { value: styles, children: [
        (0, import_jsx_runtime5.jsx)(
          AvatarImage,
          {
            src,
            srcSet,
            loading,
            onLoad: callAllHandlers(onLoadProp, () => {
              setIsLoaded(true);
            }),
            onError,
            getInitials,
            name,
            borderRadius,
            icon,
            iconLabel,
            ignoreFallback,
            crossOrigin,
            referrerPolicy
          }
        ),
        children
      ] })
    }
  );
});
Avatar.displayName = "Avatar";

// node_modules/@chakra-ui/avatar/dist/chunk-A4TTV745.mjs
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function compact(object) {
  const clone = Object.assign({}, object);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
var AvatarGroup = forwardRef(
  function AvatarGroup2(props, ref) {
    const styles = useMultiStyleConfig("Avatar", props);
    const {
      children,
      borderColor,
      max,
      spacing = "-0.75rem",
      borderRadius = "full",
      ...rest
    } = omitThemingProps(props);
    const validChildren = getValidChildren(children);
    const childrenWithinMax = max != null ? validChildren.slice(0, max) : validChildren;
    const excess = max != null ? validChildren.length - max : 0;
    const reversedChildren = childrenWithinMax.reverse();
    const clones = reversedChildren.map((child, index) => {
      var _a;
      const isFirstAvatar = index === 0;
      const childProps = {
        marginEnd: isFirstAvatar ? 0 : spacing,
        size: props.size,
        borderColor: (_a = child.props.borderColor) != null ? _a : borderColor,
        showBorder: true
      };
      return (0, import_react3.cloneElement)(child, compact(childProps));
    });
    const groupStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...styles.group
    };
    const excessStyles = {
      borderRadius,
      marginStart: spacing,
      ...baseStyle,
      ...styles.excessLabel
    };
    return (0, import_jsx_runtime6.jsxs)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        ...rest,
        className: cx("chakra-avatar__group", props.className),
        children: [
          excess > 0 && (0, import_jsx_runtime6.jsx)(chakra.span, { className: "chakra-avatar__excess", __css: excessStyles, children: `+${excess}` }),
          clones
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

export {
  useAvatarStyles,
  AvatarBadge,
  GenericAvatarIcon,
  Avatar,
  AvatarGroup
};
//# sourceMappingURL=chunk-BGNI62M7.js.map
