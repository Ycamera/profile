import { useEffect } from "react";

export const NavTop = (props) => {
	const setPage = props.setPageWithNum;

	useEffect(() => {
		const navButton = document.querySelector(".nav-top .nav-button");

		const nav = document.querySelector(".nav-top");

		navButton.addEventListener("click", () => {
			if (nav.classList.contains("active")) {
				nav.classList.remove("active");
			} else {
				nav.classList.add("active");
			}
		});

		document.addEventListener("click", ({ target }) => {
			if (!target.closest(".nav-top")) {
				nav.classList.remove("active");
			}
		});
	}, []);

	return (
		<div className="nav-top">
			<ul className="top-side">
				<li
					onClick={() => {
						setPage(0);
					}}
				>
					<div className="page active">
						<span className="link-width">Home</span>
						<span>Home</span>
						<span>Home</span>
					</div>
				</li>
				<li
					onClick={() => {
						setPage(1);
					}}
				>
					<div className="page">
						<span className="link-width">About</span>
						<span>About</span>
						<span>About</span>
					</div>
				</li>
				<li
					onClick={() => {
						setPage(2);
					}}
				>
					<div className="page">
						<span className="link-width">Experience</span>
						<span>Experience</span>
						<span>Experience</span>
					</div>
				</li>
				<li
					onClick={() => {
						setPage(3);
					}}
				>
					<div className="page">
						<span className="link-width">Skill</span>
						<span>Skill</span>
						<span>Skill</span>
					</div>
				</li>
				<li
					onClick={() => {
						setPage(4);
					}}
				>
					<div className="page">
						<span className="link-width">Portfolio</span>
						<span>Portfolio</span>
						<span>Portfolio</span>
					</div>
				</li>
			</ul>
			<div className="nav-button">
				<div className="bar"></div>
			</div>
		</div>
	);
};
