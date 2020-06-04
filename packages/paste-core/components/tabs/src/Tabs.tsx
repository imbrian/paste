import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Flex} from '@twilio-paste/flex';
import {BoxProps} from '@twilio-paste/box';
import {useTabPrimitiveState, TabPrimitiveInitialState} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';

export type TabsProps = TabPrimitiveInitialState & Pick<BoxProps, 'element'>;

// Set orientation to horizontal because undefined enables all arrow key movement
const Tabs: React.FC<TabsProps> = ({children, element = 'TABS', orientation = 'horizontal', ...initialState}) => {
  const tab = useTabPrimitiveState({orientation, ...initialState});
  const value = React.useMemo(() => tab, Object.values(tab));
  const returnValue = <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;

  if (tab.orientation === 'vertical') {
    return (
      <Flex element={`${element}_VERTICAL`} wrap={false} vAlignContent="stretch">
        {returnValue}
      </Flex>
    );
  }
  return returnValue;
};

if (process.env.NODE_ENV === 'development') {
  Tabs.propTypes = {
    selectedId: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical', null]),
  };
}

Tabs.displayName = 'Tabs';
export {Tabs};
