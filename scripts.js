
one =  document.getElementById("Day");
two =  document.getElementById("Hour");
three =  document.getElementById("Minute");
four = document.getElementById("second");

 newdate=new String();

function countdown() 
{

document.getElementById("btn").style.visibility="hidden";
check1 =document.getElementById("date").value;

if(check1<1 || check1>31)

	alert("invalid Date");
	


newdate+=check1+" ";

check2 = document.getElementById("month").value;
if(check2<1 || check2>12)

alert("invalid month");



if(check2==1)
newdate+="January ";
else if(check2==2)
newdate+="February ";

else if(check2==3)
newdate+="March ";
else if(check2==4)
newdate+="April ";

else if(check2==5)
newdate+="May ";
else if(check2==6)
newdate+="June ";
else if(check2==7)
newdate+="July ";

else if(check2==8)
newdate+="August ";
else if(check2==9)
newdate+="September ";
else if(check2==10)
newdate+="October ";
else if(check2==11)
newdate+="November ";
else
newdate+="December";


check3 = document.getElementById("year").value;
if(check3<2021)
alert("invalid year");

newdate+=check3;

// document.write(newdate);
calculate(newdate);

}


function calculate()
{

const date1=new Date(newdate);
const date2=new Date();
	
diff=date1-date2;
	


totalsec= diff/1000;
sec= Math.floor(totalsec%60);
totalmin = totalsec/60;

min = Math.floor(totalmin%60);
hour=totalmin/60;
totalhour=Math.floor(hour%24);
totaldays= Math.floor(hour/24);


one.innerHTML=totaldays;
two.innerHTML = totalhour;
three.innerHTML = min;
four.innerHTML = sec;



setInterval(calculate,1000);
}


