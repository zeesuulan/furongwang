$(function() {

	var _w = $(window),
		imageRoot = 'image/',
		wrap_body = $("#wrap .body"),
		LOADING_TMP = ['<div id="loading-page">',
			'<div id="loading" class="loading">',
			'<div id="bar-box">',
			'<div id="bar"></div>',
			'</div>',
			'<div class="quarter"></div>',
			'</div>',
			'<div id="loading-foot" class="loading">',
			'<h2>温馨提示</h2>',
			'<span>本帖含有烟草内容,如果您是18岁以下人士,敬请回避!</span>',
			'</div>',
			'</div>'
		].join(""),
		PAGE_1 = ['<div id="page1">',
			'<div class="header">',
			'<img src="' + imageRoot + 'frw.png" class="left fello"><img src="' + imageRoot + 'zm.png" class="middle"><img src="' + imageRoot + '500.png" class="right fello">',
			'</div>',
			'<img src="' + imageRoot + 'kz.png" class="kz">',
			'<img src="' + imageRoot + 'yun.png" class="yun">',
			'<img src="' + imageRoot + 'xin.png" class="xin">',
			'<div class="footer">',
			'<img src="' + imageRoot + 'bian.png" class="bian b1">',
			'<p>我们认为：君子之交，要以</p>',
			'<p>诚信为本，以信示人，言出由衷，始终不渝</p>',
			'<p>但生活中，我们依旧发现这样的例子......</p>',
			'<img src="' + imageRoot + 'bian.png" class="bian b2">',
			'</div>',
			'</div>'
		].join(""),
		PAGE_2 = ['<div id="page2">',
			'<div class="clock">',
			'	<span class="h"></span>',
			'	<span class="m"></span>',
			'	<img src="' + imageRoot + 'clock.png">',
			'</div>',
			'<img src="' + imageRoot + 'pop1.png" class="pop1">',
			'<img src="' + imageRoot + 'pop2.png" class="pop2">',
			'<img src="' + imageRoot + 'pop_txt1.png" class="pop_txt1">',
			'<img src="' + imageRoot + 'pop_txt2.png" class="pop_txt2">',
			'<img src="' + imageRoot + 'woman.png" class="woman">',
			'<div class="footer">',
			'	<p>“我五分钟后到！”</p>',
			'	<p>如果没到，请再读一遍此信息。</p>',
			'</div>',
			'</div>'
		].join(""),
		PAGE_3 = ['<div id="page3">',
			'<img src="' + imageRoot + 'hand.png" class="hand">',
			'<img src="' + imageRoot + 'cheat.png" class="cheat">',
			'<img src="' + imageRoot + 'pen.png" class="pen">',
			'<img src="' + imageRoot + 'kaoshi_txt.png" class="kaoshi_txt kaoshi">',
			'<img src="' + imageRoot + 'kaoshi_min.png" class="kaoshi_min kaoshi">',
			'<div class="footer">',
			'	<p>知识要记在心里而不是手上</p>',
			'</div>',
			'</div>'
		].join(""),
		PAGE_4 = ['<div id="page4">',
			'<img src="' + imageRoot + 'o.png" class="orange o">',
			'<img src="' + imageRoot + 'o2.png" class="orange o2">',
			'<img src="' + imageRoot + 'o3.png" class="o3">',
			'<img src="' + imageRoot + 'o_txt.png" class="o_txt">',
			'<img src="' + imageRoot + 'o_man.png" class="o_man">',
			'<div class="footer">',
			'	<p>优惠虽好，也要记得表里如一</p>',
			'</div>',
			'</div>'
		].join(""),
		PAGE_5 = ['<div id="page5">',
			'<img src="' + imageRoot + 'bb.png" class="bb">',
			'<img src="' + imageRoot + 'girl.png" class="girl">',
			'<img src="' + imageRoot + 'band.png" class="band">',
			'<div class="footer">',
			'	<p>每一次的承诺都是一次失落</p>',
			'</div>',
			'</div>'
		].join(""),
		PAGE_6 = ['<div id="page6">',
			'<img src="' + imageRoot + 'oldman.png" class="oldman">',
			'<img src="' + imageRoot + 'insure.png" class="insure">',
			'<div class="footer">',
			'	<p>您先签了这个，我再扶您！</p>',
			'</div>',
			'</div>'
		].join(""),
		PAGE_7 = ['<div id="page7">',
			'<div id="list_1" class="list">',
			'    <span>渐渐地&nbsp;我们</span>',
			'    <span>失去了&nbsp;信任</span>',
			'    <span>失去了&nbsp;朋友</span>',
			'    <span>失去了&nbsp;圈子</span>',
			'    <span>失去了&nbsp;资源</span>',
			'    <span>失去了&nbsp;客户</span>',
			'    <span>失去了&nbsp;伙伴</span>',
			'    <span>失去了&nbsp;前程</span>',
			'    <span>失去了&nbsp;人生...</span>',
			'</div>',
			'<div id="list_2" class="list">',
			'    <span>所以我们不妨</span>',
			'    <span>多一点&nbsp;真诚</span>',
			'    <span>少一点&nbsp;假意</span>',
			'    <span>多一点&nbsp;真话</span>',
			'    <span>少一点&nbsp;谎言</span>',
			'    <span>多一点&nbsp;真实</span>',
			'    <span>少一点&nbsp;浮夸</span>',
			'    <span>慎重地&nbsp;许诺</span>',
			'    <span>勇敢地&nbsp;担当...</span>',
			'</div>',
			'<div id="loading" class="loading_8">',
			'    <div id="bar-box">',
			'        <div id="bar"></div>',
			'    </div>',
			'    <div class="quarter"></div>',
			'</div>',
			'<p>信誉度</p>',
			'</div>'
		].join(""),
		PAGE_8 = ['<div id="page8">',
			'<img src="' + imageRoot + 'title.png" class="title s1">',
			'<img src="' + imageRoot + 'yun.png" class="yun y">',
			'<img src="' + imageRoot + 'yun2.png" class="yun2 y">',
			'<img src="' + imageRoot + 'yan.png" class="yan">',
			'<img src="' + imageRoot + 'bian.png" class="bian s1">',
			'<img src="' + imageRoot + 'jianding.png" class="jianding">',
			'<div class="txt">',
			'    <p>真诚的邀请您成为我们的君信品鉴师</p>',
			'    <p>您将有机会免费获得一盒芙蓉王君信</p>',
			'</div>',
			'</div>'
		].join("")


	$.fx.speeds._default = 1000;
	//================================主要流程
	var FRW = function() {
		wrap_body.html(LOADING_TMP)

		this.juanBox = $("#juan_box")
		this.splite = $(".splite")
		this.sound = $("#sound")
		this.wrap = $("#wrap")
		this.paging = false
		this.index = 1
		this.rainy = new Audio("rainy.mp3")

		this.bind()

		//==========预加载图片
		var preload = new PerLoad([
			'bg.png',
			'logo.png',
			'corner.png',
			'cal_bg.png',
			'slipte.png',
			'progress_bg.png',
			'progress_quarter.png',
			'frw.png',
			'500.png',
			'zm.png',
			'kz.png',
			'juan.png',
			'yun.png',
			'xin.png',
			'bian.png',
			'woman.png',
			'clock.png',
			'pop1.png',
			'pop2.png',
			'pop_txt1.png',
			'pop_txt2.png',
			'pen.png',
			'hand.png',
			'cheat.png',
			'kaoshi_txt.png',
			'kaoshi_min.png',
			'bb.png',
			'girl.png',
			'band.png',
			'title.png',
			'yun.png',
			'yan.png',
			'oldman.png',
			'insure.png',
			'arrow.png',
			'bg_mask.png',
			'check.png',
			'check_sel.png',
			'form_body.png',
			'form_head.png',
			'form_title.png',
			'form_foot.png',
			'num.png',
			'submit.png',
			'submited.png',
			'share.png',
			'zhang.png',
			'letter_cover.png',
			'bear.png',
			'mask.png'
		])
	}

	FRW.prototype.bind = function() {
		var loading_p = new Progress(".loading"),
			self = this

		this.rainy.play()
			//======监听事件
		_w.on("imgLoaded", function(evt, per) {
			loading_p.render(per * 100, false, 0)
			if (per == 1) {
				_w.trigger("start")
			}
		})

		this.sound.on("click", function() {
			var rainy = self.rainy
			if (!rainy.paused) {
				self.sound.attr("src", "image/sound_close.png")
				rainy.pause()
			} else {
				self.sound.attr("src", "image/sound_open.png")
				rainy.play()
			}
		})

		_w.on("start", function() {
			setTimeout(function() {
				$(".loading").addClass("over")
			}, 1000)
			setTimeout(function() {
				self.renderStep(self.index)
			}, 2000)
		})

		var startY = endY = 0
		this.wrap.on("touchstart", function(e) {
			endY = 0
			startY = e.originalEvent.touches[0].pageY
		})

		this.wrap.on("touchmove", function(e) {
			e.preventDefault()
			endY = e.originalEvent.touches[0].pageY
		})

		this.wrap.on("touchend", function() {
			if (startY != endY) {
				if (endY > startY) {
					self.prePage()
				} else {
					self.nextPage()
				}
			}
		})

		$(".share").on("click", function() {
			var imgs = $("#share").show().find("img"),
				len = imgs.length

			imgs.each(function(index, item) {
				$(item).transition({
					"opacity": 1,
					"delay": (len - index) * 100
				})
			})
		})

		$("#share").on("click", function() {
			$("#share").hide().find("img").css({
				"opacity": 0
			})
		})
	}

	FRW.prototype.unbind = function() {
		_w.off("touchend")
		_w.off("touchmove")
		_w.off("touchstart")
	}

	FRW.prototype.prePage = function() {

		// if (this.paging) return

		var self = this
		this.paging = true
		if (self.index > 1) {
			this.juanBox.css({
				"y": -1000,
				"display": "block"
			}).find(".pre").css({
				"height": "1000px"
			})

			this.juanBox.transition({
				"y": "0"
			}, function() {
				$(this).css({
					"display": "none",
					"y": 0
				}).find(".pre").css({
					"height": "0"
				})
				self.paging = false
				self.renderStep(--self.index)
				if (self.index == 1) {
					self.splite.hide()
				}
			})
		}
	}

	FRW.prototype.nextPage = function() {
		// if (this.paging) return

		var self = this
		this.paging = true
		if (self.index < 8) {
			this.juanBox.css({
				"display": "block",
				"y": 1000
			}).find(".next").css({
				"height": "1000px"
			})

			this.juanBox.transition({
				"y": "0"
			}, function() {
				$(this).css({
					"display": "none"
				}).find(".next").css({
					"height": "0"
				})
				self.paging = false
				self.renderStep(++self.index)
				
				if (self.index > 1) {
					self.splite.show()
				}
			})
		}
	}

	FRW.prototype.renderStep = function(step) {

		switch (step) {
			case 1:
				wrap_body.html(PAGE_1);
				step_1();
				break;
			case 2:
				wrap_body.html(PAGE_2);
				step_2();
				break;
			case 3:
				wrap_body.html(PAGE_3);
				step_3();
				break;
			case 4:
				wrap_body.html(PAGE_4);
				step_4();
				break;
			case 5:
				wrap_body.html(PAGE_5);
				step_5();
				break;
			case 6:
				wrap_body.html(PAGE_6);
				step_6();
				break;
			case 7:
				wrap_body.html(PAGE_7);
				step_7();
				break;
			case 8:
				wrap_body.html(PAGE_8);
				step_8();
				break;
			case 9:
				// wrap_body.html(PAGE_9);
				step_9();
				break;
		}
	}

	FRW.prototype.submitOK = function() {
		$(".num").remove()
		$("#form").transition({
			"height": "100%"
		})
		// $("#form").hide()
		$(".f_body").css({
			"height": "200px"
		}).transition({
			"scale": ".5",
			"overflow": "hidden",
			"rotateY": 180,
			"opacity": 0
		})
		$(".letter").css({
			"rotateY": -180,
		}).transition({
			"rotateY": 0,
			"opacity": 1,
			"z-index": 2
		}, function() {
			$("body").css({
				"overflow": "hidden"
			})
		}).transition({
			"y": $(".big_logo").height() * 0.8,
			"delay": 1000
		})
		$(".zhang").transition({
			"scale": 1,
			"opacity": 1,
			"delay": 1000
		}, 500)

		$(".big_logo").transition({
			"y": "0",
			"opacity": 1,
			"delay": 2000
		})
		$(".last").transition({
			"opacity": 1,
			"delay": 3000
		})
	}

	FRW.prototype.stopMusic = function(){
		this.rainy.pause()
		$("#sound").remove()
	}

	function step_9() {
		_w.trigger("form")

		$("body").css({
			"background": "url(" + imageRoot + "bg_mask.png) 0 0 repeat #8c0203"
		})
		$(".cal_stuff").transition({
			"y": -600,
			"opacity": 0
		}, function() {
			$(this).remove()
			$("body").css({
				"overflow": "visible",
				"padding": 0
			})

		})
		$("#footer").transition({
			"y": 300
		}, function() {
			$(this).remove()
		})
		$("#form").transition({
			"opacity": 1,
			"overflow": "hidden",
			"height": $(".f_body").height() + 20,
			"y": 0,
			"delay": 1000
		})

		$(".submit").on("click", function() {
			$(".submited").css({
				"x": 0
			}).transition({
				"scale": 1,
				"opacity": 1
			}, 500, function() {
				_w.trigger("submitclick")
			})
		})

		$(".gender").on("click", function() {
			$(this).addClass("sel").siblings().removeClass("sel")
			$("input[name='gender']").val($(this).attr("data"))
		})

		var ageList = $(".age-list")
		$(".sel_txt").on("click", function() {
			ageList.hide()
			$("#" + $(this).attr("lead") + "_list").show()
		})
		ageList.on("click", function(evt) {
			var lead = $(this).attr("id").replace("_list", "")
			$(".sel_txt[lead='" + lead + "']").html($(evt.target).html())
			$(this).hide()
		})

		$(".protocol").on("click", function(){
			$("#protocal").show()
		})

		$("#protocal").on("click", ".close", function(){
			$("#protocal").hide()
		})
	}

	function step_8() {
		$(".s1").transition({
			"opacity": 1,
			"y": 0
		}, 500)

		$(".yan").transition({
			"rotateY": "360",
			"scale": 1,
			"opacity": 1,
			"delay": 500
		})

		$(".y").transition({
			"opacity": 1,
			"delay": 500
		}, 1500)

		$(".txt").transition({
			"opacity": 1,
			"delay": 1000
		}, function() {
			$(".txt p").transition({
				"opacity": 1,
				"y": 0
			})
		})

		$(".jianding").transition({
			"opacity": 1,
			"y": 0,
			"delay": 2000
		}).on("click", function() {
			step_9()
		})
	}

	function step_7() {
		var list_1 = $("#list_1"),
			list_2 = $("#list_2"),
			list_1_span = list_1.find("span"),
			len = list_1_span.length,
			index = 0,
			cid = 0,
			loading = new Progress(".loading_8"),
			duration = 500

		loading.render(100, false, 0)
		list_1.show();

		loading.ele.on("first_over", function() {
			list_1.transition({
				"x": -100,
				"opacity": 0,
				"delay": duration * 3
			}, duration)
			list_2.transition({
				"y": 0,
				"opacity": 1,
				"delay": duration * 4
			}, duration, function() {
				loading.render(20, false, duration * 3)
				setTimeout(function() {
					loading.render(100, false, duration)
				}, duration)
			})
		})

		cid = setInterval(function() {
			if (index != len) {
				list_1_span.eq(index).transition({
					"opacity": 1,
					"scale": 1,
					"y": 0
				}, duration, "linear")
				if (index > 0) {
					loading.render((1 - index / len) * 100, false, 500)
				}
				++index
			} else {
				loading.render((1 - index / len) * 100, false, 500)
				clearInterval(cid)
				loading.ele.trigger("first_over")
			}
		}, duration)
	}

	function step_6() {
		var p = $(".footer p")

		p.css({
			"lineHeight": $(".footer").height() + "px"
		})

		$(".oldman").transition({
			"x": 0,
			"opacity": 1
		})

		$(".insure").transition({
			"opacity": 1,
			"x": 0,
			"delay": 1000
		})

		p.transition({
			"opacity": 1,
			"y": 0,
			"delay": 2000
		})
	}

	function step_5() {
		var p = $(".footer p")

		p.css({
			"lineHeight": $(".footer").height() + "px"
		})

		$(".band").transition({
			"y": 0,
			"opacity": 1
		})

		$(".girl").transition({
			"y": 0,
			"opacity": 1
		})

		$(".bb").transition({
			"y": 0,
			"opacity": 1,
			"delay": 1500
		})

		p.transition({
			"opacity": 1,
			"y": 0,
			"delay": 3500
		})
	}

	function step_4() {
		var p = $(".footer p")

		p.css({
			"lineHeight": $(".footer").height() + "px"
		})

		$(".o_txt").transition({
			"opacity": 1,
			"x": 0
		})

		$(".o_man").transition({
			"opacity": 1,
			"x": 0
		})

		$(".orange").transition({
			"opacity": 1,
			"delay": 1000
		}, function() {
			$(".o3").transition({
				"opacity": 1
			})
		})


		setTimeout(function() {
			$(".o2").transition({
				"y": 100,
				"opacity": 0
			})
		}, 2500)

		p.transition({
			"opacity": 1,
			"y": 0,
			"delay": 3500
		})
	}

	function step_3() {
		var p = $(".footer p")

		p.css({
			"lineHeight": $(".footer").height() + "px"
		})
		$(".hand").transition({
			"y": 0,
			"opacity": 1
		}, 1500)

		$(".kaoshi").transition({
			"x": 0,
			"opacity": 1
		})

		$(".pen").transition({
			"opacity": 1,
			"x": 10,
			"y": 10,
			"delay": 1500
		}, 500, "linear").transition({
			"x": 60,
			"y": 40
		}, 500, "linear").transition({
			"x": 10,
			"y": 80
		}, 500, "linear").transition({
			"x": 60,
			"y": 120
		}, 500, "linear", function() {
			$(".cheat").transition({
				"opacity": 1
			}, 2000)
		}).transition({
			"x": 10,
			"y": 140
		}, 1000, "linear", function() {
			p.transition({
				"opacity": 1,
				"y": 0
			})
		})
	}

	function step_2() {

		var p = $(".footer p")
		p.css({
			"lineHeight": ($(".footer").height() / 2) + "px"
		})
		$(".woman").transition({
			"x": 0,
			"opacity": 1
		})

		$(".pop1").transition({
			"opacity": 1,
			"y": 0,
			"delay": 1000
		})

		$(".pop_txt1").transition({
			"opacity": 1,
			"y": 0,
			"delay": 1000
		})

		$(".pop2").transition({
			"opacity": 1,
			"y": 0,
			"delay": 2500
		})

		$(".pop_txt2").transition({
			"opacity": 1,
			"y": 0,
			"delay": 2500
		})

		$(".m").css({
			"transformOrigin": '2px 22px'
		}).transition({
			"rotate": "180deg",
			"delay": 2500
		})

		p.transition({
			"opacity": 1,
			"delay": 4000
		})
	}

	function step_1() {
		$(".middle").transition({
			"y": "0px"
		}, function() {
			$(".fello").transition({
				"x": 0,
				"opacity": 1
			})
		})
		$(".kz").transition({
			"x": "6%",
			"opacity": 1,
			"delay": 500
		})
		$(".xin").transition({
			"opacity": 1,
			"delay": 800
		})
		$(".yun").transition({
			"opacity": 1,
			"delay": 1000
		})
		var p = $(".footer p")
		$(".bian").transition({
			"x": 0
		}, function() {
			var max = p.length,
				index = 0,
				cid = setInterval(function() {
					if (index < max) {
						p.eq(index).transition({
								"opacity": 1,
								"y": 0
							})
							++index
					} else {
						clearInterval(cid)
					}
				}, 800)
		})
	}

	//================================进度条
	var Progress = function(id) {
		if ($(id).length > 0) {
			this.ele = $(id)
			this.bar = this.ele.find("#bar")
		}
	}

	Progress.prototype.render = function(per, uptodown, duration) {
		if (isNaN(per)) return
		if (per > 100) per = 100
		if (per < 0) per = 0

		if (uptodown) {
			if (duration == 0) {
				this.bar.css({
					height: per + "%",
					top: 0
				})
			} else {
				this.bar.transition({
					height: per + "%",
					bottom: 0
				}, top, "linear")
			}
		} else {
			if (duration == 0) {
				this.bar.css({
					height: per + "%",
					bottom: 0
				})
			} else {
				this.bar.transition({
					height: per + "%",
					bottom: 0
				}, duration, "linear")
			}
		}
	}

	//================================图片预加载
	var PerLoad = function(img_list) {

		if ($.isArray(img_list)) {
			var len = img_list.length,
				loadedNum = 0

			$.each(img_list, function(index, item) {
				var img = new Image()
				img.onload = function() {
					loadedNum++
					_w.trigger("imgLoaded", loadedNum / len)
					img = null
				}
				img.src = imageRoot + item
			})
		}
	}

	//===============================初始化

	var frw = new FRW()

	_w.on("submitclick", function() {

		frw.submitOK()
	})
	_w.on("form", function() {
		frw.stopMusic()
		frw.unbind()
	})
})

window.WX_SHARE = function(e) {
	function i() {
		WeixinJSBridge.on("menu:share:appmessage", function() {
			WeixinJSBridge.invoke("sendAppMessage", {
				// appid: "wxbbc6e0adf8944632",
				img_width: "290",
				img_height: "290",
				img_url: e.image,
				title: e.title,
				desc: e.desc,
				link: e.link
			}, function() {})
		})
	}

	function n() {
		WeixinJSBridge.on("menu:share:timeline", function() {
			WeixinJSBridge.invoke("shareTimeline", {
				// appid: "wxbbc6e0adf8944632",
				img_width: "290",
				img_height: "290",
				img_url: e.image,
				title: e.title,
				desc: e.desc,
				link: e.link
			}, function() {})
		})
	}

	function t() {
		WeixinJSBridge.on("menu:share:weibo", function() {
			WeixinJSBridge.invoke("shareWeibo", {
				content: e.desc,
				url: e.link
			}, function() {})
		})
	}
	document.addEventListener && (document.addEventListener("WeixinJSBridgeReady", i, !1), document.addEventListener("WeixinJSBridgeReady", t, !1), document.addEventListener("WeixinJSBridgeReady", n, !1))
}