$(document).ready(function(){
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("black-background")
    $("#lightBtn").show()
    $("#darkBtn").hide()
  })

  $("button#light").click(function(){
    $("body").removeClass()
    $("body").addClass("light-background")
    $("#darkBtn").show()
    $("#lightBtn").hide()
  })
  

})