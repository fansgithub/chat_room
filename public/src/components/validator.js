import {Validator, Toptip} from 'h5-components';
import i18n from 'i18n';

Validator.validator.i18n = (message, params) => {
    return Toptip.error(i18n.t(message, params));
};

export default Validator;