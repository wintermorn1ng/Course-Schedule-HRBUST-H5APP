var myapp = {};

myapp.regExp={
	notEmptyReg:/\S/,
	emailReg:/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
	mobileReg:/^1[3|4|5|7|8]\d{9}$/
}

myapp.dataType = {};

myapp.dataType.userInfo={
	UserName:null,
	UserPass:null
}
myapp.dataType.cookie = null;
myapp.dataType.isLogin=false;


var baseUrl = "http://192.168.199.203:8080";
var api_url={};
api_url.getCaptchaUrl = baseUrl+"/api/getCaptcha";
api_url.getCaptchaImgUrl = baseUrl+"/api/getCaptchaImg";
api_url.getCaptchaCheckUrl = baseUrl+"/api/checkCaptcha";
api_url.loginUrl = baseUrl+"/api/login";
api_url.getTableUrl = baseUrl+"/api/getNowWeekTable";
api_url.getWeekTableByWeek = baseUrl+"/api/getWeekTableByWeek";


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
		text: '第17周'
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
function setBeginWeek(){
	let nowDay = new Date();
	let nowWeek = nowDay.getDay();
	if(nowWeek==0)nowWeek=7;
	let nowDayZhouyi = new Date();
	nowDayZhouyi.setDate(nowDay.getDate()-nowWeek);
	return nowDayZhouyi;
};
	
function getNowWeekDate(beginDay,beginWeek){
	//console.log("fuck:"+beginDay+" * "+beginWeek);
	let nowDay = new Date();
	//console.log(nowDay);
	let pos = nowDay-new Date(beginDay);
	pos = Math.abs(pos);
	//console.log(pos);
	let iDays = Math.floor(pos/(24 * 3600 * 1000));
	//console.log(iDays);
	return (parseInt(iDays/7)+beginWeek);
};