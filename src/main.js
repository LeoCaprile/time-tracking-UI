const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const arrButtons = [ daily, weekly, monthly ];

const weekText = document.getElementsByClassName('time');
const lastWeekText = document.getElementsByClassName('time-week');

const RecordArr = [ 32, 10, 4, 4, 5, 2 ];

RecordArr.map((text, index) => {
	weekText[index].innerText = text / 2 + 'Hrs';
});

const toogleActive = (span) => {
	arrButtons.map((item, index) => {
		if (item === span) {
			item.classList.add('selection__card__active');
		} else {
			item.classList.remove('selection__card__active');
		}
	});
};
RecordArr.map((text, index) => {
	lastWeekText[index].innerText = 'Last Day' + ' - ' + Math.floor(text * 1.2) + 'Hrs';
});

function dailyButton() {
	RecordArr.map((text, index) => {
		weekText[index].innerText = text / 2 + 'Hrs';
	});

	RecordArr.map((text, index) => {
		lastWeekText[index].innerText = 'Last Day' + ' - ' + Math.floor(text * 1.2) + 'Hrs';
	});

	toogleActive(this);
}
function weeklyButton() {
	RecordArr.map((text, index) => {
		weekText[index].innerText = text + 'Hrs';
	});

	RecordArr.map((text, index) => {
		lastWeekText[index].innerText = 'Last Week' + ' - ' + text + 'Hrs';
	});

	toogleActive(this);
}
function monthlyButton() {
	RecordArr.map((text, index) => {
		weekText[index].innerText = text * 3 + 'Hrs';
	});
	RecordArr.map((text, index) => {
		lastWeekText[index].innerText = 'Last Month' + ' - ' + Math.floor(text / 1.5) + 'Hrs';
	});

	toogleActive(this);
}

daily.addEventListener('click', dailyButton);

weekly.addEventListener('click', weeklyButton);

monthly.addEventListener('click', monthlyButton);
