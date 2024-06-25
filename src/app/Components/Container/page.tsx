import { UniqueIdentifier } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import clsx from 'clsx';



import React, { useState } from 'react'

type ContainerProps = {
    id: UniqueIdentifier;
    children: React.ReactNode;
    title?: string;
    description?: string;
    closeMe: boolean
    onAddItem?: () => void;
}



const Container = ({
    id,
    children,
    title,
    description,
    onAddItem,
    closeMe
}: ContainerProps) => {
    const [hide, setHide] = useState<string>('');

    const {
        attributes,
        setNodeRef,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: id,
        data: {
            type: 'container'
        },
    });

    const hanldeCheck = () => {
        console.log(id)
        console.log(title)
        console.log(children)
        console.log(description)
        console.log(closeMe)
    }

    return (
        <div
            onClick={() => alert("hi")}
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            style={{
                transition,
                transform: CSS.Translate.toString(transform),
            }}
            className={clsx(
                'w-full h-full p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4',
                isDragging && 'opacity-50', hide
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-gray-800 text-xl">{title}</h1>

                </div>
                <button
                    className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
                >
                    Drag Handle
                </button>
            </div>


            <button className='text-black' onClick={onAddItem}>
                Add Item
            </button>
            <input type="checkbox" className="checkbox" />

            <button className='text-black' onClick={(e) => { closeMe = false, hanldeCheck(), setHide("hidden") }}>
                Remove
            </button>
        </div>
    )
}

export default Container
