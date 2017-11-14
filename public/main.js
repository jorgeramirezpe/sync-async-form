$(document).ready(function(){
  $('input[type="submit"]').on("click", function(event) {
  event.preventDefault();
  var first_name = $('#first_name').val();
  var full_name = $('#full_name').val();
/*  $.ajax('find.html',{
    method: 'post',
    data: {
      'first_name' : first_name
    }
  });*/
  $.post('find.html',{'first_name': first_name});
  $.post('find.html',{'full_name': full_name});

  var gender = $('input[name="gender"]:checked').val();
  $.post('find.html', {'gender' : gender});

  var interest = $('input[name="interest"]:checked').val();
  $.post('find.html', {'interest' : interest});  


});
});
