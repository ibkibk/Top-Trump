import PropTypes from "prop-types";

// Using propTypes to define the data types for the 'skills' object

export const skillsTypes = PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));

// Using propTypes to define the data types for
// the props object passed to the card component

export const cardTypes = {
  cardData: PropTypes.shape({
    selectCard: PropTypes.func,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    skills: skillsTypes
  })
};
