import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Dropdown.css';
import { ClosedCaret, OpenedCaret } from '../Icons';

// Defines constants for special options
const NO_SELECTION_OPTION = '-';
const SELECT_ALL_OPTION = 'Select all';

// Defines dropdown component
function Dropdown({
  selectedOptions,
  onChange = () => {},
  options,
  label,
  placeholder = 'Select option(s)...',
  multiselect = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  // Checks if a single option is already selected
  const isOptionSelected = (option) => selectedOptions.includes(option);

  // Handles updating the selected options list given an option
  const handleSelectionChange = (option) => {
    if (isOptionSelected(option)) {
      onChange(selectedOptions.filter((selected) => selected !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  // Adds or removes all options from selectedOptions when "Select all" is toggled
  const toggleSelectAll = () => {
    if (selectAll) {
      onChange([]);
    } else {
      onChange(options);
    }
    setSelectAll(!selectAll);
  };

  // Checks if all options are selected and is evoked when user deselects an option while all are selected
  useEffect(() => {
    setSelectAll(selectedOptions.length === options.length);
  }, [selectedOptions, options]);

  // Renders the placeholder text
  const placeholderDisplay = (
    <div className="dropdown-placeholder">{placeholder}</div>
  );

  return (
    <div>
      <div className="dropdown">
        {/* Adds label to component */}
        {label && (
          <label className="dropdown-label" htmlFor="dropdown">
            {label}
          </label>
        )}
        <div
          className={`dropdown-btn ${isOpen ? 'open' : ''}`}
          onClick={(e) => setIsOpen(!isOpen)}
        >
          <span className="dropdown-text">
            {selectedOptions.length === 0
              ? placeholderDisplay
              : selectedOptions.join(', ')}
          </span>
          {isOpen ? <OpenedCaret /> : <ClosedCaret />}
        </div>
        {isOpen && (
          <div className="dropdown-content">
            {multiselect ? (
              // Adds 'Select all' option to menu to add/remove all options
              <div
                key={SELECT_ALL_OPTION}
                onClick={toggleSelectAll}
                className={`dropdown-item ${
                  selectAll ? 'selected-option' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={() => {}}
                />
                {SELECT_ALL_OPTION}
              </div>
            ) : (
              // Adds a null option that deselects a previously selected option
              <div
                key={NO_SELECTION_OPTION}
                onClick={() => {
                  onChange([]);
                  setIsOpen(false);
                }}
                className={`dropdown-item`}
              >
                {NO_SELECTION_OPTION}
              </div>
            )}
            {options.map((option) => (
              // Renders an item for each option in the input array
              <div
                key={option}
                onClick={() => {
                  if (multiselect) {
                    handleSelectionChange(option);
                  } else {
                    onChange([option]);
                    setIsOpen(false);
                  }
                }}
                className={`dropdown-item ${
                  isOptionSelected(option) ? 'selected-option' : ''
                }`}
              >
                {multiselect && (
                  <input
                    type="checkbox"
                    checked={isOptionSelected(option)}
                    onChange={() => {}}
                  />
                )}
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiselect: PropTypes.bool,
};

export default Dropdown;
