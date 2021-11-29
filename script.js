const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },
]

const addSubmission = function (array, newName, newScore, newDate) {
    let newPassed = false
    if (newScore >= 60) {
        newPassed = true;
    }
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed
    }
    array.push(newSubmission);

}
console.log(addSubmission(submissions, "Tiia", 100, "2021-11-24"));

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
}

const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex(student => student.name === name);
    array.splice(index, 1);
}

deleteSubmissionByName(submissions, "Joe");
console.log(submissions)

const editSubmission = (array, index, score) => {
    array[index].score = score;
}

const findSubmissionByName = (array, name) => {
    const found = array.find(person => person.name === name);
    return found;
}
console.log(findSubmissionByName(submissions, "Jack"))

const findLowestScore = (array) => {
    let lowScore = 100;
    let submission = {};
    for (let individualScore of array) {
        if (individualScore.score < lowScore) {
            lowScore = individualScore.score
            submission = individualScore
        }
    }
    return submission
}
console.log(findLowestScore(submissions))

const findAverageScore = (array) => {
    let sum = 0
    for (let individualScore of array) {
        sum += individualScore.score
    }
    let averageScore = sum / array.length
    return averageScore
}

console.log(findAverageScore(submissions))

const filterPassing = (array) => {
    const passing = array.filter(passed => passed.passed === true );
    return passing;

}


console.log(filterPassing(submissions))


const filter90AndAbove = (array) => {
    const highscore = array.filter(score => score.score >= 90);
    return highscore;
}

console.log(filter90AndAbove(submissions));

//like .find except use .filter after the arrow whatever  you called each find where the passed property ===true



