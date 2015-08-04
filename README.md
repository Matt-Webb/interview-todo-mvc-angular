# Interview Task

This is a standard Todo app from [Todo mvc](http://todomvc.com/) ported into a component based structure. It is using [browserify](http://browserify.org/) ang a [gulp](http://gulpjs.com/) pipeline to bring the project to life. Browserify expects [commonjs](https://nodejs.org/docs/latest/api/modules.html) node's module pattern in order to traverse and concatenate the modules. 

[Lodash](https://lodash.com/) and [moment](http://momentjs.com/) are already available within the build you can just require them within the module you are working on.

To bring up the project first run `npm install` to install all the node modules required and then use `gulp dev`.

Consider the following as a task given from a product owner, on an existing codebase, to you working in a team with other developers.

Time management and task prioritization should be kept in mind.

Use a branching strategy that prevents or minimises code conflicts and promotes isolation and independence. Like [gitflow](http://nvie.com/posts/a-successful-git-branching-model/)

---

Please now continue with the following tasks, in the order of your choosing.

### Refactoring
---

* Improve the code, focussing on modularity, maintainability, testability, readability and extensibility

* While refactoring, try to apply best practices and standards, and make notes / prepare to discuss your changes

* Explore the gulp tasks and see whether you're happy with them. If you feel anything is missing, please add new tasks or at least note which tasks you would want to add

### Enhancements
---

* Using WHAPI get all the in-play events and add them as tasks in the the Todo, there shouldnt be any duplicates after reloading and maintaining their state in localstorage is a requirement.

* If the task is a William Hill event please add a button of show/hide and on click this should display extra information, as per the design.

* Create an extra filter which displays only the in-play tasks

* Create an extra filter that displays only the events that have already started

* Please display on the event row the elapsed time of the match in a human readable format. If the match hasn't started please display the time left to the start, in a human readable format

* Compress and transfer the artefact on this remote using these credentials. Deflate the artefact under your home folder and give the script these permissions and change the owner to jenkins