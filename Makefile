PODMAN := $(shell command -v podman || echo 'docker')
SRCDIR := src
ORGS := $(notdir $(wildcard $(SRCDIR)/*.org))
MDS := $(ORGS:.org=.md)
HTMLS := $(MDS:.md=.html)
OGIMGS := $(MDS:.md=.jpg)
DISTDIR := dist
DISTS := $(addprefix $(DISTDIR)/,$(HTMLS) $(OGIMGS))
URL ?= http://localhost/

.PHONY: mds clean assets deck
mds: $(addprefix $(SRCDIR)/,$(MDS))

$(SRCDIR)/%.md: $(SRCDIR)/%.org
	$(PODMAN) run --rm --volume=./:/work --workdir=/work docker.io/silex/emacs:27 \
	emacs --quick --batch --load 'ox-md' --eval \
	'(progn (setq org-confirm-babel-evaluate nil) (dolist (file command-line-args-left) (with-current-buffer (find-file-noselect file) (org-md-export-to-markdown))))' "$<"

deck: assets $(DISTS)

$(DISTS): | $(DISTDIR)

assets: | $(DISTDIR)
	cp --archive $(SRCDIR)/assets $(DISTDIR)/assets

$(DISTDIR)/%.html: $(SRCDIR)/%.md
	npx marp --no-stdin $< -o $@ --og-image $(URL)/index.jpg --url $(URL)

$(DISTDIR)/%.jpg: $(SRCDIR)/%.md
	npx marp $< -o $@

$(DISTDIR):
	mkdir $(DISTDIR)

clean:
	rm -fr dist
