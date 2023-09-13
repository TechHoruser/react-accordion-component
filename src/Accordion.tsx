export interface AccordionProps {
	header: JSX.Element;
	content: JSX.Element;
}

export function Accordion({
	header,
	content,
}: AccordionProps): JSX.Element {
	return (
		<div className="accordion">
			<div>{header}</div>
			<div>{content}</div>
		</div>
	);
}
