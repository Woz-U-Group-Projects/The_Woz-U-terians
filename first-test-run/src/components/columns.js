export const COLUMNS = [
  {
    Header: 'Product Id',
    Footer: 'Product Id',
    accessor: 'product_id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Phone Model',
    Footer: 'Phone Model',
    accessor: 'phone_model',
    sticky: 'left'
  },
  {
    Header: 'Phone Manufacturer',
    Footer: 'Phone Manufacturer',
    accessor: 'phone_manufacturer',
    sticky: 'left'
  },
  {
    Header: 'Memory Capacity',
    Footer: 'Memory Capacity',
    accessor: 'memory_capacity'
  },
  {
    Header: 'Color',
    Footer: 'Color',
    accessor: 'color'
  },
  {
    Header: 'Quantity On Hand',
    Footer: 'Quantity On Hand',
    accessor: 'quantity_on_hand'
  },
  {
    Header: 'On Order',
    Footer: 'On Order',
    accessor: 'on_order'
  },
  {
    Header: 'In Transit',
    Footer: 'In Transit',
    accessor: 'in_transit'
  },
  {
    Header: 'Anticipated Sales',
    Footer: 'Anticipated Sales',
    accessor: 'anticipated_sales'
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Product Id',
    Footer: 'Product Id',
    accessor: 'product_id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'Phone Model',
        Footer: 'Phone Model',
        accessor: 'phone_model'
      },
      {
        Header: 'Phone Manufacturer',
        Footer: 'Phone Manufacturer',
        accessor: 'phone_manufacturer'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Memory Capacity',
        Footer: 'Memory Capacity',
        accessor: 'memory_capacity'
      },
      {
        Header: 'Color',
        Footer: 'Color',
        accessor: 'color'
      },
      {
        Header: 'Quantity On Hand',
        Footer: 'Quantity On Hand',
        accessor: 'quantity_on_hand'
      }
    ]
  }
]