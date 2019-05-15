
const calculateBtnB= document.getElementById("btnCalculateAverageB");
const calculateBtnA= document.getElementById("btnCalculateAverageA");
const chartDivDamageB= document.getElementById("piechartDamageB");
const chartDivDamageA= document.getElementById("piechartDamageA");
const chartDivMagicA= document.getElementById("piechartMagicA");
const chartDivMagicB= document.getElementById("piechartMagicB");
const chartDivDefenseA= document.getElementById("piechartDefenseA");
const chartDivDefenseB= document.getElementById("piechartDefenseB");
google.charts.load('current', {'packages':['corechart']});



//FUNCIÓN DE CHART
const drawChart =  (champion,info,top,jungle,mid,adc,support,dataTop,dataJungle,dataMid,dataAdc,dataSupport,chartDiv) => {
  let data = google.visualization.arrayToDataTable([
  [champion, info],
  [top, dataTop],
  [jungle, dataJungle],
  [mid, dataMid],
  [adc, dataAdc],
  [support, dataSupport],]);
let options = {
  fontName:"Scada",
  title:info, 
  slices: {0: {color: "red"}, 1:{color: "green"}, 2:{color: "#19407f"}, 3: {color: "#d1a434"},4:{color: "#f442e5"}},
  backgroundColor: {fill:"transparent"},
  legend:{
    textStyle:{color: "white",
    fontSize: 15,
    bold: true,
   },
   position: 'labeled'},
   titleTextStyle: { color: "white",
    fontSize: 20,
    bold: true,
    }
  }
let chart = new google.visualization.PieChart(chartDiv);
  chart.draw(data, options);
  
}

calculateBtnA.addEventListener("click", ()=>{  //BOTON TEAM 1-A
  let showMyTeamTotal= document.getElementById("averageTeamA");
  let topTotal =document.getElementById("topFirstTeam").value;
  let jungleTotal=document.getElementById("jungleFirstTeam").value;
  let midTotal=document.getElementById("midFirstTeam").value;
  let adcTotal=document.getElementById("adcFirstTeam").value;
  let supportTotal=document.getElementById("supportFirstTeam").value;

  
  let calculateAllAttacks= window.calculateAllAttacks(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateAttackRange= window.calculateAttackRange(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateDefense = window.calculateDefense(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateMagic = window.calculateMagic(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  showMyTeamTotal.innerHTML="";
  showMyTeamTotal.innerHTML+= `<div class="col-md-12 average"><p class="textCalculated">
  ATAQUE<br>
  ${calculateAllAttacks}</p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  ATAQUE MÁGICO<br>
  ${calculateMagic}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  DEFENSA<br>
  ${calculateDefense}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  RANGO DE ATAQUE<br>
  ${calculateAttackRange}
  </p></div>`
  drawChart("CAMPEÓN","ATAQUE",topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata[topTotal].info.attack,window.LOLdata[jungleTotal].info.attack,window.LOLdata[midTotal].info.attack,window.LOLdata[adcTotal].info.attack,window.LOLdata[supportTotal].info.attack,chartDivDamageA);
  drawChart("CAMPEÓN","ATAQUE MÁGICO",topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata[topTotal].info.magic,window.LOLdata[jungleTotal].info.magic,window.LOLdata[midTotal].info.magic,window.LOLdata[adcTotal].info.magic,window.LOLdata[supportTotal].info.magic,chartDivMagicA);
  drawChart("CAMPEÓN","DEFENSA",topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata[topTotal].info.defense,window.LOLdata[jungleTotal].info.defense,window.LOLdata[midTotal].info.defense,window.LOLdata[adcTotal].info.defense,window.LOLdata[supportTotal].info.defense,chartDivDefenseA);

  
});

calculateBtnB.addEventListener("click", ()=>{//BOTON TEAM 2-B
  let showMyTeamTotal= document.getElementById("averageTeamB");
  let topTotal =document.getElementById("topSecondTeam").value;
  let jungleTotal=document.getElementById("jungleSecondTeam").value;
  let midTotal=document.getElementById("midSecondTeam").value;
  let adcTotal=document.getElementById("adcSecondTeam").value;
  let supportTotal=document.getElementById("supportSecondTeam").value;
  
  
  let calculateAllAttacks= window.calculateAllAttacks(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateAttackRange= window.calculateAttackRange(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateDefense = window.calculateDefense(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateMagic = window.calculateMagic(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  showMyTeamTotal.innerHTML="";
  showMyTeamTotal.innerHTML+= `<div class="col-md-12 average"><p class="textCalculated">
  ATAQUE<br>
  ${calculateAllAttacks}</p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  ATAQUE MÁGICO<br>
  ${calculateMagic}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  DEFENSA<br>
  ${calculateDefense}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  RANGO DE ATAQUE<br>
  ${calculateAttackRange}
  </p></div>`
  drawChart("CAMPEÓN","ATAQUE",topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata[topTotal].info.attack,window.LOLdata[jungleTotal].info.attack,window.LOLdata[midTotal].info.attack,window.LOLdata[adcTotal].info.attack,window.LOLdata[supportTotal].info.attack,chartDivDamageB);
  drawChart("CAMPEÓN","ATAQUE MÁGICO",topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata[topTotal].info.magic,window.LOLdata[jungleTotal].info.magic,window.LOLdata[midTotal].info.magic,window.LOLdata[adcTotal].info.magic,window.LOLdata[supportTotal].info.magic,chartDivMagicB);
  drawChart("CAMPEÓN","DEFENSA",topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata[topTotal].info.defense,window.LOLdata[jungleTotal].info.defense,window.LOLdata[midTotal].info.defense,window.LOLdata[adcTotal].info.defense,window.LOLdata[supportTotal].info.defense,chartDivDefenseB);


  
  
});


