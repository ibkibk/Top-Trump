import React from "react";
import { mount } from "enzyme";
import Login from "./Login";

describe("Login Tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    /* 
        we can create and spy on 'mock' functions using 
        jest.fn() in order to see how and when they're called
        */
    testFunction = jest.fn();
    component = mount(<Login signIn={testFunction} />);
  });

  it("should receive a function passed in as signIn in props", () => {
    expect(component.props().signIn).toEqual(testFunction);
  });

  it("should call the function passed in as props when component is clicked", () => {
    expect(testFunction).toHaveBeenCalledTimes(0);
    component.simulate("click");
    expect(testFunction).toHaveBeenCalledTimes(1);
  });
});
