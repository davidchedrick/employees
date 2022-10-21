import { useEffect, useState } from "react";

function QuizAgain() {
    const [questions, setQuestions] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                {
                    question:
                        "Which of the following is a built-in React hook?",
                    answers: [
                        "useState",
                        "useFetch",
                        "useLocalStorage",
                        "useTimeout",
                    ],
                    correctAnswer: 0,
                },
                {
                    question:
                        "What is the correct order of these lifecycle phases?",
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
            setQuestions(data);
        };
        fetchData();
    }, []);

    if (!questions) return null;

    const currentQuestion = questions[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
        <>
            <h1>cactcatctatcatcactatcatca!!!!8888877!!</h1>
            <h1>{currentQuestion.question}</h1>

            {currentQuestion.answers.map((answer, answerIndex) => {
                let className = "answer";
                const selectedAnswer = selectedAnswers[currentQuestionIndex];

                if (selectedAnswer === answerIndex) {
                    className +=
                        currentQuestion.correctAnswer === selectedAnswer
                            ? " correct"
                            : " incorrect";
                }

                return (
                    <>
                        <h2
                            key={answerIndex}
                            className={className}
                            onClick={() => {
                                if (!selectedAnswer)
                                    setSelectedAnswers([
                                        ...selectedAnswer,
                                        answerIndex,
                                    ]);
                            }}
                        >
                            {answer}
                        </h2>
                    </>
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
                disabled={isLastQuestion}
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
