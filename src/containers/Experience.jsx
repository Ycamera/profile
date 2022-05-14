export const Experience = (props) => {
	//props.currentPage(2);
	return (
		<div className="experience content">
			<span className="line"></span>
			<div className="title">
				<h1>Experience</h1>
			</div>

			<div className="main">
				<div className="table">
					<div className="inside1">
						<div className="backColor">
							<p className="coron">職歴</p>
						</div>
					</div>
					<div className="inside2">
						<p className="secondary-color year">2013 - 2014　2015 - 2017</p>
						<p className="job">造園土木業</p>
						<p className="description">
							日本庭園の管理、植物の植栽・剪定作業に従事。 <span className="br-work"></span>
							炎天下の業務という厳しい環境で、精神・肉体的な忍耐力を養う。
						</p>
					</div>
				</div>

				<div className="table">
					<div className="inside1">
						<div className="backColor">
							<p className="coron">学歴</p>
						</div>
					</div>
					<div className="inside2">
						<p className="secondary-color year">2018 - 2022</p>
						<p className="school">名城大学外国語学部国際英語学科　卒業</p>

						<p className="description">
							半年間の
							<strong className="sColor">アメリカ留学</strong>
							を経験。現地のインターンシップでは、<span className="br"></span>HTML、CSS、JavaScriptを独学し、
							企業ホームページの更新業務に携わる。
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
