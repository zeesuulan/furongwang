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
		].join("")



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
			imageRoot + 'bian.png'
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
				self.renderStep(1)
			}, 3000)
		})
	}

	FRW.prototype.renderStep = function(step) {
		if (step == 1) {
			wrap_body.html(PAGE_1)
			step_1()
		}
	}

	FRW.prototype.submitOK = function() {

	}

	function step_1() {
		$(".middle").animate({
			"top": "0px"
		}, function() {
			$(".fello").animate({
				"left": 0,
				"opacity": 1
			})
		})
		$(".kz").animate({
			"left": "6%",
			"opacity": 1
		})
		$(".xin").animate({
			"opacity": 1
		})
		$(".yun").animate({
			"opacity": 1
		})
		var p = $(".footer p")
		$(".bian").animate({
			"left": 0
		}, function() {
			var max = p.length,
				index = 0,
				cid = setInterval(function() {
					if (index < max) {
						p.eq(index).animate({
								"opacity": 1,
								"top": 0
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
			this.bar.animate({
				height: per + "%",
				top: 0
			})
		} else {
			this.bar.animate({
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