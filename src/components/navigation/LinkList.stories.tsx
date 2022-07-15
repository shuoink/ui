import type {FC} from 'react';
import Component from './LinkList.js';
import Hyperlink from './Hyperlink.js';

const meta = {
  title: 'Base/Navigation/Link List',
  component: Component,
};

export const LinkList: FC = () => (
  <Component heading="Heading">
    <Hyperlink gray href="#">
      one
    </Hyperlink>
    <Hyperlink gray href="#">
      two
    </Hyperlink>
    <Hyperlink gray href="#">
      three
    </Hyperlink>
  </Component>
);

export default meta;
