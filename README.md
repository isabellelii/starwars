## Star Wars Fan Application  
 
## Description

Application which displays a overview of all Star Wars resources by using Star Wars public API (swapi.co/api). 

 
## Final objective

- The user opens your app and gets a login screen. He has to login. After a successful login he is navigated to the overview page. If the user is logged in, he can refresh the browser and has not to login again. 
- The user has a list of all Star Wars resources, where he can filter for resource types (like people, starships...).
- The overview should include a search element, which searches anything in the any resource.
- The user clicks on a resource item and gets a detail view over it.

## Final result 
- The user opens your app and gets a login screen. He has to login. After a successful login he is navigated to the overview page. If the user is logged in, he can refresh the browser and has not to login again. Using Devise gem. 
- The user has a list of all Star Wars resources, where he can filter for resource types (like people, starships...). The user can click on a image of the prefered category and will be redirected to this category page. 
- On the choosen category page, the user can view detailed information about the resources within that category.
- The user can also use the search form that exists on every category page to get even more specified information on anthing whiting that resource type. 

## Things that needs improvement on the app
- Create a "load more data" button or a infinite scrolling funciton so more than just one page with resource data can be shown. Now it's just possible to view the first page of the resource data on each category. For example: ("https://swapi.co/api/people/?page=1"). 
- Make it possible to get an even more detailed view of the information when a user search for something. Right now, the user will only be able to see the actual api url for the other resources information. For example, the user searches for "the force awakens" movie in the films page. The user will see a detailed information about title, director and so on, but just see the url for the vehicles, people and species that where in that movie.  


## Getting Started

To view the application localy on your computer: 
1. Clone this repo
2. Run bundle in your terminal to install all the gems included in the project
3. To see the App in the Browser:
In your terminal run the following command to start a local server and run the application:

```
rails s
```
4. Open your browser and visit 
```
http://localhost:3000/
```

## Testing

* Cucumber for feature testing

## Technologies

Ruby on rails
JavaScript
Html
Css

## Authors

* **Isabelle Lidberg**: https://github.com/isabellelii

## Deployed to Heroku 
https://starwarsfanapp.herokuapp.com/ 
