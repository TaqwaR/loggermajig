
$(function() {

  $(".change-read-status").on("click", function(event) {
    let id = $(this).data("id");
    let newStatus = $(this).data("read-status");

    console.log(id);
    console.log(newStatus);

    let newReadStatus = {
      read_status: newStatus
    };

    $.ajax("/api/books/" + id, {
      type: "PUT",
      data: newReadStatus
    }).then(
        function() {
          console.log("Changed read status to ", newReadStatus);
          location.reload();
        }
    );
  });
});
