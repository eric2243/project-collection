var $ = function(id) {
	return document.getElementById(id);
}
window.onload = function() {
    $("closeBtn").onclick = function() {
    	// tipBox.style.display = "none"; 第一种方法
    	$("demo").className = "pop"; //第二种方法
    	$("closeBtn").className = "pop"; //第二种方法
    } 
    $("demo2").onmouseover = function() {
    	$("demo").className = "pop1"; //第二种方法
    	$("closeBtn").className = "demo1"; //第二种方法
    }
}