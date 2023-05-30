describe("Home", () => {
  beforeEach(() => {
    cy.intercept("GET", "/dev/categories", {
      fixture: "categories.json",
    }).as("getCategories");

    cy.intercept("GET", "/dev/products?page=1&limit=12", {
      fixture: "products.json",
    }).as("getProducts");

    cy.visit("/products");
  });

  it("has product information", () => {
    cy.findByText("Produk Kami").should("be.visible");
    cy.get(".ant-spin-dot").should("be.visible");
    cy.wait("@getCategories").then(() => {
      cy.fixture("categories.json").then((category) => {
        cy.get(".pd-products-category-title").should("have.length", category.data.length + 1);
      });
    });
    cy.wait("@getProducts").then(() => {
      cy.fixture("products.json").then((product) => {
        cy.get(".pd-products-card").should("have.length", product.data.length);
      });
    });
  });
});

export {};
