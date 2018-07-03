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
});
