$(document).ready(function(t){t(".menu a").on("click",function(o){o.preventDefault();var e=t(this).attr("href");t("body > section").each(function(){var o=t(this).attr("id");e==o&&t("html, body").animate({scrollTop:jQuery("#"+o).offset().top},800)})}),t("header .pixie").on("click",function(o){o.preventDefault(),t("html, body").animate({scrollTop:0},800)}),t(".arrow").on("click",function(){var o=t(this).parent().next();t("html, body").animate({scrollTop:o.offset().top},800)})});