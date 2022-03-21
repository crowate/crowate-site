import { tab } from '@testing-library/user-event/dist/tab';
import { Tab } from 'bootstrap';
import React from 'react'
import { TabContainer, TabContent } from 'react-bootstrap';

const Tabs = () => {
    return (
        <>
            <Header title="Building simple Tab component in react" />

            <div className='row'>
                <h2>Tab Component</h2>
                <p>Building Tab component</p>
                <div className='row text-left'>
                    <Tab active={1}>
                        {
                            TabContent.map((tab, idx) => <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>{tab.content}</Tab.TabPane>)
                        }
                    </Tab>
                </div>
            </div>
        </>
    )
}

//https://github.com/codegeous/react-component-depot/tree/master/src/pages/SimpleTabs/index.js
export default Tabs;