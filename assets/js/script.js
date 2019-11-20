//  Add class dynamically on SVG id paths

$(document).ready(function () {
    let patchComponents = $('#car-svg-for-js').children();
    $(patchComponents).each(function () {
        if ($(this).attr('id')) {
            $(this).addClass('for-hover');
        }
    });
});

// Props for svg position

let SVG_X = 0;
let SVG_Y = 0;
let currentDefId = ''

//  click on SVG  for select  property
let SelectedSVG;
$(document).ready(function () {
    $(window).on('click', function (e) {
        e.stopPropagation()


        $('#car-svg-for-js')[0].offsetTop
        let positionSVGBLockX = Math.round($('#car-svg-for-js').offset().left)
        let positionSVGBLockY = Math.round($('#car-svg-for-js').offset().top);
        let patchComponents = $('#car-svg-for-js').children();
        $(patchComponents).each(function () {
            if ($(this).attr('id')) {
                if ($(this).hasClass('selected-SVG-path-on-hover')) {
                    $(this).removeClass('selected-SVG-path-on-hover')
                }
            }
        });
        if ($(e.target).attr('id') && $(e.target).attr('id') !== 'global-parent-svg') {
            SelectedSVG = $(e.target).attr('id');
            $('#' + SelectedSVG).addClass('selected-SVG-path-on-hover');
            $('.interactive-car__modal').css({
                left: e.pageX,
                top: e.pageY
            });
            SVG_X = e.pageX - positionSVGBLockX;
            SVG_Y = e.pageY - positionSVGBLockY;
            currentDefId = SelectedSVG
            $('.interactive-car__modal').show(300);
        } else {
            $('.interactive-car__modal').hide(300);
        }

    })
});


let arr_defect = [{
        dataDefect: 1,
        defectSVG: `<svg width="17" height="17" onmouseover="showTableActivate(this)" onmouseout="removeTableActivate(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 14.25"><defs><style>.cls-1{fill:#fff;stroke:#ed1c24;stroke-miterlimit:10;stroke-width:1.25px; font-family: sans-serif;}.cls-2{font-size:11px;fill:#ed1c24;font-weight:300; }</style></defs><circle class="cls-1" cx="7.13" cy="7.13" r="6.5"/><text class="cls-2" transform="translate(4.18 11.07)">S</text></svg>`
    },
    {
        dataDefect: 2,
        defectSVG: `<svg width="17" height="17" onmouseover="showTableActivate(this)" onmouseout="removeTableActivate(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 14.25"><defs><style>.cls-3{fill:#fff;stroke:#fcee21;stroke-miterlimit:10;stroke-width:1.25px;}.cls-4{font-size:11px;fill:#fcee21;font-weight:300;}</style></defs><circle class="cls-3" cx="7.13" cy="7.13" r="6.5"/><text class="cls-4" transform="translate(3.1 10.5)">С</text></svg>`
    },
    {
        dataDefect: 3,
        defectSVG: `<svg width="17" height="17" onmouseover="showTableActivate(this)" onmouseout="removeTableActivate(this)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 14.25"><defs><style>.cls-5{fill:#fff;stroke:#00a99d;stroke-miterlimit:10;stroke-width:1.25px;}.cls-6{font-size:11px;fill:#00a99d;font-weight:300;}</style></defs><circle class="cls-5" cx="7.13" cy="7.13" r="6.5"/><text class="cls-6" transform="translate(4 10.5)">d</text></svg>`
    },
    {
        dataDefect: 4,
        defectSVG: `<svg width="17" height="17" onmouseover="showTableActivate(this)" onmouseout="removeTableActivate(this)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 14.25"><defs><style>.cls-7{fill:#fff;stroke:#f93;stroke-miterlimit:10;stroke-width:1.25px;}.cls-8{font-size:11px;fill:#f93;font-weight:300;}</style></defs><circle class="cls-7" cx="7.13" cy="7.13" r="6.5"/><text class="cls-8" transform="translate(5 10.5)">f</text></svg>`
    },
    {
        dataDefect: 5,
        defectSVG: `<svg width="17" height="17"onmouseover="showTableActivate(this)" onmouseout="removeTableActivate(this)"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14.25 15.27"><defs><style>.cls-9{fill:#fff;stroke:blue;stroke-miterlimit:10;stroke-width:1.25px;}.cls-10{font-size:11px;fill:blue;font-weight:300;}</style></defs><circle class="cls-9" cx="7.13" cy="8.15" r="6.5"/><text class="cls-10" transform="translate(4.5 10)">g</text></svg>`
    },
    {
        dataDefect: 6,
        defectSVG: `<svg width="17" height="17"onmouseover="showTableActivate(this)" onmouseout="removeTableActivate(this)"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 14.25"><defs><style>.cls-11{fill:#fff;stroke:#8cc63f;stroke-miterlimit:10;stroke-width:1.25px;}.cls-12{font-size:11px;fill:#8cc63f;font-weight:300;}</style></defs><circle class="cls-11" cx="7.13" cy="7.13" r="6.5"/><text class="cls-12" transform="translate(4.5 10.5)">b</text><text x="-0.38" y="-0.42"/></svg>`
    }
];


