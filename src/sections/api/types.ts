enum Categories {
  CREATURES = 'creatures',
  EQUIPMENT = 'equipment',
  MATERIALS = 'materials',
  MONSTERS = 'monsters',
  TREASURE = 'treasure'
}

type FoodCreature = {
  category: string,
  common_locations: string[],
  cooking_effect: string,
  description: string,
  hearts_recovered: number,
  id: number,
  image: string,
  name: string,
}

type NonFoodCreature = Omit<FoodCreature, 'hearts_recovered' | 'cooking_effect'> & {
  drops: string[],
}

type CreaturesResponse = {
  data : {
    food : FoodCreature[],
    non_food: NonFoodCreature[],    
  }
}

export { Categories };
export type { CreaturesResponse };