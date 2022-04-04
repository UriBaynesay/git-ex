function openCanvas() {
  renderContactForm();
  document
    .querySelector(".offcanvas-btn")
    .classList.toggle("offcanvas-btn-open");
  document
    .querySelector(".offcanvas-aside")
    .classList.toggle("offcanvas-aside-open");
}

function renderContactForm() {
  var strHtml = `<div class="mb-3">
  <label for="input-email-adress" class="form-label">Email address</label>
  <input type="email" class="form-control" id="input-email-adress" aria-describedby="emailHelp">
  <label for="input-subject" class="form-label">Subject</label>
  <input type="input" class="form-control" id="input-subject">
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2" style="height: 30vh"></textarea>
</div>
<button type="button" class="btn btn-primary" onclick="onSubmitEmail()">Submit</button>`;

  $(".offcanvas-aside").html(strHtml);
}

function onSubmitEmail() {
  var emailAdress = $("#input-email-adress").val();
  var emailSub = $("#input-subject").val();
  var messageContent = $("#floatingTextarea2").val();
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=uri552@gmail.com&su=${emailSub}&body=${messageContent} from :${emailAdress}`
  );
}
