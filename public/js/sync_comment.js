$(function() {

    /*
        Using sharejs (implements op trans and syncing over socket for me) library to auto save comments
     */
    sharejs.open($('#comment_textarea').data('channel_name'), 'text', function(error, doc) {
        if (error) {
            console.log('[sharejs] - ');
            console.log(error);
            return;
        }

        doc.attach_textarea(comment_textarea);
    });
});
