var Bacon = React.createClass({

    render: function() {

        return (
            <div>
                <h1>Hello</h1>
                <p>Paragraph tag!</p>
            </div>
        )

    }

});


var Movie = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.genre}</h2>
            </div>
        )
    }
});


ReactDOM.render(
    <div>
        <Movie title="Avatar" genre="action" />
        <Movie title="Die Hard" genre="horror" />
        <Movie title="Matrix" genre="comedy" />
    </div>
    , document.getElementById('example'))