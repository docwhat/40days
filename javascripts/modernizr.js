/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes
 */
window.Modernizr = (function (a, b, c) {
  function w(a) {
    j.cssText = a;
  }
  function x(a, b) {
    return w(m.join(a + ";") + (b || ""));
  }
  function y(a, b) {
    return typeof a === b;
  }
  function z(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function A(a, b, d) {
    for (const e in a) {
      const f = b[a[e]];
      if (f !== c) {
        return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f;
      }
    }
    return !1;
  }
  const d = "2.6.2";
  const e = {};
  const f = !0;
  const g = b.documentElement;
  const h = "modernizr";
  let i = b.createElement(h);
  var j = i.style;
  let k;
  const l = {}.toString;
  var m = " -webkit- -moz- -o- -ms- ".split(" ");
  const n = {};
  const o = {};
  const p = {};
  const q = [];
  const r = q.slice;
  let s;
  const t = function (a, c, d, e) {
    let f;
    let i;
    let j;
    let k;
    const l = b.createElement("div");
    const m = b.body;
    const n = m || b.createElement("body");
    if (parseInt(d, 10)) {
      while (d--) {
        (j = b.createElement("div")),
          (j.id = e ? e[d] : h + (d + 1)),
          l.appendChild(j);
      }
    }
    return (
      (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
      (l.id = h),
      ((m ? l : n).innerHTML += f),
      n.appendChild(l),
      m ||
        ((n.style.background = ""),
        (n.style.overflow = "hidden"),
        (k = g.style.overflow),
        (g.style.overflow = "hidden"),
        g.appendChild(n)),
      (i = c(l, a)),
      m
        ? l.parentNode.removeChild(l)
        : (n.parentNode.removeChild(n), (g.style.overflow = k)),
      !!i
    );
  };
  const u = {}.hasOwnProperty;
  let v;
  !y(u, "undefined") && !y(u.call, "undefined")
    ? (v = function (a, b) {
        return u.call(a, b);
      })
    : (v = function (a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        const c = this;
        if (typeof c !== "function") throw new TypeError();
        const d = r.call(arguments, 1);
        var e = function () {
          if (this instanceof e) {
            const a = function () {};
            a.prototype = c.prototype;
            const f = new a();
            const g = c.apply(f, d.concat(r.call(arguments)));
            return Object(g) === g ? g : f;
          }
          return c.apply(b, d.concat(r.call(arguments)));
        };
        return e;
      }),
    (n.touch = function () {
      let c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : t(
              [
                "@media (",
                m.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    });
  for (const B in n) {
    v(n, B) &&
      ((s = B.toLowerCase()), (e[s] = n[B]()), q.push((e[s] ? "" : "no-") + s));
  }
  return (
    (e.addTest = function (a, b) {
      if (typeof a === "object") {
        for (const d in a) v(a, d) && e.addTest(d, a[d]);
      } else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b === "function" ? b() : b),
          typeof f !== "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    w(""),
    (i = k = null),
    (e._version = d),
    (e._prefixes = m),
    (e.testStyles = t),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + q.join(" ") : "")),
    e
  );
})(this, this.document);
