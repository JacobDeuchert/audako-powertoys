import { i as is_array, g as get_prototype_of, o as object_prototype, p as push, a as prop, S as SmuiElement, b as getContext, c as comment, f as first_child, d as component, e as bind_this, s as spread_props, h as snippet, n as noop, j as append, r as rest_props, k as get, u as user_derived, l as pop, m as classMap, q as proxy, t as user_effect, v as setContext, w as from_html, x as sibling, y as if_block, z as dispatch, R as Ripple, M as MDCFoundation, A as cssClasses$2, B as state, C as onMount, D as set, E as onDestroy, F as event, $ as $document, G as attribute_effect, H as child, I as action, J as useActions, K as ponyfill, L as append_styles, N as IconButton, O as text, P as List, Q as Item, T as Text, U as Graphic, V as Separator, W as template_effect, X as set_class, Y as set_text, Z as delegate, _ as CommonIcon, a0 as Input, a1 as each, a2 as Cn, a3 as index, a4 as mount } from "./Separator.ChY9n2VM.js";
import { S as StorageUtils } from "./storage-utils.D_xOaWSl.js";
import { _ as __extends, a as __assign, b as __values } from "./map.BLuQZHiU.js";
const empty = [];
function snapshot(value, skip_warning = false, no_tojson = false) {
  return clone(value, /* @__PURE__ */ new Map(), "", empty, null, no_tojson);
}
function clone(value, cloned, path, paths, original = null, no_tojson = false) {
  if (typeof value === "object" && value !== null) {
    var unwrapped = cloned.get(value);
    if (unwrapped !== void 0) return unwrapped;
    if (value instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(value)
    );
    if (value instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(value)
    );
    if (is_array(value)) {
      var copy = (
        /** @type {Snapshot<any>} */
        Array(value.length)
      );
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var i = 0; i < value.length; i += 1) {
        var element = value[i];
        if (i in value) {
          copy[i] = clone(element, cloned, path, paths, null, no_tojson);
        }
      }
      return copy;
    }
    if (get_prototype_of(value) === object_prototype) {
      copy = {};
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var key in value) {
        copy[key] = clone(
          // @ts-expect-error
          value[key],
          cloned,
          path,
          paths,
          null,
          no_tojson
        );
      }
      return copy;
    }
    if (value instanceof Date) {
      return (
        /** @type {Snapshot<T>} */
        structuredClone(value)
      );
    }
    if (typeof /** @type {T & { toJSON?: any } } */
    value.toJSON === "function" && !no_tojson) {
      return clone(
        /** @type {T & { toJSON(): any } } */
        value.toJSON(),
        cloned,
        path,
        paths,
        // Associate the instance with the toJSON clone
        value
      );
    }
  }
  if (value instanceof EventTarget) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(value)
    );
  } catch (e) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
}
function CommonLabel($$anchor, $$props) {
  push($$props, true);
  let use = prop($$props, "use", 19, () => []), className = prop($$props, "class", 3, ""), MyComponent = prop($$props, "component", 3, SmuiElement), tag = prop($$props, "tag", 3, "span"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]);
  let element;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  var $$exports = { getElement };
  var fragment = comment();
  var node = first_child(fragment);
  {
    let $0 = user_derived(() => classMap({
      "mdc-button__label": context === "button",
      "mdc-fab__label": context === "fab",
      "mdc-tab__text-label": context === "tab",
      "mdc-image-list__label": context === "image-list",
      "mdc-snackbar__label": context === "snackbar",
      "mdc-banner__text": context === "banner",
      "mdc-segmented-button__label": context === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
      "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell",
      [className()]: true
    }));
    component(node, MyComponent, ($$anchor2, MyComponent_1) => {
      bind_this(
        MyComponent_1($$anchor2, spread_props(
          {
            get tag() {
              return tag();
            },
            get use() {
              return use();
            },
            get class() {
              return get($0);
            }
          },
          () => context === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return tabindex;
            }
          },
          () => restProps,
          {
            children: ($$anchor3, $$slotProps) => {
              var fragment_1 = comment();
              var node_1 = first_child(fragment_1);
              snippet(node_1, () => $$props.children ?? noop);
              append($$anchor3, fragment_1);
            },
            $$slots: { default: true }
          }
        )),
        ($$value) => element = $$value,
        () => element
      );
    });
  }
  append($$anchor, fragment);
  return pop($$exports);
}
var root_2 = from_html(`<div class="mdc-button__touch"></div>`);
var root_1 = from_html(`<div class="mdc-button__ripple"></div> <!><!>`, 1);
function Button($$anchor, $$props) {
  push($$props, true);
  let use = prop($$props, "use", 19, () => []), className = prop($$props, "class", 3, ""), style = prop($$props, "style", 3, ""), ripple = prop($$props, "ripple", 3, true), color = prop($$props, "color", 3, "primary"), variant = prop($$props, "variant", 3, "text"), touch = prop($$props, "touch", 3, false), action2 = prop($$props, "action", 3, "close"), defaultAction = prop($$props, "defaultAction", 3, false), secondary = prop($$props, "secondary", 3, false), MyComponent = prop($$props, "component", 3, SmuiElement), tag = prop($$props, "tag", 19, () => $$props.href == null ? "button" : "a"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "children"
  ]);
  let element;
  let internalClasses = proxy({});
  let internalStyles = proxy({});
  let context = getContext("SMUI:button:context");
  const actionProp = user_derived(() => context === "dialog:action" && action2() != null ? { "data-mdc-dialog-action": action2() } : { action: action2() });
  const defaultProp = user_derived(() => context === "dialog:action" && defaultAction() ? { "data-mdc-dialog-button-default": "" } : {});
  const secondaryProp = user_derived(() => context === "banner" ? {} : { secondary: secondary() });
  let previousDisabled = $$props.disabled;
  user_effect(() => {
    if (previousDisabled !== $$props.disabled) {
      if (element) {
        const el = getElement();
        if ("blur" in el) {
          el.blur();
        }
      }
      previousDisabled = restProps.disabled;
    }
  });
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function handleClick() {
    if (context === "banner") {
      dispatch(getElement(), secondary() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
    }
  }
  function getElement() {
    return element.getElement();
  }
  var $$exports = { getElement };
  var fragment = comment();
  var node = first_child(fragment);
  {
    let $0 = user_derived(() => [
      [
        Ripple,
        {
          ripple: ripple(),
          unbounded: false,
          color: color(),
          disabled: !!$$props.disabled,
          addClass,
          removeClass,
          addStyle
        }
      ],
      ...use()
    ]);
    let $1 = user_derived(() => classMap({
      "mdc-button": true,
      "mdc-button--raised": variant() === "raised",
      "mdc-button--unelevated": variant() === "unelevated",
      "mdc-button--outlined": variant() === "outlined",
      "smui-button--color-secondary": color() === "secondary",
      "mdc-button--touch": touch(),
      "mdc-card__action": context === "card:action",
      "mdc-card__action--button": context === "card:action",
      "mdc-dialog__button": context === "dialog:action",
      "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": context === "top-app-bar:action",
      "mdc-snackbar__action": context === "snackbar:actions",
      "mdc-banner__secondary-action": context === "banner" && secondary(),
      "mdc-banner__primary-action": context === "banner" && !secondary(),
      "mdc-tooltip__action": context === "tooltip:rich-actions",
      ...internalClasses,
      [className()]: true
    }));
    let $2 = user_derived(() => Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style()]).join(" "));
    component(node, MyComponent, ($$anchor2, MyComponent_1) => {
      bind_this(
        MyComponent_1($$anchor2, spread_props(
          {
            get tag() {
              return tag();
            },
            get use() {
              return get($0);
            },
            get class() {
              return get($1);
            },
            get style() {
              return get($2);
            }
          },
          () => get(actionProp),
          () => get(defaultProp),
          () => get(secondaryProp),
          {
            get href() {
              return $$props.href;
            }
          },
          () => restProps,
          {
            onclick: (e) => {
              handleClick();
              $$props.onclick?.(e);
            },
            children: ($$anchor3, $$slotProps) => {
              var fragment_1 = root_1();
              var node_1 = sibling(first_child(fragment_1), 2);
              snippet(node_1, () => $$props.children ?? noop);
              var node_2 = sibling(node_1);
              {
                var consequent = ($$anchor4) => {
                  var div = root_2();
                  append($$anchor4, div);
                };
                if_block(node_2, ($$render) => {
                  if (touch()) $$render(consequent);
                });
              }
              append($$anchor3, fragment_1);
            },
            $$slots: { default: true }
          }
        )),
        ($$value) => element = $$value,
        () => element
      );
    });
  }
  append($$anchor, fragment);
  return pop($$exports);
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
};
var strings$1 = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
};
var numbers$1 = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
};
var CornerBit;
(function(CornerBit2) {
  CornerBit2[CornerBit2["BOTTOM"] = 1] = "BOTTOM";
  CornerBit2[CornerBit2["CENTER"] = 2] = "CENTER";
  CornerBit2[CornerBit2["RIGHT"] = 4] = "RIGHT";
  CornerBit2[CornerBit2["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
var Corner;
(function(Corner2) {
  Corner2[Corner2["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner2[Corner2["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner2[Corner2["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner2[Corner2["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner2[Corner2["TOP_START"] = 8] = "TOP_START";
  Corner2[Corner2["TOP_END"] = 12] = "TOP_END";
  Corner2[Corner2["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner2[Corner2["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuSurfaceFoundation = (
  /** @class */
  (function(_super) {
    __extends(MDCMenuSurfaceFoundation2, _super);
    function MDCMenuSurfaceFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation2.defaultAdapter), adapter)) || this;
      _this.isSurfaceOpen = false;
      _this.isQuickOpen = false;
      _this.isHoistedElement = false;
      _this.isFixedPosition = false;
      _this.isHorizontallyCenteredOnViewport = false;
      _this.maxHeight = 0;
      _this.openBottomBias = 0;
      _this.openAnimationEndTimerId = 0;
      _this.closeAnimationEndTimerId = 0;
      _this.animationRequestId = 0;
      _this.anchorCorner = Corner.TOP_START;
      _this.originCorner = Corner.TOP_START;
      _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
      _this.position = { x: 0, y: 0 };
      return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation2, "cssClasses", {
      get: function() {
        return cssClasses$1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "strings", {
      get: function() {
        return strings$1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "numbers", {
      get: function() {
        return numbers$1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "Corner", {
      get: function() {
        return Corner;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          hasAnchor: function() {
            return false;
          },
          isElementInContainer: function() {
            return false;
          },
          isFocused: function() {
            return false;
          },
          isRtl: function() {
            return false;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
            return void 0;
          },
          setMaxHeight: function() {
            return void 0;
          },
          setTransformOrigin: function() {
            return void 0;
          },
          saveFocus: function() {
            return void 0;
          },
          restoreFocus: function() {
            return void 0;
          },
          notifyClose: function() {
            return void 0;
          },
          notifyClosing: function() {
            return void 0;
          },
          notifyOpen: function() {
            return void 0;
          },
          notifyOpening: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCMenuSurfaceFoundation2.prototype.init = function() {
      var _a = MDCMenuSurfaceFoundation2.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
      if (!this.adapter.hasClass(ROOT)) {
        throw new Error(ROOT + " class required in root element.");
      }
      if (this.adapter.hasClass(OPEN)) {
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId);
      clearTimeout(this.closeAnimationEndTimerId);
      cancelAnimationFrame(this.animationRequestId);
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorCorner = function(corner) {
      this.anchorCorner = corner;
    };
    MDCMenuSurfaceFoundation2.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorMargin = function(margin) {
      this.anchorMargin.top = margin.top || 0;
      this.anchorMargin.right = margin.right || 0;
      this.anchorMargin.bottom = margin.bottom || 0;
      this.anchorMargin.left = margin.left || 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setIsHoisted = function(isHoisted) {
      this.isHoistedElement = isHoisted;
    };
    MDCMenuSurfaceFoundation2.prototype.setFixedPosition = function(isFixedPosition) {
      this.isFixedPosition = isFixedPosition;
    };
    MDCMenuSurfaceFoundation2.prototype.isFixed = function() {
      return this.isFixedPosition;
    };
    MDCMenuSurfaceFoundation2.prototype.setAbsolutePosition = function(x, y) {
      this.position.x = this.isFinite(x) ? x : 0;
      this.position.y = this.isFinite(y) ? y : 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setIsHorizontallyCenteredOnViewport = function(isCentered) {
      this.isHorizontallyCenteredOnViewport = isCentered;
    };
    MDCMenuSurfaceFoundation2.prototype.setQuickOpen = function(quickOpen) {
      this.isQuickOpen = quickOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.setMaxHeight = function(maxHeight) {
      this.maxHeight = maxHeight;
    };
    MDCMenuSurfaceFoundation2.prototype.setOpenBottomBias = function(bias) {
      this.openBottomBias = bias;
    };
    MDCMenuSurfaceFoundation2.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.open = function() {
      var _this = this;
      if (this.isSurfaceOpen) {
        return;
      }
      this.adapter.notifyOpening();
      this.adapter.saveFocus();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = true;
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.dimensions = this.adapter.getInnerDimensions();
        this.autoposition();
        this.adapter.notifyOpen();
      } else {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
        this.animationRequestId = requestAnimationFrame(function() {
          _this.dimensions = _this.adapter.getInnerDimensions();
          _this.autoposition();
          _this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
          _this.openAnimationEndTimerId = setTimeout(function() {
            _this.openAnimationEndTimerId = 0;
            _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
            _this.adapter.notifyOpen();
          }, numbers$1.TRANSITION_OPEN_DURATION);
        });
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.close = function(skipRestoreFocus) {
      var _this = this;
      if (skipRestoreFocus === void 0) {
        skipRestoreFocus = false;
      }
      if (!this.isSurfaceOpen) {
        return;
      }
      this.adapter.notifyClosing();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
          this.maybeRestoreFocus();
        }
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        this.adapter.notifyClose();
        return;
      }
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
      requestAnimationFrame(function() {
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        _this.closeAnimationEndTimerId = setTimeout(function() {
          _this.closeAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
          _this.adapter.notifyClose();
        }, numbers$1.TRANSITION_CLOSE_DURATION);
      });
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.handleBodyClick = function(evt) {
      var el = evt.target;
      if (this.adapter.isElementInContainer(el)) {
        return;
      }
      this.close();
    };
    MDCMenuSurfaceFoundation2.prototype.handleKeydown = function(evt) {
      var keyCode = evt.keyCode, key = evt.key;
      var isEscape = key === "Escape" || keyCode === 27;
      if (isEscape) {
        this.close();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.autoposition = function() {
      var _a;
      this.measurements = this.getAutoLayoutmeasurements();
      var corner = this.getoriginCorner();
      var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
      var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? "bottom" : "top";
      var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? "right" : "left";
      var horizontalOffset = this.getHorizontalOriginOffset(corner);
      var verticalOffset = this.getVerticalOriginOffset(corner);
      var _b = this.measurements, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
      var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a);
      if (anchorSize.width / surfaceSize.width > numbers$1.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
        horizontalAlignment = "center";
      }
      if (this.isHoistedElement || this.isFixedPosition) {
        this.adjustPositionForHoistedElement(position);
      }
      this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
      this.adapter.setPosition(position);
      this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
      if (!this.hasBit(corner, CornerBit.BOTTOM)) {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      }
    };
    MDCMenuSurfaceFoundation2.prototype.getAutoLayoutmeasurements = function() {
      var anchorRect = this.adapter.getAnchorDimensions();
      var bodySize = this.adapter.getBodyDimensions();
      var viewportSize = this.adapter.getWindowDimensions();
      var windowScroll = this.adapter.getWindowScroll();
      if (!anchorRect) {
        anchorRect = {
          top: this.position.y,
          right: this.position.x,
          bottom: this.position.y,
          left: this.position.x,
          width: 0,
          height: 0
        };
      }
      return {
        anchorSize: anchorRect,
        bodySize,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: anchorRect.top,
          right: viewportSize.width - anchorRect.right,
          bottom: viewportSize.height - anchorRect.bottom,
          left: anchorRect.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize,
        windowScroll
      };
    };
    MDCMenuSurfaceFoundation2.prototype.getoriginCorner = function() {
      var corner = this.originCorner;
      var _a = this.measurements, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var availableTop;
      var availableBottom;
      if (isAnchoredToBottom) {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
      } else {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
      }
      var isAvailableBottom = availableBottom - surfaceSize.height > 0;
      if (!isAvailableBottom && availableTop > availableBottom + this.openBottomBias) {
        corner = this.setBit(corner, CornerBit.BOTTOM);
      }
      var isRtl = this.adapter.isRtl();
      var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
      var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
      var isAnchoredToRight = false;
      if (isRtl && isFlipRtl) {
        isAnchoredToRight = !hasRightBit;
      } else {
        isAnchoredToRight = hasRightBit;
      }
      var availableLeft;
      var availableRight;
      if (isAnchoredToRight) {
        availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
        availableRight = viewportDistance.right - this.anchorMargin.right;
      } else {
        availableLeft = viewportDistance.left + this.anchorMargin.left;
        availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
      }
      var isAvailableLeft = availableLeft - surfaceSize.width > 0;
      var isAvailableRight = availableRight - surfaceSize.width > 0;
      var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
      if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
        corner = this.unsetBit(corner, CornerBit.RIGHT);
      } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
        corner = this.setBit(corner, CornerBit.RIGHT);
      }
      return corner;
    };
    MDCMenuSurfaceFoundation2.prototype.getMenuSurfaceMaxHeight = function(corner) {
      if (this.maxHeight > 0) {
        return this.maxHeight;
      }
      var viewportDistance = this.measurements.viewportDistance;
      var maxHeight = 0;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
        if (!isBottomAnchored) {
          maxHeight += this.measurements.anchorSize.height;
        }
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
        if (isBottomAnchored) {
          maxHeight -= this.measurements.anchorSize.height;
        }
      }
      return maxHeight;
    };
    MDCMenuSurfaceFoundation2.prototype.getHorizontalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
      var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
        if (this.isHoistedElement || this.isFixedPosition) {
          return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
        }
        return rightOffset;
      }
      return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
    };
    MDCMenuSurfaceFoundation2.prototype.getVerticalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var y = 0;
      if (isBottomAligned) {
        y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
      } else {
        y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
      }
      return y;
    };
    MDCMenuSurfaceFoundation2.prototype.adjustPositionForHoistedElement = function(position) {
      var e_1, _a;
      var _b = this.measurements, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance, surfaceSize = _b.surfaceSize, viewportSize = _b.viewportSize;
      var props = Object.keys(position);
      try {
        for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
          var prop2 = props_1_1.value;
          var value = position[prop2] || 0;
          if (this.isHorizontallyCenteredOnViewport && (prop2 === "left" || prop2 === "right")) {
            position[prop2] = (viewportSize.width - surfaceSize.width) / 2;
            continue;
          }
          value += viewportDistance[prop2];
          if (!this.isFixedPosition) {
            if (prop2 === "top") {
              value += windowScroll.y;
            } else if (prop2 === "bottom") {
              value -= windowScroll.y;
            } else if (prop2 === "left") {
              value += windowScroll.x;
            } else {
              value -= windowScroll.x;
            }
          }
          position[prop2] = value;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    MDCMenuSurfaceFoundation2.prototype.maybeRestoreFocus = function() {
      var _this = this;
      var isRootFocused = this.adapter.isFocused();
      var ownerDocument = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document;
      var childHasFocus = ownerDocument.activeElement && this.adapter.isElementInContainer(ownerDocument.activeElement);
      if (isRootFocused || childHasFocus) {
        setTimeout(function() {
          _this.adapter.restoreFocus();
        }, numbers$1.TOUCH_EVENT_WAIT_MS);
      }
    };
    MDCMenuSurfaceFoundation2.prototype.hasBit = function(corner, bit) {
      return Boolean(corner & bit);
    };
    MDCMenuSurfaceFoundation2.prototype.setBit = function(corner, bit) {
      return corner | bit;
    };
    MDCMenuSurfaceFoundation2.prototype.unsetBit = function(corner, bit) {
      return corner ^ bit;
    };
    MDCMenuSurfaceFoundation2.prototype.isFinite = function(num) {
      return typeof num === "number" && isFinite(num);
    };
    return MDCMenuSurfaceFoundation2;
  })(MDCFoundation)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
};
var strings = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
};
var numbers = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;
(function(DefaultFocusState2) {
  DefaultFocusState2[DefaultFocusState2["NONE"] = 0] = "NONE";
  DefaultFocusState2[DefaultFocusState2["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState2[DefaultFocusState2["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState2[DefaultFocusState2["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuFoundation = (
  /** @class */
  (function(_super) {
    __extends(MDCMenuFoundation2, _super);
    function MDCMenuFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation2.defaultAdapter), adapter)) || this;
      _this.closeAnimationEndTimerId = 0;
      _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
      _this.selectedIndex = -1;
      return _this;
    }
    Object.defineProperty(MDCMenuFoundation2, "cssClasses", {
      get: function() {
        return cssClasses;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "strings", {
      get: function() {
        return strings;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "numbers", {
      get: function() {
        return numbers;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
            return void 0;
          },
          removeClassFromElementAtIndex: function() {
            return void 0;
          },
          addAttributeToElementAtIndex: function() {
            return void 0;
          },
          removeAttributeFromElementAtIndex: function() {
            return void 0;
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return false;
          },
          closeSurface: function() {
            return void 0;
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
            return void 0;
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
            return void 0;
          },
          focusListRoot: function() {
            return void 0;
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return false;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCMenuFoundation2.prototype.destroy = function() {
      if (this.closeAnimationEndTimerId) {
        clearTimeout(this.closeAnimationEndTimerId);
      }
      this.adapter.closeSurface();
    };
    MDCMenuFoundation2.prototype.handleKeydown = function(evt) {
      var key = evt.key, keyCode = evt.keyCode;
      var isTab = key === "Tab" || keyCode === 9;
      if (isTab) {
        this.adapter.closeSurface(
          /** skipRestoreFocus */
          true
        );
      }
    };
    MDCMenuFoundation2.prototype.handleItemAction = function(listItem) {
      var _this = this;
      var index2 = this.adapter.getElementIndex(listItem);
      if (index2 < 0) {
        return;
      }
      this.adapter.notifySelected({ index: index2 });
      var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index2, strings.SKIP_RESTORE_FOCUS) === "true";
      this.adapter.closeSurface(skipRestoreFocus);
      this.closeAnimationEndTimerId = setTimeout(function() {
        var recomputedIndex = _this.adapter.getElementIndex(listItem);
        if (recomputedIndex >= 0 && _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
          _this.setSelectedIndex(recomputedIndex);
        }
      }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation2.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case DefaultFocusState.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case DefaultFocusState.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case DefaultFocusState.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    };
    MDCMenuFoundation2.prototype.setDefaultFocusState = function(focusState) {
      this.defaultFocusState = focusState;
    };
    MDCMenuFoundation2.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    };
    MDCMenuFoundation2.prototype.setSelectedIndex = function(index2) {
      this.validatedIndex(index2);
      if (!this.adapter.isSelectableItemAtIndex(index2)) {
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      }
      var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index2);
      if (prevSelectedIndex >= 0) {
        this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings.ARIA_CHECKED_ATTR);
        this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses.MENU_SELECTED_LIST_ITEM);
      }
      this.adapter.addClassToElementAtIndex(index2, cssClasses.MENU_SELECTED_LIST_ITEM);
      this.adapter.addAttributeToElementAtIndex(index2, strings.ARIA_CHECKED_ATTR, "true");
      this.selectedIndex = index2;
    };
    MDCMenuFoundation2.prototype.setEnabled = function(index2, isEnabled) {
      this.validatedIndex(index2);
      if (isEnabled) {
        this.adapter.removeClassFromElementAtIndex(index2, cssClasses$2.LIST_ITEM_DISABLED_CLASS);
        this.adapter.addAttributeToElementAtIndex(index2, strings.ARIA_DISABLED_ATTR, "false");
      } else {
        this.adapter.addClassToElementAtIndex(index2, cssClasses$2.LIST_ITEM_DISABLED_CLASS);
        this.adapter.addAttributeToElementAtIndex(index2, strings.ARIA_DISABLED_ATTR, "true");
      }
    };
    MDCMenuFoundation2.prototype.validatedIndex = function(index2) {
      var menuSize = this.adapter.getMenuItemCount();
      var isIndexInRange = index2 >= 0 && index2 < menuSize;
      if (!isIndexInRange) {
        throw new Error("MDCMenuFoundation: No list item at specified index.");
      }
    };
    return MDCMenuFoundation2;
  })(MDCFoundation)
);
var root$3 = from_html(`<div><!></div>`);
function MenuSurface($$anchor, $$props) {
  push($$props, true);
  let use = prop($$props, "use", 19, () => []), className = prop($$props, "class", 3, ""), style = prop($$props, "style", 3, ""), isStatic = prop($$props, "static", 3, false), anchor = prop($$props, "anchor", 3, true), fixed = prop($$props, "fixed", 3, false), open = prop($$props, "open", 31, () => proxy(isStatic())), managed = prop($$props, "managed", 3, false), fullWidth = prop($$props, "fullWidth", 3, false), quickOpen = prop($$props, "quickOpen", 3, false), anchorElement = prop($$props, "anchorElement", 15), anchorMargin = prop($$props, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), maxHeight = prop($$props, "maxHeight", 3, 0), horizontallyCenteredOnViewport = prop($$props, "horizontallyCenteredOnViewport", 3, false), openBottomBias = prop($$props, "openBottomBias", 3, 0), neverRestoreFocus = prop($$props, "neverRestoreFocus", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "children"
  ]);
  let element;
  let instance = state(void 0);
  let internalClasses = proxy({});
  let internalStyles = proxy({});
  let previousFocus = state(void 0);
  setContext("SMUI:list:role", "menu");
  setContext("SMUI:list:item:role", "menuitem");
  user_effect(() => {
    if (element && anchor() && !element.parentElement?.classList.contains("mdc-menu-surface--anchor")) {
      element.parentElement?.classList.add("mdc-menu-surface--anchor");
      anchorElement(element.parentElement ?? void 0);
    }
  });
  user_effect(() => {
    if (get(instance) && get(instance).isOpen() !== open()) {
      if (open()) {
        get(instance).open();
      } else {
        get(instance).close();
      }
    }
  });
  user_effect(() => {
    if (get(instance)) {
      get(instance).setQuickOpen(quickOpen());
    }
  });
  user_effect(() => {
    if (get(instance)) {
      get(instance).setFixedPosition(fixed());
    }
  });
  user_effect(() => {
    if (get(instance)) {
      get(instance).setMaxHeight(maxHeight());
    }
  });
  user_effect(() => {
    if (get(instance)) {
      get(instance).setIsHorizontallyCenteredOnViewport(horizontallyCenteredOnViewport());
    }
  });
  const iCorner = Corner;
  user_effect(() => {
    if (get(instance) && $$props.anchorCorner != null) {
      if (typeof $$props.anchorCorner === "string") {
        get(instance).setAnchorCorner(iCorner[$$props.anchorCorner]);
      } else {
        get(instance).setAnchorCorner($$props.anchorCorner);
      }
    }
  });
  user_effect(() => {
    if (get(instance)) {
      get(instance).setAnchorMargin(anchorMargin());
    }
  });
  user_effect(() => {
    if (get(instance)) {
      get(instance).setOpenBottomBias(openBottomBias());
    }
  });
  const SMUIMenuSurfaceMount = getContext("SMUI:menu-surface:mount");
  const SMUIMenuSurfaceUnmount = getContext("SMUI:menu-surface:unmount");
  onMount(() => {
    set(
      instance,
      new MDCMenuSurfaceFoundation({
        addClass,
        removeClass,
        hasClass,
        hasAnchor: () => !!anchorElement(),
        notifyClose: () => {
          if (!managed()) {
            open(isStatic());
          }
          if (!open()) {
            dispatch(getElement(), "SMUIMenuSurfaceClosed");
          }
        },
        notifyClosing: () => {
          if (!managed()) {
            open(isStatic());
          }
          if (!open()) {
            dispatch(getElement(), "SMUIMenuSurfaceClosing");
          }
        },
        notifyOpen: () => {
          if (!managed()) {
            open(true);
          }
          if (open()) {
            dispatch(getElement(), "SMUIMenuSurfaceOpened");
          }
        },
        notifyOpening: () => {
          if (!open()) {
            dispatch(getElement(), "SMUIMenuSurfaceOpening");
          }
        },
        isElementInContainer: (el) => getElement().contains(el),
        isRtl: () => getComputedStyle(getElement()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (origin) => {
          internalStyles["transform-origin"] = origin;
        },
        isFocused: () => document.activeElement === getElement(),
        saveFocus: () => {
          set(previousFocus, document.activeElement ?? void 0, true);
        },
        restoreFocus: () => {
          if (!neverRestoreFocus() && (!element || getElement().contains(document.activeElement)) && get(previousFocus) && document.contains(get(previousFocus)) && "focus" in get(previousFocus)) {
            get(previousFocus).focus();
          }
        },
        getInnerDimensions: () => {
          return {
            width: getElement().offsetWidth,
            height: getElement().offsetHeight
          };
        },
        getAnchorDimensions: () => anchorElement() ? anchorElement().getBoundingClientRect() : null,
        getWindowDimensions: () => {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        getBodyDimensions: () => {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
          };
        },
        getWindowScroll: () => {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        setPosition: (position) => {
          internalStyles.left = "left" in position ? `${position.left}px` : "";
          internalStyles.right = "right" in position ? `${position.right}px` : "";
          internalStyles.top = "top" in position ? `${position.top}px` : "";
          internalStyles.bottom = "bottom" in position ? `${position.bottom}px` : "";
        },
        setMaxHeight: (height) => {
          internalStyles["max-height"] = height;
        }
      }),
      true
    );
    const accessor = {
      get open() {
        return open();
      },
      set open(value) {
        open(value);
      },
      closeProgrammatic
    };
    SMUIMenuSurfaceMount && SMUIMenuSurfaceMount(accessor);
    get(instance).init();
    return () => {
      SMUIMenuSurfaceUnmount && SMUIMenuSurfaceUnmount(accessor);
      const isHoisted = get(instance).isHoistedElement;
      get(instance)?.destroy();
      if (isHoisted) {
        getElement().parentNode?.removeChild(getElement());
      }
    };
  });
  onDestroy(() => {
    if (anchor()) {
      getElement() && getElement().parentElement?.classList.remove("mdc-menu-surface--anchor");
    }
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function closeProgrammatic(skipRestoreFocus) {
    get(instance)?.close(skipRestoreFocus);
    open(false);
  }
  function handleBodyClick(event2) {
    if (get(instance) && open() && !managed()) {
      get(instance).handleBodyClick(event2);
    }
  }
  function isOpen() {
    return open();
  }
  function setOpen(value) {
    open(value);
  }
  function setAbsolutePosition(x, y) {
    if (get(instance) == null) {
      throw new Error("Instance is not defined.");
    }
    return get(instance).setAbsolutePosition(x, y);
  }
  function setIsHoisted(isHoisted) {
    if (get(instance) == null) {
      throw new Error("Instance is not defined.");
    }
    return get(instance).setIsHoisted(isHoisted);
  }
  function isFixed() {
    if (get(instance) == null) {
      throw new Error("Instance is not defined.");
    }
    return get(instance).isFixed();
  }
  function flipCornerHorizontally() {
    if (get(instance) == null) {
      throw new Error("Instance is not defined.");
    }
    return get(instance).flipCornerHorizontally();
  }
  function getElement() {
    return element;
  }
  var $$exports = {
    isOpen,
    setOpen,
    setAbsolutePosition,
    setIsHoisted,
    isFixed,
    flipCornerHorizontally,
    getElement
  };
  var div = root$3();
  event("click", $document.body, handleBodyClick, true);
  var event_handler = (e) => {
    if (get(instance) && !managed()) {
      get(instance).handleKeydown(e);
    }
    $$props.onkeydown?.(e);
  };
  attribute_effect(
    div,
    ($0, $1) => ({
      class: $0,
      style: $1,
      role: "dialog",
      ...restProps,
      onkeydown: event_handler
    }),
    [
      () => classMap({
        "mdc-menu-surface": true,
        "mdc-menu-surface--fixed": fixed(),
        "mdc-menu-surface--open": isStatic(),
        "smui-menu-surface--static": isStatic(),
        "mdc-menu-surface--fullwidth": fullWidth(),
        ...internalClasses,
        [className()]: true
      }),
      () => Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style()]).join(" ")
    ]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop);
  bind_this(div, ($$value) => element = $$value, () => element);
  action(div, ($$node, $$action_arg) => useActions?.($$node, $$action_arg), use);
  append($$anchor, div);
  return pop($$exports);
}
function Menu($$anchor, $$props) {
  push($$props, true);
  const { closest } = ponyfill;
  let use = prop($$props, "use", 19, () => []), className = prop($$props, "class", 3, ""), open = prop($$props, "open", 15, false), anchorElement = prop($$props, "anchorElement", 15), managed = prop($$props, "managed", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]);
  let element;
  let instance = state(void 0);
  let menuSurfaceAccessor = state(void 0);
  let listAccessor = state(void 0);
  setContext("SMUI:menu-surface:mount", (accessor) => {
    if (!get(menuSurfaceAccessor)) {
      set(menuSurfaceAccessor, accessor, true);
    }
  });
  const SMUIListMount = getContext("SMUI:list:mount");
  setContext("SMUI:list:mount", (accessor) => {
    if (!get(listAccessor)) {
      set(listAccessor, accessor, true);
    }
    SMUIListMount && SMUIListMount(accessor);
  });
  const SMUIMenuMount = getContext("SMUI:menu:mount");
  const SMUIMenuUnmount = getContext("SMUI:menu:unmount");
  onMount(() => {
    set(
      instance,
      new MDCMenuFoundation({
        addClassToElementAtIndex: (index2, className2) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          get(listAccessor).addClassForElementIndex(index2, className2);
        },
        removeClassFromElementAtIndex: (index2, className2) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          get(listAccessor).removeClassForElementIndex(index2, className2);
        },
        addAttributeToElementAtIndex: (index2, attr, value) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          get(listAccessor).setAttributeForElementIndex(index2, attr, value);
        },
        removeAttributeFromElementAtIndex: (index2, attr) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          get(listAccessor).removeAttributeForElementIndex(index2, attr);
        },
        getAttributeFromElementAtIndex: (index2, attr) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          return get(listAccessor).getAttributeFromElementIndex(index2, attr);
        },
        elementContainsClass: (element2, className2) => element2.classList.contains(className2),
        closeSurface: (skipRestoreFocus) => {
          if (!managed()) {
            get(menuSurfaceAccessor)?.closeProgrammatic(skipRestoreFocus);
            dispatch(getElement(), "SMUIMenuClosedProgrammatically");
          }
        },
        getElementIndex: (element2) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          return get(listAccessor).getOrderedList().map((accessor) => accessor.element).indexOf(element2);
        },
        notifySelected: (evtData) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          dispatch(getElement(), "SMUIMenuSelected", {
            index: evtData.index,
            item: get(listAccessor).getOrderedList()[evtData.index].element
          });
        },
        getMenuItemCount: () => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          return get(listAccessor).items.length;
        },
        focusItemAtIndex: (index2) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          get(listAccessor).focusItemAtIndex(index2);
        },
        focusListRoot: () => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          if ("focus" in get(listAccessor).element) {
            get(listAccessor).element.focus();
          }
        },
        isSelectableItemAtIndex: (index2) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          return !!closest(get(listAccessor).getOrderedList()[index2].element, `.${cssClasses.MENU_SELECTION_GROUP}`);
        },
        getSelectedSiblingOfItemAtIndex: (index2) => {
          if (get(listAccessor) == null) {
            throw new Error("List accessor is undefined.");
          }
          const orderedList = get(listAccessor).getOrderedList();
          const selectionGroupEl = closest(orderedList[index2].element, `.${cssClasses.MENU_SELECTION_GROUP}`);
          const selectedItemEl = selectionGroupEl?.querySelector(`.${cssClasses.MENU_SELECTED_LIST_ITEM}`);
          return selectedItemEl ? orderedList.map((item) => item.element).indexOf(selectedItemEl) : -1;
        }
      }),
      true
    );
    SMUIMenuMount && SMUIMenuMount(get(instance));
    get(instance).init();
    return () => {
      if (SMUIMenuUnmount && get(instance)) {
        SMUIMenuUnmount(get(instance));
      }
      get(instance)?.destroy();
    };
  });
  function handleKeydown(event2) {
    get(instance) && get(instance).handleKeydown(event2);
  }
  function isOpen() {
    return open();
  }
  function setOpen(value) {
    open(value);
  }
  function setDefaultFocusState(focusState) {
    if (get(instance) == null) {
      throw new Error("Instance is undefined.");
    }
    get(instance).setDefaultFocusState(focusState);
  }
  function getSelectedIndex() {
    if (get(instance) == null) {
      throw new Error("Instance is undefined.");
    }
    return get(instance).getSelectedIndex();
  }
  function getMenuSurface() {
    return element;
  }
  function getElement() {
    return element.getElement();
  }
  var $$exports = {
    isOpen,
    setOpen,
    setDefaultFocusState,
    getSelectedIndex,
    getMenuSurface,
    getElement
  };
  {
    let $0 = user_derived(() => classMap({ "mdc-menu": true, [className()]: true }));
    bind_this(
      MenuSurface($$anchor, spread_props(
        {
          get use() {
            return use();
          },
          get class() {
            return get($0);
          },
          get managed() {
            return managed();
          }
        },
        () => restProps,
        {
          onkeydown: (e) => {
            handleKeydown(e);
            $$props.onkeydown?.(e);
          },
          onSMUIMenuSurfaceOpened: (e) => {
            if (get(instance)) {
              get(instance).handleMenuSurfaceOpened();
            }
            $$props.onSMUIMenuSurfaceOpened?.(e);
          },
          onSMUIListAction: (e) => {
            if (get(instance) && get(listAccessor)) {
              get(instance).handleItemAction(get(listAccessor).getOrderedList()[e.detail.index].element);
            }
            $$props.onSMUIListAction?.(e);
          },
          get open() {
            return open();
          },
          set open($$value) {
            open($$value);
          },
          get anchorElement() {
            return anchorElement();
          },
          set anchorElement($$value) {
            anchorElement($$value);
          },
          children: ($$anchor2, $$slotProps) => {
            var fragment_1 = comment();
            var node = first_child(fragment_1);
            snippet(node, () => $$props.children ?? noop);
            append($$anchor2, fragment_1);
          },
          $$slots: { default: true }
        }
      )),
      ($$value) => element = $$value,
      () => element
    );
  }
  return pop($$exports);
}
var root_6 = from_html(`<!> <!>`, 1);
var root_12 = from_html(`<!> <!>`, 1);
var root_18 = from_html(`<!> <!>`, 1);
var root_5 = from_html(`<!> <!> <!> <!>`, 1);
var root$2 = from_html(`<main><!> <span class="name svelte-1fmbmt0"> </span> <div><!></div> <!></main>`);
const $$css$1 = {
  hash: "svelte-1fmbmt0",
  code: ".system-entry.svelte-1fmbmt0 {display:flex;align-items:center;background-color:rgba(44, 44, 44, 1);padding:4px 12px;border-radius:4px;}.unhealthy.system-entry {background-color:rgba(139, 7, 7, 0.3);}.health-icon {font-size:20px;height:20px;width:20px;margin-right:0px;}.healthy .health-icon {color:#2dc937;}.unhealthy .health-icon {color:#cc3232;}.name.svelte-1fmbmt0 {margin-left:12px;margin-right:auto;font-weight:bold;font-size:14px;}"
};
function SystemEntry($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css$1);
  let menu;
  let menuAnchor;
  const name = user_derived(() => $$props.systemSettings ? new URL($$props.systemSettings.url).host : "");
  var main = root$2();
  var node = child(main);
  {
    var consequent = ($$anchor2) => {
      Graphic($$anchor2, { class: "fa fa-sm fa-heart health-icon" });
    };
    var alternate = ($$anchor2) => {
      Graphic($$anchor2, { class: "fa fa-sm fa-heart-broken health-icon" });
    };
    if_block(node, ($$render) => {
      if ($$props.systemStatus?.healthy) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var span = sibling(node, 2);
  var text$1 = child(span);
  var div = sibling(span, 2);
  var node_1 = child(div);
  IconButton(node_1, {
    class: "material-icons",
    onclick: (event2) => {
      event2.stopPropagation();
      menu.setOpen(true);
    },
    children: ($$anchor2, $$slotProps) => {
      var text_1 = text("more_vert");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  bind_this(div, ($$value) => menuAnchor = $$value, () => menuAnchor);
  var node_2 = sibling(div, 2);
  bind_this(
    Menu(node_2, {
      onclick: (event2) => event2.stopPropagation(),
      anchor: false,
      get anchorElement() {
        return menuAnchor;
      },
      set anchorElement($$value) {
        menuAnchor = $$value;
      },
      children: ($$anchor2, $$slotProps) => {
        List($$anchor2, {
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_5();
            var node_3 = first_child(fragment_3);
            Item(node_3, {
              onSMUIaction: (event2) => {
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_6();
                var node_4 = first_child(fragment_4);
                {
                  var consequent_1 = ($$anchor5) => {
                    Graphic($$anchor5, {
                      class: "material-icons",
                      children: ($$anchor6, $$slotProps4) => {
                        var text_2 = text("check_box");
                        append($$anchor6, text_2);
                      },
                      $$slots: { default: true }
                    });
                  };
                  var alternate_1 = ($$anchor5) => {
                    Graphic($$anchor5, {
                      class: "material-icons",
                      children: ($$anchor6, $$slotProps4) => {
                        var text_3 = text("check_box_blank");
                        append($$anchor6, text_3);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_4, ($$render) => {
                    if (!!$$props.systemSettings?.ft) $$render(consequent_1);
                    else $$render(alternate_1, false);
                  });
                }
                var node_5 = sibling(node_4, 2);
                Text(node_5, {
                  children: ($$anchor5, $$slotProps4) => {
                    var text_4 = text("Powertoys");
                    append($$anchor5, text_4);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_6 = sibling(node_3, 2);
            Item(node_6, {
              onSMUIaction: () => {
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_7 = root_12();
                var node_7 = first_child(fragment_7);
                {
                  var consequent_2 = ($$anchor5) => {
                    Graphic($$anchor5, {
                      class: "material-icons",
                      children: ($$anchor6, $$slotProps4) => {
                        var text_5 = text("check_box");
                        append($$anchor6, text_5);
                      },
                      $$slots: { default: true }
                    });
                  };
                  var alternate_2 = ($$anchor5) => {
                    Graphic($$anchor5, {
                      class: "material-icons",
                      children: ($$anchor6, $$slotProps4) => {
                        var text_6 = text("check_box_blank");
                        append($$anchor6, text_6);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_7, ($$render) => {
                    if (!!$$props.systemSettings?.nt) $$render(consequent_2);
                    else $$render(alternate_2, false);
                  });
                }
                var node_8 = sibling(node_7, 2);
                Text(node_8, {
                  children: ($$anchor5, $$slotProps4) => {
                    var text_7 = text("Notifications");
                    append($$anchor5, text_7);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_7);
              },
              $$slots: { default: true }
            });
            var node_9 = sibling(node_6, 2);
            Separator(node_9, {});
            var node_10 = sibling(node_9, 2);
            Item(node_10, {
              onSMUIaction: () => $$props.ondelete?.(),
              children: ($$anchor4, $$slotProps3) => {
                var fragment_10 = root_18();
                var node_11 = first_child(fragment_10);
                Graphic(node_11, {
                  class: "material-icons",
                  children: ($$anchor5, $$slotProps4) => {
                    var text_8 = text("delete");
                    append($$anchor5, text_8);
                  },
                  $$slots: { default: true }
                });
                var node_12 = sibling(node_11, 2);
                Text(node_12, {
                  children: ($$anchor5, $$slotProps4) => {
                    var text_9 = text("Delete");
                    append($$anchor5, text_9);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_10);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    }),
    ($$value) => menu = $$value,
    () => menu
  );
  template_effect(() => {
    set_class(main, 1, `system-entry ${$$props.systemStatus?.healthy ? "healthy" : "unhealthy"}`, "svelte-1fmbmt0");
    set_text(text$1, get(name));
  });
  append($$anchor, main);
  pop();
}
var root_3 = from_html(`<div class="unknown-system-container svelte-twdvlz"><!> <div style="margin-left: 8px; margin-right: auto">Extension is not enabled on this system</div> <!></div>`);
var root_7 = from_html(`<div class="system-entry svelte-twdvlz"><div class="ripple svelte-twdvlz"></div> <!></div>`);
var root$1 = from_html(`<main><div class="overview-header svelte-twdvlz"><div class="search-input-container svelte-twdvlz"><!> <!></div> <!></div> <!> <div class="system-list"></div></main>`);
const $$css = {
  hash: "svelte-twdvlz",
  code: ":root {min-width:500px;}.overview-header.svelte-twdvlz {display:flex;align-items:center;}.search-input-container.svelte-twdvlz {flex:1;display:flex;align-items:center;border-radius:4px;background-color:rgba(66, 66, 66, 1);padding-left:8px;margin-bottom:12px;}.search-input-container.svelte-twdvlz .search-input {display:flex;align-items:center;flex-grow:1;height:38px;padding-left:8px;color:rgba(255, 255, 255, 0.8);}.search-input-container.svelte-twdvlz .solo-input::placeholder {color:var(--mdc-theme-on-surface);opacity:0.6;}.overview-header.svelte-twdvlz .settings-btn {margin-left:12px;}.unknown-system-container.svelte-twdvlz {background-color:rgba(12, 34, 124, 0.2);border-radius:4px;padding:8px;font-size:14px;display:flex;align-items:center;margin-bottom:4px;}.system-entry.svelte-twdvlz {cursor:pointer;position:relative;display:block;margin-top:8px;}.ripple.svelte-twdvlz {position:absolute;width:100%;height:100%;left:0;top:0;}"
};
function SystemOverview($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css);
  let systemSettings = state(proxy([]));
  let systemStats = state(proxy({}));
  let showUnknownSystemHint = state(false);
  async function registerSystem() {
    console.log("Add to known urls");
    const activeTab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
    console.log(activeTab);
    if (!activeTab) {
      return;
    }
    try {
      const url = new URL(activeTab.url);
      if (get(systemSettings).some((x) => x.url === url.origin)) {
        console.log("System already registered");
        return;
      }
      const newSystemEntry = { nt: true, ft: true, url: url.origin, al: null, rh: false };
      set(systemSettings, [...get(systemSettings), newSystemEntry], true);
      set(showUnknownSystemHint, false);
      StorageUtils.setRegisteredSystemSettings(snapshot(get(systemSettings)));
    } catch (e) {
      console.log("Failed to register new system: " + e);
    }
  }
  async function checkForAudakoSystem() {
    try {
      const activeTab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
      const url = new URL(activeTab.url);
      if (!get(systemSettings).some((x) => x.url === url.origin)) {
        try {
          await Cn.requestHttpConfig(url.origin);
          set(showUnknownSystemHint, true);
        } catch (error) {
          set(showUnknownSystemHint, false);
        }
      }
    } catch (e) {
    }
  }
  async function onDeleteSystem(system) {
    const index2 = get(systemSettings).findIndex((x) => x.url === system.url);
    get(systemSettings).splice(index2, 1);
    set(systemSettings, [...get(systemSettings)], true);
    StorageUtils.setRegisteredSystemSettings(get(systemSettings));
  }
  async function openSystem(system) {
    chrome.tabs.create({ active: true, url: system.url });
  }
  async function init() {
    set(systemSettings, await StorageUtils.getRegisteredSystemSettings(), true);
    await checkForAudakoSystem();
    StorageUtils.listenForStatusChanges().subscribe((x) => {
      console.log("Status changed: ", x);
      set(systemStats, x, true);
    });
  }
  init();
  var main = root$1();
  var div = child(main);
  var div_1 = child(div);
  var node = child(div_1);
  CommonIcon(node, {
    class: "material-icons",
    children: ($$anchor2, $$slotProps) => {
      var text$1 = text("search");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Input(node_1, { class: "search-input solo-input", placeholder: "Search" });
  var node_2 = sibling(div_1, 2);
  IconButton(node_2, {
    class: "material-icons settings-btn",
    onclick: () => registerSystem(),
    children: ($$anchor2, $$slotProps) => {
      var text_1 = text("settings");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_3();
      var node_4 = child(div_2);
      CommonIcon(node_4, {
        class: "material-icons",
        children: ($$anchor3, $$slotProps) => {
          var text_2 = text("info");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 4);
      Button(node_5, {
        onclick: () => registerSystem(),
        children: ($$anchor3, $$slotProps) => {
          CommonLabel($$anchor3, {
            style: "font-weight: bold",
            children: ($$anchor4, $$slotProps2) => {
              var text_3 = text("Enable");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, div_2);
    };
    if_block(node_3, ($$render) => {
      if (get(showUnknownSystemHint)) $$render(consequent);
    });
  }
  var div_3 = sibling(node_3, 2);
  each(div_3, 21, () => get(systemSettings), index, ($$anchor2, system) => {
    var div_4 = root_7();
    div_4.__click = () => openSystem(get(system));
    var div_5 = child(div_4);
    action(div_5, ($$node, $$action_arg) => Ripple?.($$node, $$action_arg), () => ({ surface: true, color: "primary" }));
    var node_6 = sibling(div_5, 2);
    SystemEntry(node_6, {
      get systemStatus() {
        return get(systemStats)[get(system).url];
      },
      get systemSettings() {
        return get(system);
      },
      ondelete: () => onDeleteSystem(get(system))
    });
    append($$anchor2, div_4);
  });
  append($$anchor, main);
  pop();
}
delegate(["click"]);
var root = from_html(`<main><!></main>`);
function Popup($$anchor, $$props) {
  push($$props, true);
  async function initPopup() {
    const extensionSettings = await chrome.storage.sync.get("extension-settings");
    console.log(extensionSettings);
    (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
    chrome.storage.onChanged.addListener(onSettingsChanged.bind(this));
  }
  async function onSettingsChanged(changes, namespace) {
    console.log("Settings Changed", changes, namespace);
    return true;
  }
  initPopup();
  var main = root();
  var node = child(main);
  SystemOverview(node, {});
  append($$anchor, main);
  pop();
}
console.log(document);
mount(Popup, {
  target: document.body
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NoYXJlZC9jbG9uZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZGlzdC9Db21tb25MYWJlbC5zdmVsdGUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvYnV0dG9uL2Rpc3QvQnV0dG9uLnN2ZWx0ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbWVudS1zdXJmYWNlL2Rpc3QvTWVudVN1cmZhY2Uuc3ZlbHRlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL21lbnUvZGlzdC9NZW51LnN2ZWx0ZSIsIi4uLy4uL3NyYy9wb3B1cC9jb21wb25lbnRzL1N5c3RlbUVudHJ5LnN2ZWx0ZSIsIi4uLy4uL3NyYy9wb3B1cC9wYWdlcy9TeXN0ZW1PdmVydmlldy5zdmVsdGUiLCIuLi8uLi9zcmMvcG9wdXAvUG9wdXAuc3ZlbHRlIiwiLi4vLi4vc3JjL3BvcHVwL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAaW1wb3J0IHsgU25hcHNob3QgfSBmcm9tICcuL3R5cGVzJyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgKiBhcyB3IGZyb20gJy4vd2FybmluZ3MuanMnO1xuaW1wb3J0IHsgZ2V0X3Byb3RvdHlwZV9vZiwgaXNfYXJyYXksIG9iamVjdF9wcm90b3R5cGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBJbiBkZXYsIHdlIGtlZXAgdHJhY2sgb2Ygd2hpY2ggcHJvcGVydGllcyBjb3VsZCBub3QgYmUgY2xvbmVkLiBJbiBwcm9kXG4gKiB3ZSBkb24ndCBib3RoZXIsIGJ1dCB3ZSBrZWVwIGEgZHVtbXkgYXJyYXkgYXJvdW5kIHNvIHRoYXQgdGhlXG4gKiBzaWduYXR1cmUgc3RheXMgdGhlIHNhbWVcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgZW1wdHkgPSBbXTtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcF93YXJuaW5nXVxuICogQHBhcmFtIHtib29sZWFufSBbbm9fdG9qc29uXVxuICogQHJldHVybnMge1NuYXBzaG90PFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc25hcHNob3QodmFsdWUsIHNraXBfd2FybmluZyA9IGZhbHNlLCBub190b2pzb24gPSBmYWxzZSkge1xuXHRpZiAoREVWICYmICFza2lwX3dhcm5pbmcpIHtcblx0XHQvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuXHRcdGNvbnN0IHBhdGhzID0gW107XG5cblx0XHRjb25zdCBjb3B5ID0gY2xvbmUodmFsdWUsIG5ldyBNYXAoKSwgJycsIHBhdGhzLCBudWxsLCBub190b2pzb24pO1xuXHRcdGlmIChwYXRocy5sZW5ndGggPT09IDEgJiYgcGF0aHNbMF0gPT09ICcnKSB7XG5cdFx0XHQvLyB2YWx1ZSBjb3VsZCBub3QgYmUgY2xvbmVkXG5cdFx0XHR3LnN0YXRlX3NuYXBzaG90X3VuY2xvbmVhYmxlKCk7XG5cdFx0fSBlbHNlIGlmIChwYXRocy5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBzb21lIHByb3BlcnRpZXMgY291bGQgbm90IGJlIGNsb25lZFxuXHRcdFx0Y29uc3Qgc2xpY2UgPSBwYXRocy5sZW5ndGggPiAxMCA/IHBhdGhzLnNsaWNlKDAsIDcpIDogcGF0aHMuc2xpY2UoMCwgMTApO1xuXHRcdFx0Y29uc3QgZXhjZXNzID0gcGF0aHMubGVuZ3RoIC0gc2xpY2UubGVuZ3RoO1xuXG5cdFx0XHRsZXQgdW5jbG9uZWQgPSBzbGljZS5tYXAoKHBhdGgpID0+IGAtIDx2YWx1ZT4ke3BhdGh9YCkuam9pbignXFxuJyk7XG5cdFx0XHRpZiAoZXhjZXNzID4gMCkgdW5jbG9uZWQgKz0gYFxcbi0gLi4uYW5kICR7ZXhjZXNzfSBtb3JlYDtcblxuXHRcdFx0dy5zdGF0ZV9zbmFwc2hvdF91bmNsb25lYWJsZSh1bmNsb25lZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvcHk7XG5cdH1cblxuXHRyZXR1cm4gY2xvbmUodmFsdWUsIG5ldyBNYXAoKSwgJycsIGVtcHR5LCBudWxsLCBub190b2pzb24pO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IHZhbHVlXG4gKiBAcGFyYW0ge01hcDxULCBTbmFwc2hvdDxUPj59IGNsb25lZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhzXG4gKiBAcGFyYW0ge251bGwgfCBUfSBbb3JpZ2luYWxdIFRoZSBvcmlnaW5hbCB2YWx1ZSwgaWYgYHZhbHVlYCB3YXMgcHJvZHVjZWQgZnJvbSBhIGB0b0pTT05gIGNhbGxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vX3RvanNvbl1cbiAqIEByZXR1cm5zIHtTbmFwc2hvdDxUPn1cbiAqL1xuZnVuY3Rpb24gY2xvbmUodmFsdWUsIGNsb25lZCwgcGF0aCwgcGF0aHMsIG9yaWdpbmFsID0gbnVsbCwgbm9fdG9qc29uID0gZmFsc2UpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHR2YXIgdW53cmFwcGVkID0gY2xvbmVkLmdldCh2YWx1ZSk7XG5cdFx0aWYgKHVud3JhcHBlZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdW53cmFwcGVkO1xuXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gLyoqIEB0eXBlIHtTbmFwc2hvdDxUPn0gKi8gKG5ldyBNYXAodmFsdWUpKTtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHJldHVybiAvKiogQHR5cGUge1NuYXBzaG90PFQ+fSAqLyAobmV3IFNldCh2YWx1ZSkpO1xuXG5cdFx0aWYgKGlzX2FycmF5KHZhbHVlKSkge1xuXHRcdFx0dmFyIGNvcHkgPSAvKiogQHR5cGUge1NuYXBzaG90PGFueT59ICovIChBcnJheSh2YWx1ZS5sZW5ndGgpKTtcblx0XHRcdGNsb25lZC5zZXQodmFsdWUsIGNvcHkpO1xuXG5cdFx0XHRpZiAob3JpZ2luYWwgIT09IG51bGwpIHtcblx0XHRcdFx0Y2xvbmVkLnNldChvcmlnaW5hbCwgY29weSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSB2YWx1ZVtpXTtcblx0XHRcdFx0aWYgKGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRjb3B5W2ldID0gY2xvbmUoZWxlbWVudCwgY2xvbmVkLCBERVYgPyBgJHtwYXRofVske2l9XWAgOiBwYXRoLCBwYXRocywgbnVsbCwgbm9fdG9qc29uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY29weTtcblx0XHR9XG5cblx0XHRpZiAoZ2V0X3Byb3RvdHlwZV9vZih2YWx1ZSkgPT09IG9iamVjdF9wcm90b3R5cGUpIHtcblx0XHRcdC8qKiBAdHlwZSB7U25hcHNob3Q8YW55Pn0gKi9cblx0XHRcdGNvcHkgPSB7fTtcblx0XHRcdGNsb25lZC5zZXQodmFsdWUsIGNvcHkpO1xuXG5cdFx0XHRpZiAob3JpZ2luYWwgIT09IG51bGwpIHtcblx0XHRcdFx0Y2xvbmVkLnNldChvcmlnaW5hbCwgY29weSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRjb3B5W2tleV0gPSBjbG9uZShcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdFx0dmFsdWVba2V5XSxcblx0XHRcdFx0XHRjbG9uZWQsXG5cdFx0XHRcdFx0REVWID8gYCR7cGF0aH0uJHtrZXl9YCA6IHBhdGgsXG5cdFx0XHRcdFx0cGF0aHMsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRub190b2pzb25cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNvcHk7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7U25hcHNob3Q8VD59ICovIChzdHJ1Y3R1cmVkQ2xvbmUodmFsdWUpKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mICgvKiogQHR5cGUge1QgJiB7IHRvSlNPTj86IGFueSB9IH0gKi8gKHZhbHVlKS50b0pTT04pID09PSAnZnVuY3Rpb24nICYmICFub190b2pzb24pIHtcblx0XHRcdHJldHVybiBjbG9uZShcblx0XHRcdFx0LyoqIEB0eXBlIHtUICYgeyB0b0pTT04oKTogYW55IH0gfSAqLyAodmFsdWUpLnRvSlNPTigpLFxuXHRcdFx0XHRjbG9uZWQsXG5cdFx0XHRcdERFViA/IGAke3BhdGh9LnRvSlNPTigpYCA6IHBhdGgsXG5cdFx0XHRcdHBhdGhzLFxuXHRcdFx0XHQvLyBBc3NvY2lhdGUgdGhlIGluc3RhbmNlIHdpdGggdGhlIHRvSlNPTiBjbG9uZVxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudFRhcmdldCkge1xuXHRcdC8vIGNhbid0IGJlIGNsb25lZFxuXHRcdHJldHVybiAvKiogQHR5cGUge1NuYXBzaG90PFQ+fSAqLyAodmFsdWUpO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gLyoqIEB0eXBlIHtTbmFwc2hvdDxUPn0gKi8gKHN0cnVjdHVyZWRDbG9uZSh2YWx1ZSkpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKERFVikge1xuXHRcdFx0cGF0aHMucHVzaChwYXRoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gLyoqIEB0eXBlIHtTbmFwc2hvdDxUPn0gKi8gKHZhbHVlKTtcblx0fVxufVxuIiwiPHN2ZWx0ZTpvcHRpb25zIHJ1bmVzIC8+XG5cbjxNeUNvbXBvbmVudFxuICB7dGFnfVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHt1c2V9XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgJ21kYy1idXR0b25fX2xhYmVsJzogY29udGV4dCA9PT0gJ2J1dHRvbicsXG4gICAgJ21kYy1mYWJfX2xhYmVsJzogY29udGV4dCA9PT0gJ2ZhYicsXG4gICAgJ21kYy10YWJfX3RleHQtbGFiZWwnOiBjb250ZXh0ID09PSAndGFiJyxcbiAgICAnbWRjLWltYWdlLWxpc3RfX2xhYmVsJzogY29udGV4dCA9PT0gJ2ltYWdlLWxpc3QnLFxuICAgICdtZGMtc25hY2tiYXJfX2xhYmVsJzogY29udGV4dCA9PT0gJ3NuYWNrYmFyJyxcbiAgICAnbWRjLWJhbm5lcl9fdGV4dCc6IGNvbnRleHQgPT09ICdiYW5uZXInLFxuICAgICdtZGMtc2VnbWVudGVkLWJ1dHRvbl9fbGFiZWwnOiBjb250ZXh0ID09PSAnc2VnbWVudGVkLWJ1dHRvbicsXG4gICAgJ21kYy1kYXRhLXRhYmxlX19wYWdpbmF0aW9uLXJvd3MtcGVyLXBhZ2UtbGFiZWwnOlxuICAgICAgY29udGV4dCA9PT0gJ2RhdGEtdGFibGU6cGFnaW5hdGlvbicsXG4gICAgJ21kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC1sYWJlbCc6XG4gICAgICBjb250ZXh0ID09PSAnZGF0YS10YWJsZTpzb3J0YWJsZS1oZWFkZXItY2VsbCcsXG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gIH0pfVxuICB7Li4uY29udGV4dCA9PT0gJ3NuYWNrYmFyJyA/IHsgJ2FyaWEtYXRvbWljJzogJ2ZhbHNlJyB9IDoge319XG4gIHt0YWJpbmRleH1cbiAgey4uLnJlc3RQcm9wc30+e0ByZW5kZXIgY2hpbGRyZW4/LigpfTwvTXlDb21wb25lbnRcbj5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBnZW5lcmljcz1cIlRhZ05hbWUgZXh0ZW5kcyBTbXVpRXZlcnlFbGVtZW50ID0gJ3NwYW4nXCI+XG4gIGltcG9ydCB0eXBlIHsgU25pcHBldCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuXG4gIGltcG9ydCB0eXBlIHsgQWN0aW9uQXJyYXkgfSBmcm9tICcuL2ludGVybmFsL3VzZUFjdGlvbnMuanMnO1xuICBpbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJy4vaW50ZXJuYWwvaW5kZXguanMnO1xuICBpbXBvcnQgdHlwZSB7XG4gICAgU211aUNvbXBvbmVudCxcbiAgICBTbXVpRWxlbWVudE1hcCxcbiAgICBTbXVpRXZlcnlFbGVtZW50LFxuICAgIFNtdWlBdHRycyxcbiAgfSBmcm9tICcuL3NtdWkudHlwZXMuanMnO1xuICBpbXBvcnQgeyBTbXVpRWxlbWVudCB9IGZyb20gJy4vaW5kZXguanMnO1xuXG4gIHR5cGUgT3duUHJvcHMgPSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgQWN0aW9uIG9yIFtBY3Rpb24sIEFjdGlvblByb3BzXSB0byBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIHVzZT86IEFjdGlvbkFycmF5O1xuICAgIC8qKlxuICAgICAqIEEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgQ1NTIGNsYXNzZXMuXG4gICAgICovXG4gICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0byB1c2UgdG8gcmVuZGVyIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGNvbXBvbmVudD86IFNtdWlDb21wb25lbnQ8U211aUVsZW1lbnRNYXBbVGFnTmFtZV0+O1xuICAgIC8qKlxuICAgICAqIFRoZSB0YWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBjcmVhdGUuXG4gICAgICovXG4gICAgdGFnPzogVGFnTmFtZTtcblxuICAgIGNoaWxkcmVuPzogU25pcHBldDtcbiAgfTtcbiAgbGV0IHtcbiAgICB1c2UgPSBbXSxcbiAgICBjbGFzczogY2xhc3NOYW1lID0gJycsXG4gICAgY29tcG9uZW50OiBNeUNvbXBvbmVudCA9IFNtdWlFbGVtZW50LFxuICAgIHRhZyA9ICdzcGFuJyBhcyBUYWdOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3RQcm9wc1xuICB9OiBPd25Qcm9wcyAmIFNtdWlBdHRyczxUYWdOYW1lLCBrZXlvZiBPd25Qcm9wcz4gPSAkcHJvcHMoKTtcblxuICBsZXQgZWxlbWVudDogUmV0dXJuVHlwZTxTbXVpQ29tcG9uZW50PFNtdWlFbGVtZW50TWFwW1RhZ05hbWVdPj47XG5cbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQ8c3RyaW5nIHwgdW5kZWZpbmVkPignU01VSTpsYWJlbDpjb250ZXh0Jyk7XG4gIGNvbnN0IHRhYmluZGV4ID0gZ2V0Q29udGV4dDxudW1iZXIgfCB1bmRlZmluZWQ+KCdTTVVJOmxhYmVsOnRhYmluZGV4Jyk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6b3B0aW9ucyBydW5lcyAvPlxuXG48TXlDb21wb25lbnRcbiAge3RhZ31cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U9e1tcbiAgICBbXG4gICAgICBSaXBwbGUsXG4gICAgICB7XG4gICAgICAgIHJpcHBsZSxcbiAgICAgICAgdW5ib3VuZGVkOiBmYWxzZSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGRpc2FibGVkOiAhIXJlc3RQcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgYWRkQ2xhc3MsXG4gICAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgICBhZGRTdHlsZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICAuLi51c2UsXG4gIF19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgJ21kYy1idXR0b24nOiB0cnVlLFxuICAgICdtZGMtYnV0dG9uLS1yYWlzZWQnOiB2YXJpYW50ID09PSAncmFpc2VkJyxcbiAgICAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCc6IHZhcmlhbnQgPT09ICd1bmVsZXZhdGVkJyxcbiAgICAnbWRjLWJ1dHRvbi0tb3V0bGluZWQnOiB2YXJpYW50ID09PSAnb3V0bGluZWQnLFxuICAgICdzbXVpLWJ1dHRvbi0tY29sb3Itc2Vjb25kYXJ5JzogY29sb3IgPT09ICdzZWNvbmRhcnknLFxuICAgICdtZGMtYnV0dG9uLS10b3VjaCc6IHRvdWNoLFxuICAgICdtZGMtY2FyZF9fYWN0aW9uJzogY29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyxcbiAgICAnbWRjLWNhcmRfX2FjdGlvbi0tYnV0dG9uJzogY29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyxcbiAgICAnbWRjLWRpYWxvZ19fYnV0dG9uJzogY29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nLFxuICAgICdtZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbic6IGNvbnRleHQgPT09ICd0b3AtYXBwLWJhcjpuYXZpZ2F0aW9uJyxcbiAgICAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbSc6IGNvbnRleHQgPT09ICd0b3AtYXBwLWJhcjphY3Rpb24nLFxuICAgICdtZGMtc25hY2tiYXJfX2FjdGlvbic6IGNvbnRleHQgPT09ICdzbmFja2JhcjphY3Rpb25zJyxcbiAgICAnbWRjLWJhbm5lcl9fc2Vjb25kYXJ5LWFjdGlvbic6IGNvbnRleHQgPT09ICdiYW5uZXInICYmIHNlY29uZGFyeSxcbiAgICAnbWRjLWJhbm5lcl9fcHJpbWFyeS1hY3Rpb24nOiBjb250ZXh0ID09PSAnYmFubmVyJyAmJiAhc2Vjb25kYXJ5LFxuICAgICdtZGMtdG9vbHRpcF9fYWN0aW9uJzogY29udGV4dCA9PT0gJ3Rvb2x0aXA6cmljaC1hY3Rpb25zJyxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIHsuLi5hY3Rpb25Qcm9wfVxuICB7Li4uZGVmYXVsdFByb3B9XG4gIHsuLi5zZWNvbmRhcnlQcm9wfVxuICB7aHJlZn1cbiAgey4uLnJlc3RQcm9wc31cbiAgb25jbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBoYW5kbGVDbGljaygpO1xuICAgIHJlc3RQcm9wcy5vbmNsaWNrPy4oZSk7XG4gIH19XG4gID48ZGl2IGNsYXNzPVwibWRjLWJ1dHRvbl9fcmlwcGxlXCI+PC9kaXY+XG4gIHtAcmVuZGVyIGNoaWxkcmVuPy4oKX17I2lmIHRvdWNofTxkaXZcbiAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbl9fdG91Y2hcIlxuICAgID48L2Rpdj57L2lmfTwvTXlDb21wb25lbnRcbj5cblxuPHNjcmlwdFxuICBsYW5nPVwidHNcIlxuICBnZW5lcmljcz1cIkhyZWYgZXh0ZW5kcyBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIFRhZ05hbWUgZXh0ZW5kcyBTbXVpRXZlcnlFbGVtZW50ID0gSHJlZiBleHRlbmRzIHN0cmluZyA/ICdhJyA6ICdidXR0b24nXCJcbj5cbiAgaW1wb3J0IHR5cGUgeyBTbmlwcGV0IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgc2V0Q29udGV4dCwgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB0eXBlIHsgQWN0aW9uQXJyYXkgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBjbGFzc01hcCwgZGlzcGF0Y2ggfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwnO1xuICBpbXBvcnQgUmlwcGxlIGZyb20gJ0BzbXVpL3JpcHBsZSc7XG4gIGltcG9ydCB0eXBlIHtcbiAgICBTbXVpQ29tcG9uZW50LFxuICAgIFNtdWlFbGVtZW50TWFwLFxuICAgIFNtdWlFdmVyeUVsZW1lbnQsXG4gICAgU211aUF0dHJzLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbic7XG4gIGltcG9ydCB7IFNtdWlFbGVtZW50IH0gZnJvbSAnQHNtdWkvY29tbW9uJztcblxuICB0eXBlIE93blByb3BzID0ge1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIEFjdGlvbiBvciBbQWN0aW9uLCBBY3Rpb25Qcm9wc10gdG8gYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICB1c2U/OiBBY3Rpb25BcnJheTtcbiAgICAvKipcbiAgICAgKiBBIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIENTUyBjbGFzc2VzLlxuICAgICAqL1xuICAgIGNsYXNzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBDU1Mgc3R5bGVzLlxuICAgICAqL1xuICAgIHN0eWxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyBhIHJpcHBsZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgcmlwcGxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb2xvcj86ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdHlsaW5nIHZhcmlhbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICB2YXJpYW50PzogJ3RleHQnIHwgJ3JhaXNlZCcgfCAndW5lbGV2YXRlZCcgfCAnb3V0bGluZWQnO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gdXNlIHRvdWNoIHN0eWxpbmdcbiAgICAgKi9cbiAgICB0b3VjaD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgcHJvdmlkZWQsIHRoZSBidXR0b24gd2lsbCBhY3QgYXMgYSBsaW5rLlxuICAgICAqL1xuICAgIGhyZWY/OiBIcmVmO1xuICAgIC8qKlxuICAgICAqIFRoZSBhY3Rpb24gdGhlIGJ1dHRvbiByZXByZXNlbnRzLlxuICAgICAqL1xuICAgIGFjdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBidXR0b24gaXMgdGhlIGRlZmF1bHQgYWN0aW9uIGZvciB0aGUgZGlhbG9nLlxuICAgICAqL1xuICAgIGRlZmF1bHRBY3Rpb24/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGJ1dHRvbiBpcyB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiBmb3IgdGhlIGJhbm5lci5cbiAgICAgKi9cbiAgICBzZWNvbmRhcnk/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdG8gdXNlIHRvIHJlbmRlciB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjb21wb25lbnQ/OiBTbXVpQ29tcG9uZW50PFNtdWlFbGVtZW50TWFwW1RhZ05hbWVdPjtcbiAgICAvKipcbiAgICAgKiBUaGUgdGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gY3JlYXRlLlxuICAgICAqL1xuICAgIHRhZz86IFRhZ05hbWU7XG5cbiAgICBjaGlsZHJlbj86IFNuaXBwZXQ7XG4gIH07XG4gIGxldCB7XG4gICAgdXNlID0gW10sXG4gICAgY2xhc3M6IGNsYXNzTmFtZSA9ICcnLFxuICAgIHN0eWxlID0gJycsXG4gICAgcmlwcGxlID0gdHJ1ZSxcbiAgICBjb2xvciA9ICdwcmltYXJ5JyxcbiAgICB2YXJpYW50ID0gJ3RleHQnLFxuICAgIHRvdWNoID0gZmFsc2UsXG4gICAgaHJlZixcbiAgICBhY3Rpb24gPSAnY2xvc2UnLFxuICAgIGRlZmF1bHRBY3Rpb24gPSBmYWxzZSxcbiAgICBzZWNvbmRhcnkgPSBmYWxzZSxcbiAgICBjb21wb25lbnQ6IE15Q29tcG9uZW50ID0gU211aUVsZW1lbnQsXG4gICAgdGFnID0gKGhyZWYgPT0gbnVsbCA/ICdidXR0b24nIDogJ2EnKSBhcyBUYWdOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3RQcm9wc1xuICB9OiBPd25Qcm9wcyAmIFNtdWlBdHRyczxUYWdOYW1lLCBrZXlvZiBPd25Qcm9wcz4gPSAkcHJvcHMoKTtcblxuICBsZXQgZWxlbWVudDogUmV0dXJuVHlwZTxTbXVpQ29tcG9uZW50PFNtdWlFbGVtZW50TWFwW1RhZ05hbWVdPj47XG4gIGxldCBpbnRlcm5hbENsYXNzZXM6IHsgW2s6IHN0cmluZ106IGJvb2xlYW4gfSA9ICRzdGF0ZSh7fSk7XG4gIGxldCBpbnRlcm5hbFN0eWxlczogeyBbazogc3RyaW5nXTogc3RyaW5nIH0gPSAkc3RhdGUoe30pO1xuICBsZXQgY29udGV4dCA9IGdldENvbnRleHQ8c3RyaW5nIHwgdW5kZWZpbmVkPignU01VSTpidXR0b246Y29udGV4dCcpO1xuXG4gIGNvbnN0IGFjdGlvblByb3AgPSAkZGVyaXZlZChcbiAgICBjb250ZXh0ID09PSAnZGlhbG9nOmFjdGlvbicgJiYgYWN0aW9uICE9IG51bGxcbiAgICAgID8geyAnZGF0YS1tZGMtZGlhbG9nLWFjdGlvbic6IGFjdGlvbiB9XG4gICAgICA6IHsgYWN0aW9uIH0sXG4gICk7XG4gIGNvbnN0IGRlZmF1bHRQcm9wID0gJGRlcml2ZWQoXG4gICAgY29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nICYmIGRlZmF1bHRBY3Rpb25cbiAgICAgID8geyAnZGF0YS1tZGMtZGlhbG9nLWJ1dHRvbi1kZWZhdWx0JzogJycgfVxuICAgICAgOiB7fSxcbiAgKTtcbiAgY29uc3Qgc2Vjb25kYXJ5UHJvcCA9ICRkZXJpdmVkKGNvbnRleHQgPT09ICdiYW5uZXInID8ge30gOiB7IHNlY29uZGFyeSB9KTtcblxuICBsZXQgcHJldmlvdXNEaXNhYmxlZCA9IHJlc3RQcm9wcy5kaXNhYmxlZDtcbiAgJGVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZpb3VzRGlzYWJsZWQgIT09IHJlc3RQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWwgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgIGlmICgnYmx1cicgaW4gZWwpIHtcbiAgICAgICAgICBlbC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByZXZpb3VzRGlzYWJsZWQgPSByZXN0UHJvcHMuZGlzYWJsZWQ7XG4gICAgfVxuICB9KTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmxhYmVsOmNvbnRleHQnLCAnYnV0dG9uJyk7XG4gIHNldENvbnRleHQoJ1NNVUk6aWNvbjpjb250ZXh0JywgJ2J1dHRvbicpO1xuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCEoY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3NlcykgfHwgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3R5bGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Jhbm5lcicpIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBnZXRFbGVtZW50KCksXG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgID8gJ1NNVUlCYW5uZXJCdXR0b25TZWNvbmRhcnlBY3Rpb25DbGljaydcbiAgICAgICAgICA6ICdTTVVJQmFubmVyQnV0dG9uUHJpbWFyeUFjdGlvbkNsaWNrJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQU5DSE9SOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyxcbiAgICBBTklNQVRJTkdfQ0xPU0VEOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5pbWF0aW5nLWNsb3NlZCcsXG4gICAgQU5JTUFUSU5HX09QRU46ICdtZGMtbWVudS1zdXJmYWNlLS1hbmltYXRpbmctb3BlbicsXG4gICAgRklYRUQ6ICdtZGMtbWVudS1zdXJmYWNlLS1maXhlZCcsXG4gICAgSVNfT1BFTl9CRUxPVzogJ21kYy1tZW51LXN1cmZhY2UtLWlzLW9wZW4tYmVsb3cnLFxuICAgIE9QRU46ICdtZGMtbWVudS1zdXJmYWNlLS1vcGVuJyxcbiAgICBST09UOiAnbWRjLW1lbnUtc3VyZmFjZScsXG59O1xuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG52YXIgc3RyaW5ncyA9IHtcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpjbG9zZWQnLFxuICAgIENMT1NJTkdfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpjbG9zaW5nJyxcbiAgICBPUEVORURfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpvcGVuZWQnLFxuICAgIE9QRU5JTkdfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpvcGVuaW5nJyxcbiAgICBGT0NVU0FCTEVfRUxFTUVOVFM6IFtcbiAgICAgICAgJ2J1dHRvbjpub3QoOmRpc2FibGVkKScsXG4gICAgICAgICdbaHJlZl06bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSknLFxuICAgICAgICAnaW5wdXQ6bm90KDpkaXNhYmxlZCknLFxuICAgICAgICAnc2VsZWN0Om5vdCg6ZGlzYWJsZWQpJyxcbiAgICAgICAgJ3RleHRhcmVhOm5vdCg6ZGlzYWJsZWQpJyxcbiAgICAgICAgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKScsXG4gICAgXS5qb2luKCcsICcpLFxufTtcbi8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG52YXIgbnVtYmVycyA9IHtcbiAgICAvKiogVG90YWwgZHVyYXRpb24gb2YgbWVudS1zdXJmYWNlIG9wZW4gYW5pbWF0aW9uLiAqL1xuICAgIFRSQU5TSVRJT05fT1BFTl9EVVJBVElPTjogMTIwLFxuICAgIC8qKiBUb3RhbCBkdXJhdGlvbiBvZiBtZW51LXN1cmZhY2UgY2xvc2UgYW5pbWF0aW9uLiAqL1xuICAgIFRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT046IDc1LFxuICAgIC8qKlxuICAgICAqIE1hcmdpbiBsZWZ0IHRvIHRoZSBlZGdlIG9mIHRoZSB2aWV3cG9ydCB3aGVuIG1lbnUtc3VyZmFjZSBpcyBhdCBtYXhpbXVtXG4gICAgICogcG9zc2libGUgaGVpZ2h0LiBBbHNvIHVzZWQgYXMgYSB2aWV3cG9ydCBtYXJnaW4uXG4gICAgICovXG4gICAgTUFSR0lOX1RPX0VER0U6IDMyLFxuICAgIC8qKlxuICAgICAqIFJhdGlvIG9mIGFuY2hvciB3aWR0aCB0byBtZW51LXN1cmZhY2Ugd2lkdGggZm9yIHN3aXRjaGluZyBmcm9tIGNvcm5lclxuICAgICAqIHBvc2l0aW9uaW5nIHRvIGNlbnRlciBwb3NpdGlvbmluZy5cbiAgICAgKi9cbiAgICBBTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPOiAwLjY3LFxuICAgIC8qKlxuICAgICAqIEFtb3VudCBvZiB0aW1lIHRvIHdhaXQgYmVmb3JlIHJlc3RvcmluZyBmb2N1cyB3aGVuIGNsb3NpbmcgdGhlIG1lbnVcbiAgICAgKiBzdXJmYWNlLiBUaGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIGlmIGEgdG91Y2ggZXZlbnQgdHJpZ2dlcmVkIHRoZSBtZW51XG4gICAgICogY2xvc2UsIGFuZCB0aGUgc3Vic2VxdWVudCBtb3VzZSBldmVudCBvY2N1cnMgYWZ0ZXIgZm9jdXMgaXMgcmVzdG9yZWQsIHRoZW5cbiAgICAgKiB0aGUgcmVzdG9yZWQgZm9jdXMgd291bGQgYmUgbG9zdC5cbiAgICAgKi9cbiAgICBUT1VDSF9FVkVOVF9XQUlUX01TOiAzMCxcbn07XG4vKipcbiAqIEVudW0gZm9yIGJpdHMgaW4gdGhlIHtAc2VlIENvcm5lcikgYml0bWFwLlxuICovXG52YXIgQ29ybmVyQml0O1xuKGZ1bmN0aW9uIChDb3JuZXJCaXQpIHtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiQk9UVE9NXCJdID0gMV0gPSBcIkJPVFRPTVwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJDRU5URVJcIl0gPSAyXSA9IFwiQ0VOVEVSXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIlJJR0hUXCJdID0gNF0gPSBcIlJJR0hUXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkZMSVBfUlRMXCJdID0gOF0gPSBcIkZMSVBfUlRMXCI7XG59KShDb3JuZXJCaXQgfHwgKENvcm5lckJpdCA9IHt9KSk7XG4vKipcbiAqIEVudW0gZm9yIHJlcHJlc2VudGluZyBhbiBlbGVtZW50IGNvcm5lciBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUtc3VyZmFjZS5cbiAqXG4gKiBUaGUgU1RBUlQgY29uc3RhbnRzIG1hcCB0byBMRUZUIGlmIGVsZW1lbnQgZGlyZWN0aW9uYWxpdHkgaXMgbGVmdFxuICogdG8gcmlnaHQgYW5kIFJJR0hUIGlmIHRoZSBkaXJlY3Rpb25hbGl0eSBpcyByaWdodCB0byBsZWZ0LlxuICogTGlrZXdpc2UgRU5EIG1hcHMgdG8gUklHSFQgb3IgTEVGVCBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbmFsaXR5LlxuICovXG52YXIgQ29ybmVyO1xuKGZ1bmN0aW9uIChDb3JuZXIpIHtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0xFRlRcIl0gPSAwXSA9IFwiVE9QX0xFRlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX1JJR0hUXCJdID0gNF0gPSBcIlRPUF9SSUdIVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fTEVGVFwiXSA9IDFdID0gXCJCT1RUT01fTEVGVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fUklHSFRcIl0gPSA1XSA9IFwiQk9UVE9NX1JJR0hUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9TVEFSVFwiXSA9IDhdID0gXCJUT1BfU1RBUlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0VORFwiXSA9IDEyXSA9IFwiVE9QX0VORFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fU1RBUlRcIl0gPSA5XSA9IFwiQk9UVE9NX1NUQVJUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9FTkRcIl0gPSAxM10gPSBcIkJPVFRPTV9FTkRcIjtcbn0pKENvcm5lciB8fCAoQ29ybmVyID0ge30pKTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIENvcm5lckJpdCwgQ29ybmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzLCBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgQ29ybmVyLCBDb3JuZXJCaXQsIGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc1N1cmZhY2VPcGVuID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzUXVpY2tPcGVuID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzSG9pc3RlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNGaXhlZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzSG9yaXpvbnRhbGx5Q2VudGVyZWRPblZpZXdwb3J0ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm1heEhlaWdodCA9IDA7XG4gICAgICAgIF90aGlzLm9wZW5Cb3R0b21CaWFzID0gMDtcbiAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWQgPSAwO1xuICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWQgPSAwO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25SZXF1ZXN0SWQgPSAwO1xuICAgICAgICBfdGhpcy5hbmNob3JDb3JuZXIgPSBDb3JuZXIuVE9QX1NUQVJUO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UgdG8gd2hpY2ggbWVudSBzdXJmYWNlIGlzIGF0dGFjaGVkIHRvIGFuY2hvci5cbiAgICAgICAgICpcbiAgICAgICAgICogIEFuY2hvciBjb3JuZXIgLS0tPistLS0tLS0tLS0tK1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgfCAgQU5DSE9SICB8XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLStcbiAgICAgICAgICogIE9yaWdpbiBjb3JuZXIgLS0tPistLS0tLS0tLS0tLS0tLStcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHwgTUVOVSBTVVJGQUNFIHxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLStcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLm9yaWdpbkNvcm5lciA9IENvcm5lci5UT1BfU1RBUlQ7XG4gICAgICAgIF90aGlzLmFuY2hvck1hcmdpbiA9IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH07XG4gICAgICAgIF90aGlzLnBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJDb3JuZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBDb3JuZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBzZWUge0BsaW5rIE1EQ01lbnVTdXJmYWNlQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaGFzQW5jaG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc1J0bDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5uZXJEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldEFuY2hvckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93RGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRCb2R5RGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dTY3JvbGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRNYXhIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzYXZlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZXN0b3JlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3Npbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UID0gX2EuUk9PVCwgT1BFTiA9IF9hLk9QRU47XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyLmhhc0NsYXNzKFJPT1QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoUk9PVCArIFwiIGNsYXNzIHJlcXVpcmVkIGluIHJvb3QgZWxlbWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5oYXNDbGFzcyhPUEVOKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N1cmZhY2VPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25SZXF1ZXN0SWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IG1lbnUgc3VyZmFjZVxuICAgICAqICAgICBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yQ29ybmVyID0gY29ybmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmxpcCBtZW51IGNvcm5lciBob3Jpem9udGFsbHkuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5mbGlwQ29ybmVySG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9yaWdpbkNvcm5lciA9IHRoaXMub3JpZ2luQ29ybmVyIF4gQ29ybmVyQml0LlJJR0hUO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG1hcmdpbiBTZXQgb2YgbWFyZ2luIHZhbHVlcyBmcm9tIGFuY2hvci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFuY2hvck1hcmdpbiA9IGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW4udG9wID0gbWFyZ2luLnRvcCB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi5yaWdodCA9IG1hcmdpbi5yaWdodCB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi5ib3R0b20gPSBtYXJnaW4uYm90dG9tIHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQgPSBtYXJnaW4ubGVmdCB8fCAwO1xuICAgIH07XG4gICAgLyoqIFVzZWQgdG8gaW5kaWNhdGUgaWYgdGhlIG1lbnUtc3VyZmFjZSBpcyBob2lzdGVkIHRvIHRoZSBib2R5LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0SXNIb2lzdGVkID0gZnVuY3Rpb24gKGlzSG9pc3RlZCkge1xuICAgICAgICB0aGlzLmlzSG9pc3RlZEVsZW1lbnQgPSBpc0hvaXN0ZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIHNldCB0aGUgbWVudS1zdXJmYWNlIGNhbGN1bGF0aW9ucyBiYXNlZCBvbiBhIGZpeGVkIHBvc2l0aW9uIG1lbnUuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRGaXhlZFBvc2l0aW9uID0gZnVuY3Rpb24gKGlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmlzRml4ZWRQb3NpdGlvbiA9IGlzRml4ZWRQb3NpdGlvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyB0cnVlIGlmIG1lbnUgaXMgaW4gZml4ZWQgKGBwb3NpdGlvbjogZml4ZWRgKSBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmlzRml4ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRml4ZWRQb3NpdGlvbjtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBtZW51LXN1cmZhY2UgcG9zaXRpb24gb24gdGhlIHBhZ2UuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBYnNvbHV0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5pc0Zpbml0ZSh4KSA/IHggOiAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmlzRmluaXRlKHkpID8geSA6IDA7XG4gICAgfTtcbiAgICAvKiogU2V0cyB3aGV0aGVyIG1lbnUtc3VyZmFjZSBzaG91bGQgYmUgaG9yaXpvbnRhbGx5IGNlbnRlcmVkIHRvIHZpZXdwb3J0LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0SXNIb3Jpem9udGFsbHlDZW50ZXJlZE9uVmlld3BvcnQgPSBmdW5jdGlvbiAoaXNDZW50ZXJlZCkge1xuICAgICAgICB0aGlzLmlzSG9yaXpvbnRhbGx5Q2VudGVyZWRPblZpZXdwb3J0ID0gaXNDZW50ZXJlZDtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UXVpY2tPcGVuID0gZnVuY3Rpb24gKHF1aWNrT3Blbikge1xuICAgICAgICB0aGlzLmlzUXVpY2tPcGVuID0gcXVpY2tPcGVuO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBtYXhpbXVtIG1lbnUtc3VyZmFjZSBoZWlnaHQgb24gb3Blbi5cbiAgICAgKiBAcGFyYW0gbWF4SGVpZ2h0IFRoZSBkZXNpcmVkIG1heC1oZWlnaHQuIFNldCB0byAwIChkZWZhdWx0KSB0b1xuICAgICAqICAgICBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZSBtYXggaGVpZ2h0IGJhc2VkIG9uIGF2YWlsYWJsZSB2aWV3cG9ydCBzcGFjZS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldE1heEhlaWdodCA9IGZ1bmN0aW9uIChtYXhIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdG8gYSBwb3NpdGl2ZSBpbnRlZ2VyIHRvIGluZmx1ZW5jZSB0aGUgbWVudSB0byBwcmVmZXJlbnRpYWxseSBvcGVuXG4gICAgICogYmVsb3cgdGhlIGFuY2hvciBpbnN0ZWFkIG9mIGFib3ZlLlxuICAgICAqIEBwYXJhbSBiaWFzIEEgdmFsdWUgb2YgYHhgIHNpbXVsYXRlcyBhbiBleHRyYSBgeGAgcGl4ZWxzIG9mIGF2YWlsYWJsZSBzcGFjZVxuICAgICAqICAgICBiZWxvdyB0aGUgbWVudSBkdXJpbmcgcG9zaXRpb25pbmcgY2FsY3VsYXRpb25zLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0T3BlbkJvdHRvbUJpYXMgPSBmdW5jdGlvbiAoYmlhcykge1xuICAgICAgICB0aGlzLm9wZW5Cb3R0b21CaWFzID0gYmlhcztcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1N1cmZhY2VPcGVuO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaXNTdXJmYWNlT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlPcGVuaW5nKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zYXZlRm9jdXMoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNRdWlja09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdXJmYWNlT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXIuZ2V0SW5uZXJEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmF1dG9wb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfT1BFTik7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGltZW5zaW9ucyA9IF90aGlzLmFkYXB0ZXIuZ2V0SW5uZXJEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXV0b3Bvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgICAgICAgICB9LCBudW1iZXJzLlRSQU5TSVRJT05fT1BFTl9EVVJBVElPTik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNTdXJmYWNlT3BlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2tpcFJlc3RvcmVGb2N1cyA9PT0gdm9pZCAwKSB7IHNraXBSZXN0b3JlRm9jdXMgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNTdXJmYWNlT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlDbG9zaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmlzUXVpY2tPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3VyZmFjZU9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMubWF5YmVSZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5JU19PUEVOX0JFTE9XKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlDbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQ0xPU0VEKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLklTX09QRU5fQkVMT1cpO1xuICAgICAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkID0gMDtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU3VyZmFjZU9wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKCFza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm1heWJlUmVzdG9yZUZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBIYW5kbGUgY2xpY2tzIGFuZCBjbG9zZSBpZiBub3Qgd2l0aGluIG1lbnUtc3VyZmFjZSBlbGVtZW50LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQm9keUNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgZWwgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzRWxlbWVudEluQ29udGFpbmVyKGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9O1xuICAgIC8qKiBIYW5kbGUga2V5cyB0aGF0IGNsb3NlIHRoZSBzdXJmYWNlLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldnQua2V5Q29kZSwga2V5ID0gZXZ0LmtleTtcbiAgICAgICAgdmFyIGlzRXNjYXBlID0ga2V5ID09PSAnRXNjYXBlJyB8fCBrZXlDb2RlID09PSAyNztcbiAgICAgICAgaWYgKGlzRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuYXV0b3Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIENvbXB1dGUgbWVhc3VyZW1lbnRzIGZvciBhdXRvcG9zaXRpb24gbWV0aG9kcyByZXVzZS5cbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudHMgPSB0aGlzLmdldEF1dG9MYXlvdXRtZWFzdXJlbWVudHMoKTtcbiAgICAgICAgdmFyIGNvcm5lciA9IHRoaXMuZ2V0b3JpZ2luQ29ybmVyKCk7XG4gICAgICAgIHZhciBtYXhNZW51U3VyZmFjZUhlaWdodCA9IHRoaXMuZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHQoY29ybmVyKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsQWxpZ25tZW50ID0gdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKSA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICAgIHZhciBob3Jpem9udGFsQWxpZ25tZW50ID0gdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgdmFyIGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmdldEhvcml6b250YWxPcmlnaW5PZmZzZXQoY29ybmVyKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gdGhpcy5nZXRWZXJ0aWNhbE9yaWdpbk9mZnNldChjb3JuZXIpO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLm1lYXN1cmVtZW50cywgYW5jaG9yU2l6ZSA9IF9iLmFuY2hvclNpemUsIHN1cmZhY2VTaXplID0gX2Iuc3VyZmFjZVNpemU7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbaG9yaXpvbnRhbEFsaWdubWVudF0gPSBob3Jpem9udGFsT2Zmc2V0LFxuICAgICAgICAgICAgX2FbdmVydGljYWxBbGlnbm1lbnRdID0gdmVydGljYWxPZmZzZXQsXG4gICAgICAgICAgICBfYSk7XG4gICAgICAgIC8vIENlbnRlciBhbGlnbiB3aGVuIGFuY2hvciB3aWR0aCBpcyBjb21wYXJhYmxlIG9yIGdyZWF0ZXIgdGhhbiBtZW51XG4gICAgICAgIC8vIHN1cmZhY2UsIG90aGVyd2lzZSBrZWVwIGNvcm5lci5cbiAgICAgICAgaWYgKGFuY2hvclNpemUud2lkdGggLyBzdXJmYWNlU2l6ZS53aWR0aCA+XG4gICAgICAgICAgICBudW1iZXJzLkFOQ0hPUl9UT19NRU5VX1NVUkZBQ0VfV0lEVEhfUkFUSU8pIHtcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgbWVudS1zdXJmYWNlIGhhcyBiZWVuIGhvaXN0ZWQgdG8gdGhlIGJvZHksIGl0J3Mgbm8gbG9uZ2VyIHJlbGF0aXZlXG4gICAgICAgIC8vIHRvIHRoZSBhbmNob3IgZWxlbWVudFxuICAgICAgICBpZiAodGhpcy5pc0hvaXN0ZWRFbGVtZW50IHx8IHRoaXMuaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnQocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRUcmFuc2Zvcm1PcmlnaW4oaG9yaXpvbnRhbEFsaWdubWVudCArIFwiIFwiICsgdmVydGljYWxBbGlnbm1lbnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0TWF4SGVpZ2h0KG1heE1lbnVTdXJmYWNlSGVpZ2h0ID8gbWF4TWVudVN1cmZhY2VIZWlnaHQgKyAncHgnIDogJycpO1xuICAgICAgICAvLyBJZiBpdCBpcyBvcGVuZWQgZnJvbSB0aGUgdG9wIHRoZW4gYWRkIGlzLW9wZW4tYmVsb3cgY2xhc3NcbiAgICAgICAgaWYgKCF0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSVNfT1BFTl9CRUxPVyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gTWVhc3VyZW1lbnRzIHVzZWQgdG8gcG9zaXRpb24gbWVudSBzdXJmYWNlIHBvcHVwLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0QXV0b0xheW91dG1lYXN1cmVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuY2hvclJlY3QgPSB0aGlzLmFkYXB0ZXIuZ2V0QW5jaG9yRGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgYm9keVNpemUgPSB0aGlzLmFkYXB0ZXIuZ2V0Qm9keURpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IHRoaXMuYWRhcHRlci5nZXRXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciB3aW5kb3dTY3JvbGwgPSB0aGlzLmFkYXB0ZXIuZ2V0V2luZG93U2Nyb2xsKCk7XG4gICAgICAgIGlmICghYW5jaG9yUmVjdCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIFBvc2l0aW9uYWwgcHJvcGVydGllcyBhcmUgbW9yZSByZWFkYWJsZSB3aGVuIHRoZXkncmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgICAgICAgYW5jaG9yUmVjdCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW5jaG9yU2l6ZTogYW5jaG9yUmVjdCxcbiAgICAgICAgICAgIGJvZHlTaXplOiBib2R5U2l6ZSxcbiAgICAgICAgICAgIHN1cmZhY2VTaXplOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIFBvc2l0aW9uYWwgcHJvcGVydGllcyBhcmUgbW9yZSByZWFkYWJsZSB3aGVuIHRoZXkncmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgICAgICAgICAgIHRvcDogYW5jaG9yUmVjdC50b3AsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHZpZXdwb3J0U2l6ZS53aWR0aCAtIGFuY2hvclJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB2aWV3cG9ydFNpemUuaGVpZ2h0IC0gYW5jaG9yUmVjdC5ib3R0b20sXG4gICAgICAgICAgICAgICAgbGVmdDogYW5jaG9yUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlld3BvcnRTaXplOiB2aWV3cG9ydFNpemUsXG4gICAgICAgICAgICB3aW5kb3dTY3JvbGw6IHdpbmRvd1Njcm9sbCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBjb3JuZXIgb2YgdGhlIGFuY2hvciBmcm9tIHdoaWNoIHRvIGFuaW1hdGUgYW5kIHBvc2l0aW9uIHRoZVxuICAgICAqIG1lbnUgc3VyZmFjZS5cbiAgICAgKlxuICAgICAqIE9ubHkgTEVGVCBvciBSSUdIVCBiaXQgaXMgdXNlZCB0byBwb3NpdGlvbiB0aGUgbWVudSBzdXJmYWNlIGlnbm9yaW5nIFJUTFxuICAgICAqIGNvbnRleHQuIEUuZy4sIG1lbnUgc3VyZmFjZSB3aWxsIGJlIHBvc2l0aW9uZWQgZnJvbSByaWdodCBzaWRlIG9uIFRPUF9FTkQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRvcmlnaW5Db3JuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb3JuZXIgPSB0aGlzLm9yaWdpbkNvcm5lcjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tZWFzdXJlbWVudHMsIHZpZXdwb3J0RGlzdGFuY2UgPSBfYS52aWV3cG9ydERpc3RhbmNlLCBhbmNob3JTaXplID0gX2EuYW5jaG9yU2l6ZSwgc3VyZmFjZVNpemUgPSBfYS5zdXJmYWNlU2l6ZTtcbiAgICAgICAgdmFyIE1BUkdJTl9UT19FREdFID0gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLm51bWJlcnMuTUFSR0lOX1RPX0VER0U7XG4gICAgICAgIHZhciBpc0FuY2hvcmVkVG9Cb3R0b20gPSB0aGlzLmhhc0JpdCh0aGlzLmFuY2hvckNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBhdmFpbGFibGVUb3A7XG4gICAgICAgIHZhciBhdmFpbGFibGVCb3R0b207XG4gICAgICAgIGlmIChpc0FuY2hvcmVkVG9Cb3R0b20pIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVRvcCA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS50b3AgLSBNQVJHSU5fVE9fRURHRSArIHRoaXMuYW5jaG9yTWFyZ2luLmJvdHRvbTtcbiAgICAgICAgICAgIGF2YWlsYWJsZUJvdHRvbSA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSBNQVJHSU5fVE9fRURHRSAtIHRoaXMuYW5jaG9yTWFyZ2luLmJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVRvcCA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS50b3AgLSBNQVJHSU5fVE9fRURHRSArIHRoaXMuYW5jaG9yTWFyZ2luLnRvcDtcbiAgICAgICAgICAgIGF2YWlsYWJsZUJvdHRvbSA9IHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gTUFSR0lOX1RPX0VER0UgK1xuICAgICAgICAgICAgICAgIGFuY2hvclNpemUuaGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW4udG9wO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0F2YWlsYWJsZUJvdHRvbSA9IGF2YWlsYWJsZUJvdHRvbSAtIHN1cmZhY2VTaXplLmhlaWdodCA+IDA7XG4gICAgICAgIGlmICghaXNBdmFpbGFibGVCb3R0b20gJiZcbiAgICAgICAgICAgIGF2YWlsYWJsZVRvcCA+IGF2YWlsYWJsZUJvdHRvbSArIHRoaXMub3BlbkJvdHRvbUJpYXMpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBib3R0b20gc2lkZSBvZiBzdXJmYWNlIHRvIHRoZSBhbmNob3IuXG4gICAgICAgICAgICBjb3JuZXIgPSB0aGlzLnNldEJpdChjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1J0bCA9IHRoaXMuYWRhcHRlci5pc1J0bCgpO1xuICAgICAgICB2YXIgaXNGbGlwUnRsID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5GTElQX1JUTCk7XG4gICAgICAgIHZhciBoYXNSaWdodEJpdCA9IHRoaXMuaGFzQml0KHRoaXMuYW5jaG9yQ29ybmVyLCBDb3JuZXJCaXQuUklHSFQpIHx8XG4gICAgICAgICAgICB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIC8vIFdoZXRoZXIgc3VyZmFjZSBhdHRhY2hlZCB0byByaWdodCBzaWRlIG9mIGFuY2hvciBlbGVtZW50LlxuICAgICAgICB2YXIgaXNBbmNob3JlZFRvUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8gQW5jaG9yZWQgdG8gc3RhcnRcbiAgICAgICAgaWYgKGlzUnRsICYmIGlzRmxpcFJ0bCkge1xuICAgICAgICAgICAgaXNBbmNob3JlZFRvUmlnaHQgPSAhaGFzUmlnaHRCaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBbmNob3JlZCB0byByaWdodFxuICAgICAgICAgICAgaXNBbmNob3JlZFRvUmlnaHQgPSBoYXNSaWdodEJpdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXZhaWxhYmxlTGVmdDtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVJpZ2h0O1xuICAgICAgICBpZiAoaXNBbmNob3JlZFRvUmlnaHQpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZUxlZnQgPVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIGFuY2hvclNpemUud2lkdGggKyB0aGlzLmFuY2hvck1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgIGF2YWlsYWJsZVJpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS5yaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luLnJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXZhaWxhYmxlTGVmdCA9IHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQ7XG4gICAgICAgICAgICBhdmFpbGFibGVSaWdodCA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5yaWdodCArIGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbi5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0F2YWlsYWJsZUxlZnQgPSBhdmFpbGFibGVMZWZ0IC0gc3VyZmFjZVNpemUud2lkdGggPiAwO1xuICAgICAgICB2YXIgaXNBdmFpbGFibGVSaWdodCA9IGF2YWlsYWJsZVJpZ2h0IC0gc3VyZmFjZVNpemUud2lkdGggPiAwO1xuICAgICAgICB2YXIgaXNPcmlnaW5Db3JuZXJBbGlnbmVkVG9FbmQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5GTElQX1JUTCkgJiZcbiAgICAgICAgICAgIHRoaXMuaGFzQml0KGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgaWYgKGlzQXZhaWxhYmxlUmlnaHQgJiYgaXNPcmlnaW5Db3JuZXJBbGlnbmVkVG9FbmQgJiYgaXNSdGwgfHxcbiAgICAgICAgICAgICFpc0F2YWlsYWJsZUxlZnQgJiYgaXNPcmlnaW5Db3JuZXJBbGlnbmVkVG9FbmQpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBsZWZ0IHNpZGUgb2Ygc3VyZmFjZSB0byB0aGUgYW5jaG9yLlxuICAgICAgICAgICAgY29ybmVyID0gdGhpcy51bnNldEJpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBdmFpbGFibGVMZWZ0ICYmIGlzQW5jaG9yZWRUb1JpZ2h0ICYmIGlzUnRsIHx8XG4gICAgICAgICAgICAoaXNBdmFpbGFibGVMZWZ0ICYmICFpc0FuY2hvcmVkVG9SaWdodCAmJiBoYXNSaWdodEJpdCkgfHxcbiAgICAgICAgICAgICghaXNBdmFpbGFibGVSaWdodCAmJiBhdmFpbGFibGVMZWZ0ID49IGF2YWlsYWJsZVJpZ2h0KSkge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHJpZ2h0IHNpZGUgb2Ygc3VyZmFjZSB0byB0aGUgYW5jaG9yLlxuICAgICAgICAgICAgY29ybmVyID0gdGhpcy5zZXRCaXQoY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3JuZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIE1heGltdW0gaGVpZ2h0IG9mIHRoZSBtZW51IHN1cmZhY2UsIGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZS4gMFxuICAgICAqICAgICBpbmRpY2F0ZXMgc2hvdWxkIG5vdCBiZSBzZXQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRNZW51U3VyZmFjZU1heEhlaWdodCA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB2aWV3cG9ydERpc3RhbmNlID0gdGhpcy5tZWFzdXJlbWVudHMudmlld3BvcnREaXN0YW5jZTtcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgIHZhciBpc0JvdHRvbUFsaWduZWQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgaXNCb3R0b21BbmNob3JlZCA9IHRoaXMuaGFzQml0KHRoaXMuYW5jaG9yQ29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIE1BUkdJTl9UT19FREdFID0gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLm51bWJlcnMuTUFSR0lOX1RPX0VER0U7XG4gICAgICAgIC8vIFdoZW4gbWF4aW11bSBoZWlnaHQgaXMgbm90IHNwZWNpZmllZCwgaXQgaXMgaGFuZGxlZCBmcm9tIENTUy5cbiAgICAgICAgaWYgKGlzQm90dG9tQWxpZ25lZCkge1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS50b3AgKyB0aGlzLmFuY2hvck1hcmdpbi50b3AgLSBNQVJHSU5fVE9fRURHRTtcbiAgICAgICAgICAgIGlmICghaXNCb3R0b21BbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCArPSB0aGlzLm1lYXN1cmVtZW50cy5hbmNob3JTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gdGhpcy5hbmNob3JNYXJnaW4uYm90dG9tICtcbiAgICAgICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50cy5hbmNob3JTaXplLmhlaWdodCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgICAgICAgaWYgKGlzQm90dG9tQW5jaG9yZWQpIHtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgLT0gdGhpcy5tZWFzdXJlbWVudHMuYW5jaG9yU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heEhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gSG9yaXpvbnRhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nXG4gICAgICogICAgIGFuY2hvciBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRIb3Jpem9udGFsT3JpZ2luT2Zmc2V0ID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgYW5jaG9yU2l6ZSA9IHRoaXMubWVhc3VyZW1lbnRzLmFuY2hvclNpemU7XG4gICAgICAgIC8vIGlzUmlnaHRBbGlnbmVkIGNvcnJlc3BvbmRzIHRvIHVzaW5nIHRoZSAncmlnaHQnIHByb3BlcnR5IG9uIHRoZSBzdXJmYWNlLlxuICAgICAgICB2YXIgaXNSaWdodEFsaWduZWQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIHZhciBhdm9pZEhvcml6b250YWxPdmVybGFwID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIGlmIChpc1JpZ2h0QWxpZ25lZCkge1xuICAgICAgICAgICAgdmFyIHJpZ2h0T2Zmc2V0ID0gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/XG4gICAgICAgICAgICAgICAgYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQgOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luLnJpZ2h0O1xuICAgICAgICAgICAgLy8gRm9yIGhvaXN0ZWQgb3IgZml4ZWQgZWxlbWVudHMsIGFkanVzdCB0aGUgb2Zmc2V0IGJ5IHRoZSBkaWZmZXJlbmNlXG4gICAgICAgICAgICAvLyBiZXR3ZWVuIHZpZXdwb3J0IHdpZHRoIGFuZCBib2R5IHdpZHRoIHNvIHdoZW4gd2UgY2FsY3VsYXRlIHRoZSByaWdodFxuICAgICAgICAgICAgLy8gdmFsdWUgKGBhZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50YCkgYmFzZWQgb24gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uLCB0aGUgcmlnaHQgcHJvcGVydHkgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG9pc3RlZEVsZW1lbnQgfHwgdGhpcy5pc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHRPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICAodGhpcy5tZWFzdXJlbWVudHMudmlld3BvcnRTaXplLndpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnRzLmJvZHlTaXplLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByaWdodE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/IGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbi5yaWdodCA6XG4gICAgICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi5sZWZ0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICogQHJldHVybiBWZXJ0aWNhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nXG4gICAgICogICAgIGFuY2hvciBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRWZXJ0aWNhbE9yaWdpbk9mZnNldCA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdmFyIGFuY2hvclNpemUgPSB0aGlzLm1lYXN1cmVtZW50cy5hbmNob3JTaXplO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIGF2b2lkVmVydGljYWxPdmVybGFwID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgICAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IGFuY2hvclNpemUuaGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW4udG9wIDpcbiAgICAgICAgICAgICAgICAtdGhpcy5hbmNob3JNYXJnaW4uYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeSA9IGF2b2lkVmVydGljYWxPdmVybGFwID9cbiAgICAgICAgICAgICAgICAoYW5jaG9yU2l6ZS5oZWlnaHQgKyB0aGlzLmFuY2hvck1hcmdpbi5ib3R0b20pIDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi50b3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBvZmZzZXRzIGZvciBwb3NpdGlvbmluZyB0aGUgbWVudS1zdXJmYWNlIHdoZW4gdGhlXG4gICAgICogbWVudS1zdXJmYWNlIGhhcyBiZWVuIGhvaXN0ZWQgdG8gdGhlIGJvZHkuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5hZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLm1lYXN1cmVtZW50cywgd2luZG93U2Nyb2xsID0gX2Iud2luZG93U2Nyb2xsLCB2aWV3cG9ydERpc3RhbmNlID0gX2Iudmlld3BvcnREaXN0YW5jZSwgc3VyZmFjZVNpemUgPSBfYi5zdXJmYWNlU2l6ZSwgdmlld3BvcnRTaXplID0gX2Iudmlld3BvcnRTaXplO1xuICAgICAgICB2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhwb3NpdGlvbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wc18xID0gX192YWx1ZXMocHJvcHMpLCBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKTsgIXByb3BzXzFfMS5kb25lOyBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBvc2l0aW9uW3Byb3BdIHx8IDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNIb3Jpem9udGFsbHlDZW50ZXJlZE9uVmlld3BvcnQgJiZcbiAgICAgICAgICAgICAgICAgICAgKHByb3AgPT09ICdsZWZ0JyB8fCBwcm9wID09PSAncmlnaHQnKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9ICh2aWV3cG9ydFNpemUud2lkdGggLSBzdXJmYWNlU2l6ZS53aWR0aCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSG9pc3RlZCBzdXJmYWNlcyBuZWVkIHRvIGhhdmUgdGhlIGFuY2hvciBlbGVtZW50cyBsb2NhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIC8vIGFkZGVkIHRvIHRoZSBwb3NpdGlvbiBwcm9wZXJ0aWVzIGZvciBwcm9wZXIgYWxpZ25tZW50IG9uIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIHZhbHVlICs9IHZpZXdwb3J0RGlzdGFuY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgLy8gU3VyZmFjZXMgdGhhdCBhcmUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIG5lZWQgdG8gaGF2ZSBhZGRpdGlvbmFsXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRpb25zIGZvciBzY3JvbGwgYW5kIGJvdHRvbSBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gd2luZG93U2Nyb2xsLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gd2luZG93U2Nyb2xsLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIHByb3AgPT09ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IHdpbmRvd1Njcm9sbC54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc18xXzEgJiYgIXByb3BzXzFfMS5kb25lICYmIChfYSA9IHByb3BzXzEucmV0dXJuKSkgX2EuY2FsbChwcm9wc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gdGhlIG1lbnUgc3VyZmFjZSB3YXMgb3BlbmVkIHNob3VsZCByZWdhaW5cbiAgICAgKiBmb2N1cywgaWYgdGhlIHVzZXIgaXMgZm9jdXNlZCBvbiBvciB3aXRoaW4gdGhlIG1lbnUgc3VyZmFjZSB3aGVuIGl0IGlzXG4gICAgICogY2xvc2VkLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUubWF5YmVSZXN0b3JlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpc1Jvb3RGb2N1c2VkID0gdGhpcy5hZGFwdGVyLmlzRm9jdXNlZCgpO1xuICAgICAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuYWRhcHRlci5nZXRPd25lckRvY3VtZW50ID9cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5nZXRPd25lckRvY3VtZW50KCkgOlxuICAgICAgICAgICAgZG9jdW1lbnQ7XG4gICAgICAgIHZhciBjaGlsZEhhc0ZvY3VzID0gb3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaXNFbGVtZW50SW5Db250YWluZXIob3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGlzUm9vdEZvY3VzZWQgfHwgY2hpbGRIYXNGb2N1cykge1xuICAgICAgICAgICAgLy8gV2FpdCBiZWZvcmUgcmVzdG9yaW5nIGZvY3VzIHdoZW4gY2xvc2luZyB0aGUgbWVudSBzdXJmYWNlLiBUaGlzIGlzXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgYmVjYXVzZSBpZiBhIHRvdWNoIGV2ZW50IHRyaWdnZXJlZCB0aGUgbWVudSBjbG9zZSwgYW5kIHRoZVxuICAgICAgICAgICAgLy8gc3Vic2VxdWVudCBtb3VzZSBldmVudCBvY2N1cnMgYWZ0ZXIgZm9jdXMgaXMgcmVzdG9yZWQsIHRoZW4gdGhlXG4gICAgICAgICAgICAvLyByZXN0b3JlZCBmb2N1cyB3b3VsZCBiZSBsb3N0LlxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuVE9VQ0hfRVZFTlRfV0FJVF9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFzQml0ID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGNvcm5lciAmIGJpdCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRCaXQgPSBmdW5jdGlvbiAoY29ybmVyLCBiaXQpIHtcbiAgICAgICAgcmV0dXJuIGNvcm5lciB8IGJpdDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnVuc2V0Qml0ID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBjb3JuZXIgXiBiaXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBpc0Zpbml0ZSB0aGF0IGRvZXNuJ3QgZm9yY2UgY29udmVyc2lvbiB0byBudW1iZXIgdHlwZS5cbiAgICAgKiBFcXVpdmFsZW50IHRvIE51bWJlci5pc0Zpbml0ZSBpbiBFUzIwMTUsIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gSUUuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0Zpbml0ZSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG51bSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU06ICdtZGMtbWVudS1pdGVtLS1zZWxlY3RlZCcsXG4gICAgTUVOVV9TRUxFQ1RJT05fR1JPVVA6ICdtZGMtbWVudV9fc2VsZWN0aW9uLWdyb3VwJyxcbiAgICBST09UOiAnbWRjLW1lbnUnLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfQ0hFQ0tFRF9BVFRSOiAnYXJpYS1jaGVja2VkJyxcbiAgICBBUklBX0RJU0FCTEVEX0FUVFI6ICdhcmlhLWRpc2FibGVkJyxcbiAgICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgTElTVF9TRUxFQ1RPUjogJy5tZGMtbGlzdCwubWRjLWRlcHJlY2F0ZWQtbGlzdCcsXG4gICAgU0VMRUNURURfRVZFTlQ6ICdNRENNZW51OnNlbGVjdGVkJyxcbiAgICBTS0lQX1JFU1RPUkVfRk9DVVM6ICdkYXRhLW1lbnUtaXRlbS1za2lwLXJlc3RvcmUtZm9jdXMnLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIEZPQ1VTX1JPT1RfSU5ERVg6IC0xLFxufTtcbnZhciBEZWZhdWx0Rm9jdXNTdGF0ZTtcbihmdW5jdGlvbiAoRGVmYXVsdEZvY3VzU3RhdGUpIHtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiTElTVF9ST09UXCJdID0gMV0gPSBcIkxJU1RfUk9PVFwiO1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiRklSU1RfSVRFTVwiXSA9IDJdID0gXCJGSVJTVF9JVEVNXCI7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJMQVNUX0lURU1cIl0gPSAzXSA9IFwiTEFTVF9JVEVNXCI7XG59KShEZWZhdWx0Rm9jdXNTdGF0ZSB8fCAoRGVmYXVsdEZvY3VzU3RhdGUgPSB7fSkpO1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgRGVmYXVsdEZvY3VzU3RhdGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMgYXMgbGlzdENzc0NsYXNzZXMgfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIERlZmF1bHRGb2N1c1N0YXRlLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ01lbnVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENNZW51Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENNZW51Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENNZW51Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWQgPSAwO1xuICAgICAgICBfdGhpcy5kZWZhdWx0Rm9jdXNTdGF0ZSA9IERlZmF1bHRGb2N1c1N0YXRlLkxJU1RfUk9PVDtcbiAgICAgICAgX3RoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAc2VlIHtAbGluayBNRENNZW51QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29udGFpbnNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgY2xvc2VTdXJmYWNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0RWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTZWxlY3RlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldE1lbnVJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzTGlzdFJvb3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGVJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLmNsb3NlU3VyZmFjZSgpO1xuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBrZXkgPSBldnQua2V5LCBrZXlDb2RlID0gZXZ0LmtleUNvZGU7XG4gICAgICAgIHZhciBpc1RhYiA9IGtleSA9PT0gJ1RhYicgfHwga2V5Q29kZSA9PT0gOTtcbiAgICAgICAgaWYgKGlzVGFiKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuY2xvc2VTdXJmYWNlKC8qKiBza2lwUmVzdG9yZUZvY3VzICovIHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSXRlbUFjdGlvbiA9IGZ1bmN0aW9uIChsaXN0SXRlbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudEluZGV4KGxpc3RJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlTZWxlY3RlZCh7IGluZGV4OiBpbmRleCB9KTtcbiAgICAgICAgdmFyIHNraXBSZXN0b3JlRm9jdXMgPSB0aGlzLmFkYXB0ZXIuZ2V0QXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLlNLSVBfUkVTVE9SRV9GT0NVUykgPT09ICd0cnVlJztcbiAgICAgICAgdGhpcy5hZGFwdGVyLmNsb3NlU3VyZmFjZShza2lwUmVzdG9yZUZvY3VzKTtcbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIG1lbnUgdG8gY2xvc2UgYmVmb3JlIGFkZGluZy9yZW1vdmluZyBjbGFzc2VzIHRoYXQgYWZmZWN0IHN0eWxlcy5cbiAgICAgICAgdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlY29tcHV0ZSB0aGUgaW5kZXggaW4gY2FzZSB0aGUgbWVudSBjb250ZW50cyBoYXZlIGNoYW5nZWQuXG4gICAgICAgICAgICB2YXIgcmVjb21wdXRlZEluZGV4ID0gX3RoaXMuYWRhcHRlci5nZXRFbGVtZW50SW5kZXgobGlzdEl0ZW0pO1xuICAgICAgICAgICAgaWYgKHJlY29tcHV0ZWRJbmRleCA+PSAwICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5pc1NlbGVjdGFibGVJdGVtQXRJbmRleChyZWNvbXB1dGVkSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U2VsZWN0ZWRJbmRleChyZWNvbXB1dGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ubnVtYmVycy5UUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OKTtcbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRlZmF1bHRGb2N1c1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLkZJUlNUX0lURU06XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzSXRlbUF0SW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLkxBU1RfSVRFTTpcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZm9jdXNJdGVtQXRJbmRleCh0aGlzLmFkYXB0ZXIuZ2V0TWVudUl0ZW1Db3VudCgpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLk5PTkU6XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzTGlzdFJvb3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBkZWZhdWx0IGZvY3VzIHN0YXRlIHdoZXJlIHRoZSBtZW51IHNob3VsZCBmb2N1cyBldmVyeSB0aW1lIHdoZW4gbWVudVxuICAgICAqIGlzIG9wZW5lZC4gRm9jdXNlcyB0aGUgbGlzdCByb290IChgRGVmYXVsdEZvY3VzU3RhdGUuTElTVF9ST09UYCkgZWxlbWVudCBieVxuICAgICAqIGRlZmF1bHQuXG4gICAgICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnNldERlZmF1bHRGb2N1c1N0YXRlID0gZnVuY3Rpb24gKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0Rm9jdXNTdGF0ZSA9IGZvY3VzU3RhdGU7XG4gICAgfTtcbiAgICAvKiogQHJldHVybiBJbmRleCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGxpc3QgaXRlbSB3aXRoaW4gdGhlIG1lbnUuICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSBsaXN0IGl0ZW0gYXQgYGluZGV4YCB3aXRoaW4gdGhlIG1lbnUuXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIGxpc3QgaXRlbSB3aXRoaW4gdGhlIG1lbnUuXG4gICAgICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyLmlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4KGluZGV4KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENNZW51Rm91bmRhdGlvbjogTm8gc2VsZWN0aW9uIGdyb3VwIGF0IHNwZWNpZmllZCBpbmRleC4nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldlNlbGVjdGVkSW5kZXggPSB0aGlzLmFkYXB0ZXIuZ2V0U2VsZWN0ZWRTaWJsaW5nT2ZJdGVtQXRJbmRleChpbmRleCk7XG4gICAgICAgIGlmIChwcmV2U2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4KHByZXZTZWxlY3RlZEluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleChwcmV2U2VsZWN0ZWRJbmRleCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzVG9FbGVtZW50QXRJbmRleChpbmRleCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgc3RhdGUgdG8gaXNFbmFibGVkIGZvciB0aGUgbWVudSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIG1lbnUgaXRlbVxuICAgICAqIEBwYXJhbSBpc0VuYWJsZWQgVGhlIGRlc2lyZWQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgbWVudSBpdGVtLlxuICAgICAqL1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRFbmFibGVkID0gZnVuY3Rpb24gKGluZGV4LCBpc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleChpbmRleCwgbGlzdENzc0NsYXNzZXMuTElTVF9JVEVNX0RJU0FCTEVEX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfRElTQUJMRURfQVRUUiwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBsaXN0Q3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9ESVNBQkxFRF9BVFRSLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUudmFsaWRhdGVkSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIG1lbnVTaXplID0gdGhpcy5hZGFwdGVyLmdldE1lbnVJdGVtQ291bnQoKTtcbiAgICAgICAgdmFyIGlzSW5kZXhJblJhbmdlID0gaW5kZXggPj0gMCAmJiBpbmRleCA8IG1lbnVTaXplO1xuICAgICAgICBpZiAoIWlzSW5kZXhJblJhbmdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ01lbnVGb3VuZGF0aW9uOiBObyBsaXN0IGl0ZW0gYXQgc3BlY2lmaWVkIGluZGV4LicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ01lbnVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTWVudUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIjxzdmVsdGU6b3B0aW9ucyBydW5lcyAvPlxuXG48c3ZlbHRlOmJvZHkgb25jbGlja2NhcHR1cmU9e2hhbmRsZUJvZHlDbGlja30gLz5cblxuPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgJ21kYy1tZW51LXN1cmZhY2UnOiB0cnVlLFxuICAgICdtZGMtbWVudS1zdXJmYWNlLS1maXhlZCc6IGZpeGVkLFxuICAgICdtZGMtbWVudS1zdXJmYWNlLS1vcGVuJzogaXNTdGF0aWMsXG4gICAgJ3NtdWktbWVudS1zdXJmYWNlLS1zdGF0aWMnOiBpc1N0YXRpYyxcbiAgICAnbWRjLW1lbnUtc3VyZmFjZS0tZnVsbHdpZHRoJzogZnVsbFdpZHRoLFxuICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgfSl9XG4gIHN0eWxlPXtPYmplY3QuZW50cmllcyhpbnRlcm5hbFN0eWxlcylcbiAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAuY29uY2F0KFtzdHlsZV0pXG4gICAgLmpvaW4oJyAnKX1cbiAgcm9sZT1cImRpYWxvZ1wiXG4gIHsuLi5yZXN0UHJvcHN9XG4gIG9ua2V5ZG93bj17KGUpID0+IHtcbiAgICBpZiAoaW5zdGFuY2UgJiYgIW1hbmFnZWQpIHtcbiAgICAgIGluc3RhbmNlLmhhbmRsZUtleWRvd24oZSk7XG4gICAgfVxuICAgIHJlc3RQcm9wcy5vbmtleWRvd24/LihlKTtcbiAgfX1cbj5cbiAge0ByZW5kZXIgY2hpbGRyZW4/LigpfVxuPC9kaXY+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UnO1xuICBpbXBvcnQgdHlwZSB7IFNuaXBwZXQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBvbk1vdW50LCBvbkRlc3Ryb3ksIHNldENvbnRleHQsIGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgdHlwZSB7IFNtdWlBdHRycyB9IGZyb20gJ0BzbXVpL2NvbW1vbic7XG4gIGltcG9ydCB0eXBlIHsgQWN0aW9uQXJyYXkgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBjbGFzc01hcCwgdXNlQWN0aW9ucywgZGlzcGF0Y2ggfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwnO1xuXG4gIGltcG9ydCB0eXBlIHsgU01VSU1lbnVTdXJmYWNlQWNjZXNzb3IgfSBmcm9tICcuL01lbnVTdXJmYWNlLnR5cGVzLmpzJztcbiAgaW1wb3J0IHsgQ29ybmVyIH0gZnJvbSAnLi9NZW51U3VyZmFjZS50eXBlcy5qcyc7XG5cbiAgdHlwZSBPd25Qcm9wcyA9IHtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBBY3Rpb24gb3IgW0FjdGlvbiwgQWN0aW9uUHJvcHNdIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgdXNlPzogQWN0aW9uQXJyYXk7XG4gICAgLyoqXG4gICAgICogQSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBDU1MgY2xhc3Nlcy5cbiAgICAgKi9cbiAgICBjbGFzcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgQ1NTIHN0eWxlcy5cbiAgICAgKi9cbiAgICBzdHlsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIHN0YXRpYyBtZW51IGlzIGFsd2F5cyBvcGVuLlxuICAgICAqL1xuICAgIHN0YXRpYz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQW5jaG9yIHRoZSBtZW51IHN1cmZhY2UgYXV0b21hdGljYWxseSB0byBpdHMgcGFyZW50IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBJZiB5b3Ugc2V0IHRoaXMgdG8gZmFsc2UsIHlvdSBuZWVkIHRvIHByb3ZpZGUgYW4gZWxlbWVudCB0b1xuICAgICAqIGBhbmNob3JFbGVtZW50YC5cbiAgICAgKi9cbiAgICBhbmNob3I/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbWVudSBzdXJmYWNlIGNhbGN1bGF0aW9ucyBiYXNlZCBvbiBhIGZpeGVkIHBvc2l0aW9uIG1lbnUuXG4gICAgICovXG4gICAgZml4ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIG1lbnUgc3VyZmFjZSBpcyBvcGVuLlxuICAgICAqL1xuICAgIG9wZW4/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEEgbWFuYWdlZCBtZW51IHN1cmZhY2UgbWVhbnMgeW91IGNvbXBsZXRlbHkgY29udHJvbCB0aGUgb3BlbiBzdGF0ZS4gVGhlXG4gICAgICogY29tcG9uZW50IHdpbGwgbmV2ZXIgYWx0ZXIgaXQgb24gaXRzIG93bi5cbiAgICAgKi9cbiAgICBtYW5hZ2VkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTZXQgd2lkdGggdG8gMTAwJS5cbiAgICAgKi9cbiAgICBmdWxsV2lkdGg/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNraXAgYW5pbWF0aW5nIHdoZW4gdGhlIG1lbnUgc3VyZmFjZSBvcGVucy5cbiAgICAgKi9cbiAgICBxdWlja09wZW4/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRvIGFuY2hvciB0aGUgbWVudSB0bywgaWYgbm90IGRvbmUgYXV0b21hdGljYWxseS5cbiAgICAgKlxuICAgICAqIFlvdSBzaG91bGQgb25seSBuZWVkIHRoaXMgaWYgeW91IHNldCBgYW5jaG9yYCB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBhbmNob3JFbGVtZW50PzogRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcCBsZWZ0IG1lbnUgc3VyZmFjZSBjb3JuZXIuXG4gICAgICovXG4gICAgYW5jaG9yQ29ybmVyPzogQ29ybmVyIHwga2V5b2YgdHlwZW9mIENvcm5lcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWFyZ2luIHRvIHB1dCBiZXR3ZWVuIHRoZSBhbmNob3IgYW5kIHRoZSBtZW51LlxuICAgICAqL1xuICAgIGFuY2hvck1hcmdpbj86IHsgdG9wOiBudW1iZXI7IHJpZ2h0OiBudW1iZXI7IGJvdHRvbTogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBoZWlnaHQgdG8gYWxsb3cgdGhlIG1lbnUgc3VyZmFjZSB0byBiZS5cbiAgICAgKi9cbiAgICBtYXhIZWlnaHQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBtZW51LXN1cmZhY2Ugc2hvdWxkIGJlIGhvcml6b250YWxseSBjZW50ZXJlZCB0byB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIChPbmx5IGVmZmVjdGl2ZSB3aGVuIHRoZSBtZW51IHN1cmZhY2UgaXMgaG9pc3RlZCB0byB0aGUgYm9keS4pXG4gICAgICovXG4gICAgaG9yaXpvbnRhbGx5Q2VudGVyZWRPblZpZXdwb3J0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTZXQgdG8gYSBwb3NpdGl2ZSBpbnRlZ2VyIHRvIGluZmx1ZW5jZSB0aGUgbWVudSB0byBwcmVmZXJlbnRpYWxseSBvcGVuXG4gICAgICogYmVsb3cgdGhlIGFuY2hvciBpbnN0ZWFkIG9mIGFib3ZlLlxuICAgICAqXG4gICAgICogQSB2YWx1ZSBvZiBgeGAgc2ltdWxhdGVzIGFuIGV4dHJhIGB4YCBwaXhlbHMgb2YgYXZhaWxhYmxlIHNwYWNlIGJlbG93IHRoZVxuICAgICAqIG1lbnUgZHVyaW5nIHBvc2l0aW9uaW5nIGNhbGN1bGF0aW9ucy5cbiAgICAgKi9cbiAgICBvcGVuQm90dG9tQmlhcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIG5ldmVyIHJlc3RvcmUgZm9jdXMgdG8gdGhlIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50XG4gICAgICogd2hlbiB0aGUgbWVudSBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgbmV2ZXJSZXN0b3JlRm9jdXM/OiBib29sZWFuO1xuXG4gICAgY2hpbGRyZW4/OiBTbmlwcGV0O1xuICB9O1xuICBsZXQge1xuICAgIHVzZSA9IFtdLFxuICAgIGNsYXNzOiBjbGFzc05hbWUgPSAnJyxcbiAgICBzdHlsZSA9ICcnLFxuICAgIHN0YXRpYzogaXNTdGF0aWMgPSBmYWxzZSxcbiAgICBhbmNob3IgPSB0cnVlLFxuICAgIGZpeGVkID0gZmFsc2UsXG4gICAgb3BlbiA9ICRiaW5kYWJsZShpc1N0YXRpYyksXG4gICAgbWFuYWdlZCA9IGZhbHNlLFxuICAgIGZ1bGxXaWR0aCA9IGZhbHNlLFxuICAgIHF1aWNrT3BlbiA9IGZhbHNlLFxuICAgIGFuY2hvckVsZW1lbnQgPSAkYmluZGFibGUoKSxcbiAgICBhbmNob3JDb3JuZXIsXG4gICAgYW5jaG9yTWFyZ2luID0geyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICBtYXhIZWlnaHQgPSAwLFxuICAgIGhvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydCA9IGZhbHNlLFxuICAgIG9wZW5Cb3R0b21CaWFzID0gMCxcbiAgICBuZXZlclJlc3RvcmVGb2N1cyA9IGZhbHNlLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnJlc3RQcm9wc1xuICB9OiBPd25Qcm9wcyAmIFNtdWlBdHRyczwnZGl2Jywga2V5b2YgT3duUHJvcHM+ID0gJHByb3BzKCk7XG5cbiAgbGV0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICBsZXQgaW5zdGFuY2U6IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB8IHVuZGVmaW5lZCA9ICRzdGF0ZSgpO1xuICBsZXQgaW50ZXJuYWxDbGFzc2VzOiB7IFtrOiBzdHJpbmddOiBib29sZWFuIH0gPSAkc3RhdGUoe30pO1xuICBsZXQgaW50ZXJuYWxTdHlsZXM6IHsgW2s6IHN0cmluZ106IHN0cmluZyB9ID0gJHN0YXRlKHt9KTtcbiAgbGV0IHByZXZpb3VzRm9jdXM6IEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkc3RhdGUodW5kZWZpbmVkKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6cm9sZScsICdtZW51Jyk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnLCAnbWVudWl0ZW0nKTtcblxuICAkZWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBlbGVtZW50ICYmXG4gICAgICBhbmNob3IgJiZcbiAgICAgICFlbGVtZW50LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5jb250YWlucygnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJylcbiAgICApIHtcbiAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyk7XG4gICAgICBhbmNob3JFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50ID8/IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xuXG4gICRlZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pc09wZW4oKSAhPT0gb3Blbikge1xuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgaW5zdGFuY2Uub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICRlZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2Uuc2V0UXVpY2tPcGVuKHF1aWNrT3Blbik7XG4gICAgfVxuICB9KTtcblxuICAkZWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLnNldEZpeGVkUG9zaXRpb24oZml4ZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgJGVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5zZXRNYXhIZWlnaHQobWF4SGVpZ2h0KTtcbiAgICB9XG4gIH0pO1xuXG4gICRlZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2Uuc2V0SXNIb3Jpem9udGFsbHlDZW50ZXJlZE9uVmlld3BvcnQoXG4gICAgICAgIGhvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydCxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBpQ29ybmVyID0gQ29ybmVyO1xuICAkZWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5zdGFuY2UgJiYgYW5jaG9yQ29ybmVyICE9IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgYW5jaG9yQ29ybmVyID09PSAnc3RyaW5nJykge1xuICAgICAgICBpbnN0YW5jZS5zZXRBbmNob3JDb3JuZXIoaUNvcm5lclthbmNob3JDb3JuZXJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLnNldEFuY2hvckNvcm5lcihhbmNob3JDb3JuZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJGVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5zZXRBbmNob3JNYXJnaW4oYW5jaG9yTWFyZ2luKTtcbiAgICB9XG4gIH0pO1xuXG4gICRlZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2Uuc2V0T3BlbkJvdHRvbUJpYXMob3BlbkJvdHRvbUJpYXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgU01VSU1lbnVTdXJmYWNlTW91bnQgPSBnZXRDb250ZXh0PFxuICAgICgoYWNjZXNzb3I6IFNNVUlNZW51U3VyZmFjZUFjY2Vzc29yKSA9PiB2b2lkKSB8IHVuZGVmaW5lZFxuICA+KCdTTVVJOm1lbnUtc3VyZmFjZTptb3VudCcpO1xuICBjb25zdCBTTVVJTWVudVN1cmZhY2VVbm1vdW50ID0gZ2V0Q29udGV4dDxcbiAgICAoKGFjY2Vzc29yOiBTTVVJTWVudVN1cmZhY2VBY2Nlc3NvcikgPT4gdm9pZCkgfCB1bmRlZmluZWRcbiAgPignU01VSTptZW51LXN1cmZhY2U6dW5tb3VudCcpO1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzcyxcbiAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgaGFzQ2xhc3MsXG4gICAgICBoYXNBbmNob3I6ICgpID0+ICEhYW5jaG9yRWxlbWVudCxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7XG4gICAgICAgIGlmICghbWFuYWdlZCkge1xuICAgICAgICAgIG9wZW4gPSBpc1N0YXRpYztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wZW4pIHtcbiAgICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJTWVudVN1cmZhY2VDbG9zZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3Npbmc6ICgpID0+IHtcbiAgICAgICAgaWYgKCFtYW5hZ2VkKSB7XG4gICAgICAgICAgb3BlbiA9IGlzU3RhdGljO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3Blbikge1xuICAgICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUlNZW51U3VyZmFjZUNsb3NpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHtcbiAgICAgICAgaWYgKCFtYW5hZ2VkKSB7XG4gICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJTWVudVN1cmZhY2VPcGVuZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IHtcbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSU1lbnVTdXJmYWNlT3BlbmluZycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNFbGVtZW50SW5Db250YWluZXI6IChlbCkgPT4gZ2V0RWxlbWVudCgpLmNvbnRhaW5zKGVsKSxcbiAgICAgIGlzUnRsOiAoKSA9PlxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKGdldEVsZW1lbnQoKSkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luOiAob3JpZ2luKSA9PiB7XG4gICAgICAgIGludGVybmFsU3R5bGVzWyd0cmFuc2Zvcm0tb3JpZ2luJ10gPSBvcmlnaW47XG4gICAgICB9LFxuXG4gICAgICBpc0ZvY3VzZWQ6ICgpID0+IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGdldEVsZW1lbnQoKSxcbiAgICAgIHNhdmVGb2N1czogKCkgPT4ge1xuICAgICAgICBwcmV2aW91c0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA/PyB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgcmVzdG9yZUZvY3VzOiAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhbmV2ZXJSZXN0b3JlRm9jdXMgJiZcbiAgICAgICAgICAoIWVsZW1lbnQgfHwgZ2V0RWxlbWVudCgpLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSAmJlxuICAgICAgICAgIHByZXZpb3VzRm9jdXMgJiZcbiAgICAgICAgICBkb2N1bWVudC5jb250YWlucyhwcmV2aW91c0ZvY3VzKSAmJlxuICAgICAgICAgICdmb2N1cycgaW4gcHJldmlvdXNGb2N1c1xuICAgICAgICApIHtcbiAgICAgICAgICAocHJldmlvdXNGb2N1cyBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0SW5uZXJEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IGdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogKCkgPT5cbiAgICAgICAgYW5jaG9yRWxlbWVudCA/IGFuY2hvckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsLFxuICAgICAgZ2V0V2luZG93RGltZW5zaW9uczogKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH07XG4gICAgICB9LFxuICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGdldFdpbmRvd1Njcm9sbDogKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9O1xuICAgICAgfSxcbiAgICAgIHNldFBvc2l0aW9uOiAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMubGVmdCA9ICdsZWZ0JyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLmxlZnR9cHhgIDogJyc7XG4gICAgICAgIGludGVybmFsU3R5bGVzLnJpZ2h0ID0gJ3JpZ2h0JyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLnJpZ2h0fXB4YCA6ICcnO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcy50b3AgPSAndG9wJyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLnRvcH1weGAgOiAnJztcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMuYm90dG9tID1cbiAgICAgICAgICAnYm90dG9tJyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLmJvdHRvbX1weGAgOiAnJztcbiAgICAgIH0sXG4gICAgICBzZXRNYXhIZWlnaHQ6IChoZWlnaHQpID0+IHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbJ21heC1oZWlnaHQnXSA9IGhlaWdodDtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcjogU01VSU1lbnVTdXJmYWNlQWNjZXNzb3IgPSB7XG4gICAgICBnZXQgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIG9wZW47XG4gICAgICB9LFxuICAgICAgc2V0IG9wZW4odmFsdWUpIHtcbiAgICAgICAgb3BlbiA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGNsb3NlUHJvZ3JhbW1hdGljLFxuICAgIH07XG5cbiAgICBTTVVJTWVudVN1cmZhY2VNb3VudCAmJiBTTVVJTWVudVN1cmZhY2VNb3VudChhY2Nlc3Nvcik7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgU01VSU1lbnVTdXJmYWNlVW5tb3VudCAmJiBTTVVJTWVudVN1cmZhY2VVbm1vdW50KGFjY2Vzc29yKTtcblxuICAgICAgY29uc3QgaXNIb2lzdGVkID0gKGluc3RhbmNlIGFzIGFueSkuaXNIb2lzdGVkRWxlbWVudDtcbiAgICAgIGluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgICBpZiAoaXNIb2lzdGVkKSB7XG4gICAgICAgIGdldEVsZW1lbnQoKS5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChnZXRFbGVtZW50KCkpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgZ2V0RWxlbWVudCgpICYmXG4gICAgICAgIGdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InLFxuICAgICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3Nlc1xuICAgICAgPyBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXVxuICAgICAgOiBnZXRFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGlmICghaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlUHJvZ3JhbW1hdGljKHNraXBSZXN0b3JlRm9jdXM/OiBib29sZWFuKSB7XG4gICAgaW5zdGFuY2U/LmNsb3NlKHNraXBSZXN0b3JlRm9jdXMpO1xuICAgIG9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJvZHlDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmIChpbnN0YW5jZSAmJiBvcGVuICYmICFtYW5hZ2VkKSB7XG4gICAgICBpbnN0YW5jZS5oYW5kbGVCb2R5Q2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc09wZW4oKSB7XG4gICAgcmV0dXJuIG9wZW47XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0T3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIG9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBYnNvbHV0ZVBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKGluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2UgaXMgbm90IGRlZmluZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5zZXRBYnNvbHV0ZVBvc2l0aW9uKHgsIHkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldElzSG9pc3RlZChpc0hvaXN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW5jZSBpcyBub3QgZGVmaW5lZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLnNldElzSG9pc3RlZChpc0hvaXN0ZWQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzRml4ZWQoKSB7XG4gICAgaWYgKGluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2UgaXMgbm90IGRlZmluZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5pc0ZpeGVkKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZmxpcENvcm5lckhvcml6b250YWxseSgpIHtcbiAgICBpZiAoaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW5jZSBpcyBub3QgZGVmaW5lZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLmZsaXBDb3JuZXJIb3Jpem9udGFsbHkoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6b3B0aW9ucyBydW5lcyAvPlxuXG48TWVudVN1cmZhY2VcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB7dXNlfVxuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICdtZGMtbWVudSc6IHRydWUsXG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gIH0pfVxuICBiaW5kOm9wZW5cbiAgYmluZDphbmNob3JFbGVtZW50XG4gIHttYW5hZ2VkfVxuICB7Li4ucmVzdFByb3BzfVxuICBvbmtleWRvd249eyhlKSA9PiB7XG4gICAgaGFuZGxlS2V5ZG93bihlKTtcbiAgICByZXN0UHJvcHMub25rZXlkb3duPy4oZSk7XG4gIH19XG4gIG9uU01VSU1lbnVTdXJmYWNlT3BlbmVkPXsoZSkgPT4ge1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuaGFuZGxlTWVudVN1cmZhY2VPcGVuZWQoKTtcbiAgICB9XG4gICAgcmVzdFByb3BzLm9uU01VSU1lbnVTdXJmYWNlT3BlbmVkPy4oZSk7XG4gIH19XG4gIG9uU01VSUxpc3RBY3Rpb249eyhlKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlICYmIGxpc3RBY2Nlc3Nvcikge1xuICAgICAgaW5zdGFuY2UuaGFuZGxlSXRlbUFjdGlvbihcbiAgICAgICAgbGlzdEFjY2Vzc29yLmdldE9yZGVyZWRMaXN0KClbZS5kZXRhaWwuaW5kZXhdLmVsZW1lbnQsXG4gICAgICApO1xuICAgIH1cbiAgICByZXN0UHJvcHMub25TTVVJTGlzdEFjdGlvbj8uKGUpO1xuICB9fT57QHJlbmRlciBjaGlsZHJlbj8uKCl9PC9NZW51U3VyZmFjZVxuPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBNRENNZW51Rm91bmRhdGlvbiwgY3NzQ2xhc3NlcyB9IGZyb20gJ0BtYXRlcmlhbC9tZW51JztcbiAgaW1wb3J0IHsgcG9ueWZpbGwgfSBmcm9tICdAbWF0ZXJpYWwvZG9tJztcbiAgaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcywgU25pcHBldCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IG9uTW91bnQsIGdldENvbnRleHQsIHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgdHlwZSB7IEFjdGlvbkFycmF5IH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsJztcbiAgaW1wb3J0IHsgY2xhc3NNYXAsIGRpc3BhdGNoIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsJztcbiAgaW1wb3J0IHR5cGUgeyBTTVVJTGlzdEFjY2Vzc29yIH0gZnJvbSAnQHNtdWkvbGlzdCc7XG4gIGltcG9ydCB0eXBlIHsgU01VSU1lbnVTdXJmYWNlQWNjZXNzb3IgfSBmcm9tICdAc211aS9tZW51LXN1cmZhY2UnO1xuICBpbXBvcnQgTWVudVN1cmZhY2UgZnJvbSAnQHNtdWkvbWVudS1zdXJmYWNlJztcblxuICBpbXBvcnQgdHlwZSB7IERlZmF1bHRGb2N1c1N0YXRlIH0gZnJvbSAnLi9NZW51LnR5cGVzLmpzJztcblxuICBjb25zdCB7IGNsb3Nlc3QgfSA9IHBvbnlmaWxsO1xuXG4gIHR5cGUgT3duUHJvcHMgPSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgQWN0aW9uIG9yIFtBY3Rpb24sIEFjdGlvblByb3BzXSB0byBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIHVzZT86IEFjdGlvbkFycmF5O1xuICAgIC8qKlxuICAgICAqIEEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgQ1NTIGNsYXNzZXMuXG4gICAgICovXG4gICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgbWVudSBpcyBvcGVuLlxuICAgICAqL1xuICAgIG9wZW4/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEEgbWFuYWdlZCBtZW51IG1lYW5zIHlvdSBjb21wbGV0ZWx5IGNvbnRyb2wgdGhlIG9wZW4gc3RhdGUuIFRoZSBjb21wb25lbnRcbiAgICAgKiB3aWxsIG5ldmVyIGFsdGVyIGl0IG9uIGl0cyBvd24uXG4gICAgICovXG4gICAgbWFuYWdlZD86IGJvb2xlYW47XG5cbiAgICBjaGlsZHJlbj86IFNuaXBwZXQ7XG4gIH07XG4gIGxldCB7XG4gICAgdXNlID0gW10sXG4gICAgY2xhc3M6IGNsYXNzTmFtZSA9ICcnLFxuICAgIG9wZW4gPSAkYmluZGFibGUoZmFsc2UpLFxuICAgIGFuY2hvckVsZW1lbnQgPSAkYmluZGFibGUoKSxcbiAgICBtYW5hZ2VkID0gZmFsc2UsXG4gICAgY2hpbGRyZW4sXG4gICAgLi4ucmVzdFByb3BzXG4gIH06IE93blByb3BzICZcbiAgICBPbWl0PENvbXBvbmVudFByb3BzPHR5cGVvZiBNZW51U3VyZmFjZT4sIGtleW9mIE93blByb3BzPiA9ICRwcm9wcygpO1xuXG4gIGxldCBlbGVtZW50OiBNZW51U3VyZmFjZTtcbiAgbGV0IGluc3RhbmNlOiBNRENNZW51Rm91bmRhdGlvbiB8IHVuZGVmaW5lZCA9ICRzdGF0ZSgpO1xuICBsZXQgbWVudVN1cmZhY2VBY2Nlc3NvcjogU01VSU1lbnVTdXJmYWNlQWNjZXNzb3IgfCB1bmRlZmluZWQgPSAkc3RhdGUoKTtcbiAgbGV0IGxpc3RBY2Nlc3NvcjogU01VSUxpc3RBY2Nlc3NvciB8IHVuZGVmaW5lZCA9ICRzdGF0ZSgpO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6bWVudS1zdXJmYWNlOm1vdW50JywgKGFjY2Vzc29yOiBTTVVJTWVudVN1cmZhY2VBY2Nlc3NvcikgPT4ge1xuICAgIGlmICghbWVudVN1cmZhY2VBY2Nlc3Nvcikge1xuICAgICAgbWVudVN1cmZhY2VBY2Nlc3NvciA9IGFjY2Vzc29yO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IFNNVUlMaXN0TW91bnQgPSBnZXRDb250ZXh0PFxuICAgICgoYWNjZXNzb3I6IFNNVUlMaXN0QWNjZXNzb3IpID0+IHZvaWQpIHwgdW5kZWZpbmVkXG4gID4oJ1NNVUk6bGlzdDptb3VudCcpO1xuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6bW91bnQnLCAoYWNjZXNzb3I6IFNNVUlMaXN0QWNjZXNzb3IpID0+IHtcbiAgICBpZiAoIWxpc3RBY2Nlc3Nvcikge1xuICAgICAgbGlzdEFjY2Vzc29yID0gYWNjZXNzb3I7XG4gICAgfVxuICAgIFNNVUlMaXN0TW91bnQgJiYgU01VSUxpc3RNb3VudChhY2Nlc3Nvcik7XG4gIH0pO1xuXG4gIGNvbnN0IFNNVUlNZW51TW91bnQgPSBnZXRDb250ZXh0PFxuICAgICgoYWNjZXNzb3I6IE1EQ01lbnVGb3VuZGF0aW9uKSA9PiB2b2lkKSB8IHVuZGVmaW5lZFxuICA+KCdTTVVJOm1lbnU6bW91bnQnKTtcbiAgY29uc3QgU01VSU1lbnVVbm1vdW50ID0gZ2V0Q29udGV4dDxcbiAgICAoKGFjY2Vzc29yOiBNRENNZW51Rm91bmRhdGlvbikgPT4gdm9pZCkgfCB1bmRlZmluZWRcbiAgPignU01VSTptZW51OnVubW91bnQnKTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpbnN0YW5jZSA9IG5ldyBNRENNZW51Rm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGlmIChsaXN0QWNjZXNzb3IgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlzdCBhY2Nlc3NvciBpcyB1bmRlZmluZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdEFjY2Vzc29yLmFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBpZiAobGlzdEFjY2Vzc29yID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3QgYWNjZXNzb3IgaXMgdW5kZWZpbmVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RBY2Nlc3Nvci5yZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgY2xhc3NOYW1lKTtcbiAgICAgIH0sXG4gICAgICBhZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChsaXN0QWNjZXNzb3IgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlzdCBhY2Nlc3NvciBpcyB1bmRlZmluZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdEFjY2Vzc29yLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0ciwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleDogKGluZGV4LCBhdHRyKSA9PiB7XG4gICAgICAgIGlmIChsaXN0QWNjZXNzb3IgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlzdCBhY2Nlc3NvciBpcyB1bmRlZmluZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdEFjY2Vzc29yLnJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0cik7XG4gICAgICB9LFxuICAgICAgZ2V0QXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGF0dHIpID0+IHtcbiAgICAgICAgaWYgKGxpc3RBY2Nlc3NvciA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0IGFjY2Vzc29yIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdEFjY2Vzc29yLmdldEF0dHJpYnV0ZUZyb21FbGVtZW50SW5kZXgoaW5kZXgsIGF0dHIpO1xuICAgICAgfSxcbiAgICAgIGVsZW1lbnRDb250YWluc0NsYXNzOiAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PlxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgY2xvc2VTdXJmYWNlOiAoc2tpcFJlc3RvcmVGb2N1cykgPT4ge1xuICAgICAgICBpZiAoIW1hbmFnZWQpIHtcbiAgICAgICAgICBtZW51U3VyZmFjZUFjY2Vzc29yPy5jbG9zZVByb2dyYW1tYXRpYyhza2lwUmVzdG9yZUZvY3VzKTtcbiAgICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJTWVudUNsb3NlZFByb2dyYW1tYXRpY2FsbHknKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldEVsZW1lbnRJbmRleDogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGxpc3RBY2Nlc3NvciA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0IGFjY2Vzc29yIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdEFjY2Vzc29yXG4gICAgICAgICAgLmdldE9yZGVyZWRMaXN0KClcbiAgICAgICAgICAubWFwKChhY2Nlc3NvcikgPT4gYWNjZXNzb3IuZWxlbWVudClcbiAgICAgICAgICAuaW5kZXhPZihlbGVtZW50KTtcbiAgICAgIH0sXG4gICAgICBub3RpZnlTZWxlY3RlZDogKGV2dERhdGEpID0+IHtcbiAgICAgICAgaWYgKGxpc3RBY2Nlc3NvciA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0IGFjY2Vzc29yIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJTWVudVNlbGVjdGVkJywge1xuICAgICAgICAgIGluZGV4OiBldnREYXRhLmluZGV4LFxuICAgICAgICAgIGl0ZW06IGxpc3RBY2Nlc3Nvci5nZXRPcmRlcmVkTGlzdCgpW2V2dERhdGEuaW5kZXhdLmVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldE1lbnVJdGVtQ291bnQ6ICgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RBY2Nlc3NvciA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0IGFjY2Vzc29yIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdEFjY2Vzc29yLml0ZW1zLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBmb2N1c0l0ZW1BdEluZGV4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RBY2Nlc3NvciA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0IGFjY2Vzc29yIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0QWNjZXNzb3IuZm9jdXNJdGVtQXRJbmRleChpbmRleCk7XG4gICAgICB9LFxuICAgICAgZm9jdXNMaXN0Um9vdDogKCkgPT4ge1xuICAgICAgICBpZiAobGlzdEFjY2Vzc29yID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3QgYWNjZXNzb3IgaXMgdW5kZWZpbmVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZm9jdXMnIGluIGxpc3RBY2Nlc3Nvci5lbGVtZW50KSB7XG4gICAgICAgICAgKGxpc3RBY2Nlc3Nvci5lbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpc1NlbGVjdGFibGVJdGVtQXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChsaXN0QWNjZXNzb3IgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlzdCBhY2Nlc3NvciBpcyB1bmRlZmluZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhY2xvc2VzdChcbiAgICAgICAgICBsaXN0QWNjZXNzb3IuZ2V0T3JkZXJlZExpc3QoKVtpbmRleF0uZWxlbWVudCxcbiAgICAgICAgICBgLiR7Y3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVElPTl9HUk9VUH1gLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGdldFNlbGVjdGVkU2libGluZ09mSXRlbUF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBpZiAobGlzdEFjY2Vzc29yID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpc3QgYWNjZXNzb3IgaXMgdW5kZWZpbmVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9yZGVyZWRMaXN0ID0gbGlzdEFjY2Vzc29yLmdldE9yZGVyZWRMaXN0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkdyb3VwRWwgPSBjbG9zZXN0KFxuICAgICAgICAgIG9yZGVyZWRMaXN0W2luZGV4XS5lbGVtZW50LFxuICAgICAgICAgIGAuJHtjc3NDbGFzc2VzLk1FTlVfU0VMRUNUSU9OX0dST1VQfWAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbUVsID0gc2VsZWN0aW9uR3JvdXBFbD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7Y3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTX1gLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtRWxcbiAgICAgICAgICA/IG9yZGVyZWRMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5lbGVtZW50KS5pbmRleE9mKHNlbGVjdGVkSXRlbUVsKVxuICAgICAgICAgIDogLTE7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgU01VSU1lbnVNb3VudCAmJiBTTVVJTWVudU1vdW50KGluc3RhbmNlKTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoU01VSU1lbnVVbm1vdW50ICYmIGluc3RhbmNlKSB7XG4gICAgICAgIFNNVUlNZW51VW5tb3VudChpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5ZG93bihldmVudDogRXZlbnQpIHtcbiAgICBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVLZXlkb3duKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzT3BlbigpIHtcbiAgICByZXR1cm4gb3BlbjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgb3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRGb2N1c1N0YXRlKGZvY3VzU3RhdGU6IERlZmF1bHRGb2N1c1N0YXRlKSB7XG4gICAgaWYgKGluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2UgaXMgdW5kZWZpbmVkLicpO1xuICAgIH1cbiAgICBpbnN0YW5jZS5zZXREZWZhdWx0Rm9jdXNTdGF0ZShmb2N1c1N0YXRlKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEluZGV4KCkge1xuICAgIGlmIChpbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luc3RhbmNlIGlzIHVuZGVmaW5lZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLmdldFNlbGVjdGVkSW5kZXgoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRNZW51U3VyZmFjZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQHNtdWkvaWNvbi1idXR0b24nO1xuaW1wb3J0IExpc3QsIHsgR3JhcGhpYywgSXRlbSwgU2VwYXJhdG9yLCBUZXh0IH0gZnJvbSAnQHNtdWkvbGlzdCc7XG5pbXBvcnQgTWVudSBmcm9tICdAc211aS9tZW51JztcbmltcG9ydCB0eXBlIHsgU3lzdGVtU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZXh0ZW5zaW9uLXNldHRpbmdzJztcbmltcG9ydCB0eXBlIHsgU3lzdGVtU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N5c3RlbS1zdGF0dXMnO1xuXG5jb25zdCB7XG4gIHN5c3RlbVNldHRpbmdzLFxuICBzeXN0ZW1TdGF0dXMsXG4gIG9uZGVsZXRlLFxufTogeyBzeXN0ZW1TZXR0aW5nczogU3lzdGVtU2V0dGluZ3M7IHN5c3RlbVN0YXR1czogU3lzdGVtU3RhdHVzOyBvbmRlbGV0ZT86ICgpID0+IHZvaWQgfSA9ICRwcm9wcygpO1xuXG5sZXQgbWVudTogYW55O1xubGV0IG1lbnVBbmNob3I6IGFueTtcblxuY29uc3QgbmFtZSA9ICRkZXJpdmVkKHN5c3RlbVNldHRpbmdzID8gbmV3IFVSTChzeXN0ZW1TZXR0aW5ncy51cmwpLmhvc3QgOiAnJyk7XG48L3NjcmlwdD5cblxuPG1haW4gY2xhc3M9XCJzeXN0ZW0tZW50cnkge3N5c3RlbVN0YXR1cz8uaGVhbHRoeSA/ICdoZWFsdGh5JyA6ICd1bmhlYWx0aHknfVwiPlxuICB7I2lmIHN5c3RlbVN0YXR1cz8uaGVhbHRoeSB9XG4gICA8R3JhcGhpYyBjbGFzcz1cImZhIGZhLXNtIGZhLWhlYXJ0IGhlYWx0aC1pY29uXCI+PC9HcmFwaGljPlxuICAgezplbHNlfVxuICAgPEdyYXBoaWMgY2xhc3M9XCJmYSBmYS1zbSBmYS1oZWFydC1icm9rZW4gaGVhbHRoLWljb25cIj48L0dyYXBoaWM+XG4gICB7L2lmfVxuICAgPHNwYW4gY2xhc3M9XCJuYW1lXCIgPntuYW1lfTwvc3Bhbj5cbiAgIDxkaXYgYmluZDp0aGlzPXttZW51QW5jaG9yfSA+XG4gICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIG9uY2xpY2s9eyhldmVudCkgPT4ge2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBtZW51LnNldE9wZW4odHJ1ZSl9fT5cbiAgICAgIG1vcmVfdmVydFxuICAgIDwvSWNvbkJ1dHRvbj4gXG4gICA8L2Rpdj5cbiAgIDxNZW51IG9uY2xpY2s9eyhldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9IGJpbmQ6dGhpcz17bWVudX0gYW5jaG9yPXtmYWxzZX0gYmluZDphbmNob3JFbGVtZW50PXttZW51QW5jaG9yfT5cbiAgICA8TGlzdD5cbiAgICAgIDwhLS0gPEl0ZW0gb25TTVVJYWN0aW9uPXsoKSA9PiB7fX0+XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5FZGl0IE5hbWU8L1RleHQ+XG4gICAgICA8L0l0ZW0+IC0tPlxuICAgICAgPEl0ZW0gIG9uU01VSWFjdGlvbj17KGV2ZW50KSA9PiB7fX0+XG4gICAgICAgIHsjaWYgISFzeXN0ZW1TZXR0aW5ncz8uZnR9XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVja19ib3g8L0dyYXBoaWM+XG4gICAgICAgIHs6ZWxzZSB9XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVja19ib3hfYmxhbms8L0dyYXBoaWM+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDxUZXh0PlBvd2VydG95czwvVGV4dD5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtIG9uU01VSWFjdGlvbj17KCkgPT4ge319PlxuICAgICAgICB7I2lmICEhc3lzdGVtU2V0dGluZ3M/Lm50fVxuICAgICAgICA8R3JhcGhpYyBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2tfYm94PC9HcmFwaGljPlxuICAgICAgICB7OmVsc2UgfVxuICAgICAgICA8R3JhcGhpYyBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2tfYm94X2JsYW5rPC9HcmFwaGljPlxuICAgICAgICB7L2lmfVxuICAgICAgICA8VGV4dD5Ob3RpZmljYXRpb25zPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgPEl0ZW0gb25TTVVJYWN0aW9uPXsoKSA9PiBvbmRlbGV0ZT8uKCl9PlxuICAgICAgICA8R3JhcGhpYyBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5EZWxldGU8L1RleHQ+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L01lbnU+XG48L21haW4+XG5cbjxzdHlsZT5cblxuLnN5c3RlbS1lbnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDQ0LCA0NCwgMSk7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbjpnbG9iYWwoLnVuaGVhbHRoeS5zeXN0ZW0tZW50cnkpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzksIDcsIDcsIDAuMyk7XG59XG5cbjpnbG9iYWwoLmhlYWx0aC1pY29uKSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG46Z2xvYmFsKC5oZWFsdGh5KSA6Z2xvYmFsKC5oZWFsdGgtaWNvbikge1xuICBjb2xvcjogIzJkYzkzNztcbn1cblxuOmdsb2JhbCgudW5oZWFsdGh5KSA6Z2xvYmFsKC5oZWFsdGgtaWNvbikge1xuICBjb2xvcjogI2NjMzIzMjtcbn1cblxuLm5hbWUge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG48L3N0eWxlPiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgQnV0dG9uLCB7IExhYmVsIH0gZnJvbSAnQHNtdWkvYnV0dG9uJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAc211aS9jb21tb24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQHNtdWkvaWNvbi1idXR0b24nO1xuaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuaW1wb3J0IHsgQmFzZUh0dHBTZXJ2aWNlIH0gZnJvbSAnYXVkYWtvLWNvcmUtY29tcG9uZW50cyc7XG5pbXBvcnQgdHlwZSB7IFN5c3RlbVNldHRpbmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2V4dGVuc2lvbi1zZXR0aW5ncyc7XG5pbXBvcnQgdHlwZSB7IFN5c3RlbVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9zeXN0ZW0tc3RhdHVzJztcbmltcG9ydCB7IFN0b3JhZ2VVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UtdXRpbHMnO1xuaW1wb3J0IFN5c3RlbUVudHJ5IGZyb20gJy4uL2NvbXBvbmVudHMvU3lzdGVtRW50cnkuc3ZlbHRlJztcblxuY29uc3Qgc2VhcmNoID0gJHN0YXRlPHN0cmluZz4oJycpO1xuXG5sZXQgc3lzdGVtU2V0dGluZ3MgPSAkc3RhdGU8U3lzdGVtU2V0dGluZ3NbXT4oW10pO1xubGV0IHN5c3RlbVN0YXRzID0gJHN0YXRlPHsgW3VybDogc3RyaW5nXTogU3lzdGVtU3RhdHVzIH0+KHt9KTtcblxubGV0IHNob3dVbmtub3duU3lzdGVtSGludCA9ICRzdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyU3lzdGVtKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zb2xlLmxvZygnQWRkIHRvIGtub3duIHVybHMnKTtcbiAgY29uc3QgYWN0aXZlVGFiID0gKGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pKVswXTtcbiAgY29uc29sZS5sb2coYWN0aXZlVGFiKTtcblxuICBpZiAoIWFjdGl2ZVRhYikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChhY3RpdmVUYWIudXJsKTtcblxuICAgIC8vIGNoZWNrIGlmIHN5c3RlbSBpcyBub3QgYWxyZWFkeSByZWdpc3RlcmVkXG4gICAgaWYgKHN5c3RlbVNldHRpbmdzLnNvbWUoeCA9PiB4LnVybCA9PT0gdXJsLm9yaWdpbikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTeXN0ZW0gYWxyZWFkeSByZWdpc3RlcmVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U3lzdGVtRW50cnk6IFN5c3RlbVNldHRpbmdzID0ge1xuICAgICAgbnQ6IHRydWUsXG4gICAgICBmdDogdHJ1ZSxcbiAgICAgIHVybDogdXJsLm9yaWdpbixcbiAgICAgIGFsOiBudWxsLFxuICAgICAgcmg6IGZhbHNlLFxuICAgIH07XG5cbiAgICBzeXN0ZW1TZXR0aW5ncyA9IFsuLi5zeXN0ZW1TZXR0aW5ncywgbmV3U3lzdGVtRW50cnldO1xuICAgIHNob3dVbmtub3duU3lzdGVtSGludCA9IGZhbHNlO1xuICAgIFN0b3JhZ2VVdGlscy5zZXRSZWdpc3RlcmVkU3lzdGVtU2V0dGluZ3MoJHN0YXRlLnNuYXBzaG90KHN5c3RlbVNldHRpbmdzKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIHJlZ2lzdGVyIG5ldyBzeXN0ZW06ICcgKyBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0ZvckF1ZGFrb1N5c3RlbSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhY3RpdmVUYWIgPSAoYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSkpWzBdO1xuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChhY3RpdmVUYWIudXJsKTtcblxuICAgIGlmICghc3lzdGVtU2V0dGluZ3Muc29tZSh4ID0+IHgudXJsID09PSB1cmwub3JpZ2luKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgQmFzZUh0dHBTZXJ2aWNlLnJlcXVlc3RIdHRwQ29uZmlnKHVybC5vcmlnaW4pO1xuICAgICAgICBzaG93VW5rbm93blN5c3RlbUhpbnQgPSB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2hvd1Vua25vd25TeXN0ZW1IaW50ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxufVxuXG5hc3luYyBmdW5jdGlvbiBvbkRlbGV0ZVN5c3RlbShzeXN0ZW06IFN5c3RlbVNldHRpbmdzKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGluZGV4ID0gc3lzdGVtU2V0dGluZ3MuZmluZEluZGV4KHggPT4geC51cmwgPT09IHN5c3RlbS51cmwpO1xuICBzeXN0ZW1TZXR0aW5ncy5zcGxpY2UoaW5kZXgsIDEpO1xuICBzeXN0ZW1TZXR0aW5ncyA9IFsuLi5zeXN0ZW1TZXR0aW5nc107XG4gIFN0b3JhZ2VVdGlscy5zZXRSZWdpc3RlcmVkU3lzdGVtU2V0dGluZ3Moc3lzdGVtU2V0dGluZ3MpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuU3lzdGVtKHN5c3RlbTogU3lzdGVtU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgdXJsOiBzeXN0ZW0udXJsLFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgc3lzdGVtU2V0dGluZ3MgPSBhd2FpdCBTdG9yYWdlVXRpbHMuZ2V0UmVnaXN0ZXJlZFN5c3RlbVNldHRpbmdzKCk7XG4gIGF3YWl0IGNoZWNrRm9yQXVkYWtvU3lzdGVtKCk7XG4gIFN0b3JhZ2VVdGlscy5saXN0ZW5Gb3JTdGF0dXNDaGFuZ2VzKCkuc3Vic2NyaWJlKHggPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdGF0dXMgY2hhbmdlZDogJywgeCk7XG5cbiAgICBzeXN0ZW1TdGF0cyA9IHg7XG4gIH0pO1xufVxuXG5pbml0KCk7XG48L3NjcmlwdD5cblxuPG1haW4+XG4gIDxkaXYgY2xhc3M9XCJvdmVydmlldy1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvSWNvbj5cbiAgICAgIDxJbnB1dCBjbGFzcz1cInNlYXJjaC1pbnB1dCBzb2xvLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc2V0dGluZ3MtYnRuXCIgb25jbGljaz17KCkgPT4gcmVnaXN0ZXJTeXN0ZW0oKX0+c2V0dGluZ3M8L0ljb25CdXR0b24+XG4gIDwvZGl2PlxuXG4gIHsjaWYgc2hvd1Vua25vd25TeXN0ZW1IaW50fVxuICAgIDxkaXYgY2xhc3M9XCJ1bmtub3duLXN5c3RlbS1jb250YWluZXJcIj5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5pbmZvPC9JY29uPlxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA4cHg7IG1hcmdpbi1yaWdodDogYXV0b1wiPkV4dGVuc2lvbiBpcyBub3QgZW5hYmxlZCBvbiB0aGlzIHN5c3RlbTwvZGl2PlxuICAgICAgPEJ1dHRvbiBvbmNsaWNrPXsoKSA9PiByZWdpc3RlclN5c3RlbSgpfT5cbiAgICAgICAgPExhYmVsIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGRcIj5FbmFibGU8L0xhYmVsPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gIHsvaWZ9XG4gIDxkaXYgY2xhc3M9XCJzeXN0ZW0tbGlzdFwiPlxuICAgIHsjZWFjaCBzeXN0ZW1TZXR0aW5ncyBhcyBzeXN0ZW19XG4gICAgICA8ZGl2IGNsYXNzPVwic3lzdGVtLWVudHJ5XCIgb25jbGljaz17KCkgPT4gb3BlblN5c3RlbShzeXN0ZW0pfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpcHBsZVwiIHVzZTpSaXBwbGU9e3sgc3VyZmFjZTogdHJ1ZSwgY29sb3I6ICdwcmltYXJ5JyB9fT48L2Rpdj5cbiAgICAgICAgPFN5c3RlbUVudHJ5XG4gICAgICAgICAgc3lzdGVtU3RhdHVzPXtzeXN0ZW1TdGF0c1tzeXN0ZW0udXJsXX1cbiAgICAgICAgICBzeXN0ZW1TZXR0aW5ncz17c3lzdGVtfVxuICAgICAgICAgIG9uZGVsZXRlPXsoKSA9PiBvbkRlbGV0ZVN5c3RlbShzeXN0ZW0pfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgey9lYWNofVxuICA8L2Rpdj5cbjwvbWFpbj5cblxuPHN0eWxlPlxuICA6cm9vdCB7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgfVxuICAub3ZlcnZpZXctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDY2LCA2NiwgMSk7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gIC5zZWFyY2gtaW5wdXQtY29udGFpbmVyIDpnbG9iYWwoLnNlYXJjaC1pbnB1dCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cblxuICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciA6Z2xvYmFsKC5zb2xvLWlucHV0OjpwbGFjZWhvbGRlcikge1xuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc3VyZmFjZSk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5cbiAgLm92ZXJ2aWV3LWhlYWRlciA6Z2xvYmFsKC5zZXR0aW5ncy1idG4pIHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgfVxuXG4gIC51bmtub3duLXN5c3RlbS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDM0LCAxMjQsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICAuc3lzdGVtLWVudHJ5IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuXG4gIC5yaXBwbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbjwvc3R5bGU+XG4iLCJcblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCBCdXR0b24sIHsgTGFiZWwgfSBmcm9tICdAc211aS9idXR0b24nO1xuaW1wb3J0IHsgRXh0ZW5zaW9uTWVzc2FnZSwgTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZXh0ZW5zaW9uLW1lc3NhZ2UnO1xuaW1wb3J0IFN5c3RlbU92ZXJ2aWV3IGZyb20gJy4vcGFnZXMvU3lzdGVtT3ZlcnZpZXcuc3ZlbHRlJztcblxuYXN5bmMgZnVuY3Rpb24gaW5pdFBvcHVwKCkge1xuICBjb25zdCBleHRlbnNpb25TZXR0aW5ncyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdleHRlbnNpb24tc2V0dGluZ3MnKTtcbiAgY29uc29sZS5sb2coZXh0ZW5zaW9uU2V0dGluZ3MpO1xuXG4gIGNvbnN0IGFjdGl2ZVRhYiA9IChhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KSlbMF07XG5cbiAgaWYgKGFjdGl2ZVRhYikge1xuICB9XG5cbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKG9uU2V0dGluZ3NDaGFuZ2VkLmJpbmQodGhpcykpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvblNldHRpbmdzQ2hhbmdlZChjaGFuZ2VzLCBuYW1lc3BhY2UpIHtcbiAgY29uc29sZS5sb2coJ1NldHRpbmdzIENoYW5nZWQnLCBjaGFuZ2VzLCBuYW1lc3BhY2UpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuaW5pdFBvcHVwKCk7XG48L3NjcmlwdD5cblxuPG1haW4+XG4gIDxTeXN0ZW1PdmVydmlldz5cbiAgPC9TeXN0ZW1PdmVydmlldz5cbjwvbWFpbj4iLCJpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUtbWF0ZXJpYWwtdWkvYmFyZS5jc3MnO1xuaW1wb3J0ICcuL3BvcHVwLmNzcyc7XG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdzdmVsdGUnO1xuLy8gQHRzLWV4cGVjdC1lcnJvclxuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuc3ZlbHRlJztcblxuY29uc29sZS5sb2coZG9jdW1lbnQpO1xuXG5jb25zdCBhcHAgPSBtb3VudChQb3B1cCwge1xuICB0YXJnZXQ6IGRvY3VtZW50LmJvZHksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sIm5hbWVzIjpbIiQucHJvcCIsIiQucmVzdF9wcm9wcyIsIiQkYW5jaG9yIiwiJC5zcHJlYWRfcHJvcHMiLCJhY3Rpb24iLCIkLnByb3h5IiwiJC5kZXJpdmVkIiwiJC51c2VyX2VmZmVjdCIsImNsYXNzTmFtZSIsIiQuYXBwZW5kIiwiY3NzQ2xhc3NlcyIsInN0cmluZ3MiLCJudW1iZXJzIiwiQ29ybmVyQml0IiwiQ29ybmVyIiwiTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIiwicHJvcCIsIkRlZmF1bHRGb2N1c1N0YXRlIiwiTURDTWVudUZvdW5kYXRpb24iLCJpbmRleCIsImxpc3RDc3NDbGFzc2VzIiwiJC5zdGF0ZSIsIiQuZ2V0IiwiJC5zZXQiLCJldmVudCIsInJvb3QiLCIkLmNoaWxkIiwiJC5hY3Rpb24iLCJlbGVtZW50IiwiJC5zaWJsaW5nIiwiJC5zZXRfY2xhc3MiLCIkLnNuYXBzaG90IiwiQmFzZUh0dHBTZXJ2aWNlIiwiSWNvbiIsIkxhYmVsIiwiJC5pbmRleCJd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
