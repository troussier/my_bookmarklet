if ((location.href).match(/\/car\//)) {
    if ((location.href).match(/_page2_/)) {
        $('[name="loan_amount"]').val('100');
        $('[name="loan_bonus"]').val('50').trigger('change');
        $('[name="loan_date[Y]"] option[value="30"]').prop('selected', true);
    }
}