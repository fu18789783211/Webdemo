const pick_one=document.getElementById('pick-one');
const enter_one=document.getElementById('enter-one');
const enter_swap=document.getElementById('enter-swap');
const display_rate=document.getElementById('rate');
const pick_two=document.getElementById('pick-two');
const enter_two=document.getElementById('enter-two');

function swap_rate(){
    // 用新的变量，通过id访问value
    const pick_onest=pick_one.value ;
    const pick_twost=pick_two.value ;
    fetch("https://open.exchangerate-api.com/v6/latest")
    .then( res => res.json())
    .then(data =>{
        console.log(data);
        const rate=data.rates[pick_twost]/data.rates[pick_onest];
        display_rate.innerText=`1${pick_onest}=${rate}${pick_twost}`;
        enter_two.value=(enter_one.value * (rate)).toFixed(2);
    });
}

pick_one.addEventListener('change',swap_rate());
pick_one.addEventListener('input',swap_rate());
pick_one.addEventListener('change',swap_rate());
pick_one.addEventListener('input',swap_rate());


enter_swap.addEventListener('click',() => {
    const temp=pick_one.value;
    pick_one.value=pick_two.value;
    pick_two.value=temp;
    swap_rate();
});

swap_rate();