# Custom Dropdown Component

## Description

A customizable and reusable dropdown component for React applications that supports both single-select and multi-select options.

## Table of Contents

- [API](#api)
- [Usage](#usage)
  - [Single Select](#single-select)
  - [Multi Select](#multi-select)
- [Notes](#notes)
- [How to Run](#how-to-run)

## API

The `Dropdown` component accepts the following properties:

| Property        | Type             | Description                                 | Required |
| --------------- | ---------------- | ------------------------------------------- | -------- |
| selectedOptions | array of strings | Currently selected options                  | Yes      |
| onChange        | function         | Callback function when selection changes    | No       |
| options         | array of strings | Available options to choose from            | Yes      |
| placeholder     | string           | Placeholder text when no option is selected | No       |
| multiselect     | bool             | Enables multi-select mode                   | No       |

## Usage

### Single Select

Use the `Dropdown` component to create a single-select dropdown.

```jsx
import React, { useState } from 'react';
import Dropdown from './Dropdown';

function MySingleSelectComponent() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <h2>Single Select Dropdown Example</h2>
      <Dropdown
        selectedOptions={selectedOptions}
        onChange={(selected) => setSelectedOptions(selected)}
        options={options}
        placeholder="Select an option..."
        label="Select:"
      />
    </div>
  );
}

export default MySingleSelectComponent;
```

#### Demo

https://github.com/skchetu/custom-dropdown-component/assets/35510454/62947748-9038-4f9e-9e16-6d343bca00fe

https://github.com/skchetu/custom-dropdown-component/assets/35510454/b15e4a2f-ebea-4a12-934e-2478f0679a13

### Multi Select

Use the `Dropdown` component to create a multi-select dropdown.

```jsx
import React, { useState } from 'react';
import Dropdown from './Dropdown';

function MyMultiSelectComponent() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ['Option A', 'Option B', 'Option C'];

  return (
    <div>
      <h2>Multi Select Dropdown Example</h2>
      <Dropdown
        selectedOptions={selectedOptions}
        onChange={(selected) => setSelectedOptions(selected)}
        options={options}
        placeholder="Select multiple options..."
        label="Select:"
        multiselect
      />
    </div>
  );
}

export default MyMultiSelectComponent;
```

#### Demo

https://github.com/skchetu/custom-dropdown-component/assets/35510454/25fac274-d5fe-4bbb-bd56-acc4fe3bc110

## Notes/ Improvements

- For better type checking, types and interfaces can be implemented to help with validating inputs and states
- The `selectedOptions` and `options` are set to take only array of strings. However, in a true reusuable component, an array of objects will most likely be provided to the component. For simplicity, only an arrays of strings can be used in this component.
- You can customize the styling of the `Dropdown` component by modifying the associated CSS.
  - Since this is aiming to be a reusable component, more styling properties can be made available for further customization.
- For more advanced configurations, adding ARIA attributes can be considered for accessibility.
- All colors and styling can be moved to a proper constants folder.

## How to Run

To run this React project for a very simple demo, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/skchetu/custom-dropdown-component.git
   ```

2. Change your working directory to the project folder:

   ```
   cd custom-dropdown-component
   ```

3. Install project dependencies using npm:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

The application should open in your default web browser. If not, you can access it at [http://localhost:3000](http://localhost:3000).

Now, you can interact with the single-select and multi-select dropdown components.
