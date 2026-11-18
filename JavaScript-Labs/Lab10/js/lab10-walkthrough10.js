
$(function() {
    $(".animLoading").hide();

    $("#consume").click(function() {
        $(".animLoading").show();
        $("#results ul").empty();

        var url = "data/cities.json";

        $.get(url)
            .done(function(data) {
                $.each(data, function(index, value) {
                    var li = $("<li/>").text(value.name);
                    li.appendTo("div#results ul");
                });
            })
            .fail(function(xhr, status, error) {
                alert("failed loading data - status=" + status +
                      " error=" + error);
            })
            .always(function() {
                $(".animLoading").fadeOut("slow");
            });
    });
});
