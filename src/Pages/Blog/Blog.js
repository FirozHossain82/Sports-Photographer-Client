import React from "react";

const Blog = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold mt-10  text-purple-600">
        Our Blogs
      </h1>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className=" font-bold text-xl text-orange-700">
            1.Difference between SQL and NoSQL?
          </h2>
          <p className="font-bold ">
            RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS):These databases have
            fixed or static or predefined schema,These databases are not suited
            for hierarchical data storage.These databases are best suited for
            complex queries.Vertically Scalable.Follows ACID property.
            Non-relational or distributed database system.They have dynamic
            schema.These databases are best suited for hierarchical data
            storage.These databases are not so good for complex
            queries.Horizontally scalable.Follows CAP(consistency, availability,
            partition tolerance)
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl  text-orange-700">
            {" "}
            2.What is JWT, and how does it work?
          </h2>
          <p className="font-bold">
            JSON Web Token (JWT) is an open standard that defines a compact and
            self-contained way for securely transmitting information between
            parties as a JSON object. This information can be verified and
            trusted because it is digitally signed.User sign-in using username
            and password or google/facebook. Authentication server verifies the
            credentials and issues a jwt signed using either a secret salt or a
            private key. User's Client uses the JWT to access protected
            resources by passing the JWT in HTTP Authorization header
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl text-orange-700">
            3.What is the difference between javascript and NodeJS?
          </h2>
          <p className="font-bold">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.Node. js® is a JavaScript runtime
            built on Chrome's V8 JavaScript engine. Node. js uses an
            event-driven, non-blocking I/O model that makes it lightweight and
            efficient.
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl text-orange-700">
            4.How does NodeJS handle multiple requests at the same time?
          </h2>
          <p className="font-bold">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
