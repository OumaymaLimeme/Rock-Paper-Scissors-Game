const computerchoice=document.getElementById('computer-choice')
const userchoice=document.getElementById('user-choice')
const results=document.getElementById('result')
const possiblechoices=document.querySelectorAll('button')
let user
let computer
possiblechoices.forEach(possiblechoice=>possiblechoice.addEventListener('click',(e)=>{
     user=e.target.id
     userchoice.innerHTML=user
     generatecomputerchoice()
     getresult()
    }))
    function generatecomputerchoice() {
        const randomnumber=Math.floor(Math.random()*possiblechoices.length)
       if(randomnumber==1){
        computer='rock'
       }
       if(randomnumber==2){
        computer='paper'
       }
       if(randomnumber==3){
        computer='scissors'
       }
       computerchoice.innerHTML=computer
     }
     function getresult(){
        if(computer===user){
            result='its a draw!'
        }
        if(computer==='rock' && user==='paper'){
            result='You Win !'
        }
        if(computer==='rock' && user==='scissors'){
            result='You Lost !'
        }
        if(computer==='paper' && user==='scissors'){
            result='You Win !'
        }
        if(computer==='paper' && user==='rock'){
            result='You lost !'
        }
        if(computer==='scissors' && user==='rock'){
            result='You Win !'
        }
        if(computer==='scissors' && user==='paper'){
            result='You Lost !'
        }
        results.innerHTML=result
        
     }
