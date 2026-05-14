/* ########################### HOME PAGE CODE JAVASCRIPT ########################### */

/* FOR TYPING EFFECT HERO TITLE */

const text = "Empowering Your Health And Wealth";
let i = 0;
const type = () => {
    const typing = document.getElementById("typing");
    if (i < text.length){
        typing.textContent += text[i++];
        setTimeout(type,50);
    }
};
window.onload = type;



/* ########################### FITNESS TOOLS LIST PAGE ########################### */



/* BMI CALCULATOR CODE */ /*@@@@@@@@@@*/


function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  if (height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    BMIMaker(bmi.toFixed(2));
  }
}


/* BMI MARKER */


function BMIMaker(bmi) {
  const marker = document.getElementById('bmiMarker');
  const label = document.getElementById('bmiLabel');

  const minBMI = 10, maxBMI = 40;
  const barWidth = document.getElementById('bmiBar').offsetWidth;

  // Calculate pixel position
  const percentage = (bmi - minBMI) / (maxBMI - minBMI);
  const targetX = barWidth * percentage;

  // Animate marker after a short delay
  setTimeout(() => {
    marker.style.transform = `translateX(${targetX - 1}px)`;
  }, 300);

  // Category
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.5) category = 'Normal';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Extremely Obese';
  label.textContent = `Your BMI is ${bmi} – ${category}`;
}


/* BFP CALCULATOR CODE */ /*@@@@@@@@@@*/

function handleGenderChangeBFP() {

  const gen = document.getElementById('gender').value;
  const result = document.getElementById("bfp-result");

  function calculateBFPm() {
    const bmi = parseFloat(document.getElementById("bmi").value);
    const age = parseFloat(document.getElementById("age").value);
    const result = document.getElementById("bfp-result");
    if (bmi > 0 && age > 0) {
      const bfp = ((1.20 * bmi) + (0.23 * age) - 16.2);
      result.textContent = `Your BFP is ${bfp.toFixed(1)}`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }

  }

  function calculateBFPf() {
    const bmi = parseFloat(document.getElementById("bmi").value);
    const age = parseFloat(document.getElementById("age").value);
    const result = document.getElementById("bfp-result");

    if (bmi > 0 && age > 0) {
      const bfp = ((1.20 * bmi) + (0.23 * age) - 5.4);
      result.textContent = `Your BFP is ${bfp.toFixed(1)}`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }
  }

  if (gen === "male") {
    console.log("Male selected");
    // Call your male-specific function here
    calculateBFPm();
  } else if (gen === "female") {
    console.log("Female selected");
    // Call your female-specific function here
    calculateBFPf();
  } else {
    result.textContent = `Please select gender`;
  }
}




/* LEAN BODY MASS CALCULATOR */ /*@@@@@@@@@@*/

function handleGenderChangeLBM(value) {
  const result = document.getElementById("lbm-result");
  const gen = document.getElementById('gender').value;

  function calculateLBMm() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("lbm-result");
    if (height > 0 && weight > 0) {
      const lbm = ((0.407 * weight) + (0.267 * height) - 19.2);
      result.textContent = `Your LBM is ${lbm.toFixed(1)} kg`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }

  }

  function calculateLBMf() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("lbm-result");
    if (height > 0 && weight > 0) {
      const lbm = ((0.252 * weight) + (0.473 * height) - 48.3);
      result.textContent = `Your LBM is ${lbm.toFixed(1)} kg`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }
  }

  if (gen === "male") {
    console.log("Male selected");
    // Call your male-specific function here
    calculateLBMm();
  } else if (gen === "female") {
    console.log("Female selected");
    // Call your female-specific function here
    calculateLBMf();
  } else {
    result.textContent = `Please select gender`;
  }
}




/* BASAL METABOLIC RATE CALCULATOR */ /*@@@@@@@@@@*/

