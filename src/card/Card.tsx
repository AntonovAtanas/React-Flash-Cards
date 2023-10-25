import questions from '../cards-db';
import './Card.css';

const Card = () => {

    return (
        <div className="flashcards">
                {questions.map(question => (
                    <div key={question.id}>
                        <p>{question.question}</p>
                    </div>
                ))}
        </div>
    )
}

export default Card;