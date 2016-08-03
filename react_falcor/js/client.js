const React = require('react');

const $ref = falcor.Model.ref;
const $atom = falcor.Model.atom;

const model = new falcor.Model({
    cache: {
        ingredientsById: {
            1: {
                name: "chicken",
                description: "chopped"
            },
            2: {
                name: "onion",
                description: "you're gonna cry"
            }
        },
        recipes: [
            {
                name: "Salad",
                instruction: "Chop, toss, mix",
                ingredients: [
                    $ref("ingredientsById[1]"),
                    $ref("ingredientsById[2]")
                ],
                authors: $atom(["Anton", "Gosia"])
            }, {
                name: "Soup",
                instruction: "Boil, peel, eat",
                ingredients: [
                    $ref("ingredientsById[1]")
                ],
                authors: $atom(["Alex", "Dina"])
            }
        ]
    }
});
model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instruction", "authors"]')
    .then( data => {
        console.log(data);
    });
model.get(['recipes', 0, ['name', 'instruction']]);

const model = new falcor.Model({
    cache: {
        users: [
            {
                id: 1,
                email: "WMadjid@eros.org",
                username: "SMarr",
                password: "XGIgI"
            },
            {
                id: 2,
                email: "MPeterson@ac.com",
                username: "WLoban",
                password: "rWQmv"
            },
            {
                id: 3,
                email: "ATraficante@hendrerit.org",
                username: "KMoffett",
                password: "mvq5y"
            }
        ]
    }
});


const App = React.createClass({
    render() {
        return <h1>ho lol</h1>
    }
});

React.render( <App />, window.document.getElementById('target') );
