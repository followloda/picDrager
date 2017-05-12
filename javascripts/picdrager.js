<<<<<<< HEAD
function allowDrop(e) {
    //检测能否拖放，用于检测文件格式
    console.log("allowDrop");
    e.preventDefault();
}
// var fileinfo = [];
var files;

function dropHandler(e) {
    //拖放完成后执行
    e.preventDefault();
    console.log("drop");
    // var files = e.dataTransfer.files;
    files = e.dataTransfer.files;
    var fileinfo = [];
    for (var i = 0, len = files.length; i < len; i++) {
        var f = files[i];
        fileinfo.push(f.name + '(' + (f.type || "n/a") + ')');
    }
    console.log(fileinfo.join(" - "));
}
=======
// for debug
>>>>>>> 4513d10d88faf1fda6b79c2537e6cc0ebadce482
var filtered_files = [];
var files_out;

function scandir(files) {
    files_out = files;
<<<<<<< HEAD
    console.log("do scan");
=======

>>>>>>> 4513d10d88faf1fda6b79c2537e6cc0ebadce482
    if (files.length == 0) {
        alert('该目录下没有文件');
        return false;
    } else {
        console.log("get %s files", files.length);
    }

    for (i = 0; i < files.length; i++) {
<<<<<<< HEAD
        if (files[i].type == "image/png") {
            filtered_files.push(files[i]);
        } else {
            console.log(files[i].type);
        }
    }


    // var reader = new FileReader();
    // reader.onload = function (e) {
    //     var data = e.target.result;
    //     //加载图片获取图片真实宽度和高度
    //     var image = new Image();
    //     image.onload = function () {
    //         var width = image.width;
    //         var height = image.height;
    //         alert(width + '======' + height + "=====" + f.size);
    //     };
    //     image.src = data;
    // };
    // reader.readAsDataURL(f);
}
=======
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
>>>>>>> 4513d10d88faf1fda6b79c2537e6cc0ebadce482
