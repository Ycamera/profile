import "./SASS/CSS/main.css";

import { NavTop } from "./containers/NavTop";
import { NavRight } from "./containers/NavRight";

import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Experience } from "./containers/Experience";
import { Skill } from "./containers/Skill";
import { Portfolio } from "./containers/Portfolio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
	const [render, setRender] = useState(true);
	//背景の遷移エフェクト
	function changeBackground(direction) {
		setRender(false);

		//背景に付加した'active’クラスを削除
		function classDelete() {
			setTimeout(() => {
				const f = document.querySelectorAll(".background");
				f.forEach((dom) => dom.classList.remove("active"));
				setRender(true);
			}, 2000);
		}

		//左から右へ流すエフェクト
		if (direction === "left") {
			const f = document.querySelector(".background.back-1");
			f.classList.add("active");
			classDelete();

			//右から左へ流すエフェクト
		} else if (direction === "right") {
			const f = document.querySelector(".background.back-2");
			f.classList.add("active");
			classDelete();
		}
	}

	//ページ遷移処理　初め　ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
	//変数
	const [page, setPage] = useState(0);
	const [previousPage, setPreviousPage] = useState(0);
	const [pageButton, setPageButton] = useState();

	//数字indexを渡すとpages配列のその位置へページを移動
	function setPageWithNum(num) {
		setPageButton(num);

		setTimeout(() => {
			setPageButton();
		}, 10);
	}

	//page変数に代入されている数字をリセット
	function pageReset() {
		setTimeout(() => {
			setPage();
		}, 10);
	}
	//windowの進む戻り操作時に現在のページを把握
	const currentPage = (pageNum) => {
		if (previousPage !== pageNum) {
			setPage(pageNum);
			setPreviousPage(pageNum);
			pageReset();
		}
	};

	//遷移先のページアドレス
	const pages = ["/profile", "/about", "/experience", "/skill", "/portfolio"];

	//下にあるカーソルをクリックすると次のページへ移動
	const handleOnClickNextPage = () => {
		if (previousPage + 1 < pages.length) {
			setPage(previousPage + 1);
		}
	};
	//上にあるカーソルをクリックすると次のページへ移動
	const handleOnClickPreviousPage = () => {
		if (previousPage - 1 >= 0) {
			setPage(previousPage - 1);
		}
	};

	//ページリンクを渡すとそのページへ移動　例：'/about', '/skill' など
	const link = useNavigate();
	function navigate(address) {
		link(address);
	}
	//右サイドの選択中のナビにactiveクラスを付加
	function navAddActive(page) {
		const navElementsTop = document.querySelectorAll(".top-side li .page");
		navElementsTop.forEach((f) => f.classList.remove("active"));

		const navElementsRight = document.querySelectorAll(".right-side li");
		navElementsRight.forEach((f) => f.classList.remove("active"));

		document.querySelector(".top-side").children[page].firstElementChild.classList.add("active");
		document.querySelectorAll(".right-side li")[page].classList.add("active");

		const nav = document.querySelector(".nav-top"); //右上navメニューのactive クラスを削除
		nav.classList.remove("active");
	}

	//次、前のページがない場合は上下のカーソルを削除
	function waveAppear(page) {
		const waveUp = document.querySelector(".wave-up");
		const backPage = document.querySelector(".back-page");
		if (page === 0) {
			waveUp.style.visibility = "hidden";
			backPage.style.visibility = "hidden";
		} else {
			waveUp.style.visibility = "visible";
			backPage.style.visibility = "visible";
		}
		const waveDown = document.querySelector(".wave-down");
		const nextPage = document.querySelector(".next-page");
		if (page >= pages.length - 1) {
			waveDown.style.visibility = "hidden";
			nextPage.style.visibility = "hidden";
		} else {
			waveDown.style.visibility = "visible";
			nextPage.style.visibility = "visible";
		}
	}
	//ページ遷移時に遅らせてメインページを更新
	function pageUpdate() {
		setTimeout(() => {
			if (typeof page === "number") {
				navigate(pages[page]);
				navAddActive(page);
				waveAppear(page);
				window.scroll({ top: 0, behavior: "instant" });
				navUpDown();
			}
		}, 500);
	}

	//ページの切り替わりフェクト
	useEffect(() => {
		//ページ切り替え時に上と右サイドにある選択要素にActiveクラスを付加　CSS用

		//次のページに進んだ場合は　右からの遷移演出
		//前のページに進んだ場合は　左からの遷移演出

		if (render && page > previousPage) {
			changeBackground("right");
			pageUpdate();
		} else if (render) {
			changeBackground("left");
			pageUpdate();
		}

		//前回のページを記録
		setPreviousPage(page);
	}, [page]);

	//ブラウザの戻る進むボタンを認識して背景エフェクトを起動
	/* 
	useEffect(() => {
		if (typeof page === "number") {
			if (render && page > previousPage) {
				changeBackground("right");
			} else if (render) {
				changeBackground("left");
			}
			navAddActive(page);
			waveAppear(page);
			setPreviousPage(page);
		}
	}, [page]);
*/
	//ボタンクリックでページの遷移
	useEffect(() => {
		const num = pageButton;
		if (typeof num === "number") setPage(pageButton);
	}, pageButton);

	//homeページのみ：下部のページ遷移ボタンに波紋を表示
	useEffect(() => {
		const waveDown = document.querySelector(".wave-down");
		const nextPage = document.querySelector(".next-page");
		if (previousPage === 0) {
			waveDown.classList.add("active");
			nextPage.classList.add("active");
		} else {
			waveDown.classList.remove("active");
			nextPage.classList.remove("active");
		}
	}, [previousPage]);

	//ページ遷移処理　終了　ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

	//上下ナビの位置を固定　ウィンドウズサイズに合わせて表示 stickyの役割
	function navUpDown() {
		const up = document.querySelector(".wave-up");
		const down = document.querySelector(".wave-down");

		const height = document.querySelector(".main-container").clientHeight;
		const htmlHeight = document.querySelector("html").clientHeight;
		const windowHeight = window.innerHeight;

		let position;

		if (windowHeight < height) {
			position = (htmlHeight - windowHeight) / 2;
		} else {
			position = (htmlHeight - height) / 2;
		}
		up.style.top = position + "px";
		down.style.bottom = position + "px";
	}

	useEffect(() => {
		window.addEventListener("resize", () => {
			navUpDown();
		});
		navUpDown();
	}, []);

	return (
		<div className="container">
			<div className="background back-1"></div>
			<div className="background back-2"></div>
			<div className="main-width">
				<div className="main-container">
					<NavTop setPageWithNum={setPageWithNum} />
					<NavRight
						setPageWithNum={setPageWithNum}
						handleOnClickPreviousPage={handleOnClickPreviousPage}
						handleOnClickNextPage={handleOnClickNextPage}
					/>
					<div className="wave-up">
						<span className="to-up" onClick={handleOnClickPreviousPage}></span>
					</div>
					<div className="wave-down active">
						<span className="to-down" onClick={handleOnClickNextPage}></span>
					</div>

					<Routes>
						<Route path="/profile" element={<Home currentPage={currentPage} setPageWithNum={setPageWithNum} />} />
						<Route path="/about" element={<About currentPage={currentPage} />} />
						<Route path="/experience" element={<Experience currentPage={currentPage} />} />
						<Route path="/skill" element={<Skill currentPage={currentPage} />} />
						<Route path="/portfolio" element={<Portfolio currentPage={currentPage} />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
