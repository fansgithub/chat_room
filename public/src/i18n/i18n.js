import i18next from 'i18next';
import _ from 'lodash';
import component from 'h5-components-i18n';
import enUS from './en-US.js';
import zhCN from './zh-CN.js';

i18next.init({
    debug: false,
    lng: 'zh-CN',
    returnObjects: true,
    resources: {
        'en-US': {
            translation: _.merge(component.enUS, enUS)
        },
        'zh-CN': {
            translation: _.merge(component.zhCN, zhCN)
        }
    }
});

export default i18next;