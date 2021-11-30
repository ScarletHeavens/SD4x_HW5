In this assignment, I have developed a simple application to track lists of items using React.

I have used the html and css from the course, however I decided to rewrite Class components to React.hooks, as I believe this is the direction React is headed to. 
The bult is accessible here: https://scarletheavens.github.io/SD4x_HW5/
The final list tracker should look like this: 


<img width="763" alt="Screenshot 2021-11-29 at 13 39 43" src="https://user-images.githubusercontent.com/87530494/143893773-b9828c3f-62c0-40ce-9e05-bcfc157f4e4c.png">

The goal of the assignment was to modify the code provided so that the user can:

Create a new list

Add items to that list

Mark items by changing their color

The code has following components:
AddList, which is responsible for taking user input and passing information back to the App component in order to create a new list

Lists, which is empty when the App is first rendered, but contains all instances of individual List components, each of which contains an AddItem component for adding items and ListItem components for all items in the list

Each component is implemented in a separate file, which has the same name as the component.
The App component render two child components: AddList and Lists. The AddList component contains the text input field next to the words “What will be on your next list?” and a button labeled “Create List”. The Lists component by default reads “Add new lists to get started!”, but will eventually display each individual List component, which consists of an AddItem component and ListItem components.

When the user types the name of a new list into the input field of the AddList component and clicks the “Create List” button, the AddList component should call the AddList.handleSubmit function, which should then update its state and then use the App.handleAddList function to update the state of the App (specifically, the “lists” and “items” variables in the state, as described in the code comments and according to the example below).

The App should then re-render, and with the App’s state now containing a new list, the App should pass the necessary information from its state to the Lists component, which will render a new List component representing a single list.

The AddItem.handleSubmit and App.handleAddItem functions and modify the components as necessary so that it is possible for the user to use the AddItem component to add an item to a list and see the ListItem component rendered in the page. In particular, the app should behave as follows:

When the user enters a value in the input field of the AddItem component and clicks the “Submit” button, the AddItem component should call the AddItem.handleSubmit function, which should update the component’s state and then use the App.handleAddItem function to update the state of the App (specifically, the “items” variable in the state, as described in the code comments and according to the example below).

The App should then re-render. It should pass the necessary information from its state to the Lists component, which will then pass it to its List components, which can then render each ListItem with the appropriate values.

Finally, the ListItem.handleClick function: when the user clicks on the content in the ListItem, i.e., within the <span> element. The function should alternate the color of the text in the ListItem between black and gray.

