
var wishItemArr = []

$('document').ready(function(){
  for (var i = 0; i < localStorage.length; i++) {
  var wishItem = localStorage.getItem(localStorage.key(i))
  var keyItem = localStorage.key(i)
  var parseWishDiv = JSON.parse(wishItem)
  itemArr(parseWishDiv)
  console.log(wishItemArr)

  var wishDiv =  '<li>'+'<input type="checkbox" for="'+keyItem+'" value="checkbox">'+''+parseWishDiv+'</li>'

  // '<div class="suggestedBeer row" >'+
  //      '<img class="imageOne col l3" src="'+ logo +'">'+
  //      '<div class="profile col l6" >'+
  //        '<div class="name' +number+'" id="'+number+'">'+ name+',' +'  '+'</div>'+
  //        '<div class="style '+number+'" id="'+number+'">'+ style+',' +'  '+'</div>'+
  //        '<div class="abv '+number+'" id="'+number+'">'+ abv+" ABV"+'  '+','+ '</div>'+
  //        '<div class="brewery '+number+'" id="'+number+'">'+ brewery+',' +'  '+'</div>'+
  //        '<div class="location '+number+'" id="'+number+'">'+ city+', '+state+'</div>'+
  //      '</div>'+
  //      '<div class="addFav col l3">'+'Add To Wish List  '+
  //         '<a class="btn-floating btn-large waves-effect waves-light red" >'+
  //         '<i class="material-icons" id="'+number+'">'+'add'+'</i>'+'</a>'+
  //     '</div>'+
  // '</div>'

  console.log(parseWishDiv);
  console.log(wishDiv)
  appendWishItem(wishDiv)

  }

})

function itemArr(parseWishDiv){
  wishItemArr = parseWishDiv.split(",")

}

function appendWishItem(wishDiv){
  console.log("is this what we want?")
  console.log(wishDiv)
  $('.wish.fiveDivs.col.s9').append(wishDiv)
}
