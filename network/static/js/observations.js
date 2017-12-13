$(document).ready(function() {
    'use strict';

    $('#observation-filter').submit(function () {
        var the_form = $(this);

        the_form.find('input[type="checkbox"]').each( function () {
            var the_checkbox = $(this);


            if( the_checkbox.is(':checked') === true ) {
                the_checkbox.attr('value','1');
            } else {
                the_checkbox.prop('checked',true);
                // Check the checkbox but change it's value to 0
                the_checkbox.attr('value','0');
            }
        });
    });

    $('.filter-section input[type=checkbox]').change(function() {
        $('#observation-filter').submit();
    });

    // Satellite Filters
    $('#satellite-selection').bind('keyup change', function() {
        $('#observation-filter').submit();
    });
    $('#observer-selection').bind('keyup change', function() {
        $('#observation-filter').submit();
    });
    $('#station-selection').bind('keyup change', function() {
        $('#observation-filter').submit();
    });
    if (window.location.hash == "#collapseFilters") {
    
        $('#collapseFilters').hide()
    } else if ($('#satellite-selection').val() || $('#observer-selection').val() || $('#station-selection').val()) {

        $('#collapseFilters').show();
    }

    $('#open-all').click(function() {
        $('a.obs-link').each(function() {
            window.open($(this).attr('href'));
        });
    });
});
