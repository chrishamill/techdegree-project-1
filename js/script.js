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
    date:1883,
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
    tags:"gangsta rap"
  },
  {
    quote:"There is no shortcut to achievement",
    source:"George Washington Carter",
    date:1931,
    tags:"politics"
  },
  {
    quote:"I was really too honest a man to be a politician and live",
    source:"Socrates",
    citation:"Respectfully Quoted: A Dictionary of Quotations",
    date:1989,
    tags:"politics"
  }
];

function getRandomQuote (random) {
  var random = quotes[Math.floor(Math.random() * quotes.length)];
  return random;
}

function printQuote (message) {
  var message = getRandomQuote(random)
  var printmessage = "<p class='quote'>" + message.quote + " </p>";
  printmessage += "<p class='source'>" + message.source + " ";
  printmessage += "<span class='citation'>" + message.citation + " </span>";
  printmessage += "<span class='year'>" + message.date + "</span>";
  printmessage += "</p>";

  document.getElementById('quote-box').innerHTML = printmessage;
}


printQuote(message)
