import { storiesOf } from '@storybook/svelte';
import QuantilePlotExample01 from './QuantilePlotExample01.svelte';
import QuantilePlotExample02 from './QuantilePlotExample02.svelte';

import ScalarAggregation from './ScalarAggregation.svelte';
import HistogramAggregation from './HistogramAggregation.svelte';

import '../../../public/global.css';
import './shared.css';

storiesOf('Data Graphics|Quantile Plot', module)
  .add('gc_ms (exponential histogram)', () => ({
    Component: QuantilePlotExample01,
  }))
  .add('histogram aggregation', () => ({
    Component: HistogramAggregation,
  }))
  .add('browser_engagement_active_ticks', () => ({
    Component: ScalarAggregation,
  }))
  .add('browser_engagement_tab', () => ({
    Component: QuantilePlotExample02,
  }));
