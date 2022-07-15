import type {FC} from 'react';
import {MdAddToPhotos, MdClose} from 'react-icons/md/index.js';
import TabButton from '../buttons/TabButton.js';
import Button from '../buttons/Button.js';
import TabLink from '../navigation/TabLink.js';
import TabButtonGroup from '../buttons/TabButtonGroup.js';
import Component from './Tabs.js';

const meta = {
  title: 'Base/Layout/Tabs',
  component: Component,
};

export const Tabs: FC = () => (
  <>
    <Component>
      <TabButton>button</TabButton>
      <TabLink href="#">link</TabLink>
    </Component>
    <div className="border w-48 h-48" />
  </>
);

export const LotsOfTabs: FC = () => (
  <>
    <Component>
      <TabButton>TabButton</TabButton>
      <TabLink href="#">TabLink</TabLink>
      <TabButtonGroup>
        <Button dock={{right: ['padding']}}>
          <MdAddToPhotos />
          TabButton
        </Button>
        <Button>
          <MdClose />
        </Button>
      </TabButtonGroup>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
      <TabButton>more</TabButton>
    </Component>
    <div className="border border-black w-48 h-48" />
  </>
);

export default meta;
