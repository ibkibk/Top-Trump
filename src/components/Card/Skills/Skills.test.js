import React from "react";
import { shallow } from "enzyme";
import Skills from "./Skills";

const mockData = {
  loudness: 7,
  greed: 7,
  attitude: 5,
  sass: 5,
  mvp: 9
};

describe("Skills component Tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Skills skills={mockData} />);
  });

  // Testing different inputs and use cases for component method
  it("should have a method that capitalises the first letter of a word", () => {
    expect(component.instance().capitaliseString("barry")).toEqual("Barry");
    expect(component.instance().capitaliseString("hARry")).toEqual("HARry");
    expect(component.instance().capitaliseString("LARRY")).toEqual("LARRY");
  });

  it('should return "MVP" when capitaliseString method is called with "mvp" as an argument', () => {
    expect(component.instance().capitaliseString("mvp")).toEqual("MVP");
  });

  it("should render one table row for each key-value pair in the skills object", () => {
    const numberRowsRendered = component.find("tr").length;
    const numberDataProperties = Object.keys(mockData).length;

    expect(numberRowsRendered).toEqual(numberDataProperties);
  });
});
