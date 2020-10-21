# Back-EndRun on https://expatjournalbw1020.herokuapp.com/
## **Endpoints**

| Request | URL | Description | Requires Token |
|----------|----------|----------|----------|
|POST | /signup | register a new user | N |
|POST | /login | login an existing user | N |
|POST | /api/posts | add a new post | Y |
|POST | /api/posts/:id/comments | add a new comment to a specific post | Y|
|POST | /api/categories | add a new category | Y |
|GET | /api/users | get all users | Y |
|GET | /api/users/:id | get  user by id | Y |
|GET | /api/posts | get all posts | Y |
|GET | /api/posts/:id | get post by id | Y |
|GET | /api/posts/:id/comments | get comments of an post by id | Y|
|GET | /api/posts/comments | get all comments | Y |
|GET | /api/posts/comments/:id | get specific comment | Y |
|GET | /api/categories | get all categories | Y |
|GET | /api/categories/:id | get category by id | Y |
|GET | /api/categories/:id/posts | get posts under a certain category | Y |
|PUT | /api/users/:id | update a specific user by id | Y |
|PUT | /api/posts/:id | update a specific post by id | Y|
|PUT | /api/posts/comments/:id | update a specific comment by id | Y |
|PUT | /api/categories/:id | update a category name by id | Y |
|DELETE | /api/users/:id | delete a specific user by id | Y |
|DELETE | /api/posts/:id | delete a specific post by id | Y |
|DELETE | /api/posts/comments/:id | delete a specific comment by id | Y |
|DELETE | /api/categories/:id | delete a specific category by id | Y |

## **Table Requirements**

## **Users**
|Name | Type | Required | Unique | Notes |
|------|------|------|------|------|
| userId | integer | yes | yes | User id (auto generated by API) |
|username | string | yes | yes | User's username |
|password | string | yes | no| User's password |
|email | string | yes | yes | User's email must be unique|



## **posts**
|Name | Type | Required | Unique | Notes |
|------|------|------|------|------|
| postId | integer | yes | yes | post id (auto generated by API)|
|title | string | yes | no | Title of post |
|description | string | yes | no | Description of post |
|imageURL | string | no | no | Optional image url of post |
|username | string | no | no | Foreign key references username in users tbl |

## **Comments**
|Name | Type | Required | Unique | Notes |
|------|------|------|------|------|
|commentId | integer | yes | yes | Comment id (auto generated by API)|
|comment | string | yes | no | Comment regarding the post |
|postId | integer | no | no | References the postId |

## **Login**
If you need to login before you make a POST request to add a new user with the signup form, you can use the following login info:
|Username | Password |
|------|------|------|
|user1 | pass1 | 