import PropTypes from 'prop-types';

PropTypes.ArrayLike = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
        length: PropTypes.number.isRequired
    })
]);