import '../styles/style.scss';

//Input and calc button

const inputElement : HTMLInputElement = document.querySelector("#inputNumber") as HTMLInputElement;
let firstNumber :number = 0;
let secondNumber :number = 0;
let symbol :string = "";


//Symbol math element
const inputPlus: HTMLButtonElement = document.querySelector(".plus") as HTMLButtonElement;
const inputLess: HTMLButtonElement = document.querySelector(".less") as HTMLButtonElement;
const inputDivide: HTMLButtonElement = document.querySelector(".divide") as HTMLButtonElement;
const inputMultiplicative: HTMLButtonElement = document.querySelector(".multiplicative") as HTMLButtonElement;
const inputEqual: HTMLButtonElement = document.querySelector("#equal") as HTMLButtonElement;

const buttonNumber : NodeListOf<HTMLButtonElement> = document.querySelectorAll(".number") as NodeListOf<HTMLButtonElement>;

buttonNumber.forEach((element: HTMLButtonElement) => {
    element.addEventListener('click', (e:MouseEvent) => {
        inputElement.value += element.innerHTML;
    })
})

inputPlus.addEventListener("click", (e:MouseEvent) => {
    firstNumber = parseInt(inputElement.value);
    inputElement.value = "";
    symbol = inputPlus.innerHTML;
})

inputLess.addEventListener("click", (e:MouseEvent) => {
    firstNumber = parseInt(inputElement.value);
    inputElement.value = "";
    symbol = inputLess.innerHTML;
})

inputDivide.addEventListener("click", (e:MouseEvent) => {
    firstNumber = parseInt(inputElement.value);
    inputElement.value = "";
    symbol = inputDivide.innerHTML;
})

inputMultiplicative.addEventListener("click", (e:MouseEvent) => {
    firstNumber = parseInt(inputElement.value);
    inputElement.value = "";
    symbol = inputMultiplicative.innerHTML;
})

inputEqual.addEventListener("click", (e: MouseEvent) => {
    secondNumber = parseInt(inputElement.value);
    inputElement.value = "";

    if (symbol === "+") {
        inputElement.value = (firstNumber + secondNumber).toString();
    }
    else if(symbol === "-") {
        inputElement.value = (firstNumber - secondNumber).toString();
    }
    else if(symbol === "x") {
        inputElement.value = (firstNumber * secondNumber).toString();
    }
    else if(symbol === "/") {
        if (firstNumber > 0 && secondNumber > 0){
            inputElement.value = (firstNumber / secondNumber).toString();
        }
    }
})



