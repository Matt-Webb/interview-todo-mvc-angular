# Interview Task

This is a standard Todo app from [Todo mvc](http://todomvc.com/) ported into a component based structure. It is using [browserify](http://browserify.org/) ang a [gulp](http://gulpjs.com/) pipeline to bring the project to life. Browserify expects [commonjs](https://nodejs.org/docs/latest/api/modules.html) node's module pattern in order to traverse and concatenate the modules. 

To bring up the project frist run `npm install` to install all the node modules required and then use `gulp dev`. Feel free to explore and modify the gulp tasks. 

Consider it as a task given from a product owner on an existing codebase to you as a part of the dev team. Time management and task prioritization should be in mind.

Consider that you are working in a team with other developers. Use a branching strategy that prevents or minimises code conflicts and promotes isolation and independence. Like [gitflow](http://nvie.com/posts/a-successful-git-branching-model/)

### Part 1
---

	1. Make the code modular, maintainable, testable, improve readability and extensibility

	2. Apply best practices and standards

	3. Feel free to add more tasks to the build process that you think they would benefit the codebase

### Part 2
---

	1. Using WHAPI get all the in-play events and add them as tasks in the the Todo, there shouldnt be any duplicates after reloading and maintaining their state in localstorage is a requirement.

	2. If the task is a william hill event please add a button of show/hide and on click this should display he following information per design.

	3. Create an extra filter which displays only the in-play tasks

	4. Create an extra filter that displays only the events that have already started

	5. Please display on the event row the elapsed time of the match in a human readable format like HH:mm. If the match hasnt started please display the time left to start in a human readable format

	8. Compress and transfer the artefact on this remote using these credentials. Deflate the artefact under your home folder and give the script these permissions and change the owner to jenkins