//定义事件变量
const pick_one = document.getElementById('pick-one');
const enter_one = document.getElementById('enter-one');
const enter_swap = document.getElementById('enter-swap');
const display_rate = document.getElementById('rate');
const pick_two = document.getElementById('pick-two');
const enter_two = document.getElementById('enter-two');
let list = {};

(function () {
  fetch("http://localhost:3000/exchage-rate/list")
  .then(one=>one.json())
    .then((data = {}) => {
        list = data;
      let html = '';
      for (let key in data) {
        html += `<option value="${data[key]}-${key}">${key}</option> \n`
      }
      pick_one.innerHTML = html;
      pick_two.innerHTML = html;
      caculateRate();
    })
})()

function caculateRate () {
    const pick_onest=pick_one.value.split('-') ;
    const pick_twost=pick_two.value.split('-')  ;
    pick_onest[0] = parseInt(pick_onest[0]);
    pick_twost[0] = parseInt(pick_twost[0]);

    const rate= pick_twost[0] / pick_onest[0];
    display_rate.innerText=`1 ${pick_onest[1]}=${rate} ${pick_twost[1]}`;//显示
    enter_two.value=(enter_one.value * (rate)).toFixed(2);
}

//swap事件
enter_swap.addEventListener('click',() => {
    const temp=pick_one.value;
    pick_one.value=pick_two.value;
    pick_two.value=temp;
    caculateRate();
});

pick_one.addEventListener('change', () => {
  caculateRate();
})


pick_two.onchange = () => {
  caculateRate();
}
