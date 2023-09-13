import "./Accordion.scss";

export interface AccordionProps {
	header: JSX.Element;
	content: JSX.Element;
}

export function Accordion({
	header,
	content,
}: AccordionProps): JSX.Element {
	return (
		<div className="accordion"><div
			className="accordion-header"
		>{header}</div>
			<div
				className={`accordion-content`}>{content}</div>
		</div>
	);
}