function handleGenderChangeBMR(value) {

  const gen = document.getElementById('gender').value
  const result = document.getElementById("bmr-result");


  function calculateBMRm() {
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("bmr-result");
    if (height > 0 && weight > 0) {
      const bmr = (10*weight + 6.25*height - 5*age - 161);
      result.textContent = `Your BMR is ${bmr.toFixed(1)} kcal/day`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }

  }

  function calculateBMRf() {
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("bmr-result");
    if (height > 0 && weight > 0) {
      const bmr = (10*weight + 6.25*height - 5*age + 5);
      result.textContent = `Your BMR is ${bmr.toFixed(1)} kcal/day`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }
  }

  if (gen === "male") {
    console.log("Male selected");
    // Call your male-specific function here
    calculateBMRm();
  } else if (gen === "female") {
    console.log("Female selected");
    // Call your female-specific function here
    calculateBMRf();
  } else {
    result.textContent = "Please enter valid inputs.";
  }
}



/* TDEE CALCULATOR */ /*@@@@@@@@@@*/

function handleGenderChangeTDEE(value) {

  const gen = document.getElementById('gender').value
  const af = document.getElementById('actfact').value


  function calculateTDEEm(x) {
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("tdee-result");
    if (height > 0 && weight > 0 && age > 0) {
      const tdee = (10*weight + 6.25*height - 5*age + 5)*x;
      result.textContent = `Your TDEE is ${tdee.toFixed(1)} kcal/day`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }
  }

  function calculateTDEEf(x) {
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("tdee-result");
    if (height > 0 && weight > 0 && age > 0) {
      const tdee = (10*weight + 6.25*height - 5*age + 161)*x;
      result.textContent = `Your TDEE is ${tdee.toFixed(1)} kcal/day`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }
  }

  if (gen === "male") {
    console.log("Male selected");

    if (af === "sed") {
      calculateTDEEm(1.2);
    }
    else if (af === "lig") {
      calculateTDEEm(1.375);
    }
    else if (af === "mod") {
      calculateTDEEm(1.55);
    }
    else if (af === "act") {
      calculateTDEEm(1.725);
    }
    else if (af === "sact") {
      calculateTDEEm(1.9);
    } else {
      console.log("Activity factor not selected")
    }
  
  } else if (gen === "female") {
    console.log("Female selected");
    
    if (af === "sed") {
      calculateTDEEf(1.2);
    }
    else if (af === "lig") {
      calculateTDEEf(1.375);
    }
    else if (af === "mod") {
      calculateTDEEf(1.55);
    }
    else if (af === "act") {
      calculateTDEEf(1.725);
    }
    else if (af === "sact") {
      calculateTDEEf(1.9);
    } else {
      console.log("Activity factor not selected")
    }
  
  } else {
    console.log("No gender selected");
  }
}

/* ONE REP MAX CALCULATOR */

function calculate1RM() {
  const weight = parseFloat(document.getElementById("weight").value);
  const reps = parseFloat(document.getElementById("reps").value);
  const result = document.getElementById("1RM-result");

  if (weight > 0 && reps > 0) {
    const ORM = weight * (1 + reps/30);
    result.textContent = `One-Rep Max : ${ORM.toFixed(1)} kg`;
  } else {
    result.textContent = "Please enter valid inputs.";
  }
}



/* TARGET HEART CALCULATOR */

function calculateTHR() {
  const age = parseFloat(document.getElementById("age").value);
  const rhr = parseFloat(document.getElementById("rhr").value);
  const mhr = 220 - age;
  const result = document.getElementById("thr-result");
  const fgoal = document.getElementById('fgoal').value


  if ( fgoal === "vlight") {
    console.log("Very light");
    result.textContent = `Target Heart Rate : ${((mhr - rhr) * 0.50) + rhr} - ${((mhr - rhr) * 0.60) + rhr} BPM`;
  } else if (fgoal === "light") {
    console.log("Light");
    result.textContent = `Target Heart Rate : ${((mhr - rhr) * 0.60) + rhr} - ${((mhr - rhr) * 0.70) + rhr} BPM`;
  } else if (fgoal === "mod"){
    console.log("Moderate")
    result.textContent = `Target Heart Rate : ${((mhr - rhr) * 0.70) + rhr} - ${((mhr - rhr) * 0.80) + rhr} BPM`;
  } else if (fgoal === "hard"){
    console.log("Hard")
    result.textContent = `Target Heart Rate : ${((mhr - rhr) * 0.80) + rhr} - ${((mhr - rhr) * 0.90) + rhr} BPM`;
  } else if (fgoal === "maxm"){
    console.log("Maximum effort")
    result.textContent = `Target Heart Rate : ${((mhr - rhr) * 0.90) + rhr} - ${((mhr - rhr) * 1) + rhr} BPM`;
  } else {
    console.log("No intensity selected");
  }
}



