(function(){dust.register("details",body_0);var blocks={'header':body_1,'sidebar':body_2,'main_view':body_3,'banner':body_4};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("main",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("header",ctx,null);}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"sidebar sidebar-classes\"><div class=\"view-bar\"><div class=\"button\"><i class=\"icon-ios7-arrow-left\"></i></div><div class=\"menu\"><div class=\"current\">Cycle ").reference(ctx.get("current_cycle"),ctx,"h").write("</div><ul><li><a href=\"#/details/cycle/1\">Cycle 1</a></li><li><a href=\"#/details/cycle/2\">Cycle 2</a></li><li><a href=\"#/details/cycle/3\">Cycle 3</a></li><li><a href=\"#/details/cycle/4\">Cycle 4</a></li><li><a href=\"#/details/cycle/5\">Cycle 5</a></li><li><a href=\"#/details/cycle/6\">Cycle 6</a></li></ul></div><div class=\"button\"><i class=\"icon-ios7-arrow-right\"></i></div></div><ul class=\"views\"><li class=\"selected\"><span class=\"average\">88</span><a href=\"#/details/cycle/").reference(ctx.get("current_cycle"),ctx,"h").write("/course/1\" class=\"name\">US History</a></li><li><span class=\"average\">84</span><a href=\"#/details/cycle/").reference(ctx.get("current_cycle"),ctx,"h").write("/course/2\" class=\"name\">Space Tech</a></li><li><span class=\"average\">92</span><a href=\"#/details/cycle/").reference(ctx.get("current_cycle"),ctx,"h").write("/course/3\" class=\"name\">Algebra I</a></li><li><span class=\"average\">99</span><a href=\"#/details/cycle/").reference(ctx.get("current_cycle"),ctx,"h").write("/course/4\" class=\"name\">Band 7/8</a></li><li><span class=\"average\">90</span><a href=\"#/details/cycle/").reference(ctx.get("current_cycle"),ctx,"h").write("/course/5\" class=\"name\">Science 8</a></li><li><span class=\"average\">87</span><a href=\"#/details/cycle/").reference(ctx.get("current_cycle"),ctx,"h").write("/course/6\" class=\"name\">Spanish 1 B</a></li><li><span class=\"average\">88</span><a href=\"#/details/cycle/").reference(ctx.get("current_cycle"),ctx,"h").write("/course/7\" class=\"name\">Language Arts 8</a></li></ul><div class=\"gpa-panel\"><span class=\"gpa\">4.00</span></div></div>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"content\"><!-- <div class=\"message-empty\">Select a class from the left to view grades <i class=\"fa fa-hand-o-left\"></i></div> --><div class=\"message-updated\">Updated 42 minutes ago</div><div class=\"card\"><h2>Completion/Daily Work <span>0</span></h2><div class=\"message-empty\">No grades <i class=\"fa fa-frown-o\"></i></div></div><div class=\"card\"><h2>Formative <span>40</span></h2><table><thead><tr><th>Assignment</th><th>Date Due</th><th class=\"grade\">Grade</th><th>Notes</th></tr></thead><tbody><tr><td>Unit 2 Vocab Quiz #2</td><td>4 Oct</td><td class=\"grade\">88</td><td></td></tr><tr><td>Talk of Tavern Quiz</td><td>8 Oct</td><td class=\"grade\">96</td><td></td></tr><tr><td>Unit 2 Vocab Quiz #3</td><td>11 Oct</td><td class=\"grade\">90</td><td></td></tr><tr><td>Unit 2 Vocab Quiz #4</td><td>18 Oct</td><td class=\"grade\">94</td><td></td></tr></tbody><tfoot><tr><td colspan=\"2\">Average</td><td class=\"grade\">92</td><td></td></tr></tfoot></table></div><div class=\"card\"><h2>Summative <span>60</span></h2><table><thead><tr><th>Assignment</th><th>Date Due</th><th class=\"grade\">Grade</th><th>Notes</th></tr></thead><tbody><tr><td>Unit 2 Test</td><td>11 Oct</td><td class=\"grade\">88</td><td></td></tr></tbody><tfoot><tr><td colspan=\"2\">Average</td><td class=\"grade\">88</td><td></td></tr></tfoot></table></div></div>");}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("banner",ctx,null);}return body_0;})();