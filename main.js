const filter = document.getElementById("filter");

let keyword;

//文字入力で
function search(){
    $(".photoFrame").each(function(){//photoFrame単位で繰り返す
    keyword = $(this).find(".keyword li").text()//リスト単語を取得
    if (keyword.indexOf(filter.value) === -1){//含まないなら非表示、
        $(this).hide();
    }else{//含むなら表示
        $(this).show();
    }});
}