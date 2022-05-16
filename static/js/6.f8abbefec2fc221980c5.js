webpackJsonp([6], {
    npFY: function(t, a, s) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var e = s("d7EF")
          , i = s.n(e)
          , c = s("//Fk")
          , r = s.n(c)
          , l = s("Xxa5")
          , n = s.n(l)
          , v = s("exGp")
          , o = s.n(v)
          , u = s("TT7H")
          , d = s("aGwp")
          , m = s("/4JW")
          , b = s("PJh5")
          , _ = s.n(b)
          , p = s("Udoy")
          , C = s.n(p)
          , f = s("2hfY")
          , h = s("QjMU")
          , D = s("X2Oc")
          , j = s("Rbbk")
          , O = s("wbDN")
          , N = s.n(O)
          , U = (s("wt5/"),
        {
            name: "Dashboard",
            components: {
                Header: u.a,
                LeftHeader: d.a,
                MobileHeader: m.a,
                FlipCountdown: C.a,
                moment: _.a
            },
            created: function() {
                var t = this;
                Object(D.b)(function(a) {
                    t.connectedAccount = a || void 0
                }),
                setTimeout(function() {
                    t.init(t.connectedAccount)
                }, 200),
                this.timer = setInterval(o()(n.a.mark(function a() {
                    return n.a.wrap(function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                t.init(t.connectedAccount);
                            case 1:
                            case "end":
                                return a.stop()
                            }
                    }, a, t)
                })), 500)
            },
            data: function() {
                return {
                    connectedAccount: "",
                    headerActive: "3",
                    time: "",
                    price: "",
                    cap: "",
                    supply: "",
                    FundValue: "",
                    totalSupply: "",
                    marketValue: "",
                    poolValue: "",
                    bonus: "",
                    reward: "",
                    timer: null,
                    consensusFundReceiverUSDT: 0,
                    treasuryReceiverUSDT: 0
                }
            },
            methods: {
                handleConnectWallet: function() {
                    Object(D.a)()
                },
                init: function(t) {
                    var a = this;
                    return o()(n.a.mark(function t() {
                        return n.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    s("9al3"),
                                    r.a.all([Object(j.i)(), Object(j.d)(), Object(j.f)(), Object(j.a)(), Object(j.l)(), Object(j.k)(), Object(j.g)("0x0000000000000000000000000000000000000000"), Object(j.h)(), Object(j.e)(), Object(j.m)(), Object(j.j)(), Object(j.b)(), Object(j.c)()]).then(function(t) {
                                        var s = i()(t, 13)
                                          , e = s[0]
                                          , c = s[1]
                                          , r = s[2]
                                          , l = s[3]
                                          , n = s[4]
                                          , v = s[5]
                                          , o = s[6]
                                          , u = s[7]
                                          , d = s[8]
                                          , m = s[9]
                                          , b = s[10]
                                          , p = s[11]
                                          , C = s[12];
                                        a.price = Object(D.h)(Number(h.c.formatUnits(e)), 4),
                                        a.supply = Number(h.c.formatUnits(c.sub(l), 8)) <= 0 ? 0 : Object(D.h)(Number(h.c.formatUnits(c.sub(l), 8)), 2),
                                        a.cap = 0 === Number(a.supply) ? 0 : Object(D.h)(Number(new N.a(a.price).mul(a.supply)), 2),
                                        Number(r) + 898 > Math.round((new Date).getTime() / 1e3) ? a.time = _()(Object(f.a)(Number(r) + 898, !0, "").replace(/-/g, "/")).format("MM/DD/YYYY HH:mm:ss") : a.time = _()(Object(f.a)(Number(r) + 1798, !0, "").replace(/-/g, "/")).format("MM/DD/YYYY HH:mm:ss"),
                                        a.totalSupply = 0 === Number(h.c.formatUnits(n, 8)) ? 0 : Object(D.h)(Number(h.c.formatUnits(n, 8)), 2),
                                        a.FundValue = 0 === Number(h.c.formatUnits(l.add(p).add(C), 8)) ? 0 : Object(D.h)(Number(h.c.formatUnits(l.add(p).add(C), 8)), 2),
                                        a.marketValue = 0 === Number(h.c.formatUnits(v)) ? 0 : Number(new N.a(h.c.formatUnits(v)).mul(50).div(75).mul(a.price)),
                                        a.poolValue = 2 * Number(h.c.formatUnits(b)) <= .001 ? 0 : Object(D.h)(2 * Number(h.c.formatUnits(b)), 2),
                                        a.bonus = 0 === Number(h.c.formatUnits(o.totalDaoRewardAmount, 8)) ? 0 : Object(D.h)(Number(h.c.formatUnits(o.totalDaoRewardAmount, 8)), 2),
                                        a.reward = 0 === Number(h.c.formatUnits(u, 8)) ? 0 : Object(D.h)(Number(h.c.formatUnits(u, 8)), 2),
                                        a.consensusFundReceiverUSDT = 0 === Number(h.c.formatUnits(d)) ? 0 : Object(D.h)(Number(h.c.formatUnits(d)), 2),
                                        a.treasuryReceiverUSDT = 0 === Number(h.c.formatUnits(m)) ? 0 : Object(D.h)(Number(h.c.formatUnits(m)), 2)
                                    }).catch(function(t) {
                                        a.$message.closeAll(),
                                        a.$message.error(t)
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }, t, a)
                    }))()
                }
            },
            beforeDestroy: function() {
                clearInterval(this.timer),
                this.timer = null
            }
        })
          , w = {
            render: function() {
                var t = this
                  , a = t.$createElement
                  , s = t._self._c || a;
                return s("div", {
                    staticClass: "Dashboard"
                }, [s("div", {
                    staticClass: "pc_header"
                }, [s("Header", {
                    attrs: {
                        bgColor: "transparent"
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "left_header"
                }, [s("Left-Header", {
                    attrs: {
                        active: t.headerActive
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "mobile_header"
                }, [s("Mobile-Header", {
                    attrs: {
                        active: t.headerActive
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "feature"
                }, [s("el-main", [s("div", {
                    staticClass: "dataInfo"
                }, [s("div", {
                    staticClass: "row1"
                }, [s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("FREE Price")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v("$" + t._s(t.price))])])]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Market Cap")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v("$" + t._s(t.cap))])])]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Circulating Supply")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.supply))])])]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                })]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Next Rebase")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t.time ? s("flip-countdown", {
                    attrs: {
                        deadline: t.time,
                        showDays: !1
                    }
                }) : t._e()], 1)])]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                })])]), t._v(" "), s("div", {
                    staticClass: "row2"
                }, [s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Number of Black Holes")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.FundValue) + " FREE")])])]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Value Liquidity")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v("$" + t._s(t.poolValue))])])])]), t._v(" "), s("div", {
                    staticClass: "row2"
                }, [s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Medal of Freedom NFT Dividend")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.bonus) + " FREE")])])]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("FP-DAO Rewards")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.reward) + " FREE")])])])]), t._v(" "), s("div", {
                    staticClass: "row2"
                }, [s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Consensus Fund")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v("$" + t._s(t.consensusFundReceiverUSDT))])])]), t._v(" "), s("div", {
                    staticClass: "oDiv"
                }, [s("div", {
                    staticClass: "card"
                }, [s("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Freedom Fund")))]), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v("$" + t._s(t.treasuryReceiverUSDT))])])])])])])], 1)])
            },
            staticRenderFns: []
        }
          , F = s("VU/8")(U, w, !1, null, null, null);
        a.default = F.exports
    },
    "wt5/": function(t, a) {}
});
