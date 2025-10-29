import prop1 from "../assets/images/prop1.webp";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.webp";
import prop4 from "../assets/images/prop4.webp";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const property = [
  {
    id: 1,
    images: prop1,
    address: "6 Downtown, Las Vegas",
    location: "Las Vegas",
    category: "Villa",
    type: "Sale",
    name: "Villa with Amazing View",
    price: "$ 213.23",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "250 sq ft",
    owner: "Alice Adams",
  },
  {
    id: 2,
    images: prop2,
    address: "Meadows Village, Las Vegas",
    location: "Las Vegas",
    category: "Townhouse",
    type: "Sale",
    name: "Townhouse for Sale",
    price: "$ 345.18",
    about:
      "Spacious modern townhouse located in the heart of the city, with nearby amenities and parks.",
    bed: 4,
    bath: 3,
    area: "450 sq ft",
    owner: "Drew Alice",
  },
  {
    id: 3,
    images: prop3,
    address: "49 DC Townhall Alex",
    location: "Washington DC",
    category: "Duplex",
    type: "Rent",
    name: "Duplex Sea Facing for Rent",
    price: "$ 652.18",
    about:
      "Modern duplex with ocean view, perfect for families or professionals seeking luxury living.",
    bed: 4,
    bath: 3,
    area: "129 sq ft",
    owner: "Fursi Bam",
  },
  {
    id: 4,
    images: prop4,
    address: "Underground Street 20, Texas",
    location: "Texas",
    category: "Villa",
    type: "Sale",
    name: "Villa with Side View",
    price: "$ 876.13",
    about:
      "Elegant villa in a peaceful neighborhood, featuring modern design and premium finishes.",
    bed: 4,
    bath: 3,
    area: "453 sq ft",
    owner: "Neon Alice",
  },
  {
    id: 5,
    images: prop5,
    address: "Rubari London Hills",
    location: "London",
    category: "Villa",
    type: "Rent",
    name: "Awesome Villa for Rent",
    price: "$ 341.83",
    about:
      "Beautiful rental villa with premium interiors and a great neighborhood.",
    bed: 4,
    bath: 3,
    area: "320 sq ft",
    owner: "Firari Alice",
  },
  {
    id: 6,
    images: prop6,
    address: "Northern Fersh Alice",
    location: "Texas",
    category: "Farmhouse",
    type: "Sale",
    name: "Street Farm for Sale",
    price: "$ 675.23",
    about:
      "Large farmhouse property ideal for agriculture or countryside living, with modern facilities.",
    bed: 4,
    bath: 3,
    area: "340 sq ft",
    owner: "Jordan Bram",
  },
];

export const service = [
  {
    id:1,
    icon: MdNoteAlt,
    title: "Sell your home",
    desc: "We sell your home at the best market price",
  },
  {
     id:2,
    icon: FaHome,
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
     id:3,
    icon: GoLaw,
    title: "Legal services",
    desc: "Expert legal help for all related property items",
  },
  {
     id:4,
    icon: FaSearch,
    title: "Home inspection",
    desc: "We make sure you get what you were promised",
  },
  {
     id:5,
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan",
  },
  {
     id:6,
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation",
  },
];

export const client = [
  {
    image: client1,
    name: "Dana Gilmore",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client2,
    name: "Ana Anderson",
    text: "Very good work",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client3,
    name: "Albert adame",
    text: "Very well",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client4,
    name: "Dana Gilmore",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client5,
    name: "Alex gilmore",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client6,
    name: "Sivay Ashbi",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
];

export const coreValues = [
  {
    title: "Integrity",
    desc: "We believe in honesty, transparency, and ethical practices.",
  },
  {
    title: "Innovation",
    desc: "We deliver modern solutions with creativity and excellence.",
  },
  {
    title: "Customer First",
    desc: "Our clients’ needs are always our top priority.",
  },
  {
    title: "Sustainability",
    desc: "We focus on eco-friendly practices for a better tomorrow.",
  },
  {
    title: "Excellence",
    desc: "We never compromise on quality and reliability.",
  },
  {
    title: "Teamwork",
    desc: "We work together to achieve great outcomes.",
  },
];

