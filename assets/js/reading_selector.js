function ReadingSelector() {
	var $me = this;

	this.CHAPTER_TYPE_GOSPEL = 1;
	this.CHAPTER_TYPE_APOSTLES = 2;
	this.CHAPTER_TYPE_PSALMS = 3;

	this.chapters = [
		['Мф 1', 'Деян 1', 'Деян 2'],
		['Мф 2', 'Деян 3', 'Деян 4'],
		['Мф 3', 'Деян 5', 'Деян 6'],
		['Мф 4', 'Деян 7', 'Деян 8'],
		['Мф 5', 'Деян 9', 'Деян 10'],
		['Мф 6', 'Деян 11', 'Деян 12'],
		['Мф 7', 'Деян 13', 'Деян 14'],
		['Мф 8', 'Деян 15', 'Деян 16'],
		['Мф 9', 'Деян 17', 'Деян 18'],
		['Мф 10', 'Деян 19', 'Деян 20'],
		['Мф 11', 'Деян 21', 'Деян 22'],
		['Мф 12', 'Деян 23', 'Деян 24'],
		['Мф 13', 'Деян 25', 'Деян 26'],
		['Мф 14', 'Деян 27', 'Деян 28'],
		['Мф 15', 'Иак 1', 'Иак 2'],
		['Мф 16', 'Иак 3', 'Иак 4'],
		['Мф 17', 'Иак 5', '1 Пет 1'],
		['Мф 18', '1 Пет 2', '1 Пет 3'],
		['Мф 19', '1 Пет 4', '1 Пет 5'],
		['Мф 20', '2 Пет 1', '2 Пет 2'],
		['Мф 21', '2 Пет 3', '1 Ин 1'],
		['Мф 22', '1 Ин 2', '1 Ин 3'],
		['Мф 23', '1 Ин 4', '1 Ин 5'],
		['Мф 24', '2 Ин 1', '3 Ин 1'],
		['Мф 25', 'Иуд 1', 'Рим 1'],
		['Мф 26', 'Рим 2', 'Рим 3'],
		['Мф 27', 'Рим 4', 'Рим 5'],
		['Мф 28', 'Рим 6', 'Рим 7'],

		['Мк 1', 'Рим 8', 'Рим 9'],
		['Мк 2', 'Рим 10', 'Рим 11'],
		['Мк 3', 'Рим 12', 'Рим 13'],
		['Мк 4', 'Рим 14', 'Рим 15'],
		['Мк 5', 'Рим 16', '1 Кор 1'],
		['Мк 6', '1 Кор 2', '1 Кор 3'],
		['Мк 7', '1 Кор 4', '1 Кор 5'],
		['Мк 8', '1 Кор 6', '1 Кор 7'],
		['Мк 9', '1 Кор 8', '1 Кор 9'],
		['Мк 10', '1 Кор 10', '1 Кор 11'],
		['Мк 11', '1 Кор 12', '1 Кор 13'],
		['Мк 12', '1 Кор 14', '1 Кор 15'],
		['Мк 13', '1 Кор 16', '2 Кор 1'],
		['Мк 14', '2 Кор 2', '2 Кор 3'],
		['Мк 15', '2 Кор 4', '2 Кор 5'],
		['Мк 16', '2 Кор 6', '2 Кор 7'],

		['Лк 1', '2 Кор 8', '2 Кор 9'],
		['Лк 2', '2 Кор 10', '2 Кор 11'],
		['Лк 3', '2 Кор 12', '2 Кор 13'],
		['Лк 4', 'Гал 1', 'Гал 2'],
		['Лк 5', 'Гал 3', 'Гал 4'],
		['Лк 6', 'Гал 5', 'Гал 6'],
		['Лк 7', 'Еф 1', 'Еф 2'],
		['Лк 8', 'Еф 3', 'Еф 4'],
		['Лк 9', 'Еф 5', 'Еф 6'],
		['Лк 10', 'Флп 1', 'Флп 2'],
		['Лк 11', 'Флп 3', 'Флп 4'],
		['Лк 12', 'Кол 1', 'Кол 2'],
		['Лк 13', 'Кол 3', 'Кол 4'],
		['Лк 14', '1 Фес 1', '1 Фес 2'],
		['Лк 15', '1 Фес 3', '1 Фес 4'],
		['Лк 16', '1 Фес 5', '2 Фес 1'],
		['Лк 17', '2 Фес 2', '2 Фес 3'],
		['Лк 18', '1 Тим 1', '1 Тим 2'],
		['Лк 19', '1 Тим 3', '1 Тим 4'],
		['Лк 20', '1 Тим 5', '1 Тим 6'],
		['Лк 21', '2 Тим 1', '2 Тим 2'],
		['Лк 22', '2 Тим 3', '2 Тим 4'],
		['Лк 23', 'Тит 1', 'Тит 2'],
		['Лк 24', 'Тит 3', 'Флм 1'],
		['Ин 1', 'Евр 1', 'Евр 2'],
		['Ин 2', 'Евр 3', 'Евр 4'],
		['Ин 3', 'Евр 5', 'Евр 6'],
		['Ин 4', 'Евр 7', 'Евр 8'],
		['Ин 5', 'Евр 9', 'Евр 10'],
		['Ин 6', 'Евр 11', 'Евр 12'],
		['Ин 7', 'Евр 13', 'Откр 1'],
		['Ин 8', 'Откр 2', 'Откр 3'],
		['Ин 9', 'Откр 4', 'Откр 5'],
		['Ин 10', 'Откр 6', 'Откр 7'],
		['Ин 11', 'Откр 8', 'Откр 9'],
		['Ин 12', 'Откр 10', 'Откр 11'],
		['Ин 13', 'Откр 12', 'Откр 13'],
		['Ин 14', 'Откр 14', 'Откр 15'],
		['Ин 15', 'Откр 16'],
		['Ин 16', 'Откр 17'],
		['Ин 17', 'Откр 18'],
		['Ин 18', 'Откр 19'],
		['Ин 19', 'Откр 20'],
		['Ин 20', 'Откр 21'],
		['Ин 21', 'Откр 22']
	];

	this.kathismaToPsalmsMapping = {
		1: '1-8',
		2: '9-16',
		3: '17-23',
		4: '24-31',
		5: '32-36',
		6: '37-45',
		7: '46-54',
		8: '55-63',
		9: '64-69',
		10: '70-76',
		11: '77-84',
		12: '85-90',
		13: '91-100',
		14: '101-104',
		15: '105-108',
		16: '109-117',
		17: '118-118',
		18: '119-133',
		19: '134-142',
		20: '143-150'
	};

	this.urlMapping = {
		'Мф': 'https://azbyka.ru/biblia/?Mt.{chapter}&utfcs',
		'Мк': 'https://azbyka.ru/biblia/?Mk.{chapter}&utfcs',
		'Лк': 'https://azbyka.ru/biblia/?Lk.{chapter}&utfcs',
		'Ин': 'https://azbyka.ru/biblia/?Jn.{chapter}&utfcs',

		'Деян': 'https://azbyka.ru/biblia/?Act.{chapter}&utfcs',
		'Иак': 'https://azbyka.ru/biblia/?Jac.{chapter}&utfcs',
		'1 Пет': 'https://azbyka.ru/biblia/?1Pet.{chapter}&utfcs',
		'2 Пет': 'https://azbyka.ru/biblia/?2Pet.{chapter}&utfcs',
		'1 Ин': 'https://azbyka.ru/biblia/?1Jn.{chapter}&utfcs',
		'2 Ин': 'https://azbyka.ru/biblia/?2Jn.{chapter}&utfcs',
		'3 Ин': 'https://azbyka.ru/biblia/?3Jn.{chapter}&utfcs',
		'Иуд': 'https://azbyka.ru/biblia/?Juda.{chapter}&utfcs',
		'Рим': 'https://azbyka.ru/biblia/?Rom.{chapter}&utfcs',
		'1 Кор': 'https://azbyka.ru/biblia/?1Cor.{chapter}&utfcs',
		'2 Кор': 'https://azbyka.ru/biblia/?2Cor.{chapter}&utfcs',
		'Гал': 'https://azbyka.ru/biblia/?Gal.{chapter}&utfcs',
		'Еф': 'https://azbyka.ru/biblia/?Eph.{chapter}&utfcs',
		'Флп': 'https://azbyka.ru/biblia/?Phil.{chapter}&utfcs',
		'Кол': 'https://azbyka.ru/biblia/?Col.{chapter}&utfcs',
		'1 Фес': 'https://azbyka.ru/biblia/?1Thes.{chapter}&utfcs',
		'2 Фес': 'https://azbyka.ru/biblia/?2Thes.{chapter}&utfcs',
		'1 Тим': 'https://azbyka.ru/biblia/?1Tim.{chapter}&utfcs',
		'2 Тим': 'https://azbyka.ru/biblia/?2Tim.{chapter}&utfcs',
		'Тит': 'https://azbyka.ru/biblia/?Tit.{chapter}&utfcs',
		'Флм': 'https://azbyka.ru/biblia/?Phlm.{chapter}&utfcs',
		'Евр': 'https://azbyka.ru/biblia/?Hebr.{chapter}&utfcs',
		'Откр': 'https://azbyka.ru/biblia/?Apok.{chapter}&utfcs',

		'К': 'https://azbyka.ru/biblia/?Ps.{chapter}&utfcs'
	};

	this.currentDate = '';

	$(document).ready(function () {
		$me.init();
	});
}

