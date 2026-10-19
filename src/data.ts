import buffet from './assets/villa-buffet.jpg'
import lounge from './assets/villa-lounge.jpg'
import cocktails from './assets/villa-cocktails.jpg'
import interior from './assets/villa-interior.jpg'
import food from './assets/villa-food.jpg'
import desserts from './assets/villa-desserts.jpg'
import coffee from './assets/villa-coffee.jpg'

export const villaPhotos = { buffet, lounge, cocktails, interior, food, desserts, coffee }
export const photoPositions: Record<string, string> = {
  [buffet]: 'center 68%', [lounge]: 'center 56%', [cocktails]: 'center 50%', [interior]: 'center 60%',
  [food]: 'center 48%', [desserts]: 'center 58%', [coffee]: 'center 48%',
}

// Independent food photography for the menu, hosted on Unsplash; restaurant photos remain in the other sections.
const menuPhotos = {
  appetizer: 'https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?auto=format&fit=crop&w=1000&q=85',
  chicken: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85',
  steak: 'https://images.unsplash.com/photo-1611171711791-b34fa42e9fc2?auto=format&fit=crop&w=1000&q=85',
  seafood: 'https://images.unsplash.com/photo-1672636401296-72fefd00e745?auto=format&fit=crop&w=1000&q=85',
  pizza: 'https://images.unsplash.com/photo-1655562378704-d5d0a8c3d442?auto=format&fit=crop&w=1000&q=85',
  pasta: 'https://images.unsplash.com/photo-1676471771228-c4cdbfbd2a7f?auto=format&fit=crop&w=1000&q=85',
  dessert: 'https://images.unsplash.com/photo-1605621234603-421e591840cd?auto=format&fit=crop&w=1000&q=85',
  gelato: 'https://images.unsplash.com/photo-1740969136572-bdd24d36114d?auto=format&fit=crop&w=1000&q=85',
  coffee: 'https://images.unsplash.com/photo-1658646479124-bc31e6849497?auto=format&fit=crop&w=1000&q=85',
  milkshake: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1000&q=85',
  smoothie: 'https://images.unsplash.com/photo-1669277038674-9d00b4ff41fa?auto=format&fit=crop&w=1000&q=85',
  cocktail: 'https://images.unsplash.com/photo-1568926825354-c277ddca9bec?auto=format&fit=crop&w=1000&q=85',
  water: 'https://images.unsplash.com/photo-1683319497530-7cff6c6f1abc?auto=format&fit=crop&w=1000&q=85',
}

type MenuProduct = { name: string; category: string; description: string; price: string; image: string; imagePosition?: string; tags: string[] }
const product = (name: string, category: string, description: string, price: string, image: string, tags: string[] = ['Sans alcool'], imagePosition?: string): MenuProduct => ({ name, category, description, price, image, tags, imagePosition })

