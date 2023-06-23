function removeBackground() {
    var input = document.getElementById("imageInput");
    var file = input.files[0];
  
    if (file) {
      var formData = new FormData();
      formData.append("image", file);
  focus.apply("image",file)
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "removeBackground.php", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var imageUrl = xhr.responseText;
          showResult(imageUrl);
        }
      };
      xhr.send(formData);
    }
}

function showResult(imageUrl) {
  var resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = '<img src="' + imageUrl + '" alt="Result Image">';
}