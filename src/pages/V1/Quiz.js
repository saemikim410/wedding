import React, { useState } from 'react';
import '../../css/Quiz.css';

const questions = [
    {
      questionText: '함께 만난 지 얼마나 되었을까요?',
      correctAnswer: '저희는 사귄지 2년이 지나 3년을 향해 가고있습니다.',
      answerOptions: [
        { answerText: '6개월', isCorrect: false },
        { answerText: '1년', isCorrect: false },
        { answerText: '2년', isCorrect: true },
        { answerText: '5년', isCorrect: false },
        { answerText: '10년', isCorrect: false },
      ],
    },
    {
      questionText: '어떻게 만났을까요?',
      correctAnswer: '소개팅 해주신 분들 감사합니다.',
      answerOptions: [
        { answerText: '등산', isCorrect: false },
        { answerText: '소개팅', isCorrect: true },
        { answerText: '서점', isCorrect: false },
        { answerText: '클럽', isCorrect: false },
        { answerText: '런닝', isCorrect: false },
      ],
    },
    {
      questionText: '둘이 닮은 점은 뭘까요?',
      correctAnswer: '모두 정답입니다~',
      answerOptions: [
        { answerText: '먹는거 좋아함', isCorrect: false },
        { answerText: '들 다 집에 있는 걸 좋아함', isCorrect: false },
        { answerText: '책 읽는거 좋아함', isCorrect: false },
        { answerText: '계획 하는거 좋아함', isCorrect: false },
        { answerText: '모두 정답', isCorrect: true },
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
    <div className='container bc-pink'>
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