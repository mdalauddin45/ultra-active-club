import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h1 className='h-text'>Question <hr /> </h1>
            <div className='question'>
           <div>
           <h1>How does React work?</h1>
            <p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
           </div>
<div>
<h1>What is the difference between state and props in React?</h1>
<h3>State</h3>
<p>
The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

A Component manages its own state internally. Besides setting an initial state, it has no business fiddling with the state of its children. You might conceptualize state as private to that component.
</p>
<h3>Props</h3>
<p>Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.</p>
</div>
<div>
<h1>How many the useEffect Hook Works (without Api data load(fetch))</h1>
<h3>1.Run useEffect on State Change</h3>
<h3>2.Run useEffect When a Prop Changes</h3>
<h3>3.Re-fetch When Data Changes</h3>
</div>
        </div>
        </div>
    );
};

export default Question;