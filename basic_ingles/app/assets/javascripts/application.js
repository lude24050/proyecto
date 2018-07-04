// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require_tree .

$("document").ready(function (){
  $("img").hide();
  $("button").click(function(){
    var texto =$(this).text();
    var text2 = $(this).attr("class");
    if(texto==$("#correcta").text()){
      $("#img1").show();
    }else{
      $("#img2").show();
    }

    console.log($("#correcta").text());

    //location.reload(true);
    setTimeout("location.reload()", 1000);

  });
  $("#cover-6").click(function(){
    alert("hola");
  });
  //////////////////////////////////////////////////77
  $('#boton').on("click", function(){
    for(var x=1; x<=5; x++){
      if($("#"+x+"").val() == $("#1"+x+"").text()){
      }else {
        var mal = 1;
      }
      console.log($("#"+x+"").val());
      console.log($("#1"+x+"").text());
    }

    if(mal == 1){
      alert("eres malo");
    }
  });
  //para
  $("#boton2").click(function(){
    $(".desva").hide();
    console.log("devanecer");
  });

//para el ahorcado
  cont = 0;
  $("#h1").hide();
  $("#h2").hide();
  $("#h3").hide();
  $("#boton3").click(function(){
    pal = $("#pal").text();
    pal2= "";

    for(var x=0; x<pal.length; x++){
      if($("#a"+x+"")[0].tagName == "INPUT"){
        pal2+=$("#a"+x+"").val();
      }else{
        pal2+=$("#a"+x+"").text();
      }
    }

    if(pal2 == pal){
      alert("Ganaste")
    }else {
      cont+=1
      $("#h"+cont+"").show();
    }

    if(cont == 3){
      alert("Perdiste");
    }
    console.log(pal2);
  });
  $("#pal").hide(4000);
});
