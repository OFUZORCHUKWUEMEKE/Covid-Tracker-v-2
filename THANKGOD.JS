// window.addEventListener('load',init)
window.addEventListener('load',init);

window.addEventListener('load',country)


const gif3 = document.querySelector('#gif3')
console.log(gif3)
const open = document.querySelector('#open')
const close = document.querySelector('#close')
const invisible=document.querySelector('.invisible')
const listtt=document.querySelector('.listtt')



open.addEventListener('click',function(){
    invisible.style.top='0vh'
    // open.style.display='block'

     if(invisible.style.top='0vh'){
        close.style.display='block'
    }else{
        close.style.display='none'
     }
})
close.addEventListener('click',function(){
    invisible.style.top='-100vh'
     close.style.display='none'z
})

// console.log(first.children[0])

const texts = ['Ofuzor','Chukwuemeke']
let count =0;
let index = 0;
let currentText='';
let letter = 0; 

(function type(){    
    if(count===texts.length){
        count=0;
    }
    currentText = texts[count];
    letter = currentText.slice(0,++index)

    document.querySelector('.typing').textContent=letter;
    if(letter.length===currentText.length){
        count++;
        index=0;
    }
    setTimeout(type, 400);

}());

function init(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://corona.lmao.ninja/v2/continents?yesterday=true&sort', true)

    xhr.onload= function(){
        if(this.status===200){
            const count =JSON.parse(this.responseText);
            console.log(count)
            console.log(count.deaths)

        document.querySelector('.total_case').innerHTML=count[0].cases+count[1].cases+count[2].cases+count[3].cases+count[4].cases+count[5].cases;
        document.querySelector('.total_recovered').innerHTML=count[0].recovered+count[1].recovered+count[2].recovered+count[3].recovered+count[4].recovered+count[5].recovered;
        document.querySelector('.total_deceased').innerHTML=count[5].deaths+count[4].deaths+count[3].deaths+count[2].deaths+count[1].deaths+count[0].deaths;
        const counter=document.querySelector('#counter')
        console.log(counter)
        const counter2=document.querySelector('#counter2')
        console.log(counter2)
        const counter3=document.querySelector('#counter3')
        console.log(counter3)
        const gif1 = document.querySelector('#gif1')
        const gif2 = document.querySelector('#gif2')
        const gif3 = document.querySelector('#gif3')
      
      


        if(counter.innerHTML==''&& counter2.innerHTML=='' && counter3.innerHTML==''){
              
            gif1.style.display='block'
            gif2.style.display='block'
            gif3.style.display='block'
        }else{
               gif1.style.display='none'
               gif2.style.display='none'
               gif3.style.display='none'
        }
                 
       
        }
    
    }
    xhr.send()
    
}
function country(){
    const xhr1 = new XMLHttpRequest();

    xhr1.open('GET','https://corona.lmao.ninja/v2/continents?yesterday=true&sort', true)

    xhr1.onload=function(){
        if(this.status===200){
            const count=JSON.parse(this.responseText)
            console.log(count)
            // AFRICA
 
            document.querySelector('.ttaf').innerHTML=count[4].cases;
            document.querySelector('.traf').innerHTML=count[4].recovered;
            document.querySelector('.tdaf').innerHTML=count[4].deaths;
           
            const  gif10= document.querySelector('.gif10')
            const  gif11= document.querySelector('.gif11')

            const  gif12= document.querySelector('.gif12')



            if(ptag=''){
                gif10.style.display='block'
                gif10.style.display='block'
                gif10.style.display='block'
            }else{
                gif10.style.display='none'
                gif11.style.display='none'
                gif12.style.display='none'
            }
            //EUROPE
            document.querySelector('.tceu').innerHTML=count[3].cases;
            document.querySelector('.treu').innerHTML=count[3].recovered;
            document.querySelector('.tdeu').innerHTML=count[3].deaths;
           
            const  gif13= document.querySelector('.gif13')
            const  gif14= document.querySelector('.gif14')

            const  gif15= document.querySelector('.gif15')



            if(ptag=''){
                gif13.style.display='block'
                gif14.style.display='block'
                gif15.style.display='block'
            }else{
                gif13.style.display='none'
                gif14.style.display='none'
                gif15.style.display='none'
            }
            //SOUTH AMERICA
            document.querySelector('.tcsa').innerHTML=count[2].cases;
            document.querySelector('.trsa').innerHTML=count[2].recovered;
            document.querySelector('.tdsa').innerHTML=count[2].deaths;
           
            const  gif16= document.querySelector('.gif16')
            const  gif17= document.querySelector('.gif17')

            const  gif18= document.querySelector('.gif18')



            if(ptag=''){
                gif16.style.display='block'
                gif17.style.display='block'
                gif18.style.display='block'
            }else{
                gif16.style.display='none'
                gif17.style.display='none'
                gif18.style.display='none'
            }
            //NORTH AMERICA
            document.querySelector('.tcna').innerHTML=count[1].cases;
            document.querySelector('.trna').innerHTML=count[1].recovered;
            document.querySelector('.tdna').innerHTML=count[1].deaths;
           
            const  gif19= document.querySelector('.gif19')
            const  gif20= document.querySelector('.gif20')

            const  gif21= document.querySelector('.gif21')



            if(ptag=''){
                gif19.style.display='block'
                gif20.style.display='block'
                gif21.style.display='block'
            }else{
                gif19.style.display='none'
                gif20.style.display='none'
                gif21.style.display='none'
            }
            //ASIA
            document.querySelector('.tcas').innerHTML=count[0].cases;
            document.querySelector('.tras').innerHTML=count[0].recovered;
            document.querySelector('.tdas').innerHTML=count[0].deaths;
           
            const  gif22= document.querySelector('.gif22')
            const  gif23= document.querySelector('.gif23')

            const  gif24= document.querySelector('.gif24')



            if(ptag=''){
                gif22.style.display='block'
                gif23.style.display='block'
                gif24.style.display='block'
            }else{
                gif22.style.display='none'
                gif23.style.display='none'
                gif24.style.display='none'
            }
            //AUSTRALIA
            document.querySelector('.tcau').innerHTML=count[5].cases;
            document.querySelector('.trau').innerHTML=count[5].recovered;
            document.querySelector('.tdau').innerHTML=count[5].deaths;
           
            const  gif25= document.querySelector('.gif25')
            const  gif26= document.querySelector('.gif26')

            const  gif27= document.querySelector('.gif27')



            if(ptag=''){
                gif25.style.display='block'
                gif26.style.display='block'
                gif27.style.display='block'
            }else{
                gif25.style.display='none'
                gif26.style.display='none'
                gif27.style.display='none'
            }
            

        }
    }
    xhr1.send()
}  
// submit button


