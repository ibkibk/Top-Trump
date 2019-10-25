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

describe("CardComponent Tests", () => {
  let component;

  // beforeEach() provides setup to run prior to every test

  beforeEach(() => {
    component = mount(<Card cardData={mockData} />);
  });

  it("should contain a HTML image tag", () => {
    expect(component.find("img").length).toEqual(1);
  });

  it("should receive data passed as props from parent", () => {
    expect(component.props().cardData).toEqual(mockData);
  });

  it("should render data passed in as props", () => {
    expect(component.text()).toContain(mockData.name);
    expect(component.text()).toContain(mockData.description.substring(0, 175));
    expect(component.find(mockData.picture)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
