# Healthshare Coding Test

Welcome to the Healthshare Coding Test. This repository very closely reflects tasks that a full-stack web developer would tackle day-to-day at Healthshare.

Our stack is Python + Javascript but in order to keep this test simple and easy to install, we have used Javascript for the whole stack.

Imagine this is a real project **in production** when tackling the tasks.

You may spend as long as you like completing the task, however, we'd expect it to take 1-2 hours to complete.


## Tasks

### 1. Pull Request Review

At Healthshare, every new piece of code (bug fix, feature etc.) will go through a code review in a Pull Request. Automated tests run when a PR is opened and one of our team members is assigned to review it before it is merged into the master branch.

There is a pull request which you will need to review. You can leave inline comments as well as general suggestions for improvements or problems.

### 2. Issues Assigned to you

There is an issue assigned to you. Issue instructions:

1. Create a new branch for the issue. Branch name should be like:  `[branch-description]-[issue-number]`. Take a look at the branch that already exists for Issue #1 as an example
2. Commits should be succint and use imperative tense (e.g. 'fix problem with code' rather than 'fixes problem with code')
3. Open a pull request for the issue after you have completed it, don't worry about assigning it to anyone. The pull request description should include steps to test if appropriate.

### 3. Create issues

If you find problems that aren't listed (and you don't need to fix them to complete the issue assigned to you), create new issues for each problem.

Examples include:

- Security
- UX
- REST API Practices
- Bugs

*NOTE: Make sure you are descriptive in your issue. Include steps to reproduce and screenshots if appropriate*

Choose one issue you have created and fix it.

### 4. Feedback
If you have any comments, questions, feedback - please let us know in an issue

# Actual README

### Running locally

```
npm install -g yarn nodemon recursive-install
npm-recursive-install
yarn dev
```

### Testing

Server:

`mocha test-server.js`

Client (snapshot tests):

```
cd client
npm test
```

To update snapshots, hit `u` after running tests

### Notes for Healthshare

Make sure you squash commits before sending to a candidate

```
git reset --soft 7799556da86073c52d7306c294a04e12bbb87e24
git commit -m 'Squash commits'
git push --force origin master
```
