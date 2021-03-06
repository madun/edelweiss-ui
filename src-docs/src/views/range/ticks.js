import React, { useState, Fragment } from 'react';

import {
  EuiRange,
  EuiSpacer,
  EuiTitle,
  EuiDualRange,
} from '../../../../src/components';

import { useGeneratedHtmlId } from '../../../../src/services';

export default () => {
  const [value, setValue] = useState('20');
  const [dualValue, setDualValue] = useState([20, 100]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onDualChange = (value) => {
    setDualValue(value);
  };

  const rangeBasicTicksId = useGeneratedHtmlId({ prefix: 'rangeBasicTicks' });
  const rangeCustomTickIntervalId = useGeneratedHtmlId({
    prefix: 'rangeCustomTickInterval',
  });
  const dualRangeBasicTicksId = useGeneratedHtmlId({
    prefix: 'dualRangeBasicTicks',
  });
  const dualRangeLongLabelsId = useGeneratedHtmlId({
    prefix: 'dualRangeLongLabels',
  });

  return (
    <Fragment>
      <EuiRange
        id={rangeBasicTicksId}
        step={10}
        value={value}
        onChange={onChange}
        showTicks
        aria-label="An example of EuiRange with ticks"
      />

      <EuiSpacer size="xl" />

      <EuiTitle size="xxs">
        <h3>Custom tick interval</h3>
      </EuiTitle>

      <EuiSpacer size="l" />

      <EuiRange
        id={rangeCustomTickIntervalId}
        value={value}
        onChange={onChange}
        showInput
        showRange
        showTicks
        tickInterval={20}
        aria-label="An example of EuiRange with custom tickInterval"
      />

      <EuiSpacer size="xl" />

      <EuiTitle size="xxs">
        <h3>Custom ticks object</h3>
      </EuiTitle>

      <EuiSpacer size="l" />

      <EuiDualRange
        id={dualRangeBasicTicksId}
        value={dualValue}
        onChange={onDualChange}
        showTicks
        ticks={[
          { label: '20kb', value: 20 },
          { label: '100kb', value: 100 },
        ]}
        showInput
        aria-label="An example of EuiDualRange with ticks"
      />

      <EuiSpacer size="xl" />

      <EuiTitle size="xxs">
        <h3>Long labels</h3>
      </EuiTitle>

      <EuiSpacer size="l" />

      <EuiDualRange
        id={dualRangeLongLabelsId}
        value={dualValue}
        onChange={onDualChange}
        showTicks
        ticks={[
          { label: '0 kilobytes', value: 0 },
          { label: '50 kilobytes', value: 50 },
          { label: '100 kilobytes', value: 100 },
        ]}
        aria-label="An example of EuiDualRange with long tick labels"
      />
    </Fragment>
  );
};
