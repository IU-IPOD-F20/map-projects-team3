# Team 3 group project

## Team Members
- Svyatoslav Semenyuk (@Prometheus3375)
- Dragos Strugar (@d11r)
- Alexey Logachev (@picroc)

## Technologies

We discussed between making a desktop app or a web application. Tradeoffs included things like privacy, platform independence, ease of use, etc. After careful consideration we decided to make a web application, but without a database that is stored in the cloud. We realize that the privacy is the main aspect of our product: users do **not** want their data to be seen by anyone except themselves.

To make a web app, it is best to use JavaScript, so we decided to use *React* as our frontend framework to use. For the database, we will use Firebase.

## Organization

Daily meetings, retrospective, sprint planning, and sprint review are all planned and scheduled as follows:
- daily meetings at 7pm MSC every working day
- sprint planning on Monday in the mornings
- sprint review on Friday in the evenings
- sprint restrospect after each sprint review

## Commit Message Conventions

For commit messages use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Style is the following - for new features, fixes, refactors, doc changes, testing, performance changes respectively:

```
feat: <short description in present simple here>
fix: <short description in present simple here>
refactor: <short description in present simple here>
docs: <short description in present simple here>
test: <short description in present simple here>
perf: <short description in present simple here>
```

## Code Style Conventions

They are outlined in `.eslintrc` file and will be formatted automatically by [Prettier](https://prettier.io/).
