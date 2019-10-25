import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";
import data from "../../static/data/data";
import Card from "../../components/Card";

describe("Cards Tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Cards />);
  });

  it("should render one instance of card component for each object of card data", () => {
    const numberCardsRendered = component.find(Card).length;
    const numberDataObjects = data.length;

    expect(numberCardsRendered).toEqual(numberDataObjects);
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
