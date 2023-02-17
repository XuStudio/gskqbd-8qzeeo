import { Gantt, Edit, Selection, Toolbar } from '@syncfusion/ej2-gantt';
import { baselineData } from './data-source';

/**
 * Baseline Gantt sample
 */
Gantt.Inject(Edit, Selection, Toolbar);

let gantt: Gantt = new Gantt({
  dataSource: baselineData,
  renderBaseline: true,
  taskFields: {
    id: 'taskID',
    name: 'taskName',
    milestone: 'milestone',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    progress: 'progress',
    dependency: 'dependency',
    notes: 'notes',
    child: 'subtasks',
    expandState: 'expandState',
    cssClass: 'cssClass',
    baselineStartDate: 'baselineStartDate',
    baselineEndDate: 'baselineEndDate',
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  toolbar: [
    'Add',
    'Edit',
    'Update',
    'Delete',
    'Cancel',
    'ExpandAll',
    'CollapseAll',
    'Indent',
    'Outdent',
    'ZoomIn',
    'ZoomOut',
    'ZoomToFit',
  ],
  columns: [
    {
      field: 'TaskId',
    },
    {
      field: 'TaskName',
      headerText: 'Service Name',
      width: '250',
      clipMode: 'EllipsisWithTooltip',
    },
    { field: 'BaselineStartDate', headerText: 'Planned start time' },
    { field: 'BaselineEndDate', headerText: 'Planned end time' },
    { field: 'StartDate', headerText: 'Start time' },
    { field: 'EndDate', headerText: 'End time' },
  ],
  treeColumnIndex: 1,
  allowSelection: true,
  includeWeekend: true,
  timelineSettings: {
    timelineUnitSize: 65,
    topTier: {
      unit: 'None',
    },
    bottomTier: {
      unit: 'Minutes',
      count: 15,
      format: 'hh:mm a',
    },
  },
  tooltipSettings: {
    taskbar: '#tooltip',
  },
  durationUnit: 'Minute',
  dateFormat: 'dd/MM/y hh:mm a',
  height: '450px',
  dayWorkingTime: [{ from: 0, to: 24 }],
  projectStartDate: new Date('03/05/2018 07:30:00 AM'),
  projectEndDate: new Date('03/05/2018 07:00:00 PM'),
});
gantt.appendTo('#Baseline');
