//*завдання 1
const btn = document.querySelector('[type="submit"]');
const message = document.querySelector('.text')
const one = document.querySelector('.one');
const two = document.querySelector('.two');



btn.addEventListener('click', (e)=>{
    e.preventDefault()
 
        if(one.value && two.value){
        message.textContent = "Обидва поля заповнені";
           }else{
            message.textContent = "Не всі поля заповнені"
           }
})
//* завданння 2

const button = document.querySelector('[type="submit"]');
const mess = document.querySelector('.number')
const first = document.querySelector('.first');



btn.addEventListener('click', (e)=>{
    e.preventDefault()
 
        if(one.value && two.value){
        message.textContent = "Сума більша за 10";
           }else{
            message.textContent = "Сума не більша за 10"
           }
})