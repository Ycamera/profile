import { useState, useEffect } from "react";

export const Skill = (props) => {
	//props.currentPage(3);

	//配列ないのページの位置
	const [position, setPosition] = useState();
	const [currentPosition, setCurrentPosition] = useState();

	//elementの要素の'active'クラスを付加、削除　 elemenet: dom, choice: 'add' or 'remove'
	function classAddRemove(element, choice) {
		if (choice === "add") {
			if (!element.classList.contains("active")) {
				element.classList.add("active");

				const blur = document.querySelector(".main ul .blur");
				blur.classList.add("active");

				const arrows = document.querySelector(".main ul .arrows");
				arrows.classList.add("active");
			}
		} else {
			if (element.classList.contains("active")) {
				element.classList.remove("active");
			}
		}
	}
	//右の矢印をクリックすると、前のスキルページへ移動
	const handleOnClickLeftArrow = () => {
		const length = document.querySelectorAll(".main ul li").length;
		const backPage = (length + currentPosition - 1) % length;

		pageReset();
		setPosition(backPage);

		const element = document.querySelector(".skill .left-arrow");
		element.classList.add("wave-effect");
		setTimeout(() => element.classList.remove("wave-effect"), 500);
	};

	//右の矢印をクリックすると、次のスキルページへ移動
	const handleOnClickRightArrow = () => {
		const length = document.querySelectorAll(".main ul li").length;
		const nextPage = (length + currentPosition + 1) % length;

		pageReset();
		setPosition(nextPage);

		const element = document.querySelector(".skill .right-arrow");
		element.classList.add("wave-effect");
		setTimeout(() => element.classList.remove("wave-effect"), 500);
	};

	//開いているページを閉じる
	function pageReset() {
		const skillElements = document.querySelectorAll(".main ul li");
		skillElements.forEach((f) => classAddRemove(f, "remove"));
	}

	//背景のblurと矢印の'active'クラスを取り除く
	function blurReset() {
		const blur = document.querySelector(".main ul .blur");
		if (blur) blur.classList.remove("active");

		const arrows = document.querySelector(".main ul .arrows");
		if (arrows) arrows.classList.remove("active");
	}

	//初回レンダー時の読み込み
	useEffect(() => {
		const skillElements = document.querySelectorAll(".main ul .card");
		//スキル要素をクリックするとその<li>タグに'active'クラスを付加
		skillElements.forEach((f, index) => {
			f.addEventListener("click", () => {
				//既にactiveクラスが付加されている場合は削除して閉じる
				//activeクラスが付加されていない場合は付加して詳細を開く
				const remove = skillElements[index];

				remove.classList.contains("active") ? classAddRemove(remove, "remove") : setPosition(index);
				blurReset();
			});
		});
		//スキル要素外をクリックすると付加された　'active' クラスを削除
		document.addEventListener("click", ({ target }) => {
			if (!target.closest(".skill .card") && !target.closest(".skill .arrow")) {
				setPosition("reset");
				blurReset();
			}
		});
	}, []);

	//二重にスキル詳細を開くことを避けるコード
	//positionのindexにあたるスキルを開く。
	useEffect(() => {
		const skillElements = document.querySelectorAll(".main ul li");

		if (skillElements.length > 0) {
			if ((position !== "reset" && position) || position === 0) {
				const add = skillElements[position];

				classAddRemove(add, "add");
				setCurrentPosition(position);
			} else if (position === "reset") {
				pageReset();
			}
		}
		setPosition("");
	}, [position]);

	return (
		<div className="skill content">
			<span className="line"></span>
			<div className="title">
				<h1>Skill</h1>
			</div>

			<div className="main">
				<ul>
					<div className="blur"></div>
					<div className="arrows">
						<span className="left-arrow arrow" onClick={handleOnClickLeftArrow}>
							<span className="minus"></span>
						</span>
						<span className="right-arrow arrow" onClick={handleOnClickRightArrow}>
							<span className="plus"></span>
						</span>
					</div>

					<li className="card" style={{ "--percentage": "70%" }}>
						<div className="card-shown">
							HTML<span className="bar"></span>
						</div>
						<div className="info">
							<p>HTML</p>
							<span className="bar"></span>
							<div className="description">
								<p className="study-duration">勉強歴：3ヶ月</p>
								<p>現在できること：</p>
								<p className="sentence">
									基礎的なタグを用いたWEBサイトのコーディング
									<br />
									デザインをもとにしたWEBサイトの実装
								</p>
							</div>
						</div>
					</li>
					<li className="card" style={{ "--percentage": "50%" }}>
						<div className="card-shown">
							Ruby<span className="bar"></span>
						</div>
						<div className="info">
							<p>Ruby</p>
							<span className="bar"></span>
							<div className="description">
								<p className="study-duration">勉強歴：1ヶ月</p>

								<p>現在できること：</p>
								<p className="sentence">
									アルゴリズムを用いた処理の実装
									<br />
									(動的計画法や2次元の累積和など)
									<br />
									Ruby on Railsの基本的な操作
									<br />
									(Model、Controllerの生成や割り当て、HTMLへのデータ渡しなど）
								</p>
							</div>
						</div>
					</li>

					<li className="card" style={{ "--percentage": "70%" }}>
						<div className="card-shown">
							CSS<span className="bar"></span>
						</div>
						<div className="info">
							<p>CSS</p>
							<span className="bar"></span>
							<div className="description">
								<p className="study-duration">勉強歴：3ヶ月</p>

								<p>現在できること：</p>
								<p className="sentence">
									デザインをもとにしたWEBサイトのコーディング
									<br />
									オリジナルアニメーションの実装
									<br />
									DOM操作によるJavaScriptと連携したアニメーションの実装
								</p>
							</div>
						</div>
					</li>
					<li className="card" style={{ "--percentage": "40%" }}>
						<div className="card-shown">
							Sass<span className="accent-color bar"></span>
						</div>
						<div className="info">
							<p>Sass</p>
							<span className="accent-color bar"></span>
							<div className="description">
								<p className="study-duration">勉強歴：3週間</p>

								<p>現在できること：</p>
								<p className="sentence">
									基本的な階層ごとのCSSコーディング <br />
									for、if文などの関数を活用したコーディング
									<br />
								</p>
							</div>
						</div>
					</li>
					<li className="card" style={{ "--percentage": "80%" }}>
						<div className="card-shown">
							JavaScript<span className="bar"></span>
						</div>
						<div className="info">
							<p>JavaScript</p>
							<span className="bar"></span>
							<div className="description">
								<p className="study-duration">勉強歴：3ヶ月</p>

								<p>現在できること：</p>
								<p className="sentence">
									関数、クラスの作成
									<br />
									アルゴリズムを用いた処理の実装
									<br />
									(動的計画法や2次元の累積和など)
									<br />
									Promise、Asyncを用いた非同期処理の実装
									<br />
									DOM操作によるCSSと連携したアニメーションの実装
								</p>
							</div>
						</div>
					</li>
					<li className="card" style={{ "--percentage": "60%" }}>
						<div className="card-shown">
							React<span className="accent-color bar"></span>
						</div>
						<div className="info">
							<p> React</p>
							<span className="accent-color bar"></span>
							<div className="description">
								<p className="study-duration">勉強歴：1ヶ月</p>

								<p>現在できること：</p>
								<p className="sentence">
									外部APIから情報を取得し、動的にコンテンツを表示するSPAサイトの作成
									<br />
									Routerライブラリを利用した、ウェブページの遷移
									<br />
									<br />
									<br />
									<strong>(このサイトはReactで作成しています)</strong>
								</p>
							</div>
						</div>
					</li>
					<li className="card" style={{ "--percentage": "93%" }}>
						<div className="card-shown">
							English<span className="bar"></span>
						</div>
						<div className="info">
							<p> English</p>
							<span className="bar"></span>
							<div className="description">
								<p className="study-duration">勉強歴：11年</p>

								<p>現在できること、経験：</p>
								<p className="sentence">
									英語での日常会話
									<br />
									<br />
									アメリカのオレゴン州へ半年間留学し、現地ではインターンシップを3社経験。英語で意思疎通を図りながら、環境保護団体にて6週間働く。異文化に触れる中で、文化の多様性や思想の違いなどについて理解を深める。
									<br />
									<br />
									<strong className="sColor">2020/12：TOEIC 930点取得</strong>
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
