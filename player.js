


const playersArr = [];

function display(cardPlayer) {



    const tableBody = document.getElementById('player-list');
    tableBody.innerHTML = '';


    // if (cardPlayer.length>5) {
    //     alert('already selected five player !!');
    //     // tr.appendChild(li);
    //     return;

    // }
    // else {
        




    // }

//     for (let i = 0; i < cardPlayer.length; i++) {

//         const name = playersArr[i].playersName;

//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <th>${i + 1} </th>
//             <td>${name}</td>
          
//           `;

//         tableBody.appendChild(tr);

//     }

// }

function addplayercard(element) {

    element.disabled = true;
    const playersName = element.parentNode.parentNode.children[0].innerText;

    const playerObject = {
        playersName: playersName

    }
    playersArr.push(playerObject);

    document.getElementById('total-count').innerText = playersArr.length;

    display(playersArr);
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const sectectedTextElement = document.getElementById('total-count');
    const sectectedTextElementString = sectectedTextElement.innerText;
    const sectectedTextElementResult = parseFloat(sectectedTextElementString);

    const inputFieldElement = document.getElementById('input-field');
    const inputFieldElementString = inputFieldElement.value;
    const previusFieldAmount = parseFloat(inputFieldElementString);
    const newFieldAmount = previusFieldAmount * sectectedTextElementResult;


    const expensesTextElement = document.getElementById('sum-amount');
    const expensesTextElementString = expensesTextElement.innerText;
    const expensesTextElementResult = parseFloat(expensesTextElementString);

    const sumTotalAmount = expensesTextElementResult + newFieldAmount;

    expensesTextElement.innerText = sumTotalAmount;

    inputFieldElement.value = '';
})


function elementFieldId(fieldId) {

    const inputFieldElement = document.getElementById(fieldId);
    const inputFieldElementString = inputFieldElement.value;
    const fieldElementAmount = parseFloat(inputFieldElementString);
    inputFieldElement.value = '';
    return fieldElementAmount;
}


function inputTextElementId(elementText) {

    const textElement = document.getElementById(elementText);
    const textElementString = textElement.innerText;
    const textElementStringConvert = parseFloat(textElementString);

    return textElementStringConvert
}



function getElementById(element, newValue) {

    const inputTextElement = document.getElementById(element);

    inputTextElement.innerText = newValue;
}

document.getElementById('btn-total').addEventListener('click', function () {

    const managerTotalAmount = elementFieldId('manager-amount');

    const coachTotalAmount = elementFieldId('coach-amount');

    const sumElementTotalAmount = inputTextElementId('sum-amount');


    const totalAmount = managerTotalAmount + coachTotalAmount + sumElementTotalAmount;

    const sumTotalAvarage = inputTextElementId('total-avarage');

    const avarage = totalAmount + sumTotalAvarage;

    getElementById('total-avarage', avarage);
})



