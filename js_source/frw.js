$(function() {

	var _w = $(window),
		imageRoot = '../image/',
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
			'<img src="../image/frw.png" class="left fello"><img src="../image/zm.png" class="middle"><img src="../image/500.png" class="right fello">',
			'</div>',
			'<img src="../image/kz.png" class="kz">',
			'<img src="../image/yun.png" class="yun">',
			'<img src="../image/xin.png" class="xin">',
			'<div class="footer">',
			'<img src="../image/bian.png" class="bian b1">',
			'<p>我们认为：君子之交，要以</p>',
			'<p>诚信为本，以信示人，言出由衷，始终不渝</p>',
			'<p>但生活中，我们依旧发现这样的栗子......</p>',
			'<img src="../image/bian.png" class="bian b2">',
			'</div>',
			'</div>'
		].join(""),
		PAGE_2 = ['<div id="page2">',
			'<div class="clock">',
			'	<span class="h"></span>',
			'	<span class="m"></span>',
			'	<img src="../image/clock.png">',
			'</div>',
			'<img src="../image/pop1.png" class="pop1">',
			'<img src="../image/pop2.png" class="pop2">',
			'<img src="../image/pop_txt1.png" class="pop_txt1">',
			'<img src="../image/pop_txt2.png" class="pop_txt2">',
			'<img src="../image/woman.png" class="woman">',
			'<div class="footer">',
			'	<p>“我五分钟后到！”</p>',
			'	<p>如果没到，请再读一遍此信息。</p>',
			'</div>',
			'</div>'
		].join(""),
		PAGE_3 = ['<div id="page3">',
			'<img src="../image/hand.png" class="hand">',
			'<img src="../image/cheat.png" class="cheat">',
			'<img src="../image/pen.png" class="pen">',
			'<img src="../image/kaoshi_txt.png" class="kaoshi_txt kaoshi">',
			'<img src="../image/kaoshi_min.png" class="kaoshi_min kaoshi">',
			'<div class="footer">',
			'	<p>知识要记在心里而不是手上</p>',
			'</div>',
			'</div>'
		].join("")


	$.fx.speeds._default = 1000;
	//================================主要流程
	var FRW = function() {
		wrap_body.html(LOADING_TMP)
		this.bind()

		//==========预加载图片
		var preload = new PerLoad([
			imageRoot + 'bg.png',
			imageRoot + 'logo.png',
			imageRoot + 'cal_bg.png',
			imageRoot + 'progress_bg.png',
			imageRoot + 'progress_quarter.png',
			imageRoot + 'frw.png',
			imageRoot + '500.png',
			imageRoot + 'zm.png',
			imageRoot + 'kz.png',
			imageRoot + 'yun.png',
			imageRoot + 'xin.png',
			imageRoot + 'bian.png',
			imageRoot + 'woman.png',
			imageRoot + 'clock.png',
			imageRoot + 'pop1.png',
			imageRoot + 'pop2.png',
			imageRoot + 'pop_txt1.png',
			imageRoot + 'pop_txt2.png',
			imageRoot + 'pen.png',
			imageRoot + 'hand.png',
			imageRoot + 'cheat.png',
			imageRoot + 'kaoshi_txt.png',
			imageRoot + 'kaoshi_min.png',
			imageRoot + 'mask.png'
		])

	}

	FRW.prototype.bind = function() {
		var loading_p = new Progress("#loading"),
			self = this
			//======监听事件
		_w.on("imgLoaded", function(evt, per) {
			loading_p.render(per * 100)
			if (per == 1) {
				_w.trigger("start")
			}
		})

		_w.on("start", function() {
			setTimeout(function() {
				$(".loading").addClass("over")
			}, 1000)
			setTimeout(function() {
				self.renderStep(3)
			}, 2000)
		})
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
			case 3:
				wrap_body.html(PAGE_4);
				step_3();
				break;
		}
	}

	FRW.prototype.submitOK = function() {

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
		}, "linear").transition({
			"x": 60,
			"y": 40
		}, "linear").transition({
			"x": 10,
			"y": 80
		}, "linear").transition({
			"x": 60,
			"y": 120
		}, "linear").transition({
			"x": 10,
			"y": 140
		}, "linear")

		$(".cheat").transition({
			"opacity": 1,
			"delay": 4500
		}, 3000)

		p.transition({
			"opacity": 1,
			"y": 0,
			"delay": 6500
		}, 1000)

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
			"delay": 2000
		})

		p.eq(0).transition({
			"opacity": 1,
			"delay": 3000
		})

		$(".m").css({
			"transformOrigin": '2px 22px'
		}).transition({
			"rotate": "180deg",
			"delay": 4500
		}, 3000)

		$(".pop2").transition({
			"opacity": 1,
			"y": 0,
			"delay": 7500
		})

		$(".pop_txt2").transition({
			"opacity": 1,
			"y": 0,
			"delay": 8500
		})

		p.eq(1).transition({
			"opacity": 1,
			"delay": 9500
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

	Progress.prototype.render = function(per, uptodown) {
		if (isNaN(per)) return
		if (per > 100) per = 100
		if (per < 0) per = 0

		if (uptodown) {
			this.bar.css({
				height: per + "%",
				top: 0
			})
		} else {
			this.bar.css({
				height: per + "%",
				bottom: 0
			})
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
				img.src = item
			})
		}
	}

	//===============================初始化
	;
	(new FRW())

	$("#form").on("click", function() {
		$("#form").addClass("close")
	})


	// $(function(){
	// 	_w.on("imgLoaded", function(evt, per) {
	// 		if (per == 1) {
	// 			setTimeout(function(){
	// 				step_1()
	// 			}, 1000)
	// 		}
	// 	})
	// 	var preload = new PerLoad([
	// 		imageRoot + 'bg.png',
	// 		imageRoot + 'logo.png',
	// 		imageRoot + 'cal_bg.png',
	// 		imageRoot + 'progress_bg.png',
	// 		imageRoot + 'progress_quarter.png',
	// 		imageRoot + 'frw.png',
	// 		imageRoot + '500.png',
	// 		imageRoot + 'zm.png',
	// 		imageRoot + 'kz.png',
	// 		imageRoot + 'yun.png',
	// 		imageRoot + 'xin.png',
	// 		imageRoot + 'bian.png'
	// 	])

	// })
})