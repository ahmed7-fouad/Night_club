window.onload=function(){
let nav_bar=document.querySelector("#navigation_bar");
let nav_links=document.querySelector("#nav_links_list");
let selection_icon=document.querySelector(".links_button_action");
let burger_icon=document.querySelector(".selection_bars");
let exit_icon=document.querySelector(".exit_bar");
let google_btn=document.querySelector("#google_maps");
let contact_btn=document.querySelector("#contact_btn")
let inp_form=document.querySelector(".inp_data");
let map=document.querySelector(".location");


document.onscroll=function(){
   
    if(window.scrollY > 0 && window.scrollY < 620){

        nav_bar.style.cssText="position:sticky;background-color:black";

    }
    else if(window.scrollY>=620){
            nav_bar.style.cssText="position:fixed;background-color:black";    
    }
    else{
        nav_bar.style.cssText="background-color:transparent";
    }
};

let counter=0;

selection_icon.onclick=function(){

    if(counter===0){
burger_icon.children[1].style.cssText="margin-top:-4px;margin-bottom:-4px";
burger_icon.style.cssText="visibility:hidden";
exit_icon.style.cssText="visibility:visible";
exit_icon.children[0].style.cssText="transform:translate(-50% , -50%) rotate(45deg)";
exit_icon.children[1].style.cssText="transform:translate(-50% , -50%) rotate(-45deg)";
nav_links.style.cssText="height:300px";
counter=1;
    }
    else{
exit_icon.children[0].style.cssText="transition-delay:0.2s;transform: translate(-50% , -50%); rotate(0deg)";
exit_icon.children[1].style.cssText="transition-delay:0.2s;transform: translate(-50% , -50%); rotate(0deg)";
exit_icon.style.cssText="visibility:hidden";
nav_links.style.cssText="height:0px";
burger_icon.style.cssText="transition-delay:0.2s;visibility:visible";
burger_icon.children[1].style.cssText="transition-delay:0.6s;margin-top:6px;margin-bottom:6px";
nav_links.style.cssText="height:0px";
counter=0;
    }
}
contact_btn.style.cssText="color:var(--second_color) ;background-color:white;box-shadow:0 1rem 3rem rgb(0 0 0 / 18%)";

contact_btn.onclick=function(){
contact_btn.style.cssText="color:var(--second_color) ;background-color:white;box-shadow:0 1rem 3rem rgb(0 0 0 / 18%)";
google_btn.style.cssText="color:black ;background-color:transparent;box-shadow:none";
inp_form.style.cssText="display:block !important";
map.style.cssText="display:none !important";
}

google_btn.onclick=function(){
google_btn.style.cssText="color:var(--second_color) ;background-color:white;box-shadow:0 1rem 3rem rgb(0 0 0 / 18%)";
contact_btn.style.cssText="color:black ;background-color:transparent;box-shadow:none";
inp_form.style.cssText="display:none !important";
map.style.cssText="display:block !important";
}
}