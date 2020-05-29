import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RequestError from "../RequestError";

test("can be closed", () => {
    const error = new Error("something went wrong");
    const handleClose = jest.fn();
    const { getByText } = render(<RequestError error={error} handleClose={handleClose} />);

    fireEvent.click(getByText("close"));

    expect(handleClose).toHaveBeenCalled();
});

test("renders correctly", () => {
    const error = new Error("Request failed with status code 400");
    error.response = {
        status: 400,
        data: {
            error: "Bad Request",
            message: { password: ["Shorter than minimum length 4."] },
        },
    };

    const { getByText } = render(<RequestError error={error} handleClose={null} />);

    getByText("Request error: Request failed with status code 400");
    getByText("Server response: 400 Bad Request");
    getByText(/password.*Shorter than minimum length 4/);
});
