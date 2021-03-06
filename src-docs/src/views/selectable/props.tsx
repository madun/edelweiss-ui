import React, { FunctionComponent } from 'react';
import {
  EuiSelectableOption,
  EuiSelectableOptionsListProps,
  EuiSelectableSearchableSearchProps,
} from '../../../../src/components/selectable';

import {
  EuiSelectableTemplateSitewideOption,
  EuiSelectableTemplateSitewideMetaData,
} from '../../../../src/components/selectable/selectable_templates/selectable_template_sitewide_option';

export const EuiSelectableOptionProps: FunctionComponent<EuiSelectableOption> = () => (
  <div />
);

export const EuiSelectableOptionsList: FunctionComponent<EuiSelectableOptionsListProps> = () => (
  <div />
);

export const EuiSelectableSearchProps: FunctionComponent<EuiSelectableSearchableSearchProps<
  any
>> = () => <div />;

export const Options: FunctionComponent<EuiSelectableTemplateSitewideOption> = () => (
  <div />
);

export const MetaData: FunctionComponent<EuiSelectableTemplateSitewideMetaData> = () => (
  <div />
);
