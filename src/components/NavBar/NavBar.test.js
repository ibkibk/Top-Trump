import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";
import NavItem from "../NavItem";

describe("NavBar component tests", () => {
  it("should render at least one instance of NavItem", () => {
    const component = shallow(<NavBar menuState={true} />);
    expect(component.find(NavItem).length > 0).toEqual(true);
  });
});
