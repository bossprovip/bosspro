webpackJsonp([5], {
    "0WO/": function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("fZjL")
          , s = e.n(i)
          , n = e("Xxa5")
          , r = e.n(n)
          , c = e("exGp")
          , l = e.n(c)
          , o = e("bOdI")
          , d = e.n(o)
          , v = e("TT7H")
          , u = e("aGwp")
          , m = e("/4JW")
          , _ = e("PJh5")
          , p = e.n(_)
          , f = (e("2hfY"),
        e("QjMU"))
          , b = e("X2Oc")
          , C = e("rUiQ")
          , h = e("mxH+")
          , w = (e("wbDN"),
        e("WK+C"),
        {
            name: "Dao",
            components: {
                Header: v.a,
                LeftHeader: u.a,
                MobileHeader: m.a,
                moment: p.a
            },
            created: function() {
                var t = this;
                Object(b.b)(function(a) {
                    t.connectedAccount = a || void 0
                }),
                setTimeout(function() {
                    t.init(t.connectedAccount)
                }, 300),
                this.timer = setInterval(function() {
                    t.getReward(t.connectedAccount)
                }, 500)
            },
            data: function() {
                var t;
                return t = {
                    connectedAccount: "",
                    headerActive: "23",
                    partner: "",
                    partnerNum: 0,
                    fpdaoReward: 0
                },
                d()(t, "fpdaoReward", 0),
                d()(t, "teamNum", 0),
                d()(t, "performance", 0),
                d()(t, "rebate", 0),
                d()(t, "tableTotal", 0),
                d()(t, "filter", 0),
                d()(t, "tableData", []),
                d()(t, "listLoading", !1),
                d()(t, "search", {
                    level: "0",
                    page: "1",
                    pageSize: "10"
                }),
                d()(t, "link", ""),
                d()(t, "claimAmount", 0),
                d()(t, "nftAmount", 0),
                d()(t, "nftReward", 0),
                d()(t, "claimReward", 0),
                d()(t, "day", 0),
                d()(t, "month", 0),
                d()(t, "year", 0),
                d()(t, "nftArr", []),
                d()(t, "claimLoading", !1),
                d()(t, "wait", !1),
                d()(t, "dialogType", "wait"),
                d()(t, "timer", null),
                t
            },
            methods: {
                handleConnectWallet: function() {
                    Object(b.a)()
                },
                init: function(t) {
                    var a = this;
                    return l()(r.a.mark(function e() {
                        var i, s;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Object(h.b)(t);
                                case 2:
                                    i = e.sent,
                                    s = Math.round((new Date).getTime() / 1e3),
                                    a.partner = i.isPartner,
                                    a.nftAmount = Number(i.nftMinedAmount),
                                    a.nftReward = 0 === Number(f.c.formatUnits(i.totalDaoRewardAmount, 8)) ? 0 : Object(b.h)(Number(f.c.formatUnits(i.totalDaoRewardAmount, 8)), 2),
                                    a.claimReward = 0 === Number(f.c.formatUnits(i.claimedDaoReward, 8)) ? 0 : Object(b.h)(Number(f.c.formatUnits(i.claimedDaoReward, 8)), 2),
                                    a.year = Object(b.h)(Number(Number(i.totalDaoRewardAmount) / 1e8 * 365 * 24 * 60 * 60 / (s - Number(i.beginRewardTime)) / Number(i.totalPartners)), 2),
                                    a.month = Object(b.h)(Number(Number(i.totalDaoRewardAmount) / 1e8 * 24 * 60 * 60 * 30 / (s - Number(i.beginRewardTime)) / Number(i.totalPartners)), 2),
                                    a.day = Object(b.h)(Number(Number(i.totalDaoRewardAmount) / 1e8 * 24 * 60 * 60 / (s - Number(i.beginRewardTime)) / Number(i.totalPartners)), 2),
                                    a.link = C.c,
                                    Number(f.c.formatUnits(i.canClaimDaoReward)) > 0 && (a.claimAmount = 0 === Number(i.canClaimDaoReward) ? 0 : Object(b.h)(Number(f.c.formatUnits(i.canClaimDaoReward, 8)), 4)),
                                    i.isPartner && 0 === Number(f.c.formatUnits(i.canClaimDaoPayAmount)) && (a.nftArr = i.myTokens);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }, e, a)
                    }))()
                },
                getReward: function(t) {
                    var a = this;
                    return l()(r.a.mark(function e() {
                        var i;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Object(h.b)(t);
                                case 2:
                                    i = e.sent,
                                    Number(f.c.formatUnits(i.canClaimDaoReward)) > 0 && (a.claimAmount = 0 === Number(i.canClaimDaoReward) ? 0 : Object(b.h)(Number(f.c.formatUnits(i.canClaimDaoReward, 8)), 4));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, a)
                    }))()
                },
                handleFilter: function(t) {
                    this.filter = t[s()(t)[0]][0],
                    this.search.page = "1",
                    this.search.level = t[s()(t)[0]][0],
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
                },
                handleClaim: function() {
                    var t = this;
                    this.wait = !0,
                    this.dialogType = "wait",
                    this.claimLoading = !0,
                    Object(h.a)(this.connectedAccount).then(function(a) {
                        t.claimLoading = !1,
                        t.dialogType = "success",
                        t.init(t.connectedAccount)
                    }).catch(function(a) {
                        t.dialogType = "failed",
                        t.claimLoading = !1,
                        t.$message.closeAll(),
                        t.$message.error(a)
                    })
                }
            },
            beforeDestroy: function() {
                clearInterval(this.timer),
                this.timer = null
            }
        })
          , g = {
            render: function() {
                var t = this
                  , a = t.$createElement
                  , i = t._self._c || a;
                return i("div", {
                    staticClass: "Dao"
                }, [i("div", {
                    staticClass: "pc_header"
                }, [i("Header", {
                    attrs: {
                        bgColor: "transparent",
                        active: t.headerActive
                    }
                })], 1), t._v(" "), i("div", {
                    staticClass: "left_header"
                }, [i("Left-Header", {
                    attrs: {
                        active: t.headerActive
                    }
                })], 1), t._v(" "), i("div", {
                    staticClass: "mobile_header"
                }, [i("Mobile-Header", {
                    attrs: {
                        active: t.headerActive
                    }
                })], 1), t._v(" "), i("div", {
                    staticClass: "feature"
                }, [i("el-main", [i("div", {
                    staticClass: "nftDiv"
                }, [i("el-row", [i("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [i("div", {
                    staticClass: "row1"
                }, [i("div", {
                    staticClass: "oDiv"
                }, [i("div", {
                    staticClass: "card"
                }, [i("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Number of medals held")))]), t._v(" "), i("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.nftAmount))])])]), t._v(" "), i("div", {
                    staticClass: "oDiv"
                }, [i("div", {
                    staticClass: "card"
                }, [i("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Medal Dividend")))]), t._v(" "), i("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.nftReward) + " BOSS")])])])]), t._v(" "), i("div", {
                    staticClass: "row1"
                }, [i("div", {
                    staticClass: "oDiv"
                }, [i("div", {
                    staticClass: "card"
                }, [i("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("Received dividends")))]), t._v(" "), i("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.claimReward))])])]), t._v(" "), i("div", {
                    staticClass: "oDiv"
                }, [i("div", {
                    staticClass: "card"
                }, [i("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("One Medal Estimated dividends per day")))]), t._v(" "), i("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.day) + " BOSS")])])])]), t._v(" "), i("div", {
                    staticClass: "row1"
                }, [i("div", {
                    staticClass: "oDiv"
                }, [i("div", {
                    staticClass: "card"
                }, [i("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("One Medal Estimated dividends per Month")))]), t._v(" "), i("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.month) + " BOSS")])])]), t._v(" "), i("div", {
                    staticClass: "oDiv"
                }, [i("div", {
                    staticClass: "card"
                }, [i("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("One Medal Estimated dividends per year")))]), t._v(" "), i("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.year) + " BOSS")])])])])])], 1), t._v(" "), i("div", {
                    staticClass: "claimDiv"
                }, [i("p", [t._v(t._s(t.$t("Dividends you can receive")) + ": " + t._s(t.claimAmount))]), t._v(" "), i("el-button", {
                    attrs: {
                        disabled: 0 === Number(t.claimAmount),
                        loading: t.claimLoading
                    },
                    on: {
                        click: t.handleClaim
                    }
                }, [t._v(t._s(t.$t("Claim")))])], 1), t._v(" "), i("div", {
                    staticClass: "allNftDiv"
                }, [i("h3", [i("span", [t._v(t._s(t.$t("My Mdeal")))]), t._v(" "), i("span", {
                    staticClass: "address"
                }, [t._v(t._s(t.$t("NFT Contract Address")) + ": " + t._s(t.link))]), t._v(" "), i("i", {
                    directives: [{
                        name: "clipboard",
                        rawName: "v-clipboard:copy",
                        value: t.link,
                        expression: "link",
                        arg: "copy"
                    }, {
                        name: "clipboard",
                        rawName: "v-clipboard:success",
                        value: t.onCopy,
                        expression: "onCopy",
                        arg: "success"
                    }, {
                        name: "clipboard",
                        rawName: "v-clipboard:error",
                        value: t.onError,
                        expression: "onError",
                        arg: "error"
                    }],
                    staticClass: "el-icon-document-copy"
                })]), t._v(" "), i("div", {
                    staticClass: "imgDiv"
                }, t._l(t.nftArr, function(a, s) {
                    return i("div", {
                        key: s,
                        staticClass: "iDiv"
                    }, [i("img", {
                        attrs: {
                            src: e("Cjti"),
                            alt: "img"
                        }
                    }), t._v(" "), i("p", [t._v("#" + t._s(a))])])
                }), 0)])], 1)])], 1), t._v(" "), i("el-dialog", {
                    staticClass: "wait",
                    attrs: {
                        "show-close": !1,
                        "close-on-click-modal": !1,
                        visible: t.wait,
                        width: "600px",
                        center: ""
                    },
                    on: {
                        "update:visible": function(a) {
                            t.wait = a
                        }
                    }
                }, ["wait" === t.dialogType ? i("div", [i("i", {
                    staticClass: "el-icon-loading"
                }), t._v(" "), i("p", [t._v(t._s(t.$t("Waiting...")))]), t._v(" "), i("span", [t._v(t._s(t.$t("Please Confirm in Your Wallet")))])]) : t._e(), t._v(" "), "success" === t.dialogType ? i("div", [i("p", [t._v(t._s(t.$t("Success! You have swapped the")) + " " + t._s(t.buySuccess) + " BOSS")]), t._v(" "), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(a) {
                            t.wait = !1
                        }
                    }
                }, [t._v(t._s(t.$t("Close")))])], 1) : t._e(), t._v(" "), "claimSuccess" === t.dialogType ? i("div", [i("i", {
                    staticClass: "el-icon-circle-check",
                    staticStyle: {
                        color: "#00F195"
                    }
                }), t._v(" "), i("p", [t._v(t._s(t.$t("Success!")))]), t._v(" "), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(a) {
                            t.wait = !1
                        }
                    }
                }, [t._v(t._s(t.$t("Close")))])], 1) : t._e(), t._v(" "), "failed" === t.dialogType ? i("div", [i("i", {
                    staticClass: "el-icon-error",
                    staticStyle: {
                        color: "#e76060"
                    }
                }), t._v(" "), i("p", {
                    staticClass: "fail"
                }, [t._v(t._s(t.$t("Failed")))]), t._v(" "), i("el-button", {
                    on: {
                        click: function(a) {
                            t.wait = !1
                        }
                    }
                }, [t._v(t._s(t.$t("Close")))])], 1) : t._e(), t._v(" "), "noAmount" === t.dialogType ? i("div", [i("i", {
                    staticClass: "el-icon-error",
                    staticStyle: {
                        color: "#e76060"
                    }
                }), t._v(" "), i("p", {
                    staticClass: "fail"
                }, [t._v(t._s(t.$t("USDT balance no enough")) + " " + t._s(t.dialogNum))]), t._v(" "), i("el-button", {
                    on: {
                        click: function(a) {
                            t.wait = !1
                        }
                    }
                }, [t._v(t._s(t.$t("Close")))])], 1) : t._e()])], 1)
            },
            staticRenderFns: []
        }
          , y = e("VU/8")(w, g, !1, null, null, null);
        a.default = y.exports
    },
    Cjti: function(t, a, e) {
        t.exports = e.p + "static/img/g1.82569ff.png"
    }
});
