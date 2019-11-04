import React from "react";
import { mount } from "enzyme";
import Header from "./Header";

describe("Header component Tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    /* 
      we can create and spy on 'mock' functions using 
      jest.fn() in order to see how and when they're called
      */
    testFunction = jest.fn();
    component = mount(<Header toggleMenu={testFunction} />);
  });

  it("should render one FontAwesome icon", () => {
    expect(component.find("FontAwesomeIcon").length).toEqual(1);
  });

  it("should receive a function passed in as toggleMenu in props", () => {
    expect(component.props().toggleMenu).toEqual(testFunction);
  });

  it("should call the function passed in as props when FontAwesomIcon is clicked", () => {
    expect(testFunction).toHaveBeenCalledTimes(0);
    component.find("FontAwesomeIcon").simulate("click");
    expect(testFunction).toHaveBeenCalledTimes(1);
  });
});
