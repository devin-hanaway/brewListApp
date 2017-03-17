
$('document').ready(function(){
  for (var i = 0; i < localStorage.length; i++) {
  var wishItem = localStorage.getItem(localStorage.key(i))
  var keyItem = localStorage.key(i)
  var wishDiv =  '<li>'+'<input type="checkbox" for="'+keyItem+'"value="checkbox">'+''+wishItem+'</li>'

  // '<label id="'+keyItem+'" class="wishItem">'+' '+wishItem+'</label>'+



  console.log(wishDiv);
  appendWishItem(wishDiv)

  }

})

function appendWishItem(wishDiv){
  console.log("is this what we want?")
  console.log(wishDiv)
  $('.wish.fiveDivs.col.s9').append(wishDiv)
}
