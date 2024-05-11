import { Listbox,ListboxButton,ListboxOption, Transition } from '@headlessui/react'
import {Fragment,React} from 'react'

function ListBox() {
    const options = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Shop', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
    ]
  return (
    <div>
        <Listbox >
            {({open})=>(
                <>
                <ListboxButton>
                <span className="block truncate">Dashboard</span>
            </ListboxButton>
            <Transition as={Fragment}
             show={open}
              as={Fragment}>

              </Transition>
              </>
            )}
            

        </Listbox>
    </div>
  )
}

export default ListBox