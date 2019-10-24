import React from "react";
import Card from "./Card";

// shallow function allows us to render component instances  to use in testing
import { shallow } from "enzyme";

describe("Card Tests", () => {
  let component;

  // beforeEach() provides setup to run prior to every test

  beforeEach(() => {
    component = shallow(<Card />);
  });

  it("should contain a HTML image tag", () => {
    expect(component.find("img").length).toEqual(1);
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
