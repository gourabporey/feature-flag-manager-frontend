import React from "react";
import { render } from "@testing-library/react";
import AddFeatureFlag from "./AddFeatureFlag";

describe("AddFeatureToggle", () => {
  test("it should have the input fields to add feature flag", () => {
    render(<AddFeatureFlag />);
  });
});
