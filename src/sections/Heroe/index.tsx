import { useQuery } from 'react-query';

const Heroe = () => {
  const { data: response, isLoading } = useQuery('gameList', () => {
    return fetch("https://botw-compendium.herokuapp.com/api/v2", {
      "method": "GET",
    })
  }, {
    refetchOnWindowFocus: false,
  });

  const info = response?.json();
  console.log(info)
  return(<section>
    <h2>Creatures</h2>
    {isLoading && (<p>Is loading, hold on </p>)}
  </section>);
};

export default Heroe;
