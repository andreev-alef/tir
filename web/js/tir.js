/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getToday() {
    return '16 марта 2017';
}

$(document).ready(function () {
    $('#today').click(function () {
        $('#orderDay > option[value=3]').attr('selected', 'selected');
        $('#orderMonth > option[value=7]').attr('selected', 'selected');
        $('#orderYear > option[value=21]').attr('selected', 'selected');
    });
});