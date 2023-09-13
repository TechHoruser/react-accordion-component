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

    cy.findByText(/Hola Mundo/i).parent();
    cy.get('.accordion-header');
    // TODO: check if the same element

    cy.findByText(/Lorem ipsum dolor sit amet consectetur/i).parent();
    cy.get('.accordion-content');
    // TODO: check if the same element
  });

  it("defaultCollapsed", () => {
    cy.mount(
      <Accordion
        header={<h1>Hola Mundo</h1>}
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            laudantium eveniet. Nulla facilis nostrum inventore, aperiam
            laudantium placeat ? Distinctio, facilis ? Placeat commodi quibusdam
            maxime illum quo dolorem corporis incidunt asperiores. 2
          </p>
        }
      />
    );

    cy.get('.accordion-content')
      .should("have.class", "hidden")
      .should("not.be.visible")
      ;
  });

  it("defaultVisible", () => {
    cy.mount(
      <Accordion
        header={<h1>Hola Mundo</h1>}
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            laudantium eveniet. Nulla facilis nostrum inventore, aperiam
            laudantium placeat ? Distinctio, facilis ? Placeat commodi quibusdam
            maxime illum quo dolorem corporis incidunt asperiores. 3
          </p>
        }
        collapsed={false}
      />
    );

    cy.get('.accordion-content')
      .should("not.have.class", "hidden")
      .should("be.visible")
      ;
  });

  it("onClick", () => {
    cy.mount(
      <Accordion
        header={<h1>Hola Mundo</h1>}
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            laudantium eveniet. Nulla facilis nostrum inventore, aperiam
            laudantium placeat ? Distinctio, facilis ? Placeat commodi quibusdam
            maxime illum quo dolorem corporis incidunt asperiores. 4
          </p>
        }
      />
    );

    cy.get('.accordion-content')
      .should("have.class", "hidden")
      .should("not.be.visible")
      ;
    cy.get('.accordion-header').click();
    cy.get('.accordion-content')
      .should("not.have.class", "hidden")
      .should("be.visible")
      ;
  });
});