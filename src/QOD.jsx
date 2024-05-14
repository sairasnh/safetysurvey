import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function SafetyQuiz() {
    const questions = [
        {
            type: "radiogroup",
            name: "question1",
            title: "What should you do in case of a fire?",
            choices: [
                "Run outside immediately", "Hide under a desk", "Call 911", "Follow the evacuation plan"
            ],
            correctAnswer: "Follow the evacuation plan",
            explanation: "During a fire, following the evacuation plan ensures your safety and helps prevent injuries."
        },
        {
            type: "radiogroup",
            name: "question2",
            title: "What should you do before operating heavy machinery?",
            choices: [
                "Read the manual", "Skip safety checks", "Listen to music", "Drink coffee"
            ],
            correctAnswer: "Read the manual",
            explanation: "Reading the manual provides important safety information and guidelines for operating heavy machinery."
        },
        {
            type: "radiogroup",
            name: "question3",
            title: "What should you wear when working with chemicals?",
            choices: [
                "Shorts and sandals", "Gloves and goggles", "Nothing special", "Earplugs"
            ],
            correctAnswer: "Gloves and goggles",
            explanation: "Wearing gloves and goggles protects your skin and eyes from chemical exposure."
        },
        {
            type: "radiogroup",
            name: "question4",
            title: "What is the first step in performing CPR?",
            choices: [
                "Check for breathing", "Apply compressions", "Give rescue breaths", "Call 911"
            ],
            correctAnswer: "Check for breathing",
            explanation: "Checking for breathing is the first step to determine if CPR is needed."
        },
        {
            type: "radiogroup",
            name: "question5",
            title: "What should you do if you witness a workplace hazard?",
            choices: [
                "Ignore it", "Report it to your supervisor", "Take a picture and post it on social media", "Laugh it off"
            ],
            correctAnswer: "Report it to your supervisor",
            explanation: "Reporting workplace hazards helps prevent accidents and ensures a safer work environment."
        },
        {
            type: "radiogroup",
            name: "question6",
            title: "What should you do if you cut yourself?",
            choices: [
                "Wash the wound with soap", "Ignore it", "Continue working", "Cover it with dirt"
            ],
            correctAnswer: "Wash the wound with soap",
            explanation: "Washing the wound with soap helps prevent infection and promotes healing."
        },
        {
            type: "radiogroup",
            name: "question7",
            title: "What should you do before lifting heavy objects?",
            choices: [
                "Use your back to lift", "Bend at the waist", "Wear a back support belt", "Stretch and warm up"
            ],
            correctAnswer: "Stretch and warm up",
            explanation: "Stretching and warming up helps prepare your muscles and reduces the risk of injury when lifting heavy objects."
        },
        {
            type: "radiogroup",
            name: "question8",
            title: "How often should you inspect safety equipment?",
            choices: [
                "Never", "Only when it breaks", "Once a year", "Regularly and before each use"
            ],
            correctAnswer: "Regularly and before each use",
            explanation: "Regular inspections ensure that safety equipment is in proper working condition and can effectively protect you in case of an emergency."
        },
        {
            type: "radiogroup",
            name: "question9",
            title: "What should you do if you smell gas?",
            choices: [
                "Light a match to investigate", "Ignore it", "Open windows and evacuate", "Spray air freshener"
            ],
            correctAnswer: "Open windows and evacuate",
            explanation: "Opening windows and evacuating the area prevents the buildup of gas and reduces the risk of explosion or suffocation."
        },
        {
            type: "radiogroup",
            name: "question10",
            title: "What should you do if you receive an electric shock?",
            choices: [
                "Touch the person to see if they're okay", "Unplug the device", "Run water on the person", "Call for help and turn off power"
            ],
            correctAnswer: "Call for help and turn off power",
            explanation: "Calling for help and turning off the power source prevents further injury and ensures the safety of both the victim and rescuer."
        }
    ];

    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Daily Safety Quiz",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "Welcome to the Daily Safety Quiz. <br/>Each question has one correct answer. <br/>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
            console.log("Explanation: " + (userAnswer === correctAnswer ? "Correct!" : question.explanation));
        }
    });

    return <Survey model={survey} />;
}
