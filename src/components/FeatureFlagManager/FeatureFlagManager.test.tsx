import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import FeatureFlagManager from "./FeatureFlagManager";
import Api from "../../api/Api";

jest.mock("../../api/Api", () => ({
  get: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("FeatureFlagManager", () => {
  beforeEach(() => {
    (Api.get as jest.Mock).mockResolvedValue([
      {
        id: "1",
        name: "Flag 1",
        description: "Test description",
        isEnabled: true,
        createdAt: new Date("2023-01-01"),
        lastUpdatedAt: new Date("2023-01-02"),
      },
      {
        id: "2",
        name: "Flag 2",
        description: "Another description",
        isEnabled: false,
        createdAt: new Date("2023-01-03"),
        lastUpdatedAt: new Date("2023-01-04"),
      },
    ]);
  });

  test("renders the feature flags table correctly after API call", async () => {
    render(<FeatureFlagManager />);
    await waitFor(() => {
      expect(screen.getByText("Flag 1")).toBeInTheDocument();
      expect(screen.getByText("Flag 2")).toBeInTheDocument();
    });

    // Check that the table headers are correct
    expect(screen.getByText("Feature Name")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Enabled")).toBeInTheDocument();
    expect(screen.getByText("Created at")).toBeInTheDocument();
    expect(screen.getByText("Last updated at")).toBeInTheDocument();

    // // Check the flag details in the table
    // expect(screen.getByText("Test description")).toBeInTheDocument();
    // expect(screen.getByText("Another description")).toBeInTheDocument();
    // expect(screen.getByText("true")).toBeInTheDocument();
    // expect(screen.getByText("false")).toBeInTheDocument();
  });
});
