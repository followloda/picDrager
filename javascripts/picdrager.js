function allowDrop(e) {
    //检测能否拖放，用于检测文件格式
    console.log("allowDrop");
    e.preventDefault();
}

function dropHandler(e) {
    //拖放完成后执行
    e.preventDefault();
    console.log("drop");
    var files = e.dataTransfer.files;
    var fileinfo = [];
    for (var i = 0, len = files.length; i < len; i++) {
        var f = files[i];
        fileinfo.push(f.name + '(' + (f.type || "n/a") + ')');
    }
    console.log(fileinfo.join(" - "));
}

