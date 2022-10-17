import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change =(args) =>{
  // document.getElementById('hexval').textContent=args.currentValue.hex;
  document.getElementById('preview').style.backgroundColor=args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:opacity-50">
    <Header category="App" title="Color Picker"/>
      <div className='text-center'>
        <div id="preview"/> 
        {/* <div id="hexval"/> */}
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent 
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false }
              change={change}
            />
          </div>

          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent 
              id="inline-pallette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false }
              change={change}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ColorPicker