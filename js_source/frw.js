$(function() {

	var _w = $(window),
		imageRoot = '../image/',
		TMP = [].join("")


	var loading_p = new Progress("#loading")

	_w.on("imgLoaded", function(evt, per) {
		// loading_p.render(per * 100, true)
		loading_p.render(per * 100)

		if (per == 1) {
			_w.trigger("start")
			//init all
		}
	})

	_w.on("start", function() {
		(new FRW())
	})

	;
	(new PerLoad([
		imageRoot + 'bg.png',
		imageRoot + 'logo.png',
		imageRoot + 'cal_bg.png',
		imageRoot + 'progress_bg.png',
		imageRoot + 'progress_quarter.png'
	]))



	//================================主要流程
	function FRW() {

	}

	FRW.prototype.renderStep = function() {

	}

	FRW.prototype.submitOK = function() {

	}

	$("#form").on("click", function() {
		$("#form").addClass("close")
	})

	//================================进度条
	function Progress(id) {

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
	function PerLoad(img_list) {
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


})