/*  VO2 MAX CALCULATOR */

function calculateVO2() {
  const distance = parseFloat(document.getElementById("dist").value);
  const result = document.getElementById("VO2-result");

  if (distance > 0) {
    const VO2 = (distance - 504.9)/44.73;
    result.textContent = `Estimated VO2 Max : ${VO2.toFixed(2)} ml/kg/min`;
  } else {
    result.textContent = "Please enter valid inputs.";
  }
}



/* RUNNING PACE CALCULATOR */

function calculateRPC() {
  const distance = parseFloat(document.getElementById("dist").value);
  const time = parseFloat(document.getElementById("time").value);
  const result = document.getElementById("rpc-result");
  const dist_unit = document.getElementById("km-ml").value;

  if (distance > 0 && time > 0) {
    if (dist_unit === 'kilo') {
      result.textContent = `Estimated Pace : ${time/distance} min/km`;
    }
    else if (dist_unit === 'mile') {
      result.textContent = `Estimated Pace : ${time/distance} min/mile`;
    }
  } else {
    result.textContent = `Please enter valid inputs.`;
  }
}



/* WEIGHT LOSS CALCULATOR */

function calculateWLC() {

  const cweight = parseFloat(document.getElementById("cweight").value);
  const tweight = parseFloat(document.getElementById("tweight").value);
  const tdee = parseFloat(document.getElementById("tdee").value);
  const time = parseFloat(document.getElementById("tdur").value);

  const result1 = document.getElementById("wlc1-result");
  const result2 = document.getElementById("wlc2-result");
  const result3 = document.getElementById("wlc3-result");
  const result4 = document.getElementById("wlc4-result");
  const result5 = document.getElementById("wlc5-result");



  const wtol = cweight - tweight;
  const tcal = wtol * 7700; // 7700 is the calories equivalent to 1 kg
  const daidef = tcal/(time*7);
  const targetcal = tdee - daidef;
  
  if (cweight > 0 && tweight > 0 && tdee > 0 && time > 0) {
    result1.textContent = `${wtol} kg`;
    result2.textContent = `${tcal.toFixed(0)} kcal`;
    result3.textContent = `${time} weeks | ${time*7} days`;
    result4.textContent = `${daidef.toFixed(0)} kcal/day`;
    result5.textContent = `${targetcal.toFixed(0)} kcal`;
    }

  document.getElementById('result-table').style.display='table';
}



/* IDEAL BODY WEIGHT CALCULATOR */

function handleGenderChangeIBW() {

  const gender = document.getElementById('gender').value;

  function calculateIBWm() {
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("ibw-result");
    if (height > 0) {
      const ibw = (50 + 0.91 * height - 152.4);
      result.textContent = `Your Ideal Body Mass is ${ibw.toFixed(1)} kg`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }

  }

  function calculateIBWf() {
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("ibw-result");
    if (height > 0) {
      const ibw = (45.5 + 0.91 * height - 152.4);
      result.textContent = `Your Ideal Body Mass is ${ibw.toFixed(1)} kg`;
    } else {
      result.textContent = "Please enter valid inputs.";
    }

  }

  if (gender === "male") {
    console.log("Male selected");
    // Call your male-specific function here
    calculateIBWm();
  } else if (gender === "female") {
    console.log("Female selected");
    // Call your female-specific function here
    calculateIBWf();
  } else {
    console.log("No gender selected");
  }
}



/* WATER INTAKE CALCULATOR */

