import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { App } from "../App.tsx";

describe("App Component", () => {
  it("Se muestra la película Inception cuando se busca por título", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/buscar películas por título/i);
    await userEvent.type(input, "Inception");

    const movie = await screen.getByText("Inception");
    expect(movie).toBeInTheDocument();
  });

  it("Comprobamos que no encuentra la película The Lord of the Rings", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/buscar películas por título/i);
    await userEvent.type(input, "The Lord of the Rings");

    const movie = screen.queryByText("The Lord of the Rings");
    expect(movie).not.toBeInTheDocument();
  });
});
