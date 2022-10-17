import React from 'react';
import {GridComponent, ColumnsDirective,ColumnDirective,Search,Toolbar,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids';
import {employeesData, employeesGrid} from '../data/dummy';
import {Header} from '../components';

const Employees = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:opacity-50">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
       allowPaging
       allowSorting
       toolbar={['Search']}
       width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar,Resize, Sort, ContextMenu,Filter, Page,ExcelExport,Edit,PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Employees