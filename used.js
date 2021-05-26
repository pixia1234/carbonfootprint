//autohide
function check()
{
var jt=document.getElementById("ask23_0");
if(jt.checked==1) $("#more_23").slideUp;
if(jt.checked==0) $("#more_23").slideDown;
}

function caidan(){
	alert("这是一个彩蛋！");
}
function calculate()
{
	var vals=new Array();//每个问题的value
	//计算填空题
	var tk=new Array(1,20,21);
	for(i=0;i<tk.length;i++)
		{
			var tempstr="ask"+tk[i];
			var tempvalue=parseInt(document.getElementById(tempstr).value);
			if(tempvalue>=0)	vals[tk[i]]=tempvalue;
			else 
				{
					alert("第"+tk[i]+"题数据不合法");
					return;
				}
		}
	//填空题计算完成
	
	var qns=new Array(2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,23,24,25);
	//单选题题号
	var chs=new Array(4,4,4,6,4,2,4,5 ,4 ,6 ,4 ,4 , 4, 4, 4, 4, 6, 4, 4, 4, 5);
	//每个单选题有几个选项？
	for(x=0;x<qns.length;x++)
	{
		ischecked=true;
		for(i=0;i<chs[x];i++) 
		{
			var temstring="ask"+qns[x]+"_"+i;
			if(document.getElementById(temstring).checked== 1) 
			{	
				vals[qns[x]]=document.getElementById(temstring).value;
				ischecked=false;
				if(qns[x]==23&&i==0 )//23题特判
					{
						x+=2;//跳过两题
					}
				break;
			}
		}
		if(ischecked) 
			{
				var tempstring="第"+qns[x]+"题未填写";
				alert(tempstring);
				return;
			}
	}
	var tem3=0;
	for(i=0;i<5;i++)
	{
		var temstring="ask3_"+i;
		if(document.getElementById(temstring).checked== 1) 	tem3+=parseInt(document.getElementById(temstring).value);
	}
	vals[3]=tem3;
	var sum=0;
	sum+=parseFloat(0.0686/vals[1]);
	sum+=parseFloat(0.0264*vals[2]/20);
	sum+=parseFloat(vals[3]);
	sum+=parseFloat(vals[4]);
	sum+=parseFloat(vals[5]*0.09);
	sum+=parseFloat(vals[7]*0.06);
	sum+=parseFloat(vals[8]*(vals[9]*vals[10]));
	sum+=parseFloat(vals[11]*25/12);
	sum+=parseFloat(vals[12]*0.006);
	sum+=parseFloat(vals[13]*0.005);
	sum+=parseFloat(vals[14]*0.5*7);
	sum+=parseFloat(vals[15]*0.3*7);
	sum+=parseFloat(vals[16]*0.8*7);
	sum+=parseFloat(vals[17]*0.0001);
	sum+=parseFloat(vals[18]*0.096);
	sum+=parseFloat(vals[19]);
	sum+=parseFloat(vals[20]*0.621*60/52);
	sum+=parseFloat(vals[21]*0.5*30/52);
	sum+=parseFloat(vals[22]*0.0001);
	if(vals[23]!=0)
	{
		sum+=parseFloat(vals[23]*vals[24]*vals[25]*7/365);
	}
	sum=parseInt(sum*100000);
	sum/=100000;
	var temstr="您的碳排放为"+sum+"kg/周";
	alert(temstr);
}





/*
function getResult() {
    var a;
    Family_numbers = parseInt(Person.value);
    LivingArea = parseInt(area.value);
    Electricity = parseInt(Electric.value);
    NaturalGas = parseInt(Gas.value);
    Water = parseInt(H2O.value);
    Aircraft = parseInt(Fly.value);
    Train = parseInt(Trains.value);
    Bus = parseInt(Buses.value);
    Subway = parseInt(Underground.value);
    Taxi = parseInt(Cars.value);
    Elevator = parseInt(Lift.value);
    Bike = parseInt(Bicycle.value);
    Plastic_bags = parseInt(Bags.value);
    Chopsticks = parseInt(Chopstick.value);
    Clothes = parseInt(Dress.value);
    Rice = parseInt(Rice_food.value);
    Meat = parseInt(Pork.value);
    ComputerTime = parseInt(computer.value);
    Email_number = parseInt(email.value);
    Search_number = parseInt(web_search.value);
    book_magazine = parseInt(Book.value);
    paper = parseInt(paper_A4.value);
    if (document.getElementById('Heat').checked == 1) {
        Heating = document.getElementById("Heat").value
    } else {
        Heating = 0
    };
    if (document.getElementById('efficientLights').checked == 1) {
        efficientLight = document.getElementById("efficientLights").value
    } else {
        efficientLight = 0
    }
    if (document.getElementById('turnsOffLights').checked == 1) {
        turnsOffLight = document.getElementById("turnsOffLights").value
    } else {
        turnsOffLight = 0
    }
    if (document.getElementById('equipmentStandby').checked == 1) {
        equipmentStandbyHabit = document.getElementById("equipmentStandby").value
    } else {
        equipmentStandbyHabit = 0
    }
    if (document.getElementById('showers').checked == 1) {
        shower = document.getElementById("showers").value
    } else {
        shower = 0
    }
    if (document.getElementById('recycle_old').checked == 1) {
        recycle = document.getElementById("recycle_old").value
    } else {
        recycle = 0
    }
    if (document.getElementById('solarWaterHeater').checked == 1) {
        solarWater = document.getElementById("solarWaterHeater").value
    } else {
        solarWater = 0
    }
    a = (Electricity * 1.02 * 12 + NaturalGas * 1.7978 * 12 + Water * 0.4512 * 12 + Heating * LivingArea * 35) / Family_numbers + Aircraft * 0.139 + Train * 0.0109 + Bus * 0.032 * 365 + (Subway * 0.125) * 1.02 * 365 + ((Elevator * 3 / 1.5) / 3600) * 15 * 1.02 * 365 + Taxi * 0.24 * 365 + Plastic_bags * 0.0001 * 52 + Chopsticks * (0.0229 + 0.001) * 52 + Clothes * 6.4 * 2 + Rice * 0.047 * 4 * 365 + Meat * 0.6 * 365 + (ComputerTime / 10) * 0.943 * 240 + Email_number * 0.0043 * 365 + Search_number * 0.007 * 365 + book_magazine * 3.3 + paper * 0.015 * 12 - Bike * 0.24 * 365 - efficientLight - turnsOffLight - equipmentStandbyHabit - shower - recycle - solarWater;
    TreeNumber = (a - 2700 * 0.52) / 185;
    if (TreeNumber < 0) {
        TreeNumber = 0
    };
    TotalChineseCO2 = a * 1300000000;
    TotalChineseCO2ppm = TotalChineseCO2 / 2000000000000;
    Temp = 0.015 * TotalChineseCO2ppm;
    CO2_by_ton = a / 1000;
    CO2_by_ton = Math.round(CO2_by_ton * 1000) / 1000;
    TotalChineseCO2 = Math.round(TotalChineseCO2 * 1) / 1;
    TreeNumber = Math.round(TreeNumber * 10) / 10;
    TotalChineseCO2ppm = Math.round(TotalChineseCO2ppm * 100) / 100;
    Temp = Math.round(Temp * 1000) / 1000;
    document.getElementById('result').value = CO2_by_ton;
    document.getElementById('trees').value = TreeNumber;
    document.getElementById('ChineseCO2').value = TotalChineseCO2 / 1000;
    document.getElementById('ChineseCO2ppm').value = TotalChineseCO2ppm;
    document.getElementById('temperature').value = Temp
}*/