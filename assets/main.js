

function init(){

    // logic for "more info" buttons

    var moreWrappers = document.getElementsByClassName("more-text-wrapper");
    console.log(moreWrappers);
    for(var i = 0; i < moreWrappers.length; i++){
        var button = moreWrappers[i].getElementsByClassName("more-button")[0];
        var toHide = moreWrappers[i].getElementsByClassName("more-text")[0];
        toHide.style.display = 'none';
        button.addEventListener("click", function(){
            if(toHide.style.display == "none"){
                toHide.style.display = 'block';
                button.innerHTML = "less info";
            }else{
                toHide.style.display = 'none';
                button.innerHTML = "more info";
            }
            return false;
        });

    }





}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

window.addEventListener("load", init);