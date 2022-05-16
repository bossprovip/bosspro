webpackJsonp([9], {
    YOuC: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("fZjL")
          , r = a.n(n)
          , s = a("Xxa5")
          , i = a.n(s)
          , l = a("exGp")
          , c = a.n(l)
          , o = a("bOdI")
          , u = a.n(o)
          , f = a("TT7H")
          , d = a("aGwp")
          , v = a("/4JW")
          , p = a("PJh5")
          , h = a.n(p)
          , m = (a("2hfY"),
        a("QjMU"))
          , b = a("X2Oc")
          , _ = a("fahL")
          , g = a("f4EN")
          , w = (a("rUiQ"),
        a("mxH+"))
          , C = (a("wbDN"),
        a("WK+C"),
        {
            name: "Dao",
            components: {
                Header: f.a,
                LeftHeader: d.a,
                MobileHeader: v.a,
                moment: h.a
            },
            created: function() {
                var e = this;
                Object(b.b)(function(t) {
                    e.connectedAccount = t || void 0
                }),
                setTimeout(function() {
                    e.init(e.connectedAccount)
                }, 300)
            },
            data: function() {
                var e;
                return e = {
                    connectedAccount: "",
                    headerActive: "6",
                    partner: "",
                    partnerNum: 0,
                    fpdaoReward: 0
                },
                u()(e, "fpdaoReward", 0),
                u()(e, "teamNum", 0),
                u()(e, "performance", 0),
                u()(e, "rebate", 0),
                u()(e, "tableTotal", 0),
                u()(e, "filter", 0),
                u()(e, "tableData", []),
                u()(e, "listLoading", !1),
                u()(e, "search", {
                    level: "0",
                    page: "1",
                    pageSize: "10"
                }),
                u()(e, "link", ""),
                u()(e, "claimAmount", 0),
                u()(e, "nftAmount", 0),
                u()(e, "nftReward", 0),
                u()(e, "claimReward", 0),
                u()(e, "day", 0),
                u()(e, "month", 0),
                u()(e, "year", 0),
                u()(e, "nftArr", []),
                u()(e, "wait", !1),
                u()(e, "dialogType", "failed"),
                u()(e, "freeValue", 0),
                e
            },
            methods: {
                handleConnectWallet: function() {
                    Object(b.a)()
                },
                init: function(e) {
                    var t = this;
                    return c()(i.a.mark(function a() {
                        var n, r, s, l;
                        return i.a.wrap(function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    Object(w.b)(e);
                                case 2:
                                    return n = a.sent,
                                    t.partner = n.isPartner,
                                    a.next = 6,
                                    Object(_.a)(e);
                                case 6:
                                    return r = a.sent,
                                    t.freeValue = Number(m.c.formatUnits(r, 8)),
                                    a.next = 10,
                                    Object(g.c)(e);
                                case 10:
                                    s = a.sent,
                                    (s._isClaimed ? t.freeValue : t.freeValue + Number(m.c.formatUnits(s._rewardAmount, 8))) < 1e3 && (t.wait = !0),
                                    l = "https:///api.freedomprot.com/api",
                                    t.$axios.post(l + "/getTeamStatistics", {
                                        address: e
                                    }).then(function(e) {
                                        var a = e.data.Data;
                                        t.teamNum = Number(a.totalUsers),
                                        t.performance = 0 === Number(a.totalBuyAmount) ? 0 : Object(b.h)(Number(a.totalBuyAmount) / .85, 2),
                                        t.rebate = 0 === Number(a.totalRewardAmount) ? 0 : Object(b.h)(Number(a.totalRewardAmount), 2)
                                    }),
                                    t.getTableData(e);
                                case 16:
                                case "end":
                                    return a.stop()
                                }
                        }, a, t)
                    }))()
                },
                getTableData: function(e) {
                    var t = this
                      , a = {
                        address: e,
                        level: this.search.level,
                        page: this.search.page,
                        pageSize: this.search.pageSize
                    };
                    this.listLoading = !0;
                    this.$axios.post("https:///api.freedomprot.com/api/getTeamDetail", a).then(function(e) {
                        t.listLoading = !1,
                        t.tableTotal = e.data.Data.totalNum,
                        t.tableData = e.data.Data.list.map(function(e) {
                            return {
                                id: e.id,
                                level: "Level " + e.level,
                                address: e.buyAddress.slice(0, 6) + "..." + e.buyAddress.slice(e.buyAddress.length - 4, e.buyAddress.length),
                                buy: Object(b.h)(Number(e.buyAmount) / .85, 8),
                                rebate: Object(b.h)(Number(e.rewardAmount), 8)
                            }
                        })
                    })
                },
                handleFilter: function(e) {
                    this.filter = e[r()(e)[0]][0],
                    this.search.page = "1",
                    this.search.level = e[r()(e)[0]][0],
                    this.getTableData(this.connectedAccount)
                },
                handleCurrentChange: function(e) {
                    this.search.level = String(this.filter),
                    this.search.page = String(e),
                    this.getTableData(this.connectedAccount)
                },
                onCopy: function() {
                    this.$message.success(i18n.t("Copy Success!"))
                },
                onError: function() {
                    this.$message.error(i18n.t("Copy failed!"))
                }
            }
        })
          , x = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "Dao"
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
                    staticClass: "row1"
                }, [a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "value"
                }, [e._v(e._s(e.teamNum))]), e._v(" "), a("p", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("Total team size")))])])]), e._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "value"
                }, [e._v(e._s(e.performance))]), e._v(" "), a("p", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("Total Team Buy")))])])]), e._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "value"
                }, [e._v(e._s(e.rebate))]), e._v(" "), a("p", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("Total Team Rebates")))])])])]), e._v(" "), a("div", {
                    staticClass: "allData"
                }, [a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.listLoading,
                        expression: "listLoading"
                    }],
                    ref: "filterTable",
                    attrs: {
                        data: e.tableData,
                        fit: "",
                        "row-key": "id",
                        "tree-props": {
                            children: "children",
                            hasChildren: "hasChildren"
                        }
                    },
                    on: {
                        "filter-change": e.handleFilter
                    }
                }, [a("el-table-column", {
                    attrs: {
                        prop: "level",
                        label: e.$t("Level"),
                        "min-width": "220",
                        filters: [{
                            text: "All",
                            value: "0"
                        }, {
                            text: "level1",
                            value: "1"
                        }, {
                            text: "level2",
                            value: "2"
                        }, {
                            text: "level3",
                            value: "3"
                        }, {
                            text: "level4",
                            value: "4"
                        }, {
                            text: "level5",
                            value: "5"
                        }, {
                            text: "level6",
                            value: "6"
                        }, {
                            text: "level7",
                            value: "7"
                        }, {
                            text: "level8",
                            value: "8"
                        }, {
                            text: "level9",
                            value: "9"
                        }, {
                            text: "level10",
                            value: "10"
                        }],
                        "filter-multiple": !1,
                        "filter-placement": "bottom-end"
                    }
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "address",
                        label: e.$t("Address"),
                        "min-width": "220"
                    }
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "buy",
                        label: e.$t("Buys"),
                        "min-width": "220"
                    }
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "rebate",
                        label: e.$t("Rewards"),
                        "min-width": "220"
                    }
                })], 1), e._v(" "), a("el-pagination", {
                    attrs: {
                        "hide-on-single-page": e.tableTotal < 11,
                        background: "",
                        small: "",
                        layout: "prev, pager, next",
                        "page-size": 10,
                        total: e.tableTotal
                    },
                    on: {
                        "current-change": e.handleCurrentChange
                    }
                })], 1)])])], 1), e._v(" "), a("el-dialog", {
                    staticClass: "waitDao",
                    attrs: {
                        "show-close": !0,
                        "close-on-click-modal": !1,
                        visible: e.wait,
                        width: "600px",
                        center: ""
                    },
                    on: {
                        "update:visible": function(t) {
                            e.wait = t
                        }
                    }
                }, ["wait" === e.dialogType ? a("div", [a("i", {
                    staticClass: "el-icon-loading"
                }), e._v(" "), a("p", [e._v(e._s(e.$t("Waiting...")))]), e._v(" "), a("span", [e._v(e._s(e.$t("Please Confirm in Your Wallet")))])]) : e._e(), e._v(" "), "success" === e.dialogType ? a("div", [a("p", [e._v(e._s(e.$t("Success! You have swapped the")) + " " + e._s(e.buySuccess) + " FREE")]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e(), e._v(" "), "claimSuccess" === e.dialogType ? a("div", [a("i", {
                    staticClass: "el-icon-circle-check",
                    staticStyle: {
                        color: "#00F195"
                    }
                }), e._v(" "), a("p", [e._v(e._s(e.$t("Success!")))]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e(), e._v(" "), "failed" === e.dialogType ? a("div", [a("p", {
                    staticClass: "fail"
                }, [e._v(e._s(e.$t("The wallet balance is less than 1000 $FREE")))]), e._v(" "), a("a", {
                    staticClass: "btnA",
                    attrs: {
                        href: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x880BCe9321c79cAc1D290De6d31DDE722C606165",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("Swap")))])]) : e._e(), e._v(" "), "noAmount" === e.dialogType ? a("div", [a("i", {
                    staticClass: "el-icon-error",
                    staticStyle: {
                        color: "#e76060"
                    }
                }), e._v(" "), a("p", {
                    staticClass: "fail"
                }, [e._v(e._s(e.$t("USDT balance no enough")) + " " + e._s(e.dialogNum))]), e._v(" "), a("el-button", {
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e()])], 1)
            },
            staticRenderFns: []
        }
          , y = a("VU/8")(C, x, !1, null, null, null);
        t.default = y.exports
    },
    f4EN: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return _
        }),
        a.d(t, "d", function() {
            return g
        }),
        a.d(t, "c", function() {
            return w
        }),
        a.d(t, "e", function() {
            return C
        }),
        a.d(t, "b", function() {
            return x
        }),
        a.d(t, "f", function() {
            return y
        });
        var n, r, s, i, l, c, o = a("Xxa5"), u = a.n(o), f = a("exGp"), d = a.n(f), v = a("QjMU"), p = a("+6E2"), h = a("rUiQ"), m = a("X2Oc"), b = this, _ = (n = d()(u.a.mark(function e(t) {
            var a, n;
            return u.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        m.e;
                    case 2:
                        return a = e.sent,
                        n = new v.a(h.f,p.a,a.getSigner()),
                        e.abrupt("return", n.approve(h.b, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").then(function(e) {
                            return e.wait()
                        }));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, b)
        })),
        function(e) {
            return n.apply(this, arguments)
        }
        ), g = (r = d()(u.a.mark(function e() {
            var t, a, n;
            return u.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        m.e;
                    case 2:
                        return t = e.sent,
                        e.next = 5,
                        Object(m.d)();
                    case 5:
                        return a = e.sent,
                        n = new v.a(h.f,p.a,t),
                        e.abrupt("return", n.allowance(a, h.b).then(function(e) {
                            return e.gt("0xffffffffffffff")
                        }));
                    case 8:
                    case "end":
                        return e.stop()
                    }
            }, e, b)
        })),
        function() {
            return r.apply(this, arguments)
        }
        ), w = (s = d()(u.a.mark(function e(t) {
            var a, n;
            return u.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        m.e;
                    case 2:
                        return a = e.sent,
                        n = new v.a(h.b,p.d,a),
                        e.abrupt("return", n.getUserIdoInfo(t));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, b)
        })),
        function(e) {
            return s.apply(this, arguments)
        }
        ), C = (i = d()(u.a.mark(function e(t) {
            var a, n, r, s;
            return u.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        m.e;
                    case 2:
                        return a = e.sent,
                        n = new v.a(h.b,p.d,a.getSigner()),
                        r = v.c.parseUnits(String(t), 18),
                        e.next = 7,
                        n.estimateGas.pay(r);
                    case 7:
                        return s = e.sent,
                        e.abrupt("return", n.pay(r, {
                            gasLimit: s.mul("2")
                        }).then(function(e) {
                            return e.wait()
                        }));
                    case 9:
                    case "end":
                        return e.stop()
                    }
            }, e, b)
        })),
        function(e) {
            return i.apply(this, arguments)
        }
        ), x = (l = d()(u.a.mark(function e() {
            var t, a, n;
            return u.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        m.e;
                    case 2:
                        return t = e.sent,
                        a = new v.a(h.b,p.d,t.getSigner()),
                        e.next = 6,
                        a.estimateGas.claimIdoAmount();
                    case 6:
                        return n = e.sent,
                        e.abrupt("return", a.claimIdoAmount({
                            gasLimit: n.mul("2")
                        }).then(function(e) {
                            return e.wait()
                        }));
                    case 8:
                    case "end":
                        return e.stop()
                    }
            }, e, b)
        })),
        function() {
            return l.apply(this, arguments)
        }
        ), y = (c = d()(u.a.mark(function e(t) {
            var a, n;
            return u.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        m.e;
                    case 2:
                        return a = e.sent,
                        n = new v.a(h.f,p.b,a),
                        e.abrupt("return", n.balanceOf(t));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, b)
        })),
        function(e) {
            return c.apply(this, arguments)
        }
        )
    }
});
