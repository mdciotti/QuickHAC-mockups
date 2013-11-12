TEMPLATE_ENGINE = dustc
TEMPLATE_SRC_DIR = views
TEMPLATE_OUT_DIR = compiled_templates
TEMPLATES = banner dashboard details header login main preferences
TEMPLATE_EXT = dust

SCRIPT_COMPILER = dart2js
SCRIPT_SRC_DIR = scripts
SCRIPT_OUT_DIR = compiled_scripts
SCRIPTS = login.js
SCRIPTS_EXT = .dart

STYLE_ENGINE = sass
STYLE_SRC_DIR = styles
STYLE_OUT_DIR = dist/css
STYLES = main.scss

LIBS = dustjs-linked/dist/dust-core-2.0.3.js

all: scripts styles templates

styles: $(STYLES)

$(STYLES):
	$(STYLE_ENGINE) --unix-newlines --scss --style compact $@ $(STYLE_OUT_DIR)/$@.css

scripts: clear_scripts $(SCRIPTS)

$(SCRIPTS):
	# $(SCRIPT_COMPILER) $(SCRIPT_SRC_DIR)/$@.$(SCRIPT_EXT) -o $(SCRIPT_OUT_DIR)/$@.js
	# cat $(SCRIPT_OUT_DIR)/$@.js >> dist/js/scripts.js
	cat $(SCRIPT_OUT_DIR)/$@ >> dist/js/scripts.js

templates: clear_templates $(TEMPLATES)

$(TEMPLATES):
	$(TEMPLATE_ENGINE) --name=$@ $(TEMPLATE_SRC_DIR)/$@.$(TEMPLATE_EXT) > $(TEMPLATE_OUT_DIR)/$@.js
	cat $(TEMPLATE_OUT_DIR)/$@.js >> dist/js/templates.js

clean: clear_scripts clear_templates

clear_scripts:
	rm -f dist/js/scripts.js

clear_templates:
	rm -f dist/js/templates.js

install:
	bower install

update:
	bower update

.PHONY:
