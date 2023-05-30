describe("Contact", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has a title", () => {
    cy.findByText("Pertanyaan seputar Produk").should("be.visible");
  });

  it("form validate when empty & not valid email", () => {
    cy.findByTestId("send-form").should("be.visible").click();

    cy.findByLabelText("Email").should("have.css", "border-color", "rgb(255, 77, 79)");
    cy.get("#basic_email_help > .ant-form-item-explain-error")
      .should("be.visible")
      .and("contain", "Harap masukkan email!");

    cy.findByLabelText("Email").type("Email Valid");
    cy.findByTestId("send-form").should("be.visible").click();

    cy.get("#basic_email_help > .ant-form-item-explain-error")
      .should("be.visible")
      .and("contain", "Email tidak valid!");

    cy.findByLabelText("Email").clear().blur();

    cy.findByLabelText("Email").type("ilham@gmail.com");
    cy.get("#basic_email_help > .ant-form-item-explain-error").should("not.be.visible");
    cy.findByLabelText("Email").focus().should("have.css", "border-color", "rgb(255, 193, 77)");

    cy.findByLabelText("Email").clear().blur();
  });

  it("form validate when empty & not valid name", () => {
    cy.findByTestId("send-form").should("be.visible").click();

    cy.findByLabelText("Nama Anda").should("have.css", "border-color", "rgb(255, 77, 79)");
    cy.get("#basic_name_help > .ant-form-item-explain-error")
      .should("be.visible")
      .and("contain", "Harap masukkan nama anda!");

    cy.findByLabelText("Nama Anda").type("Ilham Kukuh");
    cy.findByTestId("send-form").should("be.visible").click();

    cy.get("#basic_name_help > .ant-form-item-explain-error").should("not.be.visible");
    cy.findByLabelText("Nama Anda").focus().should("have.css", "border-color", "rgb(255, 193, 77)");

    cy.findByLabelText("Nama Anda").clear().blur();
  });

  it("form validate when empty & not valid handphone", () => {
    cy.findByTestId("send-form").should("be.visible").click();

    cy.findByLabelText("No Handphone").should("have.css", "border-color", "rgb(255, 77, 79)");
    cy.get("#basic_subject_help > .ant-form-item-explain-error")
      .should("be.visible")
      .and("contain", "Harap masukkan no anda!");

    cy.findByLabelText("No Handphone").type("Ini nomor");
    cy.findByTestId("send-form").should("be.visible").click();

    cy.get("#basic_subject_help > .ant-form-item-explain-error")
      .should("be.visible")
      .and("contain", "No tidak valid!");

    cy.findByLabelText("No Handphone").clear().blur();

    cy.findByLabelText("No Handphone").type("087878326318");
    cy.findByTestId("send-form").should("be.visible").click();

    cy.get("#basic_subject_help > .ant-form-item-explain-error").should("not.be.visible");
    cy.findByLabelText("No Handphone")
      .focus()
      .should("have.css", "border-color", "rgb(255, 193, 77)");

    cy.findByLabelText("No Handphone").clear().blur();
  });

  it("form validate when empty & not valid message", () => {
    cy.findByTestId("send-form").should("be.visible").click();

    cy.findByLabelText("Pesan Anda").should("have.css", "border-color", "rgb(255, 77, 79)");
    cy.get("#basic_content_help > .ant-form-item-explain-error")
      .should("be.visible")
      .and("contain", "Harap masukkan pesan!");

    cy.findByLabelText("Pesan Anda").type("Hai kak:D");
    cy.findByTestId("send-form").should("be.visible").click();

    cy.get("#basic_content_help > .ant-form-item-explain-error").should("not.be.visible");
    cy.findByLabelText("Pesan Anda")
      .focus()
      .should("have.css", "border-color", "rgb(255, 193, 77)");

    cy.findByLabelText("Pesan Anda").clear().blur();
  });
});

describe("request api", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("success send form", () => {
    cy.findByLabelText("Email").type("ilham@gmail.com");
    cy.findByLabelText("Nama Anda").type("Ilham Kukuh");
    cy.findByLabelText("No Handphone").type("087878326318");
    cy.findByLabelText("Pesan Anda").type("Hai kak:D");

    cy.intercept("POST", " https://cms.strpart.com/api/v1/mails").as("sendForm");

    cy.findByTestId("send-form").should("be.visible").click();

    cy.get("@sendForm")
      .get(".ant-btn-loading-icon")
      .should("be.visible")
      .then(() => {
        cy.findByText("Berhasil terkirim!").should("be.visible");
        cy.get(".ant-btn-loading-icon").should("not.be.visible");
      });
  });
});
