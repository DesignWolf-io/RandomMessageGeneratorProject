// Random Quotes
let startPhase = [];
let middlePhase = [];
let endPhase = [];

const randomQuotes = {
  startPhrase: [
    "If you let my daughter go now,",
    "Houston,",
    "In the first place",
    "As a matter of fact",
    "In the light of",
    "In reality",
    "Conversely",
    "In the event that",
  ],
  middlePhrase: [
    "not only ... but also",
    "in addition",
    "coupled with",
    "and",
    "together with",
    "comparatively",
    "furthermore",
    "by the same token",
  ],
  endPhrase: [
    "May the Force be with you.", // Star wars
    "There's no place like home.", // The Wizard of Oz
    "I'm the king of the world!", // Titanic
    "It's alive! It's alive!", // Frankenstein
    "I'll be back.", // The Terminator
    "You're gonna need a bigger boat.", // Jaws
    "My precious.", // Lord of the Rings
    "we have a problem.", // Apollo 13
    "There's no crying in baseball!", // A League of Their Own
  ],
};

const randomizeQuote = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

console.log(`
  ${randomizeQuote(randomQuotes.startPhrase)} 
    ${randomizeQuote(randomQuotes.middlePhrase)} 
    ${randomizeQuote(randomQuotes.endPhrase)}
`);
