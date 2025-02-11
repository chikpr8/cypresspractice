describe("Testscenario", () => {
  it("logintest", () => {
    cy.visit("/web/index.php/auth/login");
    cy.get("[placeholder='Username']").type("Admin");
    cy.get("[placeholder='Password']").type("admin123");
    cy.get("[type='submit']").click();
  });
});
