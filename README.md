# easeSmithAssignMent
# Title

  React Developer Interview Assignment (E-commerce Listing Page)

## Objective

   You are tasked with building the UI for an E-commerce Listing Page based
on the provided Figma design. The page should display a list of products, and
each product should have an option to either view the product or add it to the
cart. There will be no dedicated product page, so when a user clicks "View
Product," they should be redirected to a custom Thank You page.
Additionally, when users click "Add to Cart," a modal should open, as per ui
design.

## Tech Stack

    CSS, ReactJs, React Router, React Hooks( useState,useEffect, useNavigate)
## Completion Instructions

### Functionality

#### Must Have

    Header Section:
        search bar for searching products.
        Icons for profile and cart.
    
    Product List Section:
        Display a grid/list of products based on the Figma design.

        Each product card should include:
           i.Product Image
           ii. Product Name
           iii. Price
           iv. "View Product" and "Add to Cart" buttons.

    Clicking "View Product" should redirect the user to a custom "Thank You" page. There will be no product details page, so you are required to design a Thank 
    You page from scratch.

    Add to Cart Modal:
        Clicking “Add to Cart” on any product should open a modal thatdisplays the product’s details  and an option to confirm adding the product to the cart.

    Pagination:
       Implement pagination to navigate through multiple product listings (functional but mock data is acceptable).

    Thank You Page:
       Create a simple "Thank You" page to which users are redirected after clicking "View Product". This page should acknowledge their action with a simple message (e.g., "Thank you for your interest in [Product Name]!").   


    

### Guidelines to develop a project

#### Must Have

    1. ReactJS:
         Use React for building the application with a component-based architecture.

         Structure the code with a focus on clean architecture and componentization.

    2. Componentization:
         Break down the app into reusable components such as ProductCard, Header, Pagination, and AddToCartModal.

         Make sure each component handles a specific functionality.
    3. Routing:
        Use React Router to manage navigation between the product listing page and the Thank You page.

    4. State Management:
         Utilize React hooks or context API for managing state, particularly for pagination, modals, and product actions.

    5. Mock Data:
         Use static or mock data for products (you don't need to implement a backend or API).

   6. Modal Implementation:
         The "Add to Cart" button should trigger a modal displaying the product’s details and a confirmation button to add the product to the cart.



### Submission Instructions

#### Evaluation Creteria

1. How closely does the final design align with the provided Figma
file?

2. Code Quality:
    Are the components modular, cleanly structured, and reusable?

3. Functionality:
   Does the "View Product" button properly redirect to the "Thank You" page?

   Does the "Add to Cart" modal function correctly and display as expected?

4. Attention to Detail:
   Overall polish, including hover states, modals, and the user
experience.



## Resources

### Design files

    https://www.figma.com/design/AvK9THieFnvEKfIIupCr2p/Untitled?node-id=1-2014&t=gT1SiG9uEORZICLj-1



## Project Setup:

   Install dependencies using npm install.
   
   Start the project with npm start.



## Approach:
   I broke the UI down into reusable components like Header, ProductCard, ProductModal, and Pagination, ensuring each handled specific functionality.

   I have used React Router for routing between the pages based user role

   I used React hooks (like useState and useEffect) to manage the state, particularly for controlling the modal visibility, managing cart actions, and handling pagination.

   I created a ProductCard component to display products including an image, name, price, and action buttons for "View Product" and "Add to Cart."

   The layout is responsive and closely follows the Figma design for a polished UI.

   When a user clicks "View Product," they are redirected to a custom "Thank You" page. Since there was no product detail page required, I designed a simple page thanking the user for their interest. 
   after clicking the "View more products" in thanking you page user redirected to Product list page

   Clicking "Add to Cart" opens a modal displaying  with confirm adding it to the cart. I implemented the modal using React’s state management.

   I have used static data for product details and manage the pagination manually using the state.

   I Ensure all UI elements, like buttons and modals, align closely with the Figma design
