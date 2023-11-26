document.getElementById("link").innerHTML = "<a href='#'>AAA</a>";
//導入id
document.addEventListener("DOMContentLoaded", function () {
  //   let genderNav = document.getElementById("genderNav");
  //   let userNav = document.getElementById("userNav");
  //   let sendUsernameBtn = document.getElementById("sendUsername");
  //   let loginBtn = document.getElementById("login");
  //   let userNameInput = document.getElementById("userName");
  let uploadBtn = document.getElementById("upload");
  let textContent = document.getElementById("textContent");
  let doneArea = document.getElementById("doneArea");

  uploadBtn.addEventListener("click", function () {
    let message = document.createElement("div");
    message.classList.add("copyArea");
    message.id = "showMessage";
    
    
    message.innerHTML = `
    <div class="row rounded-5 p-4" id="round">
    <div class="col d-flex bg-secondary  rounded-5" id="round">
    <div class="col-3 text-warning text-truncate" id="getUsername">名字</div>
    <div class="col-1"></div>
    <div class="col-5 text-warning ml-auto" id="getTime">2023/11/11 下午17:26:27</div>
    <button class="btn btn-danger btn-sm d-flex" id="deleteMessage">刪除</button>
    </div>
    <div class="parent-element text-wrap bg-white p-3 rounded-1 text-break">
    <div class="w-auto d-inline-block parent-element" id="copyText"></div>
    </div>
    </div>
    `;
    //   message.querySelector("#getUsergender").textContent = genderNav.textContent;
    //   message.querySelector("#getUsername").textContent = username;
    message.querySelector("#copyText").textContent = textContent.value;
      let placeMessage = document.getElementById("placeMessage");
      placeMessage.appendChild(message);

    message
      .querySelector("#deleteMessage")
      .addEventListener("click", function () {
        message.parentNode.removeChild(message);
      });
  });

});
