import React from "react";

import { render } from "react-native-testing-library";
import Counter from "./index";

describe("testing the count down component", () => {
  it("testing rendered value of count down timing", () => {
    const k = render(<Counter />);
    console.log(k);
    expect(k).toBeDefined();
  });
});
