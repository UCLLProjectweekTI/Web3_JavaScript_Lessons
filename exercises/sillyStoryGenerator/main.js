let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result, false);

function result() {
    console.log("in result");
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(":inserty",yItem);
    newStory = newStory.replace(":insertz",zItem);
    if(customName.value !== '') {

        let name = customName.value;
        newStory = newStory.replace("Bob",name);
    }

    if(document.getElementById("uk").checked) {
        let weight = Math.round(300*0.0714285714)+" stone";
        let temperature =  Math.round((94-32)/1.8)+" centigrade";
        newStory = newStory.replace("300 pounds",weight);
        newStory = newStory.replace("94 farenheit",temperature);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}