ReadingSelector.prototype.init = function () {
	var $me = this;

	$me.choose(window.location.hash ? window.location.hash.substring(1) : '');

	$(window).on('hashchange', function ($e) {
		$me.choose(window.location.hash ? window.location.hash.substring(1) : '');
	});

	// Once per hour check if day has changed and automatically show "Today" button.
	setInterval(function() {
		$me.refreshTodayButton();
	}, 3600 * 1000);
};

ReadingSelector.prototype.refreshTodayButton = function () {
	$('#today-btn').toggle(moment().format('YYYY-MM-DD') !== this.currentDate);
};

ReadingSelector.prototype.getChapterUrl = function ($title) {
	var $parsed = this.parseChapterTitle($title),
		$prefix = $parsed[0],
		$suffix = $parsed[1];

	if ( this.urlMapping[$prefix] === undefined ) {
		throw new Error('Unable to build URL to the "' + $title + '" chapter (no url mapping).');
	}

	if ( this.getChapterType($title) === this.CHAPTER_TYPE_PSALMS ) {
		$suffix = this.kathismaToPsalmsMapping[$suffix];
	}

	return this.urlMapping[$prefix].replace('{chapter}', $suffix);
};

ReadingSelector.prototype.getChapterType = function ($title) {
	var $parsed = this.parseChapterTitle($title);

	if ( $parsed[0] === 'К' ) {
		return this.CHAPTER_TYPE_PSALMS;
	}
	else if ( $.inArray($parsed[0], ['Мф', 'Мк', 'Лк', 'Ин']) !== -1 ) {
		return this.CHAPTER_TYPE_GOSPEL;
	}

	return this.CHAPTER_TYPE_APOSTLES;
};

