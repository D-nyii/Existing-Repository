/* put your animation code here */


$(function() {
    $("figure img").on("mouseover", function(e) {
        var alt = $(this).attr("alt");
        var src = $(this).attr("src");
        var newsrc = src.replace("small", "medium");

        var preview = $('<div id="preview"></div>');
        var image = $('<img>').attr("src", newsrc);
        var caption = $('<p></p>').text(alt);

        preview.append(image);
        preview.append(caption);

        $("body").append(preview);

        $(this).addClass("gray");

        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px")
            .fadeIn(1000);
    });

    function removePreview() {
        $(this).removeClass("gray");
        $("#preview").remove();
    }

    function movePreview(e) {
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }

    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});
