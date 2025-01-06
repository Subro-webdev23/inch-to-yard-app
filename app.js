const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const inchYardButton = document.querySelector('#inch-yard');
const saveButton = document.querySelector('#save');
const head1 = document.querySelector('#head1');
const head2 = document.querySelector('#head2');

const inputLavels = ["Inch","Yard"];
const buttonTexts = ["Inch to Yard ->", "Yard to Inch ->"];

// Button and Label Texts
label1.textContent = inputLavels[0];  // Correctly assigns "Inch"
label2.textContent = inputLavels[1];  // Correctly assigns "Yard"
inchYardButton.textContent = buttonTexts[0]; // Assigns "Inch to Yard"

// Toggle Conversion Direction
inchYardButton.addEventListener('click', () => {
    if(inchYardButton.textContent === buttonTexts[0]){
        inchYardButton.textContent = buttonTexts[1];
        [label1.textContent, label2.textContent] = [label2.textContent, label1.textContent];

    }else{
        inchYardButton.textContent = buttonTexts[0];
        [label1.textContent, label2.textContent] = [label2.textContent, label1.textContent];

    }
})

function convert1(){
    // When Inpur left
    const in1 = input1.value;
    
    if(inchYardButton.textContent === buttonTexts[0]){
        input2.value = (in1 / 36).toFixed(2);
    }else{
        input2.value = (in1 * 36).toFixed(2);
    }

}
function convert2(){
        // when Input Right
        const in2 = parseFloat(input2.value);
        if(inchYardButton.textContent === buttonTexts[1]){
            input1.value = (in2 / 36).toFixed(2);
        }else{
            input2.value = (in2 * 36).toFixed(2);
        }
}

// Perform Conversion on Input Change
input1.addEventListener('input', convert1);
input2.addEventListener('input', convert2);





















// Conversion Function
function convert() {
    const valu = parseFloat(input1.value);
    if (inchYardButton.textContent === buttonTexts[0]) {
        // Inch to Yard
        input2.value = (valu / 36).toFixed(2);// toFixed(2) eta dara dosomik ar ky ta songkha nibo seta bujhay
    } else {
        // Yard to Inch
        input2.value = (valu * 36).toFixed(2);
    }
}








