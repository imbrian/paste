/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductBillingIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductBillingIcon: React.FC<ProductBillingIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductBillingIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M20.438 9.273c.149 0 .292.057.397.16a.537.537 0 01.165.385v6.546c-.001.903-.756 1.635-1.688 1.636H6.938a.554.554 0 01-.562-.545c0-.302.252-.546.563-.546h12.375c.31 0 .562-.244.562-.545V9.818c0-.144.06-.283.165-.386a.572.572 0 01.398-.16zM17.063 6c.931.001 1.686.733 1.687 1.636v6.546c-.001.903-.756 1.635-1.688 1.636H4.688c-.931 0-1.686-.733-1.687-1.636V7.636c.001-.903.756-1.635 1.688-1.636zm0 1.09H4.688a.555.555 0 00-.563.546v6.546c0 .3.252.545.563.545h12.375c.31 0 .562-.244.562-.545V7.636a.555.555 0 00-.563-.545zM15.655 12c.466 0 .843.367.844.818a.831.831 0 01-.844.818.831.831 0 01-.844-.818c0-.452.378-.818.844-.818zm-4.781-3.818c1.553.002 2.81 1.222 2.813 2.727 0 1.506-1.26 2.727-2.813 2.727-1.553 0-2.813-1.22-2.813-2.727 0-1.506 1.26-2.727 2.813-2.727zm0 1.09c-.932 0-1.688.733-1.688 1.637s.756 1.636 1.688 1.636c.932 0 1.686-.733 1.688-1.636 0-.904-.756-1.636-1.688-1.636zm-4.781-1.09c.465 0 .843.366.843.818a.831.831 0 01-.843.818A.831.831 0 015.25 9c0-.452.378-.818.844-.818z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductBillingIcon.displayName = 'ProductBillingIcon';
export {ProductBillingIcon};
