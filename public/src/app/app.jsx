import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { Button, Validator as V, StickyHeader, StickyFooter  } from 'h5-components';
import store from './app.js';
import './app.less'
import { observer } from 'mobx-react';

@observer
export default class Index extends React.Component{
    componentWillMount(){
        store.createConnect();
    }
    render(){
        return(
            <StickyHeader className="message-page">
                <div className="header">当前在线人数：{store.onLineNumber}</div>
                <StickyFooter padding={false}>
                    <div className="messages-area">
                        <For each="item" of={store.messages} index="index">
                            <Message
                                key={index}
                                direction={item.userId?'right': 'left'} 
                                text={item.message}
                                source={item.source} />
                        </For>
                    </div>
                 
                    <V.Form store={store}>
                        <div className="send-message-area">
                            <V.Input className="current-message" field="currentMsg" />
                            <Button className="send-button" size="small" type="default" onClick={store.send}>发送</Button>
                        </div>
                    </V.Form>
                </StickyFooter>
            </StickyHeader>
        )
    }
}

class Message extends React.Component{
    render(){
        let {direction, text, source} = this.props;
        let clazz = classnames('single-message', { 
            'direction-left': direction === 'left',
            'direction-right': direction === 'right',
        })
        return(
            <Choose>
                <When condition={source === 'system'}>
                    <div className="system-message">{text}</div>
                </When>
                <Otherwise>
                    <div className={clazz}>
                        <div className="source">{source}</div>
                        <div className="message">
                            <If condition={direction === 'left'}>
                                <div>{text}</div>
                                <div></div>
                            </If>
                            <If condition={direction === 'right'}>
                                <div></div>
                                <div>{text}</div>
                            </If>
                        </div>
                    </div>
                </Otherwise>
            </Choose>
            
        )
    }
}
