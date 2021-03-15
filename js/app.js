'use strict';

let names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck',
'dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

let paths = ['./img/bag.jpg','./img/banana.jpg','./img/bathroom.jpg','./img/boots.jpg','./img/breakfast.jpg',
'./img/bubblegum.jpg','./img/chair.jpg','./img/cthulhu.jpg','./img/dog-duck.jpg',
'./img/dragon.jpeg','./img/pen.jpg','./img/pet-sweep.jpg','./img/scissors.jpg','./img/shark.jpg',
'./img/sweep.png','./img/tauntaun.jpg','./img/unicorn.jpg','./img/usb.gif','./img/water-can.jpg','./img/wine-glass.jpg'];

let object = [];

let img1 = document.getElementById('img1');

let img2 = document.getElementById('img2');

let img3 = document.getElementById('img3');

let imgs = [img1,img2,img3];

function product (name,path){
    this.name = name;
    this.path = path;
    this.shown = 0;
    this.vote = 0;
}


for(let i = 0;i < names.length;i++){
    object.push(new product(names[i],paths[i]));

}

function randomImg (){
        let random = Math.floor(Math.random() * ((names.length-1) - 0));
        return object[random].path;
    } 



function addImg (){
    let n = 0;
    let random1 = randomImg();
    let random2 = randomImg();
    let random3 = randomImg();
    while(n < 1){
        if (random2 != random1){
            n = 1;
        }else{
            random2 = randomImg();
        }
    }

    n = 0;
    while(n < 1){
        if (random3 != random1 && random3 != random2){
            n = 1;
        }else{
            random3 = randomImg();
        }
    }

    for(let i = 0;i < names.length;i++){
        if (random1 == paths[i]){
            object[i].shown += 1;
        }else if (random2 == paths[i]){
            object[i].shown += 1;
        }else if (random3 == paths[i]){
            object[i].shown += 1;
        }
    }

    

    
    img1.setAttribute('src', random1);
    img1.setAttribute('title', random1);


    img2.setAttribute('src', random2);
    img2.setAttribute('title', random2);


    img3.setAttribute('src', random3);
    img3.setAttribute('title', random3);



}

addImg();

let ul = document.getElementById('ul');


let container = document.getElementById('container');


let counter = 0;

container.addEventListener('click',clickHandler);

    function clickHandler(event){
        counter++;
           for(let i = 0;i< paths.length;i++){
               if(object[i].path === event.target.title){
                   object[i].vote++; 
               }
            
           }
           
           console.log(counter);
           if(counter != 25){
        addImg();
    }
    else{
        let main = getElementById('main');
        let div = document.createElement('div');
        let button = document.createElement('button');
        button.setAttribute('resultButton');
        button.textContent = 'show result';
        div.appendChild(button);
        main.appendChild(div);
        button.addEventListener('click' , addResult);
        function addResult (event){
        for (let i = 0;i < object.length;i++){
            let li = document.createElement('li');
            if(object[i].vote == 1){
                if(object[i].shown == 1){
                    li.textContent = object[i].name + ': ' + object[i].vote + ' vote, '+ object[i].shown +' show';
                }else{
                    li.textContent = object[i].name + ': ' + object[i].vote + ' vote, '+ object[i].shown +' shows';
                }
        } else{
            if(object[i].shown == 1){
                li.textContent = object[i].name + ': ' + object[i].vote + ' votes, '+ object[i].shown +' show';
            }else{
                li.textContent = object[i].name + ': ' + object[i].vote + ' votes, '+ object[i].shown +' shows';
            }
        }

        ul.appendChild(li);
        }
    }
        container.removeEventListener('click' , clickHandler);
    }
        }
           
           
        
       
       