import React from "react";
import Card from "./Card";
import craig from "../../static/images/craig.png";

export default {
  title: "Card"
};

const mockData = {
  description:
    "Craig is Head of Technology for _nology. He loves rock climbing and solving problems. The only problem craig hasn't been able to solve is how to climb while leaving his ego on the ground.",
  name: "Craig Livings",
  picture: craig,
  role: "Trainer",
  skills: { loudness: 5, greed: 3, attitude: 8, sass: 7, mvp: 9 }
};

export const card = () => <Card cardData={mockData} />;
