# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building Your First Full-stack Application

### Overview

This project is your first foray into **building a full-stack application from the ground up.**

**This is exciting!** We've given you the tools over the past few weeks to be able build what you need, and now **you** get to decide what you do with it. Now is your chance to exercise your own creativity in choosing what sort of application you want to build!

**You will be working individually for this project**, and you'll be designing the app yourself. We will be taking ***attendance at 9:00am*** per usual every morning of project week.

**You will submit your idea to your squad leader via Slack by 2:30pm today (Friday, October 14th) to get feedback by 5pm.**

Remember to keep things small and focus on mastering the fundamentals &mdash; **scope creep/feature creep is the biggest pitfall for any project!**

---
### [Schedule](./schedule.md)

---
### Technical Requirements

Your app must...

* ...be built in **Rails**.
* ...**have at least 2 models** with **at least 1 association** (more if it makes sense).
* ...**have complete RESTful routes** for at least one of your resources with GET, POST, PUT, and DELETE.
* ...**have error handling & validations** for all resources
* ...**utilize an ORM to create a database table structure** (e.g. ActiveRecord) and interact with your relationally-stored data.
* ...have **semantically-clean HTML and CSS that passes the standard validators**. (See "Resources" below)

---

### Deliverables

* By **Friday, October 14th at 5:00pm**, create an issue on [the project2-gallery repository](https://github.com/ga-dc/project2-gallery) containing a link to your Github repository. (Please do **not** fork this repo.) Your repo should contain:
  - The skeleton of a Rails app (e.g. `rails new`)
  - Your `planning` folder (see below)
* A **working full-stack application, built by you**, that meets the technical requirements above.
* A **git repository hosted on Github**, with **frequent commits dating back to the very beginning** of the project.
* **A ``readme.md`` file** in the root of your repo, with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
* **A `planning` directory** in the root of your repo, containing an ERD mapping out your project domain.
  - You are welcome to include other planning documents (e.g., wireframes, user stories)
* A **link to your hosted, working application** in the URL section of your Github repo.
![The URL section of your Github repo](http://i.imgur.com/QQ7RsfR.gif)

---

### Tips

* **Begin with the end in mind.** Spend a dedicated block of time to planning with wireframes & user stories, so you don't waste time building things you don't need.
* **Don't hesitate to write throwaway code to solve short term problems**. When we say "throwaway", we mean **commit**, **then** throw it away. **[Never, ever, ever](https://www.youtube.com/watch?v=WA4iX5D9Z64&ab_channel=TaylorSwiftVEVO) delete code working code such that it can't be retrieved.**
* **Read the docs for whatever technologies you use.** The docs often include a tutorial that can help you get started, and learning to read documentation is crucial to your success as a developer.
* **Commit early, commit often.** Don't be afraid to break something because you can always go back in time to a previous version.
* **Deploy early, deploy often.** Addressing any deployment bugs early and incrementally will prevent last-minute scrambling.
* **User stories define what a specific type of user wants to accomplish with your application**. It's tempting to just use them as _todo lists_, but if you keep them small & focused on what a user cares about being able to do, it will help you prioritize your features and tasks.
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps streamline your process.

---

### Potential Project Ideas

##### Cheerups

The world can be a depressing place. Your task is to create an app that will allow people to create and share "cheerups" - happy little quips to brighten other peoples' days. Cheerups will be small - limited to 141 characters. Members will be able to promote Cheerups that they like and maybe even boost the reputation of the Cheerupper.

##### Bookmarket

You will create an application where users can bookmark links they want to keep. But what if users could trade bookmarks for other bookmarks? Or sell bookmarks for points? Or send bookmarks to your friends. Or something even crazier.

##### Photo Sha.re

Users will be able to register and create albums and photos. Albums and photos can be named and described by
their owners. Users will be able to view other users' albums. Maybe users can
comment on photos, or either up/down vote them. (Please note: file uploading can
be tricky and memory-intensive. We encourage you to review the screencasts of [Previous mini-lesson on file uploads with Carrier Wave & AWS](https://github.com/ga-dc/wdi6-formerly-curriculum/tree/3071663bc9aaac00fe5eee4b11c171af60f826b5/mini-lessons/file-uploads-with-carrier-wave-and-aws) or use a separate image uploading service like Imgur or Flickr and only store the *URLs* of those images in your app itself.)

##### Other cool ideas

- A StackOverflow-style question/answer page
- Reddit / Hacker news style clone (maybe for specific topic like restaurants, or political news articles)
- Recipe / ingredients manager

##### Something Else You Think Would Be Rad!

You're not limited to the above ideas, feel free to come up with your own idea. Just make sure to run it by your instructor to make sure the idea is feasible within the time constraints of this project week.

---

### Useful Resources

* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_
* **[W3 Validator](http://validator.w3.org)**
* **[Seed Data Generator](https://www.mockaroo.com/)**

---

### Asking For Help

The instructors will be offering support each day during Open Office Hours, 10:00am - 12:00pm in Classroom 3.

Students will be limited to `5 minutes` at a time with one-on-one instructor support during Office hours. We are doing this to ensure we can support ALL students during a session as well as giving you an opportunity to try working through your problem. You may have additional time with instructors during a session after an attempt to solve your problem :)

Other than that, we will be providing continuous support via GitHub, on the issues section of this repo. This is to mirror "in-the-wild" practices. Oftentimes developers will interact with each other via GitHub issues, particularly in remote work settings.

When you submit an issue please include the following...
  1. A screenshot or code snippet
  2. A precise and specific description of your issue
  3. What error you got

> [Check here for details on this process](https://github.com/ga-dc/wdi12/blob/master/asking-for-help.md#during-project-weeks).

We also strongly recommend **using Slack to get help from your classmates**. Chances are you all will be running into similar problems.
