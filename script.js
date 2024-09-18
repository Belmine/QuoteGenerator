// Récuperrer les éléments du DOM 

let  button = document.querySelector('button')
let div_citation = document.querySelector('.citation')
let container = document.querySelector(".container")
let div_auteur = document.querySelector('.auteur')


// Tableaux d auteurs et de citations 

const citations = [
    "La vie est ce qui arrive quand on est occupé à faire d'autres projets.",
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
    "Sois le changement que tu veux voir dans le monde.",
    "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
    "L'imagination est plus importante que la connaissance.",
    "Ne pleure pas parce que c'est fini, souris parce que c'est arrivé.",
    "Le seul véritable échec est de ne pas essayer.",
    "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.",
    "Le meilleur moyen de prédire l'avenir est de le créer.",
    "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.",
    "Tout ce que l'esprit peut concevoir et croire, il peut l'accomplir.",
    "La seule chose que l'on est sûr de ne pas réussir est celle que l'on ne tente pas.",
    "Il n'y a pas de chemin vers le bonheur, le bonheur est le chemin.",
    "Ce que vous obtenez en atteignant vos objectifs n'est pas aussi important que ce que vous devenez en les atteignant.",
    "Le voyage de mille lieues commence par un seul pas.",
    "On ne voit bien qu'avec le cœur, l'essentiel est invisible pour les yeux.",
    "L'éducation est l'arme la plus puissante pour changer le monde.",
    "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
    "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre.",
    "Ne crains pas d'avancer lentement, crains seulement de t'arrêter."
]

const auteurs = [
    "John Lennon",
    "Winston Churchill",
    "Mahatma Gandhi",
    "Confucius",
    "Albert Einstein",
    "Dr. Seuss",
    "George Clooney",
    "Eleanor Roosevelt",
    "Peter Drucker",
    "Dalai Lama",
    "Napoleon Hill",
    "Paul-Émile Victor",
    "Thich Nhat Hanh",
    "Zig Ziglar",
    "Lao Tseu",
    "Antoine de Saint-Exupéry",
    "Nelson Mandela",
    "Marcel Proust",
    "Nelson Mandela",
    "Proverbe chinois"
];

const couleurs = [
    "#E6E6FA", // Lavande
    "#87CEEB", // Bleu ciel
    "#98FF98", // Vert menthe
    "#FF7F50", // Corail
    "#FFD1DC", // Rose pâle
    "#GGGACD", // Jaune pâle
    "#40E0D0", // Turquoise
    "#C8A2C8", // Lilas
    "#FFFDD0", // Crème
    "#FFDAB9", // Pêche
    "#6296f1", // Bleu ardoise
    "#FF6347", // Rouge tomate
    "#FFD700", // Or
    "#228B22", // Vert forêt
    "#7af56c", // Bleu marine
    "pink", // Violet profond
    "#D3D3D3", // Gris clair
    "#FF00FF", // Magenta
    "#D2691E", // Marron chocolat
    "#2E8B57"  // Vert océan
];

const colors = [
    "#F08080", // Light Coral
    "#FA8072", // Salmon
    "#FFA07A", // Light Salmon
    "#20B2AA", // Light Sea Green
    "#778899", // Light Slate Gray
    "#B0C4DE", // Light Steel Blue
    "#FFB6C1", // Light Pink
    "#32CD32", // Lime Green
    "#800000", // Maroon
    "#66CDAA", // Medium Aquamarine
    "#BA55D3", // Medium Orchid
    "#9370DB", // Medium Purple
    "#3CB371", // Medium Sea Green
    "#7B68EE", // Medium Slate Blue
    "#00FA9A", // Medium Spring Green
    "#48D1CC", // Medium Turquoise
    "#C71585", // Medium Violet Red
    "#0ec0f1", // Midnight Blue
    "#FF4500", // Orange Red
    "#DA70D6"  // Orchid
  ];
  

function genererCitation(){
    // Récupérer un index 

    const i =  Math.floor(Math.random() * citations.length)

    // Récupérer la citation et auteur correspondant à l index correspondant 

    const citation = citations[i]
    const auteur = auteurs[i]
    const couleur = couleurs[i]
    const color = colors[i]

    container.style.backgroundColor = couleur
    button.style.backgroundColor = color 

    div_citation.innerHTML = citation 
    div_auteur.innerHTML = auteur 
     

   
}

button.addEventListener('click',genererCitation)