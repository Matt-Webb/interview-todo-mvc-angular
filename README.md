# Interview Task

This is a standard Todo app from [Todo mvc](http://todomvc.com/) ported into a component based structure. It is using [browserify](http://browserify.org/) ang a [gulp](http://gulpjs.com/) pipeline to bring the project to life. Browserify expects [commonjs](https://nodejs.org/docs/latest/api/modules.html) node's module pattern in order to traverse and concatenate the modules.

[Lodash](https://lodash.com/) and [moment](http://momentjs.com/) are already available within the build you can just require them within the module you are working on.

To bring up the project first run `npm install` to install all the node modules required and then use `gulp dev`. You can run the tests running `gulp test`.

Consider the following as a task given from a product owner, on an existing codebase, to you working in a team with other developers. Feel free to treat the interviewing developers as teammates, ask them any question you like. You can use any resource you want but keep in mind that you are required to work on this task alone and make sure you understand every bit of code you bring into the codebase.

Time management and task prioritization should be kept in mind.

Use a branching strategy that prevents or minimises code conflicts and promotes isolation and independence. Like [gitflow](http://nvie.com/posts/a-successful-git-branching-model/)

---

Please now continue with the following tasks, in the order of your choosing. Enjoy!

### Refactoring
---

* Improve the code, focussing on modularity, maintainability, testability, readability and extensibility

* While refactoring, try to apply best practices and standards, and make notes / prepare to discuss your changes

* Explore the gulp tasks and see whether you're happy with them. If you feel anything is missing, please add new tasks or at least note which tasks you would want to add

### User story
---

We want to display the next available matches offered by WH as todo tasks.

* Add an additional filter to the "All", "Active" and "Complete" ones. This filter will fetch and display the name of the matches.

To retrieve the matches you must use our WH API [API documentation](WHAPI.md). Reloading the page should keep the task till we remove it and it shouldn't have duplicates (reloading the page shouldn't display the same event twice)

* Create an extra filter which displays only the in-play tasks.

* Create an extra filter that displays only the events that have already started.

* Please display within the extra details of an event task the elapsed time of the match in a human readable format. If the match hasn't started please display the time left to the start, in a human readable format. If the size of the screen is greater than 728px then the time elapsed should be displayed on the same level as the name of the event.

* We want to deploy the application in our web server. In order to do that compress and copy to another directory of your choice the minimum amount of files needed to run the app. How will you automate it as a gulp task?

### Design
![alt text](http://gitlab.williamhill-dev.local/lpapazianis/interview-todo-mvc-angular/raw/master/designs/to-do-all-01.png "Logo Title Text 1")
=======
# interview-todo-mvc-angular
This is an angular oriented interview task on top of the todomcv.com example
>>>>>>> a0da5bcf59cd022d27744999d3c39d3eee731f24
