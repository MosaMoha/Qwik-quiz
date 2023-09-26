interface Question {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: string;
  }
  
  interface Quiz {
    totalQuestions: number;
    questions: Question[];
  }

  export const quiz: Quiz = {
    totalQuestions: 10,
    questions: [
        {
          id: 1,
          question: 'What is the capital of Japan?',
          answers: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
          correctAnswer: 'Tokyo',
        },
        {
          id: 2,
          question: 'Which gas do plants absorb from the atmosphere?',
          answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          correctAnswer: 'Carbon Dioxide',
        },
        {
          id: 3,
          question: 'Who wrote the play "Romeo and Juliet"?',
          answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
          correctAnswer: 'William Shakespeare',
        },
        {
          id: 4,
          question: 'Which planet is known as the Red Planet?',
          answers: ['Earth', 'Mars', 'Venus', 'Saturn'],
          correctAnswer: 'Mars',
        },
        {
          id: 5,
          question: 'What is the chemical symbol for gold?',
          answers: ['Au', 'Ag', 'Fe', 'Hg'],
          correctAnswer: 'Au',
        },
        {
          id: 6,
          question: 'Which animal is known as the "King of the Jungle"?',
          answers: ['Tiger', 'Gorilla', 'Lion', 'Elephant'],
          correctAnswer: 'Lion',
        },
        {
          id: 7,
          question: 'What is the largest mammal in the world?',
          answers: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
          correctAnswer: 'Blue Whale',
        },
        {
          id: 8,
          question: 'What is the currency of India?',
          answers: ['Rupee', 'Yen', 'Dollar', 'Euro'],
          correctAnswer: 'Rupee',
        },
        {
          id: 9,
          question: 'Who was the first person to step on the moon?',
          answers: ['Buzz Aldrin', 'Yuri Gagarin', 'John Glenn', 'Neil Armstrong'],
          correctAnswer: 'Neil Armstrong',
        },
        {
          id: 10,
          question: 'Which gas is responsible for the greenhouse effect?',
          answers: ['Oxygen', 'Carbon Dioxide', 'Methane', 'Nitrogen'],
          correctAnswer: 'Carbon Dioxide',
        },
      ],
  

}