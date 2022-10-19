import { useEffect, useState } from "react";
const QUIZ_API_BASE_URL = "https://api.frontendexpert.io/api/fe/quiz";

export default function Quiz() {
    const [questions, setQuestions] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [chosenAnswers, setChosenAnswers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(QUIZ_API_BASE_URL);
            const data = await res.json();
            setQuestions(data);
        };
        fetchData();
    }, []);

    if (!questions) null;

    const currentQuestion = questions[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
        <>
            <h1>{currentQuestion.question}</h1>
            {currentQuestion.answer.map((answer, answerIndex) => {
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
                        key={answerIndex}
                        className={className}
                        onClick={() => {
                            if (!chosenAnswer)
                                setChosenAnswers([
                                    ...chosenAnswer,
                                    answerIndex,
                                ]);
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
