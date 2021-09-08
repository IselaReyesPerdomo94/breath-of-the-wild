import React from 'react';

import { ReactComponent as HeartIcon } from '../../assets/heart.svg';

type HeartsProps = {
  hearts: number;
}
const Hearts = ({ hearts }: HeartsProps) => {
  const empty: string[] = [];
  const heartsNumber = Array.from(empty.fill('heart', 0, hearts - 1));

  return(
    <span className="hearts-container">
    {
      heartsNumber.map((heart, index) => (
        <HeartIcon key={`${index}_${heart}`} />
      ))
    }
  </span>)
};

export default Hearts;