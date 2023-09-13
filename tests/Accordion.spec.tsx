import { render, screen } from "@testing-library/react";

import { Accordion } from "../src/Accordion";

test("Accordion displays correctly", () => {
	render(<Accordion
		header={<h1>Accordion</h1>}
		content={<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
			laudantium eveniet. Nulla facilis nostrum inventore, aperiam
			laudantium placeat ? Distinctio, facilis ? Placeat commodi quibusdam
			maxime illum quo dolorem corporis incidunt asperiores. 1
		</p>}
	/>);

	const heading = screen.getByText(/Accordion/i);

	expect(heading).toBeInTheDocument();
});
