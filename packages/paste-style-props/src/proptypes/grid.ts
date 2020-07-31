import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from './utils/propValidator';

// Tokens
const GridColumGapOptions = Object.keys(DefaultTheme.space);

export const isGridColumnGapTokenProp = propValidator(GridColumGapOptions);
