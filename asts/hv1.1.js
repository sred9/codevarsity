function scrollNav(){$(".nav a").click(function(){$(".active").removeClass("active"),$(this).closest("li").addClass("active");var t=$(this).attr("class");return $("."+t).parent("li").addClass("active"),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top-160},400),!1}),$(".scrollTop a").scrollTop()}scrollNav(),function(d){d.fn.countTo=function(c){return c=c||{},d(this).each(function(){var o=d.extend({},d.fn.countTo.defaults,{from:d(this).data("from"),to:d(this).data("to"),speed:d(this).data("speed"),refreshInterval:d(this).data("refresh-interval"),decimals:d(this).data("decimals")},c),t=Math.ceil(o.speed/o.refreshInterval),e=(o.to-o.from)/t,n=this,i=d(this),a=0,s=o.from,r=i.data("countTo")||{};function l(t){var e=o.formatter.call(n,t,o);i.html(e)}i.data("countTo",r),r.interval&&clearInterval(r.interval),r.interval=setInterval(function(){a++,l(s+=e),"function"==typeof o.onUpdate&&o.onUpdate.call(n,s);t<=a&&(i.removeData("countTo"),clearInterval(r.interval),s=o.to,"function"==typeof o.onComplete&&o.onComplete.call(n,s))},o.refreshInterval),l(s)})},d.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null}}(jQuery),jQuery(function(o){o(".count-number").data("countToOptions",{formatter:function(t,e){return t.toFixed(e.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),o(".timer").each(function(t){var e=o(this);t=o.extend({},t||{},e.data("countToOptions")||{}),e.countTo(t)})});var TxtRotate=function(t,e,o){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(o,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};function scrollFunction(){20<document.body.scrollTop||20<document.documentElement.scrollTop?document.getElementById("navbar").style.top="0":document.getElementById("navbar").style.top="-50px"}TxtRotate.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var o=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){o.tick()},n)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var o=t[e].getAttribute("data-rotate"),n=t[e].getAttribute("data-period");o&&new TxtRotate(t[e],JSON.parse(o),n)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(i)},window.onscroll=function(){scrollFunction()};
