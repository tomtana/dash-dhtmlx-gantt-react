import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DhtmlxGantt from 'dhtmlx-gantt-react/src/components/Gantt/Gantt';
import Toolbar from 'dhtmlx-gantt-react/src/components/Toolbar';
import MessageArea from 'dhtmlx-gantt-react/src/components/MessageArea';
import 'dhtmlx-gantt-react/src/components/Gantt/Gantt.css'
//import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_material.css'
import "dhtmlx-gantt/codebase/dhtmlxgantt.css"

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

const data = {
    data: [
        { id: 1, text: 'Task #1', start_date: '2020-02-12', duration: 3, progress: 0.6 },
        { id: 2, text: 'Task #2', start_date: '2020-02-16', duration: 3, progress: 0.4 }
    ],
    links: [
        { id: 1, source: 1, target: 2, type: '0' }
    ]
};

class GanttApp extends Component {
    state = {
        currentZoom: 'Days',
        messages: []
    };

    addMessage(message) {
        const maxLogLength = 5;
        const newMessate = { message };
        const messages = [
            newMessate,
            ...this.state.messages
        ];

        if (messages.length > maxLogLength) {
            messages.length = maxLogLength;
        }
        this.setState({ messages });
    }

    logDataUpdate = (type, action, item, id) => {
        let text = item && item.text ? ` (${item.text})` : '';
        let message = `${type} ${action}: ${id} ${text}`;
        if (type === 'link' && action !== 'delete') {
            message += ` ( source: ${item.source}, target: ${item.target} )`;
        }
        this.addMessage(message);
    }

    handleZoomChange = (zoom) => {
        this.setState({
            currentZoom: zoom
        });
    }

    render() {
        const { currentZoom, messages } = this.state;
        const {id} = this.props;

        return (
            <div id={id}>
                <div className="zoom-bar">
                    <Toolbar
                        zoom={currentZoom}
                        onZoomChange={this.handleZoomChange}
                    />
                </div>
                <div className="gantt-container">
                    <DhtmlxGantt
                        tasks={this.props.data}
                        zoom={currentZoom}
                        onDataUpdated={this.logDataUpdate}
                    />
                </div>
                <MessageArea
                    messages={messages}
                />
            </div>
        );
    }
}


GanttApp.defaultProps = {
    data: data,
    id: "dash-dhtmlx-gantt"
};

GanttApp.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    data: PropTypes.shape(
        {
            data: PropTypes.array,
            links: PropTypes.array

        }
    )

};

export default GanttApp;