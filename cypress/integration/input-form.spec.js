describe("Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("focuses input on load", () => {
    // cy.visit("http://localhost:3030");

    cy.focused().should("have.class", "new-todo");
  });

  it("accepts input", () => {
    const item = "Buy Milk";

    // cy.visit("http://localhost:3030");

    cy.get(".new-todo").type(item).should("have.value", item);
  });
});
