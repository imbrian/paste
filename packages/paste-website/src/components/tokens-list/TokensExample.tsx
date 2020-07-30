import * as React from 'react';
import * as lodash from 'lodash';
import {ThemeShape, useTheme} from '@twilio-paste/theme';
import {Absolute, AbsoluteProps} from '@twilio-paste/absolute';
import {Box, BoxProps} from '@twilio-paste/box';
import {Text, TextProps} from '@twilio-paste/text';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {LineHeight, BoxShadowOptions} from '@twilio-paste/style-props';
import ColorCombos, {ColorCombinationAccessibility} from '../../utils/color-combos';
import colorRating from '../../utils/color-rating';

// Traditional import as the color package isn't exported and typed correctly
const Color = require('color');

type BackgroundColor = Pick<AbsoluteProps, 'backgroundColor'>;
export const ColorBox: React.FC<BackgroundColor> = ({backgroundColor}) => {
  return <Absolute backgroundColor={backgroundColor} padding="space50" preset="fill" />;
};

type BorderBoxProp = Pick<BoxProps, 'borderColor' | 'borderWidth'>;
interface BorderBoxProps extends BorderBoxProp {
  boxColor: string;
}
export const BorderBox: React.FC<BorderBoxProps> = ({boxColor, borderColor, borderWidth}) => {
  let isInverse = false;
  if (boxColor.includes('inverse')) {
    isInverse = true;
  }
  return (
    <Absolute
      alignItems="center"
      backgroundColor={isInverse ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
      display="flex"
      padding="space60"
      preset="fill"
    >
      <Box
        borderStyle="solid"
        borderColor={borderColor}
        borderWidth={borderWidth || 'borderWidth20'}
        padding="space60"
        width="100%"
      />
    </Absolute>
  );
};

type TextBoxProp = Pick<TextProps, 'fontFamily' | 'fontSize' | 'fontWeight'>;
export const TextBox: React.FC<TextBoxProp> = ({fontFamily, fontSize, fontWeight}) => {
  let lineHeight: LineHeight = 'lineHeight70';
  if (fontSize != null && typeof fontSize === 'string') {
    lineHeight = `lineHeight${fontSize.replace('fontSize', '')}` as LineHeight;
  }
  return (
    <Text
      as="p"
      fontFamily={fontFamily}
      fontSize={fontSize || 'fontSize70'}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      Ag
    </Text>
  );
};

type TextColorBoxProp = Pick<TextProps, 'color'>;
interface TextColorBoxProps extends TextColorBoxProp {
  boxColor: string;
}
export const TextColorBox: React.FC<TextColorBoxProps> = ({boxColor, color}) => {
  const theme = useTheme();
  const colorFn = Color(boxColor);
  let isInverse;
  if (color !== 'colorTextWeaker') {
    isInverse = colorFn.isLight();
  }
  if (color === 'colorTextInverseWeaker') {
    isInverse = false;
  }
  const backgroundColorValue = isInverse
    ? theme.backgroundColors.colorBackgroundInverse
    : theme.backgroundColors.colorBackgroundBody;
  const colorCombos = ColorCombos([boxColor, backgroundColorValue]);
  const {accessibility} = colorCombos[1].combinations[0];

  const getContrastRating = (acc: ColorCombinationAccessibility): string => {
    const rating = colorRating(acc);
    return rating.small;
  };

  return (
    <Absolute
      alignItems="center"
      backgroundColor={isInverse ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
      display="flex"
      justifyContent="space-between"
      padding="space60"
      preset="fill"
    >
      <Text as="span" fontSize="fontSize70" lineHeight="lineHeight70" color={color}>
        <ScreenReaderOnly>Example text: </ScreenReaderOnly>Ag
      </Text>
      <Text as="span" fontSize="fontSize50" lineHeight="lineHeight50" color={color}>
        <ScreenReaderOnly>Accessibility rating: </ScreenReaderOnly>
        {getContrastRating(accessibility)}
      </Text>
    </Absolute>
  );
};

type RadiiBoxProps = Pick<BoxProps, 'borderRadius'>;
export const RadiiBox: React.FC<RadiiBoxProps> = ({borderRadius}) => {
  return (
    <Box
      backgroundColor="colorBackgroundBrand"
      borderRadius={borderRadius}
      padding="space60"
      display={borderRadius === 'borderRadiusCircle' ? 'inline-block' : undefined}
    />
  );
};

interface ShadowBoxProps extends BoxProps {
  boxColor: string;
  shadow?: string;
}
export const ShadowBox: React.FC<ShadowBoxProps> = ({boxColor, shadow}) => {
  let isInverse = false;
  if (boxColor.includes('inverse') || boxColor.includes('light') || boxColor.includes('lighter')) {
    isInverse = true;
  }
  return (
    <Absolute
      alignItems="center"
      backgroundColor={isInverse ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
      display="flex"
      padding="space60"
      preset="fill"
    >
      <Box borderRadius="borderRadius20" boxShadow={shadow as BoxShadowOptions} padding="space60" width="100%" />
    </Absolute>
  );
};

type SpacingBoxProps = Pick<BoxProps, 'padding'>;
export const SpacingBox: React.FC<SpacingBoxProps> = ({padding}) => {
  return (
    <Box backgroundColor="colorBackgroundBrand" display="inline-block" paddingLeft={padding} paddingTop={padding} />
  );
};

interface TokenExampleProps {
  children?: React.ReactElement;
  token: {
    name: string;
    value: string;
    comment: string;
    category: string;
  };
}
export const TokenExample: React.FC<TokenExampleProps> = ({token}) => {
  const tokenName = lodash.camelCase(token.name);
  switch (token.category) {
    case 'background-color':
      return <ColorBox backgroundColor={tokenName as keyof ThemeShape['backgroundColors']} />;
    case 'color':
      return <ColorBox backgroundColor={token.value as any} />;
    case 'border-color':
      return <BorderBox boxColor={token.name} borderColor={tokenName as keyof ThemeShape['borderColors']} />;
    case 'border-width':
      return <BorderBox boxColor={token.name} borderWidth={tokenName as keyof ThemeShape['borderWidths']} />;
    case 'font':
      return <TextBox fontFamily={tokenName as keyof ThemeShape['fonts']} />;
    case 'font-size':
      return <TextBox fontSize={tokenName as keyof ThemeShape['fontSizes']} />;
    case 'font-weight':
      return <TextBox fontWeight={tokenName as keyof ThemeShape['fontWeights']} />;
    case 'radius':
      return <RadiiBox borderRadius={tokenName as keyof ThemeShape['radii']} />;
    case 'box-shadow':
      return <ShadowBox boxColor={token.name} shadow={token.value} />;
    case 'spacing':
      return <SpacingBox padding={tokenName as keyof ThemeShape['space']} />;
    case 'text-color':
      return <TextColorBox boxColor={token.value} color={tokenName as keyof ThemeShape['textColors']} />;
    default:
      return <Box>{token.value}</Box>;
  }
};
