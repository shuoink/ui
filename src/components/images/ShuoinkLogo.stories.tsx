import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {ShuoinkLogo} from './ShuoinkLogo';

const meta: Meta = {
  title: 'Components/Images/Shuoink Logo',
  component: ShuoinkLogo,
};

export const FullSize: VFC = () => <ShuoinkLogo />;

export const Small: VFC = () => (
  <div className="w-16">
    <ShuoinkLogo />
  </div>
);

export default meta;
