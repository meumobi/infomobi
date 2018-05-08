# Contributing
## Workflow

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Branch naming
### `<type>/<name>`

#### `<type>`
```
bug    - Code changes linked to a known issue.
feat   - New feature.
hotfix - Quick fixes to the codebase.
junk   - Experiments (will never be merged).
```

#### `<name>`
Always use dashes to seperate words, and keep it short.

#### Examples
```
feat/renderer-cookies
hotfix/dockerfile-base-image
bug/login-ie
```

## Commit msg
### `<type>: Closes #<issue-id>, <title>`

#### `<type>`
```
FIX         - Code changes linked to a known issue.
FEATURE     - New feature.
HOTFIX      - Quick fixes to the codebase.
ENHANCEMENT - Update of existing feature.
UPGRADE     - Upgrade of 3rd party lib.
DOC         - Documentation.
```