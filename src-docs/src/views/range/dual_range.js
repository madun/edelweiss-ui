import React, { useState } from 'react';

import { EuiDualRange, EuiSpacer, EuiTitle } from '../../../../src/components';

import { useGeneratedHtmlId } from '../../../../src/services';

export default () => {
  const [value, setValue] = useState(['100', '150']);
  const [value2, setValue2] = useState(['40', '60']);

  const basicRangeSliderId = useGeneratedHtmlId({ prefix: 'basicRangeSlider' });
  const draggableRangeSliderId = useGeneratedHtmlId({
    prefix: 'draggableRangeSlider',
  });

  return (
    <>
      <EuiDualRange
        id={basicRangeSliderId}
        min={0}
        max={300}
        step={10}
        value={value}
        onChange={setValue}
        showLabels
        aria-label="An example of EuiDualRange"
      />

      <EuiSpacer size="xl" />

      <EuiTitle size="xxs">
        <h3>Draggable highlight area</h3>
      </EuiTitle>

      <EuiSpacer size="l" />

      <EuiDualRange
        id={draggableRangeSliderId}
        min={0}
        max={100}
        step={1}
        value={value2}
        onChange={setValue2}
        showLabels
        aria-label="An example of EuiDualRange with isDraggable='true'"
        isDraggable
      />
    </>
  );
};
