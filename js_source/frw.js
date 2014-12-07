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
			imageRoot + 'progress_quarter.png'
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
			setTimeout(function(){
				$(".loading").addClass("over")
			}, 1000)
		})
	}

	FRW.prototype.renderStep = function() {

	}

	FRW.prototype.submitOK = function() {

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



})