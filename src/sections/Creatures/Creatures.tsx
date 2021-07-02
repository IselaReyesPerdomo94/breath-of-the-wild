import { useCreatures } from './hooks';

const Creatures = () => {
  const { data: response, isLoading } = useCreatures();

  const foodCreatures = response?.data?.food;

  return(<section>
    <h2>Creatures</h2>
    {isLoading && (<p>Is loading, hold on </p>)}
    {foodCreatures && foodCreatures.map(creature => (<p key={creature.id}>{creature.name}</p>))}
  </section>);
};

export default Creatures;
