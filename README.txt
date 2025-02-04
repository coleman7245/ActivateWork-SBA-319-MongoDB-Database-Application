MongoDB Database Application by Derek Coleman

Summary:

This program takes an http request via the Thundercloud extension and retrieves from or inserts into the Mongo database. The data 
revolves around video games and is split into three categories:

Companies: company_id as a String
           name as a String
           country as a String
           active as Boolean

Genre: genre_id as a String
       name as String

Title: title_id as a String
       name as a String
       genre as a String
       company as a String

All routes in the URL can send receive GET, POST, PATCH, and DELETE requests to the database. Data is validated through the 
schema of each mode and routes are created for search efficiency.

Templates for testing:

Company: 
{
  "company_id" : "something",
  "name" : "Something",
  "country" : "Something",
  "active" : false
}

Genre:
{
    "genre_id" : "something",
    "name" : "something",
    "description" : "Something"
}

Title:
{
    "title_id": "something",
    "name": "Something",
    "company": "Something",
    "genre": "Something"
}