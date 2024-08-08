export const useTimesheet = () => {
  const columns = [
    {
      name: 'status',
      label: 'Status',
      align: 'left',
      field: (row: any) => row.status,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: 'date',
      label: 'Date',
      align: 'left',
      field: (row: any) => row.date,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: 'day',
      label: 'Date',
      align: 'left',
      field: (row: any) => row.day,
      format: (val: any) => `${val}`,
      sortable: false,
    },
    {
      name: 'startTime',
      label: 'Start Time',
      align: 'left',
      field: (row: any) => row.startTime,
      format: (val: any) => `${val}`,
      sortable: false,
    },
    {
      name: 'endTime',
      label: 'End Time',
      align: 'left',
      field: (row: any) => row.endTime,
      format: (val: any) => `${val}`,
      sortable: false,
    },
    {
      name: 'dayType',
      label: 'Day Type',
      align: 'left',
      field: (row: any) => row.dayType,
      format: (val: any) => `${val}`,
      sortable: false,
    },
    {
      name: 'remarks',
      label: 'Remarks',
      align: 'left',
      field: (row: any) => row.remarks,
      format: (val: any) => `${val}`,
      sortable: false,
    },
  ]

  const timelogs = [
    {
      status: 'logged',
      date: '2024-08-10',
      day: 'Thursday',
      startTime: '06:00 AM',
      endTime: '03:00 PM',
      dayType: 'Regular',
      remarks: 'will be offsetting'
    },
  ] as any

  return { columns, timelogs }
}
