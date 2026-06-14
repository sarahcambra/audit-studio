import React, { useState } from 'react';
import { DueDate, DueDateDisplay, DatePickerModal } from '../../shared/ui/DueDate';
import { Card, Label } from 'flowbite-react';
import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default {
  title: 'Components/Data Display/DueDate',
  component: DueDate,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Due date display with color-coded urgency and inline date picker.',
      },
    },
  },
  argTypes: {
    date: {
      control: 'text',
      description: 'ISO date string (YYYY-MM-DD)',
    },
    showClear: {
      control: 'boolean',
      description: 'Show clear button when date is set',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState(new Date().toISOString().slice(0, 10));
    const [date3, setDate3] = useState(new Date(Date.now() + 86400000).toISOString().slice(0, 10));
    const [date4, setDate4] = useState(new Date(Date.now() + 5 * 86400000).toISOString().slice(0, 10));
    const [date5, setDate5] = useState(new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10));
    const [date6, setDate6] = useState(new Date(Date.now() - 86400000).toISOString().slice(0, 10));

    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DueDate</h1>
          <p className="text-gray-600">
            Smart due date display with color-coded urgency, relative dates, and inline picker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Examples */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Interactive Examples</h2>

            <Card>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">No date set</span>
                  <DueDate date={date1} onChange={setDate1} />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Overdue</span>
                  <DueDate date={date6} onChange={setDate6} />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Due today</span>
                  <DueDate date={date2} onChange={setDate2} />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Due tomorrow</span>
                  <DueDate date={date3} onChange={setDate3} />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Due in 5 days</span>
                  <DueDate date={date4} onChange={setDate4} />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-500">Due in 2 weeks</span>
                  <DueDate date={date5} onChange={setDate5} />
                </div>
              </div>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Features</h2>

            <Card>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary-600 shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Inline Date Picker</span>
                    <p className="text-gray-600">Click to open modal with calendar and quick presets</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Relative Dates</span>
                    <p className="text-gray-600">Shows "Today", "Tomorrow", "In 3 days" instead of full date</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary-600 shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Color-coded Urgency</span>
                    <p className="text-gray-600">Red for overdue/urgent, yellow for approaching, green for far out</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Quick Presets</span>
                    <p className="text-gray-600">Today, Tomorrow, +7 days, End of week, End of month</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="font-medium text-gray-900 mb-3">Color Legend</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-gray-600">Red: Overdue or less than 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-gray-600">Amber: 2-7 days until due</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-gray-600">Green: More than 7 days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  },
};

export const Playground = {
  name: 'Playground',
  render: () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    return (
      <div className="p-8 flex items-center justify-center min-h-[400px] bg-gray-50">
        <Card className="w-full max-w-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Due Date</h3>
              <p className="text-xs text-gray-500">Click to change</p>
            </div>
            <DueDate date={date} onChange={setDate} />
          </div>
        </Card>
      </div>
    );
  },
};

export const InlinePicker = {
  name: 'Inline Picker',
  render: () => {
    const [date, setDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8 max-w-xl mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Inline Date Picker</h2>
          <p className="text-gray-600 mb-6">
            The inline picker shows the date display with a calendar icon.
            Click to open the picker modal with quick presets.
          </p>
        </div>

        <Card>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-gray-700">Due Date</Label>
              <DueDateDisplay
                date={date}
                onClick={() => setIsOpen(true)}
                onClear={() => setDate('')}
              />
            </div>
          </div>
        </Card>

        <DatePickerModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          value={date}
          onChange={setDate}
          minDate={new Date()}
        />
      </div>
    );
  },
};

export const MinMaxDates = {
  name: 'With Date Restrictions',
  render: () => {
    const [date, setDate] = useState('');
    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    return (
      <div className="p-8 max-w-xl mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Date Restrictions</h2>
          <p className="text-gray-600 mb-6">
            Set minDate and maxDate to restrict selection range.
            This example only allows dates from today to next month.
          </p>
        </div>

        <Card>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium text-gray-700">Project Deadline</Label>
                <p className="text-xs text-gray-500">
                  Must be between {today.toLocaleDateString()} and {nextMonth.toLocaleDateString()}
                </p>
              </div>
              <DueDate
                date={date}
                onChange={setDate}
                minDate={today}
                maxDate={nextMonth}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  },
};
