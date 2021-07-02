import { useQuery } from 'react-query';

const Creatures = () => {
  const { data: response, isLoading } = useQuery('gameList', () => {
    return fetch("https://botw-compendium.herokuapp.com/api/v2", {
      "method": "GET",
    })
  }, {
    refetchOnWindowFocus: false,
  });

  const info = response?.json();
  return(<section>
    <h2>Creatures</h2>
    {isLoading && (<p>Is loading, hold on </p>)}
  </section>);
};

export default Creatures;
