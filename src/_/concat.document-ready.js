!function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}();

$(document.body).on("azbn.render.b-projects",".b-projects",{},function(e){e.preventDefault();var t=$(this),r=$(document.body).find("header .header__container .item:last-child"),i=r.position().left;t.find(".in-focus-project").css({width:i+"px"}),t.find(".project-list").css({width:t.outerWidth(!0)-i+"px"}),t.find(".in-focus-project").trigger("azbn.render.in-focus-project"),t.find(".project-list").trigger("azbn.render.project-list",[4])});
$(document.body).on("submit.site","form",{},function(t){var e=$(this),a=e.attr("data-input-status")||"";"ok"==a||"1"==a||t.preventDefault()}),$(document.body).on("site.form.required.check","form",{},function(t){t.preventDefault();var e=$(this),a=0;e.find(".input-block[data-required]").each(function(t){var e=$(this),s=e.attr("data-input-status")||"";"ok"!=s&&"1"!=s||(a+=1)}),a==e.find(".input-block[data-required]").length?(e.find(".submit-block").attr("data-input-status","ok"),e.attr("data-input-status","ok")):(e.find(".submit-block").attr("data-input-status",""),e.attr("data-input-status",""))}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="text"] input:not([type="search"]), .input-block[data-required="text"] textarea, .input-block[data-required="password"] input',{},function(t){t.preventDefault();var e=$(this),a=$(this).val(),s=e.closest(".input-block").attr("data-required")||"";""==a||"text"!=s&&"password"!=s?e.closest(".input-block").attr("data-input-status",""):e.closest(".input-block").attr("data-input-status","ok"),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="email"] input',{},function(t){t.preventDefault();var e=$(this),a=$(this).val(),s=e.closest(".input-block").attr("data-required")||"",i=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;""!=a&&"email"==s&&i.test(a)?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block[data-required="check-pass"] input',{},function(t){t.preventDefault();var e=$(this),a=$(this).val(),s=$('.input-block input[name="pass"]').val();""!=a&&""!=s&&"check-pass"==e.closest(".input-block").attr("data-required")&&s==a?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("keyup.site blur.site focus.site",'.input-block input[type="search"]',{},function(t){t.preventDefault();var e=$(this),a=$(this).val();a.length>2&&"search"==e.closest(".input-block").attr("data-required")?(e.closest(".input-block").attr("data-input-status","ok"),e.closest(".input-block").next(".submit-block").attr("data-input-status","ok")):(e.closest(".input-block").attr("data-input-status",""),e.closest(".input-block").next(".submit-block").attr("data-input-status","")),e.closest("form").trigger("site.form.required.check")}),$(document.body).on("change.site blur.site",".input-block select",{},function(t){t.preventDefault();var e=$(this),a=$(this).find("option:selected").eq(0).attr("value")||"";""!=a&&"select"==e.closest(".input-block").attr("data-required")?e.closest(".input-block").attr("data-input-status","ok"):e.closest(".input-block").attr("data-input-status",""),e.closest("form").trigger("site.form.required.check")}),$(function(){$("form").trigger("site.form.required.check"),$(".input-block input, .input-block textarea, .input-block select").trigger("blur.site")});
$(document.body).on("azbn.render.in-focus-project",".b-projects .in-focus-project",{},function(e,t){e.preventDefault();var o=$(document.body).find(".b-projects"),c=o.find(".in-focus-project"),n=(c.find(".logo"),$(document.body).find("header .header__container .site-logo")),r=(n.closest("header"),n.offset().left);c.css({"padding-left":r+"px"}).find(".country-flag").css({right:r+"px"})}),$(document.body).on("click.azbn",".b-projects .in-focus-project .next-project a",{},function(e){e.preventDefault();var t=($(this),$(".b-projects .project-list")),o=t.find(".item"),c=o.filter(".active"),n=c.next();n.length?n.trigger("click"):o.eq(0).trigger("click")});
$(document.body).on("azbn.render.project-list",".b-projects .project-list",{},function(t,e){t.preventDefault();var a=$(this),s=a.find(".items .item");e=e||4;var i=s.eq(0).outerHeight(!0);a.attr("data-item-amount",e).attr("data-item-height",i).css({height:i*e+"px"})}),$(document.body).on("click.azbn",".b-projects .project-list .item",{},function(t){t.preventDefault();var e=$(this),a=e.closest(".items"),s=a.closest(".project-list"),i=a.find(".item"),r=i.length,n=i.index(e),o=parseInt(s.attr("data-item-amount")||4),c=parseFloat(s.attr("data-item-height")||0);0==n||1==n?a.css({transform:"translateY(-0px)"}):n==r-1||n==r-2||n==r-3?a.css({transform:"translateY(-"+(a.outerHeight(!0)-o*c)+"px)"}):a.css({transform:"translateY(-"+(n-1)*c+"px)"}),e.closest(".project-list").find(".item.active").removeClass("active"),e.addClass("active")});