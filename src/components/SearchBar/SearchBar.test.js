import React from "react";
import { mount } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar component Tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(
      <SearchBar setSearchText={testFunction} searchText={"test string"} />
    );
  });

  it("should render one input box with type 'text'", () => {
    expect(component.find("input").length).toEqual(1);
    expect(component.find("input").prop("type")).toEqual("text");
  });

  it("should receive a function passed in as setSearchText in props", () => {
    expect(component.props().setSearchText).toEqual(testFunction);
  });

  it("should call the function passed in as props on inputChange", () => {
    expect(testFunction).toHaveBeenCalledTimes(0);
    component.find("input").simulate("change", { target: { value: "Hello" } });
    expect(testFunction).toHaveBeenCalledTimes(1);
  });

  it("should take in a string as searchText in props and set as input value", () => {
    expect(component.props().searchText).toEqual("test string");
    expect(component.find("input").prop("value")).toEqual("test string");
  });
});
