$(document).ready(function(){function a(a,d){$.getJSON("../trips.json",function(e){var f=e.trips[a][d];f.length>1?b(f,a,d):c(f,a,d)}).done(function(){console.log("Loaded!")}).fail(function(){console.log("Error: Failed to get JSON Data")})}function b(a,b,d){for(i=0;i<a.length;i++)c(a[i],b,d)}function c(a,b,c){var d=a.place+", "+a.country,e=b+" "+c+", "+a.year;$(".modal-header").append('<h4 class="modal-title">'+d+'</h4><p class="modal-title">'+e+"</h4><hr>")}function d(){$(".modal-title").remove(),$(".modal-header hr").remove()}function e(a){var b=".year_"+a,c=document.querySelectorAll(b);f(c,a)}function f(a,b){for(var c=0;c<a.length;c++){var d=a[c].parentElement.previousElementSibling.textContent,e=j[b],f=h[d]+e;a[c].classList.add(f)}}function g(){for(var a=document.querySelectorAll(".event"),b=0;b<a.length;b++)if(4===a[b].classList.length){var c=a[b].classList[3];a[b].classList.remove(c),a[b].removeAttribute("data-toggle","modal"),a[b].removeAttribute("data-target","#modal_details")}}$.material.init();var h={January:"btn-material-red",February:"btn-material-deep-orange",March:"btn-material-amber",April:"btn-material-yellow",May:"btn-material-lime",June:"btn-material-green",July:"btn-material-teal",August:"btn-material-blue",September:"btn-material-indigo",October:"btn-material-deep-purple",November:"btn-material-purple",December:"btn-material-pink"},j={2008:"-800",2009:"-700",2010:"-600",2011:"-500",2012:"-400",2013:"-300",2014:"-200",2015:"-100"};$("#show_all").click(function(){g();for(var a=2008;2015>=a;a++)e(a)}),$(".year_button").click(function(){g();var a=event.target.textContent;e(a)}),$(".event").click(function(){event.target.setAttribute("data-toggle","modal"),event.target.setAttribute("data-target","#modal_details"),d();var b=event.target.parentElement.previousElementSibling.textContent,c=event.target.textContent;a(b,c)})});
