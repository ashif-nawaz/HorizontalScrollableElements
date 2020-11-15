let prev = document.getElementById("prev");
let next = document.getElementById("next");
let container = document.getElementsByClassName("container")[0];
let outerContainer = document.getElementsByClassName("outerContainer")[0];

let scrolled = container.clientWidth;

next.addEventListener("click", function(){

      container.scrollBy(scrolled, 0);
    
    // container.scrollLeft = scrolled;
    // scrolled += container.clientWidth;

    // if(scrolled >=container.scrollWidth){
    //     scrolled = container.scrollWidth - container.clientWidth;
    // }
   

});

prev.addEventListener("click", function(){
            container.scrollBy(-scrolled, 0);
        //  scrolled -= container.clientWidth;
        //  container.scrollLeft = scrolled;
         
        //  if(scrolled <= 0){
        //      scrolled = container.clientWidth;
        //  }
         
           

});

prev.addEventListener("dblclick", function(){
         container.scrollLeft = 0;
});

next.addEventListener("dblclick", function(){
         container.scrollLeft = container.scrollWidth;
});
