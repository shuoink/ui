import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {MdAddToPhotos, MdClose} from 'react-icons/md';
import {TabButton} from '../buttons/TabButton';
import {Button} from '../buttons/Button';
import {TabLink} from '../navigation/TabLink';
import {TabButtonGroup} from '../buttons/TabButtonGroup';
import {Tabs as Component} from './Tabs';

const meta: Meta = {
  title: 'Base/Layout/Tabs',
  component: Component,
};

export const Tabs: VFC = () => (
  <>
    <Component>
      <TabButton>button</TabButton>
      <TabLink href="#">link</TabLink>
    </Component>
    <div className="border w-48 h-48" />
  </>
);

export const LotsOfTabs: VFC = () => (
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
