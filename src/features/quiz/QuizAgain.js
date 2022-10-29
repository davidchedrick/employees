import { useEffect, useState } from "react";
const data = [
    {
        question: "Which of the following is a built-in React hook?",
        answers: ["useState", "useFetch", "useLocalStorage", "useTimeout"],
        correctAnswer: 0,
    },
    {
        question: "What is the correct order of these lifecycle phases?",
        answers: [
            "unmount, update, mount",
            "mount, update, unmount",
            "update, mount, unmount",
            "mount, unmount, update",
        ],
        correctAnswer: 1,
    },
    {
        question: "What is reconciliation?",
        answers: [
            "The process of converting the virtual DOM to DOM nodes.",
            "The process of combining two virtual DOM trees into one.",
            "The algorithm used by React to determine which state updates to batch together.",
            "The algorithm used by React to determine which elements changed between renders.",
        ],
        correctAnswer: 3,
    },
];

function QuizAgain() {
    const [questions, setQuestions] = useState(null);
    console.log("questions: ", questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [chosenAnswers, setChosenAnswers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch(data);
            // const json = await response.json();
            setQuestions(data);
        };
        fetchData();
    }, []);

    if (questions == null) return null;

    const updateChosenAnswers = (questionIndex, answerIndex) => {
        const newChosenAnswers = [...chosenAnswers];
        newChosenAnswers[questionIndex] = answerIndex;
        setChosenAnswers(newChosenAnswers);
    };

    const currentQuestion = questions[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
        <>
            <h1>{currentQuestion.question}</h1>
            {currentQuestion.answers.map((answer, answerIndex) => {
                const chosenAnswer = chosenAnswers[currentQuestionIndex];
                let className = "answer";

                if (chosenAnswer === answerIndex) {
                    className +=
                        currentQuestion.correctAnswer === chosenAnswer
                            ? " correct"
                            : " incorrect";
                }

                return (
                    <h2
                        key={answer}
                        className={className}
                        onClick={() => {
                            if (chosenAnswer != null) return;
                            updateChosenAnswers(
                                currentQuestionIndex,
                                answerIndex
                            );
                        }}
                    >
                        {answer}
                    </h2>
                );
            })}
            <button
                disabled={isFirstQuestion}
                onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex - 1)
                }
            >
                Back
            </button>
            <button
                disabled={
                    isLastQuestion ||
                    chosenAnswers[currentQuestionIndex] == null
                }
                onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                }
            >
                Next
            </button>
        </>
    );
}

export default QuizAgain;
