import React from "react";
import { mount } from "enzyme";
import Cards from "./Cards";
import data from "../../static/data/data";
import Card from "../../components/Card";

describe("Cards Tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(<Cards closeMenu={testFunction} />, { disableLifecycleMethods: true });
  });

  it("should render one instance of card component for each object of card data in component state", () => {
    component.setState({
      filteredList: data
    });
    const numberCardsRendered = component.find(Card).length;
    const numberDataObjects = data.length;

    expect(numberCardsRendered).toEqual(numberDataObjects);
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
