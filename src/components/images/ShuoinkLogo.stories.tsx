import type {FC} from 'react';
import {ShuoinkLogo} from './ShuoinkLogo.js';

const meta = {
  title: 'Base/Images/Shuoink Logo',
  component: ShuoinkLogo,
};

export const FullSize: FC = () => <ShuoinkLogo />;

export const Small: FC = () => (
  <div className="w-16">
    <ShuoinkLogo />
  </div>
);

export default meta;
