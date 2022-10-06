import React from 'react';

const Blogs = () => {
    return (
        <div className='container m-5'>
            <h3> Difference between javascript and nodejs?</h3>
            <span>Answer:</span>
            <p> JavaScript is a scripting language. This is an updated version of the ECMA script. JavaScript is a high-level programming language. It is based on prototype inheritance. Otherwise, NodeJS is a cross-platform and open-source JavaScript runtime environment that allows JavaScript to run on server-side. Nodejs allows JavaScript code to run outside the browser.</p>

            <h3>When should you use nodejs and when should you use mongodb?</h3>
            <span>Answer:</span>
            <p>MongoDB is a database where we can store data and NodeJS helps us to connect our client site to the database by its server site.</p>

            <h3> Differences between sql and nosql databases?</h3>
            <span>Answer:</span>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases store documents, key values, graphs, or wide-columns. SQL databases are good for multi-row transactions, while NoSQL is good for unstructured data like documents or JSON.</p>
            <h3>What is the purpose of jwt and how does it work?</h3>
            <span>Answer:</span>
            <p>JWT, or JSON Web Token, is an open value that is used to share security information between two parties - a client and a server. Each JWT contains an encoded JSON object, which contains a set of claims. JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued.</p>


        </div>
    );
};

export default Blogs;