'use strict'

// もしbtnをクリックしたら文字を置き換える

$(".btn1").click(function(){
    var text1 = $(".q-text1").html();
    $(".q-text1").html(
    text1.replace(/○/g,'い')
    );
});

$(".btn2").click(function(){
    var text2 = $(".q-text2").html();
    $(".q-text2").html(
    text2.replace(/○/g,'ね')
    );
});

$(".btn3").click(function(){
    var text3 = $(".q-text3").html();
    $(".q-text3").html(
    text3.replace(/○/g,'く')
    );
});
