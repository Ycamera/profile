export const Home = (props) => {
	//props.currentPage(0);
	return (
		<div className="home content">
			<span className="line"></span>
			<div className="title">
				<h1>Hello</h1>
			</div>

			<div className="main">
				<h1>I'm RYOSUKE.K</h1>
				<h2>
					Who is going to be a <span className="sColor">Front End Engineer</span>
				</h2>
				<div className="buttonContainer">
					<span className="button" onClick={() => props.setPageWithNum(1)}>
						<div className="right-arrow"></div> <span>ABOUT ME</span>
					</span>
				</div>
			</div>
		</div>
	);
};
