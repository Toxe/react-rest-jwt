import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import UserList from "../UserList";
import CurrentUserContextProvider from "../../Context/CurrentUser";

jest.mock("axios");

test("user list works", async () => {
    axiosMock.get.mockResolvedValue({
        data: [
            {
                id: 1,
                name: "user",
            },
            {
                id: 2,
                name: "guest",
            },
        ],
    });

    const { getByText, getByLabelText } = render(
        <CurrentUserContextProvider>
            <UserList />
        </CurrentUserContextProvider>
    );

    // rendering calls data from API
    await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(1));
    expect(axiosMock.get).toHaveBeenCalledWith("/api/users");

    // manually click "Refresh" button to query new data
    fireEvent.click(getByText("Refresh"));

    await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(2));
    expect(axiosMock.get).toHaveBeenCalledWith("/api/users");

    // click "Add User" button to open AddUserForm
    fireEvent.click(getByText("Add User"));

    // enter form values
    fireEvent.change(getByLabelText("Name:"), { target: { value: "aaaa" } });
    fireEvent.change(getByLabelText("Password:"), { target: { value: "bbbb" } });

    // "Create new User" button should no longer be disabled
    expect(getByText("Create new User")).toBeEnabled();

    // click "Create new User" button to create a new user
    fireEvent.click(getByText("Create new User"));

    await waitFor(() => expect(axiosMock.post).toHaveBeenCalledTimes(1));
    expect(axiosMock.post).toHaveBeenCalledWith("/api/users", { name: "aaaa", password: "bbbb" });
});
