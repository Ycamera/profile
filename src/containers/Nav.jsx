import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Nav = (props) => {
	const render = props.render;

	//現在のページ
	const [page, setPage] = useState(0);

	//前回のページ
	const [previousPage, setPreviousPage] = useState(0);

	//遷移先のページアドレス
	const pages = ["/", "/about", "/experience", "/skill", "/portfolio"];

	//遷移時の背景エフェクトを起動　引数：'right' or 'left'
	const changeBackground = props.changeBackground;

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
		document.querySelector(".right-side").children[page].classList.add("active");
	}

	//次、前のページがない場合は上下のカーソルを削除
	function waveAppear(page) {
		const waveUp = document.querySelector(".wave-up");
		if (page === 0) {
			waveUp.style.display = "none";
		} else {
			waveUp.style.display = "block";
		}
		const waveDown = document.querySelector(".wave-down");
		if (page >= pages.length - 1) {
			waveDown.style.display = "none";
		} else {
			waveDown.style.display = "block";
		}
	}
	//ページ遷移時に遅らせてメインページを更新
	function pageUpdate() {
		setTimeout(() => {
			if (typeof page === "number") {
				navigate(pages[page]);
				navAddActive(page);
				waveAppear(page);
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
	useEffect(() => {
		if (typeof props.page === "number") {
			if (render && props.page > previousPage) {
				changeBackground("right");
			} else if (render) {
				changeBackground("left");
			}
			navAddActive(props.page);
			waveAppear(props.page);
			setPreviousPage(props.page);
		}
	}, [props.page]);

	//ボタンクリックでページの遷移
	useEffect(() => {
		const num = props.pageButton;
		if (typeof num === "number") setPage(props.pageButton);
	}, props.pageButton);

	//homeページのみ：下部のページ遷移ボタンに波紋を表示
	useEffect(() => {
		const f = document.querySelector(".wave-down");
		if (previousPage === 0) {
			f.classList.add("active");
		} else {
			f.classList.remove("active");
		}
	}, [previousPage]);

	return (
		<nav>
			<span className="wave-up">
				<li className="to-up" onClick={handleOnClickPreviousPage}></li>
			</span>
			<span className="wave-down active">
				<li className="to-down" onClick={handleOnClickNextPage}></li>
			</span>
		</nav>
	);
};
