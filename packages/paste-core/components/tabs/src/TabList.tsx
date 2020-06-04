import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps} from '@twilio-paste/box';
import {TabPrimitiveList} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';

interface TabListProps extends Pick<BoxProps, 'element'> {
  'aria-label': string;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  children: React.ReactNode;
}

type TabListWrapperProps = Pick<BoxProps, 'element'>;

const HorizontalTabList: React.FC<TabListWrapperProps> = ({children, element}) => (
  <Box
    display="flex"
    element={`${element}_HORIZONTAL`}
    borderBottomWidth="borderWidth20"
    borderBottomColor="colorBorderLighter"
    borderBottomStyle="solid"
  >
    {children}
  </Box>
);

const VerticalTabList: React.FC<TabListWrapperProps> = ({children, element}) => (
  <Box
    borderRightWidth="borderWidth20"
    borderRightColor="colorBorderLighter"
    borderRightStyle="solid"
    element={`${element}_VERTICAL`}
    maxWidth="size30"
  >
    {children}
  </Box>
);

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({children, element = 'TAB_LIST', ...props}, ref) => {
  const tab = React.useContext(TabsContext);
  const TabListWrapper = tab.orientation === 'vertical' ? VerticalTabList : HorizontalTabList;
  return (
    <TabPrimitiveList {...(tab as any)} {...props} ref={ref}>
      <TabListWrapper element={element}>{children}</TabListWrapper>
    </TabPrimitiveList>
  );
});

if (process.env.NODE_ENV === 'development') {
  TabList.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    focusable: PropTypes.bool,
    disabled: PropTypes.bool,
  };
}

TabList.displayName = 'TabList';
export {TabList};
