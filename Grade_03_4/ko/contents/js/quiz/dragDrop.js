"use strict";
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
!(function () {
  var i = "dragObjComplete",
    e = (function () {
      function r(e) {
        _classCallCheck(this, r), (this.QUIZ = e), (this.TOTAL_COUNT = 0);
      }
      return (
        _createClass(
          r,
          [
            {
              key: "checkAnswers",
              value: function (e, t) {
                if (!t) return !1;
                var n = e.element.getAttribute("data-drag-obj-answer") || "",
                  a = switchStringNumListToArray(n, ","),
                  o = t.element.getAttribute("data-drop-area-answer") || "",
                  r = switchStringNumListToArray(o, ",");
                return a.some(function (t) {
                  return r.some(function (e) {
                    return t === e;
                  });
                });
              }
            },
            {
              key: "init",
              value: function () {
                this.initGame(), this.initPopupOpenCallback(), this.initSliderMoveCallback();
              }
            },
            {
              key: "initGame",
              value: function () {
                var e = this,
                  t = this.QUIZ.container,
                  n = t.querySelectorAll(".js-dropArea"),
                  a = t.querySelectorAll(".js-dragObj");
                (this.game = initDragDrop({
                  elements: {
                    container: t,
                    areas: n,
                    objs: a
                  },
                  callbacks: {
                    end: r.endCallback,
                    movedOut: r.movedOutCallback,
                    getZoomRate: function () {
                      return e.getZoomRate();
                    }
                  },
                  movedOutCorrPx: 20
                })),
                  (this.game.quiz = this).game.init();
              }
            },
            {
              key: "initPopupOpenCallback",
              value: function () {
                var t = this;
                window.$popupCallBack || (window.$popupCallBack = {}),
                  (window.$popupCallBack.open = function (e) {
                    "pageChange" === e.Mode && t.popupOpenCallback();
                  });
              }
            },
            {
              key: "initSliderMoveCallback",
              value: function () {
                var e = this;
                window.$callBack.sliderMove ||
                  (window.$callBack.sliderMove = function () {
                    e.sliderMoveCallback();
                  });
              }
            },
            {
              key: "sliderMoveCallback",
              value: function () {
                this.reset();
              }
            },
            {
              key: "endCorrect",
              value: function (e, t) {
                var n = 0 < arguments.length && void 0 !== e ? e : this.game.movingObj,
                  a = 1 < arguments.length && void 0 !== t ? t : this.game.droppedArea;
                this.TOTAL_COUNT++,
                  this.QUIZ.option.copy || (n.disable(!0), r.dragObjCompleteClass(n, !0)),
                  this.copyObj(),
                  r.completeArea(a),
                  this.checkTotalComplete();
              }
            },
            {
              key: "endWrong",
              value: function () {
                this.game.movingObj.resetPosition();
              }
            },
            {
              key: "copyObj",
              value: function (e, t) {
                var n = 0 < arguments.length && void 0 !== e ? e : this.game.movingObj,
                  a = 1 < arguments.length && void 0 !== t ? t : this.game.droppedArea;
                n.resetPosition();
                var o = n.element.cloneNode(!0);
                r.dragObjCompleteClass(o, !0), a.element.appendChild(o);
              }
            },
            {
              key: "showAnswer",
              value: function () {
                var n = this,
                  e = this.game.dragObjs,
                  a = this.game.dropAreas;
                e.forEach(function (t) {
                  a.forEach(function (e) {
                    n.checkAnswers(t, e) &&
                      (r.dropAreaHasCopied(t, e) ||
                        (n.copyObj(t, e), r.dragObjCompleteClass(t, !0))),
                      e.disable(!0);
                  }),
                    t.disable(!0);
                });
              }
            },
            {
              key: "reset",
              value: function () {
                var e = this.game,
                  t = this.QUIZ.answerBtn;
                t &&
                  t.dataset.option &&
                  -1 < t.dataset.option.indexOf("resetOnly") &&
                  t.classList.add("reset"),
                  (this.TOTAL_COUNT = 0),
                  this.resetAreas(),
                  this.resetObjs(),
                  e.initDragObjsCoords(),
                  e.setZoomRate();
              }
            },
            {
              key: "resetObjs",
              value: function () {
                this.game.dragObjs.forEach(function (e) {
                  e.disable(!1), r.dragObjCompleteClass(e, !1);
                });
              }
            },
            {
              key: "resetAreas",
              value: function () {
                this.game.dropAreas.forEach(function (e) {
                  var n = e.element.querySelectorAll(`.${i}:not(.dragClone *)`);

                  for (var t, a = 0, o = n.length; a < o; a++) {
                    t = n[a];
                    e.element.removeChild(t);
                  }

                  e.disable(false);
                });
              }
            },
            {
              key: "popupOpenCallback",
              value: function () {
                this.reset();
              }
            },
            {
              key: "getZoomRate",
              value: function () {
                if (!document.querySelector("html").classList.contains("noUI"))
                  return {
                    x: 1,
                    y: 1
                  };
                var e = document.getElementById("wrap").style.transform,
                  t = r.convertScaleStringToArray(e);
                return {
                  x: t[0],
                  y: t[1]
                };
              }
            },
            {
              key: "checkTotalComplete",
              value: function () {
                console.log(
                  "checkTotalComplete "
                    .concat(this.TOTAL_COUNT, " : ")
                    .concat(this.TOTAL_COMPLETE_COUNT)
                ),
                  this.TOTAL_COUNT === this.TOTAL_COMPLETE_COUNT &&
                    (console.log("끝!"), this.QUIZ.toggleAnswerBtn());
              }
            },
            {
              key: "TOTAL_COMPLETE_COUNT",
              get: function () {
                this.game.container;
                var e =
                    this.game.container.element.hasAttribute("data-total-complete-count") &&
                    this.game.container.element.getAttribute("data-total-complete-count"),
                  e = parseInt(e);
                return (e = isNaN(e) ? 0 : e);
              }
            }
          ],
          [
            {
              key: "endCallback",
              value: function (e) {
                var t = e.movingObj,
                  n = e.droppedArea,
                  a = e.quiz,
                  o = !a.QUIZ.option.answer || a.checkAnswers(t, n);

                // Check if the answer is correct
                if (n && o) {
                  a.endCorrect();

                  // Play correct sound only if the copy option is not enabled
                  if (!a.QUIZ.option.copy || a.QUIZ.option.correct) {
                    window.$efSound.correct();
                  }
                } else {
                  a.endWrong();
                  window.$efSound.incorrect();
                }
              }
            },
            {
              key: "movedOutCallback",
              value: function () {}
            },
            {
              key: "completeArea",
              value: function (e) {
                var t = e,
                  n = -1 < (t.element.dataset.option || "").indexOf("complete"),
                  a = r.getCompleteCnt(t.element),
                  o =
                    (t.element.querySelectorAll(".js-dragObj") &&
                      t.element.querySelectorAll(".js-dragObj").length) ||
                    0;
                n && a === o && t.disable(!0);
              }
            },
            {
              key: "getCompleteCnt",
              value: function (e) {
                return parseInt(e.getAttribute("data-complete-count")) || 1;
              }
            },
            {
              key: "convertScaleStringToArray",
              value: function (e) {
                var t = e.split(",")[0].split("(")[1];
                return [t, t].map(function (e) {
                  return parseFloat(e.trim());
                });
              }
            },
            {
              key: "dragObjCompleteClass",
              value: function (e, t) {
                var n = e instanceof DragObj ? e.element : e;
                t ? n.classList.add(i) : n.classList.remove(i);
              }
            },
            {
              key: "dropAreaHasCopied",
              value: function (e, t) {
                for (var n, a = t.element.children, o = 0, r = a.length; o < r; o++)
                  if (((n = a[o]), e.element.className === n.className)) return !0;
                return !1;
              }
            }
          ]
        ),
        r
      );
    })();
  window.$dragDrop = e;
})();
