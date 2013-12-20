TEMPLATE_ENGINE = dustc
TEMPLATE_SRC_DIR = views
TEMPLATE_OUT_DIR = compiled_templates
TEMPLATES = banner.dust dashboard.dust details.dust header.dust login.dust main.dust preferences.dust

SCRIPT_COMPILER = dart2js
SCRIPT_SRC_DIR = scripts
SCRIPT_OUT_DIR = compiled_scripts
SCRIPTS = login.js

STYLE_ENGINE = sass
STYLE_SRC_DIR = styles
STYLE_OUT_DIR = dist/css
STYLES = main.scss

LIBS = dustjs-linked/dist/dust-core-2.0.3.js

all: scripts styles templates

styles: $(STYLES)

$(STYLES):
	$(STYLE_ENGINE) --unix-newlines --scss --style compact $(STYLE_SRC_DIR)/$@ $(STYLE_OUT_DIR)/$(addsuffix .css, $(basename $@))

scripts: clear_scripts $(SCRIPTS)

$(SCRIPTS):
	# $(SCRIPT_COMPILER) $(SCRIPT_SRC_DIR)/$@.$(SCRIPT_EXT) -o $(SCRIPT_OUT_DIR)/$@.js
	# cat $(SCRIPT_OUT_DIR)/$@.js >> dist/js/scripts.js
	cat $(SCRIPT_OUT_DIR)/$(addsuffix .js, $(basename $@)) >> dist/js/scripts.js

templates: clear_templates $(TEMPLATES)

$(TEMPLATES):
	$(TEMPLATE_ENGINE) --name=$(basename $@) $(TEMPLATE_SRC_DIR)/$@ > $(TEMPLATE_OUT_DIR)/$(addsuffix .js, $(basename $@))
	cat $(TEMPLATE_OUT_DIR)/$(addsuffix .js, $(basename $@)) >> dist/js/templates.js

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
