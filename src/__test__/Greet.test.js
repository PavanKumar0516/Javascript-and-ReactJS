import React from "react";
import App from "../App";
import { render, screen,fireEvent } from '@testing-library/react';
import renderer from "react-test-renderer"

const tree =renderer.create(<App/>);
//-------------------------------
it("Test App componet renders correctly or not" ,
()=>{
    expect(tree).toMatchSnapshot();
});
//---------------------------------------------------
it(" Test app rendewrs h2 tag with id",()=>{
    const {getByTestId}=render(<App/>);
    expect(getByTestId("compId")).toHaveTextContent("Happy Janmashtami");
});