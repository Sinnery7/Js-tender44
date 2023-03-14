const banTextareaSize = () => {
    $('textarea').each(function(){
        autosize(this);
    }).on('autosize:resized', function(){
        console.log('textarea height updated');
    });
}

export default banTextareaSize;