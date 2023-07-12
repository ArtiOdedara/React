/*
- make html page which have select, color picker, text area and add button 
- in select box put option's like h1,p,div, 
- when user click on add button that selected option element add to the page 
- when user click on added element show them edit and delete option and pre field the input, select and color picker with selected element property 
- if click on delete delete that selected element  
- if click on edit then change should apply to that
- user can only change color and inner text
*/

/*set element ansd action ID for elements*/
let eleId = 0;
let actionId =0;
/*=======================================*/


/*create elements function */
function createElements(){
  let elementVal = document.getElementById("selectElement").value;
  let ele = document.createElement(elementVal);

  //set class and ID of element
  ele.className = 'childElement';
  ele.id = ++eleId;

  //set textarea value and color to element
  let eleValue = document.getElementById("textArea").value;
  if(!eleValue){return alert("Please Enter Some Text!"); }

  let eleColor = document.getElementById("elementColor").value;
  ele.textContent = eleValue;
  ele.style.color = eleColor;

  document.getElementById("elements").appendChild(ele); //append created element to parent Div

  document.getElementById('detailsForm').reset(); //reset form to it's default values
  
  showElement(ele);
}
/*=============================================== */


/*update text and color of element when click on edit button */
document.getElementById("editBtn").addEventListener('click', () => {
  let oldEle = document.getElementById(actionId);
  let newEle = getNewElements(oldEle.tagName, oldEle.id);
  document.getElementById("elements").replaceChild(newEle, oldEle);

  document.getElementById("selectElement").style.display = "block";
  document.getElementById("addBtn").style.display = "block";
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("deleteBtn").style.display = "none";
})
/*============================================================ */


/* delete element when click on delete button */
document.getElementById("deleteBtn").addEventListener('click', () => {
  let toBeDeleteEle = document.getElementById(actionId);
  document.getElementById("elements").removeChild(toBeDeleteEle);

  document.getElementById("selectElement").style.display = "block";
  document.getElementById("addBtn").style.display = "block";
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("deleteBtn").style.display = "none";
  document.getElementById('detailsForm').reset();
})
/*==========================================================*/


/* create new element to replace with old element while updating it */
function getNewElements(eleTagName, elementID){
  let ele = document.createElement(eleTagName);
  ele.className = 'childElement';
  ele.id = elementID ;   
  let eleValue = document.getElementById("textArea").value;
  if(!eleValue){ return alert("Please Enter Some Text!"); }
  let eleColor = document.getElementById("elementColor").value;
  ele.textContent = eleValue;
  ele.style.color = eleColor;
  document.getElementById("elements").appendChild(ele);
  document.getElementById('detailsForm').reset();

  showElement(ele);

  return ele ;
}
/*==================================================================== */


/* show elments details when click on it */
function showElement(ele){
  ele.addEventListener('click', (e) => {
    actionId = e.target.id
  
    document.getElementById("textArea").value = ele.textContent ;
    document.getElementById("elementColor").value =  rgbToHex(ele.style.color);
    
    document.getElementById("selectElement").style.display = "none";
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("editBtn").style.display = "block";
    document.getElementById("deleteBtn").style.display = "block";
  })
}
/*======================================================= */


/* convert RGB value to hex format */
function rgbToHex(rgbValue){
  // Check if the input is in the correct format (rgb(r, g, b))
  if (!/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(rgbValue)) {
    console.error('Invalid RGB color format');
    return null;
  }

  // Extract the numerical values of the RGB components
  const values = rgbValue.match(/\d+/g);
  const r = parseInt(values[0]);
  const g = parseInt(values[1]);
  const b = parseInt(values[2]);

  // Convert the RGB values to hexadecimal
  const hex = '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

  return hex
}
/*===================================================== */