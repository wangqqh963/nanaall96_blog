let flag=0;

function opennav() {
    if(flag==0){
        flag=1; 
        document.getElementById("leftnav").style.width="166px";
        document.getElementById("leftnav").style.height="100%";
        document.getElementById("nana_main").style.marginLeft = "166px";
        document.getElementById("topnav").style.marginLeft = "166px";
    }
    else if (flag==1){
        flag=0;
        document.getElementById("leftnav").style.width="0";
        document.getElementById("leftnav").style.height="100%";
        document.getElementById("nana_main").style.marginLeft = "0px";
        document.getElementById("topnav").style.marginLeft = "0px";
    }
    
  }
  