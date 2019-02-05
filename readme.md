# ![GA logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building Your First Full-stack Application

For the first time, you will be building a full-stack application from the ground up, entirely of your own design. This means we will be choosing an idea, planning it out with diagrams and wireframes, and then building it. This is exciting! We've given you the tools to build what you want, and now **you** get to decide what you do with it. Now is your chance to exercise your own creativity in choosing what sort of application you want to build!

**You will be working individually on this project**, and you'll be designing the app yourself.

**You must submit your project idea and plan to an instructor.** After submitting your completed proposal, you will receive feedback. Your plan should explain what data your model(s) contain.  

Remember to focus on your MVP first! **scope creep / feature creep is one of the biggest pitfalls of any app in development!** This is true not just for
beginners, *but for all developers.*

## Requirements

Your project must satisfy the following requirements:

### Technical Requirements

* Be built using Express, Handlebars and Mongoose.
* Have at least 2 non-User models
* Have complete CRUD functionality implemented with RESTful routes. (You may logically distribute CRUD functionality across models. This is only allowed when it does not make sense in the context of your application to have full CRUD on one model.)
* Have its own repository under your GitHub account (do not fork this repo).
* Be deployed to Heroku.
* Have validated, semantically-clean HTML and CSS and a polished appearance.
* Demonstrate a good commit history.

Review the [Rubric](evaluation.md) for the specifics of how your project will be graded.

## Submission

***DO NOT FORK THIS REPOSITORY!*** Create a **new** repository. Then, submit
your project as an issue to this repo:

