export type Difficulty = "Easy" | "Moderate" | "Challenging";

export type DietTag =
  | "Vegetarian"
  | "Vegan"
  | "Gluten-Free"
  | "Dairy-Free"
  | "Low-Carb"
  | "High-Protein"
  | "Pescatarian"
  | "Kids-Friendly";

export type Recipe = {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  cuisines: string[];
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  calories: number;
  rating: number;
  heroImage: string;
  dietTags: DietTag[];
  highlight: string;
  ingredients: {
    name: string;
    amount: string;
    notes?: string;
  }[];
  steps: string[];
  chefTips: string[];
  equipment: string[];
  pairingIdeas: string[];
  isTrending?: boolean;
  isSeasonal?: boolean;
};

export const recipes: Recipe[] = [
  {
    id: "golden-coconut-ramen",
    slug: "golden-coconut-ramen",
    title: "Golden Coconut Ramen",
    description:
      "A cozy bowl of ramen with turmeric-coconut broth, charred corn, and jammy eggs.",
    difficulty: "Moderate",
    cuisines: ["Japanese", "Modern Fusion"],
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 4,
    calories: 540,
    rating: 4.9,
    heroImage:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["Vegetarian"],
    highlight:
      "Aromatic turmeric broth pairs with silky noodles and crisp vegetables for a healing weeknight dinner.",
    ingredients: [
      { name: "Fresh ramen noodles", amount: "12 oz" },
      { name: "Coconut milk", amount: "2 cups", notes: "full-fat" },
      { name: "Vegetable stock", amount: "3 cups", notes: "low-sodium" },
      { name: "Turmeric", amount: "1 1/2 tsp", notes: "ground" },
      { name: "Garlic cloves", amount: "4", notes: "minced" },
      { name: "Ginger", amount: "2 tbsp", notes: "grated" },
      { name: "Baby bok choy", amount: "3 heads", notes: "halved" },
      { name: "Sweet corn kernels", amount: "1 cup", notes: "charred" },
      { name: "Soft-boiled eggs", amount: "4", notes: "jammy centers" },
      { name: "Chili crisp", amount: "2 tbsp", notes: "for garnish" },
      { name: "Lime wedges", amount: "4" }
    ],
    steps: [
      "Warm coconut milk and stock in a deep pot over medium heat.",
      "Sauté garlic and ginger in a separate pan with a splash of oil until fragrant, then stir in turmeric.",
      "Combine aromatics with the warm broth and simmer for 10 minutes.",
      "Blanch bok choy in the broth for 2 minutes, then remove and keep warm.",
      "Cook ramen noodles according to package directions and drain.",
      "Divide noodles into bowls, ladle over golden broth, and top with bok choy, corn, eggs, and chili crisp.",
      "Finish with lime juice right before serving to brighten the broth."
    ],
    chefTips: [
      "Charring the corn in a dry skillet adds smoky sweetness that balances the creamy broth.",
      "Season the eggs with a splash of tamari while still warm for extra umami.",
      "For a spicy boost, whisk 1 tsp miso paste into the broth before serving."
    ],
    equipment: ["Large soup pot", "Deep sauté pan", "Tongs", "Strainer"],
    pairingIdeas: [
      "Citrus cucumber salad with sesame dressing",
      "Sparkling yuzu soda or chilled sake"
    ],
    isTrending: true
  },
  {
    id: "harissa-sheet-pan-salmon",
    slug: "harissa-sheet-pan-salmon",
    title: "Harissa Sheet-Pan Salmon",
    description:
      "One-pan roasted salmon with harissa glaze, sweet potatoes, and broccolini.",
    difficulty: "Easy",
    cuisines: ["Mediterranean"],
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    calories: 480,
    rating: 4.8,
    heroImage:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["Pescatarian", "Gluten-Free", "High-Protein"],
    highlight:
      "Bright harissa and citrus glaze caramelizes while veggies roast to perfection.",
    ingredients: [
      { name: "Salmon fillets", amount: "4", notes: "6 oz each" },
      { name: "Sweet potatoes", amount: "2", notes: "cut into wedges" },
      { name: "Broccolini", amount: "2 bunches", notes: "trimmed" },
      { name: "Harissa paste", amount: "3 tbsp" },
      { name: "Honey", amount: "1 tbsp" },
      { name: "Orange", amount: "1", notes: "zested and juiced" },
      { name: "Olive oil", amount: "3 tbsp" },
      { name: "Garlic powder", amount: "1 tsp" },
      { name: "Smoked paprika", amount: "1/2 tsp" }
    ],
    steps: [
      "Preheat oven to 425°F (220°C) and line a baking sheet with parchment.",
      "Toss sweet potatoes with half of the oil, salt, and smoked paprika; roast for 10 minutes.",
      "Combine harissa, honey, orange juice, zest, remaining oil, and garlic powder.",
      "Add broccolini and salmon to the sheet pan, brush salmon generously with harissa glaze, and drizzle broccolini with remaining sauce.",
      "Roast 10-12 minutes more, until salmon flakes easily and vegetables are tender.",
      "Serve with a squeeze of fresh orange juice and spoon pan sauce over everything."
    ],
    chefTips: [
      "Roast the sweet potatoes cut-side down for maximum caramelization.",
      "If your harissa is very spicy, add an extra tablespoon of honey to balance the heat.",
      "Swap salmon for chickpeas and halloumi for a vegetarian twist."
    ],
    equipment: [
      "Half-sheet pan",
      "Parchment paper",
      "Silicone brush",
      "Mixing bowls"
    ],
    pairingIdeas: [
      "Minted yogurt dip",
      "Chilled rosé or blood orange spritzer"
    ],
    isTrending: true
  },
  {
    id: "summer-burrata-panzanella",
    slug: "summer-burrata-panzanella",
    title: "Summer Burrata Panzanella",
    description:
      "Heirloom tomatoes, torn sourdough, and creamy burrata with basil-chili vinaigrette.",
    difficulty: "Easy",
    cuisines: ["Italian", "Seasonal"],
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 6,
    calories: 390,
    rating: 4.7,
    heroImage:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["Vegetarian"],
    highlight:
      "Crisp sourdough croutons and creamy burrata soak up a punchy basil vinaigrette.",
    ingredients: [
      { name: "Heirloom tomatoes", amount: "4 cups", notes: "thick wedges" },
      { name: "Fresh burrata", amount: "2 balls", notes: "roughly torn" },
      { name: "Day-old sourdough", amount: "4 cups", notes: "torn bite-size" },
      { name: "English cucumber", amount: "1", notes: "sliced on bias" },
      { name: "Red onion", amount: "1/2", notes: "very thinly sliced" },
      { name: "Fresh basil leaves", amount: "1 cup", notes: "packed" },
      { name: "Calabrian chiles", amount: "2 tsp", notes: "minced" },
      { name: "Champagne vinegar", amount: "3 tbsp" },
      { name: "Extra-virgin olive oil", amount: "1/3 cup" },
      { name: "Honey", amount: "2 tsp" }
    ],
    steps: [
      "Toast sourdough in a skillet with a drizzle of olive oil until golden and crisp.",
      "Blend basil, Calabrian chiles, vinegar, honey, and oil with salt and pepper to make the vinaigrette.",
      "Combine tomatoes, cucumber, red onion, and croutons in a large bowl.",
      "Toss with half the vinaigrette and let sit 10 minutes to marinate.",
      "Transfer to a platter, add torn burrata, and drizzle with remaining dressing.",
      "Scatter with extra basil leaves and serve immediately."
    ],
    chefTips: [
      "Salt the tomatoes early to draw out juices; use them in the vinaigrette for extra flavor.",
      "Add grilled peaches when in season for a sweet contrast.",
      "Serve immediately to keep the bread pleasantly crisp."
    ],
    equipment: ["Cast-iron skillet", "Blender", "Large mixing bowl"],
    pairingIdeas: [
      "Chilled Lambrusco",
      "Crispy prosciutto shards on the side"
    ],
    isSeasonal: true
  },
  {
    id: "smoky-cauli-tacos",
    slug: "smoky-cauliflower-tacos",
    title: "Smoky Cauliflower Tacos",
    description:
      "Sheet-pan cauliflower tacos with chipotle, citrus slaw, and avocado crema.",
    difficulty: "Easy",
    cuisines: ["Mexican"],
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    calories: 410,
    rating: 4.6,
    heroImage:
      "https://images.unsplash.com/photo-1529694157877-10c6b0e60a39?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["Vegan", "Gluten-Free"],
    highlight:
      "Spiced cauliflower roasts until crisp, then gets piled into charred tortillas with tangy slaw.",
    ingredients: [
      { name: "Cauliflower", amount: "2 heads", notes: "cut into florets" },
      { name: "Chipotle peppers in adobo", amount: "2", notes: "minced" },
      { name: "Ground cumin", amount: "1 tsp" },
      { name: "Smoked paprika", amount: "1 tsp" },
      { name: "Corn tortillas", amount: "12", notes: "warmed" },
      { name: "Red cabbage", amount: "2 cups", notes: "thinly sliced" },
      { name: "Fresh cilantro", amount: "1/2 cup", notes: "roughly chopped" },
      { name: "Lime", amount: "2", notes: "juiced" },
      { name: "Avocado", amount: "2", notes: "ripe" },
      { name: "Vegan yogurt", amount: "1/2 cup" }
    ],
    steps: [
      "Preheat oven to 425°F (220°C). Toss cauliflower with chipotle, spices, oil, and salt on a sheet pan.",
      "Roast for 25 minutes, shaking the pan halfway through for even browning.",
      "Whisk lime juice with a pinch of sugar and salt, then toss with cabbage and cilantro for a quick slaw.",
      "Blend avocado, vegan yogurt, lime zest, and a pinch of salt until silky.",
      "Char tortillas over an open flame or in a hot skillet.",
      "Stuff tortillas with cauliflower, slaw, and a drizzle of avocado crema."
    ],
    chefTips: [
      "Add roasted chickpeas for extra protein.",
      "Use a microplane to add lime zest to the crema for brightness.",
      "Keep tortillas warm by wrapping in a clean kitchen towel."
    ],
    equipment: ["Half-sheet pan", "Blender", "Mixing bowls"],
    pairingIdeas: [
      "Watermelon agua fresca",
      "Grilled street corn"
    ],
    isTrending: true
  },
  {
    id: "slow-braised-short-ribs",
    slug: "slow-braised-short-ribs",
    title: "Slow-Braised Short Ribs",
    description:
      "Fall-off-the-bone beef short ribs braised with red wine, herbs, and root vegetables.",
    difficulty: "Challenging",
    cuisines: ["French"],
    prepTime: 30,
    cookTime: 180,
    totalTime: 210,
    servings: 6,
    calories: 720,
    rating: 5,
    heroImage:
      "https://images.unsplash.com/photo-1612872087720-bb876e1d7d05?auto=format&fit=crop&w=1400&q=80",
    dietTags: [],
    highlight:
      "Deeply caramelized ribs simmer low-and-slow for a rich sauce that begs for creamy mash.",
    ingredients: [
      { name: "Beef short ribs", amount: "4 lb", notes: "bone-in" },
      { name: "Dry red wine", amount: "2 cups" },
      { name: "Beef stock", amount: "3 cups" },
      { name: "Carrots", amount: "3", notes: "large, chopped" },
      { name: "Celery stalks", amount: "3", notes: "chopped" },
      { name: "Yellow onion", amount: "2", notes: "diced" },
      { name: "Tomato paste", amount: "2 tbsp" },
      { name: "Fresh thyme", amount: "6 sprigs" },
      { name: "Bay leaves", amount: "2" },
      { name: "Balsamic vinegar", amount: "1 tbsp" }
    ],
    steps: [
      "Preheat oven to 325°F (165°C). Season short ribs generously with salt and pepper.",
      "Sear ribs in a Dutch oven over medium-high heat until well browned on all sides; set aside.",
      "Sauté onion, carrots, and celery in the same pot until softened, then add tomato paste and cook until deep red.",
      "Deglaze with red wine, scraping up browned bits, and reduce by half.",
      "Return ribs to pot, add stock, herbs, and balsamic; bring to a gentle simmer.",
      "Cover and braise in the oven for 2 1/2 to 3 hours, until meat is tender.",
      "Skim fat, reduce sauce if needed, and serve over creamy polenta or mashed potatoes."
    ],
    chefTips: [
      "Make a day ahead and chill; removing the chilled fat cap is effortless.",
      "Add a splash of aged balsamic just before serving for brightness.",
      "Serve with horseradish crème fraîche to cut the richness."
    ],
    equipment: ["Dutch oven", "Tongs", "Wooden spoon"],
    pairingIdeas: [
      "Creamy parmesan polenta",
      "Full-bodied Cabernet Sauvignon"
    ]
  },
  {
    id: "miso-maple-brussels",
    slug: "miso-maple-brussels",
    title: "Miso Maple Brussels Skillet",
    description:
      "Caramelized Brussels sprouts tossed with miso-maple butter, crunchy pepitas, and herbs.",
    difficulty: "Easy",
    cuisines: ["Weeknight"],
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    calories: 280,
    rating: 4.5,
    heroImage:
      "https://images.unsplash.com/photo-1604908177075-3d4780d5f995?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["Vegetarian", "Gluten-Free"],
    highlight:
      "Sweet, savory, and umami-packed Brussels perfect as a side or grain-bowl topper.",
    ingredients: [
      { name: "Brussels sprouts", amount: "1 1/2 lb", notes: "halved" },
      { name: "White miso paste", amount: "2 tbsp" },
      { name: "Pure maple syrup", amount: "2 tbsp" },
      { name: "Unsalted butter", amount: "2 tbsp" },
      { name: "Rice vinegar", amount: "1 tbsp" },
      { name: "Toasted pepitas", amount: "1/3 cup" },
      { name: "Fresh chives", amount: "2 tbsp", notes: "finely chopped" }
    ],
    steps: [
      "Heat a large skillet over medium-high and sear Brussels sprouts cut-side down in butter until deeply golden.",
      "Whisk miso, maple syrup, and vinegar; pour into skillet and toss to coat.",
      "Cook 2-3 minutes until glaze clings to sprouts.",
      "Finish with toasted pepitas and chives."
    ],
    chefTips: [
      "Add crispy pancetta for a smoky and salty boost.",
      "Swap butter for sesame oil to keep it vegan.",
      "Keep the heat fairly high to avoid steaming the sprouts."
    ],
    equipment: ["12-inch skillet", "Metal spatula", "Mixing bowl"],
    pairingIdeas: [
      "Garlicky yogurt sauce",
      "Chilled dry cider"
    ],
    isSeasonal: true
  },
  {
    id: "matcha-chia-parfait",
    slug: "matcha-chia-parfait",
    title: "Matcha Chia Parfait",
    description:
      "Layered chia pudding with matcha yogurt, sesame granola, and macerated berries.",
    difficulty: "Easy",
    cuisines: ["Breakfast", "Healthy"],
    prepTime: 15,
    cookTime: 0,
    totalTime: 240,
    servings: 4,
    calories: 310,
    rating: 4.4,
    heroImage:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["Vegetarian", "Gluten-Free"],
    highlight:
      "Meal-prep friendly breakfast layered with matcha yogurt and toasty sesame granola.",
    ingredients: [
      { name: "Chia seeds", amount: "1/2 cup" },
      { name: "Almond milk", amount: "2 cups", notes: "unsweetened" },
      { name: "Maple syrup", amount: "3 tbsp" },
      { name: "Vanilla extract", amount: "1 tsp" },
      { name: "Greek yogurt", amount: "1 1/2 cups" },
      { name: "Matcha powder", amount: "2 tsp" },
      { name: "Fresh berries", amount: "2 cups", notes: "mixed" },
      { name: "Lemon juice", amount: "1 tbsp" },
      { name: "Sesame granola", amount: "1 cup" }
    ],
    steps: [
      "Whisk chia seeds with almond milk, 2 tbsp maple syrup, and vanilla; chill 4 hours or overnight.",
      "Blend yogurt with matcha and remaining maple syrup until smooth.",
      "Macerate berries with lemon juice and a pinch of sugar for 10 minutes.",
      "Layer chia pudding, matcha yogurt, berries, and granola in glasses."
    ],
    chefTips: [
      "Stir the chia pudding after 10 minutes of soaking to prevent clumps.",
      "Use coconut yogurt to keep the parfait dairy-free.",
      "Top with black sesame seeds for extra crunch."
    ],
    equipment: ["Mixing bowl", "Whisk", "Storage jars"],
    pairingIdeas: [
      "Iced matcha latte",
      "Coconut-cashew energy bites"
    ],
    isTrending: true
  },
  {
    id: "black-garlic-ramen-eggs",
    slug: "black-garlic-ramen-eggs",
    title: "Black Garlic Ramen Eggs",
    description:
      "Soft-boiled eggs marinated in black garlic shoyu for umami-packed snacking.",
    difficulty: "Easy",
    cuisines: ["Japanese"],
    prepTime: 10,
    cookTime: 7,
    totalTime: 180,
    servings: 6,
    calories: 90,
    rating: 4.9,
    heroImage:
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["High-Protein"],
    highlight:
      "Jammy eggs soak in soy, mirin, and black garlic for savory meal prep.",
    ingredients: [
      { name: "Large eggs", amount: "6" },
      { name: "Tamari or soy sauce", amount: "1/2 cup" },
      { name: "Mirin", amount: "1/4 cup" },
      { name: "Black garlic cloves", amount: "4", notes: "mashed" },
      { name: "Rice vinegar", amount: "1 tbsp" },
      { name: "Scallions", amount: "2", notes: "thinly sliced" }
    ],
    steps: [
      "Bring a pot of water to a gentle boil; add eggs and cook 6 1/2 minutes.",
      "Shock eggs in ice water, then peel carefully.",
      "Whisk tamari, mirin, black garlic, and vinegar; pour into a jar.",
      "Submerge eggs in marinade and chill at least 3 hours or up to 2 days.",
      "Serve halved with scallions sprinkled over the top."
    ],
    chefTips: [
      "Roll eggs gently on the counter to crack the shell without tearing the whites.",
      "Reuse that marinade for tofu or chicken within 3 days.",
      "Stir in 1 tsp chili crisp to add heat."
    ],
    equipment: ["Saucepan", "Mixing bowl", "Glass jar"],
    pairingIdeas: [
      "Add to noodle bowls",
      "Serve over avocado toast"
    ]
  },
  {
    id: "caramelized-leek-risotto",
    slug: "caramelized-leek-risotto",
    title: "Caramelized Leek Risotto",
    description:
      "Creamy arborio rice with sweet leeks, goat cheese, and lemon-thyme butter.",
    difficulty: "Moderate",
    cuisines: ["Italian"],
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    servings: 4,
    calories: 560,
    rating: 4.8,
    heroImage:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1400&q=80",
    dietTags: ["Vegetarian"],
    highlight:
      "Slowly caramelized leeks melt into risotto finished with bright lemon butter.",
    ingredients: [
      { name: "Arborio rice", amount: "1 1/2 cups" },
      { name: "Leeks", amount: "3", notes: "light green and white parts sliced" },
      { name: "Dry white wine", amount: "1 cup" },
      { name: "Vegetable stock", amount: "5 cups", notes: "warm" },
      { name: "Goat cheese", amount: "4 oz", notes: "crumbled" },
      { name: "Unsalted butter", amount: "3 tbsp" },
      { name: "Fresh thyme", amount: "1 tbsp", notes: "chopped" },
      { name: "Lemon", amount: "1", notes: "zested" },
      { name: "Parmesan cheese", amount: "1/3 cup", notes: "grated" }
    ],
    steps: [
      "Caramelize leeks slowly in butter with salt until golden and jammy.",
      "Stir in rice and toast for 2 minutes until edges are translucent.",
      "Deglaze with wine and cook until absorbed.",
      "Add warm stock a ladle at a time, stirring constantly until rice is creamy but al dente.",
      "Finish with goat cheese, parmesan, thyme, and lemon zest.",
      "Rest 5 minutes before serving for the creamiest texture."
    ],
    chefTips: [
      "Keep stock just below a simmer so the rice cooks evenly.",
      "Wrap goat cheese in plastic and freeze 10 minutes for easy crumbling.",
      "Serve with crispy fried leeks on top for texture."
    ],
    equipment: [
      "Heavy-bottomed pot",
      "Ladle",
      "Wooden spoon",
      "Microplane zester"
    ],
    pairingIdeas: [
      "Crisp sauvignon blanc",
      "Butter-seared scallops"
    ]
  }
];

export const getRecipeBySlug = (slug: string) =>
  recipes.find((recipe) => recipe.slug === slug);

export const getTrendingRecipes = () =>
  recipes.filter((recipe) => recipe.isTrending);

export const getSeasonalRecipes = () =>
  recipes.filter((recipe) => recipe.isSeasonal);

export const getDietTags = () => {
  const tags = new Set<DietTag>();
  recipes.forEach((recipe) => {
    recipe.dietTags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
};

export const getCuisineList = () => {
  const cuisines = new Set<string>();
  recipes.forEach((recipe) => {
    recipe.cuisines.forEach((c) => cuisines.add(c));
  });
  return Array.from(cuisines);
};
