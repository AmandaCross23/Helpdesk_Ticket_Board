export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email sync failed',
      description: 'Email client not syncing since OS update.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Unassigned',
      updatedAt: '2025-11-01T09:12:00Z'
    },
    {
      id: 't-1003',
      title: 'Printer offline in building',
      description: 'Printer says offline but is powered and networked.',
      priority: 'Low',
      status: 'On Hold',
      assignee: 'Unassigned',
      updatedAt: '2025-10-22T16:00:00Z'
    },
    {
      id: 't-1004',
      title: 'Laptop battery not charging',
      description: 'Laptop battery stays at 0%.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Unassigned',
      updatedAt: '2025-10-29T08:45:00Z'
    },
    {
      id: 't-1005',
      title: 'Azure service outage?',
      description: 'Intermittent errors reaching cloud resources.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Unassigned',
      updatedAt: '2025-11-04T21:05:00Z'
    },
    {
      id: 't-1006',
      title: 'Cannot print PDFs from Chrome',
      description: 'PDFs print blank pages when printing from Chrome browser.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T11:20:00Z'
    },
    {
      id: 't-1007',
      title: 'Phone handset crackling',
      description: 'Call audio quality intermittent and crackly on desk phone.',
      priority: 'Low',
      status: 'On Hold',
      assignee: 'Unassigned',
      updatedAt: '2025-10-18T15:33:00Z'
    },
    {
      id: 't-1008',
      title: 'Two-factor auth reset',
      description: 'User lost access to MFA device and needs reset.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-05T07:50:00Z'
    },
    {
      id: 't-1009',
      title: 'Slow network on building B',
      description: 'Users reporting slow internet speeds since last firmware update.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Unassigned',
      updatedAt: '2025-11-02T13:14:00Z'
    },
    {
      id: 't-1010',
      title: 'New hire access request',
      description: 'Onboarding access to internal wiki and Slack for new hire.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Unassigned',
      updatedAt: '2025-10-10T09:00:00Z'
    },
    {
      id: 't-1011',
      title: 'Database backups failing',
      description: 'Nightly backups reported failures.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Unassigned',
      updatedAt: '2025-11-06T03:00:00Z'
    },
    {
      id: 't-1012',
      title: 'Broken badge reader',
      description: 'Employees does not badge after power outage.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-05T18:40:00Z'
    }
  ];

  return Response.json(tickets);
}
