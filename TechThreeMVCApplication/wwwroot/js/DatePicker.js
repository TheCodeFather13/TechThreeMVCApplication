$(function () {

    function WireUpdatePicker()
    {
        const addMonths = 2;
        var currDate = new Date();

        $('.datepicker').datepicker(
          {
            dateFormat: 'dd/mm/yy', // Формат день/месяц/год
            minDate: currDate,  // Нельзя задавать прошлые месяца 
            maxDate: AddSubtractMonths(currDate, addMonths) // Дальше 2-х месяцев нельзя задавать
          }
         );  
    }

    WireUpdatePicker();
});