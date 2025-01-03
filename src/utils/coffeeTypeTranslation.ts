type CoffeeTypeProps = {
  [key: string]: string
}

const coffeeTypes: CoffeeTypeProps = {
  traditional: 'Tradicional',
  sweet: 'Doce',
  specialty: 'Especial',
}

export function coffeeTypeTranslation(type: string) {
  const coffeeTypeSelected = coffeeTypes[type]

  return coffeeTypeSelected
}