// Food-page photos are too soft to read every recipe and price. These entries use only section headings visible on the official menu.
export const dishes: MenuProduct[] = [
  product('Nos entrées froides', 'Entrées', 'Découvrez la sélection d’entrées froides sur la carte officielle.', 'Voir la carte', menuPhotos.appetizer),
  product('Nos entrées chaudes', 'Entrées', 'Découvrez la sélection d’entrées chaudes sur la carte officielle.', 'Voir la carte', menuPhotos.appetizer),
  product('Nos volailles', 'Plats', 'Les recettes de volaille de la maison. Détails et prix sur la carte officielle.', 'Voir la carte', menuPhotos.chicken),
  product('Nos viandes', 'Plats', 'Les recettes de viande de la maison. Détails et prix sur la carte officielle.', 'Voir la carte', menuPhotos.steak),
  product('Fruits de mer & crustacés', 'Plats', 'La sélection de la mer de La Villa. Détails et prix sur la carte officielle.', 'Voir la carte', menuPhotos.seafood),
  product('Nos pizzas', 'Pizzas', 'Plusieurs recettes figurent sur la carte officielle. Ingrédients et prix à consulter auprès de La Villa.', 'Voir la carte', menuPhotos.pizza),
  product('Nos pâtes', 'Pâtes', 'Découvrez les recettes de pâtes de la maison sur la carte officielle.', 'Voir la carte', menuPhotos.pasta),
  product('Nos lasagnes', 'Pâtes', 'Les lasagnes de La Villa. Variétés et prix sur la carte officielle.', 'Voir la carte', menuPhotos.pasta),
  product('Nos risottos', 'Pâtes', 'Les risottos de La Villa. Variétés et prix sur la carte officielle.', 'Voir la carte', menuPhotos.pasta),

  product('Fabio', 'Desserts', 'Pain brioché, caramel beurre salé, fruits secs et yaourt glacé.', '15 DT', menuPhotos.dessert),
  product('Simone', 'Desserts', 'Pain brioché, crème pistache, fruits rouges et yaourt glacé.', '15,5 DT', menuPhotos.dessert),
  product('Massimo', 'Desserts', 'Pain brioché, chocolat, banane, fruits secs et yaourt glacé.', '17 DT', menuPhotos.dessert),
  product('Donatella', 'Desserts', 'Crêpe sucrée, overdose de chocolat et yaourt glacé.', '16 DT', menuPhotos.dessert),
  product('Simona', 'Desserts', 'Crêpe sucrée, cocktail de fruits de saison, chocolat blanc et yaourt glacé.', '17 DT', menuPhotos.dessert),
  product('La Villa', 'Desserts', 'Une belle surprise sucrée.', '24 DT', menuPhotos.dessert),
  product('Planche Venezia', 'Desserts', 'Planche surprise sucrée, avec deux mojitos au choix.', '65 DT', menuPhotos.dessert),
  product('Planche Verona', 'Desserts', 'Planche surprise sucrée, avec deux mojitos au choix.', '65 DT', menuPhotos.dessert),
  product('Gelato — 1 boule', 'Desserts', 'Parfum au choix.', '10,5 DT', menuPhotos.gelato),
  product('Gelato — 2 boules', 'Desserts', 'Deux parfums au choix.', '14 DT', menuPhotos.gelato),
  product('Gelato La Villa', 'Desserts', 'Une belle surprise glacée.', '22 DT', menuPhotos.gelato),

  product('Espresso', 'Boissons', 'Café espresso.', '3,5 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Americano', 'Boissons', 'Café allongé.', '4 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Macchiato', 'Boissons', 'Espresso avec une touche de lait.', '4,5 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Latte', 'Boissons', 'Café au lait.', '5 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Cappuccino', 'Boissons', 'Espresso et mousse de lait.', '6,5 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Pistachio latte', 'Boissons', 'Latte parfumé à la pistache.', '12 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Café aromatisé', 'Boissons', 'Au choix : vanille, noisette, caramel ou Nutella.', '11 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Espresso capsule Delta / Espresso', 'Boissons', 'Café en capsule.', '5 DT', menuPhotos.coffee, ['Chaud', 'Café']),
  product('Chocolat classique', 'Boissons', 'Chocolat chaud classique.', '9,5 DT', menuPhotos.coffee, ['Chaud']),
  product('Chocolat La Villa', 'Boissons', 'La recette chocolatée de la maison.', '15 DT', menuPhotos.coffee, ['Chaud']),
  product('Thé à la menthe', 'Boissons', 'Thé servi à la menthe.', '3 DT', menuPhotos.coffee, ['Chaud']),
  product('Thé aux amandes', 'Boissons', 'Thé aux amandes.', '7 DT', menuPhotos.coffee, ['Chaud']),
  product('Thé infusion', 'Boissons', 'Thé vert ou verveine.', '4 DT', menuPhotos.coffee, ['Chaud']),
  product('Thé aux pignons de pin', 'Boissons', 'Thé garni de pignons de pin.', '9 DT', menuPhotos.coffee, ['Chaud']),

  product('Affogato', 'Boissons', 'Macchiato glacé.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  product('Spanish coffee latte', 'Boissons', 'Macchiato glacé.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  product('Café noisette glacé', 'Boissons', 'Macchiato glacé.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  product('Ice mocca', 'Boissons', 'Macchiato glacé.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  product('Pistachio latte glacé', 'Boissons', 'Macchiato glacé à la pistache.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  product('Japanese ice latte', 'Boissons', 'Macchiato glacé.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  product('Ice vanilla latte', 'Boissons', 'Macchiato glacé à la vanille.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  product('Blue ice latte', 'Boissons', 'Macchiato glacé.', '12 DT', menuPhotos.coffee, ['Froid', 'Café']),
  ...['Fraise', 'Mangue', 'Blue Berry', 'Fruits de la passion'].map((flavor) => product(`Matcha glacé ${flavor}`, 'Boissons', `Matcha glacé à la ${flavor.toLowerCase()}.`, '13 DT', menuPhotos.smoothie, ['Froid'])),
  ...['Pêche', 'Framboise, hibiscus et miel', 'Citron', 'Fruits de la passion'].map((flavor) => product(`Thé glacé ${flavor}`, 'Boissons', `Thé glacé ${flavor.toLowerCase()}.`, '10 DT', menuPhotos.smoothie, ['Froid'])),

  product('Mojito classique', 'Boissons', 'Mojito classique.', '12 DT', menuPhotos.cocktail, ['Froid', 'Avec alcool']),
  product('Mojito Black & Black', 'Boissons', 'Mojito Black & Black.', '13 DT', menuPhotos.cocktail, ['Froid', 'Avec alcool']),
  product('Mojito Blue Berry', 'Boissons', 'Mojito aux fruits Blue Berry.', '13 DT', menuPhotos.cocktail, ['Froid', 'Avec alcool']),
  product('Mojito Diabolo', 'Boissons', 'Mojito Diabolo.', '13 DT', menuPhotos.cocktail, ['Froid', 'Avec alcool']),
  product('Mojito Blue Water', 'Boissons', 'Mojito Blue Water.', '13 DT', menuPhotos.cocktail, ['Froid', 'Avec alcool']),
  product('Mojito fruits de la passion', 'Boissons', 'Mojito aux fruits de la passion.', '13 DT', menuPhotos.cocktail, ['Froid', 'Avec alcool']),
  product('Mojito énergétique', 'Boissons', 'Mojito énergétique.', '13,5 DT', menuPhotos.cocktail, ['Froid', 'Avec alcool']),

  product('Smoothie Nino', 'Boissons', 'Fraise, pêche et banane.', '12 DT', menuPhotos.smoothie),
  product('Smoothie Agostino', 'Boissons', 'Fraise, pomme, banane et citron.', '13 DT', menuPhotos.smoothie),
  product('Smoothie Fiorenzo', 'Boissons', 'Fraise, cerise, myrtille et hibiscus.', '13 DT', menuPhotos.smoothie),
  product('Smoothie Ettore', 'Boissons', 'Kiwi, ananas et fruit de la passion.', '15 DT', menuPhotos.smoothie),
  product('Smoothie Mirko', 'Boissons', 'Ananas, menthe, citron et gingembre.', '17 DT', menuPhotos.smoothie),
  product('Smoothie Cosimo', 'Boissons', 'Pêche, banane et mangue.', '17 DT', menuPhotos.smoothie),
  product('Milkshake Taddeo', 'Boissons', 'Pistache.', '13 DT', menuPhotos.milkshake),
  product('Milkshake Franco', 'Boissons', 'Vanille.', '15 DT', menuPhotos.milkshake),
  product('Milkshake Tito', 'Boissons', 'Nutella.', '13 DT', menuPhotos.milkshake),
  product('Milkshake Donato', 'Boissons', 'Spéculoos Lotus.', '13 DT', menuPhotos.milkshake),
  product('Milkshake Cesare', 'Boissons', 'Fraise.', '13 DT', menuPhotos.milkshake),
  product('Milkshake Gaetano', 'Boissons', 'Ferrero Rocher et noisettes.', '13 DT', menuPhotos.milkshake),
  product('Milkshake Elio', 'Boissons', 'Caramel.', '13 DT', menuPhotos.milkshake),
  ...['Nutella, noisettes', 'Milk cookies', 'Mini spéculoos', 'Oreo'].map((flavor) => product(`Frappuccino ${flavor}`, 'Boissons', `Frappuccino ${flavor.toLowerCase()}.`, '15 DT', menuPhotos.milkshake, ['Froid'])),
  ...['Banane', 'Orange', 'Fraise', 'Citron', 'Kiwi'].map((flavor) => product(`Jus frais ${flavor}`, 'Boissons', 'Jus sans conservateurs.', '9 DT', menuPhotos.smoothie)),
  product('Eau plate 0,5 L', 'Boissons', 'Eau plate.', '2 DT', menuPhotos.water),
  product('Eau gazeuse 0,5 L', 'Boissons', 'Eau gazeuse.', '2,5 DT', menuPhotos.water),
  product('Eau plate 1 L', 'Boissons', 'Eau plate.', '3 DT', menuPhotos.water),
  product('Eau gazeuse 1 L', 'Boissons', 'Eau gazeuse.', '3,5 DT', menuPhotos.water),
  product('Soda 24 cl', 'Boissons', 'Soda.', '4 DT', menuPhotos.smoothie),
  product('Boisson énergisante 24 cl', 'Boissons', 'Boisson énergisante.', '9 DT', menuPhotos.smoothie),
]

export const news = [
  { category: 'À la carte', date: '19 octobre 2026', title: 'L’automne s’invite à table', description: 'Les saveurs de saison arrivent en cuisine : découvrez les suggestions du chef et les douceurs à partager.', image: buffet, label: 'La carte de saison' },
  { category: 'Événement', date: '31 octobre 2026', title: 'Une soirée à la Villa', description: 'Une belle occasion de se retrouver autour de cocktails, de gourmandises et d’une ambiance chaleureuse.', image: lounge, label: 'À la Villa' },
  { category: 'Offre spéciale', date: 'Chaque dimanche', title: 'Un moment gourmand', description: 'Retrouvez les plats, les boissons et les desserts de la maison à partager autour de la table.', image: desserts, label: 'À partager' },
]
