import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import "./styles.css";

type HeartsProps = {
  hearts: number;
};
const Hearts = ({ hearts }: HeartsProps) => {
  const heartsNumber = Array.from(Array(hearts).keys());
  return (
    <div className="hearts-container">
      Hearts recovered:{" "}
      {hearts > 0
        ? heartsNumber.map((heart, index) => (
            <HeartIcon className="heart-icon" key={`${index}_${heart}`} />
          ))
        : "0"}
    </div>
  );
};

export default Hearts;
