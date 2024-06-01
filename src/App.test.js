import { screen, render, fireEvent, findByText, findAllByAltText } from "@testing-library/react";
import "@testing-library/jest-dom";
import Booking from "./components/Booking";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

test("Renders the BookingForm heading", () => {
  render(<Booking />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Renders label of date input", () => {
  render(<Booking />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("Return changed availableTimes upon change of date and booking a time at a date", async () => {
  render(<Booking />, { wrapper: BrowserRouter });

  const dateInputElement = screen.getByTestId("date");
  const timeSelectElement = await screen.findByTestId("time-select");

  const guestInputElement = screen.getByTestId("guest");
  const occasionSelectElement = screen.getByTestId("occasion");
  const buttonElement = screen.getByTestId("booking-form-submit");

  fireEvent.change(dateInputElement, {
    target: { value: "2024-06-01" },
  });
  fireEvent.change(timeSelectElement, {
    target: { value: "18:00" },
  });
  fireEvent.change(guestInputElement, {
    target: { value: '2' },
  });

  fireEvent.change(occasionSelectElement, {
    target: { value: "birthday" },
  });

  fireEvent.click(buttonElement);


  fireEvent.change(dateInputElement, {
    target: { value: "2024-06-01" },
  });
  const timeSelectElement2 = await screen.findByTestId("time-select");

  const times = Array.apply(null, timeSelectElement2.options).map(function(el){return el.value;});

  expect(times).toEqual(["17:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("Return changed availableTimes upon first render", () => {
  render(<Booking />);
  const selectElement = screen.getByTestId("occasion");
  expect(selectElement.options.length === 6);
});
