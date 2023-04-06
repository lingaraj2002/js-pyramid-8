let a =prompt("enter the number");
    for(i=a;i>=0;i--){
        for(j=0;j<a-i;j++){
            document.write("&nbsp &nbsp");
        }
        for(k=0;k<2*i-1;k++){
            document.write("*&nbsp");
        }
        document.write("<br>");
    }