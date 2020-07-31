// https://styled-system.com/api/#grid
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme';
import {ResponsiveValue} from '@twilio-paste/styling-library';

/**
 * The grid-auto-flow CSS property controls how the auto-placement algorithm works,
 * specifying exactly how auto-placed items get flowed into the grid.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
 */
export type GridAutoFlowOptions = CSS.Globals | CSS.GridAutoFlowProperty;
export type GridAutoFlow = ResponsiveValue<GridAutoFlowOptions>;

// tokens
export type GridColumnGapOptions = keyof ThemeShape['space'];
export type GridColumnGap = ResponsiveValue<GridColumnGapOptions>;

// Styled-system grouping
export interface GridProps {
  gridAutoFlow?: GridAutoFlow;
  gridColumnGap?: GridColumnGap;
}
