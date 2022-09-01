
      var a;
      a=document.getElementsByClassName("a2")[0];
      a=a.offsetWidth;
      console.log(a);
      a=a*1.4;
      for(var i=0;i<16;i++){ document.getElementsByClassName('a2')[i].style.height=a+"px";} 