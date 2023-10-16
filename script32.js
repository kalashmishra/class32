var arr=[
    {text:"shery_prince", dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",story:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {text:"angle.priya", dp:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",story:"https://images.unsplash.com/photo-1615212814093-f56085658024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {text:"the.mishraji", dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",story:"https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}
]
var clutter="";
var timer;
arr.forEach(function(val,index){
clutter+=`   

<div id="story">
    <div id="outer">
        <div id="inner">
            <div id="image">
                <img id="${index}" src="${val.dp}" alt="">
            </div>
            
        </div>
    </div>
    <h6>${val.text}</h6>

</div>

`
})
document.querySelector("#story1").innerHTML=clutter;
document.querySelector("#story1").addEventListener("click",function(details){
    document.querySelector("#fs-story img").setAttribute("src", arr[details.target.id].story)

   
    document.querySelector("#fs-story").style.display="initial"
    document.querySelector("#progress #growth").style.width="0";
    clearInterval(timer);
    
      runtime();  
    
    
    
    })
    function runtime(){
        var progress=0;
        timer=setInterval(function(){
            progress++ ;
           document.querySelector("#progress #growth").style.width=progress+"%";
           },28);
        setTimeout(function(){
            document.querySelector("#fs-story").style.display="none";
        },3000);
    }    ;



    var data=[{text:"shery", logo:"https://images.unsplash.com/photo-1627215635153-9a450b0e0d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",post:"https://images.unsplash.com/photo-1626969669148-1a098947144b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {text:"angle.priya", logo:"https://images.unsplash.com/photo-1637166108703-7fada66408e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",post:"https://images.unsplash.com/photo-1583487960824-9f0e6bb411e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"},
    {text:"the.mishraji", logo:"https://images.unsplash.com/photo-1615125946109-9455bffbd99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",post:"https://images.unsplash.com/photo-1625587997931-545e4561ada5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80"},
    {text:"aimpratiks", logo:"https://images.unsplash.com/photo-1627484641213-1fa23ed245af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",post:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"}
]
    
var likes="";
data.forEach(function(val,index){
    likes+=`<div id="unpost">
  
    <div id="heading"> 
         <div id="logo">
        <div id="louter">
            <div id="linner">
                <div id="limage">
                     <img src="${val.logo}" alt=""> 
                </div>
            </div>
        </div>
        <div id="text">
            <h5>${val.text}</h5>
         </div>

        
         </div>
         <div id="icon1"><i class="ri-more-2-fill"></i></div>
        </div>


        
            <div id="post">
                <i class="ri-heart-3-fill"></i>

                <img id="${index}" src="${val.post}" alt="">
            </div>
        
        
                    <div id="reaction">            <h1 id="heart">  <i  class="ri-heart-3-line">  </i></h1> 
            <i class="ri-chat-3-line"></i>
           <i class="ri-send-plane-line"></i>
          <h1 id="book"> <i class="ri-bookmark-line"></i></h1>
      
        
    </div>
    

  
             
     
    
   
  

 
       </div>
   `

})
document.querySelector("#mainpost").innerHTML=likes;


var flag=0;
document.querySelector("#mainpost").addEventListener("dblclick",function()
    {
    
  if(flag===0){ 
        document.querySelector("#post>i").style.transform="translate(-50%,-50%) scale(2)"
        document.querySelector("#post>i ").style.opacity="1"
        document.querySelector("#post>i ").style.color="#fff"
        document.querySelector("#heart ").innerHTML=`<i class="ri-heart-3-fill"></i>`
        document.querySelector("#heart ").style.color="red"

    
    flag=1
   }else{ 
    document.querySelector("#post>i ").style.transform="translate(-50%,-50%) scale(1)"
    document.querySelector("#post>i ").style.opacity="0"
   document.querySelector("#heart ").innerHTML=`<i class="ri-heart-3-line"></i>`
  
   document.querySelector("#heart ").style.color="#000"


   flag=0}
    
})


document.querySelector("#heart ").addEventListener("click",function(){
   if(flag===0){
    document.querySelector("#heart ").innerHTML=`<i class="ri-heart-3-fill"></i>`
    document.querySelector("#heart ").style.color="red"
       flag=1
}else{
    document.querySelector("#heart ").innerHTML=`<i class="ri-heart-3-line"></i>`
    document.querySelector("#heart ").style.color="#000"

        flag=0
        

    }



})




 