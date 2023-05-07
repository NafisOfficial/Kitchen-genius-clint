import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf  from '../PDF/PDF'

const Blog = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    The differences between uncontrolled and controlled components !!!
                </div>
                <div className="collapse-content">
                    <p><strong><u>Uncontrolled components</u></strong></p>
                    <div>
                        Uncontrolled components are traditional HTML form elements. In this approach, the form input values are managed by the DOM itself rather than by React. When the user interacts with an uncontrolled component, the DOM handles the state internally, and React is not aware of the changes.
                    </div>
                    <div>
                        Controlled components, on the other hand, have their form input values controlled by React through component state. The component's state is used to track the value of the form input, and any changes to the input trigger an update to the component's state, which in turn triggers a re-render.
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How to validate React props using PropTypes ??
                </div>
                <div className="collapse-content">
                    <div>
                        <p>
                            In versions of React prior to 15.5, PropTypes were used to validate the props passed to React components. However, since React 15.5, PropTypes have been moved to a separate package called prop-types. The prop-types package allows you to define the expected types and shapes of the props that a component should receive.
                        </p>
                        <p>
                            1.To use PropTypes in React, you first need to install the prop-types package.
                            2.Once installed, you can import the necessary functions from prop-types in your component file.
                            3.Then, you can define the propTypes for your component by adding a propTypes object to your component.
                        </p>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    The difference between nodejs and express js!!!
                </div>
                <div className="collapse-content">
                    <div>
                        <p><strong>Node JS:</strong></p>
                        <div>
                            Node.js is an open-source runtime environment that allows you to run JavaScript code on the server-side. It uses the V8 JavaScript engine, which is the same engine that powers Google Chrome.
                        </div>
                    </div>
                    <div>
                        <p><strong>Express JS:</strong></p>
                        <div>
                            Express.js is a minimalistic web application framework built on top of Node.js. It provides a set of features and utilities that make it easier to build web applications and APIs. Express.js adds structure and simplifies the process of handling HTTP requests, routing, and middleware management.
                        </div>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a custom hook, and why will you create a custom hook???
                </div>
                <div className="collapse-content">
                    <div>
                        <p>Custom Hook
                        </p>
                        <div> a custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks provide a way to encapsulate and share common functionality between components without the need for inheritance or higher-order components.</div>
                        <p>Using purpose:</p>
                        <div>
                            <p>1.Reusability</p>
                            <p>2.Logic abstraction</p>
                            <p>3.State management</p>
                            <p>4.Community and code sharing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around my-5">
            <PDFDownloadLink document={<Pdf />} filename="FORM">
              {({ loading }) =>
                loading ? (
                  <button className="btn btn-secondary">Loading Document...</button>
                ) : (
                  <button className="btn btn-secondary">Download Blog pdf</button>
                )
              }
            </PDFDownloadLink>
            </div>
        </div>
    );
};

export default Blog;