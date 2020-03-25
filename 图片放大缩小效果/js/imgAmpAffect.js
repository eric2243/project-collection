window.onload = function() {
	var ampBtn = document.getElementById("amp");
	var narrow = document.getElementById("narrow");
	ampBtn.onclick = function() {  //添加点击图片放大事件
		ampImg(); //放大图片函数
	}
    narrow.onclick = function() { //添加点击图片缩小事件
    	narrowImg();
    }
	var img = document.getElementById("img");
	var maxWidth = img.width * 2; //图片放大的宽度最大值
	var maxHeight = img.height * 2; //图片放大的高度最大值
	var minHeight = img.height * 0.5; //图片缩小的高度最小值
	var minWidth = img.width * 0.5; //图片缩小的宽度最小值
    function ampImg() { //定义图片放大函数
    	var endWidth = img.width * 1.3; //每次点击放大的宽度
    	var endHeight = img.height * 1.3; //每次点击放大的高度
    	var ampTimer = null;
    	var ampTimer = setInterval(function() {
    		if(img.width  < endWidth) {
    			if(img.width < maxWidth) {
    				img.width = img.width * 1.05;
    				img.height = img.height * 1.05;
    			}else {
    				alert("已经放大到最大值了！");
    				clearInterval(ampTimer);
    			}
    		}else {
    			clearInterval(ampTimer);
    		}
    	},20)
    }
    function narrowImg() { //定义图片缩小函数
    	var endWidth = img.width * 0.7; //每次点击缩小的宽度
    	var endHeight = img.height * 0.7; //每次点击缩小的高度
    	var ampTimer = null;
    	var ampTimer = setInterval(function() {
    		if(img.width  > endWidth) {
    			if(img.width > minWidth) {
    				img.width = img.width * 0.95;
    				img.height = img.height * 0.95;
    			}else {
    				alert("已经缩小到最小值了！");
    				clearInterval(ampTimer);
    			}
    		}else {
    			clearInterval(ampTimer);
    		}
    	},20)
    }    

}