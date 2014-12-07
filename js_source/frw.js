$(function() {

	var _w = $(window),
		TMP = [].join("")


	var loading_p = new Progress("#loading")

	_w.on("imgLoaded", function(evt, per) {
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
		'http://tp4.sinaimg.cn/3602662463/50/5710999801/0',
		'http://tp4.sinaimg.cn/1449877103/50/5703597626/0',
		'http://tp1.sinaimg.cn/5224696444/50/5702980875/1',
		'http://tp2.sinaimg.cn/5212552277/50/40069274683/1'
	]))



	//================================主要流程
	function FRW() {

	}

	FRW.prototype.renderStep = function() {

	}

	FRW.prototype.submitOK = function(){
		
	}

	$("#form").on("click", function(){
		$("#form").addClass("close").addClass("fold")
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
				height: per + "px",
				top: 0
			})
		} else {
			this.bar.animate({
				height: per + "px",
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