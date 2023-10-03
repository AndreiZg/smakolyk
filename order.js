let list = document.getElementsByClassName('list');
let currentid = 1;
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let four = document.getElementById('four');
let five = document.getElementById('five');
let all = [first,second,third,four,five];
let save = document.getElementById('save');
let next = document.getElementById('next');
let x;
let l;
let m;
let grn = document.getElementById('grn');
let grn2 = document.getElementById('grn2');
let grn3 = document.getElementById('grn3');
let grn4 = document.getElementById('grn4');
let grn5 = document.getElementById('grn5');
let mny = [grn,grn2,grn3,grn4,grn5]

function activeList(){
    for(l of list){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentid = event.target.id;
    console.log(currentid);
    for(x of all){
        x.classList.add('off');
        for(m of mny){
            m.classList.add('off');
            if(currentid == 1){
                x.classList.remove('on');
                first.classList.add('on');
                save.style.visibility = 'hidden';
                grn.classList.remove('off');
            } else if(currentid == 2){
                x.classList.remove('on');
                second.classList.add('on');
                save.style.visibility = 'hidden';
                grn2.classList.remove('off');
            } else if(currentid == 3){
                x.classList.remove('on');
                third.classList.add('on');
                save.style.visibility = 'hidden';
                grn3.classList.remove('off');
            } else if(currentid == 4){
                x.classList.remove('on');
                four.classList.add('on');
                save.style.visibility = 'hidden';
                grn4.classList.remove('off');
            } else if(currentid == 5){
                x.classList.remove('on');
                five.classList.add('on');
                save.style.visibility = 'visible';
                grn5.classList.remove('off');
            }}}}


