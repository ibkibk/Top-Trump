import React from "react";
import { shallow } from "enzyme";
import NavItem from "./NavItem";

describe("NavItem tests", () => {
  it("should render a name passed in as props", () => {
    const component = shallow(<NavItem name={"Cards"} />);
    expect(component.text()).toEqual("Cards");
  });
});
