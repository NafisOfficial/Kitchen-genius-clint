import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const Pdf = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>The Answers</Text>
                <Text style={styles.title}>
                    The differences between uncontrolled and controlled components !!!
                </Text>
                <Text style={styles.text}>
                    Uncontrolled components
                    
                        Uncontrolled components are traditional HTML form elements. In this approach, the form input values are managed by the DOM itself rather than by React. When the user interacts with an uncontrolled component, the DOM handles the state internally, and React is not aware of the changes.
                    


                </Text>
                <Text style={styles.text}>
                    
                        Controlled components, on the other hand, have their form input values controlled by React through component state. The component's state is used to track the value of the form input, and any changes to the input trigger an update to the component's state, which in turn triggers a re-render.
                    
                </Text>
                <Text style={styles.title}>
                    How to validate React props using PropTypes?
                </Text>
                <Text style={styles.text}>
                    
                        In versions of React prior to 15.5, PropTypes were used to validate the props passed to React components. However, since React 15.5, PropTypes have been moved to a separate package called prop-types. The prop-types package allows you to define the expected types and shapes of the props that a component should receive.
                    
                    
                        1.To use PropTypes in React, you first need to install the prop-types package.
                        2.Once installed, you can import the necessary functions from prop-types in your component file.
                        3.Then, you can define the propTypes for your component by adding a propTypes object to your component.
                    
                </Text>
                <Text style={styles.title}>
                    The difference between nodejs and express js!!!
                </Text>
                <Text style={styles.text}>
                    Node JS:
                    
                        Node.js is an open-source runtime environment that allows you to run JavaScript code on the server-side. It uses the V8 JavaScript engine, which is the same engine that powers Google Chrome.
                    

                </Text>
                <Text style={styles.text}>
                    Express JS:
                    
                        Express.js is a minimalistic web application framework built on top of Node.js. It provides a set of features and utilities that make it easier to build web applications and APIs. Express.js adds structure and simplifies the process of handling HTTP requests, routing, and middleware management.
                    
                </Text>
                <Text style={styles.title}>
                    What is a custom hook, and why will you create a custom hook???
                </Text>
                <Text style={styles.text}>
                    
                        Custom Hook
                        
                         a custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks provide a way to encapsulate and share common functionality between components without the need for inheritance or higher-order components.
                        Using purpose:
                        
                            1.Reusability
                            2.Logic abstraction
                            3.State management
                            4.Community and code sharing
                        
                    
                </Text>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        ` ${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default Pdf;