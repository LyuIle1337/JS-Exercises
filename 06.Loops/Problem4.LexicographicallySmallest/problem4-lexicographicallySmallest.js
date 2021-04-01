function getProperties() {
    let documentProps = Object.getOwnPropertyNames(document);
    let windowProps = Object.getOwnPropertyNames(window);
    let navigatorProps = Object.getOwnPropertyNames(navigator);

    console.log(`Document first: ${documentProps[0]}, Document last: ${documentProps[documentProps.length - 1]}`);
    console.log(`Window first: ${windowProps[0]}, Window last: ${windowProps[windowProps.length - 1]}`);
    console.log(`Navigator first: ${navigatorProps[0]}, Document last: ${navigatorProps[navigatorProps.length - 1]}`);
}

getProperties(); //crashes when ran with node.js because in node.js we do not have document,window or navigation defined. 
