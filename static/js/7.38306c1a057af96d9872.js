webpackJsonp([7], {
    fmy4: function(e, t) {},
    zmmn: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a("d7EF")
          , s = a.n(i)
          , r = a("//Fk")
          , c = a.n(r)
          , n = a("Xxa5")
          , l = a.n(n)
          , u = a("exGp")
          , o = a.n(u)
          , v = a("TT7H")
          , d = a("aGwp")
          , p = a("/4JW")
          , m = a("PJh5")
          , f = a.n(m)
          , h = a("Udoy")
          , _ = a.n(h)
          , b = (a("2hfY"),
        a("QjMU"))
          , $ = a("Rbbk")
          , C = a("fahL")
          , N = a("X2Oc")
          , j = (a("wbDN"),
        a("fmy4"),
        {
            name: "Calculator",
            components: {
                Header: v.a,
                LeftHeader: d.a,
                MobileHeader: p.a,
                FlipCountdown: _.a,
                moment: f.a
            },
            created: function() {
                var e = this;
                Object(N.b)(function(t) {
                    e.connectedAccount = t || void 0
                }),
                setTimeout(function() {
                    e.init(e.connectedAccount)
                }, 200),
                this.timer = setInterval(o()(l.a.mark(function t() {
                    return l.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e.getPrice();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                })), 1e3)
            },
            data: function() {
                return {
                    connectedAccount: "",
                    headerActive: "5",
                    BOSSValue: 0,
                    price: "",
                    BOSSPrice: "",
                    BOSSPrice2: "",
                    amountNum: 0,
                    apyNum: "183394.2",
                    sliderNum: 30,
                    investment: 0,
                    wealth: 0,
                    BOSSReward: 0,
                    potential: 0,
                    timer: null
                }
            },
            methods: {
                handleConnectWallet: function() {
                    Object(N.a)()
                },
                maxAmount: function() {
                    this.amountNum = this.BOSSValue,
                    this.handleInput(String(this.amountNum))
                },
                maxAmount2: function() {
                    this.apyNum = "183394.2",
                    this.handleInput2(String(this.apyNum))
                },
                maxAmount3: function() {
                    this.BOSSPrice = this.price,
                    this.handleInput3(String(this.BOSSPrice))
                },
                maxAmount4: function() {
                    this.BOSSPrice2 = this.price,
                    this.handleInput4(String(this.BOSSPrice2))
                },
                init: function(e) {
                    var t = this;
                    return o()(l.a.mark(function a() {
                        return l.a.wrap(function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    c.a.all([Object($.i)(), Object(C.a)(e)]).then(function(e) {
                                        var a = s()(e, 2)
                                          , i = a[0]
                                          , r = a[1];
                                        t.price = Object(N.h)(Number(b.c.formatUnits(i)), 4),
                                        t.BOSSValue = Object(N.h)(Number(b.c.formatUnits(r, 8)), 4),
                                        t.BOSSPrice = t.price,
                                        t.BOSSPrice2 = t.price
                                    }).catch(function(e) {
                                        t.$message.closeAll(),
                                        t.$message.error(e)
                                    });
                                case 1:
                                case "end":
                                    return a.stop()
                                }
                        }, a, t)
                    }))()
                },
                getPrice: function(e) {
                    var t = this;
                    c.a.all([Object($.i)()]).then(function(e) {
                        var a = s()(e, 1)[0];
                        t.price = Object(N.h)(Number(b.c.formatUnits(a)), 4)
                    }).catch(function(e) {
                        t.$message.closeAll(),
                        t.$message.error(e)
                    })
                },
                handleInput: function(e) {
                    var t = a("9al3");
                    this.amountNum = e.replace(/[^\d\.]/g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    var i = e.replace(/[^\d\.]/g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    this.investment = Object(N.f)(Object(N.c)(i, this.BOSSPrice)),
                    this.wealth = Object(N.f)(Object(N.c)(i, this.price));
                    for (var s = this.amountNum, r = 24 * this.sliderNum * 60 / 15, c = 1; c <= r; c++)
                        s = t.chain(s).add(Object(N.c)(s, .0214447 / 100)).done();
                    this.BOSSReward = 0 === Number(e) ? 0 : Object(N.f)(Object(N.c)(s, 1)),
                    this.potential = 0 === Number(e) ? 0 : Object(N.f)(Object(N.c)(this.BOSSPrice2, this.BOSSReward))
                },
                handleInput2: function(e) {
                    this.BOSSReward = 0 === Number(e) ? 0 : Object(N.h)(Object(N.c)(e / 1e4 / 365 * this.sliderNum, this.amountNum), 5),
                    this.potential = Object(N.f)(Object(N.c)(this.BOSSReward, this.BOSSPrice2))
                },
                handleInput3: function(e) {
                    this.BOSSPrice = e.replace(/[^\d\.]/g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    var t = e.replace(/[^\d\.]/g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    this.investment = Object(N.f)(Object(N.c)(this.amountNum, t))
                },
                handleInput4: function(e) {
                    this.BOSSPrice2 = e.replace(/[^\d\.]/g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    var t = e.replace(/[^\d\.]/g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    this.potential = Object(N.f)(Object(N.c)(this.BOSSReward, t))
                },
                handleSliderNum: function(e) {
                    for (var t = a("9al3"), i = this.amountNum, s = 24 * e * 60 / 15, r = 1; r < s; r++)
                        i = t.chain(i).add(Object(N.c)(i, .0214447 / 100)).done();
                    this.BOSSReward = 0 === Number(this.amountNum) ? 0 : Object(N.f)(Object(N.c)(i, 1)),
                    this.potential = 0 === Number(this.amountNum) ? 0 : Object(N.f)(Object(N.c)(this.BOSSPrice2, this.BOSSReward))
                }
            },
            beforeDestroy: function() {
                clearInterval(this.timer),
                this.timer = null
            }
        })
          , O = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "Calculator"
                }, [a("div", {
                    staticClass: "pc_header"
                }, [a("Header", {
                    attrs: {
                        bgColor: "transparent",
                        active: e.headerActive
                    }
                })], 1), e._v(" "), a("div", {
                    staticClass: "left_header"
                }, [a("Left-Header", {
                    attrs: {
                        active: e.headerActive
                    }
                })], 1), e._v(" "), a("div", {
                    staticClass: "mobile_header"
                }, [a("Mobile-Header", {
                    attrs: {
                        active: e.headerActive
                    }
                })], 1), e._v(" "), a("div", {
                    staticClass: "feature"
                }, [a("el-main", [a("div", {
                    staticClass: "dataInfo"
                }, [a("div", {
                    staticClass: "titleDiv"
                }, [a("div", {
                    staticClass: "oDiv",
                    staticStyle: {
                        "max-width": "100%"
                    }
                }, [a("p", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("Estimate your returns")))])])]), e._v(" "), a("div", {
                    staticClass: "row1"
                }, [a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("$BOSS Price")))]), e._v(" "), a("p", {
                    staticClass: "value"
                }, [e._v("$" + e._s(e.price))])])]), e._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("Current APY")))]), e._v(" "), a("p", {
                    staticClass: "value"
                }, [e._v("183,394.2%")])])]), e._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("Your $BOSS Balance")))]), e._v(" "), a("p", {
                    staticClass: "value"
                }, [e._v(e._s(e.BOSSValue) + " BOSS")])])])]), e._v(" "), a("div", {
                    staticClass: "areaInput"
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "iDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", [e._v(e._s(e.$t("$BOSS Amount")))]), e._v(" "), a("div", {
                    staticClass: "inputDiv"
                }, [a("el-input", {
                    ref: "ref1",
                    attrs: {
                        placeholder: "Amount",
                        controls: !1
                    },
                    on: {
                        input: function(t) {
                            return e.handleInput(e.amountNum)
                        }
                    },
                    model: {
                        value: e.amountNum,
                        callback: function(t) {
                            e.amountNum = t
                        },
                        expression: "amountNum"
                    }
                }), e._v(" "), a("button", {
                    on: {
                        click: e.maxAmount
                    }
                }, [e._v(e._s(e.$t("Max")))])], 1)])]), e._v(" "), a("div", {
                    staticClass: "iDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", [e._v(e._s(e.$t("APY (%)")))]), e._v(" "), a("div", {
                    staticClass: "inputDiv"
                }, [a("el-input", {
                    ref: "ref2",
                    attrs: {
                        placeholder: "Amount",
                        controls: !1,
                        disabled: !0
                    },
                    on: {
                        input: function(t) {
                            return e.handleInput2(e.apyNum)
                        }
                    },
                    model: {
                        value: e.apyNum,
                        callback: function(t) {
                            e.apyNum = t
                        },
                        expression: "apyNum"
                    }
                })], 1)])]), e._v(" "), a("div", {
                    staticClass: "iDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", [e._v(e._s(e.$t("$BOSS price at purchase ($)")))]), e._v(" "), a("div", {
                    staticClass: "inputDiv"
                }, [a("el-input", {
                    ref: "ref3",
                    attrs: {
                        placeholder: "Amount",
                        controls: !1
                    },
                    on: {
                        input: function(t) {
                            return e.handleInput3(e.BOSSPrice)
                        }
                    },
                    model: {
                        value: e.BOSSPrice,
                        callback: function(t) {
                            e.BOSSPrice = t
                        },
                        expression: "BOSSPrice"
                    }
                }), e._v(" "), a("button", {
                    on: {
                        click: e.maxAmount3
                    }
                }, [e._v(e._s(e.$t("Current")))])], 1)])]), e._v(" "), a("div", {
                    staticClass: "iDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", [e._v(e._s(e.$t("Future $BOSS market price ($)")))]), e._v(" "), a("div", {
                    staticClass: "inputDiv"
                }, [a("el-input", {
                    ref: "ref4",
                    attrs: {
                        placeholder: "Amount",
                        controls: !1
                    },
                    on: {
                        input: function(t) {
                            return e.handleInput4(e.BOSSPrice2)
                        }
                    },
                    model: {
                        value: e.BOSSPrice2,
                        callback: function(t) {
                            e.BOSSPrice2 = t
                        },
                        expression: "BOSSPrice2"
                    }
                }), e._v(" "), a("button", {
                    on: {
                        click: e.maxAmount4
                    }
                }, [e._v(e._s(e.$t("Current")))])], 1)])])])]), e._v(" "), a("div", {
                    staticClass: "block"
                }, [a("p", [e._v(e._s(e.sliderNum) + " " + e._s(e.$t("days")))]), e._v(" "), a("el-slider", {
                    attrs: {
                        "show-input-controls": !1,
                        "show-tooltip": !1,
                        min: 1,
                        max: 365
                    },
                    on: {
                        input: e.handleSliderNum
                    },
                    model: {
                        value: e.sliderNum,
                        callback: function(t) {
                            e.sliderNum = t
                        },
                        expression: "sliderNum"
                    }
                })], 1), e._v(" "), a("div", {
                    staticClass: "allData"
                }, [a("div", {
                    staticClass: "oDiv"
                }, [a("p", [e._v(e._s(e.$t("Your initial investment")))]), e._v(" "), a("h5", [e._v("$" + e._s(e.investment))])]), e._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("p", [e._v(e._s(e.$t("Current wealth")))]), e._v(" "), a("h5", [e._v("$" + e._s(e.wealth))])]), e._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("p", [e._v(e._s(e.$t("$BOSS rewards estimation")))]), e._v(" "), a("h5", [e._v(e._s(e.BOSSReward) + " BOSS")])]), e._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("p", [e._v(e._s(e.$t("Potential return")))]), e._v(" "), a("h5", [e._v("$" + e._s(e.potential))])])])])])], 1)])
            },
            staticRenderFns: []
        }
          , P = a("VU/8")(j, O, !1, null, null, null);
        t.default = P.exports
    }
});
