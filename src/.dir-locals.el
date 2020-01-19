((org-mode
  (eval add-hook 'after-save-hook #'org-md-export-to-markdown :append :local)
  (org-attach-auto-tag . nil)))
