export const About = (props) => {
	props.currentPage(1);

	return (
		<div className="about content">
			<span className="line"></span>
			<h1 className="title">About</h1>

			<div className="main">
				<div className="table">
					<div className="inside1">
						<span>
							<p>名前：</p>
							<span className="line-effect"></span>
						</span>

						<span>
							<p>生年月日：</p>
							<span className="line-effect"></span>
						</span>
						<span>
							<p>出身：</p>
							<span className="line-effect"></span>
						</span>
					</div>
					<div className="inside2">
						<p>涼介.K</p>
						<p>1995 / 4 / 12</p>
						<p>愛知県</p>
					</div>
				</div>
				<p className="description">
					2021年11月、友人の抱えていた課題をプログラミングで解決。
					<span className="br"></span>
					プログラミングにやりがいを覚え、ITエンジニアになることを決意する。
					<br />
					<br />
					当初は、与えられた課題を解決する競技プログラミングの楽しさにハマり、
					<span className="br"></span>
					動的計画法や2次元の累積和など、アルゴリズムの勉強に注力していた。
					<br />
					<br />
					現在はフロントエンドエンジニアになることを目指して、
					<br />
					HTML、CSS、JavaScriptについて日々勉強を行なっている。
					<br />
					CSS、JavaScriptを用いたアニメーション製作が好き。
					<br />
				</p>
			</div>
		</div>
	);
};
