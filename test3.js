$(function(){
  var symbols = ['!', '!', '#', '#', '$', '$', '&', '&','=', '=', '@', '@', '+', '+', '?', '?'
  ];
  for (var i = 0; i <50; i++ ){
      var r1 = Math.floor(Math.random() * symbols.length);
      var r2 = Math.floor(Math.random() * symbols.length);
      var tmp = symbols[r1];
      symbols[r1] = symbols[r2];
      symbols[r2] = tmp;
  }

  for (var i =0; i < symbols.length; i++){
      var ele = $('<div>').text(symbols[i]);
      $('#stage').append(ele);
  }

//クリックされたカードを開く
  //開いたカードが１枚目か２枚目か判断する
  //２枚の絵柄が同じなら、カードを消す
  //違うカードならカードを閉じる


  $('#stage div').on('click', function(){
      var para = $(this).css('background-color');
      console.log(para);

      if(para == 'rgb(255, 255, 255)'){
          $(this).css('background-color','#060');
      } else {
          $(this).css({'background-color':'#fff'});
      }
  });

});
