import { useCreatures } from './hooks';
import './styles.css';

const Creatures = () => {
  const { data: response, isLoading } = useCreatures();

  const foodCreatures = response?.data?.food;

  return (<section className="creatures-section">
    <h2 className="title">Creatures</h2>
    {isLoading && (<p>Is loading, hold on </p>)}
    <div className="creatures-container">
    {foodCreatures && foodCreatures.map(creature => (
      <article key={creature.id} className="card-wrapper">
        <h6>
          {creature.name}
        </h6>
        <img src={creature.image} alt={creature.name} />
        <p>
          <span>ID: {creature.id}</span>
          <span>Hearts recovered: {creature.hearts_recovered}</span>
        </p>
        <p>Description: {creature.description}</p>
        <p>Cooking effect: {creature.cooking_effect}</p>
        <p>Where to find them?</p>
          <ul>
            {creature.common_locations.map((location, index) => (
              <li key={`${index}_${location}`}>{location}</li>)
            )}
          </ul>
      </article>)
    )}
    </div>
  </section>);
};

export default Creatures;