// select property and add active SVG
$(document).ready(function () {

    $('.interactive-car__modal ul li').on('click', function (e) {
        e.stopPropagation()
        if ($('#' + SelectedSVG)) {
            $('#' + SelectedSVG).attr("fill", "rgba(250,209,155,0.7)");
            let currentId = Number($(this).attr('data-defect'));
            let addedDefectOnTable = $('.interactive-car__table table tbody')
            let mainSVG = $('#car-svg-for-js');
            arr_defect.map(item => {
                const getRandomId = randomNumberFromRange(minNumber, maxNumber)
                if (currentId === item.dataDefect) {
                    let activeSVG = $(item.defectSVG);
                    $(activeSVG).attr('x', SVG_X - 10);
                    $(activeSVG).attr('y', SVG_Y - 10);
                    $(activeSVG).attr('id', getRandomId);
                    $(mainSVG).append($(activeSVG))
                    $('.interactive-car__modal').hide(300);

                    $('.interactive-car__table--remove-row').on('click', function () {
                        let current_block = $(this).parents('tr');
                        let current_list_id = $(current_block).attr('data-current-id');
                        let current_SVG_id = $(current_block).attr('data-id');
                        let SVG_block = $('#car-svg-for-js').find('#' + current_list_id);
                        let SVG_selected = $('#car-svg-for-js').find('#' + current_SVG_id);
                        $(SVG_block).removeClass('selected-SVG-path-on-hover');
                        $(SVG_selected).remove();
                        $(current_block).remove()
                    })
                    $(addedDefectOnTable).append(
                        "<tr onmouseover='showSvgIconActive(this)' onmouseout='hideSvgIconActive(this)' data-current-id='" + currentDefId + "' data-id='" + getRandomId + "'>" +
                        "<td><span class='interactive-car__table--results-increment'></span> </td>" +
                        "<td>" + currentDefId + " </td>" +
                        "<td>" + currentId + "</td>" +
                        "<td>" + (SVG_X - 10) + "</td>" +
                        "<td>" + (SVG_Y - 10) + "</td>" +
                        "<td> <span class='interactive-car__table--remove-row' onClick='removeSVG(this)'></span></td>" +
                        "</tr>")
                }
            });
            SVG_X = 0;
            SVG_Y = 0;
        }

    })
})


// get random number

var minNumber = 0;
var maxNumber = 10000

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//remove column

function removeSVG($this) {
    let current_block = $($this).parents('tr');
    let parrent_table = $($this).parents('tbody').children();
    let current_list_id = $(current_block).attr('data-current-id');
    let current_SVG_id = $(current_block).attr('data-id');
    let SVG_block = $('#car-svg-for-js').find('#' + current_list_id);
    let SVG_selected = $('#car-svg-for-js').find('#' + current_SVG_id);
    let sum = 0;

    $(parrent_table).each(function () {
        let cuurent_list = $(this)[0];
        if ($(cuurent_list).attr('data-current-id') === current_list_id) {
            sum++
        }
    });
    if (sum > 1) {
        $(SVG_selected).remove();
        $(current_block).remove()
    } else {
        $(SVG_block).attr("fill", "rgba(255, 255, 255, 0.6)");

        $(SVG_selected).remove();
        $(current_block).remove()
    }

}


// show SVG activates  on hover table list

function showSvgIconActive($this) {
    let current_list = $($this)[0];
    let current_list_id = $(current_list).attr('data-id');
    let mainSVG = $('#car-svg-for-js');
    let current_active_svg = $(mainSVG).find('#' + current_list_id).find('circle')[0]
    $(current_active_svg).css({
        fill: 'black'
    })
}

function hideSvgIconActive($this) {
    let current_list = $($this)[0];
    let current_list_id = $(current_list).attr('data-id');
    let mainSVG = $('#car-svg-for-js');
    let current_active_svg = $(mainSVG).find('#' + current_list_id).find('circle')[0]
    $(current_active_svg).css({
        fill: 'white'
    })
}


// show activate table on hover SVG


function showTableActivate(current_element) {
    $(current_element).css({
        cursor: 'pointer'
    })
    let current_SVG_id = $(current_element).attr('id');
    let table_list_block = $('.interactive-car__table--results table tbody').children();
    $(table_list_block).each(function () {
        if ($(this).attr('data-id') === current_SVG_id) {
            $(this).addClass('interactive-car__table--results-hover');
        }
    });
}


function removeTableActivate(current_element) {
    let current_SVG_id = $(current_element).attr('id');
    let table_list_block = $('.interactive-car__table--results table tbody').children();
    $(table_list_block).each(function () {
        if ($(this).attr('data-id') === current_SVG_id) {
            $(this).removeClass('interactive-car__table--results-hover');
        }
    });
}



//create img  from SVG
$(document).ready(function () {

    (function (w, d) {

        var btn = d.querySelector('.interactive-car__save--btn');
        var svg = d.getElementById('global-parent-svg');
        var canvas = d.querySelector('canvas');

        btn.addEventListener('click', function () {
            var ctx = canvas.getContext('2d');
            var data = (new XMLSerializer()).serializeToString(svg);
            var DOMURL = w.URL || w.webkitURL || w;

            var img = new Image();
            var svgBlob = new Blob([data], {
                type: 'image/svg+xml;charset=utf-8'
            });
            var url = DOMURL.createObjectURL(svgBlob);

            img.onload = function () {
                ctx.drawImage(img, 0, 0);
                DOMURL.revokeObjectURL(url);

                var imgURI = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');

                $(".interactive-car__save").append('<img width="370" src="' + imgURI + '"/>')

            };
            img.src = url;

        });
    }(window, document));

})