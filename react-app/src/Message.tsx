function Message() { 
    const name = 'Billy';
    return <h1>Hello {name ? name : "World"} </h1>;
}

export default Message;