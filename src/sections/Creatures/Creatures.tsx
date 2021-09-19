import { useCreatures } from "./hooks";
import CreatureCard from "./CreatureCard";
import "./styles.css";

const Creatures = () => {
  const { data: response, isLoading } = useCreatures();

  const foodCreatures = response?.data?.food;

  return (
    <section className="creatures-section">
      <h2 className="title">Creatures</h2>
      {isLoading && <p>Is loading, hold on </p>}
      <div className="creatures-container">
        {foodCreatures &&
          foodCreatures.map((creature) => (
            <CreatureCard creature={creature} key={creature.id} />
          ))}
      </div>
    </section>
  );
};

export default Creatures;
