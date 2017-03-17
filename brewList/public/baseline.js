
var name = ""
var logo = ""
var style =""
var brewery = ""
var abv = 0
var city = ""
var state =""

var name1 = ""
var logo1 = ""
var style1 =""
var brewery1 = ""
var abv1 = 0
var city1 = ""
var state1 =""

var name2 = ""
var logo2 = ""
var style2 =""
var brewery2 = ""
var abv2 = 0
var city2 = ""
var state2 =""

var name3 = ""
var logo3 = ""
var style3 =""
var brewery3 = ""
var abv3 = 0
var city3 = ""
var state3 =""

var name4 = ""
var logo4 = ""
var style4 =""
var brewery4 = ""
var abv4 = 0
var city4 = ""
var state4 =""

var name5 = ""
var logo5 = ""
var style5 =""
var brewery5 = ""
var abv5 = 0
var city5 = ""
var state5 =""

$('document').ready(function(){

  $('button').click(function(){
    empty()
    remove()
    getData().then(getBeerID).then(getBeerInfo).then(beerData).then(beer).then(info).catch(errorMsg)


  })

})

  function remove(){
    $( ".welcome" ).remove()
    $(".suggestedBeer").remove()
    $(".mainBeer").remove()
  }
  function getData(){
    var url= "https://api.untappd.com/v4/search/beer/?client_id=F935EA57CD00BE63E1A4569F9A7D5E105A824BB6&client_secret=465CDBBB85F39457D81F3C6D97AFC45DFF14DB9D&q="
    url += $('input').val()
    return $.get(url)
  }
  function getBeerID(data){
    if (data.response.beers.items.length === 0){
      throw new Error('Please Enter a Valid Beer Name')
    }
    var name = data.response.beers.items[0].beer.bid
    console.log(name)
    return name
  }
  function getBeerInfo(beerID){
    var url= "https://api.untappd.com/v4/beer/info/"
    url += beerID + "?client_id=F935EA57CD00BE63E1A4569F9A7D5E105A824BB6&client_secret=465CDBBB85F39457D81F3C6D97AFC45DFF14DB9D"
    console.log(url)
    return url
  }
  function beerData(url){
    return $.get(url)
  }

  function beer(data){
    // var description = data.response.beer.beer_description
    name = data.response.beer.beer_name
    logo = data.response.beer.beer_label_hd
    style = data.response.beer.beer_style
    brewery = data.response.beer.brewery.brewery_name
    abv = data.response.beer.beer_abv
    city = data.response.beer.brewery.location.brewery_city
    state = data.response.beer.brewery.location.brewery_state


    name1 = data.response.beer.similar.items[0].beer.beer_name
    logo1 = data.response.beer.similar.items[0].beer.beer_label
    style1 = data.response.beer.similar.items[0].beer.beer_style
    abv1 = data.response.beer.similar.items[0].beer.beer_abv
    brewery1 = data.response.beer.similar.items[0].brewery.brewery_name
    city1 = data.response.beer.similar.items[0].brewery.location.brewery_city
    state1 = data.response.beer.similar.items[0].brewery.location.brewery_state

    name2 = data.response.beer.similar.items[1].beer.beer_name
    logo2 = data.response.beer.similar.items[1].beer.beer_label
    style2 = data.response.beer.similar.items[1].beer.beer_style
    abv2 = data.response.beer.similar.items[1].beer.beer_abv
    brewery2 = data.response.beer.similar.items[1].brewery.brewery_name
    city2 = data.response.beer.similar.items[1].brewery.location.brewery_city
    state2 = data.response.beer.similar.items[1].brewery.location.brewery_state


    name3 = data.response.beer.similar.items[2].beer.beer_name
    logo3 = data.response.beer.similar.items[2].beer.beer_label
    style3 = data.response.beer.similar.items[2].beer.beer_style
    abv3 = data.response.beer.similar.items[2].beer.beer_abv
    brewery3 = data.response.beer.similar.items[2].brewery.brewery_name
    city3 = data.response.beer.similar.items[2].brewery.location.brewery_city
    state3 = data.response.beer.similar.items[2].brewery.location.brewery_state


    name4 = data.response.beer.similar.items[3].beer.beer_name
    logo4 = data.response.beer.similar.items[3].beer.beer_label
    style4 = data.response.beer.similar.items[3].beer.beer_style
    abv4 = data.response.beer.similar.items[3].beer.beer_abv
    brewery4 = data.response.beer.similar.items[3].brewery.brewery_name
    city4 = data.response.beer.similar.items[3].brewery.location.brewery_city
    state4 = data.response.beer.similar.items[3].brewery.location.brewery_state


    name5 = data.response.beer.similar.items[4].beer.beer_name
    logo5 = data.response.beer.similar.items[4].beer.beer_label
    style5 = data.response.beer.similar.items[4].beer.beer_style
    abv5 = data.response.beer.similar.items[4].beer.beer_abv
    brewery5 = data.response.beer.similar.items[4].brewery.brewery_name
    city5 = data.response.beer.similar.items[4].brewery.location.brewery_city
    state5 = data.response.beer.similar.items[4].brewery.location.brewery_state

    console.log(abv, name, brewery, name1, name2, name3, name4, name5)
    // return abv, name, brewery, name1, name2, name3, name4, name5
  }

  function createMain(logo, name, style, abv, brewery,city,state){
    var $mainBeer =
          '<div class="mainBeer">'+
             '<img class="imageOne" src="'+ logo +'">'+
             '<div class="profileMain">'+
               '<div class="name">'+ name +'</div>'+
               '<div class="style">'+ style +'</div>'+
               '<div class="abv">'+ abv +" ABV"+ '</div>'+
               '<div class="brewery">'+ brewery +'</div>'+
               '<div class="location">'+ city+', '+state+'</div>'+
             '</div>'+
          '</div>'
    return $mainBeer
  }
  function createSimilar(logo, name, style, abv, brewery,city,state){
    var $similarBeer =
          '<div class="suggestedBeer col s12 l2">'+
             '<img class="imageOne" src="'+ logo +'">'+
             '<div class="profile">'+
               '<div class="name">'+ name +'</div>'+
               '<div class="style">'+ style +'</div>'+
               '<div class="abv">'+ abv +" ABV"+ '</div>'+
               '<div class="brewery">'+ brewery +'</div>'+
               '<div class="location">'+ city+', '+state+'</div>'+
             '</div>'+
          '</div>'
    return $similarBeer
  }

  function info(){
      // $(".name").append(name)
      // $(".image").append('<img class="imageOne" src="'+ logo +'">')
      // $(".abv").append(abv+"abv")
      // $(".brewery").append(brewery)
      var $mainBeer = createMain(logo, name, style, abv, brewery,city,state)
      $(".favBeer").append($mainBeer)

      var $beerOne = createSimilar(logo1, name1, style1, abv1, brewery1,city1,state1)
      $(".fiveDivs").append($beerOne)

      var $beerTwo = createSimilar(logo2, name2, style2, abv2, brewery2,city2,state2)
      $(".fiveDivs").append($beerTwo)

      var $beerThree = createSimilar(logo3, name3, style3, abv3, brewery3,city3,state3)
      $(".fiveDivs").append($beerThree)

      var $beerFour = createSimilar(logo4, name4, style4, abv4, brewery4,city4,state4)
      $(".fiveDivs").append($beerFour)

      var $beerFive = createSimilar(logo5, name5, style5, abv5, brewery5,city5,state5)
      $(".fiveDivs").append($beerFive)

      //
      // $(".name2").append('<img class="imageOne" src="'+ logo2 +'">').append(name2)
      // $(".beer3").append('<img class="imageOne" src="'+ logo3 +'">').append(name3)
      // $(".beer4").append('<img class="imageOne" src="'+ logo4 +'">').append(name4)
      // $(".beer5").append('<img class="imageOne" src="'+ logo5 +'">').append(name5)
  }

  function errorMsg(error){
    console.log(error.message)
  }

function empty(){
  $(".name").empty()
  $(".image").empty()
  $(".abv").empty()
  $(".brewery").empty()
  $(".suggestions").empty()
}
