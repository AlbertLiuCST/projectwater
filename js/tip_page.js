const quotes = [
	{ 
		"quote" : "The average canadian uses 329 litres of water every day while the average African family uses only 20 litres."
	},
	{
		"quote" : "Running the tap while brushing your teeth can waste 16 litres of water!"
	},
	{
		"quote" : "Be sure to check your summer lawn watering days @ www.metrovancouver.ca!"
	},
	{
        "quote" : "Newer toilets use as little as a third as much water as older toilets!"
    },
    {
        "quote" : "Fixing a leaky faucet can save over 10 000 litres of water in a year!"
    },
    {
        "quote" : "Low-flow shower heads use as little as half as much water as regular shower heads!"
    },
    {
        "quote" : "Instead of running the tap while washing dishes, fill the sink with soapy water."
    },
    {
        "quote" : "Watering your plants early in the morning reduces the amount of water needed."
    }
]


function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `${random.quote}`;
}

randomQuote();