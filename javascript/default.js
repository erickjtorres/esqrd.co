$(document).ready(function () {
    var $form = $('#mc-embedded-subscribe-form')
    if ($form.length > 0) {
        $('form input[type="submit"]').bind('click', function (event) {
            if (event) event.preventDefault()
            sendEmail($form)
        })
    }
})

function sendEmail($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        // contentType: "application/json; charset=utf-8",
        error: function (err) { alert('Some error '); },
        success: function (data) {
            if (data.result != "success") {
                // Something went wrong, do something to notify the user. maybe alert(data.msg);
            } else {
                // It worked, carry on...
            }
        }
    });
}

//https://iit.us4.list-manage.com/subscribe/post?u=cf8d0445c1114c326d0c0c908&amp;id=eefc24188b