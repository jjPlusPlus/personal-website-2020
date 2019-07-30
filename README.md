#react-folio
`A personal portfolio project based on React/Redux, backed by Firebase`

___

## Goals
An opportunity to show off React knowledge and practice rapidly scaling a new project.

This project is similar and should work the same as my Ember Portfolio project, building a non-traditional navigation scheme. I don't put a lot of stock in portfolio websites or custom blogs anymore, so I really don't care if people dislike my navigation- I just want to try something new. If you really hate it, just know that it came to me in a dream and I had to do it.

Writing a custom Markdown interpreter. I may still use Medium or Ghost for my day-to-day journaling needs, but I would like to experiment with some custom React components to wrap experimental Markdown implementations.

## Planning
__Routing__
The routing will look like this:
/
/projects
/posts
/about
/resume
/site
/admin  

__Firebase integration__
need to connect to firebase

__Integrating Redux, Sagas, and Normalizr/Reselect

__Many to many relationship__
a post can have many tags, a tag can have many posts?

__List Pages__
/projects and /posts are very similar and should be componentized
Each display a list of resources from the API

__List Item Details__
/projects and /posts will also have very similar (*but different in this case*) item detail pages

__Admin__
Will need to work in firebase auth before getting to the editor

__Markdown__
Will need to find or create a markdown editor/display
