import { CircleQuestionMarkIcon, PenSquareIcon, Trash2Icon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
import toast from 'react-hot-toast';

import {formatDate} from '../lib/utils.js';
import api from '../lib/axios.js';

const NoteCard = ({note, setNotes}) => {

    const handleDelete = () => {
        try {
            toast((t) => (
                <span className='flex items-center gap-4'>
                    <CircleQuestionMarkIcon className='size-6'/>
                    DELETE?
                    <button 
                        onClick={ 
                            async() => {
                                try {
                                    await api.delete(`/notes/${note._id}`)
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
        } catch (error) {
            console.log("ERROR IN DELETEING NOTE")
        }
    }

  return (
    <div className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#FFFFFF]'>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <Link to={`/note/${note._id}`} className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4' />
                </Link>
                <div className='flex items-center gap-1'>
                    <button className='btn btn-ghost btn-xs text-error' onClick={handleDelete}>
                        <Trash2Icon className='size-4' />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoteCard;
