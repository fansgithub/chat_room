import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { Button, Validator as V, StickyHeader, StickyFooter  } from 'h5-components';
import store from './app.js';
import './app.less'

export default class Index extends React.Component{
    render(){
        return(
            <V.Form store={store}>
                <StickyHeader className="message-page">
                    <div className="header">当前在线人数：{store.onLineNumber}</div>
                    <StickyFooter padding={false}>
                        <For each="item" of={store.messages} index="index">
                            <Message 
                                direction={index%2? 'left': 'right'} 
                                text={item.message} />
                        </For>
                        <div className="send-message-area">
                            <V.Input className="current-message" field="currentMsg" />
                            <Button className="send-button" size="small" type="default" onClick={store.send}>发送</Button>
                        </div>
                    </StickyFooter>
                </StickyHeader>
            </V.Form>
           
        )
    }
}

class Message extends React.Component{
    render(){
        let {direction, text} = this.props;
        let clazz = classnames('single-message', { 
            'direction-left': direction === 'left',
            'direction-right': direction === 'right',
        })
        return(
            <div className={clazz}>{text}</div>
        )
    }
}
