import "./Accordion.scss";
import { useEffect, useState } from "react";

export interface AccordionProps {
	header: JSX.Element;
	content: JSX.Element;
	collapsed?: boolean;
}

export function Accordion({
	header,
	content,
	collapsed = true,
}: AccordionProps): JSX.Element {
	const [collapsedStatus, setCollapsedStatus] = useState(collapsed);

	useEffect(() => {
		setCollapsedStatus(collapsed);
	}, [collapsed]);

	return (
		<div className="accordion">
			<div
				className="accordion-header"
				onClick={() => setCollapsedStatus(!collapsedStatus)}
			>{header}</div>
			<div
				className={`accordion-content ${collapsedStatus ? "hidden" : ""}`}
			>{content}</div>
		</div>
	);
}
