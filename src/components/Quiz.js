import Questions from './Questions';
import {useState} from 'react';
function Quiz()
{
    const [QuestionIndex,setQuestionIndex]=useState(0);
    const [score,setScore]=useState(0);
    const [results,setResults]=useState(false);
    const replay = () =>
    {
       setQuestionIndex(0);
       setScore(0);
       setResults(false);
    }
    const present_question=Questions[QuestionIndex];
    const get_Choice=(i)=>{
        if(present_question.answer === i)
        {
            setScore(score+1);
        }
        const next_question=QuestionIndex+1;
        if(next_question<Questions.length)
        {
            setQuestionIndex(QuestionIndex+1);
        }
        else
        {
            setResults(true);
        }
    };
	return(
	<div className="quiz_box">
    {results?(<><h1>{score}</h1><br/><br/><button onClick={replay}>Play Again</button></>):( <div className="quiz_question">{present_question.question}
    <div className="quiz_box_option"></div>
    <ul className="quiz_ul">
    {present_question.option.map((option,i)=>{return<li className='quiz_li' onClick={
        () =>get_Choice(i)
    }>{option}</li>})}
    </ul>
    </div>)}
    </div>
		);
}
export default Quiz;