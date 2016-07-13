var Comment = React.createClass({

    edit: function(){
        console.log('editting');
    },
    delete: function () {
        console.log('removing');
    },
    render: function() {
        return (
            <div>
                <div>{this.props.children}</div>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.delete}>Delete</button>
            </div>
        );
    }
});


var Checkbox = React.createClass({

    getInitialState: function () {
        return {checked: false};
    },

    handleChecked: function () {
        this.setState({ checked: !this.state.checked });
    },

    render: function () {

        var msg;

        if(this.state.checked){
            msg = 'checked';
        } else {
            msg = 'unchecked';
        }

        return (
            <div>
                <input onChange={this.handleChecked} type="checkbox"/>
                <h2>{msg}</h2>
            </div>
        )
    }
});

ReactDOM.render(
    <div>
        <Comment>Sample comment</Comment>
        <br/>
        <br/>
        <Checkbox/>
    </div>
    , document.getElementById('example'))