# 🎫 Ticketing App

This is a microservice-based architecture for a ticketing app. The app allows users to post tickets, and other users can place orders to purchase those tickets with actual payment.

## Technologies Used


- ![](https://img.shields.io/badge/-NATS%20Streaming%20Server-blue) : A high-performance messaging system that provides reliable message delivery and other features. NATS Streaming Server is used to implement event-based communication between the different microservices.

- ![](https://img.shields.io/badge/-Redis-pink) : An in-memory data store that can be used as a database, cache, and message broker. Redis is used in the expiration microservice to store information about the orders that have expired.

- ![](https://img.shields.io/badge/-Bull.js-red) : A Node.js library for creating and managing job queues. Bull.js is used in the expiration microservice to handle the notification of expired orders.

- ![](https://img.shields.io/badge/-Kubernetes-grey) : An open-source system for automating deployment, scaling, and management of containerized applications. Kubernetes is used to manage the deployment and scaling of the different microservices.

- ![](https://img.shields.io/badge/-Docker-orange) : A platform that allows developers to build, package, and deploy applications as containers. Using Docker ensures that the application can be run consistently across different environments.

- ![](https://img.shields.io/badge/-Skaffold-blue) : A command-line tool that facilitates the development workflow for Kubernetes applications. Skaffold is used to simplify the development and testing of the different microservices.

- ![](https://img.shields.io/badge/-bhavyabhut.developer/common-pink) @: A custom NPM package that contains common code and functionality that is shared between the different microservices.

- ![](https://img.shields.io/badge/-Stripe.js-green) : A set of tools and APIs that allow developers to easily integrate payment processing into their applications. Stripe.js is used in the payment microservice to handle payment processing.

- ![](https://img.shields.io/badge/-Next.js-grey) : A React framework that provides a server-side rendering and other performance optimizations out of the box. Next.js is used for the client-side of the application.

- ![](https://img.shields.io/badge/-Express-orange): A popular Node.js framework for building web applications. Express is used for building the API endpoints in the different microservices.

- ![](https://img.shields.io/badge/-Node.js-blue): A JavaScript runtime that allows developers to run JavaScript code outside of the browser. Node.js is used as the server-side runtime for the different microservices.

- ![](https://img.shields.io/badge/-TypeScript-grey): A superset of JavaScript that adds optional static typing, among other features. TypeScript is used to write the code for the different microservices, which helps catch errors at compile-time instead of run-time.

- ![](https://img.shields.io/badge/-React-red) : A popular JavaScript library for building user interfaces. React is used for the client-side of the application.


- ![](https://img.shields.io/badge/-MongoDB-yellow) : a NoSQL database that stores data in JSON-like documents. MongoDB is used to store the data for the different microservices.


- ![](https://img.shields.io/badge/-JWT-red) : JSON Web Tokens are a standard for representing claims securely between parties. JWT is used for authentication in the auth microservice.



## Microservices


- **Auth Service**: The Auth service handles user authentication and provides JWT tokens to the client. It includes functionality for user sign up, sign in, sign out, and user creation. The service uses JWT tokens to authenticate users across different microservices.

- **Client Service**: The Client service is responsible for the user-facing Next.js client web application. The web application allows users to interact with the ticketing system and purchase tickets.

- **Tickets Service**: The Tickets service manages the creation, updating, and retrieval of ticket data. It provides endpoints for users to post a new ticket, view a list of tickets, view a specific ticket, and update an existing ticket.

- **Orders Service**: The Orders service handles the creation and management of orders for tickets. When a user wants to purchase a ticket, they create an order with this service. The service checks to see if the ticket is available and then creates the order. Once an order has been created, the ticket is locked and cannot be purchased by another user. The service also handles the logic for order expiration and notifying the user when an order has expired.

- **Expiration Service**: The Expiration service is responsible for handling expired orders. It checks for expired orders and notifies the Orders service to unlock the ticket so that it can be purchased again.

- **Payment Service**: The Payment service handles the payment processing for orders. It uses Stripe for payment processing and is responsible for charging the user for their ticket purchase.

## Event-Based Communication

The app uses event-driven architecture for communication between microservices, and Nats Streaming Server is used as the event bus.

NATS is a high-performance, lightweight messaging system that enables distributed systems to communicate with each other using a publish-subscribe model. The publish-subscribe model allows messages to be broadcast to multiple recipients, making it an excellent choice for microservices that need to exchange messages.

In the ticketing system, the different microservices communicate with each other using NATS Streaming Server. When an event occurs in one microservice, it publishes a message to a NATS subject. The other microservices that are interested in that event have previously subscribed to that subject, so they receive the message and can take the appropriate action.

For example, when a new ticket is created, the tickets microservice publishes a ticket:created event to the NATS subject ticket:created. The orders microservice has previously subscribed to the ticket:created subject, so it receives the message and creates an empty order for that ticket.

Using a message bus like NATS allows the microservices to be completely decoupled from each other. Each microservice only needs to know about the events that it is interested in, and it doesn't need to know anything about the other microservices that might be listening to those events. This makes it much easier to scale and maintain the system over time.

All of these microservices work together to create a robust and scalable ticketing system. They communicate with each other through event-driven architecture using NATS Streaming Server, and they are deployed using Docker and Kubernetes for scalability and portability.

## Deployment

Docker and Kubernetes are used for deployment, and Skaffold is used for development.

## Getting Started




## License

This project is licensed under the MIT License.
