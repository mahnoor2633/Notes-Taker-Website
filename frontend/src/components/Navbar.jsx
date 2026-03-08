import { BadgeQuestionMarkIcon, CircleQuestionMarkIcon, PlusIcon, TrashIcon } from 'lucide-react';
import React from 'react'
import toast from 'react-hot-toast';
import {Link} from 'react-router';
import api from '../lib/axios';

const Navbar = () => {

    const handleDelete = async() => {
        toast((t) => (
            <span className='flex items-center gap-4'>
                <CircleQuestionMarkIcon className='size-6'/>
                DELETE ALL?
                <button 
                    onClick={ 
                        async() => {
                            try {
                                await api.delete("/notes")
                                toast.dismiss(t.id)
                                window.location.reload(false);
                            } catch (error) {
                                comsole.error("FAILED TO DELETE");
                            }
                        }
                    } 
                    className='btn btn-secondary'
                >
                    YES
                </button>
            </span>
        ));
    }

  return (
    <header className='bg-base-200 border-b border-base-content/90'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text font-mong tracking-tight'>NOTES TAKER</h1>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className='btn btn-primary'>
                        <PlusIcon className='size-5' />
                        <span>New Note</span>
                    </Link>
                    <button onClick={handleDelete} className='btn btn-secondary'>
                        <TrashIcon className='size-5' />
                        <span>Delete All</span>
                    </button>
                </div>
            </div>
        </div>  
    </header>
  )
}

export default Navbar
