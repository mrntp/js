function loadcontent(C){if(C.feed.entry){for(var l=0;l<C.feed.entry.length;l++){var g=C.feed.entry[l];for(var D=0;D<g.link.length;D++){if("alternate"==g.link[D].rel){var f=g.link[D].href;break}}var j='<div class="post_title"><a href='+f+' title="'+g.title.$t+'" target="_blank">'+g.title.$t+"</a></div>";if(showthumbnail==true){if("media$thumbnail" in g){var c='<div class="post_thumb"><a href='+f+' title="'+g.title.$t+'" target="_blank"><img alt="'+g.title.$t+'" src='+g.media$thumbnail.url.replace("s72-c","s1600")+" /></a></div>"}else{c='<div class="post_thumb"><a href='+f+' title="'+g.title.$t+'" target="_blank"><img alt="'+g.title.$t+'" src='+thumbnail+" /></a></div>"}}else{c=""}if(showmeta==true){if(showauthor==true){for(var y=0;y<g.author.length;y++){if(g.author[y].uri){var h='<span class="post_author"><a href='+g.author[y].uri.$t+' title="'+g.author[y].name.$t+'" target="_blank"><img src='+g.author[y].gd$image.src.replace("s512-c","s40-c")+' alt="'+g.author[y].name.$t+'"/><span>'+g.author[y].name.$t+"</span></a></span>"}else{h='<span class="post_author"><a href="javascript:;" title="'+g.author[y].name.$t+'"><img src='+g.gd$image.src.replace("s512-c","s40-c")+' alt="'+g.author[y].name.$t+'"/><span>'+g.author[y].name.$t+"</span></a></span>"}}}else{h=""}if(showdate==true){var w='<span class="post_date">'+g.published.$t.substring(8,10)+"/"+g.published.$t.substring(5,7)+"/"+g.published.$t.substring(0,4)+"</span>"}else{w=""}if(showlabel==true){if("category" in g){for(var m=0;m<g.category.length;m++){var s='<span class="post_label"><a href="'+homepage+"/search/label/"+g.category[m].term+'" title="'+g.category[m].term+'" target="_blank">'+g.category[m].term+"</a></span>"}}else{s=""}}else{s=""}if(showcomment==true){if("thr$total" in g){var z=C.feed.entry[l].thr$total.$t;if(z>=0){var A='<span class="post_comment"><a href='+f+'#comments title="'+postcommenttext+'" target="_blank">'+z+" "+commenttext+"</a></span>"}else{A='<span class="post_comment"><a href='+f+'#comments title="'+postcommenttext+'" target="_blank">'+postcommenttext+"</a></span>"}}else{A=""}}else{A=""}var k='<div class="post_meta">'+h+w+s+A+"</div>"}else{k=""}if(showsnippet==true){if("summary" in g){var x=g.summary.$t,q="",v=/<\S[^>]*>/g,x=x.replace(v,"");if(x.length<snippet){q=x}else{x=x.substring(0,snippet);var d=x.lastIndexOf(" ");x=x.substring(0,d);q=x}var x='<div class="post_snippet"><p>'+q+"...</p></div>"}else{x=""}}else{x=""}if(showinfo==true){if(showreadmore==true){var p='<a class="parmalink" href='+f+'#more title="'+readmoretext+'" target="_blank">'+readmoretext+"</a>"}else{p=""}if(showshare==true){if("media$thumbnail" in g){var b=('<div class="post_share"><span class="share_button">'+sharetext+'</span><div class="post_share_menu"><span class="facebook social-wrapper" data-href="https://www.facebook.com/sharer/sharer.php?u='+f+'" title="'+facebooktext+'">'+facebooktext+'</span><span class="twitter social-wrapper" data-href="https://twitter.com/intent/tweet?url='+f+"&text="+g.summary.$t.substring(0,snippet)+'" title="'+twittertext+'">'+twittertext+'</span><span class="pinterest social-wrapper" data-href="https://www.pinterest.com/pin/create/button/?url='+f+" &description="+g.title.$t+"&media="+g.media$thumbnail.url.replace("s72-c","s1600")+'" title="'+pinteresttext+'">'+pinteresttext+'</span><span class="google-plus social-wrapper" data-href="https://plus.google.com/share?url='+f+'" title="'+googletext+'">'+googletext+"</span></div></div>")}else{b=('<div class="post_share"><span class="share_button">'+sharetext+'</span><div class="post_share_menu"><span class="facebook social-wrapper" data-href="https://www.facebook.com/sharer/sharer.php?u='+f+'" title="'+facebooktext+'">'+facebooktext+'</span><span class="twitter social-wrapper" data-href="https://twitter.com/intent/tweet?url='+f+"&text="+g.summary.$t.substring(0,snippet)+'" title="'+twittertext+'">'+twittertext+'</span><span class="pinterest social-wrapper" data-href="https://www.pinterest.com/pin/create/button/?url='+f+" &description="+g.title.$t+"&media="+thumbnail+'" title="'+pinteresttext+'">'+pinteresttext+'</span><span class="google-plus social-wrapper" data-href="https://plus.google.com/share?url='+f+'" title="'+googletext+'">'+googletext+"</span></div></div>")}}else{b=""}var o='<div class="post_footer">'+p+b+"</div>"}else{o=""}$(".all_posts .blog-posts").append('<article class="post">'+c+j+k+x+o+"</article>")}$(".post_share").each(function(){var a=$(this);$(".share_button",a).click(function(e){return e.preventDefault(),$div=$(".post_share_menu",a),$div.toggleClass("opened"),$(".post_share_menu").not($div).removeClass("opened"),!1})}),$("html").click(function(){$(".post_share_menu").removeClass("opened")});var B=document.getElementsByClassName("social-wrapper"),u=B.length;for(y=0;y<u;y++){B[y].addEventListener("click",function(E,G,r){E=this.getAttribute("data-href");var t=screen.width/2-200,F=screen.height/2-225;window.open(E,"popUpWindow","height=450,width=400,left="+t+",top="+F+",resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes")})}}}function loadpost(C){if(C.feed.entry){for(var l=0;l<C.feed.entry.length;l++){var g=C.feed.entry[l];for(var D=0;D<g.link.length;D++){if("alternate"==g.link[D].rel){var f=g.link[D].href;break}}var j='<div class="post_title"><a href='+f+' title="'+g.title.$t+'" target="_blank">'+g.title.$t+"</a></div>";if(showthumbnail==true){if("media$thumbnail" in g){var c='<div class="post_thumb"><a href='+f+' title="'+g.title.$t+'" target="_blank"><img alt="'+g.title.$t+'" src='+g.media$thumbnail.url.replace("s72-c","s1600")+" /></a></div>"}else{c='<div class="post_thumb"><a href='+f+' title="'+g.title.$t+'" target="_blank"><img alt="'+g.title.$t+'" src='+thumbnail+" /></a></div>"}}else{c=""}if(showmeta==true){if(showauthor==true){for(var y=0;y<g.author.length;y++){if(g.author[y].uri){var h='<span class="post_author"><a href='+g.author[y].uri.$t+' title="'+g.author[y].name.$t+'" target="_blank"><img src='+g.author[y].gd$image.src.replace("s512-c","s40-c")+' alt="'+g.author[y].name.$t+'"/><span>'+g.author[y].name.$t+"</span></a></span>"}else{h='<span class="post_author"><a href="javascript:;" title="'+g.author[y].name.$t+'"><img src='+g.gd$image.src.replace("s512-c","s40-c")+' alt="'+g.author[y].name.$t+'"/><span>'+g.author[y].name.$t+"</span></a></span>"}}}else{h=""}if(showdate==true){var w='<span class="post_date">'+g.published.$t.substring(8,10)+"/"+g.published.$t.substring(5,7)+"/"+g.published.$t.substring(0,4)+"</span>"}else{w=""}if(showlabel==true){if("category" in g){for(var m=0;m<g.category.length;m++){var s='<span class="post_label"><a href="'+homepage+"/search/label/"+g.category[m].term+'" title="'+g.category[m].term+'" target="_blank">'+g.category[m].term+"</a></span>"}}else{s=""}}else{s=""}if(showcomment==true){if("thr$total" in g){var z=C.feed.entry[l].thr$total.$t;if(z>=0){var A='<span class="post_comment"><a href='+f+'#comments title="'+postcommenttext+'" target="_blank">'+z+" "+commenttext+"</a></span>"}else{A='<span class="post_comment"><a href='+f+'#comments title="'+postcommenttext+'" target="_blank">'+postcommenttext+"</a></span>"}}else{A=""}}else{A=""}var k='<div class="post_meta">'+h+w+s+A+"</div>"}else{k=""}if(showsnippet==true){if("summary" in g){var x=g.summary.$t,q="",v=/<\S[^>]*>/g,x=x.replace(v,"");if(x.length<snippet){q=x}else{x=x.substring(0,snippet);var d=x.lastIndexOf(" ");x=x.substring(0,d);q=x}var x='<div class="post_snippet"><p>'+q+"...</p></div>"}else{x=""}}else{x=""}if(showinfo==true){if(showreadmore==true){var p='<a class="parmalink" href='+f+'#more title="'+readmoretext+'" target="_blank">'+readmoretext+"</a>"}else{p=""}if(showshare==true){if("media$thumbnail" in g){var b=('<div class="post_share"><span class="share_button">'+sharetext+'</span><div class="post_share_menu"><span class="facebook social-wrapper" data-href="https://www.facebook.com/sharer/sharer.php?u='+f+'" title="'+facebooktext+'">'+facebooktext+'</span><span class="twitter social-wrapper" data-href="https://twitter.com/intent/tweet?url='+f+"&text="+g.summary.$t.substring(0,snippet)+'" title="'+twittertext+'">'+twittertext+'</span><span class="pinterest social-wrapper" data-href="https://www.pinterest.com/pin/create/button/?url='+f+" &description="+g.title.$t+"&media="+g.media$thumbnail.url.replace("s72-c","s1600")+'" title="'+pinteresttext+'">'+pinteresttext+'</span><span class="google-plus social-wrapper" data-href="https://plus.google.com/share?url='+f+'" title="'+googletext+'">'+googletext+"</span></div></div>")}else{b=('<div class="post_share"><span class="share_button">'+sharetext+'</span><div class="post_share_menu"><span class="facebook social-wrapper" data-href="https://www.facebook.com/sharer/sharer.php?u='+f+'" title="'+facebooktext+'">'+facebooktext+'</span><span class="twitter social-wrapper" data-href="https://twitter.com/intent/tweet?url='+f+"&text="+g.summary.$t.substring(0,snippet)+'" title="'+twittertext+'">'+twittertext+'</span><span class="pinterest social-wrapper" data-href="https://www.pinterest.com/pin/create/button/?url='+f+" &description="+g.title.$t+"&media="+thumbnail+'" title="'+pinteresttext+'">'+pinteresttext+'</span><span class="google-plus social-wrapper" data-href="https://plus.google.com/share?url='+f+'" title="'+googletext+'">'+googletext+"</span></div></div>")}}else{b=""}var o='<div class="post_footer">'+p+b+"</div>"}else{o=""}$(".label_posts .blog-posts").append('<article class="post">'+c+j+k+x+o+"</article>")}$(".post_share").each(function(){var a=$(this);$(".share_button",a).click(function(e){return e.preventDefault(),$div=$(".post_share_menu",a),$div.toggleClass("opened"),$(".post_share_menu").not($div).removeClass("opened"),!1})}),$("html").click(function(){$(".post_share_menu").removeClass("opened")});var B=document.getElementsByClassName("social-wrapper"),u=B.length;for(y=0;y<u;y++){B[y].addEventListener("click",function(E,G,r){E=this.getAttribute("data-href");var t=screen.width/2-200,F=screen.height/2-225;window.open(E,"popUpWindow","height=450,width=400,left="+t+",top="+F+",resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes")})}}}$.ajax({type:"GET",url:homepage+"/feeds/posts/summary",data:{"max-results":numposts,alt:"json"},dataType:"jsonp",jsonp:"callback",jsonpCallback:"loadcontent",success:function(c){$(".all_posts .blog-posts").removeClass("spinner").removeClass("load");var e=c.feed.openSearch$totalResults.$t;$(".breadcrumb .all_num_posts").append("<span>"+e+" "+messagesposts+"</span>");$(".all_posts #allposts").attr("value",e);for(var d=0;d<c.feed.category.length;d++){var b=c.feed.category[d].term;$(".breadcrumb ul").append("<li>"+b+"</li>")}$(".breadcrumb ul li:first-child").on("click",function(){var a=$(this).text();$(".breadcrumb button").text(a);$(".breadcrumb ul").addClass("hidden");$(".all_posts").removeClass("hidden");$(".label_posts").addClass("hidden");$(".breadcrumb .all_num_posts").show();$(".breadcrumb .num_posts").empty()});$(".breadcrumb ul li:not(:first-child)").each(function(){$(this).on("click",function(f){$(".all_posts").addClass("hidden");$(".label_posts").removeClass("hidden");$(".label_posts .blog-posts").empty();$(".label_posts .blog-posts").addClass("spinner").addClass("load");var a=$(f.target).text();$(".breadcrumb button").text(a);$(".breadcrumb ul").addClass("hidden");$(".label_posts .show-posts").removeClass("hidden");$(".label_posts #numposts").val(0);$(".breadcrumb .num_posts").empty();$(".breadcrumb .all_num_posts").hide();$.ajax({type:"GET",url:homepage+"/feeds/posts/summary/-/"+a,data:{"max-results":numposts,alt:"json"},dataType:"jsonp",jsonp:"callback",jsonpCallback:"loadpost",success:function(h){$(".label_posts .blog-posts").removeClass("spinner").removeClass("load");var g=h.feed.openSearch$totalResults.$t;$(".breadcrumb .num_posts").append("<span>"+g+" "+messagesposts+"</span>");$(".label_posts #allposts").attr("value",g);if(g>numposts){$(".label_posts .load-posts").removeClass("hidden");$(document).off("click",".label_posts .load-posts").on("click",".label_posts .load-posts",function(j){$(".label_posts .loadposts").removeClass("hidden").addClass("spinner").addClass("load");var i=Number($(".label_posts #numposts").val());i=i+numposts;if(i<g){$(j.target).addClass("hidden");$(".label_posts #numposts").val(i);setTimeout(function(){$.ajax({type:"GET",url:homepage+"/feeds/posts/summary/-/"+a,data:{"max-results":numposts,"start-index":i+1,alt:"json"},dataType:"jsonp",jsonp:"callback",jsonpCallback:"loadpost",success:function(){var k=i+numposts;if(k<g){$(j.target).removeClass("hidden");$(".label_posts .loadposts").addClass("hidden").removeClass("spinner").removeClass("load")}else{$(j.target).addClass("hidden");$(".label_posts .loadposts,.label_posts .show-posts").addClass("hidden")}}})},500)}else{$(j.target).addClass("hidden");$(".label_posts .loadposts,.label_posts .show-posts").addClass("hidden")}})}else{$(".label_posts .show-posts").addClass("hidden")}}})})});if(e>numposts){$(".all_posts .load-posts").removeClass("hidden");$(document).off("click",".all_posts .load-posts").on("click",".all_posts .load-posts",function(f){$(".all_posts .loadposts").removeClass("hidden").addClass("spinner").addClass("load");var a=Number($(".all_posts #numposts").val());a=a+numposts;if(a<e){$(f.target).addClass("hidden");$(".all_posts #numposts").val(a);setTimeout(function(){$.ajax({type:"GET",url:homepage+"/feeds/posts/summary",data:{"max-results":numposts,"start-index":a+1,alt:"json"},dataType:"jsonp",jsonp:"callback",jsonpCallback:"loadcontent",success:function(){var g=a+numposts;if(g<e){$(f.target).removeClass("hidden");$(".all_posts .loadposts").addClass("hidden").removeClass("spinner").removeClass("load")}else{$(f.target).addClass("hidden");$(".all_posts .loadposts,.all_posts .show-posts").addClass("hidden")}}})},500)}else{$(f.target).addClass("hidden");$(".all_posts .loadposts,.all_posts .show-posts").addClass("hidden")}})}else{$(".all_posts .show-posts").addClass("hidden")}}});$(".breadcrumb button").click(function(a){a.stopPropagation();$(".breadcrumb ul").toggleClass("hidden")});$(".breadcrumb ul").click(function(a){a.stopPropagation()});$("html").click(function(){$(".breadcrumb ul").addClass("hidden")});$(".scrollTop").click(function(){$("html, body").animate({scrollTop:0},"200")});
