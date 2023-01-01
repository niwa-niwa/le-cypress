// const todos = [
//   {
//     id: 1,
//     name: "Buy Milk",
//     isComplete: false,
//   },
//   {
//     id: 2,
//     name: "Buy Eggs",
//     isComplete: false,
//   },
//   {
//     id: 3,
//     name: "Buy Bread",
//     isComplete: false,
//   },
//   {
//     id: 4,
//     name: "Make French Toast",
//     isComplete: false,
//   },
// ];

describe("App initialization", () => {
  it("Loads todos on page load", () => {
    // NOTE import commands.js/add('seedAndVisit")
    cy.seedAndVisit();

    cy.get(".todo-list li").should("have.length", 4);
  });

  it("Displays an error on failure", () => {
    cy.server();

    cy.route({
      url: "/api/todos",
      method: "GET",
      status: 500,
      response: {},
    });

    cy.visit("/");

    cy.get(".todo-list li").should("not.exist");

    cy.get(".error").should("be.visible");
  });
});