function resultWI() {
  const af = document.getElementById('actfact').value;
  const result = document.getElementById('wi-result');
  const cli = document.getElementById('climate').value;


  function calculateWI(data,cli) {
    const weight = parseFloat(document.getElementById("weight").value);
    if (weight > 0) {
      const wi = (weight * 0.033) + data + cli;
    result.textContent = `Daily water intake : ${wi.toFixed(1)} litres per day.`;
    }
  }

  if (af === "sed") {
    if (cli === "tro"){
      calculateWI(0,0.7);
    } else if (cli === "dry") {
      calculateWI(0,1);
    } else if (cli === "tem") {
      calculateWI(0,0.2);
    } else if (cli === "con") {
      calculateWI(0,0.5);
    } else if (cli === "pol") {
      calculateWI(0,0);
    }

  } else if (af === "lig") {
    if (cli === "tro"){
      calculateWI(0.3,0.7);
    } else if (cli === "dry") {
      calculateWI(0.3,1);
    } else if (cli === "tem") {
      calculateWI(0.3,0.2);
    } else if (cli === "con") {
      calculateWI(0.3,0.5);
    } else if (cli === "pol") {
      calculateWI(0.3,0);
    }
    
  } else if (af === "mod") {
    if (cli === "tro"){
      calculateWI(0.5,0.7);
    } else if (cli === "dry") {
      calculateWI(0.5,1);
    } else if (cli === "tem") {
      calculateWI(0.5,0.2);
    } else if (cli === "con") {
      calculateWI(0.5,0.5);
    } else if (cli === "pol") {
      calculateWI(0.5,0);
    }
    
  } else if (af === "act") {
    if (cli === "tro"){
      calculateWI(0.7,0.7);
    } else if (cli === "dry") {
      calculateWI(0.7,1);
    } else if (cli === "tem") {
      calculateWI(0.7,0.2);
    } else if (cli === "con") {
      calculateWI(0.7,0.5);
    } else if (cli === "pol") {
      calculateWI(0.7,0);
    }
  } else if (af === "sact") {
    if (cli === "tro"){
      calculateWI(1,0.7);
    } else if (cli === "dry") {
      calculateWI(1,1);
    } else if (cli === "tem") {
      calculateWI(1,0.2);
    } else if (cli === "con") {
      calculateWI(1,0.5);
    } else if (cli === "pol") {
      calculateWI(1,0);
    }
  } else {
    result.textContent = 'Please select / enter all the values';
  }
}







/* ########################### FINANCE TOOLS LIST PAGE ########################### */


let userLocale = navigator.language;

/* FIXED DEPOSIT CALCULATOR */

function calculateFD() {
  const result1 = document.getElementById('fdm-result');
  const result2 = document.getElementById('fdi-result');
  const result3 = document.getElementById('fdtm-result');
  const result4 = document.getElementById('fdty-result');

  const p = parseFloat(document.getElementById('pamt').value);
  const r = parseFloat(document.getElementById('aint').value)/100;
  const t = parseFloat(document.getElementById('tper').value);
  const unit = document.getElementById('fin-unit').value;
  const cf = document.getElementById('comfre').value;


  function calculateFDm(n) {
    let fd = p * Math.pow(1 + r/n,n*(t/12));
    const intr = fd - p;
    if (fd > 0 && intr > 0) {
      result1.textContent = `${parseFloat(fd.toFixed(2)).toLocaleString(userLocale)}`;
      result2.textContent = `${parseFloat(intr.toFixed(2)).toLocaleString(userLocale)}`;
      result3.textContent = `${(t).toFixed(1)}`;
      result4.textContent = `${(t/12).toFixed(1)}`;
    }
  }

  function calculateFDy(n) {
    let fd = p * Math.pow(1 + r/n,n*(t));
    const intr = fd - p;
    if (fd > 0 && intr > 0) {
      result1.textContent = `${parseFloat(fd.toFixed(2)).toLocaleString(userLocale)}`;
      result2.textContent = `${parseFloat(intr.toFixed(2)).toLocaleString(userLocale)}`;
      result3.textContent = `${(t*12).toFixed(1)}`;
      result4.textContent = `${t.toFixed(1)}`;
    }
  }


  if (unit === "mons") {

    if (cf === "ann") {
      calculateFDm(1);
    } else if (cf === "hyr") {
      calculateFDm(2);
    } else if (cf === "qua") {
      calculateFDm(4);
    } else if (cf === "mon") {
      calculateFDm(12);
    } else if (cf === "dai") {
      calculateFDm(365);
    }


  } else if (unit === "yrs") {
  
    if (cf === "ann") {
      calculateFDy(1);
    } else if (cf === "hyr") {
      calculateFDy(2);
    } else if (cf === "qua") {
      calculateFDy(4);
    } else if (cf === "mon") {
      calculateFDy(12);
    } else if (cf === "dai") {
      calculateFDy(365);
    }
  }

  document.getElementById('result-table').style.display="table";

}



