"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var DOM = function() {
        function t(e) {
            _classCallCheck(this, t), this.element = e.element, (this.element.self = this).name = e.name || "noname", this.attrName = e.attrName || e.name || null, this.getScale = e.getScale, this.DISABLED = !1
        }
        return _createClass(t, [{
            key: "hasClass",
            value: function(e) {
                return this.element.classList.contains(e)
            }
        }, {
            key: "addClass",
            value: function(e) {
                return this.element.classList.add(e)
            }
        }, {
            key: "removeClass",
            value: function(e) {
                return this.element.classList.remove(e)
            }
        }, {
            key: "hasAttr",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : this.attrName;
                return this.element.hasAttribute(t)
            }
        }, {
            key: "getAttr",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : this.attrName;
                return this.element.getAttribute(t)
            }
        }, {
            key: "setAttr",
            value: function(e, t) {
                var n = 0 < arguments.length && void 0 !== e ? e : this.attrName,
                    o = 1 < arguments.length ? t : void 0;
                this.element.setAttribute(n, o)
            }
        }, {
            key: "setStyles",
            value: function(e) {
                if (e.constructor === Object)
                    for (var t, n = Object.getOwnPropertyNames(e), o = 0, r = n.length; o < r; o++) t = n[o], this.element.style[t] = e[t]
            }
        }, {
            key: "pointerOff",
            value: function() {
                this.setStyles({
                    cursor: "default",
                    pointerEvents: "none"
                })
            }
        }, {
            key: "pointerOn",
            value: function() {
                this.setStyles({
                    cursor: "pointer",
                    pointerEvents: "auto"
                })
            }
        }, {
            key: "show",
            value: function() {
                this.setStyles({
                    opacity: "1",
                    visibility: "visible"
                })
            }
        }, {
            key: "hide",
            value: function() {
                this.setStyles({
                    opacity: "0",
                    visibility: "hidden"
                })
            }
        }, {
            key: "addEvent",
            value: function(e, t) {
                switch (e) {
                    case "down":
                        this.element.addEventListener("mousedown", t), this.element.addEventListener("touchstart", t);
                        break;
                    case "move":
                        this.element.addEventListener("mousemove", t), this.element.addEventListener("touchmove", t);
                        break;
                    case "up":
                        this.element.addEventListener("mouseup", t), this.element.addEventListener("touchend", t);
                        break;
                    default:
                        this.element.addEventListener(e, t)
                }
            }
        }, {
            key: "removeEvent",
            value: function(e, t) {
                switch (e) {
                    case "down":
                        this.element.removeEventListener("mousedown", t), this.element.removeEventListener("touchstart", t);
                        break;
                    case "move":
                        this.element.removeEventListener("mousemove", t), this.element.removeEventListener("touchmove", t);
                        break;
                    case "up":
                        this.element.removeEventListener("mouseup", t), this.element.removeEventListener("touchend", t);
                        break;
                    default:
                        this.element.removeEventListener(e, t)
                }
            }
        }, {
            key: "eventIsOn",
            value: function(e, t) {
                var n = this.sizes,
                    o = n.left,
                    r = n.top,
                    s = n.width,
                    i = n.height,
                    a = t || 0,
                    l = e.x > o - a,
                    u = e.y > r - a,
                    c = e.x < o + s + a,
                    d = e.y < r + i + a,
                    v = this.DISABLED;
                return l && u && c && d && !v
            }
        }, {
            key: "disable",
            value: function(e) {
                this.DISABLED = e
            }
        }, {
            key: "sizes",
            get: function() {
                return this.element.getBoundingClientRect()
            }
        }, {
            key: "styles",
            get: function() {
                return window.getComputedStyle(this.element)
            }
        }, {
            key: "scale",
            get: function() {
                return this.getScale ? this.getScale() : 1
            }
        }, {
            key: "offsets",
            get: function() {
                var e = this.element;
                return {
                    y: e.offsetTop,
                    x: e.offsetLeft,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
        }], [{
            key: "eventMaster",
            value: function(e) {
                var t, n = e.type;
                return o(n, "mouse") ? t = e : o(n, "touch") && (t = o(n, "touchend") ? e.changedTouches[0] : e.touches[0]), t.coords = {
                    x: t.clientX,
                    y: t.clientY
                }, t;

                function o(e, t) {
                    return -1 < e.indexOf(t)
                }
            }
        }]), t
    }(),
    Container = function() {
        function l(e) {
            var t;
            return _classCallCheck(this, l), (t = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this, e))).dragDrop = e.dragDrop, t
        }
        return _inherits(l, DOM), _createClass(l, [{
            key: "init",
            value: function() {
                this.addEvents()
            }
        }, {
            key: "addEvents",
            value: function() {
                this.addEvent("down", l.downEventCallback)
            }
        }, {
            key: "movedOut",
            value: function(e) {
                var t = e.x,
                    n = e.y,
                    o = this.sizes.x,
                    r = this.sizes.y,
                    s = o + this.sizes.width,
                    i = r + this.sizes.height,
                    a = window.innerWidth,
                    l = window.innerHeight,
                    u = this.dragDrop.movedOutCorrPx;
                return t <= o + u || t <= u || (s - u <= t || a - u <= t) || (n <= r + u || n <= u) || (i - u <= n || l - u <= n)
            }
        }], [{
            key: "downEventCallback",
            value: function(e) {
                for (var t = e.target;
                    (t.self && t.self.constructor) !== l;) t = t.parentNode;
                var n = t.self.dragDrop,
                    o = n.container;
                n.movingObj = n.objOnEvent(e), n.movingObj && (o.addEvent("move", l.moveEventCallback), o.addEvent("up", l.upEventCallback)), n.callbacks && n.callbacks.start && n.callbacks.start(n)
            }
        }, {
            key: "moveEventCallback",
            value: function(e) {
                for (var t = e.target;
                    (t && t.self && t.self.constructor) !== l;) t = t.parentNode;
                var n = t.self.dragDrop,
                    o = n.movingObj,
                    r = n.container,
                    s = DOM.eventMaster(e).coords,
                    i = r.movedOut(s),
                    a = o.name;
                i ? n.movedOut() : (o.MOVED_COORDS = s, o.move(), n.callbacks && n.callbacks.move && n.callbacks.move(n), window.dragMoveCallbacks && window.dragMoveCallbacks[a] && "noname" !== a && window.dragMoveCallbacks[a](o))
            }
        }, {
            key: "upEventCallback",
            value: function(e) {
                for (var t = e.target;
                    (t.self && t.self.constructor) !== l;) t = t.parentNode;
                var n = t.self,
                    o = n.dragDrop,
                    r = o.movingObj,
                    s = o.droppedArea,
                    i = r.name,
                    a = s && s.name;
                o.droppedArea = o.areaOnEvent(e), o.callbacks && o.callbacks.end && o.callbacks.end(o), window.dragDropCallbacks && (window.dragDropCallbacks[i] && "noname" !== i && window.dragDropCallbacks[i](o), window.dragDropCallbacks[a] && "noname" !== a && window.dragDropCallbacks[a](o)), n.removeEvent("move", l.moveEventCallback), n.removeEvent("up", l.upEventCallback)
            }
        }]), l
    }(),
    DragObj = function() {
        function r(e) {
            var t;
            return _classCallCheck(this, r), (t = _possibleConstructorReturn(this, _getPrototypeOf(r).call(this, e))).dragDrop = e.dragDrop, t.DISABLED = !1, t
        }
        return _inherits(r, DOM), _createClass(r, [{
            key: "init",
            value: function() {
                this.initCoords(), this.addEvents()
            }
        }, {
            key: "initCoords",
            value: function() {
                var e = this.offsets,
                    t = e.x,
                    n = e.y;
                this.NON_SCALED_COORDS = {
                    x: t,
                    y: n
                }
            }
        }, {
            key: "addEvents",
            value: function() {
                this.addEvent("down", r.downEventHandler)
            }
        }, {
            key: "move",
            value: function(e) {
                var t = this.dragDrop.ZOOM_RATE,
                    n = this.MOVED_COORDS,
                    o = n.x / t.x,
                    r = n.y / t.y,
                    s = this.NON_SCALED_COORDS,
                    i = s.x,
                    a = s.y,
                    l = e ? i + e.x : i + o,
                    u = e ? a + e.y : a + r,
                    c = "".concat(u, "px"),
                    d = "".concat(l, "px");
                this.setStyles({
                    position: "absolute",
                    top: c,
                    left: d
                })
            }
        }, {
            key: "resetPosition",
            value: function() {
                this.setStyles({
                    position: "",
                    top: "",
                    left: ""
                })
            }
        }, {
            key: "getScaledCoords",
            value: function() {
                var e = this.dragDrop.container,
                    t = this.sizes,
                    n = e.sizes;
                return {
                    x: t.left - n.left,
                    y: t.top - n.top
                }
            }
        }, {
            key: "NON_SCALED_COORDS",
            get: function() {
                return this._nonScaledCoords || {
                    x: 0,
                    y: 0
                }
            },
            set: function(e) {
                this._nonScaledCoords = e
            }
        }, {
            key: "STARTED_COORDS",
            get: function() {
                return this._startedCoords || {
                    x: 0,
                    y: 0
                }
            },
            set: function(e) {
                this._startedCoords = e
            }
        }, {
            key: "MOVED_COORDS",
            get: function() {
                return this._movedCoords || {
                    x: 0,
                    y: 0
                }
            },
            set: function(e) {
                this._movedCoords || (this._movedCoords = {}), this._movedCoords.x = e.x - this.STARTED_COORDS.x, this._movedCoords.y = e.y - this.STARTED_COORDS.y
            }
        }], [{
            key: "downEventHandler",
            value: function(e) {
                for (var t = e.target;
                    (t.self && t.self.constructor) !== r;) t = t.parentElement;
                var n = t.self,
                    o = n.dragDrop;
                n.NON_SCALED_COORDS, n.getScaledCoords();
                o.setZoomRate()
            }
        }]), r
    }(),
    DropArea = function() {
        function n(e) {
            var t;
            return _classCallCheck(this, n), (t = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, e))).dragDrop = e.dragDrop, t
        }
        return _inherits(n, DOM), _createClass(n, [{
            key: "init",
            value: function() {}
        }]), n
    }(),
    DragDropCore = function() {
        function t(e) {
            _classCallCheck(this, t), this.elements = e.elements, this.callbacks = e.callbacks, this._container = null, this._dragObjs = [], this._dropAreas = [], this.getZoomRate = e.callbacks.getZoomRate, this.movedOutCorrPx = e.movedOutCorrPx || 10
        }
        return _createClass(t, [{
            key: "init",
            value: function() {
                this.initContainer(), this.initDragObjs(), this.initDropAreas(), this.addEvents()
            }
        }, {
            key: "initContainer",
            value: function() {
                var e = this.elements.container,
                    t = e.dataset.name || null;
                e && (this.container = new Container({
                    element: e,
                    name: t,
                    dragDrop: this
                }), this.container.init())
            }
        }, {
            key: "initDragObjs",
            value: function() {
                for (var e, t, n, o = this.elements.objs, r = 0, s = o.length; r < s; r++) t = (e = o[r]).dataset.name || null, (n = new DragObj({
                    element: e,
                    name: t,
                    dragDrop: this
                })).init(), this.dragObjs = n
            }
        }, {
            key: "initDropAreas",
            value: function() {
                for (var e, t, n, o = this.elements.areas, r = 0, s = o.length; r < s; r++) t = (e = o[r]).dataset.name || null, (n = new DropArea({
                    element: e,
                    name: t,
                    dragDrop: this
                })).init(), this.dropAreas = n
            }
        }, {
            key: "addEvents",
            value: function() {}
        }, {
            key: "objOnEvent",
            value: function(e) {
                for (var t, n = DOM.eventMaster(e).coords, o = e.type, r = "mousedown" === o || "touchstart" === o, s = this.dragObjs, i = 0, a = s.length; i < a; i++)
                    if ((t = s[i]).eventIsOn(n)) return r && (t.STARTED_COORDS = n), t
            }
        }, {
            key: "areaOnEvent",
            value: function(e) {
                for (var t, n = DOM.eventMaster(e).coords, o = this.dropAreas, r = 0, s = o.length; r < s; r++)
                    if ((t = o[r]).eventIsOn(n)) return t
            }
        }, {
            key: "setZoomRate",
            value: function() {
                this.ZOOM_RATE = this.getZoomRate() || 1
            }
        }, {
            key: "disableObjs",
            value: function(t) {
                this.dragObjs.forEach(function(e) {
                    e.disable(t)
                })
            }
        }, {
            key: "disableAreas",
            value: function(t) {
                this.dropAreas.forEach(function(e) {
                    e.disable(t)
                })
            }
        }, {
            key: "initDragObjsCoords",
            value: function() {
                this.dragObjs.forEach(function(e) {
                    e.initCoords()
                })
            }
        }, {
            key: "movedOut",
            value: function() {
                var e = this.container;
                this.movingObj.resetPosition(), this.movingObj = null, e.removeEvent("move", Container.moveEventCallback), e.removeEvent("up", Container.upEventCallback), this.callbacks && this.callbacks.movedOut && this.callbacks.movedOut(this)
            }
        }, {
            key: "container",
            get: function() {
                return this._container
            },
            set: function(e) {
                this._container = e
            }
        }, {
            key: "dragObjs",
            get: function() {
                return this._dragObjs
            },
            set: function(e) {
                this.dragObjs.push(e)
            }
        }, {
            key: "dropAreas",
            get: function() {
                return this._dropAreas
            },
            set: function(e) {
                this._dropAreas.push(e)
            }
        }, {
            key: "ZOOM_RATE",
            get: function() {
                return this._zoomRate || {
                    x: 1,
                    y: 1
                }
            },
            set: function(e) {
                this._zoomRate = e
            }
        }, {
            key: "movingObj",
            get: function() {
                return this._movingObj
            },
            set: function(e) {
                this._movingObj = e
            }
        }, {
            key: "droppedArea",
            get: function() {
                return this._droppedArea
            },
            set: function(e) {
                this._droppedArea = e
            }
        }]), t
    }();

function initDragDrop(e) {
    var t = e.elements,
        n = e.callbacks,
        o = e.movedOutCorrPx,
        r = new DragDropCore({
            elements: t,
            callbacks: n,
            movedOutCorrPx: o
        });
    return n && n.init && n.init(r), r
}