const form = document.querySelector('#form')
console.log(form)
form.addEventListener('submit',function(e){
    e.preventDefault();
    const  inputttt=document.querySelector('#input').value;
    console.log(inputttt)
    const outpuuu=document.querySelector('.outputtt');
    const spinnergif=document.querySelector('.last')
    if(outpuuu.innerHTML=''){
        spinnergif.style.display='block'
    }


    const xhr2 = new XMLHttpRequest();

    xhr2.open('GET','https://corona.lmao.ninja/v2/countries/'+inputttt+'?yesterday&strict&query%20');

    xhr2.onload = function(){
        if(this.status==200 && inputttt!=''){
            const names2 = JSON.parse(this.responseText);
            console.log(names2)
            console.log(names2.countryInfo.flag)
          

             
            const render = document.createElement('div')
            render.className='html'
            render.innerHTML=` <div class="ITISDONE">
            <img src="${names2.countryInfo.flag}" alt="">
            <div class="with">
                <h2 class="hhhh" style="color: white;">Total Cases:</h2>
                <p class="hhht" id="cc">${names2.cases}</p>
                <h2 class="hhhh" style="color: red;">Total deaths:</h2>
                <p  class="hhht" id="dd">${names2.deaths}</p>
                <h2 class="hhhh" style="color: steelblue;">Total Recovered:</h2>
                <p  class="hhht" id="rr">${names2.recovered}</p>
                <h2 class="hhhh" style="color:white;">Total tests conducted:</h2>
                <p  class="hhht" >${names2.tests}</p>
                <h2 class="hhhh" style="color:#48dbfb;">Population:</h2>
                <p  class="hhht"  style="color:#48dbfb;" >${names2.population}</p>
              
            </div>
          
        </div>`  

        
          outpuuu.appendChild(render)
          console.log(outpuuu.children.length)
          console.log(outpuuu.firstElementChild)
           if (outpuuu.children.length>1){
               outpuuu.firstElementChild.remove()
           }
          

         
        }
      
        else {
         
           
            
            const render2 = document.createElement('div')
            render2.className='html2'
           render2.innerHTML='<h2>KINDLY INSERT THE NAME OF YOUR COUNTRY IN THE INPUT FORM</h2>'

           const outpuuu2=document.querySelector('.outputtt')

           outpuuu2.appendChild(render2)
           setTimeout(() => {
               render2.remove()
           }, 3000);
          
          
          
        }
      
    }
    xhr2.send()
})

