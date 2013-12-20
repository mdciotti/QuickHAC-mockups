(function(){dust.register("banner",body_0);function body_0(chk,ctx){return chk.section(ctx.get("banner"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.exists(ctx.get("active"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<div class=\"banner ").reference(ctx.get("type"),ctx,"h").write("\"><span class=\"message-banner\">").exists(ctx.get("url"),ctx,{"block":body_3},null).reference(ctx.get("text"),ctx,"h",["s"]).exists(ctx.get("url"),ctx,{"block":body_4},null).write("</span><i class=\"close icon-close-circled\"></i></div>");}function body_3(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("url"),ctx,"h").write("\">");}function body_4(chk,ctx){return chk.write("</a>");}return body_0;})();(function(){dust.register("dashboard",body_0);var blocks={'header':body_1,'main_view':body_2,'banner':body_3};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("header",ctx,null);}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"dashboard\"><div class=\"card\"><h2>Trends</h2><div id=\"plot-trend\"></div></div><div class=\"split\"><div class=\"card\"><h2>Recent Grades</h2></div><div class=\"card\"><h2>GPA</h2></div></div></div>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("banner",ctx,null);}return body_0;})();(function(){dust.register("details",body_0);var blocks={'header':body_1,'sidebar':body_2,'main_view':body_6,'banner':body_13};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("header",ctx,null);}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"sidebar sidebar-courses\"><ul class=\"views\">").section(ctx.get("pages"),ctx,{"block":body_3},null).write("</ul><!--<div class=\"view-bar\"><div class=\"button\"><i class=\"icon-ios7-arrow-left\"></i></div><div class=\"menu\"><div class=\"current\">Cycle ").reference(ctx.get("current_cycle"),ctx,"h").write("</div><ul><li><a href=\"#/details/cycle/1\">Cycle 1</a></li><li><a href=\"#/details/cycle/2\">Cycle 2</a></li><li><a href=\"#/details/cycle/3\">Cycle 3</a></li><li><a href=\"#/details/cycle/4\">Cycle 4</a></li><li><a href=\"#/details/cycle/5\">Cycle 5</a></li><li><a href=\"#/details/cycle/6\">Cycle 6</a></li></ul></div><div class=\"button\"><i class=\"icon-ios7-arrow-right\"></i></div></div>--><h2>Courses</h2><ul class=\"courses\">").section(ctx.get("courses"),ctx,{"block":body_4},null).write("</ul><h2>GPA</h2><ul><li><a href=\"#/gpa\">4.00</a></li></ul></div>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li><a href=\"#/").reference(ctx.get("route"),ctx,"h").write("\"><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i> <span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span></a></li>");}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_5},null).write("><a href=\"#/details/cycle/").reference(ctx.getPath(false,["global","cycle"]),ctx,"h").write("/course/").reference(ctx.get("period"),ctx,"h").write("\"><span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span> <span class=\"average\">").reference(ctx.get("average"),ctx,"h").write("</span></a></li>");}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(" class=\"selected\"");}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"content\">").exists(ctx.get("details"),ctx,{"else":body_7,"block":body_8},null).write("<div class=\"column\">").section(ctx.getPath(false,["details","categories"]),ctx,{"block":body_9},null).write("</div></div>");}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"message-empty\"><i class=\"fa fa-hand-o-left\"></i> Select a class from the left to view grades</div>");}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"course-header\"><h2>").reference(ctx.getPath(false,["details","courseTitle"]),ctx,"h").write("</h2><ul class=\"course-details\"><li class=\"course-teacher\">").reference(ctx.getPath(false,["details","teacherName"]),ctx,"h").write(" <a href=\"mailto:").reference(ctx.getPath(false,["details","teacherEmail"]),ctx,"h").write("\"><i class=\"icon-email\"></i></a></li><li class=\"course-period\">Period ").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("</li><li class=\"course-average\">").reference(ctx.getPath(false,["details","cycleAverage"]),ctx,"h").write("</li><li class=\"course-goal\">").reference(ctx.getPath(false,["details","courseGoal"]),ctx,"h").write("</li></ul><p class=\"message-updated\">Updated ").reference(ctx.getPath(false,["details","lastUpdated"]),ctx,"h").write("</p></div>");}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"card\"><h2>").reference(ctx.get("title"),ctx,"h").write(" <span class=\"percent\">").reference(ctx.get("weight"),ctx,"h").write("</span></h2>").exists(ctx.get("assignments"),ctx,{"else":body_10,"block":body_11},null).write("</div>");}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"message-empty\">No grades</div>");}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<table><thead><tr><th>Assignment</th><th class=\"date\">Date Assigned</th><th class=\"date\">Date Due</th><th class=\"numeric\">Points Earned</th><th class=\"numeric\">Weight</th><th class=\"numeric\">Points Possible</th><th>Notes</th></tr></thead><tbody>").section(ctx.get("assignments"),ctx,{"block":body_12},null).write("</tbody><tfoot><tr><td colspan=\"3\">Average</td><td class=\"numeric\">").reference(ctx.get("average"),ctx,"h").write("</td><td colspan=\"3\"></td></tr></tfoot></table>");}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<tr><td>").reference(ctx.get("title"),ctx,"h").write("</td><td class=\"date\">").reference(ctx.get("dateAssigned"),ctx,"h").write("</td><td class=\"date\">").reference(ctx.get("dateDue"),ctx,"h").write("</td><td class=\"numeric\">").reference(ctx.get("ptsEarned"),ctx,"h").write("</td><td class=\"numeric\">").reference(ctx.get("weight"),ctx,"h").write("</td><td class=\"numeric\">").reference(ctx.get("ptsPossible"),ctx,"h").write("</td><td>").reference(ctx.get("note"),ctx,"h").write("</td></tr>");}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("banner",ctx,null);}return body_0;})();(function(){dust.register("header",body_0);function body_0(chk,ctx){return chk.write("<header><h1><i class=\"fa fa-rocket\"></i><span class=\"app-name\">Quick<span>HAC</span></span></h1><span class=\"flex-space\"></span><ul class=\"action-bar\">").section(ctx.get("actions"),ctx,{"block":body_1},null).write("</ul><div class=\"student-panel menu menu-split\"><span class=\"current student\">").reference(ctx.getPath(false,["global","student"]),ctx,"h").write("</span><i class=\"icon-chevron-down\"></i><ul>").section(ctx.get("students"),ctx,{"block":body_2},null).write("<li><a href=\"#/student/add\"><i class=\"icon-person-add\"></i> Add Student</a></li><li><a href=\"#/student/guest\"><i class=\"icon-briefcase\"></i> Guest Mode</a></li></ul></div><div class=\"more-panel menu\"><i class=\"icon-navicon\"></i><ul><li><a href=\"#/preferences\"><i class=\"icon-gear-a\"></i> Preferences</a></li><li><a href=\"https://chrome.google.com/webstore/support/dnboopdmbbpaicaphfkcphonijbfhopg?hl=en&amp;gl=US#question\"><i class=\"icon-help-circled\"></i> Help</a></li><li><a href=\"https://chrome.google.com/webstore/support/dnboopdmbbpaicaphfkcphonijbfhopg?hl=en&amp;gl=US#bug\"><i class=\"icon-alert-circled\"></i> Report Issue</a></li><li><a href=\"#/logout\"><i class=\"icon-log-out\"></i> Sign out</a></li></ul></div></header>");}function body_1(chk,ctx){return chk.write("<li data-tip=\"").reference(ctx.get("title"),ctx,"h").write("\"><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i></li>");}function body_2(chk,ctx){return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_3},null).write("><a href=\"#/student/").reference(ctx.get("id"),ctx,"h").write("\"><i class=\"icon-person\" data-color=\"").reference(ctx.get("color"),ctx,"h").write("\"></i> ").reference(ctx.get("name"),ctx,"h").write("</a></li>");}function body_3(chk,ctx){return chk.write(" class=\"selected\"");}return body_0;})();(function(){dust.register("login",body_0);var blocks={'main_view':body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"login\"><div class=\"logo\"><i class=\"fa fa-rocket\"></i><span class=\"message-welcome\">Welcome to<span class=\"app-name\">Quick<span>HAC</span></span></span></div><form class=\"login-panel\" name=\"login\"><div class=\"split-button-group\"><label><input type=\"radio\" name=\"district\" value=\"RRISD\" checked tabindex=\"1\" /> <span>RRISD</span></label><label><input type=\"radio\" name=\"district\" value=\"AISD\" tabindex=\"2\" /> <span>AISD</span></label></div><button class=\"button-login\" type=\"submit\" tabindex=\"6\" disabled><span class=\"available\">Login <i class=\"icon-log-in\"></i></span><span class=\"busy\">Logging in&hellip;</span></button><div class=\"input-group\"><label class=\"text-input input-username\"><input type=\"text\" name=\"username\" placeholder=\"HAC Username\" tabindex=\"3\" autocomplete=\"off\" required autofocus /><i class=\"icon-person\"></i></label><label class=\"text-input input-password\"><input type=\"password\" name=\"password\" placeholder=\"HAC Password\" tabindex=\"4\" autocomplete=\"off\" required /><i class=\"icon-key\"></i></label><label class=\"text-input input-id\"><input type=\"text\" name=\"id\" placeholder=\"Student ID\" tabindex=\"5\" autocomplete=\"off\" required pattern=\"\\d+\" /><i class=\"icon-card\"></i></label></div><a href=\"https://accesscenter.roundrockisd.org/homeaccess/Register/ForgotCredentials.aspx\">Lost your password?</a></form></div>");}return body_0;})();(function(){dust.register("main",body_0);function body_0(chk,ctx){return chk.block(ctx.getBlock("header"),ctx,{},null).write("<div class=\"main-view\">").block(ctx.getBlock("sidebar"),ctx,{},null).block(ctx.getBlock("main_view"),ctx,{},null).write("</div>").block(ctx.getBlock("banner"),ctx,{},null);}return body_0;})();(function(){dust.register("preferences",body_0);var blocks={'header':body_1,'sidebar':body_2,'main_view':body_5,'banner':body_8};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("header",ctx,null);}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"sidebar sidebar-preferences\"><h2>Preferences</h2><ul class=\"categories\">").section(ctx.get("categories"),ctx,{"block":body_3},null).write("</ul></div>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_4},null).write("><a href=\"#/").reference(ctx.get("route"),ctx,"h").write("\"><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i> <span class=\"title\">").reference(ctx.get("name"),ctx,"h").write("</span></a></li>");}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(" class=\"selected\"");}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"content\">").section(ctx.get("sections"),ctx,{"block":body_6},null).write("</div>");}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"card\"><h2>").reference(ctx.get("title"),ctx,"h").write("</h2>").section(ctx.get("options"),ctx,{"block":body_7},null).write("</div>");}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<label><input type=\"checkbox\" /> ").reference(ctx.get("name"),ctx,"h").write("</label>");}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("banner",ctx,null);}return body_0;})();