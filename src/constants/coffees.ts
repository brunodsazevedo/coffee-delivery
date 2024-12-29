import { ImageSourcePropType } from 'react-native'

import AmericanCoffeeImg from '@/assets/images/american-coffee-img.png'
import ArabicCoffeeImg from '@/assets/images/arabic-coffee-img.png'
import CapuccinoCoffeeImg from '@/assets/images/capuccino-coffee-img.png'
import CoffeeWithMilkImg from '@/assets/images/coffee-with-milk-img.png'
import CreamyEspressoCoffeeImg from '@/assets/images/creamy-espresso-coffee-img.png'
import CubanCoffeeImg from '@/assets/images/cuban-coffee-img.png'
import EspressoCoffeeImg from '@/assets/images/espresso-coffee-img.png'
import HawaiianCoffeeImg from '@/assets/images/hawaiian-coffee-img.png'
import HotChocolateImg from '@/assets/images/hot-chocolate-img.png'
import IcedCoffeeImg from '@/assets/images/iced-coffee-img.png'
import IrishCoffeeImg from '@/assets/images/irish-coffee-img.png'
import LatteCoffeeImg from '@/assets/images/latte-coffee-img.png'
import MacchiatoCoffeeImg from '@/assets/images/macchiato-coffee-img.png'
import MochaccinoCoffeeImg from '@/assets/images/mochaccino-coffee-img.png'

export type CoffeeDTO = {
  name: string
  description: string
  image: ImageSourcePropType
  type: 'traditional' | 'sweet' | 'specialty'
  price: number
}

export const featuredCoffees: CoffeeDTO[] = [
  {
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    image: LatteCoffeeImg,
    type: 'traditional',
    price: 12.9,
  },
  {
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: MochaccinoCoffeeImg,
    type: 'sweet',
    price: 14.5,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: IrishCoffeeImg,
    type: 'specialty',
    price: 18.9,
  },
]

export const coffees: CoffeeDTO[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: EspressoCoffeeImg,
    type: 'traditional',
    price: 8.5,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: AmericanCoffeeImg,
    type: 'traditional',
    price: 9.9,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: CreamyEspressoCoffeeImg,
    type: 'traditional',
    price: 10.9,
  },
  {
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    image: LatteCoffeeImg,
    type: 'traditional',
    price: 12.9,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: IcedCoffeeImg,
    type: 'traditional',
    price: 10.5,
  },

  {
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    image: CapuccinoCoffeeImg,
    type: 'sweet',
    price: 13.9,
  },
  {
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: MochaccinoCoffeeImg,
    type: 'sweet',
    price: 14.5,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: HotChocolateImg,
    type: 'sweet',
    price: 12.5,
  },

  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: CubanCoffeeImg,
    type: 'specialty',
    price: 16.5,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: HawaiianCoffeeImg,
    type: 'specialty',
    price: 15.9,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: ArabicCoffeeImg,
    type: 'specialty',
    price: 14.9,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: IrishCoffeeImg,
    type: 'specialty',
    price: 18.9,
  },
]
