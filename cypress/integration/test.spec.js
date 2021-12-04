describe("Test crash", () => {
  it("test", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Nested Routes, CSS loading/unloading").click();
    cy.contains("About Us");
  });
});
