var myapp = {};

myapp.regExp={
	notEmptyReg:/\S/,
	emailReg:/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
	mobileReg:/^1[3|4|5|7|8]\d{9}$/,
	myclassReg:/18040105(\d){2}$/
}

myapp.dataType = {};

myapp.dataType.userInfo={
	UserName:null,
	UserPass:null
}
myapp.dataType.cookie = null;
myapp.dataType.isLogin=false;


var baseUrl = "http://47.95.8.86:5000";
//var baseUrl = "http://39.105.63.200:1000";
var api_url={};
api_url.getCaptchaUrl = baseUrl+"/api/getCaptcha";
api_url.getCaptchaImgUrl = baseUrl+"/api/getCaptchaImg";
api_url.getCaptchaCheckUrl = baseUrl+"/api/checkCaptcha";
api_url.loginUrl = baseUrl+"/api/login";
api_url.getTableUrl = baseUrl+"/api/getNowWeekTable";
api_url.getWeekTableByWeek = baseUrl+"/api/getWeekTableByWeek";


let getBeginDay = function (){
    let beginDay = new Date();
    let dWeek = beginDay.getDay();
    if(dWeek==0)dWeek=7;
    dWeek-=1;
    beginDay.setDate(beginDay.getDate()-dWeek);
    //console.log(beginDay);
    return beginDay;
}
	
let getNowWeek = function (beginDay,beginWeek,nowDay){
    let dateSpan = nowDay - beginDay;
    //dateSpan = Math.abs(dateSpan);
    let iDays = Math.floor(dateSpan / (24 * 3600 * 1000))+1;
    //console.log(iDays);
    iDays = Math.floor(iDays/7)+beginWeek;
    console.log("nowWeek:"+iDays);
	return iDays;
}

let colorPos = 1;
let colorMap = new Map();

function addCourse(Course){
	let weekmap = ["星期一","星期二","星期三","星期四","星期五","星期六"];
	let coursemap = ["第一大节","第二大节","第三大节","第四大节","第五大节"];
	let row=0;
	let col=0;
	for(let i=0;i<6;i++){
		if(weekmap[i]==Course.weekday)row=i+1;
	}
	for(let i=0;i<5;i++){
		if(coursemap[i]==Course.section)col=i+1;
	}
	let target = ".Day"+row+" .Course"+col;
	//mui('.Day6 .Course1')[0].innerText = "测试";
	var reg = new RegExp("））");
	if(colorMap.get(Course.name)==undefined){
		mui(target)[0].classList.add("CourseBlock"+colorPos);
		colorMap.set(Course.name,colorPos);
		colorPos++;
		if(colorPos>10)colorPos=colorPos%10;
	}
	else{
		mui(target)[0].classList.add("CourseBlock"+colorMap.get(Course.name));
	}
	mui(target)[0].innerText = Course.name+"\n\n"+Course.classroom.replace(reg,"").replace("（","");
	
}

function changeTitle(weekName){
	titleName.innerText= "第"+weekName+"周";
}

function clearPage(){
	for(let i=1;i<=6;i++){
		for(let j=1;j<=5;j++){
			let target = ".Day"+i+" .Course"+j;
			var targetNode = mui(target)[0];
			var childs = targetNode.childNodes; 
			for(var t = childs .length - 1; t >= 0; t--) {
			 targetNode.removeChild(childs[t]);
			  
			}
			if(targetNode.className.match(/CourseBlock(\S*)/)!=null){
				//console.log(targetNode.className.match(/CourseBlock(\S*)/)[0]);
				targetNode.classList.remove(targetNode.className.match(/CourseBlock(\S*)/)[0]);
			}
		}
	}
}


var WeekData = 
	[{
		value: '1',
		text: '第1周'
	}, {
		value: '2',
		text: '第2周'
	}, {
		value: '3',
		text: '第3周'
	}, {
		value: '4',
		text: '第4周'
	}, {
		value: '5',
		text: '第5周'
	}, {
		value: '6',
		text: '第6周'
	}, {
		value: '7',
		text: '第7周'
	}, {
		value: '8',
		text: '第8周'
	}, {
		value: '9',
		text: '第9周'
	}, {
		value: '10',
		text: '第10周'
	},
	{
		value: '11',
		text: '第11周'
	},
	{
		value: '12',
		text: '第12周'
	},{
		value: '13',
		text: '第13周'
	},{
		value: '14',
		text: '第14周'
	},{
		value: '15',
		text: '第15周'
	},{
		value: '16',
		text: '第16周'
	},{
		value: '17',
		text: '第17周'
	},{
		value: '18',
		text: '第18周'
	},{
		value: '19',
		text: '第19周'
	},{
		value: '20',
		text: '第20周'
	}];