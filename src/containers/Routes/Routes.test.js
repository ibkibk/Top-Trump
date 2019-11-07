import React from "react";
import Routes from "./Routes";
import { shallow } from "enzyme";

describe("Routes", () => {
  let component;
  let signInMock;
  let instance;

  beforeEach(() => {
    /* 
    we can use mocks to stop asyncronous database calls and fake the data returned
    */
    signInMock = jest.fn(() => console.log("sign in method mock"));
    component = shallow(<Routes />, { disableLifecycleMethods: true });
    instance = component.instance();
    instance.signIn = signInMock;
    instance.signIn();
  });

  xit("should update user state when signed in", () => {
    //expect();
  });
});
