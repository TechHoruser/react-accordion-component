import { render, screen } from "@testing-library/react";

import { Accordion } from "../src/Accordion";

test("Accordion displays correctoy", () => {
	render(<Accordion title="Accordion" />);

	const heading = screen.getByText(/Accordion/i);

	expect(heading).toBeInTheDocument();
});
