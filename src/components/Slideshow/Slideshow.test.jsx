import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Slideshow from "./Slideshow";

describe("Slideshow", () => {
  const pictures = ["img1.jpg", "img2.jpg", "img3.jpg"];

  it("affiche la première image et le compteur", () => {
    render(<Slideshow pictures={pictures} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "img1.jpg");
    expect(screen.getByText("1/3")).toBeInTheDocument();
  });

  it("passe à l'image suivante", () => {
    render(<Slideshow pictures={pictures} />);
    fireEvent.click(screen.getByText("›"));
    expect(screen.getByRole("img")).toHaveAttribute("src", "img2.jpg");
    expect(screen.getByText("2/3")).toBeInTheDocument();
  });

  it("revient à l'image précédente", () => {
    render(<Slideshow pictures={pictures} />);
    fireEvent.click(screen.getByText("›"));
    fireEvent.click(screen.getByText("‹"));
    expect(screen.getByRole("img")).toHaveAttribute("src", "img1.jpg");
  });

  it("boucle correctement (3 → 1)", () => {
    render(<Slideshow pictures={pictures} />);
    const next = screen.getByText("›");

    fireEvent.click(next);
    fireEvent.click(next);
    fireEvent.click(next); // boucle

    expect(screen.getByRole("img")).toHaveAttribute("src", "img1.jpg");
  });

  it("n'affiche pas les flèches si une seule image", () => {
    render(<Slideshow pictures={["unique.jpg"]} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "unique.jpg");
    expect(screen.queryByText("›")).toBeNull();
    expect(screen.queryByText("‹")).toBeNull();
    expect(screen.queryByText("1/1")).toBeNull();
  });

  it("n'affiche rien si aucune image", () => {
    render(<Slideshow pictures={[]} />);
    expect(screen.queryByRole("img")).toBeNull();
  });
});
