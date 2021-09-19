import Hearts from "./Hearts";
import { FoodCreature } from '../api/types';
import './styles.css';


type CreatureCardProps = {
  creature: FoodCreature;
}
const CreatureCard = ({ creature } : CreatureCardProps ) => {
  return(
    <article key={creature.id} className="card-wrapper">
        <h6>
          {creature.name}
        </h6>
        <figure>
        <img src={creature.image} alt={creature.name} />
        </figure>
        <figcaption>ID: {creature.id}</figcaption>
        {/* <Hearts hearts={creature.hearts_recovered} /> */}
        <p>Description: {creature.description}</p>
        <p>Cooking effect: {creature.cooking_effect}</p>
        <p>Where to find them?</p>
          <ul>
            {creature.common_locations.map((location, index) => (
              <li key={`${index}_${location}`}>{location}</li>)
            )}
          </ul>
      </article>
  );
};

export default CreatureCard;
