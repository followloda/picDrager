// for debug
var filtered_files = [];
var files_out;

function scandir(files) {
    files_out = files;

    if (files.length == 0) {
        alert('该目录下没有文件');
        return false;
    } else {
        console.log("get %s files", files.length);
    }

    for (i = 0; i < files.length; i++) {
        if (files[i].type == "image/png" || files[i].type == "image/jpeg") {
            filtered_files.push(files[i]);
            addGridlyPic(files[i]);
        } else {
            console.log(files[i].name, " is invalid!");
        }
    }
    rearrange();
}

function onloadCb(img) {
    return function (evt) {
        img.attr('src', evt.target.result);
    }
}

function addGridlyPic(pic) {
    //创建包含pic的brick div

    //创建brick
    $('<div />', {
            class: 'brick small'
        })
        .appendTo($('.gridly'));

    //创建img
    var img = $('<img />', {
        src: '',
        width: '251px',
        height: '334px'
    });

    //获取img的src
    var reader = new FileReader();
    reader.onload = onloadCb(img);
    reader.readAsDataURL(pic);

    img.appendTo($('.brick:last'));
}

function rearrange() {
    $('.gridly').gridly({
        // base: 6, // px
        // gutter: 1, // px
        columns: 16
    });
}
