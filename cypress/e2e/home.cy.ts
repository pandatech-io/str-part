describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has video opening", () => {
    cy.findByTestId("video-opening").should("be.visible");
  });

  it("has product information", () => {
    cy.findByText("Jelajahi Produk Kami").should("be.visible");

    cy.get(".ant-row > .ant-col > .pd-home-products-card").should(($card) => {
      expect($card, "3 items").to.have.length(3);
    });

    cy.findByTestId("product-btn").should("be.visible").click();

    cy.location("pathname").should("eq", "/products");
  });
});

export {};
