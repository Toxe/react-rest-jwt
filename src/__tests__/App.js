import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import App from "../App";

jest.mock("axios");

it("renders", async () => {
    const { getAllByText } = render(<App />);

    await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(2));
    expect(axiosMock.get).toHaveBeenCalledWith("/api/users");
    expect(axiosMock.get).toHaveBeenCalledWith("/api/ships");

    getAllByText("Login");
    getAllByText("Users");
    getAllByText("Ships");
});
