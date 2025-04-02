import {TimelineEventItem} from "./module/timeline-event-item";

export function timelineData(): TimelineEventItem[] {
  return [
    {
      status: 'Initiate Transmission',
      date: new Date('2024-10-16 08:35:21.453'),
      description: 'The transmission has been initiated.'
    },
    {
      status: 'Error',
      date: new Date('2024-10-16 08:35:22.011'),
      description: 'Failed transmission.'
    },
    {
      status: 'Error',
      date: new Date('2024-10-16 08:35:22.012'),
      description: 'Failed transmission.'
    },
    {
      status: 'Error',
      date: new Date('2024-10-16 08:35:22.014'),
      description: 'Failed transmission.'
    },
    {
      status: 'Error',
      date: new Date('2024-10-16 08:35:22.016'),
      description: 'Failed transmission.'
    },
    {
      status: 'Unknown',
      date: new Date('2024-10-16 08:35:22.025'),
      description: 'Unknown event occurred and we do not know what it is or what caused it to occur.'
    },
    {
      status: 'Warning',
      date: new Date('2024-10-16 08:35:22.031'),
      description: 'Restarting transmissions due to excessive errors.'
    },
    {
      status: 'Transmitting Packets',
      date: new Date('2024-10-16 08:35:22.531'),
      description: 'The transmission is transmitting 3 packets.'
    },
    {
      status: 'Verify Checksum',
      date: new Date('2024-10-16 08:35:24.253'),
      description: 'The transmission is verifying the checksum.'
    },
    {
      status: 'Transmitting Packets',
      date: new Date('2024-10-16 08:35:26.168'),
      description: 'The transmission is transmitting 2 packets.'
    },
    {
      status: 'Verify Checksum',
      date: new Date('2024-10-16 08:35:28.530'),
      description: 'The transmission is verifying the checksum.'
    },
    {
      status: 'Transmitting Packets',
      date: new Date('2024-10-16 08:35:30.743'),
      description: 'The transmission is transmitting 8 packets.'
    },
    {
      status: 'Verify Checksum',
      date: new Date('2024-10-16 08:35:35.639'),
      description: 'The transmission is verifying the checksum.'
    },
    {
      status: 'End Transmission',
      date: new Date('2024-10-16 08:35:26.300'),
      description: 'The transmission has completed.'
    }
  ];
}
