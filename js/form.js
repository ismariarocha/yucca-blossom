$(document).ready(function () {
    var total = 0.00;
    $('select[name="select_num"]').change(function () {
        var sel_value = $('option:selected').val();
        if (sel_value == 0) {
            $('.form_submit').empty();
            $('.dynamicForm').css({
                'display': 'none'
            });
        } else {
            $('.dynamicForm').empty();
            create(sel_value);
            updateTotal(sel_value);
            // Appending Submit Button To Form
            /*$('.dynamicForm').append(
                $('<div/>', {
                    class: 'center'
                }).append(
                    $('<input/>', {
                        class: 'button quaternary mb0',
                        type: 'submit',
                        value: 'Register'
                    })
                )
            )*/
        }
    });
  
    function create(sel_value) {
        for (var i = 1; i <= sel_value; i++) {
            // $('div#dynamicForm').slideDown('slow');
            $('div.dynamicForm').append(
                
                
                $('<hr class="m3">'),
                $('<div class="form-group"></div>').append(
                    $('<h6>Attendee #'+i+'</h6>')
                ),
                $('<div class="form-group"></div>').append(
                    $('<label/>', {
                        for: 'name_' + i
                    }).text('Full Name'),
                    $('<input />', {
                        class: 'form-control',
                        type: 'text',
                        name: 'name_' + i,
                        required: 'true'
                        
                    })
                ),
                $('<div class="form-group"></div>').append(
                    $('<label/>', {
                        for: 'email_' + i
                    }).text('E-mail'),
                    $('<input/>', {
                        class: 'form-control',
                        type: 'text',
                        placeholder: 'name@example.com',
                        name: 'email_' + i,
                        required: 'true'
                    })
                ),
                $('<div class="form-group"></div>').append(
                    $('<label/>', {
                        for: 'phone_' + i
                    }).text('Phone #'),
                    $('<input/>', {
                        class: 'form-control',
                        type: 'phone',
                        placeholder: '+1 (512) 1555-555',
                        name: 'phone_' + i,
                        required: 'true'
                    })
                ), 
                $('<div class="form-group"></div>').append(
                    $('<label/>', {
                        for: 'sel-subject_' + i
                    }).text('Subject Taught'),
                    $('<select/>', {
                        class: 'form-control',
                        name: 'sel-subject_' + i,
                        required: 'true'
                    }).append(
                        $('<option selected="true" disabled>Select a subject</option>'),
                        $('<option value="Math">Math</option>'),
                        $('<option value="Science">Science</option>'),
                        $('<option value="Social Studies">Social Studies</option>'),
                        $('<option value="Language">English/Language arts</option>'),
                        $('<option value="Administrator">Administrator</option>'),
                        $('<option value="Other">Other</option>')
                    ) 
                ),
                $('<div class="form-group"></div>').append(
                    $('<label/>', {
                        for: 'sel-grade_' + i
                    }).text('Grade'),
                    $('<select/>', {
                        class: 'form-control',
                        name: 'sel-grade_' + i,
                        required: 'true'
                    }).append(
                        $('<option selected="true" disabled>Select the grade</option>'),
                        $('<option value="k">Kindergarden</option>'),
                        $('<option value="1">Grade 1</option>'),
                        $('<option value="2">Grade 2</option>'),
                        $('<option value="3">Grade 3</option>'),
                        $('<option value="4">Grade 4</option>'),
                        $('<option value="5">Grade 5</option>'),
                        $('<option value="6">Grade 6</option>'),
                        $('<option value="7">Grade 7</option>'),
                        $('<option value="8">Grade 8</option>'),
                        $('<option value="9">Grade 9</option>'),
                        $('<option value="10">Grade 10</option>'),
                        $('<option value="11">Grade 11</option>'),
                        $('<option value="12">Grade 12</option>')
                    ) 
                ),
                $('<div class="form-group"></div>').append(
                    $('<label/>', {
                        for: 'school_' + i
                    }).text('School/District'),
                    $('<input/>', {
                        class: 'form-control',
                        type: 'text',
                        name: 'school_' + i,
                        required: 'true'
                    })
                )
                
            )
        }
    }

    function updateTotal(sel_value) {

        let today = new Date();
        let totalField = $('input[name="total_pay"]');

        if(today <= new Date("2018-07-10") && sel_value < 4){
            totalField.val('$ '+(sel_value*325));
        }
        else if(today <= new Date("2018-07-10") && sel_value >= 4){
            totalField.val('$ '+(sel_value*300));
        }
        else if(today > new Date("2018-07-10") && sel_value < 4){
            totalField.val('$ '+(sel_value*375));
        }
        else if(today > new Date("2018-07-10") && sel_value >= 4){
            totalField.val('$ '+(sel_value*350));
        }

    }
});