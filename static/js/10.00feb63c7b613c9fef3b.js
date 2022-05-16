webpackJsonp([10], {
    "9nXX": function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = a("fZjL")
          , i = a.n(s)
          , n = a("d7EF")
          , r = a.n(n)
          , c = a("//Fk")
          , l = a.n(c)
          , o = a("bOdI")
          , v = a.n(o)
          , d = a("Xxa5")
          , u = a.n(d)
          , f = a("exGp")
          , h = a.n(f)
          , m = a("TT7H")
          , p = a("aGwp")
          , C = a("/4JW")
          , _ = a("PJh5")
          , b = a.n(_)
          , g = (a("2hfY"),
        a("QjMU"))
          , D = a("X2Oc")
          , A = a("Rbbk")
          , $ = (a("rUiQ"),
        a("mxH+"),
        a("wbDN"),
        a("WK+C"),
        {
            name: "Dao",
            components: {
                Header: m.a,
                LeftHeader: p.a,
                MobileHeader: C.a,
                moment: b.a
            },
            created: function() {
                var t = this;
                Object(D.b)(function(e) {
                    t.connectedAccount = e || void 0
                }),
                setTimeout(function() {
                    t.init(t.connectedAccount)
                }, 200),
                this.timer = setInterval(h()(u.a.mark(function e() {
                    return u.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.init(t.connectedAccount);
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, t)
                })), 500)
            },
            data: function() {
                var t;
                return t = {
                    connectedAccount: "",
                    headerActive: "7",
                    partner: "",
                    partnerNum: 0,
                    fpdaoReward: 0
                },
                v()(t, "fpdaoReward", 0),
                v()(t, "teamNum", 0),
                v()(t, "performance", 0),
                v()(t, "rebate", 0),
                v()(t, "tableTotal", 0),
                v()(t, "filter", 0),
                v()(t, "tableData", []),
                v()(t, "listLoading", !1),
                v()(t, "search", {
                    level: "0",
                    page: "1",
                    pageSize: "10"
                }),
                v()(t, "link", ""),
                v()(t, "claimAmount", 0),
                v()(t, "nftAmount", 0),
                v()(t, "nftReward", 0),
                v()(t, "claimReward", 0),
                v()(t, "day", 0),
                v()(t, "month", 0),
                v()(t, "year", 0),
                v()(t, "nftArr", []),
                v()(t, "timer", null),
                v()(t, "treasuryReceiverUSDT", 0),
                t
            },
            methods: {
                handleConnectWallet: function() {
                    Object(D.a)()
                },
                init: function(t) {
                    var e = this;
                    return h()(u.a.mark(function t() {
                        return u.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    l.a.all([Object(A.m)()]).then(function(t) {
                                        var a = r()(t, 1)[0];
                                        e.treasuryReceiverUSDT = 0 === Number(g.c.formatUnits(a)) ? 0 : Object(D.h)(Number(g.c.formatUnits(a)), 2)
                                    }).catch(function(t) {
                                        e.$message.closeAll(),
                                        e.$message.error(t)
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                handleFilter: function(t) {
                    this.filter = t[i()(t)[0]][0],
                    this.search.page = "1",
                    this.search.level = t[i()(t)[0]][0],
                    this.getTableData()
                },
                handleCurrentChange: function(t) {
                    this.search.level = String(this.filter),
                    this.search.page = String(t),
                    this.getTableData()
                },
                onCopy: function() {
                    this.$message.success(i18n.t("Copy Success!"))
                },
                onError: function() {
                    this.$message.error(i18n.t("Copy failed!"))
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
                  , e = t.$createElement
                  , a = t._self._c || e;
                return a("div", {
                    staticClass: "Dao"
                }, [a("div", {
                    staticClass: "pc_header"
                }, [a("Header", {
                    attrs: {
                        bgColor: "transparent",
                        active: t.headerActive
                    }
                })], 1), t._v(" "), a("div", {
                    staticClass: "left_header"
                }, [a("Left-Header", {
                    attrs: {
                        active: t.headerActive
                    }
                })], 1), t._v(" "), a("div", {
                    staticClass: "mobile_header"
                }, [a("Mobile-Header", {
                    attrs: {
                        active: t.headerActive
                    }
                })], 1), t._v(" "), a("div", {
                    staticClass: "feature"
                }, [a("el-main", [a("div", {
                    staticClass: "nftDiv"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [a("div", {
                    staticClass: "row1"
                }, [a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Invested Amount")))]), t._v(" "), a("p", {
                    staticClass: "value"
                }, [t._v("$0")])])]), t._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Remaining Amount")))]), t._v(" "), a("p", {
                    staticClass: "value"
                }, [t._v("$" + t._s(t.treasuryReceiverUSDT))])])])]), t._v(" "), a("div", {
                    staticClass: "row1"
                }, [a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Total Market Value")))]), t._v(" "), a("p", {
                    staticClass: "value"
                }, [t._v("$0")])])]), t._v(" "), a("div", {
                    staticClass: "oDiv"
                }, [a("div", {
                    staticClass: "card"
                }, [a("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Profit Amount")))]), t._v(" "), a("p", {
                    staticClass: "value"
                }, [t._v("$0")])])])])])], 1), t._v(" "), a("div", {
                    staticClass: "claimDiv"
                }, [a("p", [t._v(t._s(t.$t("Investment List")) + ": " + t._s(t.$t("Coming Soon")))])])], 1)])], 1)])
            },
            staticRenderFns: []
        }
          , y = a("VU/8")($, w, !1, null, null, null);
        e.default = y.exports
    }
});
