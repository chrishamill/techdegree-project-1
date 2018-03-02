// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variables
//var printQuote = false;
var quote;
var random;
var message;

// list of quotes to use.
var quotes = [
  {
    quote:"It is far better to be alone, than to be in bad company",
    source:"George Washington",
    year:1883,
    tags:"politics"
  },
  {
    quote:"Tact is the art of making a point, without making an enemy",
    source:"Isaac Newton",
    tags:"science"
  },
  {
    quote:"They got money for the war, but can't feed the poor",
    source:"Tupac Shakur",
    year:1991,
    tags:"gangsta rap"
  },
  {
    quote:"There is no shortcut to achievement",
    source:"George Washington Carter",
    year:1931,
    tags:"politics"
  },
  {
    quote:"I was really too honest a man to be a politician and live",
    source:"Socrates",
    citation:"Respectfully Quoted: A Dictionary of Quotations",
    year:1989,
    tags:"politics"
  },
  {
    quote:"The random quote generator is extremely taxing.",
    source:"Chris Hamill",
    citation:"Treehouse Techdegree",
    year:2018,
    tags:"humour"
  }
];
// Selects and returns a random object from the quotes array.
function getRandomQuote (random) {
  var random = quotes[Math.floor(Math.random() * quotes.length)];
  return random;
}

// Selects and returns a random colour.
function RandBackColor () {
  var allchar = "0123456789ABCDEF"
  var randcolor = "";
  for(var i = 0; i < 6; i ++) {
  randcolor += allchar[Math.floor(Math.random() * 16)];
  }
  randcolor = "#" + randcolor;
  return randcolor;
}
// Call the getRandomQuote function and prints the contents to page.
function printQuote (message) {
  var message = getRandomQuote(random)
  var printmessage = "<p class='quote'>"+ message.quote +"</p>";
  printmessage += "<p class='source'>" + message.source + "";
  if ( message.citation !== undefined ) {
    printmessage += "<span class='citation'>" + message.citation + "</span>";
  }
  if ( message.year !== undefined ) {
  printmessage += "<span class='year'>" + message.year + "</span>";
}
  printmessage += "</p>";
// prints printmessage variable to the 'quote-box' element
  document.getElementById('quote-box').innerHTML = printmessage;
  var getRandBackColor = RandBackColor();
  document.body.style.backgroundColor = getRandBackColor;
}
// runs the printQuote function at set interval to change the on screen quote
setInterval(function() {
  printQuote();
}, 3500);
// runs the printQuote function
printQuote(message)
