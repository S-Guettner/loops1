const inputNumber = document.querySelector("#inputNumber")
const inputButton = document.querySelector("#inputButton")
const inputNewString = document.querySelector("#inputNewString")
const buttonNewString = document.querySelector("#buttonNewString")

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

buttonNewString.addEventListener('click', () => {
    words.push(inputNewString.value)
    console.log(words)
})

inputButton.addEventListener('click', () =>{
    let length = parseInt(inputNumber.value)
    words.map((item) => {
        if(length === item.length){
            document.write(item + "<br>")
        }
    })
})