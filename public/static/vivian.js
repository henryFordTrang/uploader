(function(){
    var Vivian = function(options){
      var ccc=document.getElementById(options);

      var posOrg;
      var posChange;
      var posFinal;
      

      ccc.addEventListener('touchstart',function(e){
        ccc.style.backgroundColor='yellow'
        posOrg=e.touches[0].clientY;
      })

      ccc.addEventListener('touchmove',function(e){
        ccc.style.backgroundColor='red'
        posChange=e.touches[0].clientY-posOrg;
        ccc.style.lineHeight=e.touches[0].clientY;
      })

      ccc.addEventListener('touchend',function(e){
        ccc.style.backgroundColor='orange'
        posFinal=e.touches[0].clientY-posOrg;
        ccc.style.lineHeight=0;
      })

      Vivian.prototype.act1=function(){
        ccc.style.backgroundColor='orange';
        
        
      }

      Vivian.prototype.act2=function(){
        
      }

    }
    window.Vivian = Vivian;
  }())