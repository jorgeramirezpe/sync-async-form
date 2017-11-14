$(document).ready(function(){
  $('input[type="submit"]').on("click", function(event) {
    event.preventDefault();

    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var gender = $('input[name="gender"]:checked').val();
    var interest = $('input[name="interest"]:checked');
    var interests = new Array();

    for (var i = 0; i < interest.length; i++) {
      var temp_interest = interest[i];
      interests.push(temp_interest.value);
    }

    var  payload = {
      'first_name': first_name,
      'last_name': last_name,
      'gender' : gender,
      'interests' : interests
    }

    $.post("find.html", payload);
  });
});
