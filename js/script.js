const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {
    topic : "JS",
    learningGoals : ["React Skills", "Build JS Programs", "Learning threeJS", "Building Interactive Experiences"],
    category : "Front End Development",
    topicImportance : "high"
}

// console.log(learning);

learning.topic = "JavaScript";

learning.learningGoals.splice(1,1);

// console.log(learning)

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;

topicElement.classList.remove("hide");

countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals`;

countElement.classList.remove("hide");