[github.com/ga-dc/project2-gallery](https://github.com/ga-dc/project2-gallery/issues/new?body=Link%20to%20repo%3A%0ALink%20to%20deployed%20app%3A%0A%0AThings%20you%27d%20like%20specific%20feedback%20on%3A%0A%0A)

You must turn in something before presentations begin. However, you're welcome
to continue working on it over the course of WDI and beyond!

With your submission please include any questions you'd like answered, or
specific things on which you'd like us to focus when giving feedback.

### Necessary Deliverables

Your submission must include **all** of the following:

### Project Idea and Initial Planning

You need to submit:

1. Your project idea (a brief 2-3 sentence description of your app)
2. A list of your models and their properties

These and any other planning assets (wireframes, user stories, etc) should go
inside a `planning/` directory inside your Project 2 repository. Planning and Process is one category by which we will be [evaluating your project](evaluation.md).

### Screencast

Instead of presenting your project like we did with Project 1, you will be
recording a screencast. For more information on the screencast (including tips
on how to make one), read through the [presentation](presentations.md)
documentation. Your screencast is due with your final project (on the last day
of Project Week).

### Final Application

Your project is due on the last day of Project Week (the exact date is in your
course calendar). Create an issue on [the project2-gallery
repository](https://github.com/ga-dc/project2-gallery) containing:

* A link to your Project 2 Github repository (Do not fork this repo)
* A link to your [screencast presentation](presentations.md) published to
  YouTube or Vimeo

Your repository should contain:

* A working full-stack application (built by you) that meets the technical
  requirements above.
* Frequent commits dating back to the very beginning of the project.
* A `readme.md` file in the root of your repo that follows [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown) (i.e. explanations of the technologies used, the approach taken, features, installation instructions, unsolved problems, etc.)
* A `planning/` directory in the root of your repo containing a diagram mapping out your project domain. You are welcome to include other planning documents (e.g., wireframes, user stories).
* A link to your hosted, working application in the URL section of your Github repo:

> ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

## Asking For Help

### GitHub Issues

Most of the support instructors will be offering during this project will be via GitHub, on the issues section of this repo. This is to mirror "in-the-wild" practices. Developers often interact with (and receive help from) each other via GitHub issues.

We've provided a template for you to fill in when posting an issue to receive help. The more detailed you make your issue, the easier it will be for us to help you. That, and the added benefit that the more you think through your issue, the more likely you are to solve it yourself!

A good GitHub issue has the following:

* A detailed explanation of what the issue or error is
* An even more detailed explanation for why you think the error is happening
  (remember that all bugs and errors happen for logical reasons!).

### Open Office Hours

Instructors will be offering in-person support every weekday during Open Office Hours (10:00am - 12:00pm).

Students will be limited to 10 minutes at a time with one-on-one instructor
support during Open Office Hours. We are doing this for two reasons:

1. To ensure we can support ALL students during a session
2. To give you the opportunity to work through the problem yourself

### Maximizing Effectiveness of Support Sessions

Prior to a one-on-one during Open Office Hours, students must file an issue on
this repository in order to provide the instructor with a point of reference
regarding your code and the issue you are having. This really helps us give you
more effective guidance!

When you submit an issue please include the following:

1. A code snippet
2. A precise and specific description of your issue
3. What error you got
4. Why you think the error is happening
5. What you already tried to resolve your error and the result of those attempts

We also strongly recommend using Slack to get help from your classmates. Chances
are you all will be running into similar problems.

## Planning

1. [Watch this video on the Minimum Viable Product](https://www.youtube.com/watch?v=1FoCbbbcYT8)
2. Begin with the end in mind. Spend a dedicated block of time planning with wireframes and user stories so you don't waste time building things you don't need.
3. Write pseudocode before you write actual code. Thinking through the logic of something helps streamline your process.
4. User stories define what a specific type of user wants to accomplish with your application. It's tempting to just use your list of user stories as a todo list, but try to avoid this. If you keep your user stories small and focused on what a user cares about being able to do. This will help you prioritize your tasks and which features to build.

> [Definition of User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)

### Building Out from your Plan

After planning your app:

1. Start with building your models and linking them to the database. Create a couple pieces of seed data so that can see data retrieved from your database (by a mongoose model) show up on the page later.
2. Build your controllers and routing, to 'funnel' or direct the data into your handlebars views.
3. Build your views and add CSS styling.
4. Add new features!

## Getting Unstuck

* Don't hesitate to write messy code to solve short-term problems -
  ***Refactor later***
* Read the docs for whatever technologies you use. The docs often include a tutorial that can help you get started, and learning to read documentation is crucial to your success as a developer.

## Potential Project Ideas

### Keep

Keep is an application that lets users save and bookmark links! Save articles,
tutorials, GitHub repos - you name it!

For this application, a user should be able to create an account (sign up) and
sign in again later. They should have a page where they can see all of their
saved bookmarks, be able to easily add new bookmarks and edit or delete existing bookmarks.

As a possible bonus, users should be able to add tags to bookmarks, so they can group similar bookmarks together. There should be a way for users to see all the bookmarks they've created and find bookmarks based on a particular bookmark.

### Photo Sha.re

Photo Share lets users create albums of photos and share them with other users.

For this application, a user should be able register an account (sign up and sign in) and create albums of photos. At first, an album is just a collection of links to photos with a title and description.

As a possible bonus, users can see the albums of other users and can comment on photos from other users.

As a super bonus, users can upload images. Handling uploads can be tricky, so
speak to an instructor about this first!

### Gif Library

Gif Library lets users save and bookmark their favorite gifs from Giphy for easy access when they need a witty gif in a pinch! Users can register an account (sign up and sign in) and save links to gifs.

As a bonus, users can tag gifs, see all their tags and list all the gifs with a particular tag on a page.

### Other Ideas

* A StackOverflow-style question/answer page
* Reddit / Hacker news style clone (maybe for specific topic like restaurants, or political news articles)
* Recipe / ingredients manager

### Bonus Features to Implement

* Nest one of your resources inside another one using subdocuments
* Relate two resources to each other using refs
* Use information from a 3rd party API and integrate it with your mongoose
  models
* Let users sign in with a third-party account (Facebook, Twitter, GitHub, etc.)
* Paginate your list views
* Allow users to upload images to your application, and persist these images.

## Tips

Here are some tips and best practices to follow while you build out your project:

* **One or two easy features, One really hard feature**. Don't try to build out a ton of features, instead focus on building a few features well. Of those features, some should be straightforward while one pushes you outside your comfort zone.
* **Commit early, commit often.** If you're committing often, you don't need to be afraid of breaking something because you can always go back in time to a previous version.
* **Plan.** Think through each feature, wireframe it and write user stories.
* **Prototype.** Don't just start adding packages or features to your project on the master branch! Create another branch to prototype it. If it works, great!  Merge it in with master. If not, great! Delete the branch.
* **Work on one thing at a time.** This goes in to committing early and often. Don't bounce from one feature to the next. At the end of the day, you'll have 3 half implemented features when you could have 1 well implemented feature.
* **Write tests.** Write a lot of tests. How will you know if some code you added broke something? Run your tests.

## Resources

* [HackDesign](https://hackdesign.org/lessons) (beginner's reference for
  thinking like a designer)
* [UX Design for
    Developers](https://hackernoon.com/ux-design-for-developers-d3429200a1da)
* [Writing Good User Stories](http://www.mariaemerson.com/user-stories/)
* [Presenting Information
  Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)
* [Seed Data Generator](https://www.mockaroo.com/)

## Pre-employment checklist

Make sure your project looks professional and presentable when you go to apply
for jobs by completing some (or all) of the following:

- [ ] Add the deployed URL to repo settings
- [ ] Add a readme with:
  - [ ] An embedded screenshot of the app
  - [ ] Explanations of the **technologies** used
  - [ ] **Installation instructions** for any dependencies
  - [ ] Link to your **user stories** – who are your users, what do they want
    and why?
  - [ ] Link to your **wireframes** – sketches of major views / interfaces in
    your application
  - [ ] Descriptions of any **unsolved problems** or **major hurdles** you had
    to overcome
- [ ] Add your project to your portfolio site
  - [ ] Include an image, title, and brief description
  - [ ] Link to both the deployed project and the repository on GitHub
- [ ] Write and share a post linking to your project on LinkedIn. Be sure to
    include:
    - An image/screenshot of your project
    - A link to the deployed version of your project
    - A brief description of the project, mentioning that you are a new
        developer
    - Appropriate tags for your post: `#webdevelopment`, `#developers`, `#softwaredevelopment`, `#softwareengineers`
- [ ] Write and share a post linking to your project on Twitter. Be sure to
    include:
    - An image/screenshot of your project
    - A link to the deployed version of your project
- [ ] Write and publish a brief blog post about your project to Medium or
    Dev.to:
    - Include what you decided to build, how you approached building, the
        "phases" you went through, one particularly challenging technical hurdle
        and how you overcame it, and a conclusion
    - Include lots of images, code snippets, and screenshots
    - Include a link to your repo and deployed project

## Plagiarism

Take a moment to re-familiarize yourself with the [plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md), specifically on using work you find online and on work you do with other students.

We give assignments like this to give you the opportunity to review the material in class in a practical manner. By building something using what you've learned in class, you'll be reviewing the material and gaining a deeper understanding of it.

These assignments are similar to those you can expect when applying for a job, either in the form of a take-home coding challenge or an in-person technical interview. So it's important that you put in your best effort now and challenge yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here.  First, try reviewing the previous lessons and exercises. Go easy on yourself, you're still learning! If you're still struggling after that, come to office hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution branch. That's just going to put you at a disadvantage when you're interviewing for a job.
