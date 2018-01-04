# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building Your First Full-stack Application
### Overview

For the first time, we will each be **building a full-stack application from the ground up, entirely of our own designs**. This means we will be choosing an idea, planning it out with diagrams and wireframes, and building our applications.

**This is exciting!** We've given you the tools over the past few weeks to be able to build what you want, and now **you** get to decide what you do with it. Now is your chance to exercise your own creativity in choosing what sort of application you want to build!

**You will be working individually on this project**, and you'll be designing the app yourself.

**You are required to check in to Garnet by 9:00am every morning of project week, as usual.**

**You must submit your idea, complete with entity diagrams, to your squad leader by 12:30pm Friday, November 17th.** After submitting your completed proposal with entity diagrams, you will receive feedback. Your diagrams should show what data your models contain.

Remember to focus on your MVP first &mdash; **scope creep/feature creep is one of the biggest potential pitfalls of any app in development!** This is true not just for beginners, *but for all developers.*


## Technical Requirements

Your project must satisfy the following requirements..

  1. Be built using **Express**, **Handlebars**, and **Mongoose**.
     > *You may request to use an alternative to Handlebars. Contact your squad leader for more information.*
  2. **Have at least 2 non-User models**
  3. **Have _complete_ CRUD functionality implemented with RESTful routes.**
    > You may ***logically*** distribute up CRUD functionality across models. This is only permissable when it does not make sense in the context of your application to have full CRUD on one model.
  - **Have its own repository under your GitHub account** (do not fork this repo).
  - **Deploy your application on Heroku**.
  - Have ***validated***, **semantically-clean HTML and CSS**.

Review the [Rubric](evaluation.md) for the specifics of how your project will be graded.



## Deliverables

Your project is due on **Thursday, November 30th at 12:00pm**. Create an issue on [the project2-gallery repository](https://github.com/ga-dc/project2-gallery) containing...

  * a link to your Project 2 Github repository
    > *Please do **not** fork this repo*
  * a link to your screencast presentation

Your repo should contain...

  * A **working full-stack application, built by you**, that meets the technical requirements above.
  * **Frequent commits dating back to the very beginning** of the project.
  * **A ``readme.md`` file** in the root of your repo, with explanations of the technologies used, the approach taken, features, installation instructions, unsolved problems, etc.
  * **A `planning` directory** in the root of your repo containing a diagram mapping out your project domain. You are welcome to include other planning documents (e.g., wireframes, user stories).
  * A **link to your hosted, working application** in the URL section of your Github repo.

    > ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

---

## Plagiarism

Take a moment to re-familiarize yourself with the [plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md), specifically on using work you find online and on work you do with other students.

## Tips

* **Commit early, commit often.**  Don't be afraid to break something because you can always go back in time to a previous version.

## Planning

1. [Watch this video on the Minimum Viable Product](https://www.youtube.com/watch?v=1FoCbbbcYT8)

2. **Begin with the end in mind**. Spend a dedicated block of time to planning with ***wireframes*** and ***user stories*** so you don't waste time building things you don't need.
3. **Write pseudocode before you write actual code**. Thinking through the logic of something helps streamline your process.
4. **User stories define what a specific type of user wants to accomplish with your application**. It's tempting to just use your list of user stories as a ***todo list***, but try to avoid this. If you keep your user stories small and focused on what a user cares about being able to do. This will help you prioritize your tasks and which features to build first.

> [Definition of User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)

## Building Out from your Plan

After planning your app: 

1. Start with building your models and linking them to the database. Create a couple pieces of seed data so that can see data retrieved from your database (by a mongoose model) show up on the page later.
2. Build your controllers and routing, to 'funnel' or direct the data into your handlebars views.
3. Build your views and add CSS styling.
4. Add new features!

## Getting Unstuck

* **Don't hesitate to write messy code to solve short-term problems**&mdash;***Refactor later***
* **Read the docs for whatever technologies you use**. The docs often include a tutorial that can help you get started, and learning to read documentation is crucial to your success as a developer.

## Potential Project Ideas

### Cheerups

The world can be a depressing place. Your task is to create an app that will allow people to create and share "cheerups" - happy little quips to brighten other peoples' days. Cheerups will be small - limited to 141 characters. Members will be able to promote Cheerups that they like and maybe even boost the reputation of the Cheerupper.

### Bookmarket

You will create an application where users can bookmark links they want to keep. But what if users could trade bookmarks for other bookmarks? Or sell bookmarks for points? Or send bookmarks to your friends. Or something even crazier.

### Photo Sha.re

Users will be able to register and create albums and photos. Albums and photos can be named and described by their owners. Users will be able to view other users' albums. Maybe users can comment on photos, or either up/down vote them. (Please note: file uploading can be tricky and memory-intensive.)

  - Use a separate image uploading service like Imgur or Flickr and only store the *URLs* of those images in your app itself.)
  - After your app works with Imgur/Flickr/giphy links, you can try taking the additional step of storing images in a database. **This is a bonus, so do not start with this as an initial goal&mdash;it should be a stretch goal.** It's a smaller step to go from external links to stored images. See bonus section for details.


### Other Ideas

- A StackOverflow-style question/answer page
- Reddit / Hacker news style clone (maybe for specific topic like restaurants, or political news articles)
- Recipe / ingredients manager

## Bonus Features to Implement

- Use information from a 3rd party API and integrate it with your mongoose models

- Use Passport to add User Auth

- Let users sign in with a third-party account (Facebook, Twitter, GitHub, ... etc.)

  > Read more...

    - https://github.com/mkdynamic/omniauth-facebook
    - https://github.com/arunagw/omniauth-twitter
    - https://github.com/intridea/omniauth-github

- Paginate your views

  > Read more: http://syskall.com/pagination-with-handlebars/

- Allow users to upload images to your application, and persist these images.

  > Read more: 
  > https://stackoverflow.com/questions/11442356/storing-some-small-under-1mb-files-with-mongodb-in-nodejs-without-gridfs
  > https://stackoverflow.com/questions/4796914/store-images-in-a-mongodb-database

---

### Useful Resources

* **[Heroku](http://www.heroku.com)**
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_
* **[W3 Validator](http://validator.w3.org)**
* **[Seed Data Generator](https://www.mockaroo.com/)**

---

### Asking For Help

Instructors will be offering support every week day during Open Office Hours, 10:00am - 12:00pm. There will be 2 instructors on support during that time.

We will also be providing continuous support via GitHub, on the issues section of this repo. This is to mirror "in-the-wild" practices. Oftentimes, developers will interact with each other via GitHub issues, particularly in remote work settings.

Students will be **limited to 10 minutes** at a time with one-on-one instructor support during Open Office Hours. We are doing this to ensure we can support ALL students during a session as well as giving you an opportunity to try working through your problem.

#### Maximizing ur time

Prior to a one-on-one during Open Office Hours, we ***strongly recommend*** that you file an issue on this repository in order to both provide the instructor with a point of reference regarding your code and the issue you are having. This will enable us to give you more effective guidance.

When you submit an issue please include the following:

  1. A code snippet
  2. A precise and specific description of your issue
  3. What error you got
  4. What you already tried to resolve your error and the result of those attempts

> [Check here for details on this process](https://github.com/ga-dc/wdi12/blob/master/asking-for-help.md#during-project-weeks).

We also strongly recommend **using Slack to get help from your classmates**. Chances are you all will be running into similar problems.
