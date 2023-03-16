
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was a beautiful day in Maui, Hawaii, being 94 farenheit outside, so :insertx: went for a swim in the Pacific Ocean. When they arrived at :inserty:, they stared in disbelief for a few moments, then :insertz:! Hailey saw the whole thing, but was not surprised — :insertx: doesn't know how to swim, and is 300 pounds, anyways...";

const insertX = ["Surfer Jack","Surfer John","Surfer Brett"];
const insertY = ["a vibrant coral reef","the desolate bottom of the ocean","a far-off island"];
const insertZ = ["got eaten by a shark","bombarded by a school of fish","carried away by a strong tide"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':inserty:', yItem);
    var newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Hailey', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286) + ' stone';
        const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
        var newStory = newStory.replace('94 farenheit', temperature);
        var newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}