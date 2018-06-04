import React from 'react';
import { observer } from 'mobx-react';
import i18n from 'i18n';
import { StickyFooter, Button, List, Cell, Validator as V, } from 'h5-components';
import _ from 'lodash';
import utils from 'utils';
import store from './index.js';

@observer
export default class Register extends React.Component{
    componentWillMount(){

    }

    render(){
        return (
            <StickyFooter>
                <V.Form store={store}>
                    <List>
                        <Cell label="用户名" arrow={true} required={true}>
                            <V.Input field="username" />
                        </Cell>
                        <Cell label="密码" arrow={true} required={true}>
                            <V.Input field="password" type="password" />
                        </Cell>
                        <Cell label="昵称" arrow={true} required={true}>
                            <V.Input field="nickName" />
                        </Cell>
                        <Cell label="性别" arrow={true} required={true}>
                            <V.Select field="gender" options={store.genderList} />
                        </Cell>
                    </List>
                </V.Form>
                <Button type="primary" onClick={store.submit}>注册</Button>
            </StickyFooter>
        );
    }
}