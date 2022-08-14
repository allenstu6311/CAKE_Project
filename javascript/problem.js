$(".answerall").hide();



$(".answer").click(function () {

  $(this).next().slideToggle();

  if($(this).find("strong").text()=="▼"){
 
    $(this).children("strong").text("▲").animate({
      rotate:"-360deg"
    },500)
  
  }else{
   
    $(this).children("strong").text("▼").animate({
      
      rotate:"0deg"
    },500)
  }

});

let time = 0;

$(".pro").click(function(){
    $(this).addClass("line").siblings().removeClass()
})


// ============================



  let winWidth = $(window).width();
  if(winWidth<1024){
    $(".list-nav-ul").hide()
    $(".list-nav-control").click(function(){
      if($(this).find("strong").text()=="+"){
        $(".list-nav-ul").slideDown()
        $(this).children("strong").text("–").animate({
          rotate:"-360deg"
        },500)
      }else{
        $(".list-nav-ul").slideUp()
        $(this).children("strong").text("+").animate({
         
          rotate:"0deg"
        },500)
      }
    })
    
  }else{
    $(".list-nav-ul").show()
  }







// ==============================

$(".second").hide()
$(".three").hide()

$("#problem1").click(function(){
  $(".first").show()
  $(".second").hide()
  $(".three").hide()
})

$("#problem2").click(function(){
  $(".first").hide()
  $(".second").show()
  $(".three").hide()
})
$("#problem3").click(function(){
  $(".first").hide()
  $(".second").hide()
  $(".three").show()
})