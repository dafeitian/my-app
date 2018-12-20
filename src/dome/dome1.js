/////////////////////////////////////////////////////////////////////////////
// Dependency
// React
import React from 'react';
// RUI
import {
    // Core
    RUICore, RUIView,

    // Taglib
    Buttons,
    Button,
    Form,
    Grid,
    Panel,
    Segment,
    LovTable,

    // Utils
    URL,
    request,
} from "rui";

const {
    FormTitle,
    StringInput,
    NumberInput,
    DateInput,
    LovInput,
    Dropdown,
    MultiSelect,
} = Form;

const {
    GridTitle,
    Columns,
    StringColumn,
    NumberColumn,
    DateColumn,
    DropdownColumn,
    MultiSelectColumn,
} = Grid;

/////////////////////////////////////////////////////////////////////////////
// View
//
class dome1 extends RUIView {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel>

            </Panel>
        )
    }

    // defer = "defer"
    componentDidMount = () => {
        this.props.invoke("loadData");
    }
}

/////////////////////////////////////////////////////////////////////////////
// Model
//
const modeldome1 = RUICore.createModel({
    effects: {

        * loadData({payload}, RUI) {

            // const yyyy = yield RUI.getObject("xxxxx");
            // const url = new URL("yyyyyy");
            // yield RUI.invoke("yourFn1", params)
            // ...

        },


        * yourFn1({payload}, RUI) {

            // const yyyy = yield RUI.getObject("xxxxx");
            // const url = new URL("yyyyyy");
            // ...

        },
    },
});

/////////////////////////////////////////////////////////////////////////////
// Export
//
export default RUICore.buildVMFactory(dome1, modeldome1)

