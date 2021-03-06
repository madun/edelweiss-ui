import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiText } from '../../../../src/components';

export const GuideRuleDescription = ({
  children,
  className,
  heading,
  description,
  ...rest
}) => {
  const classes = classNames('guideRule__description', className);

  let headingNode;

  if (heading) {
    headingNode = <h3>{heading}</h3>;
  }

  let descriptionNode;
  if (typeof description === 'string') {
    descriptionNode = <p>{description}</p>;
  } else {
    descriptionNode = description;
  }

  return (
    <div className={classes} {...rest}>
      <EuiText grow={false}>
        {headingNode}
        {descriptionNode}
      </EuiText>

      {children}
    </div>
  );
};

GuideRuleDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.node.isRequired,
};
