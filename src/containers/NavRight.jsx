export const NavRight = (props) => {
	const setPage = props.setPageWithNum;
	const nextPage = props.handleOnClickNextPage;
	const backPage = props.handleOnClickPreviousPage;

	return (
		<ul className="right-side">
			<div className="back-page" onClick={backPage}>
				<span></span>
			</div>

			<li
				className="select-home active"
				onClick={() => {
					setPage(0);
				}}
			></li>
			<li
				className="select-about"
				onClick={() => {
					setPage(1);
				}}
			></li>
			<li
				className="select-experience"
				onClick={() => {
					setPage(2);
				}}
			></li>
			<li
				className="select-skill"
				onClick={() => {
					setPage(3);
				}}
			></li>
			<li
				className="select-portfolio"
				onClick={() => {
					setPage(4);
				}}
			></li>
			<div className="next-page" onClick={nextPage}>
				<span></span>
			</div>
		</ul>
	);
};
