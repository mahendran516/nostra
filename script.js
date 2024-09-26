
var sidenavbar=document.querySelector(".side-navbar")



function showNavbar()
{
sidenavbar.style.left="0"
}
function closeNavbar()
{
    sidenavbar.style.left="-60%"

}

// discount 
var discount=document.querySelector(".discount")
var disicon=document.querySelector(".discount-icon")

disicon.addEventListener("click",function(){
    disicon.parentElement.remove()
})

// slider

var left=document.querySelector(".left-btn")
var slideimg=document.querySelector(".slider-image")
var right=document.querySelector(".right-arrow")
var margin=0

right.addEventListener("click",

    function(){
        margin=margin+100
    
        if(margin>200)
        {
            margin=0
            slideimg.style.marginLeft=0;
        }
        else{
            slideimg.style.marginLeft="-"+margin+"vw";
        }
        
       
    
    }
    )
    
    left.addEventListener("click",
    
    function(){
    
        if(margin==0)
        {
           
            margin=200
            slideimg.style.marginLeft="-"+margin+"vw";
        }
        else{
    
            margin=margin-100
        slideimg.style.marginLeft="-"+margin+"vw";
        }
        
        
    }
    )

// most wanted

document.querySelectorAll('.most-wanted-list').forEach(item => {


    const liked = item.querySelector("#like")
    const redlike = item.querySelector("#likebtn")

  
        
       
        liked.addEventListener("click", () => {
            redlike.style.display = "block";
            liked.style.display = "none";
           
        });
        
        redlike.addEventListener("click", () => {
            liked.style.display = "block";
            redlike.style.display = "none";
            
        });        
    });

