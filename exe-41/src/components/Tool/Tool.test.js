import React from "react";
import { render } from "@testing-library/react";


import {Tool} from './Tool';

test("it works", ()=> {
    const { getByText, getByLabelText } = render(<Tool set={6} loadData={()=>{}}/>);
    const h3 = getByText("Line Chart");
    const {value} = getByLabelText("How many data do you want to see:");
    expect(value).toBe("6")
});


