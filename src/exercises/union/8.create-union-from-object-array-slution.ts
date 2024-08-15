import { Equal, Expect } from '@/type-utils';

const TOPPINGS = [
  {
    name: 'pineapple',
    description: 'A delicious tropical fruit',
    price: 0.5,
  },
  {
    name: 'pepperoni',
    description: 'A spicy meat topping',
    price: 0.75,
  },
  {
    name: 'anchovy',
    description: 'A salty fish topping',
    price: 1.0,
  },
  {
    name: 'peppers',
    description: 'A colorful vegetable topping',
    price: 0.5,
  },
] as const;

type Toppings = typeof TOPPINGS;
type ToppingsList = Toppings[number];
type ToppingsName = ToppingsList['name'];
type tests = [
  Expect<Equal<ToppingsName, 'pineapple' | 'pepperoni' | 'anchovy' | 'peppers'>>
];
