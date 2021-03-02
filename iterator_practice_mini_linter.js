let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

storyWords.filter(function(word) {
  return !unnecessaryWords.includes(word)
})

let betterWords = storyWords;

let countReally = 0;
let countVery = 0;
let countBas = 0;

for(i = 0; i < betterWords.length; i++) {
  if(betterWords[i] === 'really') {
  countReally += 1;
    } else if(betterWords[i] === 'very') {
      countVery += 1; 
    } else if(betterWords[i] === 'basically') {
      countBas += 1; 
    } 
  }  

let countSent = 0;
betterWords.forEach(word => {
  if(word[word.length-1] === '.' || word[word.length-1] === '!') {
    countSent += 1;
  }
});

const logInfo = (param1,param2,param3,param4,param5) => {
  console.log('Word count: ' + param1);
  console.log('Overused "really" for ' + param2 + ' times.');
  console.log('Overused "very" for ' + param3 + ' times.');
  console.log('Overused "basically" for ' + param4 + ' times.');
  console.log('In total there are ' + param5 + ' sentences.');
}

console.log(logInfo(storyWords.length, countReally, countVery, countBas, countSent
));


console.log(betterWords.join(' '));








