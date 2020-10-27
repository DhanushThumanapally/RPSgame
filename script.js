var rpsList=["rock","paper","scissor"];
function rpsGame(yourchoice)
{
  
    var humanChoice,botChoice;
     humanChoice=yourchoice.id;
     botChoice=rpsList[randToRpsInt()];
     console.log(botChoice);

     results =decideWinner(humanChoice,botChoice);
     console.log(results);
     message =finalMessage(results);
     console.log(message);
    rpsFrontEnd(yourchoice.id,botChoice,message);


}
function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}
function decideWinner(yourchoice,botChoice)
{
   var rpsDatabase={
       'rock': {'scissor':1,'rock':0.5,'paper':0},
       'paper':{'rock':1,'paper':0.5,'scissor':0},
       'scissor':{'rock':0,'paper':1,'scissor':0.5}
   }
   var yourScore=rpsDatabase[yourchoice][botChoice];
   var botScore=rpsDatabase[botChoice][yourchoice];
   return [yourScore,botScore];
}
function finalMessage([yourScore,botScore])
{
    if(yourScore==1)
    {
        return {'message':"You won!",'color':"chartreuse"};
    }
    else if(yourScore==0)
    {
         return {'message':"You Lost!",'color':"red"};
    }
    else{
        return {'message':"You Tied!",'color':"yellow"};
    }  
}
function rpsFrontEnd(humanChoice,botChoice,finalMessage)
{
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    };
    
    //remove
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    document.getElementById('par1').remove();
    document.getElementById('par2').remove();
    document.getElementById('par3').remove();
    

    
    var humanimg=document.createElement('div');
    var botimg=document.createElement('div');
    var message=document.createElement('div');

    humanimg.innerHTML="<img src=" +imageDatabase[humanChoice]+ ">"
    botimg.innerHTML="<img src=" +imageDatabase[botChoice]+ ">"  
   message.innerHTML="<h1 style='color: "+finalMessage['color']+  ";padding:20%; font-size: 4em; text-algin:center;-webkit-text-stroke: 1px #000000; '>"+finalMessage['message']+"</h1>"
   
    document.getElementById('c1').appendChild(humanimg);
 
    document.getElementById('c2').appendChild(message);
    document.getElementById('c3').appendChild(botimg);
}