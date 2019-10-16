import functions from "./functions.js";
import { calculator } from "./functions.js";
import { calculate } from "./functions.js";
import { arrays } from "./functions.js";
import { province } from "./functions.js";

// **********
//
// Add the event listeners
//

idNumber.addEventListener("change", () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});

add.addEventListener("click", calculator.addButtonClick);
subtract.addEventListener("click", calculator.subButtonClick);
divide.addEventListener("click", calculator.divButtonClick);
multiply.addEventListener("click", calculator.multButtonClick);
clear.addEventListener("click", calculator.clear);

calcTax.addEventListener("click", calculate.taxButtonClick);
reset.addEventListener("click", calculate.reset);

addArr.addEventListener("click", arrays.addArrayButton);
showArr.addEventListener("click", arrays.showArrayButton);
totalArr.addEventListener("click", arrays.totalArrayButton);
clearArr.addEventListener("click", arrays.clearArrayButton);

provinceLookupBtn.addEventListener("click", province.findProvinceButton);
