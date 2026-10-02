---
title: How to Delete Git Commits
date: 2021-05-01 22:38:00
tags: [Git, GitHub]
categories: [Software Engineering, Git]
group: snippet
hidden: true
---

**Removing an entire commit**

```bash
git rebase -p --onto SHA^ SHA
```

Obviously replace `SHA` with the reference you want to get rid of. The `^` in that command is literal.

<!-- more -->

#### Rebase

First, find out how far back that commit is (approximately). Then do:

```bash
git rebase -i HEAD~N
```

The `~N` means rebase the last `N` commits (`N` must be a number, for example `HEAD~10`).

Then, you can edit the file that Git presents to you to delete the offending commit. On saving that file, Git will then rewrite all the following commits as if the one you deleted didn't exist.

#### Reset

Assuming you are sitting on that commit, then this command will wack it:

```bash
git reset --hard HEAD~1
```

The `HEAD~1` means the commit before head.

If you want to keep your work and just *undo* that commit command:

```bash
git reset --soft HEAD~1
```

Or, you could look at the output of `git log`, find the commit id of the commit you want to back up to:

```bash
git reset --hard <sha1-commit-id>
```

If you already pushed it, you will need to do a force push to get rid of it.

```bash
git push origin HEAD --force
```
