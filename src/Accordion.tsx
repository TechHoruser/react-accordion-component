// import "./Accordion.scss";

import { useState } from "react";

export interface AccordionProps {
	header: JSX.Element;
	collapsedContent: JSX.Element;
	collapsed?: boolean;
}

export function Accordion({
	header,
	collapsedContent,
	collapsed = true,
}: AccordionProps): JSX.Element {
	const [collapsedStatus, setCollapsedStatus] = useState(collapsed);

	return (
		<div className="accordion">
			<div onClick={() => setCollapsedStatus(!collapsedStatus)}>{header}</div>
			<div className={collapsedStatus ? "hidden" : ""}>{collapsedContent}</div>
		</div>
	);
}
