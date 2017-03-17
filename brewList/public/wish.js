
$('document').ready(function(){
  var wishItem = localStorage.getItem("wishItem1")
  appendWishItem(wishItem)
})

function appendWishItem(wishItem){
  console.log("is this what we want?")
  console.log(wishItem[0])
  $('.wish.fiveDivs.col.s9').html(wishItem)
}
