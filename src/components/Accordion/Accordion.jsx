import React from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';

const Accordion = () => {
  return (
    <div>
      <BootstrapAccordion defaultActiveKey='0' flush>
        <BootstrapAccordion.Item eventKey='0'>
          <BootstrapAccordion.Header>
            BootstrapAccordion Item #1
          </BootstrapAccordion.Header>
          <BootstrapAccordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </BootstrapAccordion.Body>
        </BootstrapAccordion.Item>
        <BootstrapAccordion.Item eventKey='1'>
          <BootstrapAccordion.Header>
            BootstrapAccordion Item #2
          </BootstrapAccordion.Header>
          <BootstrapAccordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </BootstrapAccordion.Body>
        </BootstrapAccordion.Item>
      </BootstrapAccordion>
    </div>
  );
};

export default Accordion;
