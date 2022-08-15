// // // element
const body = document.body;
const br = document.getElementsByTagName('br')[0];

// // konten
const konten = document.createElement('div');
konten.classList.add('kontener');

body.appendChild(konten);
body.insertBefore(konten, br);

// //areaBot
const areaBot = document.createElement('div');
areaBot.classList.add('areaBot');

konten.appendChild(areaBot);

// img
const imgB = document.createElement('img');
imgB.setAttribute('src', 'img/tanya.png');
imgB.setAttribute('width', '100');
imgB.classList.add('imgB');

areaBot.appendChild(imgB);

// ? 
const tH = document.createElement('h3');
const ttH = document.createTextNode('??');
tH.classList.add('teks-bot');

tH.appendChild(ttH);
areaBot.appendChild(tH);

// // areaPlayer
const areaPlayer = document.createElement('div');
areaPlayer.classList.add('areaPlayer');

konten.appendChild(areaPlayer);

// divimg 
const divImg = document.createElement('div');
divImg.classList.add('div-img');

areaPlayer.appendChild(divImg);

// imgPlayer
const img1 = document.createElement('img');
img1.setAttribute('src', 'img/jempol.png');
img1.setAttribute('width', '100');

img1.classList.add('gajah');

const img2 = document.createElement('img');
img2.setAttribute('src', 'img/telunjuk.png');
img2.setAttribute('width', '100');

img2.classList.add('orang');

const img3 = document.createElement('img');
img3.setAttribute('src', 'img/kelingking.png');
img3.setAttribute('width', '100');

img3.classList.add('semut');

divImg.appendChild(img1);
divImg.appendChild(img2);
divImg.appendChild(img3);

// teks pilihan 
const tP = document.createElement('h3');
const ttP = document.createTextNode('??');
tP.classList.add('teks-player');

tP.appendChild(ttP);
areaPlayer.appendChild(tP);

// button 

const button = document.createElement('button');
const tButton = document.createTextNode('GASS!');

button.setAttribute('type', 'button');
button.classList.add('kirim');

button.appendChild(tButton);
areaPlayer.appendChild(button);

// // info
const info = document.createElement('div');
info.classList.add('info');

konten.appendChild(info);




// // //script

function pilBot () {
	const bot = Math.random();
	if (bot <= 0.37) return 'gajah';
	if (bot >= 0.37 && bot <= 0.67) return 'orang';
	else return 'semut';
}

function pilPB (gua, bot) {
	if (gua == bot) return 'SERI!';
	if (gua == 'gajah') return (bot == 'orang') ? 'MENANG!' : 'KALAH!';
	if (gua == 'orang') return (bot == 'semut') ? 'MENANG!' : 'KALAH!';
	if (gua == 'semut') return (bot == 'gajah') ? 'MENANG!' : 'KALAH!';
}

const gambarB = document.querySelector('.areaBot img');
const gambarIndex = ['jempol', 'kelingking', 'telunjuk'];

function puter () {
	let i = 0;
	const waktuMulai = new Date().getTime();

	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		gambarB.setAttribute('src', 'img/'+ gambarIndex[i++] +'.png');
		if (i == gambarIndex.length) {
			i = 0;
		}
	}, 100);
}

const gambarP = document.querySelectorAll('.areaPlayer img');

gambarP.forEach(function(pil) {
	pil.addEventListener('click', function() {

		const pilihanGua = pil.className;
		const pilihanBot = pilBot();
		const hasil = pilPB(pilihanGua, pilihanBot);

		tP.innerHTML = pilihanGua;

		button.addEventListener('click', function() {

			puter();

			setTimeout(function() {
				if (pilihanBot == 'gajah') {
					gambarB.setAttribute('src', 'img/jempol.png');
				} else if (pilihanBot == 'orang') {
					gambarB.setAttribute('src', 'img/telunjuk.png');
				} else if (pilihanBot == 'semut') {
					gambarB.setAttribute('src', 'img/kelingking.png');
				}

				tH.innerHTML = pilihanBot;
				
				if (hasil == 'KALAH!') {
					info.style.color = 'red';
					info.style.border = 'solid 5px red';
				} else if (hasil == 'MENANG!') {
					info.style.color = 'green';
					info.style.border = 'solid 5px green';
				} else {
					info.style.color = '#222';
					info.style.border = 'solid 5px #222';
				}
				info.innerHTML = hasil;

			}, 1000);
			
			tP.innerHTML = '??';

			if (pilihanBot == 'gajah') {
				imgB.setAttribute('src', 'img/jempol.png');
			} else if (pilihanBot == 'orang') {
				imgB.setAttribute('src', 'img/telunjuk.png');
			} else if (pilihanBot == 'semut') {
				imgB.setAttribute('src', 'img/kelingking.png');
			}	
		});
	});
});

// setelan


