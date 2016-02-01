/**
 * @desc 依赖于jQuery和jQuery.xmlns.js;
 * */
define(function() {
    /*
    $.xmlns["dc"] = "http://purl.org/dc/elements/1.1/";
    */
    function Toc( ) {
    };

    /**
     * @desc 获取dublinCore
     * @return {Object}
     * */
    Toc.prototype.getDublinCore = function () {
        var data = {};
        $.each($(".export-div form").serializeArray(),function(i,e) {
            e.value&&(data[ e.name ] = e.value);
        });
        return data;
    };

    /**
     * @desc 设置dublinCore的核心到html中;
     * @param {HTML ELEMENT};
     * return void;
     * */
    Toc.prototype.setDublinCore = function ( xmlElement ) {
        var form = $(".export-div form");
        $(xmlElement).find("metadata").children().each(function(i, e) {
            var name = e.tagName.split(":").pop() || "";
            name&&form.find("[name="+ name+"]").val( e.textContent || e.innerText );
        });
    };

    return Toc;
});