ReadingSelector.prototype.parseChapterTitle = function ($title) {
	var $prefix,
		$suffix,
		$matches,
		$regexp = new RegExp('([\\d]+ )?([^\\d]*) ([\\d]+)$');

	$matches = $regexp.exec($title);

	if ( $matches.length === 0 ) {
		throw new Error('Unable to build URL to the "' + $title + '" chapter (unknown format).');
	}

	$prefix = $.trim(($matches[1] || '') + $matches[2]);
	$suffix = $matches[3];

	return [$prefix, $suffix];
};

ReadingSelector.prototype.choose = function ($date) {
	var $moment = moment($date || undefined),
		$chapter_offset = this.getOffset($moment, this.chapters.length),
		$kathism_offset = this.getOffset($moment, 20),
		$reading = [];

	this.currentDate = $moment.format('YYYY-MM-DD');

	// Stop reading Gospel & Apostles at "22 Dec".
	if ( $moment.month() !== 11 || $moment.date() <= 22 ) {
		$reading = this.chapters[$chapter_offset - 1];
	}

	// Stop reading Psalms at "27 Dec".
	if ( $moment.month() !== 11 || $moment.date() <= 27 ) {
		$reading.push('К ' + $kathism_offset);
	}

	$('#date-container')
		.text($moment.format('D MMMM YYYY'))
		.attr('href', 'https://azbyka.ru/days/' + $moment.format('YYYY-MM-DD'));

	this.refreshTodayButton();
	$('#prev-day-btn').attr('href', '#' + $moment.clone().subtract(1, 'days').format('YYYY-MM-DD'));
	$('#next-day-btn').attr('href', '#' + $moment.clone().add(1, 'days').format('YYYY-MM-DD'));

	this.replaceReading($reading);
};

ReadingSelector.prototype.replaceReading = function ($reading) {
	var $me = this,
		$gospel_container = $('#gospel-container'),
		$apostles_container = $('#apostles-container'),
		$psalms_container = $('#psalms-container');

	$gospel_container.text('-');
	$apostles_container.text('-');
	$psalms_container.text('-');

	$.each($reading, function ($index, $title) {
		var $chapter_type = $me.getChapterType($title),
			$chapter_link = $(
				'<a>',
				{
					href: $me.getChapterUrl($title),
					target: '_blank',
					title: $me.getChapterHint($chapter_type),
					text: $title
				}
			);

		if ( $chapter_type === $me.CHAPTER_TYPE_GOSPEL ) {
			$gospel_container.empty().append($chapter_link);
		}
		else if ( $chapter_type === $me.CHAPTER_TYPE_PSALMS ) {
			$psalms_container.empty().append($chapter_link);
		}
		else if ( $chapter_type === $me.CHAPTER_TYPE_APOSTLES ) {
			if ( $apostles_container.text() === '-' ) {
				$apostles_container.empty().append($chapter_link);
			}
			else {
				$apostles_container.append(', ').append($chapter_link);
			}
		}
	});
};

ReadingSelector.prototype.getChapterHint = function ($chapter_type) {
	if ( $chapter_type === this.CHAPTER_TYPE_GOSPEL ) {
		return 'Читать главу из Евангелия';
	}
	else if ( $chapter_type === this.CHAPTER_TYPE_APOSTLES ) {
		return 'Читать главу из Апостола';
	}
	else if ( $chapter_type === this.CHAPTER_TYPE_PSALMS ) {
		return 'Читать кафизму из Псалтири';
	}

	return '';
};

ReadingSelector.prototype.getOffset = function ($moment, $sequence_length) {
	var $offset = $moment.dayOfYear() % $sequence_length;

	// Ignore "February 29" in leap years.
	if ( $moment.isLeapYear() && $moment.month() > 1 ) {
		$offset -= 1;
	}

	// No division reminder means last element in the sequence.
	if ( $offset === 0 ) {
		$offset = $sequence_length;
	}

	return $offset;
};
