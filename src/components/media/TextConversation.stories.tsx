import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import type {TextDescriptor} from './TextConversation';
import {TextConversation, TextMessage} from './TextConversation';

const meta: Meta = {
  title: 'Media/TextConversation',
  component: TextConversation,
};

export const MessageFromThem: VFC = () => (
  <TextMessage from="them">Hey man!</TextMessage>
);

export const MessageFromMe: VFC = () => (
  <TextMessage from="me">sup</TextMessage>
);

const TEXTS: Array<TextDescriptor> = [
  {id: 0, from: 'them', text: 'Veniam reiciendis esse'},
  {id: 1, from: 'me', text: 'Totam est dolores'},
  {
    id: 2,
    from: 'them',
    text: 'Incidunt ea iure assumenda facilis dicta mollitia quasi aut voluptates',
  },
  {
    id: 3,
    from: 'me',
    text: 'Eos numquam sunt iste quia iusto occaecati pariatur itaque',
  },
  {
    id: 4,
    from: 'them',
    text: 'Maxime dolor nobis error dolorem ducimus repellendus pariatur fugiat corporis',
  },
  {id: 5, from: 'me', text: 'Voluptatum voluptates voluptates facilis ea vel'},
  {
    id: 6,
    from: 'them',
    text: 'Cupiditate dolorem possimus dolores ipsa repellat quo voluptatem',
  },
  {id: 7, from: 'me', text: 'Cum eveniet et eum totam quo ex'},
  {
    id: 8,
    from: 'them',
    text: 'Laboriosam quas eveniet quod ut velit sunt praesentium reiciendis commodi',
  },
  {
    id: 9,
    from: 'me',
    text: 'Consequatur aut reprehenderit deserunt numquam et',
  },
  {
    id: 10,
    from: 'them',
    text: 'Accusantium ut ipsam consequatur quis minus nemo commodi explicabo',
  },
  {id: 11, from: 'me', text: 'Eaque est totam est quia'},
  {id: 12, from: 'them', text: 'Facilis et itaque harum provident'},
  {id: 13, from: 'me', text: 'Sed aut vero assumenda dolore laudantium'},
  {id: 14, from: 'them', text: 'Ipsum culpa magnam explicabo'},
  {id: 15, from: 'me', text: 'Et fugit dolorem'},
  {
    id: 16,
    from: 'them',
    text: 'Quis voluptas repellat eius non dolorem autem dignissimos sit aut',
  },
  {id: 17, from: 'me', text: 'Qui iure atque qui occaecati'},
  {
    id: 18,
    from: 'them',
    text: 'Eveniet ipsam eius dignissimos vel fuga rerum nesciunt',
  },
  {id: 19, from: 'me', text: 'Libero animi molestiae'},
  {id: 20, from: 'them', text: 'Quia non libero praesentium'},
  {
    id: 21,
    from: 'me',
    text: 'Ab maxime culpa non sint suscipit pariatur vel quam',
  },
  {id: 22, from: 'them', text: 'Harum odit consequatur esse dolor aut'},
  {id: 23, from: 'me', text: 'Vel dolores perferendis hic voluptatem sed et'},
];

export const Conversation: VFC = () => (
  <div className="flex flex-col h-[48rem] w-96 border border-black bg-white">
    <TextConversation texts={TEXTS} />
  </div>
);

export default meta;