/* SAVING ACCOUNT INTEREST CALCULATOR */

function calculateSAI() {
  const result = document.getElementById('sai-result');

  const p = parseFloat(document.getElementById('pamt').value);
  const r = parseFloat(document.getElementById('aint').value)/100;
  const t = parseFloat(document.getElementById('tper').value);
  const unit = document.getElementById('fin-unit').value;
  const cf = document.getElementById('comfre').value;


  function calculateFDm(n) {
    const amt = p * Math.pow(1 + (r/n),n*(t/12));
    const intr = amt - p;
    if (amt > 0 && intr > 0) {
      result.textContent = `Interest Earned : ${parseFloat(intr.toFixed(2)).toLocaleString(userLocale)}`;
    }
  }

  function calculateFDy(n) {
    const amt = p * Math.pow(1 + (r/n),n*t);
    const intr = amt - p;
    if (amt > 0 && intr > 0) {
      result.textContent = `Interest Earned : ${parseFloat(intr.toFixed(2)).toLocaleString(userLocale)}`;
    }
  }


  if (unit === "mons") {

    if (cf === "ann") {
      calculateFDm(1);
    } else if (cf === "hyr") {
      calculateFDm(2);
    } else if (cf === "qua") {
      calculateFDm(4);
    } else if (cf === "mon") {
      calculateFDm(12);
    }


  } else if (unit === "yrs") {
  
    if (cf === "ann") {
      calculateFDy(1);
    } else if (cf === "hyr") {
      calculateFDy(2);
    } else if (cf === "qua") {
      calculateFDy(4);
    } else if (cf === "mon") {
      calculateFDy(12);
    }
  }
}



/* EMI CALCULATOR */

