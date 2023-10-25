import { useState } from "react";
import questions from "../cards-db/cards-db";
import "./Card.css";

const Card = () => {
  const [clickedCardId, setclickedCardId] = useState<number | null>(null);

  function onSelectedCard(cardId: number | null) {
    if (clickedCardId !== cardId || cardId === null) {
      setclickedCardId(cardId);
    } else {
      setclickedCardId(null);
    }
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => onSelectedCard(question.id)}
          className={clickedCardId === question.id ? "selected" : ""}
        >
          <p>
            {clickedCardId === question.id
              ? question.answer
              : question.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
