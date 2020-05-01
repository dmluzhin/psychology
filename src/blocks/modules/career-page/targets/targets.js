import $ from "jquery";
import Chart from 'chart.js';

$(document).ready(function () {
	// For a pie chart
	var ctx = document.getElementById('myDonutChart');
	var myDonutChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: [
				'62% Стать высококвалифицированым специалистом',
				'11% Стать человеком высокой культуры',
				'68% Иметь высокий заработок',
				'3% Другое',
				'27% Раскрыть свои способности',
				'32% Стать уважаемым человеком в обществе',
				'41% Сделать карьеру'],
			datasets: [{
				data: [62, 11, 68, 3, 27, 32, 41],
				backgroundColor: [
					'#3E97D1',
					'#65ACDA',
					'#3E97D1',
					'#8BC1E4',
					'#3E97D1',
					'#52A2D6',
					'#65ACDA',
				],
				borderColor: [
					'#3E97D1',
					'#65ACDA',
					'#3E97D1',
					'#8BC1E4',
					'#3E97D1',
					'#52A2D6',
					'#65ACDA',
				],
				borderWidth: 0
			}]
		},
		options: {
			borderAlign: 'inner',
			legend: {
				display: false,
			},
			tooltips: {
				enabled: false,
			},

		}
	});
});