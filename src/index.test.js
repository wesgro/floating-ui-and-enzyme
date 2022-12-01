import React from "react";
import Enzyme, { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import Adapter from "enzyme-adapter-react-16";
import { Card } from "./Card";
Enzyme.configure({ adapter: new Adapter() });

it("this wont fail", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(<Card />);
  });
  console.log(wrapper.html());
});

it("this will fail", async () => {
  let wrapper;
  wrapper = mount(<Card />);
  console.log(wrapper.html());
});
