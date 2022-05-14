export const Portfolio = (props) => {
	//props.currentPage(4);
	return (
		<div className="portfolio content">
			<span className="line"></span>

			<div className="title">
				<h1>Portfolio</h1>
			</div>

			<div className="main">
				<div className="product-1 file">
					<a className="img" href="https://ycamera.github.io/Movight/" target="_blank">
						<span className="product-title">映画情報探索サイト</span>
					</a>
					<span className="under-line"></span>
					<a className="github" href="https://github.com/Ycamera/Movight" target="_blank">
						<span className="icon"></span>
					</a>
				</div>
				<div className="product-2 file">
					<a className="img" href="https://ycamera.github.io/minesweeper_project/" target="_blank">
						<span className="product-title">ミニゲーム</span>
					</a>
					<span className="under-line"></span>
					<a className="github" href="https://github.com/Ycamera/minesweeper_project" target="_blank">
						<span className="icon"></span>
					</a>
				</div>
			</div>
		</div>
	);
};
