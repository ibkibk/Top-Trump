import React from "react";
import Card from "./Card";
import craig from "../../static/images/craig.png";

// mount function allows us to render a component instance - including any children
import { mount } from "enzyme";

// mock data object to be passed as props into test component instance
const mockData = {
  description:
    "Craig is Head of Technology for _nology. He loves rock climbing and solving problems. The only problem craig hasn't been able to solve is how to climb while leaving his ego on the ground.",
  name: "Craig Livings",
  picture: craig,
  role: "Trainer",
  skills: { loudness: 5, greed: 3, attitude: 8, sass: 7, mvp: 9 }
};

describe("Card Tests", () => {
  let component;
  let testFunction;
  // beforeEach() provides setup to run prior to every test

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(<Card selectCard={testFunction} cardData={mockData} />);
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain a HTML image tag", () => {
    expect(component.find("img").length).toEqual(1);
  });

  it("should received data passed as props from parent", () => {
    expect(component.props().cardData).toEqual(mockData);
  });

  it("should render data passed in as props", () => {
    expect(component.text()).toContain(mockData.name);
    expect(component.text()).toContain(mockData.description.substring(0, 120));
    expect(component.find(mockData.picture)).toBeTruthy();
  });

  it("should toggle isFaceUp state through handleClick method", () => {
    expect(component.state("isFaceUp")).toEqual(true);
    component.instance().handleClick();
    expect(component.state("isFaceUp")).toEqual(false);
    component.instance().handleClick();
    expect(component.state("isFaceUp")).toEqual(true);
  });

  it("should update isFaceUp state when component is clicked", () => {
    expect(component.state("isFaceUp")).toEqual(true);
    component.find(".card").simulate("click");
    expect(component.state("isFaceUp")).toEqual(false);
  });

  it("should apply .cardRotated class when isFaceUp state === false", () => {
    expect(component.find(".card").hasClass("cardRotated")).toEqual(false);

    component.setState({
      isFaceUp: false
    });
    expect(component.find(".card").hasClass("cardRotated")).toEqual(true);
  });

  it("should receive function as selectCard in component props", () => {
    expect(component.props().selectCard).toEqual(testFunction);
  });

  it("should call selectCard function in props when card is clicked", () => {
    component.find(".scene").simulate("click");
    expect(testFunction).toHaveBeenCalledTimes(1);
  });

  it("should call selectCard function in props with cards data as argument", () => {
    component.find(".scene").simulate("click");
    expect(testFunction).toHaveBeenCalledWith(mockData);
  });
});
