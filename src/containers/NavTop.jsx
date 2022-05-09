export const NavTop = (props) => {
	const setPage = props.setPageWithNum;
	return (
		<ul className="top-side">
			<li>
				<div
					className="page active"
					onClick={() => {
						setPage(0);
					}}
				>
					<span className="link-width">Home</span>
					<span>Home</span>
					<span>Home</span>
				</div>
			</li>
			<li>
				<div
					className="page"
					onClick={() => {
						setPage(1);
					}}
				>
					<span className="link-width">About</span>
					<span>About</span>
					<span>About</span>
				</div>
			</li>
			<li>
				<div
					className="page"
					onClick={() => {
						setPage(2);
					}}
				>
					<span className="link-width">Experience</span>
					<span>Experience</span>
					<span>Experience</span>
				</div>
			</li>
			<li>
				<div
					className="page"
					onClick={() => {
						setPage(3);
					}}
				>
					<span className="link-width">Skill</span>
					<span>Skill</span>
					<span>Skill</span>
				</div>
			</li>
			<li>
				<div
					className="page"
					onClick={() => {
						setPage(4);
					}}
				>
					<span className="link-width">Portfolio</span>
					<span>Portfolio</span>
					<span>Portfolio</span>
				</div>
			</li>
		</ul>
	);
};
