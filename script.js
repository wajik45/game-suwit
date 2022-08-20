function pilBot () {
	const bot = Math.random();
	if (bot <= 0.35) return 'gajah';
	if (bot >= 0.35 && bot <= 0.67) return 'orang';
	else return 'semut';
}

function hasilBotGua (gua, bot) {
	if (gua == bot) return 'SERI !';
	if (gua == 'gajah') return (bot == 'orang') ? 'MENANG !' : 'KALAH !';
	if (gua == 'orang') return (bot == 'semut') ? 'MENANG !' : 'KALAH !';
	if (gua == 'semut') return (bot == 'gajah') ? 'MENANG !' : 'KALAH !';
}

const namaImg = ['jempol','telunjuk','kelingking'];

const imgGua = document.querySelectorAll('.area-kita img');
const imgBot = document.querySelector('.area-bot img:nth-child(1)');

const teksBot = document.querySelector('.area-bot h2')
const teksKita = document.querySelector('.area-kita h2');
const info = document.querySelector('.info h2');

const divInfo = document.querySelector('.info');

const tmbMulai = document.querySelector('.ambil button');

imgGua.forEach(function(nom) {
	nom.addEventListener('click', function() {
		
		const pilihanGua = nom.className;
		const pilihanBot = pilBot();
		const hasil = hasilBotGua(pilihanGua, pilihanBot);

		teksKita.innerHTML = pilihanGua;

		tmbMulai.onclick = function(e) {

			let i = 0;
			const waktuMulai = new Date().getTime();
			const gambarI = ['jempol','telunjuk','kelingking'];
			const teksRan = ['gajah','orang','semut'];

			setInterval(function() {
				if (new Date().getTime() - waktuMulai > 1000) {
					clearInterval;
					return;
				}
				imgBot.setAttribute('src', 'img/'+ gambarI[i++] +'.png');
		
				if (i == gambarI.length) {
					i = 0;
				}
				teksBot.innerHTML = teksRan[i++];
				if (i == teksRan.length) {
					i = 0;
				}
			}, 100);

			setTimeout(function() {
				
				teksKita.innerHTML = '??';

				teksBot.innerHTML = pilihanBot;

				info.innerHTML = hasil;

				if (pilihanBot == 'gajah') {
					imgBot.setAttribute('src', 'img/'+namaImg[0]+'.png');
				} else if (pilihanBot == 'orang') {
					imgBot.setAttribute('src', 'img/'+namaImg[1]+'.png');
				} else {
					imgBot.setAttribute('src', 'img/'+namaImg[2]+'.png');
				}

				if (hasil == 'MENANG !') {
					divInfo.style.border = '5px solid green';
				} else if (hasil == 'KALAH !') {
					divInfo.style.border = '5px solid red';
				} else {
					divInfo.style.border = '5px solid yellow';
				}
				console.log(hasil);

			}, 1000);
		}
	});
});


// setelan

const setelan = document.querySelector('.area-bot img:nth-child(2)');
const iklan = document.querySelector('.iklan');
const close = document.querySelector('.klos');

setelan.addEventListener('click', function() {
	iklan.style.transform = 'scale(1)';
	iklan.style.zIndex = '99';
});

close.addEventListener('click', function() {
	iklan.style.transform = 'scale(0)';
});

const kMerah = document.querySelector('input[name=merah]');
const kIjo = document.querySelector('input[name=ijo]');
const kBiru = document.querySelector('input[name=biru]');

const hasilWarna = document.querySelector('.hasil-warna');

function rgb () {
	const r = kMerah.value;
	const g = kIjo.value;
	const b = kBiru.value;

	hasilWarna.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}

kMerah.addEventListener('input', function() {
	rgb();
});

kIjo.addEventListener('input', function() {
	rgb();
});	

kBiru.addEventListener('input', function() {
	rgb();
});

const btnAtas = document.querySelector('button.atas');
const btnBawah = document.querySelector('button.bawah');
const btnBg = document.querySelector('button.bg');

const atas = document.querySelector('.area-bot');
const bawah = document.querySelector('.area-kita');

btnAtas.addEventListener('click', () => {
	const r = kMerah.value;
	const g = kIjo.value;
	const b = kBiru.value;

	atas.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

btnBawah.addEventListener('click', () => {
	const r = kMerah.value;
	const g = kIjo.value;
	const b = kBiru.value;

	bawah.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

btnBg.addEventListener('click', () => {
	const r = kMerah.value;
	const g = kIjo.value;
	const b = kBiru.value;

	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});