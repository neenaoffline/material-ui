import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'date-picker/date-picker';
import DatePickerDialog from 'date-picker/date-picker-dialog';
import injectTheme from '../fixtures/inject-theme';
import DateTime from 'utils/date-time';
import TestUtils from 'react-addons-test-utils';

describe(`DatePicker`, () => {
  let ThemedDatePicker;

  beforeEach(() => {
    ThemedDatePicker = injectTheme(DatePicker);
  });

  describe(`Dialog`, () => {
    it(`should be closed when closeDialog is called`, () => {
      let render = TestUtils.renderIntoDocument(
          <ThemedDatePicker />
      );

      let renderedDatePicker = TestUtils.findRenderedComponentWithType(render, DatePicker);

      let renderedDatePickerDialog =
                TestUtils.findRenderedComponentWithType(render, DatePickerDialog);

      expect(renderedDatePickerDialog.state.open).to.be.false;
      renderedDatePicker.openDialog();
      expect(renderedDatePickerDialog.state.open).to.be.true;
      renderedDatePicker.closeDialog();
      expect(renderedDatePickerDialog.state.open).to.be.false;
    });
  });
});
