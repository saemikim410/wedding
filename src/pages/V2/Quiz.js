import React, { useState } from 'react';
import '../../css/Quiz.css';

const questions = [
    {
      questionText: '신혼여행지로 올바른 곳은?',
      correctAnswer: '저희는 발리 여행갑니다.',
      answerOptions: [
        { answerText: '태국', isCorrect: false },
        { answerText: '하와이', isCorrect: false },
        { answerText: '몰디브', isCorrect: false },
        { answerText: '발리', isCorrect: true },
        { answerText: '칸쿤', isCorrect: false },
      ],
    },
    {
      questionText: '함께 여행한 지역 아닌 곳은?',
      correctAnswer: '경주는 함께 간 적이 없습니다.',
      answerOptions: [
        { answerText: '제주도', isCorrect: false },
        { answerText: '부산', isCorrect: false },
        { answerText: '여수', isCorrect: false },
        { answerText: '포천', isCorrect: false },
        { answerText: '경주', isCorrect: true },
      ],
    },
    {
      questionText: '신랑은 어디에서 신부에게 프러포즈를 했을까요?',
      correctAnswer: '집에서 했습니다.',
      answerOptions: [
        { answerText: '집', isCorrect: true },
        { answerText: '제주도', isCorrect: false },
        { answerText: '레스토랑', isCorrect: false },
        { answerText: '공원', isCorrect: false },
        { answerText: '아직 안 했다', isCorrect: false },
      ],
    }
  ];


function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);


    const handleAnswerButtonClick = (correctAnswer, isCorrect, index) => {
        const nextQuestion = currentQuestion + 1;
        setSelectedOptionIndex(index);
    
        if (isCorrect) {
          setScore(score + 1);
          setAnswerFeedback(`정답입니다!`);
        } else {
          setAnswerFeedback(`틀렸습니다! ${correctAnswer} `);
        }
    
        setTimeout(() => {
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
          setAnswerFeedback(null);
          setSelectedOptionIndex(null);
        }, 3000);
      };

      const handleRestart = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedOptionIndex(null);
      };

  return (
    <div className='container bc-blue'>
        <div className='title'>깜짝 퀴즈</div>
        {showScore ? (
        <div className='score-section'>
          <div>{questions.length} 문제 중에 <span className='my-score'>{score} 문제</span> 맞혔습니다! </div>
          <button onClick={handleRestart} className='restart-button'>다시하기</button> 
        </div>
        ) : (
            <>
            <div className='question-section'>
                <div className='question-count'>
                <span>문제 {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>
                  <div>신랑♥신부</div>
                  <div>{questions[currentQuestion].questionText}</div>
                </div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                    className={`answer-button ${selectedOptionIndex === index ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleAnswerButtonClick(questions[currentQuestion].correctAnswer, answerOption.isCorrect, index)}
                    key={index}
                >
                    {answerOption.answerText}
                </button>
                ))}
            </div>
            {answerFeedback && <div className='feedback'>{answerFeedback}</div>}
            </>
        )}
    </div>
  )
}

export default Quiz