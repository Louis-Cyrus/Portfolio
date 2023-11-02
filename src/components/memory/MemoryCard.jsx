import clsx from "clsx";
import styles from "./MemoryCard.module.css";
import { CARD_STATE } from "../../lib/memory";
import { useTheme } from "../../context/ThemeProvider";

export const MemoryCard = ({ card, onClick }) => {
  
  const isReturned = card.state === CARD_STATE.RETURNED || card.state === CARD_STATE.FIND;

  return (
    <div className="relative h-12 w-11" onClick={onClick}>
      <button
        className={clsx(
          styles.transition,
          "border-primary p-0.5 rounded bg-secondary",
          {
            [clsx("!bg-red-400", styles.rotate)]: !isReturned,
            [clsx("!bg-green-400", styles.bounce)]: card.state === CARD_STATE.FIND,
          }
        )}
      >
        {isReturned && <span className="block p-3 rounded bg-paper">{card.emoji}</span>}
      </button>
      <button
        style={{ backfaceVisibility: "hidden" }}
        className={clsx(
          styles.transition,
          "border-primary border-2 bg-paper rounded p-3 absolute inset-0 flex items-center justify-center",
          
          {
            [styles.rotate]: isReturned,
          }
        )}
      >
        <QuestionEmoji />
      </button>
    </div>
  );
};

const QuestionEmoji = () => {
  const { theme } = useTheme();

  const emoji = theme === "light" ? "❓" : "❔";
  
  return <span>{emoji}</span>;
}
