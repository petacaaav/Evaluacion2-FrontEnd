const personajes = [
    {
      "id": "goku",
      "name": "Goku",
      "race": "Saiyan",
      "gender": "Male",
      "health": 500000,
      "attack": 50000,
      "defense": 50000,
      "kiRestoreSpeed": 50000,
      "abilities": [
        "Super Saiyan Transformations",
        "Super Kamehameha",
        "Super Dragon Fist"
      ],
      "img": "assets/goku.png"
    },
    {
      "id": "vegeta",
      "name": "Vegeta",
      "race": "Saiyan",
      "gender": "Male",
      "health": 490000,
      "attack": 49000,
      "defense": 49000,
      "kiRestoreSpeed": 49000,
      "abilities": [
        "Super Saiyan Transformations",
        "Final Flash",
        "Big Bang Attack"
      ],
      "img": "assets/vegeta.png"
    },
    {
      "id": "gohan",
      "name": "Gohan",
      "race": "Humano/Saiyan",
      "gender": "Male",
      "health": 440000,
      "attack": 38000,
      "defense": 38000,
      "kiRestoreSpeed": 39000,
      "abilities": [
        "Super Saiyan Transformations",
        "Super Kamehameha",
        "Masenko"
      ],
      "img": "assets/gohan.png"
    },
    {
      "id": "trunks",
      "name": "Trunks",
      "race": "Humano/Saiyan",
      "gender": "Male",
      "health": 470000,
      "attack": 44000,
      "defense": 43000,
      "kiRestoreSpeed": 40000,
      "abilities": [
        "Super Saiyan Transformations",
        "Galic Gun",
        "Finish Buster"
      ],
      "img": "assets/trunks.png"
    },
    {
      "id": "frieza",
      "name": "Frieza",
      "race": "Unknown",
      "gender": "Male",
      "health": 475000,
      "attack": 47000,
      "defense": 47000,
      "kiRestoreSpeed": 44000,
      "abilities": [
        "Eye Laser",
        "Death Beam",
        "Death Ball"
      ],
      "img": "assets/frieza.png"
    },
    {
      "id": "cell",
      "name": "Cell",
      "race": "Android",
      "gender": "Male",
      "health": 200000,
      "attack": 20000,
      "defense": 20000,
      "kiRestoreSpeed": 20000,
      "abilities": [
        "Energy Shield",
        "Super Kamehameha",
        "Destructo Disk"
      ],
      "img": "assets/cell.png"
    },
    {
      "id": "buu",
      "name": "Buu",
      "race": "Majin",
      "gender": "Male",
      "health": 350000,
      "attack": 29000,
      "defense": 29000,
      "kiRestoreSpeed": 28000,
      "abilities": [
        "Absorption",
        "Healing",
        "Chocolate Beam"
      ],
      "img": "assets/buu.png"
    },
    {
      "id": "beerus",
      "name": "Beerus",
      "race": "God",
      "gender": "Male",
      "health": 600000,
      "attack": 60000,
      "defense": 60000,
      "kiRestoreSpeed": 50000,
      "abilities": [
        "Destruction Sphere",
        "Destruction Gods, Fierce Attack",
        "Hakai"
      ],
      "img": "assets/beerus.png"
    },
    {
      "id": "piccolo",
      "name": "Piccolo",
      "race": "Namekian",
      "gender": "Male",
      "health": 230000,
      "attack": 25000,
      "defense": 25000,
      "kiRestoreSpeed": 25000,
      "abilities": [
        "Special Beam Cannon",
        "Tri-Form",
        "Light Grenade"
      ],
      "img": "assets/piccolo.png"
    },
    {
      "id": "krillin",
      "name": "Krillin",
      "race": "Human",
      "gender": "Male",
      "health": 180000,
      "attack": 20000,
      "defense": 20000,
      "kiRestoreSpeed": 20000,
      "abilities": [
        "Kamehameha Wave",
        "Destructo Disk",
        "Solar Flare"
      ],
      "img": "assets/krillin.png"
    },
    {
      "id": "tien",
      "name": "Tien",
      "race": "Human",
      "gender": "Male",
      "health": 170000,
      "attack": 18000,
      "defense": 18000,
      "kiRestoreSpeed": 19000,
      "abilities": [
        "Tri Beam",
        "Solar Flare",
        "Tri-Form"
      ],
      "img": "assets/tien.png"
    },
    {
      "id": "android 17",
      "name": "Android 17",
      "race": "Android",
      "gender": "Male",
      "health": 440000,
      "attack": 43000,
      "defense": 42000,
      "kiRestoreSpeed": 42000,
      "abilities": [
        "Super Saiyan Transformations",
        "Super Kamehameha",
        "Super Dragon Fist"
      ],
      "img": "assets/android17.png"
    },
    {
      "id": "android 18",
      "name": "Android 18",
      "race": "Android",
      "gender": "Female",
      "health": 420000,
      "attack": 40000,
      "defense": 40000,
      "kiRestoreSpeed": 40000,
      "abilities": [
        "Android Barrier",
        "Full Power Energy Ball",
        "Power Blitz"
      ],
      "img": "assets/android18.png"
    },
    {
      "id": "broly",
      "name": "Broly",
      "race": "Saiyan",
      "gender": "Male",
      "health": 800000,
      "attack": 80000,
      "defense": 80000,
      "kiRestoreSpeed": 80000,
      "abilities": [
        "Super Saiyan Transformations",
        "Eraser Cannon",
        "Gigantic Slam"
      ],
      "img": "assets/broly.png"
    },
    {
      "id": "gogeta",
      "name": "Gogeta",
      "race": "Saiyan",
      "gender": "Male",
      "health": 700000,
      "attack": 60000,
      "defense": 55000,
      "kiRestoreSpeed": 55000,
      "abilities": [
        "Super Saiyan Transformations",
        "Big Bang Kamehameha",
        "Stardust Breaker"
      ],
      "img": "assets/gogeta.png"
    },
    {
      "id": "goku black",
      "name": "Goku Black",
      "race": "Saiyan",
      "gender": "Male",
      "health": 480000,
      "attack": 48000,
      "defense": 48000,
      "kiRestoreSpeed": 48000,
      "abilities": [
        "Super Saiyan Transformations",
        "Black Kamehameha",
        "God Slicer"
      ],
      "img": "assets/gokublack.png"
    },
    {
      "id": "vegito",
      "name": "Vegito",
      "race": "Saiyan",
      "gender": "Male",
      "health": 780000,
      "attack": 70000,
      "defense": 60000,
      "kiRestoreSpeed": 60000,
      "abilities": [
        "Super Saiyan Transformations",
        "Final Kamehameha",
        "Beam Sword Slash"
      ],
      "img": "assets/vegito.png"
    },
    {
      "id": "hit",
      "name": "Hit",
      "race": "Unknown",
      "gender": "Male",
      "health": 460000,
      "attack": 46000,
      "defense": 46000,
      "kiRestoreSpeed": 46000,
      "abilities": [
        "Time Skip",
        "Death Blow",
        "Vital Point Attack"
      ],
      "img": "assets/hit.png"
    },
    {
      "id": "jiren",
      "name": "Jiren",
      "race": "Unknown",
      "gender": "Male",
      "health": 740000,
      "attack": 74000,
      "defense": 74000,
      "kiRestoreSpeed": 74000,
      "abilities": [
        "Invisible Eye Blast",
        "Energy Barrier",
        "Overheat Magnetron"
      ],
      "img": "assets/jiren.png"
    }
  ];
  