"use strict";!function(t){function e(){var t=this;return t.screen={w:0,h:0,type:"xs",orientation:"portrait"},t.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},t.isXS=function(){return t.screen.w<768},t.isSM=function(){return t.screen.w<992&&t.screen.w>767},t.isMD=function(){return t.screen.w<1200&&t.screen.w>991},t.isLG=function(){return t.screen.w>1199},t.isMax=function(e){return!(t.screen.w>e)},t.isMin=function(e){return!(t.screen.w<e)},t.screenIs=function(){var e="noname";return t.isXS()?e="xs":t.isSM()?e="sm":t.isMD()?e="md":t.isLG()&&(e="lg"),e},t.isPortrait=function(){return t.screen.h>t.screen.w},t.isLandscape=function(){return t.screen.w>t.screen.h},t.orientationIs=function(){var e="noname";return t.isPortrait()?e="portrait":t.isLandscape()&&(e="landscape"),e},t.is=function(e){return e==t.screenIs()||e==t.orientationIs()},t.onResize=function(e,n){if(e.type){var o=t.__resizefunctions[e.type];e.orientation?o[e.orientation].push(n):o.default.push(n)}},t.resizeCall=function(e){if(e.type){if(t.__resizefunctions[e.type].default)for(var n=0;n<t.__resizefunctions[e.type].default.length;n++){var o=t.__resizefunctions[e.type].default[n];o(e)}if(t.__resizefunctions[e.type][e.orientation])for(var n=0;n<t.__resizefunctions[e.type][e.orientation].length;n++){var o=t.__resizefunctions[e.type][e.orientation][n];o(e)}}},t.setScreen=function(){var e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],i=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return t.screen.w=i,t.screen.h=a,t.screen.type=t.screenIs(),t.screen.orientation=t.orientationIs(),t.resizeCall(t.screen),console.log(t.screen),t.screen},t}t.noConflict(),window.onerror=function(t,e,n,o,r){console.log("Error FECSS: "+e+":"+n+":"+o+": "+JSON.stringify(t)+"\n"+JSON.stringify(r))};var n=new e;n.setScreen(),t(window).on("resize",function(){n.setScreen()}),t(function(){if(t(document.body).on("azbn7.init",null,{},function(e){t(document.body).attr("data-created_at",(new Date).getTime())}),t(document.body).on("azbn.ajax.get",null,{},function(e,n){e.preventDefault(),t.get(n,{},function(e){var o="#project-viewer.content-modal .modal-content";t(o).empty();var r=t("<div/>",{html:e}),i=r.find(o).html();r.empty().remove(),t(o).html(i),window.history.pushState(null,null,n),t(document.body).trigger("azbn.content-modal.open",["#project-viewer"])})}),window.addEventListener("popstate",function(e){t(document.body).trigger("azbn.ajax.get",[window.location.pathname])},!1),t(document.body).on("changeClass",null,{},function(t,e){}),!function(){var e="noname-browser",n=navigator.userAgent.toLowerCase();n.indexOf("msie")!=-1&&(e="msie"),n.indexOf("trident")!=-1&&(e="msie"),n.indexOf("konqueror")!=-1&&(e="konqueror"),n.indexOf("firefox")!=-1&&(e="firefox"),n.indexOf("safari")!=-1&&(e="safari"),n.indexOf("chrome")!=-1&&(e="chrome"),n.indexOf("chromium")!=-1&&(e="chromium"),n.indexOf("opera")!=-1&&(e="opera"),n.indexOf("yabrowser")!=-1&&(e="yabrowser"),t("html").eq(0).addClass(e)}(),t(document.body).on("submit.azbn","#project-append form",{},function(e){e.preventDefault();var n=t(this),o=t(document.body).attr("data-uniq")||"",r=(t("<input/>",{name:"uniq",value:o,type:"hidden"}),n.serialize()),i=n.attr("data-target")||"/";t.post(i,r,function(e){n.find('input[name="uniq"]').empty().remove(),n.trigger("reset"),n.closest(".content-modal").find(".close-btn").trigger("click"),setTimeout(function(){t(document.body).trigger("azbn.content-modal.open",["#project-appended"])},333)})}),t(document.body).on("click.azbn",".content-modal",{},function(e){var n=t(e.target);(n.hasClass("close-btn")||n.hasClass("content-modal"))&&(e.preventDefault(),t(document.body).removeClass("modalled"),t(".content-modal").removeClass("active"),"project-viewer"!=n.attr("id")&&"project-viewer"!=n.closest(".content-modal").attr("id")||window.history.pushState(null,null,"/"),t(window).trigger("resize"))}),t(document.body).on("azbn.content-modal.open",null,{},function(e,n){e.preventDefault(),t(n+".content-modal").addClass("active"),t(document.body).addClass("modalled"),t(window).trigger("resize")}),t(document.body).on("click.azbn",".modal-link",{},function(e){e.preventDefault();var n=t(this),o=n.attr("href")||"#";t(document.body).trigger("azbn.content-modal.open",[o])}),t(document.body).on("azbn.render.logo-carousel",".b-partners .logo-carousel",{},function(t){t.preventDefault()}),t(".owl-carousel").length){var e=t(".owl-carousel");e.owlCarousel({items:6,loop:!0,nav:!1,responsiveClass:!0,margin:0,responsive:{0:{items:2},768:{items:3},992:{items:4},1025:{items:6}}}),e.on("next.owl.carousel prev.owl.carousel resized.owl.carousel refreshed.owl.carousel initialized.owl.carousel changed.owl.carousel translated.owl.carousel azbn.owl.init",function(t){e.find(".owl-item.__no-border").removeClass("__no-border"),e.find(".owl-item.active").eq(-1).addClass("__no-border")}),t(document.body).on("click.azbn",".b-partners .logo-carousel .control a",{},function(n){n.preventDefault();var o=t(this),r=o.parent();r.hasClass("left")?e.trigger("prev.owl.carousel"):r.hasClass("right")&&e.trigger("next.owl.carousel")}),e.trigger("azbn.owl.init")}t(document.body).on("azbn.render.b-projects",".b-projects",{},function(e){e.preventDefault();var o=t(this);if(n.isMax(1199))o.find(".in-focus-project").css({width:"100%"}),o.find(".project-list").css({width:"100%"});else{var r=t(document.body).find("header .header__container .item:last-child"),i=r.position().left;o.find(".in-focus-project").css({width:i+"px"}),o.find(".project-list").css({width:o.outerWidth(!0)-i+"px"}),o.find(".in-focus-project").trigger("azbn.render.in-focus-project"),o.find(".project-list").trigger("azbn.render.project-list",[4])}}),t(document.body).on("submit.site","form",{},function(e){var n=t(this),o=n.attr("data-input-status")||"";"ok"==o||"1"==o||e.preventDefault()}),t(document.body).on("site.form.required.check","form",{},function(e){e.preventDefault();var n=t(this),o=0;n.find(".input-block[data-required]").each(function(e){var n=t(this),r=n.attr("data-input-status")||"";"ok"!=r&&"1"!=r||(o+=1)}),o==n.find(".input-block[data-required]").length?(n.find(".submit-block").attr("data-input-status","ok"),n.attr("data-input-status","ok")):(n.find(".submit-block").attr("data-input-status",""),n.attr("data-input-status",""))}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea, .input-block[data-required="password"] input',{},function(e){e.preventDefault();var n=t(this),o=t(this).val(),r=n.closest(".input-block").attr("data-required")||"";""==o||"text"!=r&&"password"!=r?n.closest(".input-block").attr("data-input-status",""):n.closest(".input-block").attr("data-input-status","ok"),n.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="email"] input',{},function(e){e.preventDefault();var n=t(this),o=t(this).val(),r=n.closest(".input-block").attr("data-required")||"",i=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;""!=o&&"email"==r&&i.test(o)?n.closest(".input-block").attr("data-input-status","ok"):n.closest(".input-block").attr("data-input-status",""),n.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="check-pass"] input',{},function(e){e.preventDefault();var n=t(this),o=t(this).val(),r=t('.input-block input[name="pass"]').val();""!=o&&""!=r&&"check-pass"==n.closest(".input-block").attr("data-required")&&r==o?n.closest(".input-block").attr("data-input-status","ok"):n.closest(".input-block").attr("data-input-status",""),n.closest("form").trigger("site.form.required.check")}),t(document.body).on("keyup.site blur.site focus.site",'.input-block input[type="search"]',{},function(e){e.preventDefault();var n=t(this),o=t(this).val();o.length>2&&"search"==n.closest(".input-block").attr("data-required")?(n.closest(".input-block").attr("data-input-status","ok"),n.closest(".input-block").next(".submit-block").attr("data-input-status","ok")):(n.closest(".input-block").attr("data-input-status",""),n.closest(".input-block").next(".submit-block").attr("data-input-status","")),n.closest("form").trigger("site.form.required.check")}),t(document.body).on("change.site blur.site",".input-block select",{},function(e){e.preventDefault();var n=t(this),o=t(this).find("option:selected").eq(0).attr("value")||"";""!=o&&"select"==n.closest(".input-block").attr("data-required")?n.closest(".input-block").attr("data-input-status","ok"):n.closest(".input-block").attr("data-input-status",""),n.closest("form").trigger("site.form.required.check")}),t(function(){t("form").trigger("site.form.required.check"),t(".input-block input, .input-block textarea, .input-block select").trigger("blur.site")}),t(document.body).on("click.azbn",".project-link",{},function(e){e.preventDefault();var n=t(this),o=n.attr("href")||"/";t(document.body).trigger("azbn.ajax.get",[o])}),t(document.body).on("azbn.render.in-focus-project",".b-projects .in-focus-project",{},function(e,o){if(e.preventDefault(),n.isMin(768)){var r=t(document.body).find(".b-projects"),i=r.find(".in-focus-project"),a=(i.find(".logo"),t(document.body).find("header .header__container .site-logo")),s=(a.closest("header"),a.offset().left);if(o){var c=SiteData.projects[o];""!=c.flag?(i.find(".country-flag img").attr("src",c.flag),i.find(".country-flag").removeClass("empty-field")):(i.find(".country-flag img").attr("src",c.flag),i.find(".country-flag").addClass("empty-field")),""!=c.logo?(i.find(".logo img").attr("src",c.logo),i.find(".logo").removeClass("empty-field")):(i.find(".logo img").attr("src","/wp-content/uploads/2017/04/logo_freitag_invest_erb.png"),i.find(".logo").addClass("empty-field")),i.find(".type").html(c.type),i.find(".title").html(c.title),i.find(".desc").html(c.desc),i.find(".more a").attr("href",c.link),i.css({"background-image":"url("+c.image.full+")"})}i.css({"padding-left":s+"px","padding-right":s+"px"}).find(".country-flag").css({right:s+"px"})}}),t(document.body).on("click.azbn",".b-projects .in-focus-project .next-project a",{},function(e){e.preventDefault();var n=(t(this),t(".b-projects .project-list")),o=n.find(".item"),r=o.filter(".active"),i=r.next();i.length?i.trigger("click"):o.eq(0).trigger("click")}),t(document.body).on("azbn.render.project-list",".b-projects .project-list",{},function(e,o){e.preventDefault();var r=t(this);if(n.isMin(768)){var i=r.find(".items .item");o=o||4;var a=i.eq(0).outerHeight(!0);r.attr("data-item-amount",o).attr("data-item-height",a).css({height:a*o+"px","max-height":a*o+"px"})}}),t(document.body).on("click.azbn",".b-projects .project-list .items .item",{},function(e){e.preventDefault();var o=t(this),r=parseInt(o.attr("data-project-id"))||0,i=o.closest(".items"),a=i.closest(".project-list");if(n.isMax(767))o.attr("href"),t(".b-projects .in-focus-project").trigger("azbn.render.in-focus-project",[r]),t(".b-projects .in-focus-project .more a").trigger("click");else if(n.isMax(1199)&&n.isMin(768))o.attr("href"),t(".b-projects .in-focus-project").trigger("azbn.render.in-focus-project",[r]),o.closest(".project-list").find(".item.active").removeClass("active"),o.addClass("active"),t("html, body").animate({scrollTop:t(".b-projects .in-focus-project").offset().top+0},400);else{var s=i.find(".item"),c=s.length,l=s.index(o),u=parseInt(a.attr("data-item-amount")||4),d=parseFloat(a.attr("data-item-height")||0);0==l||1==l?i.css({transform:"translateY(-0px)"}):l==c-1||l==c-2||l==c-3?i.css({transform:"translateY(-"+(i.outerHeight(!0)-u*d)+"px)"}):i.css({transform:"translateY(-"+(l-1)*d+"px)"}),t(".b-projects .in-focus-project").trigger("azbn.render.in-focus-project",[r]),o.closest(".project-list").find(".item.active").removeClass("active"),o.addClass("active")}}),function(){var e=parseInt(t(".b-projects").attr("data-project-id"))||0;e>0?t('.b-projects .project-list .items .item[data-project-id="'+e+'"]').eq(0).trigger("click"):n.isMax(1199)?n.isMax(767)||t(".b-projects .project-list .items .item").eq(0).trigger("click"):t(".b-projects .project-list .items .item").eq(1).trigger("click")}(),t(window).on("resize",function(e){t(".b-projects").trigger("azbn.render.b-projects"),!function(){if(t(".mcs-content").length){var e=t(".mcs-content");e.mCustomScrollbar("destroy"),e.each(function(e){var n=t(this);t(".mcs-content").mCustomScrollbar({axis:"y",setHeight:n.closest(".modal-content").outerHeight(!0)-90+"px",alwaysShowScrollbar:2,live:!0})})}}()}).trigger("resize"),t(window).on("scroll",function(t){}).trigger("scroll"),window.onbeforeunload=function(e){t("body").trigger("azbn7.window.unload",[e])},t(document.body).trigger("azbn7.init")})}(jQuery);