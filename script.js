$ (function(){
  var onChangeInput = function(e){
    var inputText = e.target.value.toLowerCase();
    console.log (inputText);
    if (inputText === "") {
      $(".photo").show();
    } else {
      $(".photo").hide();
      var search = "."+ inputText;
      $(search).show();
    }

  };
  $("input").change(onChangeInput);
});
