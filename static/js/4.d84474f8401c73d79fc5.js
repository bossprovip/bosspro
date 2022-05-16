webpackJsonp([4], {
    AaqE: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("d7EF")
          , r = n.n(a)
          , i = n("//Fk")
          , c = n.n(i)
          , s = n("Xxa5")
          , o = n.n(s)
          , u = n("exGp")
          , f = n.n(u)
          , l = n("QjMU")
          , p = n("2hfY")
          , d = n("TT7H")
          , m = n("aGwp")
          , v = n("/4JW")
          , b = n("PJh5")
          , h = n.n(b)
          , w = n("Udoy")
          , _ = n.n(w)
          , g = n("f4EN")
          , y = n("nl2L")
          , x = n("X2Oc")
          , D = n("wbDN")
          , A = n.n(D)
          , T = (n("T/pA"),
        {
            name: "IDO",
            components: {
                FlipCountdown: _.a,
                HomeHeader: d.a,
                MobileHeader: v.a,
                LeftHeader: m.a
            },
            data: function() {
                return {
                    headerActive: "21",
                    swapDisabled: !0,
                    connectedAccount: "",
                    idoAmount: 0,
                    idoPeople: 0,
                    userInfo: "",
                    round: "",
                    endTime: 0,
                    item: {
                        use: 0
                    },
                    price: "100",
                    dateData: "",
                    dateData2: "",
                    time: "",
                    time2: "",
                    num: void 0,
                    swapNum: "",
                    avaible: "0.0",
                    release: "0.0",
                    claimDisabled: !0,
                    haveClick: !1,
                    wait: !1,
                    dialogType: "wait",
                    buySuccess: "",
                    approve: !1,
                    showTime: !0,
                    canBuy: 0,
                    expected: 0,
                    partner: !1,
                    dialogNum: 0,
                    approveLoading: !1,
                    Buy100Done: !1,
                    Buy200Done: !1,
                    swapLoading: !1,
                    claimLoading: !1,
                    timer: null,
                    BOSSBalance: 0
                }
            },
            mounted: function() {
                var e = this;
                Object(x.b)(function(t) {
                    e.connectedAccount = t || void 0
                }),
                setTimeout(f()(o.a.mark(function t() {
                    var n;
                    return o.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return e.init(e.connectedAccount),
                                t.next = 3,
                                Object(g.c)(e.connectedAccount);
                            case 3:
                                n = t.sent,
                                e.dateData = h()(Object(p.a)(Number(n._startTime), !0, "").replace(/-/g, "/")).format("MM/DD/YYYY HH:mm:ss"),
                                e.dateData2 = h()(Object(p.a)(Number(n._endTime), !0, "").replace(/-/g, "/")).format("MM/DD/YYYY HH:mm:ss");
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                })), 200),
                this.timer = setInterval(function() {
                    e.getPrice(e.connectedAccount)
                }, 500)
            },
            methods: {
                init: function(e) {
                    var t = this;
                    c.a.all([Object(g.c)(e)]).then(function(e) {
                        var n = r()(e, 1)[0];
                        Object(g.d)().then(function(e) {
                            t.approve = e
                        }).catch(function(e) {
                            t.$message.closeAll(),
                            t.$message.error(e)
                        }),
                        t.idoPeople = 0 === Number(n._totalUsers) ? 0 : Number(n._totalUsers),
                        t.idoAmount = Number(l.c.formatUnits(n._totalPayAmount)) + " USDT",
                        t.time = h()(Object(p.a)(Number(n._startTime), !0, "").replace(/-/g, "/")).utc().format("MM/DD/YYYY HH:mm:ss") + " UTC",
                        t.time2 = h()(Object(p.a)(Number(n._endTime), !0, "").replace(/-/g, "/")).utc().format("MM/DD/YYYY HH:mm:ss") + " UTC",
                        t.endTime = Number(n._endTime),
                        Number(n._startTime) < Math.round(new Date / 1e3) ? (t.swapDisabled = !1,
                        t.showTime = !1) : (t.swapDisabled = !0,
                        t.showTime = !0),
                        t.canBuy = Number(l.c.formatUnits(n._canPayAmount)),
                        t.expected = Object(x.g)(String(100 * t.canBuy)),
                        t.release = n._isClaimed ? 0 : l.c.formatUnits(n._rewardAmount, 8),
                        t.avaible = l.c.formatUnits(n._canClaimedRewardAmount, 8),
                        t.partner = n.isPartner,
                        t.partner ? 300 === Number(l.c.formatUnits(n._canPayAmount)) ? (t.Buy100Done = !1,
                        t.Buy200Done = !1) : 200 === Number(l.c.formatUnits(n._canPayAmount)) ? (t.Buy100Done = !0,
                        t.Buy200Done = !1) : 100 === Number(l.c.formatUnits(n._canPayAmount)) ? (t.Buy100Done = !1,
                        t.Buy200Done = !0) : 0 === Number(l.c.formatUnits(n._canPayAmount)) && (t.Buy100Done = !0,
                        t.Buy200Done = !0) : (t.Buy100Done = 100 !== Number(l.c.formatUnits(n._canPayAmount)),
                        t.Buy200Done = !0),
                        t.avaible > 0 && (t.claimDisabled = !1)
                    })
                },
                getPrice: function(e) {
                    var t = this;
                    this.approve || Object(g.d)().then(function(e) {
                        t.approve = e
                    }).catch(function(e) {
                        t.$message.closeAll(),
                        t.$message.error(e)
                    });
					
                    c.a.all([Object(g.c)(e), Object(y.d)(e)]).then(function(e) {
                        var n = r()(e, 2)
                          , a = n[0]
                          , i = n[1];
                        Number(a._startTime) < Math.round(new Date / 1e3) ? t.swapDisabled = !1 : t.swapDisabled = !0,
                        t.BOSSBalance = Number(i),
                        t.idoPeople = 0 === Number(a._totalUsers) ? 0 : Number(a._totalUsers),
                        t.idoAmount = Number(l.c.formatUnits(a._totalPayAmount)) + " USDT"
                    });


					hdxCI.getData(defaultaccount).call().then
                    (
                    
                    function (res){
                    
                    console.log('defaultaccount  '+defaultaccount);
					console.log('getData  '+res);
					
					 
					//可领取余额 
					t.avaible = res[8];
					
					var claimTime = 1652423102;
					
					Number(claimTime) < Math.round(new Date / 1e3)  && (t.claimDisabled = 0);
					
					
 

                    
                    });	

					
					
					
                },
                handleConnectWallet: function() {
                    Object(x.a)()
                },
                handleInput: function() {
                    "" !== parseFloat(this.num) && 0 !== parseFloat(this.num) && void 0 !== parseFloat(this.num) && !isNaN(this.num) && parseFloat(this.num) > 0 ? (this.swapNum = Object(x.g)(new A.a(this.num).mul(this.price).toString()) + " BOSS",
                    this.haveClick = !0) : (this.swapNum = "",
                    this.haveClick = !1)
                },
                handleApprove: function() {
                    var e = this;
                    this.wait = !0,
                    this.dialogType = "wait",
                    this.approveLoading = !0,
                    Object(g.a)().then(function(t) {
                        e.approveLoading = !1,
                        e.wait = !1,
                        e.approve = !0
                    }).catch(function(t) {
                        e.approveLoading = !1,
                        e.dialogType = "failed",
                        e.$message.closeAll(),
                        e.$message.error(t)
                    })
                },
                handleSwap: function(e) {
                    var t = this;
                    return f()(o.a.mark(function n() {
                        var a, r;
                        return o.a.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return t.wait = !0,
                                    t.dialogType = "wait",
                                    t.swapLoading = !0,
                                    n.next = 5,
                                    Object(g.f)(t.connectedAccount);
                                case 5:
                                    a = n.sent,
                                    r = Number(l.c.formatUnits(a)),
                                    0 === Number(t.BOSSBalance) ? (t.dialogType = "BOSSNoAmount",
                                    t.swapLoading = !1) : e > r ? (t.dialogType = "noAmount",
                                    t.dialogNum = Number(e),
                                    t.swapLoading = !1) : Object(g.e)(e).then(function(n) {
                                        t.swapLoading = !1,
                                        t.dialogType = "success",
                                        t.buySuccess = e * t.price,
                                        t.swapNum = "",
                                        t.num = void 0,
                                        t.init(t.connectedAccount)
                                    }).catch(function(e) {
                                        t.swapLoading = !1,
                                        t.dialogType = "failed",
                                        t.swapNum = "",
                                        t.num = void 0
                                    });
                                case 8:
                                case "end":
                                    return n.stop()
                                }
                        }, n, t)
                    }))()
                },
                goAnchor: function(e, t) {
                    document.getElementById(e).scrollIntoView({
                        block: "start",
                        behavior: "smooth"
                    })
                },
                handleClaim: function() {
                    var e = this;
					console.log('handleClaim');
                    this.wait = !0,
                    this.dialogType = "wait",
                    this.claimLoading = !0;
                    // Object(g.b)().then(function(t) {
                        // e.claimLoading = !1,
                        // e.dialogType = "claimSuccess",
                        // e.claimDisabled = !0,
                        // e.init(e.connectedAccount),
						// console.log('handleClaim then');
                    // }).catch(function(t) {
                        // console.log(t),
                        // e.claimLoading = !1,
                        // e.dialogType = "failed",
                        // e.$message.closeAll(),
                        // e.$message.error(t)
                    // })


					try {
						
						doClaim();
                        e.claimLoading = !1,
                        e.dialogType = "claimSuccess",
                        e.claimDisabled = !0;					
						
					
					} catch(error) {
						
                        e.claimLoading = !1,
                        e.dialogType = "failed",
                        e.$message.closeAll(),
                        e.$message.error(t)						
						
					}	
					
					
					
					
                }
            },
            beforeDestroy: function() {
                clearInterval(this.timer),
                this.timer = null
            }
        })
          , N = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("div", {
                    staticClass: "IDO"
                }, [n("div", {
                    staticClass: "pc_header"
                }, [n("Home-Header", {
                    attrs: {
                        active: e.headerActive
                    }
                })], 1), e._v(" "), n("div", {
                    staticClass: "left_header"
                }, [n("Left-Header", {
                    attrs: {
                        active: e.headerActive
                    }
                })], 1), e._v(" "), n("div", {
                    staticClass: "mobile_header"
                }, [n("Mobile-Header")], 1), e._v(" "), n("div", {
                    staticClass: "feature"
                }, [n("el-main", [n("br"), e._v(" "), n("br"), e._v(" "), n("br"), e._v(" "), n("br"), e._v(" "), n("br"), e._v(" "), n("el-row", {
                    staticClass: "account"
                }, [n("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [n("h1", {
                    staticClass: "title",
                    on: {
                        click: function(t) {
                            return e.goAnchor("myAccount")
                        }
                    }
                }, [e._v(e._s(e.$t("My Account")))])]), e._v(" "), n("el-col", {
                    staticClass: "text",
                    attrs: {
                        span: 24
                    }
                }, [n("div", [n("p", [e._v(e._s(e.$t("$BOSS available")) + ": " + e._s(e.avaible))]), e._v(" "), n("el-button", {
                    attrs: {
                        type: "primary",
                        disabled: e.claimDisabled,
                        loading: e.claimLoading
                    },
                    on: {
                        click: e.handleClaim
                    }
                }, [e._v(e._s(e.$t("Claim")))])], 1)]), e._v(" "), n("el-col", {
                    staticClass: "text",
                    attrs: {
                        span: 24
                    }
                }, [n("p", [e._v(e._s(e.$t("$BOSS waiting for release")) + ": " + e._s(e.release))])])], 1)], 1)], 1), e._v(" "), n("div", {
                    staticClass: "footer"
                }, [n("Footer")], 1), e._v(" "), n("el-dialog", {
                    staticClass: "wait",
                    attrs: {
                        "show-close": !1,
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
                }, ["wait" === e.dialogType ? n("div", [n("i", {
                    staticClass: "el-icon-loading"
                }), e._v(" "), n("p", [e._v(e._s(e.$t("Waiting...")))]), e._v(" "), n("span", [e._v(e._s(e.$t("Please Confirm in Your Wallet")))])]) : e._e(), e._v(" "), "success" === e.dialogType ? n("div", [n("p", [e._v(e._s(e.$t("Success! You have swapped the")) + " " + e._s(e.buySuccess) + " BOSS")]), e._v(" "), n("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e(), e._v(" "), "claimSuccess" === e.dialogType ? n("div", [n("i", {
                    staticClass: "el-icon-circle-check",
                    staticStyle: {
                        color: "#00F195"
                    }
                }), e._v(" "), n("p", [e._v(e._s(e.$t("Success!")))]), e._v(" "), n("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e(), e._v(" "), "failed" === e.dialogType ? n("div", [n("i", {
                    staticClass: "el-icon-error",
                    staticStyle: {
                        color: "#e76060"
                    }
                }), e._v(" "), n("p", {
                    staticClass: "fail"
                }, [e._v(e._s(e.$t("Failed")))]), e._v(" "), n("el-button", {
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e(), e._v(" "), "noAmount" === e.dialogType ? n("div", [n("i", {
                    staticClass: "el-icon-error",
                    staticStyle: {
                        color: "#e76060"
                    }
                }), e._v(" "), n("p", {
                    staticClass: "fail"
                }, [e._v(e._s(e.$t("USDT balance no enough")) + " " + e._s(e.dialogNum))]), e._v(" "), n("el-button", {
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e(), e._v(" "), "BOSSNoAmount" === e.dialogType ? n("div", [n("i", {
                    staticClass: "el-icon-error",
                    staticStyle: {
                        color: "#e76060"
                    }
                }), e._v(" "), n("p", {
                    staticClass: "fail"
                }, [e._v(e._s(e.$t("There is no $BOSS001 in your wallet, please contact your FP-DAO organization.")))]), e._v(" "), n("el-button", {
                    on: {
                        click: function(t) {
                            e.wait = !1
                        }
                    }
                }, [e._v(e._s(e.$t("Close")))])], 1) : e._e()])], 1)
            },
            staticRenderFns: []
        }
          , C = n("VU/8")(T, N, !1, null, null, null);
        t.default = C.exports
    },
    "T/pA": function(e, t) {},
    f4EN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return w
        }),
        n.d(t, "d", function() {
            return _
        }),
        n.d(t, "c", function() {
            return g
        }),
        n.d(t, "e", function() {
            return y
        }),
        n.d(t, "b", function() {
            return x
        }),
        n.d(t, "f", function() {
            return D
        });
        var a, r, i, c, s, o, u = n("Xxa5"), f = n.n(u), l = n("exGp"), p = n.n(l), d = n("QjMU"), m = n("+6E2"), v = n("rUiQ"), b = n("X2Oc"), h = this, w = (a = p()(f.a.mark(function e(t) {
            var n, a;
            return f.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        b.e;
                    case 2:
                        return n = e.sent,
                        a = new d.a(v.f,m.a,n.getSigner()),
                        e.abrupt("return", a.approve(v.b, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").then(function(e) {
                            return e.wait()
                        }));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, h)
        })),
        function(e) {
            return a.apply(this, arguments)
        }
        ), _ = (r = p()(f.a.mark(function e() {
            var t, n, a;
            return f.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        b.e;
                    case 2:
                        return t = e.sent,
                        e.next = 5,
                        Object(b.d)();
                    case 5:
                        return n = e.sent,
                        a = new d.a(v.f,m.a,t),
                        e.abrupt("return", a.allowance(n, v.b).then(function(e) {
                            return e.gt("0xffffffffffffff")
                        }));
                    case 8:
                    case "end":
                        return e.stop()
                    }
            }, e, h)
        })),
        function() {
            return r.apply(this, arguments)
        }
        ), g = (i = p()(f.a.mark(function e(t) {
            var n, a;
            return f.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        b.e;
                    case 2:
                        return n = e.sent,
                        a = new d.a(v.b,m.d,n),
                        e.abrupt("return", a.getUserIdoInfo(t));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, h)
        })),
        function(e) {
            return i.apply(this, arguments)
        }
        ), y = (c = p()(f.a.mark(function e(t) {
            var n, a, r, i;
            return f.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        b.e;
                    case 2:
                        return n = e.sent,
                        a = new d.a(v.b,m.d,n.getSigner()),
                        r = d.c.parseUnits(String(t), 18),
                        e.next = 7,
                        a.estimateGas.pay(r);
                    case 7:
                        return i = e.sent,
                        e.abrupt("return", a.pay(r, {
                            gasLimit: i.mul("2")
                        }).then(function(e) {
                            return e.wait()
                        }));
                    case 9:
                    case "end":
                        return e.stop()
                    }
            }, e, h)
        })),
        function(e) {
            return c.apply(this, arguments)
        }
        ), x = (s = p()(f.a.mark(function e() {
            var t, n, a;
            return f.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        b.e;
                    case 2:
                        return t = e.sent,
                        n = new d.a(v.b,m.d,t.getSigner()),
                        e.next = 6,
                        n.estimateGas.claimIdoAmount();
                    case 6:
                        return a = e.sent,
                        e.abrupt("return", n.claimIdoAmount({
                            gasLimit: a.mul("2")
                        }).then(function(e) {
                            return e.wait()
                        }));
                    case 8:
                    case "end":
                        return e.stop()
                    }
            }, e, h)
        })),
        function() {
            return s.apply(this, arguments)
        }
        ), D = (o = p()(f.a.mark(function e(t) {
            var n, a;
            return f.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        b.e;
                    case 2:
                        return n = e.sent,
                        a = new d.a(v.f,m.b,n),
                        e.abrupt("return", a.balanceOf(t));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, h)
        })),
        function(e) {
            return o.apply(this, arguments)
        }
        )
    },
    nl2L: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return _
        }),
        n.d(t, "f", function() {
            return g
        }),
        n.d(t, "e", function() {
            return y
        }),
        n.d(t, "b", function() {
            return x
        }),
        n.d(t, "c", function() {
            return D
        }),
        n.d(t, "g", function() {
            return A
        }),
        n.d(t, "d", function() {
            return T
        });
        var a, r, i, c, s, o, u, f = n("Xxa5"), l = n.n(f), p = n("exGp"), d = n.n(p), m = n("QjMU"), v = n("+6E2"), b = n("rUiQ"), h = n("X2Oc"), w = this, _ = (a = d()(l.a.mark(function e(t) {
            var n, a;
            return l.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        h.e;
                    case 2:
                        return n = e.sent,
                        a = new m.a(b.f,v.a,n.getSigner()),
                        e.abrupt("return", a.approve(b.b, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").then(function(e) {
                            return e.wait()
                        }));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, w)
        })),
        function(e) {
            return a.apply(this, arguments)
        }
        ), g = (r = d()(l.a.mark(function e() {
            var t, n, a;
            return l.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        h.e;
                    case 2:
                        return t = e.sent,
                        e.next = 5,
                        Object(h.d)();
                    case 5:
                        return n = e.sent,
                        a = new m.a(b.f,v.a,t),
                        e.abrupt("return", a.allowance(n, b.b).then(function(e) {
                            return e.gt("0xffffffffffffff")
                        }));
                    case 8:
                    case "end":
                        return e.stop()
                    }
            }, e, w)
        })),
        function() {
            return r.apply(this, arguments)
        }
        ), y = (i = d()(l.a.mark(function e(t) {
            var n, a;
            return l.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        h.e;
                    case 2:
                        return n = e.sent,
                        a = new m.a(b.b,v.d,n),
                        e.abrupt("return", a.getPartnerInfo(t));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, w)
        })),
        function(e) {
            return i.apply(this, arguments)
        }
        ), x = (c = d()(l.a.mark(function e() {
            var t, n;
            return l.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        h.e;
                    case 2:
                        return t = e.sent,
                        n = new m.a(b.b,v.d,t.getSigner()),
                        e.abrupt("return", n.buyDaoQuota().then(function(e) {
                            return e.wait()
                        }));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, w)
        })),
        function() {
            return c.apply(this, arguments)
        }
        ), D = (s = d()(l.a.mark(function e() {
            var t, n;
            return l.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        h.e;
                    case 2:
                        return t = e.sent,
                        n = new m.a(b.b,v.d,t.getSigner()),
                        e.abrupt("return", n.claimDaoAmount().then(function(e) {
                            return e.wait()
                        }));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, w)
        })),
        function() {
            return s.apply(this, arguments)
        }
        ), A = (o = d()(l.a.mark(function e(t) {
            var n, a;
            return l.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        h.e;
                    case 2:
                        return n = e.sent,
                        a = new m.a(b.f,v.b,n),
                        e.abrupt("return", a.balanceOf(t));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, w)
        })),
        function(e) {
            return o.apply(this, arguments)
        }
        ), T = (u = d()(l.a.mark(function e(t) {
            var n, a;
            return l.a.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        h.e;
                    case 2:
                        return n = e.sent,
                        a = new m.a(b.d,v.b,n),
                        e.abrupt("return", a.balanceOf(t));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, w)
        })),
        function(e) {
            return u.apply(this, arguments)
        }
        )
    }
});
