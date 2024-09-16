document.addEventListener("DOMContentLoaded", function () {
  var collapseContent = document.getElementById("collapseContent");
  var menusDiv = document.getElementById("menus");
  var conteudoDiv = document.getElementById("conteudo");
  var sideBarButton = document.getElementById("sideBarButton");

  // When the collapse is hidden
  collapseContent.addEventListener("hidden.bs.collapse", function () {
    menusDiv.classList.remove("col-2");
    menusDiv.classList.add("col-1");
    conteudoDiv.classList.remove("col-10");
    conteudoDiv.classList.add("col-11");
    sideBarButton.classList.remove("align-items-end");
    sideBarButton.classList.add("align-items-start");
  });

  // When the collapse is shown
  collapseContent.addEventListener("shown.bs.collapse", function () {
    menusDiv.classList.remove("col-1");
    menusDiv.classList.add("col-2");
    conteudoDiv.classList.remove("col-11");
    conteudoDiv.classList.add("col-10");
    sideBarButton.classList.add("align-items-end");
    sideBarButton.classList.remove("align-items-start");
  });
});
