import { Accordion } from "../src/Accordion";

describe("<Accordion />", () => {
  it("renders", () => {
    cy.mount(
      <Accordion
        header={<h1>Hola Mundo</h1>}
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            laudantium eveniet. Nulla facilis nostrum inventore, aperiam
            laudantium placeat ? Distinctio, facilis ? Placeat commodi quibusdam
            maxime illum quo dolorem corporis incidunt asperiores. 1
          </p>
        }
      />
    );

    cy.findByText(/Hola Mundo/i);
    cy.findByText(/Lorem ipsum dolor sit amet consectetur/i);
  });
});