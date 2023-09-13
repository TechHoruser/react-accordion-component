import "./Accordion.scss";

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
	return (
		<div className="accordion"><div
			className="accordion-header"
			onClick={() => collapsed = !collapsed}
		>{header}</div>
			<div
				className={`accordion-content ${collapsed ? "hidden" : ""}`}>{content}</div>
		</div>
	);
}
