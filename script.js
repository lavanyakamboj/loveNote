for (let i = 0; i < 25; i++) {
	let heart = document.createElement("div");
	heart.className = "heart";
	heart.style.left = Math.random() * 100 + "vw";
	heart.style.animationDuration = 3 + Math.random() * 5 + "s";
	heart.style.background = ["#ff4d6d", "#ff2e63", "#ff6b81"][
		Math.floor(Math.random() * 3)
	];
	document.body.appendChild(heart);
}

function openLetter() {
	window.location.href = "letter.html";
}
