const React = require("react");

const TestClass = class NodeModuleClass extends React.Component {
    render(){
        return (
            <div>
                <p>This has been imported via a custom node Module!</p>
            </div>
        );
    }
};

module.exports = TestClass;