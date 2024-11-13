---
title: Git · Change Author Information
date: 2019-11-21 13:18:00
tags: [Git, GitHub]
categories: [Software Engineering, Git]
---

Before running this script, you'll need:

- The old email address that appears in the author/committer fields that you want to change
- The correct name and email address that you would like such commits to be attributed to

<!-- more -->

##### Create a fresh, bare clone of your repository

```shell
git clone --bare https://hostname/user/repo.git
cd repo.git
```

##### Copy and paste the script, replacing the following variables based on the information you gathered

- `OLD_EMAIL`
- `CORRECT_NAME`
- `CORRECT_EMAIL`

```
#!/bin/sh

git filter-branch --env-filter '

OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Your Correct Name"
CORRECT_EMAIL="your-correct-email@example.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

##### Review the new Git history for errors.

##### Push the corrected history to GitHub Enterprise:

```shell
git push --force --tags origin 'refs/heads/*'
```