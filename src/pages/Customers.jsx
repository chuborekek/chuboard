import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective,Page,Search,Selection,Inject,Edit, Toolbar,Sort,Filter} from '@syncfusion/ej2-react-grids';
import {customersData,customersGrid} from '../data/dummy';
import {Header} from '../components';

const Customers = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:opacity-50">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
       allowPaging
       allowSorting
       toolbar={['Search','Delete']}
       width="auto"
       editSettings={{allowDeleting:true,allowEditing:true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers