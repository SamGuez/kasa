import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";

describe("Card component", () => {
  it("affiche le titre et l'image quand les props sont fournies", () => {
    render(
      <MemoryRouter>
        <Card id="123" title="Super appartement" cover="image.jpg" />
      </MemoryRouter>
    );

    // Titre
    expect(screen.getByText("Super appartement")).toBeInTheDocument();

    // Image
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "image.jpg");
    expect(img).toHaveAttribute("alt", "Super appartement");

    // Link
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/logement/123");
  });

  it("affiche un h3 même si le titre est vide", () => {
    render(
      <MemoryRouter>
        <Card id="123" title="" cover="image.jpg" />
      </MemoryRouter>
    );

    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe("");
  });

  it("affiche une image même si le titre est absent", () => {
    render(
      <MemoryRouter>
        <Card id="123" cover="image.jpg" />
      </MemoryRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "image.jpg");
  });

  it("affiche un composant valide même si aucune prop n'est fournie", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );

    // Le h3 existe toujours
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeInTheDocument();

    // Pas d'image
    expect(screen.queryByRole("img")).toBeNull();

    // Le lien existe mais son href sera "/logement/undefined"
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });
});
