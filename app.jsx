class Count extends React.Component {

    constructor() {
        this.state = {count: 0};

    }

    update() {
        this.setState({
            count: ++ this.state.count
        });
    }

    render() {
        return(
            <div>
                <h1>Hello World!  Count:</h1>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

React.render(
    <Count/>,
    document.getElementById('content')
);