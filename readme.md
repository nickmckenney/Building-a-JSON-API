# ![GA logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building a JSON API

This week, you will build a JSON API from the ground up!. This means we will be
choosing an idea, planning it out with diagrams and notes, and then building it.
This is exciting! We've given you the tools to build what you want, and now
**you** get to decide what you do with it. Now is your chance to exercise your
own creativity in choosing what sort of application you want to build!

**You will be working individually on this project**. You may work alongside
your fellow classmates, but everyone must turn in their own project.

**You must submit your project idea and plan to an instructor.** After
submitting your completed proposal, you will receive feedback. Your plan should
explain what data your model(s) contain.

Remember to focus on your MVP first! **scope creep / feature creep is one of the
biggest pitfalls of any app in development!** This is true not just for
beginners, _but for all developers._

## Description

You will be building a JSON API using Mongoose and Express. In addition, you
will find an API online to pull data from. You'll use this retrieved data to
build your own models, and also to seed your database with.

We recommend you use [axios](https://github.com/axios/axios) and the node
[filesystem](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
to get the data onto your computer. Axios is very similar to fetch, uses
promises, and does an excellent job all around.

There are many great APIs you can use, we'll provide a list of suggestions. As
usual, if you have another idea in mind, just run it by an instructor for
approval.

Since you all have already built several JSON APIs in the last week, the focus
of this project will be around **documentation** and **extra features**.

In addition to building a project, you must document every route in your API.
You can do this in the readme file of the project, or using a tool like Swagger
or apidoc (see below). Every great API has good documentation! You can use the
docs from other APIs as examples for how to write your own.

## Requirements

Your project must satisfy the following requirements:

### Technical Requirements

- Be built using Express and Mongoose.
- Have at least 3 models, with at least one relation between two of them.
- Have complete CRUD functionality implemented with RESTful routes. (You may
  logically distribute CRUD functionality across models. This is only allowed
  when it does not make sense in the context of your application to have full
  CRUD on one model).
- Have its own repository under your GitHub account (do not fork this repo).
- Be deployed to Heroku.
- Have good, clean Javascript code. Only include comments for documentation,
  don't include any non-functional code. Use the auto-formatter regularly!
- Demonstrate a good commit history.
- Have well-documented API routes. You can do this in your readme, or using
  Swagger or apidoc (see below).

The above are minimum requirements. If you want some extra inspiration, try one
of these ideas:

- [Swagger](https://swagger.io/tools/swagger-inspector/)
  - Swagger is a fantastic tool that helps you build new APIs or document
    existing ones. It plays nicely with node and express.
- [apidoc](https://github.com/apidoc/apidoc)
  - apidoc is a tool that lets you describe existing APIs using inline comments
    in your code and will generate documentation for them.
- [Artillery](https://artillery.io/)
  - Artillery is a load-testing toolkit, which is a lot of fun to use.
- [Handlebars](https://www.npmjs.com/package/hbs)
  - Handlebars is an HTML templating language, similar to pug
  - [Here is a lesson on Handlebars that will be helpful](https://git.generalassemb.ly/dc-wdi-node-express/express-views)
  - Have your API render some HTML on the homepage, while also serving JSON on
    other routes.
  - Alternatively, you can use pug instead of HBS. The setup is very similar.
- Authentication w/ JSON web tokens
  - Have your server require an auth token to accept requests.
  - http://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api

Review the [Rubric](evaluation.md) for the specifics of how your project will be
graded.

## Submission

**_DO NOT FORK THIS REPOSITORY!_** Create a **new** repository. Then, submit
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

1. Your project idea (a brief 2-3 sentence description of your app). This should
   include the API you want to pull data from.
2. A list of your models and their properties.

These and any other planning assets (wireframes, etc) should go inside a
`planning/` directory inside your Project 2 repository. Planning and Process is
one category by which we will be [evaluating your project](evaluation.md).

### Presentation

Instead of presenting your project like we did with Project 1, you will be
recording a screencast. For more information on the screencast (including tips
on how to make one), read through the [presentation](presentations.md)
documentation. Your screencast is due with your final project (on the last day
of Project Week).

You must prepare a 3-5 minute presentation for the class. Here are a few things
you could include in your presentation:

- What API you chose and why
- Your models and how you developed them
- A Postman demonstration
- A walkthrough or demonstration of the extra feature you chose

### Final Application

Your project is due on the last day of Project Week (the exact date is in your
course calendar). Create an issue on
[the project2-gallery repository](https://github.com/ga-dc/project2-gallery)
containing:

- A link to your Project 2 Github repository (Do not fork this repo)
- A link to your project deployed on Heroku

Your repository should contain:

- A working full-stack application (built by you) that meets the technical
  requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `readme.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A `planning/` directory in the root of your repo all of your planning notes
  and any relevant diagrams (models, research notes, etc).
- A link to your hosted, working application in the URL section of your Github
  repo:

> ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

## Asking For Help

### GitHub Issues

Most of the support instructors will be offering during this project will be via
GitHub, on the issues section of this repo. This is to mirror "in-the-wild"
practices. Developers often interact with (and receive help from) each other via
GitHub issues.

We've provided a template for you to fill in when posting an issue to receive
help. The more detailed you make your issue, the easier it will be for us to
help you. That, and the added benefit that the more you think through your
issue, the more likely you are to solve it yourself!

A good GitHub issue has the following:

- A detailed explanation of what the issue or error is
- An even more detailed explanation for why you think the error is happening
  (remember that all bugs and errors happen for logical reasons!).

### Open Office Hours

Instructors will be offering in-person support every weekday during Open Office
Hours (10:00am - 12:00pm).

Students will be limited to 20 minutes at a time with one-on-one instructor
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
2. Begin with the end in mind. Spend a dedicated block of time planning your
   project on the first day.
3. Write pseudocode before you write actual code. Thinking through the logic of
   something helps streamline your process.

### Building Out from your Plan

After planning your app:

1. Start with building your models and linking them to the database. Create a
   couple pieces of seed data so that you can see data retrieved from your
   database (by a mongoose model) show up on the page later.
1. Retrieve your data from the API.
1. Seed the database using your models and newly retrieved data.
1. Build your routes.

## Getting Unstuck

- Don't hesitate to write messy code to solve short-term problems - **_Refactor later_**
- Read the docs for whatever technologies you use. The docs often include a
  tutorial that can help you get started, and learning to read documentation is
  crucial to your success as a developer.

## Potential APIs to use

- https://api.nasa.gov/
- https://developer.nytimes.com/
- https://www.api-football.com/
- https://developer.musixmatch.com/
- https://restcountries.eu/
- http://urbanscraper.herokuapp.com/
- https://www.wordsapi.com/
- https://www.themoviedb.org/documentation/api
- https://www.nutritionix.com/business/api
- https://pypi.org/project/nba-api/

## Tips

Here are some tips and best practices to follow while you build out your
project:

- **One or two easy features, One really hard feature**. Don't try to build out
  a ton of features, instead focus on building a few features well. Of those
  features, some should be straightforward while one pushes you outside your
  comfort zone.
- **Commit early, commit often.** If you're committing often, you don't need to
  be afraid of breaking something because you can always go back in time to a
  previous version.
- **Plan.** Think through each feature, wireframe it and write user stories.
- **Prototype.** Don't just start adding packages or features to your project on
  the master branch! Create another branch to prototype it. If it works, great!
  Merge it in with master. If not, great! Delete the branch.
- **Work on one thing at a time.** This goes in to committing early and often.
  Don't bounce from one feature to the next. At the end of the day, you'll have
  3 half implemented features when you could have 1 well implemented feature.

## Resources

- [HackDesign](https://hackdesign.org/lessons) (beginner's reference for
  thinking like a designer)
- [UX Design for Developers](https://hackernoon.com/ux-design-for-developers-d3429200a1da)
- [Writing Good User Stories](http://www.mariaemerson.com/user-stories/)
- [Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)
- [Seed Data Generator](https://www.mockaroo.com/)

## Pre-employment checklist

Make sure your project looks professional and presentable when you go to apply
for jobs by completing some (or all) of the following:

- [ ] Add the deployed URL to repo settings
- [ ] Add a readme with:
  - [ ] An embedded screenshot of the app
  - [ ] Explanations of the **technologies** used
  - [ ] **Installation instructions** for any dependencies
  - [ ] Descriptions of any **unsolved problems** or **major hurdles** you had
        to overcome
- [ ] Add your project to your portfolio site
  - [ ] Include an image, title, and brief description
  - [ ] Link to both the deployed project and the repository on GitHub
- [ ] Write and share a post linking to your project on LinkedIn. Be sure to
      include:
  - An image/screenshot of your project
  - A link to the deployed version of your project
  - A brief description of the project, mentioning that you are a new developer
  - Appropriate tags for your post: `#webdevelopment`, `#developers`,
    `#softwaredevelopment`, `#softwareengineers`
- [ ] Write and share a post linking to your project on Twitter. Be sure to
      include:
  - An image/screenshot of your project
  - A link to the deployed version of your project
- [ ] Write and publish a brief blog post about your project to Medium or
      Dev.to:
  - Include what you decided to build, how you approached building, the "phases"
    you went through, one particularly challenging technical hurdle and how you
    overcame it, and a conclusion
  - Include lots of images, code snippets, and screenshots
  - Include a link to your repo and deployed project

## Plagiarism

Take a moment to re-familiarize yourself with the
[plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md),
specifically on using work you find online and on work you do with other
students.

We give assignments like this to give you the opportunity to review the material
in class in a practical manner. By building something using what you've learned
in class, you'll be reviewing the material and gaining a deeper understanding of
it.

These assignments are similar to those you can expect when applying for a job,
either in the form of a take-home coding challenge or an in-person technical
interview. So it's important that you put in your best effort now and challenge
yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here.
First, try reviewing the previous lessons and exercises. Go easy on yourself,
you're still learning! If you're still struggling after that, come to office
hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution
branch. That's just going to put you at a disadvantage when you're interviewing
for a job.
