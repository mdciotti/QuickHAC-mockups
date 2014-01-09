(function(){dust.register("banner",body_0);function body_0(chk,ctx){return chk.section(ctx.get("banner"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.exists(ctx.get("active"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<div class=\"banner ").reference(ctx.get("type"),ctx,"h").write("\"><span class=\"message-banner\">").exists(ctx.get("url"),ctx,{"else":body_3,"block":body_4},null).write("</span><i class=\"close icon-close-circled\"></i></div>");}function body_3(chk,ctx){return chk.reference(ctx.get("text"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("url"),ctx,"h").write("\">").reference(ctx.get("text"),ctx,"h",["s"]).write("</a>");}return body_0;})();(function(){dust.register("dashboard",body_0);var blocks={'header':body_1,'sidebar':body_2,'main_view':body_3,'banner':body_4};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("header",ctx,null);}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("sidebar",ctx,null);}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"dashboard\"><div class=\"card\"><h2>Trends</h2><div id=\"plot-trend\"></div></div><div class=\"split\"><div class=\"card\"><h2>Recent Grades</h2></div><div class=\"card\"><h2>GPA</h2></div></div></div>");}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("banner",ctx,null);}return body_0;})();(function(){dust.register("course",body_0);var blocks={'header':body_1,'sidebar':body_2,'main_view':body_3,'banner':body_16};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("header",ctx,null);}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("sidebar",ctx,null);}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"content\">").exists(ctx.get("details"),ctx,{"else":body_4,"block":body_5},null).write("<div class=\"column\">").section(ctx.getPath(false,["details","categories"]),ctx,{"block":body_6},null).write("</div></div>");}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"message-empty\"><i class=\"fa fa-hand-o-left\"></i> Select a class from the left to view grades</div>");}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"content-header\"><h2>").reference(ctx.getPath(false,["details","courseTitle"]),ctx,"h").write("</h2><ul class=\"course-details\"><li class=\"course-teacher\">").reference(ctx.getPath(false,["details","teacherName"]),ctx,"h").write(" <a href=\"mailto:").reference(ctx.getPath(false,["details","teacherEmail"]),ctx,"h").write("\"><i class=\"icon-email\"></i></a></li><li class=\"course-period\">Period ").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("</li><li class=\"course-average\">").reference(ctx.getPath(false,["details","cycleAverage"]),ctx,"h").write("</li><li class=\"course-goal\">").reference(ctx.getPath(false,["details","courseGoal"]),ctx,"h").write("</li></ul><p class=\"message-updated\">Updated ").reference(ctx.getPath(false,["details","lastUpdated"]),ctx,"h").write("</p><ul class=\"tab-bar\"><li class=\"selected\"><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/course/").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("/cycle/1\">Cycle 1</a></li><li><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/course/").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("/cycle/2\">Cycle 2</a></li><li><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/course/").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("/cycle/3\">Cycle 3</a></li><li><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/course/").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("/cycle/4\">Cycle 4</a></li><li><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/course/").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("/cycle/5\">Cycle 5</a></li><li><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/course/").reference(ctx.getPath(false,["details","coursePeriod"]),ctx,"h").write("/cycle/6\">Cycle 6</a></li></ul></div>");}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"card\"><h2>").reference(ctx.get("title"),ctx,"h").write(" <span class=\"percent\">").reference(ctx.get("weight"),ctx,"h").write("</span></h2>").exists(ctx.get("assignments"),ctx,{"else":body_7,"block":body_8},null).write("</div>");}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"message-empty\">No grades</div>");}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<table><thead><tr><th>Assignment</th><th class=\"date\">Assigned</th><th class=\"date\">Due</th><th class=\"numeric\">Points</th><th>Notes</th></tr></thead><tbody>").section(ctx.get("assignments"),ctx,{"block":body_9},null).write("</tbody><tfoot><tr><td colspan=\"3\">Average</td><td class=\"numeric\">").reference(ctx.get("average"),ctx,"h").write("</td><td colspan=\"3\"></td></tr></tfoot></table>");}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<tr class=\"").section(ctx.get("flags"),ctx,{"block":body_10},null).write("\"><td>").reference(ctx.get("title"),ctx,"h").write("</td><td class=\"date\">").reference(ctx.get("dateAssigned"),ctx,"h").write("</td><td class=\"date\">").reference(ctx.get("dateDue"),ctx,"h").write("</td><td class=\"numeric\">").reference(ctx.get("ptsEarned"),ctx,"h").exists(ctx.get("weight"),ctx,{"block":body_15},null).write("</td><td>").reference(ctx.get("note"),ctx,"h").write("</td></tr>");}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(" ").exists(ctx.get("dropped"),ctx,{"block":body_11},null).write(" ").exists(ctx.get("extraCredit"),ctx,{"block":body_12},null).write(" ").exists(ctx.get("hasNote"),ctx,{"block":body_13},null).write(" ").exists(ctx.get("missing"),ctx,{"block":body_14},null);}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("dropped");}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("extra-credit");}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("has-note");}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("missing");}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<span class=\"soft\"> &times; ").reference(ctx.get("weight"),ctx,"h").write("</span>");}function body_16(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("banner",ctx,null);}return body_0;})();(function(){dust.register("header",body_0);function body_0(chk,ctx){return chk.write("<header><h1><i class=\"fa fa-rocket\"></i><span class=\"app-name\">Quick<span>HAC</span></span></h1><span class=\"flex-space\"></span><ul class=\"action-bar\">").section(ctx.get("actions"),ctx,{"block":body_1},null).write("</ul><div data-tip=\"Notifications\" class=\"popover-button\"><label><input type=\"radio\" name=\"focus\" class=\"dropdown-toggle\" /><span class=\"popover-title\"></span><i class=\"icon-ios7-bell\"></i><div class=\"popover\">").partial("notifications",ctx,null).write("</div><div class=\"popover-triangle\"></div></label></div><div class=\"student-panel popover-button\"><label><input type=\"radio\" name=\"focus\" class=\"dropdown-toggle\" /><span class=\"popover-title\">").reference(ctx.getPath(false,["global","studentName"]),ctx,"h").write("</span><i class=\"icon-chevron-down\"></i><div class=\"popover\"><ul>").section(ctx.get("students"),ctx,{"block":body_2},null).write("<li><a href=\"#/student/add\"><i class=\"icon-person-add\"></i> <span class=\"title\">Add Student</span></a></li><li><a href=\"#/student/guest\"><i class=\"icon-briefcase\"></i> <span class=\"title\">Guest Mode</span></a></li></ul></div><div class=\"popover-triangle\"></div></label></div></header>");}function body_1(chk,ctx){return chk.write("<li data-tip=\"").reference(ctx.get("title"),ctx,"h").write("\"><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i></li>");}function body_2(chk,ctx){return chk.write("<li><a href=\"#/student/").reference(ctx.get("id"),ctx,"h").write("\"><i class=\"icon-person\" data-color=\"").reference(ctx.get("color"),ctx,"h").write("\"></i> <span class=\"title\">").reference(ctx.get("name"),ctx,"h").write("</span></a></li>");}return body_0;})();(function(){dust.register("login",body_0);var blocks={'main_view':body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"login\"><div class=\"logo\"><i class=\"fa fa-rocket\"></i><span class=\"message-welcome\">Welcome to<span class=\"app-name\">Quick<span>HAC</span></span></span></div><form class=\"panel login-panel\" name=\"login\" id=\"login\"><div class=\"split-button-group\"><label><input type=\"radio\" name=\"district\" value=\"RRISD\" checked tabindex=\"1\" /> <span>RRISD</span></label><label><input type=\"radio\" name=\"district\" value=\"AISD\" tabindex=\"2\" /> <span>AISD</span></label></div><button class=\"button-login\" type=\"submit\" tabindex=\"6\" disabled><span class=\"available\">Login <i class=\"icon-log-in\"></i></span><span class=\"busy\">Logging in&hellip;</span></button><div class=\"input-group\"><label class=\"text-input input-username\"><input type=\"text\" name=\"username\" placeholder=\"HAC Username\" tabindex=\"3\" autocomplete=\"off\" required autofocus /><i class=\"icon-person\"></i></label><label class=\"text-input input-password\"><input type=\"password\" name=\"password\" placeholder=\"HAC Password\" tabindex=\"4\" autocomplete=\"off\" required /><i class=\"icon-key\"></i></label><a href=\"https://accesscenter.roundrockisd.org/homeaccess/Register/ForgotCredentials.aspx\" target=\"_blank\" class=\"forgot-password\">Lost your password?</a></div><i class=\"icon-ionic busy-indicator\"></i></form></div><footer><small>&copy; 2013. Version ").reference(ctx.getPath(false,["global","version"]),ctx,"h").write("</small></footer>");}return body_0;})();(function(){dust.register("main",body_0);function body_0(chk,ctx){return chk.block(ctx.getBlock("header"),ctx,{},null).write("<div class=\"main-view\">").block(ctx.getBlock("sidebar"),ctx,{},null).block(ctx.getBlock("main_view"),ctx,{},null).write("</div>").block(ctx.getBlock("banner"),ctx,{},null);}return body_0;})();(function(){dust.register("notifications",body_0);function body_0(chk,ctx){return chk.write("<ul class=\"notifications\">").section(ctx.get("notifications"),ctx,{"else":body_1,"block":body_2},null).write("</ul>");}function body_1(chk,ctx){return chk.write("<li><p class=\"message-empty\">No Notifications</p></li>");}function body_2(chk,ctx){return chk.write("<li><a href=\"#/").reference(ctx.get("route"),ctx,"h").write("\" class=\"card").exists(ctx.get("unread"),ctx,{"block":body_3},null).write("\"><i class=\"main ").reference(ctx.get("icon"),ctx,"h").write("\"></i><div class=\"notification-content\"><h2>").reference(ctx.get("title"),ctx,"h").write("</h2><p>").reference(ctx.get("message"),ctx,"h").write("</p><p class=\"soft\"><small>").reference(ctx.get("detail"),ctx,"h",["s"]).write("</small></p><i class=\"close icon-close\"></i></div></a></li>");}function body_3(chk,ctx){return chk.write(" unread");}return body_0;})();(function(){dust.register("preferences",body_0);var blocks={'header':body_1,'sidebar':body_2,'main_view':body_3,'banner':body_11};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("header",ctx,null);}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("sidebar",ctx,null);}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"content\"><div class=\"content-header\"><h2>Preferences</h2></div><div class=\"tab-container\"><div class=\"tab-pane\"><ul class=\"side-tab-bar categories\">").section(ctx.get("categories"),ctx,{"block":body_4},null).write("</ul></div><div class=\"tab-view\">").section(ctx.getPath(false,["details","sections"]),ctx,{"block":body_6},null).write("</div></div></div>");}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_5},null).write("><a href=\"#/").reference(ctx.get("route"),ctx,"h").write("\"><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i> <span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span></a></li>");}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(" class=\"selected\"");}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"card\"><h3><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i> ").reference(ctx.get("title"),ctx,"h").write("</h3><ul>").section(ctx.get("options"),ctx,{"block":body_7},null).write("</ul></div>");}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("select",ctx,{"block":body_8},{"key":ctx.get("type")});}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_9},{"value":"toggle"});}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_10},null).write("><label><span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span> <input type=\"checkbox\" /></label></li>");}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(" class=\"selected\"");}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("banner",ctx,null);}return body_0;})();(function(){dust.register("sidebar",body_0);function body_0(chk,ctx){return chk.write("<div class=\"sidebar\"><ul class=\"views\">").section(ctx.get("views"),ctx,{"block":body_1},null).write("</ul><h2>Courses</h2><ul class=\"courses\">").section(ctx.get("courses"),ctx,{"block":body_3},null).write("</ul><h2>More</h2><ul>").section(ctx.get("appmenu"),ctx,{"block":body_5},null).write("</ul></div>");}function body_1(chk,ctx){return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_2},null).write("><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/").reference(ctx.get("route"),ctx,"h").write("\"><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i> <span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span></a></li>");}function body_2(chk,ctx){return chk.write(" class=\"selected\"");}function body_3(chk,ctx){return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_4},null).write("><a href=\"#/student/").reference(ctx.getPath(false,["global","studentID"]),ctx,"h").write("/course/").reference(ctx.get("period"),ctx,"h").write("/cycle/").reference(ctx.getPath(false,["global","cycle"]),ctx,"h").write("\"><span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span> <span class=\"average\">").reference(ctx.get("average"),ctx,"h").write("</span></a></li>");}function body_4(chk,ctx){return chk.write(" class=\"selected\"");}function body_5(chk,ctx){return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_6},null).write("><a href=\"").reference(ctx.get("url"),ctx,"h").write("\"").exists(ctx.get("external"),ctx,{"block":body_7},null).write("><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i> <span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span></a></li>");}function body_6(chk,ctx){return chk.write(" class=\"selected\"");}function body_7(chk,ctx){return chk.write(" target=\"_blank\"");}return body_0;})();(function(){dust.register("welcome",body_0);var blocks={'main_view':body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"welcome\"><div class=\"logo\"><i class=\"fa fa-rocket\"></i><span class=\"message-welcome\">Welcome to<span class=\"app-name\">Quick<span>HAC</span></span></span></div><div class=\"panel welcome-panel\" id=\"welcome\"><div class=\"student-list\">").section(ctx.get("students"),ctx,{"block":body_2},null).write("</div><button disabled>Start</button></div></div>");}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<label class=\"student\"><i class=\"icon-person\"></i><h3 class=\"name\">").reference(ctx.get("name"),ctx,"h").write("</h3><p class=\"school\">").reference(ctx.get("school"),ctx,"h").write("</p><input type=\"checkbox\" tabindex=\"").helper("idx",ctx,{"block":body_3},null).write("\" /></label>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(true,[]),ctx,"h");}return body_0;})();