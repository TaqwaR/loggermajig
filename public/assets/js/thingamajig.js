
$(function() {

  $(".change-read-status").on("click", function(event) {
    let id = $(this).data("id");
    let newStatus = 1;

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

  const submitBtn = $(".submit-btn");

  submitBtn.on("click", function(event) {
    event.preventDefault();

    let newBookName = $(".new-book-name").val();
    let newAuthorName = $(".new-author-name").val();
    let newReadStatus = $("form input[type='radio']:checked").val();

    console.log(newBookName);
    console.log(newAuthorName);
    console.log(newReadStatus);
  });

});

//not read = 0
//read = 1
