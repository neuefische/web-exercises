const products = [
  {
    id: "1",
    name: "Shrimp",
    description: "Prefers to live in pairs",
    price: 19,
    currency: "€",
    category: "Invertebrates",
  },
  {
    id: "2",
    name: "Anemonefish",
    description: "Nemo",
    price: 65,
    currency: "€",
    category: "Seawater",
  },
  {
    id: "3",
    name: "Splendid anemone",
    description: "Is splendid",
    price: 90,
    currency: "€",
    category: "Corals and floral animals",
  },
  {
    id: "4",
    name: "Killer mussel",
    description: "Is prettier than her name",
    price: 12,
    currency: "€",
    category: "Mussels",
  },
  {
    id: "5",
    name: "Angelfish",
    description: "A diurnal loner",
    price: 90,
    currency: "€",
    category: "Seawater",
  },
  {
    id: "6",
    name: "Guppy",
    description: "Small but nice",
    price: 5,

    currency: "€",
    category: "Freshwater",
  },
  {
    id: "7",
    name: "Rainbow fish",
    description: "In all colors",
    price: 12,
    currency: "€",
    category: "Freshwater",
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
