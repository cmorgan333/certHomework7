var MODEL = (function(){

    var _updateView = function(pageName){

        if(pageName != "") {
            $.get(`pages/${pageName}/${pageName}.html`, function(data){
                $("#app").html(data);
            });
        }else {
            $.get(`pages/home/home.html`, function(data){
                $("#app").html(data);
            });
        }
        };

        return {
            updateView: _updateView,
        };
}) ();