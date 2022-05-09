import "./SASS/CSS/main.css";
import { Nav } from "./containers/Nav";
import { NavTop } from "./containers/NavTop";
import { NavRight } from "./containers/NavRight";

import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Experience } from "./containers/Experience";
import { Skill } from "./containers/Skill";
import { Portfolio } from "./containers/Portfolio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

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

	const [page, setPage] = useState(0);
	const [previousPage, setPreviousPage] = useState(0);
	const [pageButton, setPageButton] = useState();

	const handleOnClickToAboutPage = () => {
		setPageButton(1);

		setTimeout(() => setPageButton(), 10);
	};

	function setPageWithNum(num) {
		setPageButton(num);

		setTimeout(() => {
			setPageButton();
		}, 10);
	}

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

	return (
		<Router>
			<div className="background back-1"></div>
			<div className="background back-2"></div>
			<NavTop setPageWithNum={setPageWithNum} />
			<NavRight setPageWithNum={setPageWithNum} />

			<Nav changeBackground={changeBackground} page={page} render={render} pageButton={pageButton} />

			<Routes>
				<Route path="/" element={<Home currentPage={currentPage} handleOnClickToAboutPage={handleOnClickToAboutPage} />} />
				<Route path="/about" element={<About currentPage={currentPage} />} />
				<Route path="/experience" element={<Experience currentPage={currentPage} />} />
				<Route path="/skill" element={<Skill currentPage={currentPage} />} />
				<Route path="/portfolio" element={<Portfolio currentPage={currentPage} />} />

				<Route path="*" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
