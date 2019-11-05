import craig from "../images/craig.png";
import liam from "../images/liam.png";

const cards = [
  {
    docId: "1",
    description:
      "Craig is Head of Technology for _nology. He loves rock climbing and solving problems. The only problem craig hasn't been able to solve is how to climb while leaving his ego on the ground.",
    name: "Craig Livings",
    picture: craig,
    role: "Trainer",
    skills: { loudness: 5, greed: 3, attitude: 8, sass: 7, mvp: 9 }
  },
  {
    docId: "2",
    description:
      "Liam is one of our great modern thinkers. He's always offering an opinion whether it is asked for or not. Ask Liam any question and he will give you any answer.",
    name: "Liam Farrell",
    picture: liam,
    role: "Trainer",
    skills: { loudness: 7, greed: 7, attitude: 5, sass: 5, mvp: 9 }
  }
];

export default cards;
