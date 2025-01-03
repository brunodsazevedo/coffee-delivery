import { ImageSourcePropType } from 'react-native'

import AmericanCoffeeImg from '@/assets/images/american-coffee-img.png'
import ArabicCoffeeImg from '@/assets/images/arabic-coffee-img.png'
import CapuccinoCoffeeImg from '@/assets/images/capuccino-coffee-img.png'
import CreamyEspressoCoffeeImg from '@/assets/images/creamy-espresso-coffee-img.png'
import CubanCoffeeImg from '@/assets/images/cuban-coffee-img.png'
import EspressoCoffeeImg from '@/assets/images/espresso-coffee-img.png'
import HawaiianCoffeeImg from '@/assets/images/hawaiian-coffee-img.png'
import HotChocolateImg from '@/assets/images/hot-chocolate-img.png'
import IcedCoffeeImg from '@/assets/images/iced-coffee-img.png'
import IrishCoffeeImg from '@/assets/images/irish-coffee-img.png'
import LatteCoffeeImg from '@/assets/images/latte-coffee-img.png'
import MochaccinoCoffeeImg from '@/assets/images/mochaccino-coffee-img.png'

export type CoffeeDTO = {
  id: string
  name: string
  description: string
  image: ImageSourcePropType
  type: 'traditional' | 'sweet' | 'specialty'
  price: number
}

export const featuredCoffees: CoffeeDTO[] = [
  {
    id: 'bbff7a0e-e19c-4025-b9cc-e9cf460969f7',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    image: LatteCoffeeImg,
    type: 'traditional',
    price: 12.9,
  },
  {
    id: 'a10c84c0-e84b-40af-81c5-84ac36b78c1f',
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: MochaccinoCoffeeImg,
    type: 'sweet',
    price: 14.5,
  },
  {
    id: '7affcff4-d796-469d-ae4e-12e69fbeb69a',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: IrishCoffeeImg,
    type: 'specialty',
    price: 18.9,
  },
]

export const coffees: CoffeeDTO[] = [
  {
    id: '2712c90a-2073-42d8-b6ff-0a2443156fb9',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: EspressoCoffeeImg,
    type: 'traditional',
    price: 8.5,
  },
  {
    id: '89aa9b4f-befa-46e5-a914-781cadf087e0',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: AmericanCoffeeImg,
    type: 'traditional',
    price: 9.9,
  },
  {
    id: '41feee1f-41c1-47fb-a66b-5097779fdf72',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: CreamyEspressoCoffeeImg,
    type: 'traditional',
    price: 10.9,
  },
  {
    id: 'bbff7a0e-e19c-4025-b9cc-e9cf460969f7',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    image: LatteCoffeeImg,
    type: 'traditional',
    price: 12.9,
  },
  {
    id: '34f2e987-9814-41b4-b647-fcc9bfa6cfcf',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: IcedCoffeeImg,
    type: 'traditional',
    price: 10.5,
  },

  {
    id: '50efd4f3-c1c2-4c09-a225-efe2c63403f0',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    image: CapuccinoCoffeeImg,
    type: 'sweet',
    price: 13.9,
  },
  {
    id: 'a10c84c0-e84b-40af-81c5-84ac36b78c1f',
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: MochaccinoCoffeeImg,
    type: 'sweet',
    price: 14.5,
  },
  {
    id: '6c34b90e-e4d3-43bc-a5c4-342a8e749621',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: HotChocolateImg,
    type: 'sweet',
    price: 12.5,
  },

  {
    id: '5aabef90-1255-4de7-972c-9fadcbdc8e21',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: CubanCoffeeImg,
    type: 'specialty',
    price: 16.5,
  },
  {
    id: '353b045f-d651-4643-a320-a79e3860280f',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: HawaiianCoffeeImg,
    type: 'specialty',
    price: 15.9,
  },
  {
    id: '13525aa1-7928-472e-806e-48c42dc98891',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: ArabicCoffeeImg,
    type: 'specialty',
    price: 14.9,
  },
  {
    id: '7affcff4-d796-469d-ae4e-12e69fbeb69a',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: IrishCoffeeImg,
    type: 'specialty',
    price: 18.9,
  },
]
