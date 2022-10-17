import React from 'react';
import {GridComponent, ColumnsDirective,ColumnDirective,Resize,Sort,Search,Toolbar,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids';
import {ordersData, contextMenuItems,ordersGrid} from '../data/dummy';
import {Header} from '../components';

const Orders = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:opacity-50">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
       allowPaging
       allowSorting
       toolbar={['Search']}
      >
        <ColumnsDirective>
          {ordersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Search,Toolbar,Sort, ContextMenu,Filter, Page,ExcelExport,Edit,PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders