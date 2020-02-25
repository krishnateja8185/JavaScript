var Student={
	"sid":1001,
	"sname":"kittu",
	"smarks":{
		"tel":60,
		"hin":55,
		"eng":70,
		"ps":65,
		"ns":80,
		"soc":77,
	},
	getTotalMarks:function(){
		var total=this.smarks.tel+this.smarks.hin+this.smarks.eng+this.smarks.ps+this.smarks.ns+this.smarks.soc;
		return total;
	},
	getPerc:function(){
		var perc = ((total=this.smarks.tel+this.smarks.hin+this.smarks.eng+this.smarks.ps+this.smarks.ns+this.smarks.soc)*100)/600;
		return perc;
	}
}

var x = Student.getTotalMarks();
var y = Student.getPerc();
	document.getElementById("hi").innerHTML = x;
	document.getElementById("hi2").innerHTML = y;