function calculateEMI() {
  const result = document.getElementById('emi-result');

  const p = parseFloat(document.getElementById('pamt').value);
  const r = parseFloat(document.getElementById('aint').value)/1200;
  const t = parseFloat(document.getElementById('tper').value);
  const unit = document.getElementById('fin-unit').value;

  function calculateEMIm() {
    const emi = ( p * r * Math.pow(1 + r,t) )/( Math.pow(1 + r,t) - 1 );
    if (emi > 0) {
      result.textContent = `Estimated EMI : ${parseFloat(emi.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }

  function calculateEMIy() {
    const emi = ( p * r * Math.pow(1 + r,t*12) )/( Math.pow(1 + r,t*12) - 1 );
    if (emi > 0) {
      result.textContent = `Estimated EMI : ${parseFloat(emi.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }

  if (unit === "mons") {
    calculateEMIm();
  
  } else if (unit === "yrs") {
    calculateEMIy();
  }
}



/* LOAN AFFORDABILITY CALCULATOR */

function calculateLA() {
  const result1 = document.getElementById('aem-result');
  const result2 = document.getElementById('alm-result');
  const result3 = document.getElementById('tre-result');
  const result4 = document.getElementById('tint-result');

  const mi = parseFloat(document.getElementById('mi').value);
  const me = parseFloat(document.getElementById('me').value);
  const t = parseFloat(document.getElementById('tper').value);
  const r = parseFloat(document.getElementById('intr').value)/12/100;

  let aemi = mi - me;
  let remi = (aemi * ( Math.pow(1 + r,t) - 1 )) / (r * Math.pow(1 + r,t));
  const intr = (aemi*t) - remi;

  result1.textContent = `${parseFloat(aemi.toFixed(0)).toLocaleString(userLocale)}`;
  result2.textContent = `${parseFloat(remi.toFixed(1)).toLocaleString(userLocale)}`;
  result3.textContent = `${parseFloat((aemi*t).toFixed(1)).toLocaleString(userLocale)}`;
  result4.textContent = `${parseFloat(intr.toFixed(1)).toLocaleString(userLocale)}`;

  document.getElementById('result-table').style.display="table";

}



/* LOAN TENURE CALCULATOR */

function calculateLT() {
  const result1 = document.getElementById('mon-result');
  const result2 = document.getElementById('yrs-result');

  const p = parseFloat(document.getElementById('pamt').value);
  const e = parseFloat(document.getElementById('emi').value);
  const r = parseFloat(document.getElementById('aint').value)/1200;
  
  const lt = Math.log(e/(e - p * r))/Math.log(1+r);
  if (lt > 0) {
    result1.textContent = `${lt.toFixed(1)}`
    result2.textContent = `${(lt/12).toFixed(1)}`;
  }

  document.getElementById('result-table').style.display="table";
}



/* SIP CALCULATOR */

function calculateSIP() {

  const result = document.getElementById('sip-result');

  const p = parseFloat(document.getElementById('pamt').value);
  const r = parseFloat(document.getElementById('aint').value)/1200;
  const t = parseFloat(document.getElementById('tper').value);
  const unit = document.getElementById('fin-unit').value;

  function calculateSIPm() {
    const fv = p * (1 + r) * (Math.pow(1 + r,t) - 1)/r;
    if (fv > 0) {
      result.textContent = `Future value : ${parseFloat(fv.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }

  function calculateSIPy() {
    const fv = p * (1 + r) * (Math.pow(1 + r,(t*12)) - 1)/r;
    if (fv > 0) {
      result.textContent = `Future value : ${parseFloat(fv.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }

  if (unit === "mons") {
    calculateSIPm();
  
  } else if (unit === "yrs") {
    calculateSIPy();
  }
}


/* LUMPSUM INVESTMENT CALCULATOR */

function calculateLSI() {

  const result = document.getElementById('lsi-result');

  const p = parseFloat(document.getElementById('pamt').value);
  const r = parseFloat(document.getElementById('aint').value)/100;
  const t = parseFloat(document.getElementById('tper').value);
  const unit = document.getElementById('fin-unit').value;

  function calculateLSIm() {
    const fv = p * Math.pow(1 + r,(t/12));
    if (fv > 0) {
      result.textContent = `Future value : ${parseFloat(fv.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }

  function calculateLSIy() {
    const fv = p * Math.pow(1 + r,t);
    if (fv > 0) {
      result.textContent = `Future value : ${parseFloat(fv.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }

  if (unit === "mons") {
    calculateLSIm();
  
  } else if (unit === "yrs") {
    calculateLSIy();
  }
}


/* COMPOUND INTEREST CALCULATOR */

function calculateCI() {

  const result1 = document.getElementById('ci1-result');
  const result2 = document.getElementById('ci2-result');


  const p = parseFloat(document.getElementById('pamt').value);
  const r = parseFloat(document.getElementById('aint').value)/100;
  const t = parseFloat(document.getElementById('tper').value);
  const unit = document.getElementById('fin-unit').value;
  const cf = document.getElementById('comfre').value;


  function calculateCIm(n) {
    const fv = p * Math.pow(1 + r/n,n*(t/12));
    const cint = fv - p;
    if (fv > 0 && cint > 0) {
      result1.textContent = `Total Amount : ${parseFloat(fv.toFixed(1)).toLocaleString(userLocale)}`;
      result2.textContent = `Compound Interest : ${parseFloat(cint.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }

  function calculateCIy(n) {
    const fv = p * Math.pow(1 + r/n,n*t);
    const cint = fv - p;
    if (fv > 0 && cint > 0) {
      result1.textContent = `Total Amount : ${parseFloat(fv.toFixed(1)).toLocaleString(userLocale)}`;
      result2.textContent = `Compound Interest : ${parseFloat(cint.toFixed(1)).toLocaleString(userLocale)}`;
    }
  }


  if (unit === "mons") {

    if (cf === "ann") {
      calculateCIm(1);
    } else if (cf === "hyr") {
      calculateCIm(2);
    } else if (cf === "qua") {
      calculateCIm(4);
    } else if (cf === "mon") {
      calculateCIm(12);
    }


  } else if (unit === "yrs") {
  
    if (cf === "ann") {
      calculateCIy(1);
    } else if (cf === "hyr") {
      calculateCIy(2);
    } else if (cf === "qua") {
      calculateCIy(4);
    } else if (cf === "mon") {
      calculateCIy(12);
    }
  }
}


/* RETIREMENT CORPUS CALCULATOR */

function calculateRC() {
  const resultm = document.getElementById('rc-result');
  const result1 = document.getElementById('mer-result');
  const result2 = document.getElementById('aer-result');
  const result3 = document.getElementById('red-result');

  const c = parseFloat(document.getElementById('cage').value);
  const r = parseFloat(document.getElementById('rage').value);
  const lf = parseFloat(document.getElementById('exlf').value);
  const mn = parseFloat(document.getElementById('mnex').value);
  const ir = parseFloat(document.getElementById('exir').value)/100;
  const pr = parseFloat(document.getElementById('expr').value)/100;

  const ytr = r-c;
  const yir = lf-r;
  const rx = pr - ir;
  
  const mer = mn * Math.pow(1 + ir, ytr);
  const aer = mer * 12;
  const corpus = aer * ((1 - Math.pow(1+rx, (-(yir))))/rx);

  if (r > c) {
    result1.textContent = `${parseFloat(mer.toFixed(0)).toLocaleString(userLocale)}`;
    result2.textContent = `${parseFloat(aer.toFixed(0)).toLocaleString(userLocale)}`;
    result3.textContent = `${yir}`;
    resultm.textContent = `Retirement Corpus : ${parseFloat(corpus.toFixed(0)).toLocaleString(userLocale)}`;
  } else {
    resultm.textContent = `Already retired.`
  }

  document.getElementById('result-table').style.display="table";

}


/* GOAL-BASED INVESTMENT CALCULATOR */

function calculateGBI() {

  const result1 = document.getElementById('riy-result');
  const result2 = document.getElementById('ti-result');
  const result3 = document.getElementById('tie-result');

  const g = parseFloat(document.getElementById('gamt').value);
  const t = parseFloat(document.getElementById('time').value);
  const c = parseFloat(document.getElementById('csg').value);
  const e = parseFloat(document.getElementById('ear').value);
  const f = document.getElementById('fin-unit').value;

  if (f === 'mons') {
    const r = e/1200;
    const n = t * 12;

    const fvls = c * Math.pow( 1 + r,n);
    const p = (g - fvls)/((Math.pow(1+r,n) - 1)/r);

    const ti = c + (p * n);
    const intr = ti - c;

    result1.textContent = `${parseFloat(p.toFixed(0)).toLocaleString(userLocale)} / month`;
    result2.textContent = `${parseFloat(ti.toFixed(0)).toLocaleString(userLocale)}`;
    result3.textContent = `${parseFloat(intr.toFixed(0)).toLocaleString(userLocale)}`;
    
  } else if (f === "yrs"){

    const r = e/1200;
    const n = t;

    const fvls = c * Math.pow( 1 + r,n);
    const p = (g - fvls)/((Math.pow(1+r,n) - 1)/r);

    const ti = c + (p * n);
    const intr = ti - c;

    result1.textContent = `${parseFloat(p.toFixed(0)).toLocaleString(userLocale)} / month`;
    result2.textContent = `${parseFloat(ti.toFixed(0)).toLocaleString(userLocale)}`;
    result3.textContent = `${parseFloat(intr.toFixed(0)).toLocaleString(userLocale)}`;
    
  }

  document.getElementById('result-table').style.display="table";


}