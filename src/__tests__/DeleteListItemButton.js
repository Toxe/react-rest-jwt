import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeleteListItemButton from "../DeleteListItemButton";

test("callback gets called", () => {
    const handleDelete = jest.fn();
    const { getByText } = render(<DeleteListItemButton id={3} handleDelete={handleDelete} />);

    fireEvent.click(getByText("delete"));

    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(3);
});
