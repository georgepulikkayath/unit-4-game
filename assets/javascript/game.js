

$(document).ready(function(){
  var sc1;
  var sc2;
  var sc3;
  var sc4;
  var ap;
  var cp;
  var chp;
  var cd;
  var i=1;
  var st;
  var l1;
  var l2;
  var ag;
   $("#score1").text(120);
   $("#score2").text(100);
   $("#score3").text(150);
   $("#score4").text(100);
   
   sc1=$("#score1").text();
   sc2=$("#score2").text();
   sc3=$("#score3").text();
   sc4=$("#score4").text();
   hg1=$("#hid1").val();
   hg2=$("#hid2").val();
   hg3=$("#hid3").val();
   hg4=$("#hid4").val();
   
   
    $(".img1").on("click", function() {
        $(".pict").empty();
        $(".val").empty();
        $( ".hed" ).replaceWith( $( ".txt" ) );
         $('.pict').prepend('<img class="img1" src="assets/images/download1.jpg" prepended="yes"/>');
         $( ".val" ).append('<div><label id="score1">120</label></div>');
   $("#hed1").append("<img class='img2' src='assets/images/download2.jpg'/>");
   $("#hed2").append("<img class='img3' src='assets/images/download3.jpg'/>");   
     $("#hed3").append("<img class='img4' src='assets/images/download4.jpg'/>"); 
     $("#score5").text(sc2);
     $("#score6").text(sc3);
     $("#score7").text(sc4);
     $("#hd1").val(hg2);
     $("#hd2").val(hg3);
     $("#hd3").val(hg4);

    });
     $(".img2").on("click",function(){
        $(".pict").empty();
        $(".val").empty();
        $( ".hed" ).replaceWith( $( ".txt" ) );
        $('.pict').prepend('<img class="img2" src="assets/images/download2.jpg" prepended="yes"/>');
        $( ".val" ).append('<div><label id="score1">100</label></div>');
     $("#hed1").append("<img class='img1' src='assets/images/download1.jpg'/>");
     $("#hed2").append("<img class='img3' src='assets/images/download3.jpg'/>");   
    $("#hed3").append("<img class='img4' src='assets/images/download4.jpg'/>"); 
    $("#score5").text(sc1);
    $("#score6").text(sc3);
    $("#score7").text(sc4);
    $("#hd1").val(hg1);
    $("#hd2").val(hg3);
    $("#hd3").val(hg4);
     });
   $(".img3").on("click",function(){
     $(".pict").empty();
     $(".val").empty();
    $( ".hed" ).replaceWith( $( ".txt" ) );
    $('.pict').prepend('<img class="img3" src="assets/images/download3.jpg" prepended="yes"/>');
    $( ".val" ).append('<div><label id="score1">150</label></div>');
$("#hed1").append("<img class='img1' src='assets/images/download1.jpg'/>");
 $("#hed2").append("<img class='img2' src='assets/images/download2.jpg'/>");   
 $("#hed3").append("<img class='img4' src='assets/images/download4.jpg'/>"); 
    $("#score5").text(sc1);
     $("#score6").text(sc2);
     $("#score7").text(sc4);
     $("#hd1").val(hg1);
     $("#hd2").val(hg2);
     $("#hd3").val(hg4);
   } );
   $(".img4").on("click",function(){
   $(".pict").empty();
   $(".val").empty();
    $( ".hed" ).replaceWith( $( ".txt" ) );
    $('.pict').prepend('<img class="img4" src="assets/images/download4.jpg" prepended="yes"/>');
    $( ".val" ).append('<div><label id="score1">100</label></div>');
 $("#hed1").append("<img class='img1' src='assets/images/download1.jpg'/>");
 $("#hed2").append("<img class='img2' src='assets/images/download2.jpg'/>");   
 $("#hed3").append("<img class='img3' src='assets/images/download3.jpg'/>");
 $("#score5").text(sc1);
     $("#score6").text(sc2);
     $("#score7").text(sc3);
     $("#hd1").val(hg1);
     $("#hd2").val(hg2);
     $("#hd3").val(hg3);
    });
    $('#hed1').on('click','img',function(){
      if($("#rest").children("div").length<1) {
        
    
        $("#rest").append($(this).parent("#hed1"));

      } 
    });
    $("#hed2").on('click','img',function(){
     
      if($("#rest").children("div").length<1) {
      
        $("#rest").append($(this).parent("#hed2"));
       }
    });
    $("#hed3").on('click','img',function(){
  
      if($("#rest").children("div").length<1)  {
        $("#rest").append($(this).parent("#hed3"));
       }
    });
    
   
   
    $(".bt").on("click",function(){
      l1=$(".main-container >div").length;
    l2=$("#rest >div").length;
    if((l1<=0)&&(l2<=0))
    {
      alert("you won");
      ag=$("#rest").html('<button id="reset">Reset</button>');
    }
      chp= $("#rest>div>label").html();
    
      cp=$("#rest>div>input[type='hidden']").val();
      console.log(cp);
    ap=6*i;

    
    $( "#rest1" ).html("<p>you attacked for </p>"+ap);
    $("#rest2").html("<p>the defender attacked for</p>"+cp);
    st=$("#score1").text();
    console.log(st);
    st=st-cp;
    $("#score1").html(st);
    cd=chp-ap;
    $("#rest>div>label").html(cd);
    i++;
    if(sc1<=0){
      $("#rest1").html("<p>you failed in the game");
      $("#rest").append("<button>submit</button");      

    }
    if(cd<0){
      $("#rest").empty();
      $("#rest2").html("<p>you defeated the defender player</p>");
    }
    
    
    });
     

});