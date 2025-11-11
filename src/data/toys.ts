import toyRobot from "@/assets/toy-robot.jpg";
import toyDollhouse from "@/assets/toy-dollhouse.jpg";
import toyRacetrack from "@/assets/toy-racetrack.jpg";
import toyArtset from "@/assets/toy-artset.jpg";
import toyScience from "@/assets/toy-science.jpg";
import toyUnicorn from "@/assets/toy-unicorn.jpg";
import toyDrone from "@/assets/toy-drone.jpg";
import toyKitchen from "@/assets/toy-kitchen.jpg";

export interface Toy {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  ageRange: string;
  videoUrl?: string;
  gallery: string[];
}

export const toys: Toy[] = [
  {
    id: "1",
    name: "Tiranosaurio Pistola luminosa",
    category: "Dinosaurios",
    price: 49.99,
    image: toyRobot,
    description: "Robot educativo programable con más de 200 piezas. Ideal para aprender sobre robótica y programación mientras te diviertes construyendo.",
    features: [
      "Más de 200 piezas de construcción",
      "Programable vía Bluetooth",
      "10 modos de juego diferentes",
      "Incluye manual de instrucciones ilustrado"
    ],
    ageRange: "8-14 años",
    gallery: [toyRobot, toyRobot, toyRobot]
  },
  {
    id: "2",
    name: "Casa de Muñecas Moderna",
    category: "Muñecas",
    price: 89.99,
    image: toyDollhouse,
    description: "Casa de muñecas de 3 pisos con muebles y accesorios. Diseño moderno con iluminación LED y más de 30 accesorios incluidos.",
    features: [
      "3 pisos espaciosos",
      "Iluminación LED incluida",
      "Más de 30 accesorios",
      "Muebles de madera de calidad"
    ],
    ageRange: "3-10 años",
    gallery: [toyDollhouse, toyDollhouse, toyDollhouse]
  },
  {
    id: "3",
    name: "Pista de Carreras Extrema",
    category: "Vehículos",
    price: 65.99,
    image: toyRacetrack,
    description: "Pista de carreras con loops y rampas. Incluye 2 autos a control remoto de alta velocidad y pista modular de 5 metros.",
    features: [
      "2 autos de control remoto",
      "Pista modular de 5 metros",
      "Loops y rampas emocionantes",
      "Velocidad hasta 20 km/h"
    ],
    ageRange: "6-12 años",
    gallery: [toyRacetrack, toyRacetrack, toyRacetrack]
  },
  {
    id: "4",
    name: "Set de Arte Profesional",
    category: "Arte y Manualidades",
    price: 35.99,
    image: toyArtset,
    description: "Set completo de arte con pinturas, pinceles, lienzos y más. Todo lo necesario para que los pequeños artistas creen sus obras maestras.",
    features: [
      "50+ pinturas de colores vibrantes",
      "15 pinceles profesionales",
      "3 lienzos de diferentes tamaños",
      "Paleta de mezclas y delantal"
    ],
    ageRange: "5-12 años",
    gallery: [toyArtset, toyArtset, toyArtset]
  },
  {
    id: "5",
    name: "Laboratorio de Ciencias",
    category: "Educativos",
    price: 42.99,
    image: toyScience,
    description: "Kit de experimentos científicos con 50+ actividades. Aprende química, física y biología de manera divertida y segura.",
    features: [
      "Más de 50 experimentos",
      "Manual educativo ilustrado",
      "Materiales seguros y certificados",
      "Guía para padres incluida"
    ],
    ageRange: "8-14 años",
    gallery: [toyScience, toyScience, toyScience]
  },
  {
    id: "6",
    name: "Peluche Unicornio Gigante",
    category: "Peluches",
    price: 55.99,
    image: toyUnicorn,
    description: "Peluche suave y abrazable de 80cm. Hecho con materiales premium hipoalergénicos y lavable en lavadora.",
    features: [
      "80cm de altura",
      "Materiales hipoalergénicos",
      "Lavable en lavadora",
      "Relleno extra suave"
    ],
    ageRange: "3+ años",
    gallery: [toyUnicorn, toyUnicorn, toyUnicorn]
  },
  {
    id: "7",
    name: "Drone para Principiantes",
    category: "Tecnología",
    price: 79.99,
    image: toyDrone,
    description: "Drone fácil de volar con cámara HD. Perfecto para iniciarse en el mundo de los drones con funciones de estabilización automática.",
    features: [
      "Cámara HD 720p",
      "Modo de estabilización automática",
      "Control por app móvil",
      "Batería de 20 minutos"
    ],
    ageRange: "10+ años",
    gallery: [toyDrone, toyDrone, toyDrone]
  },
  {
    id: "8",
    name: "Set de Cocina Infantil",
    category: "Juego de Roles",
    price: 95.99,
    image: toyKitchen,
    description: "Cocina de juguete con luces y sonidos. Incluye utensilios y alimentos de juguete para horas de diversión culinaria.",
    features: [
      "Luces y sonidos realistas",
      "Agua de mentira en grifo",
      "20+ accesorios incluidos",
      "Altura ajustable"
    ],
    ageRange: "3-8 años",
    gallery: [toyKitchen, toyKitchen, toyKitchen]
  }
];
