var filtered_files = [];
var files_out;

function scandir(files) {
    files_out = files;
    console.log("do scan");
    if (files.length == 0) {
        alert('该目录下没有文件');
        return false;
    } else {
        console.log("get %s files", files.length);
    }

    for (i = 0; i < files.length; i++) {
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