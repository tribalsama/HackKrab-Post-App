import {
  chakra,
  forwardRef
} from "./chunk-3Q5YLUQ7.js";
import {
  require_jsx_runtime,
  useSafeLayoutEffect
} from "./chunk-VSHG74IK.js";
import {
  require_react
} from "./chunk-4JI2AD7N.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@chakra-ui/image/dist/chunk-X3PS6RUF.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NativeImage = forwardRef(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return (0, import_jsx_runtime.jsx)("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";

// node_modules/@chakra-ui/image/dist/chunk-SPIKMR6I.mjs
var import_react = __toESM(require_react(), 1);
function useImage(props) {
  const {
    loading,
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes,
    ignoreFallback
  } = props;
  const [status, setStatus] = (0, import_react.useState)("pending");
  (0, import_react.useEffect)(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  const imageRef = (0, import_react.useRef)();
  const load = (0, import_react.useCallback)(() => {
    if (!src)
      return;
    flush();
    const img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes)
      img.sizes = sizes;
    if (loading)
      img.loading = loading;
    img.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = (error) => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  useSafeLayoutEffect(() => {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}
var shouldShowFallbackImage = (status, fallbackStrategy) => status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";

// node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function omit(object, keysToOmit = []) {
  const clone = Object.assign({}, object);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var Image2 = forwardRef(function Image22(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props;
  const providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  const shouldIgnoreFallbackImage = loading != null || // use can opt out of fallback image
  ignoreFallback || // if the user doesn't provide any kind of fallback we should ignore it
  !providedFallback;
  const status = useImage({
    ...props,
    crossOrigin,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return (0, import_jsx_runtime2.jsx)(
      chakra.img,
      {
        as: NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return (0, import_jsx_runtime2.jsx)(
    chakra.img,
    {
      as: NativeImage,
      src,
      srcSet,
      crossOrigin,
      loading,
      referrerPolicy,
      className: "chakra-image",
      ...shared
    }
  );
});
Image2.displayName = "Image";

// node_modules/@chakra-ui/image/dist/chunk-YF5BD7DN.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Img = forwardRef((props, ref) => (0, import_jsx_runtime3.jsx)(chakra.img, { ref, as: NativeImage, className: "chakra-image", ...props }));

export {
  useImage,
  Image2 as Image,
  Img
};
//# sourceMappingURL=chunk-GZQHLS3B.js.map
