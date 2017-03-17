
$('document').ready(function(){
  for (var i = 0; i < localStorage.length; i++) {
  var wishItem = localStorage.getItem(localStorage.key(i))
  appendWishItem(wishItem)

  }

})

function appendWishItem(wishItem){
  console.log("is this what we want?")
  console.log(wishItem)
  $('.wish.fiveDivs.col.s9').append(wishItem)
}
