qxobj = document.getElementById("qx");
qbxobj = document.getElementById("qbx");
fxobj = document.getElementById("fx");
chkobj = document.getElementsByClassName("chk");
qxobj.onclick = function() {
     for(i = 0; i < chkobj.length; i++) {
     	chkobj[i].checked = true;
     }
}
qbxobj.onclick = function() {
	for(i = 0; i < chkobj.length; i++) {
		chkobj[i].checked = false;
	}
}
fxobj.onclick = function() {
	for(i = 0; i < chkobj.length; i++) {
		chkobj[i].checked = !chkobj[i].checked;
	}
}