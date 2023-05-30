import { navigations } from "@/constans/home";

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("render correct img", () => {
    cy.findByAltText("STR Indonesia").should("be.visible");
  });

  it("render correctly menu", () => {
    cy.get(".nav-link > li").should(($li) => {
      expect($li, "4 items").to.have.length(4);

      expect($li.eq(0), "first item").to.contain("Beranda");
      expect($li.eq(1), "second item").to.contain("Produk");
      expect($li.eq(2), "third item").to.contain("Tentang");
      expect($li.eq(3), "four item").to.contain("Hubungi Kami");
    });
  });
  it("go to correct route", () => {
    navigations.forEach((navigation) => {
      cy.findByTestId(navigation.name).click();
      cy.location("pathname").should("eq", `/${navigation.to}`);
      cy.go("back");
    });
  });
});

export {};
