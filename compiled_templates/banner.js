(function(){dust.register("banner",body_0);function body_0(chk,ctx){return chk.section(ctx.get("banner"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.exists(ctx.get("active"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<div class=\"banner ").reference(ctx.get("type"),ctx,"h").write("\"><span class=\"message-banner\">").exists(ctx.get("url"),ctx,{"else":body_3,"block":body_4},null).write("</span><i class=\"close icon-close-circled\"></i></div>");}function body_3(chk,ctx){return chk.reference(ctx.get("text"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("url"),ctx,"h").write("\">").reference(ctx.get("text"),ctx,"h",["s"]).write("</a>");}return body_0;})();