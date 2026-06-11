function analyzeStartup(){

const startupName =
document.getElementById("startupName").value.trim();

const industry =
document.getElementById("industry").value;

const startupIdea =
document.getElementById("startupIdea").value.trim();

if(
startupName === "" ||
industry === "" ||
startupIdea === ""
){
alert("Please fill all fields");
return;
}

document
.getElementById("dashboard")
.classList.remove("hidden");

const score =
Math.floor(Math.random()*31)+70;

document
.getElementById("scoreText")
.innerHTML =
score + "/100";

document
.getElementById("progressBar")
.style.width =
score + "%";

let grade = "C";

if(score >= 95){
grade = "A+";
}
else if(score >= 90){
grade = "A";
}
else if(score >= 85){
grade = "B+";
}
else if(score >= 80){
grade = "B";
}

document
.getElementById("gradeText")
.innerHTML =
"Grade " + grade;

const funding =
Math.floor(Math.random()*90)+10;

const valuation =
Math.floor(Math.random()*50)+10;

const unicorn =
Math.floor(Math.random()*40)+50;

const confidence =
Math.floor(Math.random()*25)+70;

document.getElementById("fundingOffer").innerHTML =
"₹" + funding + " Lakhs";

document.getElementById("valuation").innerHTML =
"₹" + valuation + " Cr";

document.getElementById("unicorn").innerHTML =
unicorn + "%";

document.getElementById("confidence").innerHTML =
confidence + "%";

const market =
Math.floor(Math.random()*20)+75;

const scale =
Math.floor(Math.random()*20)+75;

const revenue =
Math.floor(Math.random()*20)+75;

const investorConf =
Math.floor(Math.random()*20)+75;

document.getElementById("market").innerHTML =
market + "%";

document.getElementById("scale").innerHTML =
scale + "%";

document.getElementById("revenue").innerHTML =
revenue + "%";

document.getElementById("investorConf").innerHTML =
investorConf + "%";

const techComments = [
"Excellent AI architecture with scalability.",
"Technology stack is future ready.",
"Strong engineering execution potential.",
"Technical moat is impressive."
];

const financeComments = [
"I would consider investing ₹50 Lakhs.",
"Revenue model appears sustainable.",
"Good profitability opportunities.",
"Strong long term return potential."
];

const marketingComments = [
"Large customer acquisition opportunity.",
"Excellent market demand indicators.",
"Strong branding potential.",
"Market growth looks promising."
];

const visionComments = [
"Potential future unicorn.",
"Founder vision is compelling.",
"Can become category leader.",
"Long term impact is significant."
];

document.getElementById("tech").innerHTML =
randomItem(techComments);

document.getElementById("finance").innerHTML =
randomItem(financeComments);

document.getElementById("marketing").innerHTML =
randomItem(marketingComments);

document.getElementById("vision").innerHTML =
randomItem(visionComments);

document.getElementById("swot").innerHTML = `

<li><b>Strength:</b> Innovative concept</li>
<li><b>Strength:</b> Growing market demand</li>
<li><b>Weakness:</b> Execution dependency</li>
<li><b>Opportunity:</b> Expansion possibilities</li>
<li><b>Threat:</b> High competition</li>
`;

document.getElementById("deal").innerHTML = `Investment Offer : ₹${funding} Lakhs<br><br>
Equity Asked : ${Math.floor(Math.random()*15)+5}%<br><br>
Expected ROI : ${Math.floor(Math.random()*5)+2}x`;

const reasons =
document.getElementById("reasons");

let verdict =
document.getElementById("verdict");

let risk =
document.getElementById("risk");

if(score >= 90){

risk.innerHTML =
"🟢 LOW RISK";

risk.style.color =
"#16a34a";

reasons.innerHTML = `

<li>Strong AI differentiation</li>
<li>High scalability score</li>
<li>Excellent investor confidence</li>
<li>Strong revenue potential</li>
`;

verdict.innerHTML =
"✅ FUNDED";

verdict.style.color =
"#16a34a";

}
else if(score >= 80){

risk.innerHTML =
"🟡 MEDIUM RISK";

risk.style.color =
"#ca8a04";

reasons.innerHTML = `

<li>Business model is promising</li>
<li>Needs stronger market validation</li>
<li>Customer acquisition strategy required</li>
<li>Conditional funding recommended</li>
`;

verdict.innerHTML =
"🟡 CONDITIONAL INVESTMENT";

verdict.style.color =
"#ca8a04";

}
else{

risk.innerHTML =
"🔴 HIGH RISK";

risk.style.color =
"#dc2626";

reasons.innerHTML = `

<li>High market competition</li>
<li>Weak differentiation</li>
<li>Revenue model unclear</li>
<li>Scalability concerns detected</li>
`;

verdict.innerHTML =
"❌ REJECTED";

verdict.style.color =
"#dc2626";

}

window.reportData = {
startupName,
industry,
score,
grade,
funding,
valuation,
verdict:
verdict.innerText,
reasons:
reasons.innerText
};

}

function randomItem(arr){
return arr[
Math.floor(
Math.random()*arr.length
)
];
}

function downloadReport(){

if(!window.reportData){

alert("Analyze a startup first");
return;

}

const report =

"AI SHARK TANK REPORT\n\n" +

"Startup : " +
window.reportData.startupName +
"\n\n" +

"Industry : " +
window.reportData.industry +
"\n\n" +

"Score : " +
window.reportData.score +
"\n\n" +

"Grade : " +
window.reportData.grade +
"\n\n" +

"Funding Offer : ₹" +
window.reportData.funding +
" Lakhs\n\n" +

"Valuation : ₹" +
window.reportData.valuation +
" Crore\n\n" +

"Verdict : " +
window.reportData.verdict +
"\n\n" +

"Reasons :\n" +
window.reportData.reasons;

const blob =
new Blob(
[report],
{type:"text/plain"}
);

const a =
document.createElement("a");

a.href =
URL.createObjectURL(blob);

a.download =
"AI_Shark_Tank_Report.txt";

a.click();

}
