(function(){dust.register("main",body_0);function body_0(chk,ctx){return chk.block(ctx.getBlock("header"),ctx,{},null).write("<div class=\"main-view\">").block(ctx.getBlock("sidebar"),ctx,{},null).block(ctx.getBlock("main_view"),ctx,{},null).write("</div>").block(ctx.getBlock("banner"),ctx,{},null);}return body_0;})();