# ![GA logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project: Building a JSON API

This week, you will build a JSON API from the ground up!. This means we will be
choosing an idea, planning it out, and then building it.
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
will find a dataset online to pull data from. You'll use this retrieved data to
build your own model(s), and also to seed your database with.

We recommend you use [axios](https://github.com/axios/axios) and the node
[filesystem](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
to get the data onto your computer. Axios is very similar to fetch, uses
promises, and does an excellent job all around.

There are many great APIs you can use, and we'll provide a list of suggestions. As
usual, if you have another idea in mind, just run it by an instructor for
approval.

Since you all have already built a JSON API, the additional focus
of this project will be around **documentation** and **extra features**.

In addition to building your API, you must document every route.
You can do this in the Readme file of the project, or using a tool like Swagger
or apidoc (see below). Every great API has great documentation to go with it! You can use the docs from other APIs as examples for how to write your own.

## Requirements

Your project must satisfy the following requirements:

### Technical Requirements

- Be built using Express and Mongoose.
- Have at least one model.
- Have complete CRUD functionality implemented with RESTful routes. (You may
  logically distribute CRUD functionality across models, should you decide to implement more than one. This is only allowed
  when it does not make sense in the context of your application to have full
  CRUD on one model).
- Have its own repository under your GitHub account (do not fork this repo).
- Be deployed to Heroku (we will have a lesson on this later this week).
- Have good, clean Javascript code. Only include comments for documentation,
  and don't include any non-functional code. Use the auto-formatter regularly!
- Demonstrate a good commit history.
- Have well-documented API routes. You can do this in your Readme, or using
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
- Authentication w/ JSON web tokens
  - Have your server require an auth token to accept requests.
  - http://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api

Review the [Rubric](evaluation.md) for the specifics of how your project will be
graded.

## Submission

**_DO NOT FORK THIS REPOSITORY!_** Create a **new** repository. Then, submit
your project as an issue to this repo:

[github.com/ga-dc/project2-gallery](https://github.com/ga-dc/project2-gallery/issues/new)

With your submission please include any questions you'd like answered, or
specific things on which you'd like us to focus when giving feedback.

Your submission must include **all** of the following:

### Necessary Deliverables

Your project is due on the the date is in your
course calendar. Create an issue on
[the project2-gallery repository](https://github.com/ga-dc/project2-gallery)
containing:

- A link to your Github repository (Do not fork this repo)
- A link to your project deployed on Heroku

Your repository should contain:

- A working application (built by you) that meets the technical
  requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `readme.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A link to your hosted, working application in the URL section of your Github
  repo:

> ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

## Planning

1. [Watch this video on the Minimum Viable Product](https://www.youtube.com/watch?v=1FoCbbbcYT8)
2. Begin with the end in mind. Spend a dedicated block of time planning your
   project on the first day.
3. Write pseudocode before you write actual code. Thinking through the logic of
   something helps streamline your process.

### Building Out from your Plan

After planning your app:

1. Start with building your model(s) and linking them to the database. Create a
   couple pieces of seed data so that you can see data retrieved from your
   database (by a mongoose model) show up on the page later.
1. Retrieve your data from the API.
1. Seed the database using your models and newly retrieved data.
1. Build your routes.

## Getting Unstuck

- Don't hesitate to write messy code to solve short-term problems - **_Refactor
  later_**
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
- [A collective list of free APIs for use in software and web development.](https://github.com/public-apis/public-apis)

You could also use one of the
[Data is Plural](https://docs.google.com/spreadsheets/d/1wZhPLMCHKJvwOkP4juclhjFgqIY8fQFMemwKL2c64vk/edit#gid=0) or [Kaggle](https://www.kaggle.com/datasets)
data sets. Data is Plural is a weekly email newsletter of interesting and unique
datasets and APIs. Their archive contains every dataset or API they've featured.

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

- [A collective list of free APIs for use in software and web development.](https://github.com/public-apis/public-apis)
- [Lucidchart - great for making ERDs](https://www.lucidchart.com/pages/home)
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
