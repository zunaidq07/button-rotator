// let btnEls = document.querySelectorAll('.buttonClass');
//     let btn = document.querySelector('#btn5');

// let newEl = document.createElement('p');
// newEl.textContent = 'welcome'
// document.body.appendChild(newEl)
// btn.addEventListener('click', () => {
// newEl.textContent = ' elcome'
//   let ar0 = btnEls[3].textContent;
//   let ar1 = btnEls[0].textContent;
//   let ar2 = btnEls[1].textContent;
//   let ar3 = btnEls[6].textContent;
//   let ar5 = btnEls[2].textContent;
//   let ar6 = btnEls[7].textContent;
//   let ar7 = btnEls[8].textContent;
//   let ar8 = btnEls[5].textContent;

//   btnEls[0].textContent = ar0;
//   btnEls[1].textContent = ar1;
//   btnEls[2].textContent = ar2;
//   btnEls[3].textContent = ar3;
//   btnEls[5].textContent = ar5;
//   btnEls[6].textContent = ar6;
//   btnEls[7].textContent = ar7;
//   btnEls[8].textContent = ar8;
// })

let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.getElementById("btn5");

btn5.onclick=function() {
    nums.unshift(nums.pop());
    for (i=0; i<=7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML=nums[i];
    }
}
