jQuery(document).ready(function( $ ) {
	var iqamaNewTimes = iqamaNew;
	var iqamaOldTimes = iqamaOld;
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var currentDate = new Date();
	var currentMonth = monthNames[currentDate.getMonth()];
	var formattedDay = currentDate.getDay();
	var formattedDate = currentDate.getDate();
	var formattedMonth = currentDate.getMonth();
	var formattedYear = currentDate.getFullYear();
	$('#prayer-times').append('<h3>Iqama Times for ' + currentMonth + '</h3>');
	$('#prayer-times').append('<ul></ul>');

	function loopOld () {
		for( var i = 0; i < iqamaOldTimes.length; i++ ) {
			var obj = iqamaOldTimes[i];

			for (var key in obj ) {
				if (currentMonth === obj.Month) {
					if (!$('#prayer-times ul li.index'+i).length) {
						$('#prayer-times ul').append('<li class="clearfix index'+i+'"><span class="month">' + obj.Month +' </span></li>');
					}
					if (key === 'Day') {
						if (formattedDate === Number(obj.Day)) {
							$('#prayer-times ul li.index' + i).append('<span class="day">'+ obj.Day + ' </span>').css('background-color', '#ddd');
						} else {
							$('#prayer-times ul li.index' + i).append('<span class="day">'+ obj.Day + ' </span>');
						}
					} else if (key !== 'Month' && key !== 'Day') {
						$('#prayer-times ul li.index' + i).append('<span class="prayerTime">' + key + ' </span><span class="prayerTime">' + obj[key] + ' </span>');
					}
				}
			}
		}
	}
	function loopNew () {
		for( var i = 0; i < iqamaNewTimes.length; i++ ) {
			var obj = iqamaNewTimes[i];
	
			for (var key in obj ) {
				if (currentMonth === obj.Month) {
					if (!$('#prayer-times ul li.index'+i).length) {
						$('#prayer-times ul').append('<li class="clearfix index'+i+'"><span class="month">' + obj.Month +' </span></li>');
					}
					if (key === 'Day') {
						if (formattedDate === Number(obj.Day)) {
							$('#prayer-times ul li.index' + i).append('<span class="day">'+ obj.Day + ' </span>').css('background-color', '#ddd');
						} else {
							$('#prayer-times ul li.index' + i).append('<span class="day">'+ obj.Day + ' </span>');
						}
					} else if (key !== 'Month' && key !== 'Day') {
						$('#prayer-times ul li.index' + i).append('<span class="prayerTime">' + key + ' </span><span class="prayerTime">' + obj[key] + ' </span>');
					}
				}
			}
		}
	}
	loopOld();
	loopNew();
});