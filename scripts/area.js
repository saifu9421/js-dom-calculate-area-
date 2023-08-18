function calculateTriangleArea(){
    //   get triangle base value
    const baseField =  document.getElementById('triangle-base');
    const baseValueText =  baseField.value;
    const base =  parseFloat(baseValueText);
    baseField.value ='';
  
    // get triangle height value 
       
    const heightField = document.getElementById('triangle-height');
    const heightValueText =  heightField.value;
    const height =  parseFloat(heightValueText);
    heightField.value='';
  
     const area  =  .5 * base * height;
    //    show triangle area

    const areaSpan = document.getElementById('triangle-area');
      areaSpan.innerText =  area;
      
};


function calculateRectangleArea(){
    // get rectangle width value
     const widthField = document.getElementById('rectangle-width');
     const widthTextValue =  widthField.value;
     const width =  parseFloat(widthTextValue);
   
    //   get rectangle length value 
    const lengthField =  document.getElementById('rectangle-length');
    const lengthTextValue =  lengthField.value;
    const length =  parseFloat(lengthTextValue);

    // calculate area 

    const area = width *  length;
    const rectangleArea  =  document.getElementById('rectangle-area');
    rectangleArea.innerText =  area;
};

 

// reusable function --> reduce duplicate code ;
function calculateParallelogramArea(){
     const base  =  getInputValue('parallelogram-base');
     const height  =  getInputValue('parallelogram-height');
       const area  =  base *  height;

       const parallelogramArea =  document.getElementById('parallelogram-area');
       parallelogramArea.innerText = area;

};


// Rhombus  

   function calculateRhombusArea(){
    const d1  =  getInputValue('rhombus-d1');
    const d2 =  getInputValue('rhombus-d2');
    const area  =  .5 * d1 * d2;
      const rhombusArea =  document.getElementById('rhombus-area');
      rhombusArea.innerText =  area;
   };


   // pentagon 

function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b =  getInputValue('pentagon-b');
    const area  =  .5 * p * b;
    const pentagonArea =  document.getElementById('pentagon-area');
    pentagonArea.innerText =  area;

};

//   EllipseArea:

function calculateEllipseArea(){
        const a  = getInputValue('ellipse-a');
        const b  = getInputValue('ellipse-b');
        const area =  Math.PI* a * b;
        const ellipseArea  = document.getElementById('ellipse-area');
        ellipseArea.innerText = area;
};


//  common function   get input value field in number 
  function getInputValue(fieldId){
     const inputField  =  document.getElementById(fieldId);
     const inputValueText =  inputField.value;
     const value =    parseFloat(inputValueText);
     return value;
  }