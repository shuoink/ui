# Components

- Feedback
  - [x] Alert
  - [ ] Toaster
  - [ ] Tooltip
- Layout
  - [x] Dialog
  - [x] Collapsible
  - [x] Accordion
  - [x] AccordionSection
  - [ ] TabLayout
  - [ ] TileGrid
  - [ ] Corset
  - [x] Section
  - [x] MasonryGrid
  - [x] Card
  - [ ] Tile
- Form Layout
  - [x] Label
  - [x] FieldGroup
- Form Controls

  - [x] Checkbox
  - [x] Input
  - [x] Select
  - [x] Radio
  - [x] Radios (accepts `<option />` elements, like `<select />`)
  - [x] TextArea
  - [x] Button
  - [x] LinkButton
  - [ ] Slider
  - [ ] Color
  - [ ] Date
  - [ ] Time
  - [ ] DateTime
  - [ ] Email
  - [ ] File
  - [ ] Month
  - [ ] Number
  - [ ] Password
  - [ ] Search
  - [ ] Phone
  - [ ] URL Input
  - [ ] Week Input

- Navigation
  - [x] HyperLink
  - [x] ButtonLink
  - [ ] TopNav
  - [ ] SideNav
  - [ ] TreeNav
  - [ ] Menu
  - [ ] Table
  - [x] SkipNav
  - [ ] Tab
- Misc
  - [ ] Disclaimer
  - [x] Backdrop
- Animation
  - [ ] FlyUp
  - [ ] FlyDown
  - [ ] FlyLeft
  - [ ] FlyRight
- Media
  - [ ] BackgroundVideo
- Icons
  - [ ] CollapsibleIcon
  - [ ] ...other icons

# Checks

- [ ] Make sure all form controls can be both controlled and uncontrolled

# Make sure all components can be restyled by accepting functions for className/style

```js
<Component style={({styles}) => ({...styles, height: 0})} />
<Component className={({className}) => `${className} p-2`} />

// for components with multiple children that need styles/classes
<Component
  style={({styles}) => ({
    ...styles,
    wrapper: {...styles.wrapper, height: 0}
  })}
/>
<Component
  className={({className}) => ({
    ...className,
    wrapper: `${className} p-2`
  })}
/>
```

# For components without single styled elements & when passing className as a string, it should override the classes completely

```js
<Component className="p-2" />
```

# For components without single styled elements & when passing style as an object, it should override the styles completely

```js
<Component style={{zIndex: 1}} />
```

# For components with multiple styled elements, the same applies except that the user must provide an object that tells us where to put it

```js
<Component
  style={{
    wrapper: {zIndex: 1},
  }}
  className={{
    wrapper: 'p-2',
  }}
/>
```
