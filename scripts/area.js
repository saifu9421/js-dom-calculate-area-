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
    console.log("pa la la la la");
}