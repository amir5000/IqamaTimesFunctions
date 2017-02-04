jQuery(document).ready(function( $ ) {
    var iqamaNewData = iqamaNew;
	var iqamaOldData = iqamaOld;
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    var currentMonth = monthNames[currentDate.getMonth()];
    var formattedDayNumber = currentDate.getDate();
    $('#prayer-times').append('<h3>Iqama Times for ' + currentMonth + '</h3>');
	$('#prayer-times').append('<ul></ul>');
    function createIqamaCalendar(iqamaTimes) {
        var prayerSchedule = iqamaTimes.map(function(iqamaToday, i) {
            var currentDayProperties = Object.getOwnPropertyNames(iqamaToday);
            currentDayProperties.map(function(prop){
                if (prop === "Month") {
                    $('#prayer-times ul').append('<li class="clearfix index'+i+'"><span class="month">' + iqamaToday.Month +' </span></li>');
                }
                if (prop === "Day" && formattedDayNumber === Number(iqamaToday.Day)) {
                    $('#prayer-times ul li.index' + i).append('<span class="day">'+ iqamaToday.Day + ' </span>').css('background-color', '#ddd');
                } else if (prop === "Day" && formattedDayNumber !== iqamaToday.Day) {
                    $('#prayer-times ul li.index' + i).append('<span class="day">'+ iqamaToday.Day + ' </span>');
                }
                if (prop === "Maghrib Iqama") {
                    $('#prayer-times ul li.index' + i).append('<span class="prayerTime magrib">' + prop + ' </span><span class="prayerTime">' + iqamaToday[prop] + ' </span>');
                } else if (prop !== "Day" && prop !== "Month") {
                    $('#prayer-times ul li.index' + i).append('<span class="prayerTime">' + prop + ' </span><span class="prayerTime">' + iqamaToday[prop] + ' </span>');
                }
            });
        });
    }
    if (currentMonth === iqamaNewData[0].Month) {
        createIqamaCalendar(iqamaNewData);
    } else {
        createIqamaCalendar(iqamaOldData);
    }
});
