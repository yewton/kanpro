PODMAN := $(shell command -v podman || echo 'docker')
ORGS := $(wildcard ./src/*.org)
MDS := $(ORGS:.org=.md)

.PHONY: all
all: $(MDS)

%.md: %.org
	 $(PODMAN) run --rm --volume=./:/work --workdir=/work docker.io/silex/emacs:27 \
	emacs --quick --batch --load 'ox-md' --eval \
	'(progn (setq org-confirm-babel-evaluate nil) (dolist (file command-line-args-left) (with-current-buffer (find-file-noselect file) (org-md-export-to-markdown))))' "$<"
