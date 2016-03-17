### Homework:

- Create a new repository on GitHub for your project.
  - Create `readme.md` file in the root of your repo with a a 1-2 sentence summary of your project idea.
  - Create a `planning` directory in the root of your repo, containing...
    - A photo / screenshot of your ERD, called `erd.jpg` (or whatever extension is correct)
    - A `wireframes` directory, inside of which are *at least* 2 photos or drawings of wireframes
    - A `user_stories.md` file, containing at least 7 user stories, *or* a link to Trello with at least 7 user stories.

Note, if you create your project's folder first, and `git init` it, that's fine.
Just note that when you go to create your rails app, instead of:

```bash
rails new my_awesome_project -d postgresql
```

do this:

```bash
cd my_project_folder
rails new . -d postgresql
```

Note the `.`, which has rails make the app in the current directory, rather than
nesting it in a sub-directory. This will be important when you go to deploy your
app!

#### Submission:

Create an issue on *this* repository with a link to the repository you created above by **9:00am on Monday, March 21<sup>st</sup>**.
