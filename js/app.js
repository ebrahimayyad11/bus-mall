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
        let random = Math.floor(Math.random() * ((names.length) - 0));
        return object[random].path;
    } 


    let preImg = [" "," "," "];

function addImg (){
    let n = 0;
    let random1 = randomImg();
    let random2 = randomImg();
    let random3 = randomImg();
    
    while(n < 1){
    if (preImg.includes(random1)){
        random1 = randomImg();
        }else{
            preImg[0] = random1;
            n = 1;
        }
    }

    n = 0;


    while(n < 1){
        if (random2 == random1 || preImg.includes(random2)){
            random2 = randomImg();
        }else{
            preImg[1] = random2;
            n = 1;
        }
    }

    n = 0;
    while(n < 1){
        if (random3 == random1 || random3 == random2 || preImg.includes(random3)){
            random3 = randomImg();
        }else{
            preImg[2] = random3;
            n = 1;
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
        container.removeEventListener('click' , clickHandler);
    
        let main = document.getElementById('main');
        let div = document.createElement('div');
        let button = document.createElement('button');
        button.setAttribute('id','resultButton');
        button.textContent = 'show result';
        div.appendChild(button);
        main.appendChild(div);
        button.addEventListener('click' , addResult);
        function addResult (event){
        for (let i = 0;i < object.length;i++){
            let li = document.createElement('li');
            if(object[i].vote == 1){
                if(object[i].shown == 1){
                    li.textContent = object[i].name + ': ' + object[i].vote + ' vote, '+ object[i].shown +' view';
                }else{
                    li.textContent = object[i].name + ': ' + object[i].vote + ' vote, '+ object[i].shown +' views';
                }
        } else{
            if(object[i].shown == 1){
                li.textContent = object[i].name + ': ' + object[i].vote + ' votes, '+ object[i].shown +' view';
            }else{
                li.textContent = object[i].name + ': ' + object[i].vote + ' votes, '+ object[i].shown +' views';
            }
        }

        ul.appendChild(li);
        }

        
    }
        
        }

        let votes = [];
    let views = [];

    for(let i = 0;i < object.length;i++){
        votes.push(object[i].vote);
        views.push(object[i].shown);
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',
    
        // The data for our dataset
        data: {
            labels: names,
            datasets: [{
                label: 'votes',
                backgroundColor: 'rgba(3, 172, 121, 0.664)',
                borderColor: 'rgba(3, 172, 121, 0.664)',
                data: votes
            },
        {
            label: 'views',
                backgroundColor: 'rgba(2, 88, 63, 0.664)',
                borderColor: 'rgba(2, 88, 63, 0.664)',
                data: views
        }]
            
        },
    
        // Configuration options go here
        options: {}
    });


    }

    


    

           
           
    
       
       