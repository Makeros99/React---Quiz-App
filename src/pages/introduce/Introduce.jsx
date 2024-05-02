import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'


const Introduce = () => { 
    const difficulty = ["Zorluk Seçiniz" , "easy" , "medium" , "hard"]
    const [difficultyChange , setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange)
    
    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }


  return (
    <div className='introduce'>
        <div className="introduce-container">
            <img src="https://w7.pngwing.com/pngs/716/486/png-transparent-100-pics-quiz-guess-the-trivia-games-history-quiz-game-quiz-guess-word-quiz-up-2k17-trivia-history-quiz-game-logo-circle-thumbnail.png" alt="" />
            <Dropdown data = {difficulty} setDifficultyChange = {setDifficultyChange} />
            <div onClick={startQuiz} className='introduce-btn'> Quiz'e Başla</div>
        </div>
    </div>
  )
}

export default Introduce